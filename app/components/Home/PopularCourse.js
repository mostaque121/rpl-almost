import { fetchSection } from "@/app/lib/fetchData";
import SectionCard from "../card/SectionCard";

export default async function PopularCourse() {

    const sections = await fetchSection('api/sections');

    return (sections &&
        <div className="bg-gray-100 px-3 sm:px-5 sm:py-16 py-10">
            <h1 className="text-3xl pb-5 text-black font-semibold text-center">Client's Favourite</h1>

            {sections.slice(0, 6).map((section) => (
                <SectionCard section={section} key={section._id} />
            ))}

        </div>
    );
};




