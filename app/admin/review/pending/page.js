import ReviewCard from "../../components/card/ReviewCard";
import { fetchPendingReview } from "../../lib/fetchDataForAdmin";

export default async function Page() {
    const reviews = await fetchPendingReview();

    return (reviews &&
        <div className="p-6">
            <h2 className="text-2xl text-black font-bold mb-4">User Reviews</h2>
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
    );
}
