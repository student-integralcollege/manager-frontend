"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ManagerPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const userID = searchParams.get("userID");

    if (userID) {
      localStorage.setItem("userID", userID);

      console.log("User ID:", userID);
    }
  }, [searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Loading profile...</p>
    </div>
  );
}