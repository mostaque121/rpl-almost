import { fetchReviewForAdmin } from "@/app/lib/fetchData";
import ReviewCard from "../../components/card/ReviewCard";

export default async function Page() {
    const reviews = await fetchReviewForAdmin('api/admin/reviews/all');

    return (reviews &&
        <div className="p-6">
            <h2 className="text-2xl text-white font-bold mb-4">User Reviews</h2>
            {reviews ? (
                reviews.map((review) => (
                    <ReviewCard
                        review={review}
                        key={review.id}
                    />
                ))
            ) : (
                <p className="text-gray-500">No reviews found.</p> // Message when no reviews are available
            )}
        </div>
    );
}
