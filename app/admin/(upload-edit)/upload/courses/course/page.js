import CourseUploadForm from "@/app/admin/components/form/CourseUploadForm";
import { fetchData } from "@/app/lib/fetchData";
export default async function Page() {
    const availableCourses = await fetchData(`/api/sections`);
    return (availableCourses &&
        <div>
            <CourseUploadForm mode="upload" availableCourses={availableCourses} />
        </div>
    )
}