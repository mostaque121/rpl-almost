import CourseUploadForm from "@/app/admin/components/form/CourseUploadForm";
import { fetchSection } from "@/app/lib/fetchData";
export default async function Page() {
    const availableCourses = await fetchSection('api/sections');
    return (availableCourses &&
        <div>
            <CourseUploadForm mode="upload" availableCourses={availableCourses} />
        </div>
    )
}