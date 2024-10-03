import { fetchDataForAdmin } from "../lib/fetchDataForAdmin";
import DeleteButton from "./components/DeleteButton";

export default async function Page() {
    const responses = await fetchDataForAdmin('api/admin/response');

    return (
        responses && (
            <div className="p-5">
                <h1 className="text-2xl text-black font-bold mb-4">Responses Dashboard</h1>
                {responses.length === 0 ? (
                    <p>No responses found.</p>
                ) : (
                    <>
                        {/* Desktop view */}
                        <div className="md:block overflow-x-auto hidden">
                            <table className="min-w-full bg-white border border-light-gray-hover">
                                <thead>
                                    <tr>
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
                                            <td className="border-b border-light-gray-hover px-4 py-2">{response.name}</td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">{response.email}</td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">{response.phone}</td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">{response.message}</td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">{response.interest}</td>
                                            <td className="border-b border-light-gray-hover px-4 py-2">
                                                <DeleteButton id={response._id} />
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
                                        <DeleteButton id={response._id} />
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
