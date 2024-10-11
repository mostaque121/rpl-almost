'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavOptions() {
    const pathname = usePathname();
    return (
        <div className='flex gap-5'>
            <Link href="/home">
                <p className={`nav-option ${pathname === '/home' && 'active'} `}>
                    Home
                </p>
            </Link>
            <Link href="/about">
                <p className={` nav-option ${pathname === '/about' && 'active'} `}>
                    About Us
                </p>
            </Link>
            <Link href="/courses">
                <p className={`nav-option ${pathname === '/courses' && 'active'} `}>
                    Courses
                </p>
            </Link>
            <Link href="/contact">
                <p className={`nav-option ${pathname === '/contact' && 'active'} `}>
                    Contact Us
                </p>
            </Link>
        </div>
    )
} 