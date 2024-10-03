'use client';
import ScrollReveal from '@/app/lib/ScrollReveal';
import Link from 'next/link';
import { MdStar, MdStarHalf } from "react-icons/md";
import ReviewCard from '../card/ReviewCard';

const ReviewSection = ({ reviews }) => {
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
    const emptyStars = 5 - Math.ceil(avgStar);

    // Get the currently visible reviews
    const displayedReviews = reviews.slice(0, 5);

    return (
        <div className="flex flex-col md:flex-row p-6 bg-white rounded-lg shadow-lg">

            <div className="md:w-96 w-full mb-6 md:mb-0">
                <p className="text-charcoal text-2xl font-semibold mb-4">{totalReviews} reviews</p>
                <p className="text-dark-gray mb-2">Overall rating </p>
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl text-yellow-500">{avgStar}</span>
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
                </div>
                <div className="flex flex-col">
                    {starCounts.map((count, index) => {
                        const starValue = 5 - index; // Calculate star value (5, 4, 3, 2, 1)
                        const percentage = totalReviews > 0 ? ((count / totalReviews) * 100).toFixed(1) : 0;

                        return (
                            <div key={index} className="flex items-center mb-2">
                                <span className="flex items-center gap-1 font-semibold">{starValue} <MdStar /> </span>
                                <span className="ml-2 w-12">( {count} )</span>
                                <div className="flex-1 flex items-center bg-light-gray-hover h-2 rounded mr-4">
                                    <ScrollReveal initial={{ width: 0 }} animate={{ width: `${percentage}%`, transition: { duration: 2 } }}>
                                        <div
                                            className="bg-yellow-500 h-2 rounded"
                                        ></div>
                                    </ScrollReveal>
                                </div>
                                <span className="text-gray-600">{percentage}%</span>
                            </div>
                        );
                    })}
                </div>
                <Link href={'/writereview'}>
                    <button className='py-1 px-3 font-semibold mt-4 border-dark-gray rounded-full border-2 hover:bg-dark-gray hover:text-white transition-all duration-200 ease-in-out'>
                        Write a review
                    </button>
                </Link>
            </div>

            {/* Right Side: User Reviews */}
            <div className='md:flex-1 md:ml-10'>
                {displayedReviews.map((review, index) => (
                    <ScrollReveal key={index}>
                        <ReviewCard review={review} />
                    </ScrollReveal>
                ))}
                {5 < totalReviews && ( // Show "Show More" button only if there are more reviews
                    <Link href="/review">
                        <button
                            className="mt-4 py-2 px-4 border border-gray-300 rounded bg-white hover:bg-gray-100 transition duration-200 ease-in-out"
                        >
                            Show More
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ReviewSection;
