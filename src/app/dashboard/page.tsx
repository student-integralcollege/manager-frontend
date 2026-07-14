"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {getUserID,getAccCreated,clearAuthStorage,} from "@/utils/storage";

export default function DashboardPage() {
  const router = useRouter();

  const [userID, setUserID] = useState("");
  const [accCreated, setAccCreated] = useState("");

  useEffect(() => {
    const storedUserID = getUserID();
    const storedAccCreated = getAccCreated();

    if (
      !storedUserID ||
      storedAccCreated !== "1"
    ) {
      router.replace("/login");
      return;
    }

    setUserID(storedUserID);
    setAccCreated(storedAccCreated);
  }, [router]);

  const handleLogout = () => {
    clearAuthStorage();

    router.replace("/login");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-5">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900">
          Manager Dashboard
        </h1>

        <div className="mt-6 space-y-4 text-gray-700">
          <div className="rounded-md bg-gray-100 p-4">
            <p className="text-sm text-gray-500">
              User ID
            </p>

            <p className="break-all font-semibold">
              {userID}
            </p>
          </div>

          <div className="rounded-md bg-gray-100 p-4">
            <p className="text-sm text-gray-500">
              Role
            </p>

            <p className="font-semibold">
              manager
            </p>
          </div>

          <div className="rounded-md bg-gray-100 p-4">
            <p className="text-sm text-gray-500">
              Account Created
            </p>

            <p className="font-semibold">
              {accCreated}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full rounded-md bg-[#16465a] p-3 text-white transition hover:opacity-90"
        >
          Logout
        </button>
      </div>
    </main>
  );
}