import { fetchReview } from "@/app/lib/fetchData";
import ReviewSection from "./ReviewSection";
const UserReview = async () => {
    const reviews = await fetchReview('api/review');
    return (reviews &&
        <div className='bg-white'>
            <div className="block max-w-7xl mx-auto">
                <ReviewSection reviews={reviews} />
            </div>
        </div>

    );
};

export default UserReview;