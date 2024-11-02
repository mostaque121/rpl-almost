import Link from 'next/link';
import ContactDetails from './components/ContactDetails';
import ContactForm from './components/ContactForm';

export const metadata = {
  title: 'Contact Us ',
  description: 'Get in touch with RPL Fast Track Australia. Whether you have questions about our courses, services, or need assistance with Recognition of Prior Learning (RPL), our dedicated team is here to help you achieve your goals.',
  keywords: 'RPL, Fast Track, Australia, contact us, inquiries, assistance, support, recognition of prior learning, RPL services',
};

const ContactUs = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-100 to-white  p-8 ">
      <div className='max-w-4xl mx-auto'>
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, please feel free to reach out to us using the contact form below or through our contact details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
          <ContactForm />
        </section>

        <ContactDetails />

        <section className="text-center mt-10">
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </section>
      </div>
    </div>

  );
};

export default ContactUs;

