import Link from 'next/link';
import { FaEnvelope, FaFacebook, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export default function ContactDetails() {
    const email = process.env.NEXT_PUBLIC_EMAIL;
    const facebookPage = process.env.NEXT_PUBLIC_FACEBOOK_PAGE
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER
    const whatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    return (
        <div>
            <div className="mt-16">
                <h2 className="text-3xl font-extrabold text-gray-900">Other Ways to Connect</h2>
                <div className="mt-8 grid grid-cols-1 gap-8 ">
                    {[
                        { icon: <FaPhoneAlt className="h-6 w-6 text-white" />, label: 'Phone', contact: phoneNumber, bgColor: 'bg-indigo-500', link: `tel:${phoneNumber}` },
                        { icon: <FaEnvelope className="h-6 w-6 text-white" />, label: 'Email', contact: email, bgColor: 'bg-green-500', link: `mailto:${email}` },
                        { icon: <FaWhatsapp className="h-6 w-6 text-white" />, label: 'WhatsApp', contact: whatsAppNumber, bgColor: 'bg-green-400', link: `https://wa.me/${whatsAppNumber}` },
                        { icon: <FaFacebook className="h-6 w-6 text-white" />, label: 'Facebook', contact: 'Our Facebook Page', bgColor: 'bg-blue-600', link: facebookPage }
                    ].map(({ icon, label, contact, bgColor, link }, index) => (
                        <div key={index} className="bg-white overflow-hidden shadow-lg rounded-lg">
                            <Link href={link}>
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="flex items-center">
                                        <div className={`${bgColor} rounded-md p-3`}>
                                            {icon}
                                        </div>
                                        <div className="ml-5 w-0 flex-1">
                                            <dl>
                                                <dt className="text-sm font-medium text-gray-500 truncate">{label}</dt>
                                                <dd className="text-lg font-medium text-gray-900">
                                                    {link ? (
                                                        <p className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                                                            {contact}
                                                        </p>
                                                    ) : (
                                                        contact
                                                    )}
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

