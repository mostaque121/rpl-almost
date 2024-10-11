import { fetchSection } from "@/app/lib/fetchData";
import Image from "next/image";
import Link from "next/link";

export default async function PopularCourse() {

    const sections = await fetchSection('api/sections');

    return (sections &&
        <div className="bg-gray-100 px-3 sm:px-5 sm:py-16 py-10">
            <h1 className="text-3xl pb-5 text-copy font-semibold text-center">Clients' Favourite</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 sm:gap-5">
                {sections.slice(0, 6).map((section) => (
                    <Link href={`/section/${section.link}`} key={section._id}>
                        <div className="flex p-3 rounded-md bg-custom-gradient gap-3 shadow-md items-center sm:text-lg font-semibold cursor-pointer hover:scale-[1.02] hover:bg-custom-gradient-hover active:scale-95 transition-transform duration-200 ease-in-out">
                            <div className="w-16 shrink-0 rounded-lg overflow-hidden relative h-16 sm:w-20 sm:h-20">
                                <Image src={section.imageSquareLink} className="object-cover" alt="image" width={720} height={720}></Image>
                            </div>
                            <h3 className='text-gray-100'>{section.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};




