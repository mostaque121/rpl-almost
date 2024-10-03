import { fetchReview } from "@/app/lib/fetchData";
import ReviewSection from "./ReviewSection";
const UserReview = async () => {
    const reviews = await fetchReview('api/review');
    return (reviews &&
        <div>
            <div className="py-3">
                <h1 className="text-3xl font-semibold my-6 text-center">What Our Clients Say</h1>
            </div>
            <div>
                <ReviewSection reviews={reviews} />
            </div>
        </div>

    );
};

export default UserReview;