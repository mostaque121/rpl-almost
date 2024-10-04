import { fetchCourses } from "@/app/lib/fetchData";
import ReviewForm from "./components/ReviewForm";
export default async function Page() {
    const availableCourses = await fetchCourses('api/courses');
    return (availableCourses &&
        <div>
            <ReviewForm availableCourses={availableCourses} />
        </div>
    )
}