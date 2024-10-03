import Image from "next/image";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

export default function SectionCardForAdmin({ section }) {
    return (
        <div className="bg-dark-secondary  duration-200 rounded-lg overflow-hidden flex flex-col">
            <Link href={`/admin/${section.link}`}>
                <div className=" p-2 sm:p-4">
                    <div className="relative rounded-md overflow-hidden hover:scale-[1.02] transition-all duration-200 ease-in-out w-full pb-[100%]">
                        <Image
                            src={section.imageSquareLink}
                            alt='section Image'
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 
                            (max-width: 1200px) 50vw, 
                            33vw"
                        />
                    </div>
                </div>
            </Link>
            <div className="pb-4 sm:px-4 px-3 flex-1">
                <Link href={`/admin/${section.link}`}>
                    <h3 className="text-lg text-dark-text font-semibold">
                        <span>{section.index}. </span>
                        {section.title}
                    </h3>
                </Link>
                <div className="flex justify-between mt-2 items-center">
                    <Link href={`/admin/${section.link}`}>
                        <div className="bg-dark-text rounded-md hover:bg-light-gray-active hover:scale-95 active:scale-90 duration-200 ease-in-out transition-all py-1 px-2">
                            <h1>Total Courses: {section.courses.length}</h1>
                        </div>
                    </Link>

                    <Link href={`/admin/edit/${section.link}`}>
                        <div className="items-center gap-2  hover:scale-95 active:scale-90 cursor-pointer duration-200 transition-all ease-out hover:bg-blue-600 active:bg-blue-700 flex w-20 bg-blue-500 text-dark-text rounded-md px-2 py-1 ">
                            <FaEdit />
                            <p>Edit</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

