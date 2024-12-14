import { fetchResponse } from "../lib/fetchDataForAdmin";
import DeleteResponse from "./components/DeleteResponse";

export default async function Page() {
    const responses = await fetchResponse();

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
        responses && (
            <div className="p-5">
                <h1 className="text-2xl text-black font-bold mb-4">Responses Dashboard</h1>
                {responses.length === 0 ? (
                    <p>No responses found.</p>
                ) : (
                    <>
                        {/* Desktop view */}
                        <div className="md:block overflow-x-auto  hidden">
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
                                    {responses.map((response) => (
                                        <tr key={response._id}>
                                            <td className="border-b border-light-gray-hover px-4 py-2">{formatRelativeTime(response.createdAt)}</td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">{response.name}</td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">{response.email}</td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">{response.phone}</td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">{response.message}</td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">{response.interest}</td>
                                            <td className="border-b border-light-gray-hover px-4 py-2 relative">
                                                <DeleteResponse id={response._id} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile view */}
                        <div className="block md:hidden">
                            {responses.map((response) => (
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
                                        <DeleteResponse id={response._id} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        )
    );
}
