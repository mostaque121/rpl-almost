'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideOptions({ closeSidebar }) {
    const pathname = usePathname();
    return (
        <div>
            <Link href="/home">
                <p onClick={closeSidebar} className={`sidebar-option ${pathname === '/home' && 'active'} `}>
                    Home
                </p>
            </Link>
            <Link href="/about">
                <p onClick={closeSidebar} className={`sidebar-option ${pathname === '/about' && 'active'}  `}>
                    About Us
                </p>
            </Link>
            <Link href="/courses">
                <p onClick={closeSidebar} className={`sidebar-option ${pathname === '/courses' && 'active'} '} `}>
                    courses
                </p>
            </Link>
            <Link href="/contact">
                <p onClick={closeSidebar} className={`sidebar-option ${pathname === '/contact' && 'active'} '} `}>
                    Contact Us
                </p>
            </Link>
        </div>
    )
} 