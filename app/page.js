import GetInTouchSection from '@/app/components/content/GetInTouch';
import HappyClientSection from '@/app/components/content/HappyClientSection';
import RPLInfoSection from '@/app/components/content/RPLInfoSection';
import RPLTimeline from '@/app/components/content/StepsSection';
import UserReview from '@/app/components/content/UserReview';
import ResponseForm from '@/app/components/form/ResponseForm';
import FAQ from '@/app/components/Home/FAQ';
import PopularCourse from '@/app/components/Home/PopularCourse';
import WhyChooseUs from '@/app/components/Home/WhyChooseUs';
import ContentSection from './components/Home/ContentSection';
import HeroSection from './components/Home/HeroSection';
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
      <HeroSection />
      <div className='md:hidden bg-custom-gradient w-full'>
        <ResponseForm />
      </div>
      <ContentSection />
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