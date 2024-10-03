'use client';
import { useState } from 'react';
import { FaCloudUploadAlt, FaGlobe, FaHome, FaPaperPlane, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { GrNext, GrPrevious } from "react-icons/gr";
import { IoMdHappy } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import SidebarItem from './SidebarItem';
import SidebarItemWithDropdown from './SidebarItemWithDropdown';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex bg-dark-navbar overflow-y-auto scrollbar-hidden flex-col h-full ${isOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-all duration-300`}>
      <div className="flex items-center justify-end p-3 sm:p-4 bg-gray-900">
        <button onClick={toggleSidebar} className="text-x">
          {isOpen ? <GrPrevious /> : <GrNext />}
        </button>
      </div>

      <nav className="flex flex-col p-3 sm:p-4 space-y-4">
        {/* Sidebar items without sub-items */}
        <SidebarItem href="/admin" icon={<FaHome />} label="Home" isOpen={isOpen} />
        <SidebarItem href="/admin/users" icon={<FaUsers />} label="Users" isOpen={isOpen} />
        <SidebarItem href="/admin/response" icon={<FaPaperPlane />} label="Response" isOpen={isOpen} />

        {/* Sidebar item with sub-items (Dropdown) */}
        <SidebarItemWithDropdown
          icon={<FaCloudUploadAlt />}
          label="Upload"
          isOpen={isOpen}
          subItems={[
            { href: '/admin/upload/courses/section', label: 'Section' },
            { href: '/admin/upload/courses/course', label: 'Course' },
          ]}
        />
        <SidebarItemWithDropdown
          icon={<FaGlobe />}
          label="Content"
          isOpen={isOpen}
          subItems={[
            { href: '/admin/courses', label: 'Courses' },
          ]}
        />

        <SidebarItemWithDropdown
          icon={<MdReviews />}
          label="Reviews"
          isOpen={isOpen}
          subItems={[
            { href: '/admin/review/all', label: 'All Reviews' },
            { href: '/admin/review/pending', label: 'Pending Reviews' },
          ]}
        />
        <SidebarItemWithDropdown
          icon={<IoMdHappy />}
          label="Happy Client"
          isOpen={isOpen}
          subItems={[
            { href: '/admin/upload/happyclient', label: 'Upload' },
            { href: '/admin/happyclient', label: 'See All' },
          ]}
        />

        <SidebarItem href="/admin/logout" icon={<FaSignOutAlt />} label="Logout" isOpen={isOpen} />
      </nav>
    </div>
  );
};

export default AdminSidebar;


