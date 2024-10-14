'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  const pathname = usePathname();
  const isAdminPath = pathname.startsWith('/admin');
  const isAuthPath = pathname.startsWith('/signin') || pathname.startsWith('/signup') || pathname.startsWith('/reset');
  return (!isAdminPath && !isAuthPath &&
    <div className="bg-dark-gray">
      <footer className=" px-3 sm:px-5 max-w-7xl block mx-auto text-white py-8">
        <div className=" grid md:grid-cols-4 grid-cols-2 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">We help you get recognized for your skills through the RPL process, empowering your career and personal growth.</p>
            <Link href="/about" className="text-light-blue">Learn More</Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <div className="text-sm space-y-2">
              <p><Link href="/">Home</Link></p>
              <p><Link href="/courses">Courses</Link></p>
              <p><Link href="/about">About us</Link></p>
              <p><Link href="/faq">FAQs</Link></p>
              <p><Link href="/contact">Contact Us</Link></p>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <div className="text-sm space-y-2">
              <p><Link href="/terms">Terms & Conditions</Link></p>
              <p><Link href="/privacy">Privacy Policy</Link></p>
              <p><Link href="/refund">Refund Policy</Link></p>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <div className="text-sm space-y-2">
              <p><a href="tel:+61483921139">Phone: +61483921139</a></p>
              <p><a href="mailto:rplfasttrack@gmail.com">Email: rplfasttrack@gmail.com</a></p>
              <p>Address: 26 Clement Way, Melton South, Victoria 3338</p>
            </div>
          </div>
        </div>



        {/* Bottom Section */}
        <div className="mt-8 flex items-center justify-center ">
          {/* Social Media Links */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-light-blue hover:scale-105 hover:text-light-blue-hover transition duration-300"
              >
                <FaFacebook className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a
                href="#"
                className="text-light-blue hover:scale-105 hover:text-light-blue-hover transition duration-300"
              >
                <FaTwitter className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a
                href="#"
                className="text-light-blue hover:scale-105 hover:text-light-blue-hover transition duration-300"
              >
                <FaLinkedin className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a
                href="#"
                className="text-light-blue hover:scale-105 hover:text-light-blue-hover transition duration-300"
              >
                <FaInstagram className="w-8 h-8 md:w-10 md:h-10" />
              </a>
            </div>
          </div>
        </div>



        {/* Footer Bottom */}
        <div className="text-center text-sm mt-8">
          <p>&copy; 2024 RPL Fast Track Website. All Rights Reserved.</p>
          <p className="mt-2">
            Designed and developed by <a href="#" target="_blank" rel="noopener noreferrer" className="text-light-blue">Mostaque Ahmad</a>.
          </p>
        </div>

      </footer>

    </div>
  );
};

export default Footer;