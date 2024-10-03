'use client';
import { useState } from 'react';
import { FaBars, FaCloudUploadAlt, FaGlobe, FaHome, FaPaperPlane, FaUsers } from 'react-icons/fa';
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
    <div className="flex">
      {/* Overlay for the sidebar on small screens */}
      <div className={`md:hidden ${isOpen ? 'fixed inset-0 bg-black bg-opacity-50 z-30' : 'hidden'}`} onClick={toggleSidebar}></div>
      {/* Reorder Button for small screens */}
      <div className={`md:hidden flex items-center fixed top-0 justify-end p-4 z-[101]`}>
        <button onClick={toggleSidebar} className="text-2xl">
          <FaBars className='text-black' />
        </button>
      </div>
      {/* Sidebar Container */}
      <div className={`flex flex-col h-full bg-white text-black fixed md:relative overflow-hidden scrollbar-hidden transition-all duration-300 ${isOpen ? 'w-64 fixed' : 'w-0 md:w-64 md:relative'} z-40`}>

        {/* Sidebar Items */}
        <nav className="flex flex-col p-3 sm:p-4 space-y-4 scrollbar-hidden overflow-y-auto max-h-screen">
          {/* Sidebar items without sub-items */}
          <SidebarItem href="/admin/home" icon={<FaHome />} label="Home" isOpen={isOpen} />
          <SidebarItem href="/admin/users" icon={<FaUsers />} label="Users" isOpen={isOpen} />
          <SidebarItem href="/admin/response" icon={<FaPaperPlane />} label="Response" isOpen={isOpen} />

          {/* Sidebar items with sub-items (Dropdown) */}
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
        </nav>
      </div>


    </div>
  );
};

export default AdminSidebar;
