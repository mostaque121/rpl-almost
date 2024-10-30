import Image from 'next/image';
import Link from 'next/link';
import ResponseForm from '../form/ResponseForm';

const HeroSection = () => {
    return (
        <div className="relative h-[600px]">
            {/* Background Image */}
            <Image
                src="/group.jpg"
                alt="Background Image"
                fill
                quality={75}
                priority
                className="z-[-1] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative flex gap-10 w-full justify-between h-full px-3 sm:px-5 py-5">
                {/* Content */}
                <div className="flex flex-col w-full md:px-16 justify-center md:items-start items-center text-center text-white h-full space-y-6">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl md:text-left font-extrabold">
                        Welcome to RPL Fast Track
                    </h1>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl md:text-left font-semibold">
                        Accelerate Your Qualifications
                    </h2>
                    <p className="text-base sm:text-lg md:text-start lg:text-xl max-w-lg">
                        Join our RPL Fast Track program to showcase your skills and earn the certifications you deserve. Transform your career and unlock new opportunities!
                    </p>
                    <Link href="/courses">
                        <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300">
                            Start Your Journey
                        </button>
                    </Link>
                </div>

                {/* Response Form */}
                <div className="md:flex hidden items-center">
                    <ResponseForm />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
