import { getServerSession } from "next-auth";
import { notFound } from 'next/navigation'; // Import notFound function
import { authOptions } from "../api/auth/[...nextauth]/route";
import ClientSessionProvider from "../components/context/ClientSessionProvider";
import AdminNavbar from "./components/navbar/Navbar";
import AdminSidebar from "./components/sidebar/AdminSidebar";


export const generateMetadata = () => {
  return {
    title: 'Admin Dashboard',
    description: 'Admin dashboard for managing application settings and content.',
    robots: {
      index: false,   // Prevents the page from being indexed
      follow: false,   // Prevents search engines from following links
    },
  };
};

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'admin') {
    notFound();
  }

  return (
    <ClientSessionProvider session={session}>
      <div className="flex flex-col h-screen">
        <AdminNavbar />
        <div className="flex overflow-y-auto flex-1">
          <div className="relative">
            <AdminSidebar />
          </div>

          <main className="flex-1 bg-dark-secondary overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </ClientSessionProvider>
  );
}
