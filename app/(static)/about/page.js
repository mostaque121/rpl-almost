import HappyClientSection from '@/app/components/content/HappyClientSection';
import UserReview from '@/app/components/content/UserReview';
import Link from 'next/link';
import { FaFlagCheckered, FaRocket, FaUsers } from 'react-icons/fa';

export const metadata = {
  title: 'About Us',
  description: 'Learn about RPL Fast Track, our mission to help individuals gain recognition for their skills and experience. Discover how our dedicated team provides streamlined RPL assessment services in Australia.',
  keywords: 'RPL, Fast Track, Australia, about us, recognition of prior learning, mission, team, qualifications, training',
};
const AboutUs = () => {
  return (
    <div>
      <div className=" p-8 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">About Us</h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Mission</h2>
          <p className="mb-4 text-gray-600">
            At <span className="font-bold text-blue-600">RPL Fast Track</span>, our mission is to empower individuals through recognition of prior learning (RPL) and help them achieve their career goals.
            We are dedicated to providing high-quality, efficient certification processes that recognize your skills and experiences. Our goal is to facilitate a seamless pathway to success for every learner.
          </p>
          <FaRocket className="text-blue-600 text-5xl mx-auto mb-4" />
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Values</h2>
          <ul className="list-disc list-inside mb-4 text-gray-600">
            <li><strong>Integrity:</strong> We maintain transparency and honesty in all our dealings.</li>
            <li><strong>Innovation:</strong> We embrace new ideas and technologies to improve our services.</li>
            <li><strong>Customer Satisfaction:</strong> We prioritize our clients' needs and strive for excellence.</li>
          </ul>
          <p className="mb-4 text-gray-600">
            These values guide our actions and decisions, ensuring that we deliver exceptional service while fostering a culture of respect and accountability.
          </p>
          <FaFlagCheckered className="text-blue-600 text-5xl mx-auto mb-4" />
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Story</h2>
          <p className="mb-4 text-gray-600">
            <span className="font-bold text-blue-600">RPL Fast Track</span> began with the vision of simplifying the certification process for individuals seeking recognition for their skills.
            Over the years, we have streamlined our services to better meet the needs of our clients and have successfully certified thousands of individuals.
            Our journey has been driven by a commitment to excellence and a passion for helping others succeed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Meet the Team</h2>
          <p className="mb-4 text-gray-600">
            Our team is composed of experienced professionals with diverse backgrounds in education, industry, and certification processes.
            Each member brings unique expertise and passion to our work, dedicated to supporting our clients every step of the way.
            Together, we strive to create a positive and enriching experience for all those we serve.
          </p>
          <FaUsers className="text-blue-600 text-5xl mx-auto mb-4" />
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">What Sets Us Apart</h2>
          <p className="mb-4 text-gray-600">
            What distinguishes <span className="font-bold text-blue-600">RPL Fast Track</span> is our commitment to a fast, user-friendly, and transparent certification process.
            We utilize innovative technology to ensure that your application is processed swiftly and accurately.
            Our dedicated team is here to guide you through every stage of the RPL process, making it as seamless as possible.
          </p>
          <p className="text-gray-600">
            We are committed to providing personalized support, ensuring that each client's unique journey is recognized and valued.
            Our goal is to empower individuals to unlock their full potential and achieve their career aspirations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
          <p className="mb-4 text-gray-600">
            We’d love to hear from you! If you have any questions or would like to learn more about us, feel free to reach out through our website or connect with us on social media.
            Your journey matters to us, and we are here to assist you.
          </p>
          <Link href="/contact">
            <span className="text-blue-600 underline cursor-pointer">Contact Us</span>
          </Link>
        </section>

        <p className="text-center text-sm mt-10 text-gray-600">
          <Link href="/home">
            <span className="text-blue-600 underline cursor-pointer">Back to Home</span>
          </Link>
        </p>
      </div>

      <HappyClientSection />


      <UserReview />

    </div>

  );
};

export default AboutUs;


