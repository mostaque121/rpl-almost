import ReviewCard from "../../components/card/ReviewCard";
import { fetchPendingReview } from "../../lib/fetchDataForAdmin";

export default async function Page() {
    const reviews = await fetchPendingReview();

    return (reviews &&
        <div className="p-3 sm:p-6">
            <h2 className="text-2xl text-black text-center block font-semibold mb-4">Pending Reviews</h2>
            <p className='text-lg font-semibold text-center block py-4'>Total Pending Review :  {reviews.length}</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center'>
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <ReviewCard
                            review={review}
                            key={review._id}
                        />
                    ))
                ) : (
                    <p className="text-black">No pending reviews found.</p> // Message when no reviews are available
                )}
            </div>
        </div>
    );
}
