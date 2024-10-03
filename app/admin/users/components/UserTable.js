'use client';
import { revalidateUsers } from "@/app/lib/action";
import { useSession } from "next-auth/react";
import Image from "next/image"; // Import Next.js Image component
import { useState } from "react";
import toast from "react-hot-toast";
import { FaUserAlt, FaUserShield, FaUserTie } from "react-icons/fa";

const UserTable = ({ users }) => {

    const { data: session } = useSession();
    const currentUser = session?.user;

    // State to manage loading for each user
    const [loadingUserId, setLoadingUserId] = useState(null);

    const toggleRole = async (userId, newRole) => {
        setLoadingUserId(userId); // Set loading state for the user
        try {
            await fetch(`/api/admin/users`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId: userId, role: newRole }),
            });
            await revalidateUsers();
            toast.success('Success');
        } catch (error) {
            console.error("Failed to update user role:", error);
            toast.error('Error');
        } finally {
            setLoadingUserId(null); // Reset loading state after completion
        }
    };

    return (
        <div>
            <div className="md:block overflow-x-auto hidden">
                <table className="min-w-full w-full   bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-dark-gray text-white">
                        <tr>
                            <th className="py-3 px-4 text-left text-sm font-medium">Image</th>
                            <th className="py-3 px-4 text-left text-sm font-medium">Name</th>
                            <th className="py-3 px-4 text-left text-sm font-medium">Email</th>
                            <th className="py-3 px-4 text-left text-sm font-medium">Role</th>
                            {currentUser?.role === "boss" && (
                                <th className="py-3 px-4 text-left text-sm font-medium">Actions</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className={`border-b  ${currentUser?.id === user._id ? "bg-green-100" : ""}`}>
                                <td className="py-3 px-4">
                                    {user.image ? (
                                        <Image
                                            src={user.image}
                                            alt={`${user.name}'s profile image`}
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-light-gray-hover flex items-center justify-center">
                                            <span className="text-light-gray-active">N/A</span>
                                        </div>
                                    )}
                                </td>
                                <td className="py-3 px-4">{user.name}</td>
                                <td className="py-3 px-4">{user.email}</td>
                                <td className="py-3 px-4">{user.role}</td>
                                {currentUser?.role === "boss" && (
                                    <td className="py-3 px-4">
                                        <div className="flex space-x-2">
                                            {currentUser?.id !== user._id && user.role !== "boss" && (
                                                <button
                                                    onClick={() => toggleRole(user._id, "boss")}
                                                    disabled={loadingUserId === user._id}
                                                    className={`flex items-center px-2 py-1 text-sm font-semibold bg-green-500 text-white rounded hover:bg-green-600 ${loadingUserId === user._id ? "opacity-50" : ""}`}
                                                >
                                                    {loadingUserId === user._id ? (
                                                        <span className="loader-small"></span> // Spinner (see CSS below)
                                                    ) : (
                                                        <>
                                                            <FaUserTie className="mr-1" /> Make Boss
                                                        </>
                                                    )}
                                                </button>
                                            )}
                                            {currentUser?.id !== user._id && user.role !== "admin" && (
                                                <button
                                                    onClick={() => toggleRole(user._id, "admin")}
                                                    disabled={loadingUserId === user._id}
                                                    className={`flex items-center px-2 py-1 text-sm font-semibold bg-blue-500 text-white rounded hover:bg-blue-600 ${loadingUserId === user._id ? "opacity-50" : ""}`}
                                                >
                                                    {loadingUserId === user._id ? (
                                                        <span className="loader-small"></span> // Spinner (see CSS below)
                                                    ) : (
                                                        <>
                                                            <FaUserShield className="mr-1" /> Make Admin
                                                        </>
                                                    )}
                                                </button>
                                            )}
                                            {currentUser?.id !== user._id && user.role === "admin" && (
                                                <button
                                                    onClick={() => toggleRole(user._id, "user")}
                                                    disabled={loadingUserId === user._id}
                                                    className={`flex items-center px-2 py-1 text-sm font-semibold bg-red-500 text-white rounded hover:bg-red-600 ${loadingUserId === user._id ? "opacity-50" : ""}`}
                                                >
                                                    {loadingUserId === user._id ? (
                                                        <span className="loader-small"></span> // Spinner (see CSS below)
                                                    ) : (
                                                        <>
                                                            <FaUserAlt className="mr-1" /> Revoke Admin
                                                        </>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden">
                {users.map((user) => (
                    <div key={user._id} className={`border-b  p-4 ${currentUser?.id === user._id ? "bg-green-100" : ""}`}>
                        <div className="flex items-center">
                            {user.image ? (
                                <Image
                                    src={user.image}
                                    alt={`${user.name}'s profile image`}
                                    width={40}
                                    height={40}
                                    className="rounded-full mr-3"
                                />
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-light-gray-hover flex items-center justify-center mr-3">
                                    <span className="text-gray-400">N/A</span>
                                </div>
                            )}
                            <div className="flex flex-col">
                                <span className="font-semibold">{user.name}</span>
                                <span className="text-sm text-dark-gray">{user.email}</span>
                                <span className="text-sm">{user.role}</span>
                                {currentUser?.role === "boss" && currentUser?.id !== user._id && (
                                    <div className="flex space-x-2 mt-2">
                                        {user.role !== "boss" && (
                                            <button
                                                onClick={() => toggleRole(user._id, "boss")}
                                                disabled={loadingUserId === user._id}
                                                className={`flex items-center px-2 py-1 text-sm font-semibold bg-green-500 text-white rounded hover:bg-green-600 ${loadingUserId === user._id ? "opacity-50" : ""}`}
                                            >
                                                {loadingUserId === user._id ? (
                                                    <span className="loader-small"></span> // Spinner (see CSS below)
                                                ) : (
                                                    <>
                                                        <FaUserTie className="mr-1" /> Make Boss
                                                    </>
                                                )}
                                            </button>
                                        )}
                                        {user.role !== "admin" && (
                                            <button
                                                onClick={() => toggleRole(user._id, "admin")}
                                                disabled={loadingUserId === user._id}
                                                className={`flex items-center px-2 py-1 text-sm font-semibold bg-blue-500 text-white rounded hover:bg-blue-600 ${loadingUserId === user._id ? "opacity-50" : ""}`}
                                            >
                                                {loadingUserId === user._id ? (
                                                    <span className="loader-small"></span> // Spinner (see CSS below)
                                                ) : (
                                                    <>
                                                        <FaUserShield className="mr-1" /> Make Admin
                                                    </>
                                                )}
                                            </button>
                                        )}
                                        {user.role === "admin" && (
                                            <button
                                                onClick={() => toggleRole(user._id, "user")}
                                                disabled={loadingUserId === user._id}
                                                className={`flex items-center px-2 py-1 text-sm font-semibold bg-red-500 text-white rounded hover:bg-red-600 ${loadingUserId === user._id ? "opacity-50" : ""}`}
                                            >
                                                {loadingUserId === user._id ? (
                                                    <span className="loader-small"></span> // Spinner (see CSS below)
                                                ) : (
                                                    <>
                                                        <FaUserAlt className="mr-1" /> Revoke Admin
                                                    </>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserTable;
