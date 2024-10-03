import SectionUploadForm from "@/app/admin/components/form/SectionUploadForm";
import { fetchData } from "@/app/lib/fetchData";
export default async function Page() {
    const availableCourses = await fetchData(`/api/sections`);
    return (availableCourses &&
        <div>
            <SectionUploadForm mode="upload" availableItems={availableCourses} />
        </div>
    )
}