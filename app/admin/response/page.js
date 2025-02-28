'use client'
import { PaginationControls } from "@/app/components/Pagination/Pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useRef, useState } from "react";
import DeleteResponse from "./components/DeleteResponse";
export default function Page() {
    const [responses, setResponses] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const itemsPerPage = 10
    const containerRef = useRef(null)

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true)
            try {
                // Replace with your actual API endpoint
                const response = await fetch(
                    `/api/admin/response?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`,
                )
                const data = await response.json()

                setResponses(data.response)
                // Calculate total pages based on total items
                setTotalPages(Math.ceil(data.total / itemsPerPage))

            } catch (error) {
                console.error("Error fetching products:", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProducts()
    }, [currentPage])


    const formatRelativeTime = (dateString) => {
        const now = new Date();
        const date = new Date(dateString);
        const diffInSeconds = Math.floor((now - date) / 1000);

        if (diffInSeconds < 60) {
            return `${diffInSeconds}s ago`;
        }

        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) {
            return `${diffInMinutes}m ago`;
        }

        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) {
            return `${diffInHours}h ago`;
        }

        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays < 7) {
            return `${diffInDays}d ago`;
        }

        const diffInWeeks = Math.floor(diffInDays / 7);
        if (diffInWeeks < 4) {
            return `${diffInWeeks}w ago`;
        }

        const diffInMonths = Math.floor(diffInDays / 30);
        if (diffInMonths < 12) {
            return `${diffInMonths}mo ago`;
        }

        const diffInYears = Math.floor(diffInDays / 365);
        return `${diffInYears}y ago`;
    };

    return (
        <div ref={containerRef} className="container mx-auto p-4">
            <h1 className="text-2xl text-black font-bold mb-4">Responses Dashboard</h1>

            {(!isLoading && responses.length === 0) ? (
                <div className="text-center text-lg text-gray-600">Not Found</div>
            ) : (
                <>
                    {/* Desktop View */}
                    <div className="md:block overflow-x-auto hidden">
                        <table className="min-w-full bg-white border border-light-gray-hover">
                            <thead>
                                <tr>
                                    <th className="border-b border-light-gray-hover px-4 py-2 text-left">Time</th>
                                    <th className="border-b border-light-gray-hover px-4 py-2 text-left">Name</th>
                                    <th className="border-b border-light-gray-hover px-4 py-2 text-left">Email</th>
                                    <th className="border-b border-light-gray-hover px-4 py-2 text-left">Phone</th>
                                    <th className="border-b border-light-gray-hover px-4 py-2 text-left">Message</th>
                                    <th className="border-b border-light-gray-hover px-4 py-2 text-left">Interest</th>
                                    <th className="border-b border-light-gray-hover px-4 py-2 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading
                                    ? Array.from({ length: itemsPerPage }).map((_, index) => (
                                        <tr key={index}>
                                            <td className="border-b border-light-gray-hover px-4 py-2">
                                                <Skeleton className="h-[24px]" />
                                            </td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">
                                                <Skeleton className="h-[24px]" />
                                            </td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">
                                                <Skeleton className="h-[24px]" />
                                            </td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">
                                                <Skeleton className="h-[24px]" />
                                            </td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">
                                                <Skeleton className="h-[24px]" />
                                            </td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">
                                                <Skeleton className="h-[24px]" />
                                            </td>
                                            <td className="border-b border-light-gray-hover px-4 py-2 relative">
                                                <Skeleton className="h-[24px]" />
                                            </td>
                                        </tr>
                                    ))
                                    : responses.map((response) => (
                                        <tr key={response._id}>
                                            <td className="border-b border-light-gray-hover px-4 py-2">
                                                {formatRelativeTime(response.createdAt)}
                                            </td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">
                                                {response.name}
                                            </td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">
                                                {response.email}
                                            </td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">
                                                {response.phone}
                                            </td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">
                                                {response.message}
                                            </td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">
                                                {response.interest}
                                            </td>
                                            <td className="border-b border-light-gray-hover px-4 py-2 relative">
                                                <DeleteResponse setResponses={setResponses} id={response._id} />
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile View */}
                    <div className="block md:hidden">
                        {isLoading
                            ? Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-md">
                                    <div className="mb-2">
                                        <p className="font-semibold">Time:</p>
                                        <Skeleton className="h-[24px]" />
                                    </div>
                                    <div className="mb-2">
                                        <p className="font-semibold">Name:</p>
                                        <Skeleton className="h-[24px]" />
                                    </div>
                                    <div className="mb-2">
                                        <p className="font-semibold">Email:</p>
                                        <Skeleton className="h-[24px]" />
                                    </div>
                                    <div className="mb-2">
                                        <p className="font-semibold">Phone:</p>
                                        <Skeleton className="h-[24px]" />
                                    </div>
                                    <div className="mb-2">
                                        <p className="font-semibold">Message:</p>
                                        <Skeleton className="h-[24px]" />
                                    </div>
                                    <div className="mb-2">
                                        <p className="font-semibold">Interest:</p>
                                        <Skeleton className="h-[24px]" />
                                    </div>
                                    <div className="mt-4">
                                        <Skeleton className="h-[24px]" />
                                    </div>
                                </div>
                            ))
                            : responses.map((response) => (
                                <div key={response._id} className="mb-4 p-4 bg-white rounded-lg shadow-md">
                                    <div className="mb-2">
                                        <p className="font-semibold">Time:</p>
                                        <p>{formatRelativeTime(response.createdAt)}</p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="font-semibold">Name:</p>
                                        <p>{response.name}</p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="font-semibold">Email:</p>
                                        <p>{response.email}</p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="font-semibold">Phone:</p>
                                        <p>{response.phone}</p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="font-semibold">Message:</p>
                                        <p>{response.message}</p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="font-semibold">Interest:</p>
                                        <p>{response.interest}</p>
                                    </div>
                                    <div className="mt-4">
                                        <DeleteResponse setResponses={setResponses} id={response._id} />
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Pagination Controls */}
                    <div className="relative mt-4">
                        <PaginationControls
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={(page) => {
                                setCurrentPage(page)
                                if (containerRef.current) {
                                    containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
                                }
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
