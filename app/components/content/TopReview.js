import Link from "next/link";
import { MdStar, MdStarHalf } from "react-icons/md"; // Whole star icon

const TopReviews = ({ reviews }) => {
    const totalReviews = reviews.length;

    // Count star ratings and calculate average
    const starCounts = [0, 0, 0, 0, 0]; // Index 0 = 5 stars, Index 1 = 4 stars, ..., Index 4 = 1 star
    let totalStars = 0;

    reviews.forEach(review => {
        if (review.givenStar >= 1 && review.givenStar <= 5) {
            starCounts[5 - review.givenStar] += 1; // Count reverse index for star ratings
            totalStars += review.givenStar; // Sum up stars for average calculation
        }
    });

    const avgStar = totalReviews > 0 ? (totalStars / totalReviews).toFixed(1) : 0;

    // Calculate whole, fractional, and empty stars
    const wholeStars = Math.floor(avgStar);
    const fractionalStar = avgStar - wholeStars;
    const emptyStars = 5 - Math.ceil(avgStar); // Calculate empty stars

    return (
        <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
            <h2 className="text-center font-semibold mb-4  text-xl">Reviews</h2>
            <div className="flex items-center justify-center  mb-2">

                <div className="bg-light-gray py-2 px-6 items-center flex rounded-full ">
                    <div className="flex items-center">
                        {/* Render whole stars */}
                        {[...Array(wholeStars)].map((_, index) => (
                            <MdStar key={index} className="text-yellow-500 h-6 w-6 sm:h-8 sm:w-8" />
                        ))}
                        {/* Render fractional star if present */}
                        {fractionalStar >= 0.25 && fractionalStar < 0.75 && (
                            <MdStarHalf className="text-yellow-500 h-6 w-6 sm:h-8 sm:w-8" />
                        )}
                        {/* Render empty stars */}
                        {[...Array(emptyStars)].map((_, index) => (
                            <MdStar key={index + wholeStars + (fractionalStar ? 1 : 0)} className="text-gray-300 h-6 w-6 sm:h-8 sm:w-8" />
                        ))}
                    </div>
                    <span className="text-gray-600 ml-2">
                        <span className="text-yellow-500 font-semibold"> {avgStar} </span> out of 5
                    </span>
                </div>

            </div>
            <p className="text-gray-600 text-center mb-4">Total Reviews: {totalReviews}</p>
            <div className="flex flex-col">
                {starCounts.map((count, index) => {
                    const starValue = 5 - index; // Calculate star value (5, 4, 3, 2, 1)
                    const percentage = totalReviews > 0 ? ((count / totalReviews) * 100).toFixed(1) : 0;

                    return (
                        <div key={index} className="flex items-center mb-2">
                            <span className="text-gray-800 font-semibold">{starValue} Star</span>
                            <span className="text-gray-600 ml-2 w-12">( {count} )</span>
                            <div className="flex-1 bg-light-gray h-4 rounded mx-4">
                                <div
                                    className="bg-yellow-500 h-4 rounded"
                                    style={{ width: `${percentage}%` }}
                                ></div>
                            </div>
                            <span>{percentage}%</span>
                        </div>
                    );
                })}
            </div>
            <Link href={'/write-review'}>
                <div>
                    <button className="px-5 py-2 rounded-md bg-yellow-500 font-semibold mt-5 block mx-auto transition-all  hover:scale-105 active:scale-95">Add a review</button>
                </div>
            </Link>

        </div>
    );
};

export default TopReviews;
