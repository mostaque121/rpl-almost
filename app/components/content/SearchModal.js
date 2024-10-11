"use client"; // This is a client-side component
import { useDebounce } from '@/app/lib/useDebounce';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function SearchModal({ data, onClose }) {
    const [query, setQuery] = useState('');
    const [activeTab, setActiveTab] = useState('courses'); // 'courses' or 'sections'

    // Use debounce to delay the query updates
    const debouncedQuery = useDebounce(query, 300); // Adjust the delay as needed

    // Filter the data based on the debounced query and active tab
    const filteredCourses = data.courses.filter(course =>
        course.title.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    const filteredSections = data.sections.filter(section =>
        section.title.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    // Limit the number of displayed items
    const displayedCourses = filteredCourses.slice(0, 6);
    const displayedSections = filteredSections.slice(0, 6);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center md:items-center items-end z-50">
            <div className="bg-gray-100 p-6 rounded-lg h-[80vh] flex flex-col w-full max-w-lg relative">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                    ✖️
                </button>

                {/* Tab Navigation */}
                <div className="flex justify-start mb-4">
                    <button
                        className={`px-4 py-1 rounded-md rounded-tr-lg ${activeTab === 'courses' ? ' text-black bg-gray-300 font-semibold' : ' text-gray-800'}`}
                        onClick={() => setActiveTab('courses')}
                    >
                        Courses
                    </button>
                    <button
                        className={`px-4 py-1 rounded-tl-lg rounded-md ${activeTab === 'sections' ? ' text-black bg-gray-300 font-semibold' : ' text-gray-800'}`}
                        onClick={() => setActiveTab('sections')}
                    >
                        Sections
                    </button>
                </div>

                {/* Search Input */}
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Display Filtered Results Based on Active Tab */}
                <div className="flex-1 overflow-y-auto">
                    {activeTab === 'courses' ? (
                        <>
                            {debouncedQuery === '' ? (
                                <p className="text-center text-gray-500">Start typing to search...</p>
                            ) : displayedCourses.length > 0 ? (
                                <div>
                                    {displayedCourses.map((course) => (
                                        <Link href={`/courses/${course.link}`} key={course._id}>
                                            <div
                                                className="py-2 mb-2 rounded-md px-2 bg-white flex gap-3 items-center hover:scale-[.98] active:scale-95 duration-200 transition-all ease-out cursor-pointer"
                                                onClick={onClose}
                                            >
                                                <div className='rounded-md overflow-hidden'>
                                                    <Image src={course.imageSquareLink} alt='image' width={50} height={50}></Image>
                                                </div>
                                                <h1>{course.title}</h1>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-center text-gray-500">No courses found</p>
                            )}
                        </>
                    ) : (
                        <>
                            {debouncedQuery === '' ? (
                                <p className="text-center text-gray-500">Start typing to search...</p>
                            ) : displayedSections.length > 0 ? (
                                <div>
                                    {displayedSections.map((section) => (
                                        <Link key={section._id} href={`/section/${section.link}`}>
                                            <div onClick={onClose} className="py-2 mb-2 shadow-md rounded-md px-2 bg-white flex gap-3 items-center hover:scale-[.98] active:scale-95 duration-200 transition-all ease-out cursor-pointer">
                                                <div className='rounded-md overflow-hidden'>
                                                    <Image src={section.imageSquareLink} alt='image' width={50} height={50}></Image>
                                                </div>
                                                <h1>{section.title}</h1>
                                            </div>
                                        </Link>

                                    ))}
                                </div>
                            ) : (
                                <p className="text-center text-gray-500">No sections found</p>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
