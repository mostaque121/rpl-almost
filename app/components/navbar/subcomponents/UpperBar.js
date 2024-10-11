import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { MdCall, MdMail } from "react-icons/md";
export default function UpperBar() {
    return (
        <div className="bg-copy shadow-sm py-2 flex justify-between px-5">
            <div className="flex gap-5 text-dark-gray text-sm">
                <div className="flex gap-1 items-center">
                    <MdCall className='text-white' />
                    <a href="tel:+61483921139" className='text-white cursor-pointer hover:underline'>+61483921139</a>
                </div>
                <div className="flex gap-1 items-center">
                    <MdMail className='text-white' />
                    <a href="mailto:rplfasttrack@gmail.com" className='text-white cursor-pointer hover:underline'> rplfasttrack@gmail.com</a>
                </div>
            </div>
            <div className="flex gap-1 items-center">
                <div className="hover:scale-95 cursor-pointer active:scale-90 transition duration-200 ease-in-out">
                    <FaWhatsappSquare className="text-white hover:text-light-gray-hover transition duration-200 ease-in-out active:text-light-gray-active  w-6 h-6  " />
                </div>
                <div className="hover:scale-95 cursor-pointer active:scale-90 transition duration-200 ease-in-out">
                    <FaFacebookSquare className="text-white hover:text-light-gray-hover transition duration-200 ease-in-out active:text-light-gray-active  w-6 h-6  " />
                </div>
                <div className="hover:scale-95 cursor-pointer active:scale-90 transition duration-200 ease-in-out">
                    <FaLinkedin className="text-white hover:text-light-gray-hover transition duration-200 ease-in-out active:text-light-gray-active  w-6 h-6  " />
                </div>
            </div>
        </div>
    )
}