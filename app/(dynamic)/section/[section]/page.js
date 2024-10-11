import GetInTouchSection from "@/app/components/content/GetInTouch";
import HappyClientSection from "@/app/components/content/HappyClientSection";
import RPLInfoSection from "@/app/components/content/RPLInfoSection";
import RPLTimeline from "@/app/components/content/StepsSection";
import UserReview from "@/app/components/content/UserReview";
import ResponseForm from "@/app/components/form/ResponseForm";
import WhyChooseUs from "@/app/components/Home/WhyChooseUs";
import { fetchSection } from "@/app/lib/fetchData";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineNavigateNext } from "react-icons/md";

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

export async function generateStaticParams() {
    try {
        // Fetch all courses
        const sections = await fetchSection('/api/sections');
        if (!sections || sections.length === 0) {
            return [];
        }
        return sections.map(section => ({
            section: section.link,
        }));
    } catch (error) {
        console.error('Failed to fetch courses:', error);
        return [];
    }
}



export default async function Page({ params }) {
    const { section } = params;
    const data = await fetchSection(`/api/sections/${section}`);

    return (data &&
        <div>
            <div className="bg-gray-100  px-3 sm:px-8 md:px-10 pt-16 pb-10">
                <div className="flex flex-col max-w-7xl mx-auto md:flex-row gap-8 items-end justify-end" >
                    <div >
                        <h1 className="text-4xl text-charcoal font-semibold">{data.title}</h1>
                        <div className="mt-2">
                            <Link href='/courses'>
                                <span className="inline-block text-copy hover:scale-95 active:scale-90 transition duration-200 ease-in-out cursor-pointer ">
                                    Courses
                                </span>
                            </Link>
                            <span className="inline-block align-middle"><MdOutlineNavigateNext /></span>
                            <span className="inline-block text-dark-gray font-semibold align-middle">{data.title}</span>
                        </div>
                        <p className="mt-5 text-charcoal mb-3">
                            At RPL FAST TRACK, we turn your real-world experience into formal qualifications. Our streamlined RPL assessment process covers {data.title} and more, making it easy to convert your skills into recognized credentials. With dedicated support from assessment to certification, we help you unlock new career and educational opportunities with confidence.
                        </p>
                        <div className='relative w-full rounded-md overflow-hidden shadow-md h-auto'>
                            <Image
                                src={data.imageCoverLink}
                                alt={data.title}
                                width={1500}
                                height={720}

                            />
                        </div>
                    </div>
                    <div>
                        <ResponseForm title={data.title} />
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r sm:px-10 px-4 from-blue-100 to-cyan-100 py-12">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center sm:text-4xl text-2xl font-extrabold text-copy mb-10">
                        Explore Our Courses
                    </h2>

                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {data.courses.map((course) => (
                            <div
                                key={course._id}
                                className="group bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                            >
                                {/* Image Section */}
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={course.imageCoverLink}
                                        alt="image"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Text Section */}
                                <div className="p-6  space-y-4">
                                    <h3 className="text-xl font-bold text-gray-800  transition-all duration-300">
                                        {course.title}
                                    </h3>
                                    <Link href={`/courses/${course.link}`}>
                                        <p className="inline-block mt-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-5 rounded-full shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                                            Learn More
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <RPLTimeline />
            <RPLInfoSection />
            <WhyChooseUs />
            <HappyClientSection />
            <UserReview />
            <GetInTouchSection />

        </div>
    )
}
