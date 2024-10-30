import Image from "next/image";
import Link from "next/link";

export default function SectionCard({ section }) {
    return (
        <div className="bg-white mb-6 flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href={`section/${section.link}`} className="group">
                <div className="relative w-full md:w-60 h-auto">
                    <Image
                        src={section.imageSquareLink}
                        alt="Service Image"
                        width={720}
                        height={720}
                    />
                </div>
            </Link>

            <div className="p-5">
                <Link href={`section/${section.link}`}>
                    <h3 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                        {section.title}
                    </h3>
                </Link>
                <div className="mt-2 space-y-1">
                    {section.courses.slice(0, 3).map((course) => (
                        <Link key={course._id} href={`/courses/${course.link}`}>
                            <p className="text-base text-gray-600 hover:text-blue-500 ">
                                🎓 {course.title}
                            </p>
                        </Link>
                    ))}
                </div>
                <Link href={`section/${section.link}`}>
                    <p className="inline-block mt-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-10 rounded-full shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                        More courses
                    </p>
                </Link>
            </div>
        </div>
    );
}
