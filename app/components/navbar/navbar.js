"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa"
import { FiMail, FiMenu, FiPhone, FiSearch } from "react-icons/fi"
import { RxCross2 } from "react-icons/rx"
import SearchModal from "../content/SearchModal"
import Logo from "./subcomponents/Logo"
export default function Navbar({ fetchedData }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()
    const isAdminPath = pathname.startsWith('/admin');
    const isAuthPath = pathname.startsWith('/signin') || pathname.startsWith('/signup') || pathname.startsWith('/reset');

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Courses", href: "/courses" },
        { name: "Contact", href: "/contact" },
    ]
    const whatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER
    const email = process.env.NEXT_PUBLIC_EMAIL
    const facebookPage = process.env.NEXT_PUBLIC_FACEBOOK_PAGE
    const address = process.env.NEXT_PUBLIC_ADDRESS

    const toggleModal = async () => {
        setIsSearchOpen(!isSearchOpen);
    };


    return (!isAdminPath && !isAuthPath &&
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <div className="relative w-40 h-16">
                                <Image
                                    src='/logoUpdated.png'
                                    fill
                                    priority
                                    alt="Logo"
                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`px-3 py-2 rounded-md text font-medium ${pathname === item.href
                                    ? "bg-primary text-primary-foreground"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                    } transition-colors duration-200`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex  items-center space-x-4">
                        <button
                            className="text-gray-600 hover:text-gray-900 p-2"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <FiSearch className="h-5 w-5" />
                            <span className="sr-only">Search</span>
                        </button>
                        <div className="hidden sm:flex gap-5">
                            <Link href={`tel:${phoneNumber}`}>
                                <div className="hidden sm:flex items-center space-x-2 text-gray-600">
                                    <FiPhone className="h-5 w-5" />
                                    <span className="text-sm">{phoneNumber}</span>
                                </div>
                            </Link>
                            <Link href={`mailto:${email}`}>
                                <div className="hidden sm:flex items-center space-x-2 text-gray-600">
                                    <FiMail className="h-5 w-5" />
                                    <span className="text-sm">{email}</span>
                                </div>
                            </Link>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-600 hover:text-gray-900 p-2"
                            >
                                <FiMenu className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {isSearchOpen && (
                    <SearchModal data={fetchedData} onClose={toggleModal} />
                )}

                {isMenuOpen && (
                    <div>
                        <div
                            className="fixed inset-0 bg-black bg-opacity-60 z-50"
                            onClick={() => setIsMenuOpen(!setIsMenuOpen)}
                        />

                        <div className="bg-white fixed top-0 left-0 z-50 h-screen py-2">

                            <div className="flex w-full h-full flex-col">
                                <div className="flex pb-1 px-4 w-full items-center justify-between gap-5">
                                    <Logo />
                                    <RxCross2 onClick={() => setIsMenuOpen(!setIsMenuOpen)} className="w-8 h-8 cursor-pointer duration-200 transition ease-in-out hover:scale-90 active:scale-75" />
                                </div>
                                <hr></hr>
                                <div className="flex-1 overflow-y-auto">
                                    <div>
                                        <div className="flex flex-col space-y-2">
                                            {navItems.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={`px-3 py-2 rounded-md  font-medium ${pathname === item.href
                                                        ? "bg-primary text-primary-foreground"
                                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                                        } transition-colors duration-200`}
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <hr></hr>

                                    <div className="px-3 my-3 ">
                                        <p className="font-semibold">Call now</p>
                                        <Link href={`tel:${phoneNumber}`} className="text-blue-600 cursor-pointer hover:text-blue-700">{phoneNumber}</Link>
                                    </div>
                                    <div className="px-3 mb-3">
                                        <p className="font-semibold">Email</p>
                                        <Link href={`mailto:${email}`} className="text-blue-600 cursor-pointer hover:text-blue-700">{email}</Link>
                                    </div>
                                    <div className="px-3 mb-3 ">
                                        <p className="font-semibold">Adress</p>
                                        <p className="text-blue-600 cursor-pointer hover:text-blue-700">{address}</p>
                                    </div>

                                    <h1 className="font-semibold block mb-2 text-center">Connect With</h1>
                                    <div className="flex gap-1 justify-center px-3 items-center">
                                        <Link href={`https://wa.me/${whatsAppNumber}`}>
                                            <div className="hover:scale-95 cursor-pointer active:scale-90 transition duration-200 ease-in-out">
                                                <FaWhatsappSquare className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out active:text-blue-800  w-8 h-8  " />
                                            </div>
                                        </Link>
                                        <Link href={facebookPage}>
                                            <div className="hover:scale-95 cursor-pointer active:scale-90 transition duration-200 ease-in-out">
                                                <FaFacebookSquare className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out active:text-blue-800  w-8 h-8  " />
                                            </div>
                                        </Link>

                                        <div className="hover:scale-95 cursor-pointer active:scale-90 transition duration-200 ease-in-out">
                                            <FaLinkedin className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out active:text-blue-800  w-8 h-8  " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )}
            </div>

            <div className="sm:hidden bg-gray-100 py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <Link href={`tel:${phoneNumber}`}>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <FiPhone className="h-4 w-4" />
                            <span className="text-xs">{phoneNumber}</span>
                        </div>
                    </Link>
                    <Link href={`mailto:${email}`}>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <FiMail className="h-4 w-4" />
                            <span className="text-xs">{email}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
