'use client'
import { useState } from 'react';

const FreeConsultation = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission (you can replace this with your actual submission logic)
        setFormSubmitted(true);
    };

    return (
        <section className="bg-white py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-lg overflow-hidden">
                {/* Left Side: Image & Text */}
                <div className="md:w-1/2 w-full">
                    <img
                        src="https://source.unsplash.com/800x600/?consulting,business"
                        alt="Consulting"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Right Side: Form */}
                <div className="md:w-1/2 w-full p-8 bg-white text-gray-800">
                    {!formSubmitted ? (
                        <>
                            <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">
                                Get a Free Consultation!
                            </h2>
                            <p className="text-lg md:text-xl mb-6">
                                Talk to our experts and find the right solution tailored for you. Let’s get started!
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fullname"
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="Your full name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="Your email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="Your phone number"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="How can we help you?"
                                            rows="4"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mt-6 text-center">
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition duration-300"
                                    >
                                        Get Your Free Consultation
                                    </button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-green-600 mb-4">
                                Submitted!
                            </h3>
                            <p className="text-lg">
                                Thank you for reaching out. We will contact you soon!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FreeConsultation;
