import { GoogleAnalytics } from '@next/third-parties/google';
import { Toaster } from 'react-hot-toast';
import Footer from "./components/footer/Footer";
import WhatsAppContact from './components/modal/WhatsAppContact';
import Navbar from './components/navbar/navbar';
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
  icons: {
    icon: '/favicon/favicon-32x32.png',
    shortcut: '/favicon/favicon-16x16.png',
    apple: [
      { url: '/favicon/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/favicon/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/favicon/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/favicon/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/favicon/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/favicon/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/favicon/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/favicon/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/favicon/apple-icon-180x180.png', sizes: '180x180' },
    ],
    android: '/favicon/android-icon-192x192.png',
  },
  manifest: '/favicon/manifest.json',
};
export default async function RootLayout({ children }) {
  const fetchedData = await getCoursesAndSections();

  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" reverseOrder={false} />
        <WhatsAppContact />
        <Navbar fetchedData={fetchedData} />
        {children}
        <GoogleAnalytics gaId="G-C5F83DW248" />
        <Footer />
      </body>
    </html>
  );
}
