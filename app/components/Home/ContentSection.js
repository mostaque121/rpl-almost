import Image from 'next/image';
import Link from 'next/link';

const ContentSection = () => {
    return (
        <div className="">
            <div className="flex-col md:flex-row overflow-hidden flex justify-center items-center">
                <div className="w-full md:w-1/2 h-96 relative">
                    <Image
                        src="/1_D7G69I9L9xka4AgnW1nn6w.jpg"
                        alt="Description of RPL"
                        fill
                        className='object-cover'
                        priority
                    />
                </div>
                <div className="md:w-1/2 w-full py-3 sm:px-6 px-3">
                    <h1 className="text-center text-3xl">What is RPL?</h1>
                    <p className="sm:text-lg text-sm mt-5">
                        Recognition of Prior Learning (RPL) formalizes existing skills and knowledge, acquired through work, training, or other experiences. By assessing your competencies against industry standards, RPL fast-tracks your qualifications and advances your career without extra coursework. It efficiently leverages your experience, achieving certification, enhancing credentials, and opening new career opportunities. It's a streamlined process for career growth.{" "}
                        <Link href="/rpl">
                            <span className="text-blue-600 hover:underline cursor-pointer">Learn more..</span>
                        </Link>
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center overflow-hidden items-center">
                <div className="md:w-1/2 md:order-1 order-2 py-3 sm:px-6 px-3 w-full">
                    <h1 className="text-3xl text-center">Benefits of RPL</h1>
                    <p className="sm:text-lg text-sm mt-5">
                        Recognition of Prior Learning (RPL) accelerates your career by formally acknowledging your existing skills and experience, helping you gain qualifications more quickly. It enhances your job prospects and allows for career growth without additional coursework. Additionally, RPL is cost-effective and time-efficient, saving you money and reducing the time needed to achieve formal credentials compared to traditional education.{" "}
                        <Link href="/benefits">
                            <span className="text-blue-600 hover:underline cursor-pointer">Learn more..</span>
                        </Link>
                    </p>
                </div>

                <div className="md:w-1/2 md:order-2 order-1 w-full h-96 relative">
                    <Image
                        src="/pexels-fauxels-3182812-1024x683-1.jpg"
                        alt="Benefits of RPL"
                        fill
                        className='object-cover'
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default ContentSection;
