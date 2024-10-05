import HappyClientSection from "@/app/components/content/HappyClientSection";
import RPLInfoSection from "@/app/components/content/RPLInfoSection";
import RPLOutcomeSection from "@/app/components/content/RPLOutcome";
import RPLTimeline from "@/app/components/content/StepsSection";
import UserReview from "@/app/components/content/UserReview";
import ResponseForm from "@/app/components/form/ResponseForm";
import Units from "@/app/components/qualifications/Units";
import { fetchData } from "@/app/lib/fetchData";
import Link from "next/link";
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
                url: `https://rplfasttrack.com/courses/${course}`, // Adjust with your actual course URL
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

export default async function Page({ params }) {
    const { course } = params;
    const data = await fetchData(`/api/courses/${course}`);
    console.log(data)
    return (data &&
        <div className="qualification ">
            <div className="bg-light-blue  px-3 sm:px-8 md:px-10 pt-10 pb-10">
                <div className="flex flex-col md:flex-row gap-8 items-end justify-end" >
                    <div >
                        <h1 className="text-4xl text-charcoal font-semibold">{data.title}</h1>
                        <div className="mt-2">
                            <Link href='/courses'>
                                <span className="inline-block text-blue-500 hover:scale-95 active:scale-90 transition duration-200 ease-in-out cursor-pointer hover:text-blue-600">
                                    Courses
                                </span>
                            </Link>

                            <span className="inline-block  align-middle"><MdOutlineNavigateNext /></span>
                            <Link href={`/${data.section.link}`}>
                                <span className="inline-block text-blue-500 hover:scale-95 active:scale-90 transition duration-200 ease-in-out cursor-pointer hover:text-blue-600">
                                    {data.section.title}
                                </span>
                            </Link>
                            <span className="inline-block align-middle"><MdOutlineNavigateNext /></span>
                            <span className="inline-block text-dark-gray font-semibold align-middle">{data.title}</span>
                        </div>
                        <p className="mt-5 text-charcoal mb-3">Advance your career by applying for a {data.title} through Recognition of Prior Learning with RPL Fast Track, our streamlined service designed to fast-track your qualification.</p>
                        <img src={data.imageCoverLink} className="w-full rounded-md h-auto"></img>
                    </div>
                    <div>
                        <ResponseForm title={data.title} />
                    </div>
                </div>
            </div>

            <div className="px-3 sm:px-8 md:px-10 sm:py-8 py-6" >
                <h1 className="sm:text-2xl text-lg text-center font-semibold mb-2 text-charcoal">Qualification description</h1>
                <div className="text-dark-gray bg-light-blue rounded-md sm:px-6 px-3 py-6 text-sm" dangerouslySetInnerHTML={{ __html: data.description }} />
            </div>

            <div className="px-3 sm:px-8 md:px-10 sm:py-8 py-6 bg-light-blue"  >
                <h1 className="sm:text-2xl text-lg text-center font-semibold  mb-2 text-charcoal">Job Opportunities</h1>
                <div className="text-dark-gray bg-white rounded-md sm:px-6 px-3 py-6 text-sm" dangerouslySetInnerHTML={{ __html: data.jobOpportunity }} />
            </div>

            <div className="px-3 sm:px-8 md:px-10 sm:py-8 py-6"  >
                <h1 className="sm:text-2xl text-lg text-center font-semibold  mb-2 text-charcoal">Entry Requirements</h1>
                <div className="text-dark-gray sm:px-6 px-3 py-6 bg-light-blue rounded-md text-sm" dangerouslySetInnerHTML={{ __html: data.entryRequirement }} />
            </div>

            <div className="px-3 bg-light-blue sm:px-8 md:px-10 sm:py-8 py-6" >
                <h1 className="sm:text-2xl text-lg text-center font-semibold mb-2 text-charcoal">Packaging Rules</h1>
                <div className="text-dark-gray bg-white rounded-md sm:px-6 px-3 py-6 text-sm" dangerouslySetInnerHTML={{ __html: data.packagingRule }} />
            </div>

            <div className="px-3 sm:px-8 md:px-10 sm:py-8 py-6" >
                <h1 className="sm:text-2xl text-lg text-center font-bold mb-2">Units</h1>
                <Units coreUnits={data.coreUnits} electiveUnits={data.electiveUnits} />
            </div>

            <div className='bg-light-blue px-3 py-10 sm:px-8'>
                <RPLInfoSection />
            </div>

            <div className='bg-white px-3 py-10 sm:px-8'>
                <RPLOutcomeSection />
            </div>

            <div><RPLTimeline /></div>

            <div className="px-3 sm:px-6 md:px-10" >
                <HappyClientSection />
            </div>

            <div >
                <UserReview />
            </div>

        </div>
    );
};

