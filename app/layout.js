import { GoogleAnalytics } from '@next/third-parties/google';
import { Toaster } from 'react-hot-toast';
import Footer from "./components/footer/Footer";
import Navbar from './components/navbar/Navbar2';
import "./globals.css";
import { getCoursesAndSections } from './lib/action';

export const metadata = {
  title: {
    default: "RPL Fast Track",
    template: "%s | RPL Fast Track",
  },
  description: "Quickly and efficiently gain recognition for your prior learning and experiences in Australia through our streamlined RPL process.",
  keywords: ["RPL", "Recognition of Prior Learning", "Fast Track", "Skills Assessment", "Education", "Career Advancement", "Australia"],
  author: "RPL Fast Track Australia",
  robots: "index, follow",
  openGraph: {
    title: "RPL Fast Track Australia",
    description: "Quickly and efficiently gain recognition for your prior learning and experiences in Australia.",
    url: "https://rplfastrack.com",
    type: "website",
    images: [
      {
        url: "/career.jpg",
        width: 1200,
        height: 630,
        alt: "RPL Fast Track Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@", // Replace with your Twitter handle
    title: "RPL Fast Track Australia",
    description: "Gain recognition for your prior learning and fast track your career in Australia.",
    image: "/career.jpg",// Replace with your Twitter image URL
  },
};
export default async function RootLayout({ children }) {
  const fetchedData = await getCoursesAndSections();

  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" reverseOrder={false} />
        <Navbar fetchedData={fetchedData} />
        {children}
        <GoogleAnalytics gaId="G-C5F83DW248" />
        <Footer />
      </body>
    </html>
  );
}
