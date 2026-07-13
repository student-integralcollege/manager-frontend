"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getBasicProfile } from "@/api/profile";
import {saveUserID, saveAccCreated} from "@/utils/storage";

export default function ManagerPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [error, setError] = useState("");

    useEffect(() => {
        const syncProfile = async () => {
            const userID = searchParams.get("userID");

            if (!userID) {
                router.replace("/login");
                return;
            }

            // Save manager ID
            saveUserID(userID);

            try {
                setError("");

                // Fetch manager profile
                const profile = await getBasicProfile(userID);
                const accCreated = profile.accCreated;

                // Save account creation status
                saveAccCreated(accCreated);

                // Route manager based on profile status
                if (accCreated === 1) {
                    router.replace("/dashboard");
                } else {
                    router.replace("/create-profile");
                }
            } catch (error) {
                console.error("Profile sync failed:", error);

                setError(
                    "Unable to load your profile. Please try again."
                );
            }
        };

        syncProfile();
    }, [router, searchParams]);

    return (
        <main className="flex min-h-screen items-center justify-center">
            {error ? (
                <div className="text-center">
                    <p className="text-red-500">{error}</p>

                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 rounded-md bg-[#16465a] px-5 py-2 text-white"
                    >
                        Try Again
                    </button>
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </main>
    );
}