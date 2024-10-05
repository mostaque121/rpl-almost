import SectionCard from "@/app/components/card/SectionCard";
import RPLTimeline from "@/app/components/content/StepsSection";
import UserReview from "@/app/components/content/UserReview";
import FAQ from "@/app/components/Home/FAQ";
import WhyChooseUs from "@/app/components/Home/WhyChooseUs";
import { fetchSection } from "@/app/lib/fetchData";

export async function generateMetadata() {
    try {
        const sections = await fetchSection('api/sections');
        const keywords = sections.map(section => section.title).join(", ");

        return {
            title: "Courses",
            description: "Discover a range of accredited courses designed to help you gain formal recognition for your skills and experience. At RPL Fast Track Australia, we empower you to turn your knowledge into recognized qualifications, unlocking new career opportunities.",
            keywords: `RPL, Fast Track, Australia, courses, ${keywords}`,
        };
    } catch (error) {
        return {};
    }
}
export default async function Page() {

    const sections = await fetchSection('api/sections');

    return (sections &&
        <div>
            <div className="relative w-full py-16 sm:px-10 px-3 h-auto bg-cover bg-center" style={{ backgroundImage: 'url("/DeWatermark.ai_1726683796769.png")' }}>
                <div className="relative p-6 shadow-darker-blue bg-light-blue-active bg-opacity-90 max-w-4xl mx-auto rounded-lg text-center">
                    <h1 className="text-charcoal text-2xl sm:text-4xl font-bold mb-4">
                        Courses
                    </h1>
                    <p className="text-black">
                        At RPL FAST TRACK, we specialize in helping individuals gain formal recognition for the skills and knowledge they've acquired through experience. Whether you've learned through work, training, or life experience, our streamlined RPL assessment process allows you to convert your expertise into recognized qualifications. Our dedicated team ensures a smooth, supportive journey from assessment to certification, helping you unlock new opportunities in your career and education.
                    </p>
                </div>
            </div>

            <div className="bg-light-blue-hover sm:px-10 px-5  py-10 ">
                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {sections.map((section) => (
                            <SectionCard key={section._id} section={section} />
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <RPLTimeline />
            </div>

            <div className='bg-light-blue'>
                <WhyChooseUs />
            </div>

            <div>
                <FAQ />
            </div>

            <div>
                <UserReview />
            </div>
        </div>
    );
}

