'use client';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';

export default function UserContainer() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { data: session } = useSession();

    const handleLogout = () => {
        signOut();
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Function to get the user's initials
    const getInitials = (name) => {
        if (!name) return '';
        const names = name.split(' ');
        return names.map(n => n.charAt(0).toUpperCase()).join('');
    };

    return (
        <div>
            {session && (
                <div className="relative">
                    <button
                        className={`flex items-center rounded-full overflow-hidden ${isDropdownOpen && "outline-none transition duration-200 ease-in-out ring-2 ring-indigo-700"}`}
                        onClick={toggleDropdown}
                    >
                        {/* Conditional Rendering for Image or Initials */}
                        {session.user.image ? (
                            <Image
                                src={session.user.image}
                                alt="User avatar"
                                width={40}
                                height={40}
                                className="rounded-full object-cover"
                            />
                        ) : (
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-bold">
                                {getInitials(session.user.name)}
                            </div>
                        )}
                    </button>

                    {isDropdownOpen && (
                        <div className="relative">
                            <div className="absolute z-50 -right-28 sm:-right-[120px] md:-right-14 top-3 bg-white shadow-lg rounded-lg w-72">
                                <div className="p-6 rounded-lg">
                                    {/* User Profile Section */}
                                    <div className="space-y-4">
                                        <h2 className="text-lg font-semibold text-gray-800 text-center border-b pb-2">
                                            User Profile
                                        </h2>
                                        <div className="flex items-center space-x-3 bg-gray-100 p-4 rounded-lg">
                                            {session.user.image ? (
                                                <Image
                                                    src={session.user.image}
                                                    alt="User avatar"
                                                    width={48}
                                                    height={48}
                                                    className="rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-bold">
                                                    {getInitials(session.user.name)}
                                                </div>
                                            )}
                                            <div className="flex flex-col overflow-hidden">
                                                <p className="font-medium text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">
                                                    {session.user.name || 'N/A'}
                                                </p>
                                                <p className="text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                                                    {session.user.email || 'N/A'}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Logout Button */}
                                        <button
                                            onClick={handleLogout}
                                            className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300 text-center"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
