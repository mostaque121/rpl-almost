import Link from "next/link";
import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";

const TopReviews = ({ reviews }) => {
    const totalReviews = reviews.length;

    // Count star ratings and calculate average
    const starCounts = [0, 0, 0, 0, 0];
    let totalStars = 0;

    reviews.forEach(review => {
        if (review.givenStar >= 1 && review.givenStar <= 5) {
            starCounts[5 - review.givenStar] += 1;
            totalStars += review.givenStar;
        }
    });

    const avgStar = totalReviews > 0 ? (totalStars / totalReviews).toFixed(1) : 0;

    // Calculate stars to display
    const wholeStars = Math.floor(avgStar);
    const decimalPart = avgStar - wholeStars;
    const emptyStars = 5 - (wholeStars + (decimalPart >= 0.5 ? 1 : 0));

    return (
        <div className="bg-gradient-to-b from-white to-blue-50 shadow-xl rounded-lg px-3 py-8 sm:px-8 mb-10">
            <div className="text-center mb-8 px-4">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                    What Our Clients Say
                </h1>
                <p className="text-gray-600 text-lg sm:text-xl max-w-xl mx-auto">
                    Real experiences from clients who advanced their careers through our RPL Fast Track program. Discover their stories of growth, success, and transformation.
                </p>
            </div>

            {/* Star Rating Summary Section */}
            <div className="flex flex-col items-center mb-6">
                <div className="bg-light-gray py-4 px-4 sm:px-6 items-center flex flex-col rounded-lg shadow-lg w-full max-w-md text-center">
                    <div className="flex items-center mb-2">
                        {/* Render whole stars */}
                        {[...Array(wholeStars)].map((_, index) => (
                            <MdStar key={index} className="text-yellow-500 h-5 w-5 sm:h-6 sm:w-6" />
                        ))}

                        {/* Render fractional star based on updated logic */}
                        {decimalPart >= 0.75 ? (
                            <MdStar className="text-yellow-500 h-5 w-5 sm:h-6 sm:w-6" />
                        ) : decimalPart >= 0.25 ? (
                            <MdStarHalf className="text-yellow-500 h-5 w-5 sm:h-6 sm:w-6" />
                        ) : (
                            <MdStarOutline className="text-gray-300 h-5 w-5 sm:h-6 sm:w-6" />
                        )}

                        {/* Render remaining empty stars */}
                        {[...Array(emptyStars)].map((_, index) => (
                            <MdStarOutline key={index + wholeStars + 1} className="text-gray-300 h-5 w-5 sm:h-6 sm:w-6" />
                        ))}
                    </div>
                    <div className="flex items-center justify-center mt-2 space-x-1 text-gray-700">
                        <span className="text-yellow-500 text-xl sm:text-2xl font-bold">{avgStar}</span>
                        <span className="text-gray-500 font-medium text-sm sm:text-base">out of 5</span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">Based on {totalReviews} reviews</p>
                </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="flex flex-col space-y-3 mt-6">
                {starCounts.map((count, index) => {
                    const starValue = 5 - index;
                    const percentage = totalReviews > 0 ? ((count / totalReviews) * 100).toFixed(1) : 0;

                    return (
                        <div key={index} className="flex items-center">
                            <span className="flex items-center space-x-1 text-gray-800 font-semibold w-20">
                                <MdStar className="text-yellow-500" />
                                <span>{starValue} Star</span>
                            </span>
                            <div className="flex-1  bg-gray-200 h-2 sm:h-4 rounded-full mx-4 shadow-inner overflow-hidden">

                                <div
                                    className="bg-yellow-500  h-full rounded-full" style={{ width: `${percentage}%` }}
                                ></div>

                            </div>
                            <span className="text-gray-600 w-12">{percentage}%</span>
                            <span className="text-gray-500 ml-2">({count} reviews)</span>
                        </div>
                    );
                })}
            </div>

            <Link href="/write-review">
                <p className="inline-block mx-auto mt-8 px-6 py-2 rounded-lg bg-yellow-500 text-white font-semibold text-lg shadow-md hover:scale-105 active:scale-95 transition-transform">
                    Add a Review
                </p>
            </Link>
        </div>
    );
};

export default TopReviews;
