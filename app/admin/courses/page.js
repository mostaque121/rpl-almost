import { fetchSection } from "@/app/lib/fetchData";
import SectionCardForAdmin from "../components/card/SectionCardForAdmin";
export default async function Page() {

    const sections = await fetchSection('api/sections');
    return (sections &&
        <div>
            <div className="relative w-full py-16 sm:px-10 px-3 h-auto bg-cover bg-center" style={{ backgroundImage: 'url("/DeWatermark.ai_1726683796769.png")' }}>
                <div className="relative p-6  bg-light-gray bg-opacity-90 max-w-4xl mx-auto rounded-lg text-center">
                    <h1 className="text-black text-2xl sm:text-4xl font-bold mb-4">
                        Courses
                    </h1>
                </div>
            </div>
            <div className="bg-light-gray sm:px-10 px-3  py-10 ">
                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-3 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {sections.map((section) => (
                            <SectionCardForAdmin key={section._id} section={section} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
