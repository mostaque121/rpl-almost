// components/WhatsAppContact.js
import Image from 'next/image';

const WhatsAppContact = () => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

    return (
        <a
            href={`https://wa.me/${whatsappNumber}`} // Use the environment variable
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 border-2 right-3 sm:right-5 bg-gray-50 rounded-full p-3 shadow-sm transition-transform transform hover:scale-110 z-50 flex items-center justify-center"
            aria-label="Contact us on WhatsApp" // Accessibility feature
        >
            <Image
                src="/whatsapp1.png" // Use the WhatsApp SVG icon
                alt="WhatsApp"
                width={30} // Set the width
                height={30} // Set the height
            />
        </a>
    );
};

export default WhatsAppContact;
