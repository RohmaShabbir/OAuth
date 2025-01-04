"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
console.log(session);
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-center">
      {session ? (
        <>
          <p className="mb-4 text-lg font-medium text-gray-800">
            Signed in as {session.user?.email || "Unknown User"}
          </p>
          <button
            onClick={() => signOut()}
            className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:ring-4 focus:ring-red-300"
          >
            Sign out
          </button>
        </>
      ) : (
        <>
          <p className="mb-4 text-lg  font-medium text-gray-400">
            Not signed in
          </p>
          <button
            onClick={() => signIn()}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
          >
            Sign in
          </button>
        </>
      )}
    </div>
  );
}
