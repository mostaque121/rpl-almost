import SectionCard from "@/app/components/card/SectionCard";
import GetInTouchSection from "@/app/components/content/GetInTouch";
import HappyClientSection from "@/app/components/content/HappyClientSection";
import RPLInfoSection from "@/app/components/content/RPLInfoSection";
import RPLTimeline from "@/app/components/content/StepsSection";
import UserReview from "@/app/components/content/UserReview";
import FAQ from "@/app/components/Home/FAQ";
import WhyChooseUs from "@/app/components/Home/WhyChooseUs";
import { fetchSection } from "@/app/lib/fetchData";
import Image from "next/image";

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

            <div className="relative bg-white h-[400px]">
                <div className="absolute inset-0">
                    <Image
                        src="/courses.jpg" // Replace with your actual image path
                        alt="Courses Background"
                        fill
                        className="object-cover" // Adjust opacity for a subtle background
                    />
                </div>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="flex flex-col justify-center items-center relative h-full text-center text-white">
                    <h1 className="text-5xl text-copy-2 font-extrabold mb-4">Explore Our Courses</h1>
                    <p className="text-xl max-w-2xl mb-6">
                        Discover a wide range of courses designed to help you enhance your skills, achieve your goals, and unlock your potential. Whether you're looking to advance your career or explore a new passion, we have the right course for you.
                    </p>
                </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 sm:px-10 px-5  py-10 ">
                <div className="max-w-7xl block mx-auto">
                    <div>
                        {sections.map((section) => (
                            <SectionCard key={section._id} section={section} />
                        ))}
                    </div>
                </div>
            </div>


            <RPLTimeline />
            <RPLInfoSection />
            <WhyChooseUs />
            <FAQ />
            <HappyClientSection />
            <UserReview />
            <GetInTouchSection />
        </div>
    );
}

