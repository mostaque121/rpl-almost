import CourseUploadForm from "@/app/admin/components/form/CourseUploadForm";
import { fetchDataNoStore } from "@/app/lib/fetchData";
import { notFound } from 'next/navigation';
export default async function Page({ params }) {
    const { course } = params;
    const initialData = await fetchDataNoStore(`/api/courses/${course}`);
    const availableCourses = await fetchDataNoStore(`/api/sections`);
    if (!initialData) {
        notFound();
    }
    return (initialData && availableCourses &&
        <div>
            <CourseUploadForm initialData={initialData} mode="edit" availableCourses={availableCourses} />
        </div>
    )
}