import ReviewCard from "../../components/card/ReviewCard";
import { fetchAllReview } from "../../lib/fetchDataForAdmin";
export default async function Page() {
    const reviews = await fetchAllReview();

    return (reviews &&
        <div className="p-3 sm:p-6">
            <h2 className="text-2xl text-black font-semibold block text-center  mb-4">User Reviews</h2>
            <p className='text-lg block text-center py-4 font-semibold'>Total reviews : {reviews.length}</p>
            <div className='flex  justify-center'>
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <ReviewCard
                            review={review}
                            key={review._id}
                        />
                    ))
                ) : (
                    <p className="text-black">No reviews found.</p> // Message when no reviews are available
                )}
            </div>

        </div>
    );
}
