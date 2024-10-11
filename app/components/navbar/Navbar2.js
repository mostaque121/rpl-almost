'use client'
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import SearchModal from '../content/SearchModal';
import LowerBar from "./subcomponents/LowerBar";
import UpperBar from "./subcomponents/UpperBar";

export default function Navbar({ fetchedData }) {
    const pathname = usePathname();
    const isAdminPath = pathname.startsWith('/admin');
    const isAuthPath = pathname.startsWith('/signin') || pathname.startsWith('/signup') || pathname.startsWith('/reset');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState({ courses: [], sections: [] });
    const toggleModal = async () => {
        if (!isModalOpen) {
            setData(fetchedData);
        }
        setIsModalOpen(!isModalOpen);
    };

    return (!isAdminPath && !isAuthPath &&
        <div className="bg-white border-b-2 border-gray-100">
            <div className="hidden md:block">
                <UpperBar />
            </div>
            <div>
                <LowerBar toggleModal={toggleModal} />
                {isModalOpen && <SearchModal data={data} onClose={toggleModal} />}
            </div>
        </div>
    )
}