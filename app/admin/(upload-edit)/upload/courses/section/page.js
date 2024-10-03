import SectionUploadForm from "@/app/admin/components/form/SectionUploadForm";
import { fetchSection } from "@/app/lib/fetchData";
export default async function Page() {
    const availableCourses = await fetchSection('api/sections');
    return (availableCourses &&
        <div>
            <SectionUploadForm mode="upload" availableItems={availableCourses} />
        </div>
    )
}