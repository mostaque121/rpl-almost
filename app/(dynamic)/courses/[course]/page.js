import GetInTouchSection from "@/app/components/content/GetInTouch";
import HappyClientSection from "@/app/components/content/HappyClientSection";
import RPLInfoSection from "@/app/components/content/RPLInfoSection";
import RPLTimeline from "@/app/components/content/StepsSection";
import UserReview from "@/app/components/content/UserReview";
import ResponseForm from "@/app/components/form/ResponseForm";
import WhyChooseUs from "@/app/components/Home/WhyChooseUs";
import DocumentSection from "@/app/components/qualifications/DocumentSection";
import Units from "@/app/components/qualifications/Units";
import { fetchData } from "@/app/lib/fetchData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdOutlineNavigateNext } from "react-icons/md";

export async function generateMetadata({ params }) {
    const { course } = params;

    try {
        const data = await fetchData(`/api/courses/${course}`);

        // Create additional keywords for better SEO
        const additionalKeywords = 'vocational training, skill development, career advancement, qualifications, RPL assessment, training programs';

        return {
            title: data.title,
            description: `Enroll in the ${data.title} course at RPL Fast Track Australia. This program offers comprehensive training and skills development in the field, helping you gain the qualifications needed to excel in your career.`,
            keywords: `RPL, Fast Track, Australia, courses, ${data.title}, ${additionalKeywords}`,
            openGraph: {
                title: data.title,
                description: `Discover the ${data.title} course at RPL Fast Track Australia. This course is designed to equip you with the necessary skills and knowledge to succeed in your field.`,
                url: `https://rplfastrack.com/courses/${course}`, // Adjust with your actual course URL
                images: [
                    `${data.imageCoverLink}`,
                ],
                type: 'website',
            },
            twitter: {
                card: 'summary_large_image', // Use summary or summary_large_image for rich media
                title: data.title,
                description: `Join the ${data.title} course at RPL Fast Track Australia to boost your skills and career opportunities.`,
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
        const courses = await fetchData('/api/courses');
        if (!courses || courses.length === 0) {
            return [];
        }
        return courses.map(course => ({
            course: course.link,
        }));
    } catch (error) {
        console.error('Failed to fetch courses:', error);
        return [];
    }
}

export default async function Page({ params }) {
    const { course } = params;
    const data = await fetchData(`/api/courses/${course}`);
    if (!data) {
        return (
            notFound()
        )
    }

    return (data &&
        <div>
            <div className="bg-gray-100  px-3 sm:px-8 md:px-10 pt-16 pb-10">
                <div className="flex flex-col max-w-7xl mx-auto md:flex-row gap-8 items-end justify-end" >
                    <div >
                        <h1 className="text-4xl text-charcoal font-semibold">{data.title}</h1>
                        <div className="mt-2">
                            <Link href='/courses'>
                                <span className="inline-block text-blue-500 hover:text-blue-600 active:scale-95 transition duration-200 ease-in-out cursor-pointer ">
                                    Courses
                                </span>
                            </Link>

                            <span className="inline-block  align-middle"><MdOutlineNavigateNext /></span>
                            <Link href={`/section/${data.section.link}`}>
                                <span className="inline-block text-blue-500 hover:text-blue-600 active:scale-95 transition duration-200 ease-in-out cursor-pointer ">
                                    {data.section.title}
                                </span>
                            </Link>
                            <span className="inline-block align-middle"><MdOutlineNavigateNext /></span>
                            <span className="inline-block text-dark-gray font-semibold align-middle">{data.title}</span>
                        </div>
                        <p className="mt-5 text-charcoal mb-3">Advance your career by applying for a {data.title} through Recognition of Prior Learning with RPL Fast Track, our streamlined service designed to fast-track your qualification.</p>
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

            <div className="qualification-container max-w-7xl mx-auto">
                <section className=" qualification sm:px-8 px-4 py-6 bg-white">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">Qualification Description</h1>
                    <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: data.description }} />
                </section>

                {/* Job Opportunities */}
                <section className="bg-gray-100 qualification sm:px-8 px-4 py-6">
                    <h1 className="text-xl font-semibold text-black mb-4">Job Opportunities</h1>
                    <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: data.jobOpportunity }} />
                </section>

                {/* Entry Requirements */}
                <section className="bg-white qualification sm:px-8 px-4 py-6 ">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">Entry Requirements</h1>
                    <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: data.entryRequirement }} />
                </section>

                {/* Packaging Rules */}
                <section className="bg-gray-100 qualification sm:px-8 px-4 py-6">
                    <h1 className="text-xl font-semibold text-black mb-4">Packaging Rules</h1>
                    <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: data.packagingRule }} />
                </section>
                {/* Units Section */}
                <section className="bg-white qualification sm:px-8 px-4 py-6">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">Units</h1>
                    <Units coreUnits={data.coreUnits} electiveUnits={data.electiveUnits} />
                </section>
            </div>
            <DocumentSection />


            <RPLTimeline />
            <RPLInfoSection />
            <WhyChooseUs />
            <HappyClientSection />
            <UserReview />
            <GetInTouchSection />

        </div>
    );
};

