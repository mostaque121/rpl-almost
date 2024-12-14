'use client'
import Link from 'next/link';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const GetInTouchSection = () => {
    const email = process.env.NEXT_PUBLIC_EMAIL
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER
    const adress = process.env.NEXT_PUBLIC_ADDRESS
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
                    <Link href={`mailto:${email}`} className="flex items-center w-full space-x-4 bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-opacity-20">
                        <FaEnvelope className="text-4xl text-yellow-300" />
                        <div>
                            <h3 className="text-xl font-bold">Email Us</h3>
                            <p href={`mailto:${email}`} className="text-gray-300 hover:text-white transition-all">{email}</p>
                        </div>
                    </Link>

                    {/* Phone */}
                    <Link href={`tel:${phoneNumber}`} className="flex items-center w-full space-x-4 bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-opacity-20">
                        <FaPhone className="text-4xl text-green-400" />
                        <div>
                            <h3 className="text-xl font-bold">Call Us</h3>
                            <p className="text-gray-300 hover:text-white transition-all">{phoneNumber}</p>
                        </div>
                    </Link>

                    {/* Address */}
                    <div className="flex items-center w-full space-x-4 bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-opacity-20">
                        <FaMapMarkerAlt className="text-4xl text-red-400" />
                        <div>
                            <h3 className="text-xl font-bold">Visit Us</h3>
                            <p className="text-gray-300">
                                {adress}
                            </p>
                        </div>
                    </div>
                    {/* Contact Us */}
                    <Link href="/contact" className="flex items-center w-full space-x-4 bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-opacity-20">
                        <FaEnvelope className="text-4xl text-yellow-500" />
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
