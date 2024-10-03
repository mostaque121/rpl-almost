import { fetchData } from "@/app/lib/fetchData";
import DeleteButton from "./components/DeleteButton";
export default async function Page() {
    const responses = await fetchData('api/admin/response');

    return (responses &&
        <div className="p-5">
            <h1 className="text-2xl text-dark-text font-bold mb-4">Responses Dashboard</h1>
            {responses.length === 0 ? (
                <p>No responses found.</p>
            ) : (
                <div className="overflow-x-auto">
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
            )}
        </div>
    );
}