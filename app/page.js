// components/Main.js or pages/index.js
import Link from 'next/link';
import { FaCertificate, FaCheckCircle, FaClipboardCheck, FaClock, FaFileAlt, FaHome, FaInfoCircle, FaMoneyBillWave, FaPhone, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import FAQ from './components/Home/FAQ';
import FreeConsultation from './components/content/FreeConsultation';
import RPLTimeline from './components/content/StepsSection';
export default function Page() {


  return (
    <div>
      <nav className="bg-white shadow-lg relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">
              <Link href="/">RPL Services</Link>
            </div>
            <div className="space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-all">
                <FaHome className="inline mr-2" /> Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-all">
                <FaInfoCircle className="inline mr-2" /> About Us
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-all">
                <FaPhone className="inline mr-2" /> Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/cover.jpg')" }}
      >
        {/* Overlay for the image */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content on the image */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full space-y-4">
          <h1 className="text-4xl font-bold">Your Experience Matters</h1>
          <p className="text-lg max-w-md">
            Fast-track your qualifications with our RPL program and get certified for your skills.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-all">
            Get Started Now
          </button>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">How It Works</h2>

          {/* Steps container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4 text-blue-600">
                <FaFileAlt size={50} className="mx-auto" /> {/* Icon for Step 1 */}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">1. Submit Your Details</h3>
              <p className="text-gray-600">
                Send us your information and let us assess your qualifications for RPL certification.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4 text-green-600">
                <FaClipboardCheck size={50} className="mx-auto" /> {/* Icon for Step 2 */}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">2. Get Assessed</h3>
              <p className="text-gray-600">
                Our assessors will evaluate your skills based on the evidence you provide.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4 text-yellow-600">
                <FaCertificate size={50} className="mx-auto" /> {/* Icon for Step 3 */}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">3. Receive Your Certification</h3>
              <p className="text-gray-600">
                Upon successful assessment, you’ll receive your RPL certificate and can fast-track your career.
              </p>
            </div>
          </div>
        </div>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-all">
          Learn More
        </button>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Why Choose Us?</h2>

          {/* Benefits container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Benefit 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4 text-green-600">
                <FaCheckCircle size={50} className="mx-auto" /> {/* Icon */}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Recognized Certification</h3>
              <p className="text-gray-600">
                Get certified by an authorized institution, recognized globally to enhance your career prospects.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4 text-blue-600">
                <FaClock size={50} className="mx-auto" /> {/* Icon */}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Fast & Flexible Process</h3>
              <p className="text-gray-600">
                Our process is quick and easy, allowing you to get certified at your own pace with minimal delays.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4 text-yellow-600">
                <FaMoneyBillWave size={50} className="mx-auto" /> {/* Icon */}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Cost-Effective</h3>
              <p className="text-gray-600">
                Save time and money by getting certified for the skills you already possess without extensive training.
              </p>
            </div>
          </div>
        </div>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-all">
          Start Your RPL Journey
        </button>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">What Our Clients Say</h2>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <FaQuoteLeft className="text-blue-500 absolute top-4 left-4 text-2xl" />
              <p className="text-gray-600 italic">
                “I received my RPL certificate within just a few weeks! It was fast, easy, and helped me get the job I’ve always wanted.”
              </p>
              <FaQuoteRight className="text-blue-500 absolute bottom-4 right-4 text-2xl" />
              <h3 className="mt-4 text-lg font-semibold text-gray-700">- John Doe</h3>
              <p className="text-sm text-gray-500">Software Engineer</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <FaQuoteLeft className="text-blue-500 absolute top-4 left-4 text-2xl" />
              <p className="text-gray-600 italic">
                “The process was so smooth, and I was able to get certified for my years of experience in half the time!”
              </p>
              <FaQuoteRight className="text-blue-500 absolute bottom-4 right-4 text-2xl" />
              <h3 className="mt-4 text-lg font-semibold text-gray-700">- Sarah Lee</h3>
              <p className="text-sm text-gray-500">Marketing Specialist</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <FaQuoteLeft className="text-blue-500 absolute top-4 left-4 text-2xl" />
              <p className="text-gray-600 italic">
                “Thanks to the RPL program, I saved so much time and got a promotion at work! Highly recommended.”
              </p>
              <FaQuoteRight className="text-blue-500 absolute bottom-4 right-4 text-2xl" />
              <h3 className="mt-4 text-lg font-semibold text-gray-700">- Michael Smith</h3>
              <p className="text-sm text-gray-500">Project Manager</p>
            </div>
          </div>
        </div>
      </section>

      <RPLTimeline />


      <FAQ />

      <FreeConsultation />

      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Fast-Track Your Certification?</h2>
          <p className="text-lg mb-8">Join thousands of others who have already advanced their careers with our RPL services.</p>
          <button className="bg-white text-blue-600 py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all">
            Start Your Journey Today
          </button>
        </div>
      </section>
    </div>
  );
}
