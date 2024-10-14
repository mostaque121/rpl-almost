import Link from "next/link";
import Faq from "./components/Faq";

export const metadata = {
  title: 'Frequently Asked Questions | RPL Fast Track',
  description: 'Find answers to common questions about Recognition of Prior Learning (RPL) and our services at RPL Fast Track Australia. Our FAQ page provides valuable information to help you understand the RPL process, eligibility, and how we can assist you in your career advancement.',
  keywords: 'RPL, Fast Track, Australia, FAQ, frequently asked questions, recognition of prior learning, RPL process, eligibility, services',
};

export default function Page() {
  return (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      <h1 className="sm:text-4xl text-xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <Faq />
      <section className="text-center mt-10">
        <Link href="/" className="text-copy underline">
          Back to Home
        </Link>
      </section>
    </div>
  );
};

