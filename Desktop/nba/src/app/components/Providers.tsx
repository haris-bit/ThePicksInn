"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { useSession } from "next-auth/react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
