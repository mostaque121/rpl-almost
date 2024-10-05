"use client"; // Necessary to enable client-side features
import { signOut, useSession } from "next-auth/react"; // Import useSession and signOut
import Image from "next/image"; // Import the Image component from Next.js
import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";

const AdminNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: session } = useSession(); // Use the session data from NextAuth

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    signOut(); // Sign out the user
  };

  return (
    <nav className="bg-white z-[100] text-black px-4 py-2 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link href='/home'>
        <div className="flex items-center md:ml-0 ml-10 space-x-4">
          <img src="/logo.png" alt="Admin Logo" className="h-10" /> {/* Replace with your logo */}
        </div>
      </Link>


      {/* Middle Navigation Items */}
      <div className="sm:flex hidden items-center space-x-4">
        <span className="text-xl font-bold">Admin Panel</span>
      </div>

      {/* Right Icons and Profile */}
      <div className="flex items-center space-x-4">
        {/* User Profile */}
        {session ? (
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
              {session.user.image && ( // Check if user image exists
                <Image
                  src={session.user.image}
                  alt="User Profile Image"
                  width={40} // Set desired width
                  height={40} // Set desired height
                  className="rounded-full" // Add rounded class for circular image
                />
              )}
              <span className="ml-2 hidden md:block">{session.user.name}</span> {/* Display user's name */}
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10 border border-gray-300">
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="font-semibold">{session.user.name}</p>
                  <p className="text-sm text-gray-600">{session.user.email}</p>
                  <p className="text-sm text-gray-600">{session.user.role}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 font-medium"
                >
                  <FaSignOutAlt className="inline-block mr-2" /> Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <span className="text-xl font-bold">Not logged in</span> // Show a message or leave empty when not logged in
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;
