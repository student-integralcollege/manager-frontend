"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuthRoute } from "@/utils/getAuthRoute";
import {
  getUserID,
  getAccCreated,
} from "@/utils/storage";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const userID = getUserID();
    const accCreated = getAccCreated();
    const route = getAuthRoute(
      userID,
      accCreated
    );

    router.replace(route);
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <p>Loading...</p>
    </main>
  );
}