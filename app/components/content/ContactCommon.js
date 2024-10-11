'use client'
import { useState } from 'react';

const ContactCommon = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would handle the form submission logic (e.g., send to backend or email service)

        setFormSubmitted(true); // Display the confirmation message after submission
    };

    return (
        <div className="w-full bg-gray-100 py-12">
            <div className="container mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between">

                {/* Left Side: Image and Text */}
                <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
                    <img src="/community.jpg" alt="Contact Us" className="w-full lg:w-4/5 mx-auto lg:mx-0 rounded-lg shadow-lg" />
                    <h2 className="text-3xl font-bold mt-6 text-gray-800">
                        Get In Touch With Us
                    </h2>
                    <p className="text-gray-600 mt-4">
                        We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to talk, we're here to help.
                    </p>
                </div>

                {/* Right Side: Contact Form */}
                <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h3>

                    {formSubmitted ? (
                        <div className="text-center text-green-600 text-xl font-semibold">
                            Submitted! We will contact you soon. Thanks!
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none" placeholder="Your Name" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none" placeholder="Your Email" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
                                <input type="tel" id="phone" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none" placeholder="Your Phone Number" required />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                                <textarea id="message" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-2 px-6 rounded-lg transition-all duration-300">
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactCommon;
