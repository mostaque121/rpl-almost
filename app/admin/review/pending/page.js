import { fetchReview } from "@/app/lib/fetchData";
import ReviewCard from "../../components/card/ReviewCard";

export default async function Page() {
    const reviews = await fetchReview('api/admin/reviews/pending');

    return (reviews &&
        <div className="p-6">
            <h2 className="text-2xl text-dark-text font-bold mb-4">User Reviews</h2>
            {reviews.length > 0 ? (
                reviews.map((review) => (
                    <ReviewCard
                        review={review}
                        key={review._id}
                    />
                ))
            ) : (
                <p className="text-dark-text">No pending reviews found.</p> // Message when no reviews are available
            )}
        </div>
    );
}
