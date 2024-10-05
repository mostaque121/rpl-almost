import CourseCard from "@/app/components/card/CourseCard";
import HappyClientSection from "@/app/components/content/HappyClientSection";
import RPLTimeline from "@/app/components/content/StepsSection";
import UserReview from "@/app/components/content/UserReview";
import WhyChooseUs from "@/app/components/Home/WhyChooseUs";
import { fetchSection } from "@/app/lib/fetchData";

export async function generateMetadata({ params }) {
    const { section } = params;

    try {
        const data = await fetchSection(`/api/sections/${section}`);

        const keywords = data.courses.map(course => course.title).join(", ");

        return {
            title: `${data.title}`,
            description: `Explore our comprehensive range of courses in ${data.title} at RPL Fast Track Australia. Our programs are designed to enhance your skills and qualifications in the field, empowering you for career advancement.`,
            keywords: `RPL, Fast Track, Australia, courses, ${data.title}, ${keywords}, ${data.title} courses, ${data.title} training`,
            openGraph: {
                title: `Courses in ${data.title}`,
                description: `Join our diverse courses in ${data.title} at RPL Fast Track Australia. Elevate your career with our expert-led training programs tailored to your needs.`,
                url: `https://rplfasttrack.com/section/${section}`, // Adjust with your actual section URL
                images: [
                    `${data.imageCoverLink}`, // Ensure this is the relevant cover image for the section
                ],
                type: 'website',
            },
            twitter: {
                card: 'summary_large_image',
                title: `Courses in ${data.title}`,
                description: `Discover our specialized courses in ${data.title} at RPL Fast Track Australia. Take the next step in your career today!`,
                image: `${data.imageCoverLink}`, // Use the same image for Twitter
                site: '@RPLFastTrack',
            },
        };
    } catch (error) {
        return {};
    }
}



export default async function Page({ params }) {
    const { section } = params;
    const data = await fetchSection(`/api/sections/${section}`);

    return (data &&
        <div>
            <div className="relative w-full py-16 sm:px-10 px-3 h-auto bg-cover bg-center" style={{ backgroundImage: `url(${data.imageCoverLink})` }}>
                <div className="relative p-6 shadow-darker-blue bg-light-blue-active bg-opacity-90 max-w-4xl mx-auto rounded-lg text-center">
                    <h1 className="text-charcoal text-2xl sm:text-4xl font-bold mb-4">
                        {data.title}
                    </h1>

                    <p className="text-black">
                        At RPL FAST TRACK, we turn your real-world experience into formal qualifications. Our streamlined RPL assessment process covers {data.title} and more, making it easy to convert your skills into recognized credentials. With dedicated support from assessment to certification, we help you unlock new career and educational opportunities with confidence.
                    </p>
                </div>
            </div>
            <div className="bg-light-blue-hover sm:px-10 px-3  py-10 ">
                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-3 md:gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
                        {data.courses.map((course) => (
                            <CourseCard key={course._id} course={course} />
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
            <HappyClientSection />
            <div>
                <UserReview />
            </div>

        </div>
    )
}
