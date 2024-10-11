'use client'
import Link from 'next/link';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const GetInTouchSection = () => {
    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 py-16 text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">

                {/* Left Side: Main Callout */}
                <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                    <h2 className="text-4xl font-extrabold">Get In Touch With Us</h2>
                    <p className="text-lg">
                        We'd love to hear from you! You can reach us through the methods below or simply fill out our contact form, and we’ll get back to you as soon as possible.
                    </p>
                </div>

                {/* Right Side: Contact Info */}
                <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                    {/* Email */}
                    <div className="flex items-center w-full space-x-4 bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-opacity-20">
                        <FaEnvelope className="text-4xl text-yellow-300" />
                        <div>
                            <h3 className="text-xl font-bold">Email Us</h3>
                            <a href="mailto:rplfasttrack@gmail.com" className="text-gray-300 hover:text-white transition-all">rplfasttrack@gmail.com</a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center w-full space-x-4 bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-opacity-20">
                        <FaPhone className="text-4xl text-green-400" />
                        <div>
                            <h3 className="text-xl font-bold">Call Us</h3>
                            <a href="tel:+61483921139" className="text-gray-300 hover:text-white transition-all">+61 483 921 139</a>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center w-full space-x-4 bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-opacity-20">
                        <FaMapMarkerAlt className="text-4xl text-red-400" />
                        <div>
                            <h3 className="text-xl font-bold">Visit Us</h3>
                            <p className="text-gray-300">
                                26 Clement Way, <br />
                                Melton South, VIC 3338
                            </p>
                        </div>
                    </div>
                    {/* Contact Us */}
                    <Link href="/contact" className="flex items-center w-full space-x-4 bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-opacity-20">
                        <FaEnvelope className="text-4xl text-blue-400" />
                        <div>
                            <h3 className="text-xl font-bold">Contact Us</h3>
                            <p className="text-gray-300">Reach out for any inquiries</p>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default GetInTouchSection;
