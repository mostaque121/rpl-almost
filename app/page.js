import GetInTouchSection from '@/app/components/content/GetInTouch';
import HappyClientSection from '@/app/components/content/HappyClientSection';
import RPLInfoSection from '@/app/components/content/RPLInfoSection';
import RPLTimeline from '@/app/components/content/StepsSection';
import UserReview from '@/app/components/content/UserReview';
import ResponseForm from '@/app/components/form/ResponseForm';
import FAQ from '@/app/components/Home/FAQ';
import PopularCourse from '@/app/components/Home/PopularCourse';
import WhyChooseUs from '@/app/components/Home/WhyChooseUs';
import Link from 'next/link';
import DocumentSection from './components/qualifications/DocumentSection';

export const metadata = {
  title: 'RPL Fast Track - Accelerate Your Skills Recognition in Australia',
  description: "Fast-track your career with Recognition of Prior Learning (RPL) in Australia. Our streamlined process helps you quickly assess and validate your skills, opening doors to new opportunities and career growth.",
  keywords: [
    "RPL",
    "Recognition of Prior Learning",
    "Fast Track",
    "Skills Assessment",
    "RPL Australia",
    "Career Advancement",
    "Education",
    "Skills Recognition",
    "Qualifications",
    "Australia"
  ],
  openGraph: {
    title: 'RPL Fast Track - Accelerate Your Skills Recognition in Australia',
    description: "Fast-track your career with RPL in Australia. Our efficient process helps you assess and validate your skills for career advancement and new opportunities.",
    url: 'https://rplfasttrack.com',
    images: [
      {
        url: '/group.jpg', // Add your relevant Open Graph image URL here
        width: 1200,
        height: 630,
        alt: 'RPL Fast Track - Skills Recognition Australia',
      },
    ],
    type: 'website',
    siteName: 'RPL Fast Track',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RPL Fast Track - Accelerate Your Skills Recognition',
    description: "Streamline your RPL process and advance your career in Australia. Validate your skills with ease through our fast-track services.",
    image: '/group.jpg',
    site: '@RPLFastTrack',
  },
};

export default function Home() {
  return (
    <div>
      <div className="relative bg-white px-3 sm:px-5 py-5 bg-cover h-[600px] bg-center" style={{ backgroundImage: `url('/group.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className='relative flex gap-10 w-full justify-between h-full'>
          <div className="flex flex-col w-full md:px-16 justify-center md:items-start items-center text-center text-white h-full space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl md:text-left font-extrabold">Welcome to RPL Fast Track</h1>
            <h2 className="text-2xl sm:text-3xl text-copy-2 lg:text-4xl md:text-left font-semibold">Accelerate Your Qualifications</h2>
            <p className="text-base  sm:text-lg md:text-start lg:text-xl max-w-lg">
              Join our RPL Fast Track program to showcase your skills and earn the certifications you deserve. Transform your career and unlock new opportunities!
            </p>
            <Link href='/courses'>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300">
                Start Your Journey
              </button>
            </Link>
          </div>

          <div className='md:flex hidden items-center'>
            <ResponseForm />
          </div>
        </div>
      </div>



      <div className='md:hidden w-full'>
        <ResponseForm />
      </div>

      <div className='sm:px-8 px-3'>
        <div className=" flex-col md:flex-row overflow-hidden flex justify-center items-center">
          <div className=" w-full md:w-1/2 h-96">
            <img className="w-full h-full object-cover" src="/1_D7G69I9L9xka4AgnW1nn6w.jpg"></img>
          </div>
          <div className="md:w-1/2 w-full p-3">
            <h1 className="text-center  text-3xl">What is RPL ?</h1>
            <p className="sm:text-lg text-sm  mt-5">
              Recognition of Prior Learning (RPL) formalizes existing skills and knowledge, acquired through work, training, or other experiences. By assessing your competencies against industry standards, RPL fast-tracks your qualifications and advances your career without extra coursework. It efficiently leverages your experience, achieving certification, enhancing credentials, and opening new career opportunities. It's a streamlined process for career growth.{" "}
              <Link href="/rpl">
                <span className="text-blue-500 hover:underline cursor-pointer">Learn more..</span></Link>
            </p>
          </div>
        </div>


        <div className="flex  flex-col md:flex-row  justify-center   overflow-hidden items-center ">
          <div className="md:w-1/2  md:order-1 order-2 p-3 w-full">
            <h1 className="text-3xl text-center">Benefits of RPL</h1>
            <p className="sm:text-lg text-sm  mt-5">Recognition of Prior Learning (RPL) accelerates your career by formally acknowledging your existing skills and experience, helping you gain qualifications more quickly. It enhances your job prospects and allows for career growth without additional coursework. Additionally, RPL is cost-effective and time-efficient, saving you money and reducing the time needed to achieve formal credentials compared to traditional education.{" "}
              <Link href="/benefits">
                <span className="text-blue-500 hover:underline cursor-pointer">Learn more..</span></Link></p>
          </div>

          <div className="md:w-1/2 md:order-2 order-1 w-full h-96">
            <img className="w-full h-full object-cover" src="/pexels-fauxels-3182812-1024x683-1.jpg"></img>
          </div>
        </div>
      </div>

      <PopularCourse />

      <RPLTimeline />
      <DocumentSection />
      <RPLInfoSection />
      <WhyChooseUs />
      <HappyClientSection />
      <UserReview />
      <GetInTouchSection />
      <FAQ />
    </div>
  )
}