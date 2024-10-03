// components/AuthProvider.js (client component)
"use client";
import { SessionProvider } from "next-auth/react";

const ClientSessionProvider = ({ children, session }) => {
  return <SessionProvider session={session} refetchInterval={600} refetchOnWindowFocus={false}>{children}</SessionProvider>;
};

export default ClientSessionProvider;
