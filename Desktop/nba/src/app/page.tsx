"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import BigBoard from "./pages/BigBoard/page";
import GoogleForm from "./pages/GoogleForm/page";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile responsive navbar */}
      <nav className="flex items-center justify-between px-4 py-6 bg-white border-b md:px-8">
        <div className="text-2xl font-bold text-gray-800">Big Board</div>

        <div className="flex items-center gap-4">
          {session && (
            <>
              <p className="text-gray-800 border-b border-transparent hover:border-gray-800">
                {session.user?.email}
              </p>

              <button
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                onClick={() => signOut()}
              >
                <FaSignOutAlt />
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Page content */}
      <main className="flex-1 flex items-center justify-center bg-gray-100 px-4 py-8 md:p-8">
        {session ? (
          <GoogleForm
            src="https://docs.google.com/forms/d/e/1FAIpQLScTdEkjTorxLaaNK-OL3YSWyimSx2eSTENLdbpG9cKrWTiwTQ/viewform"
            width={1200}
            height={600}
          />
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Sign in to access the Big Board
            </h2>

            {/* place the button in the middle for mobile devices */}
            <button
              className="flex items-center px-16 py-4 text-white bg-blue-500 rounded hover:bg-blue-600 md:px-10 md:text-lg lg:px-20"
              onClick={() => signIn()}
            >
              <span
                className="mr-2 
      text-xl md:text-2xl
      lg:text-3xl"
              >
                Sign in with Google
              </span>

              <FaSignInAlt className="text-xl md:text-2xl lg:text-3xl" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
