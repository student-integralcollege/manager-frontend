"use client";

import { useRouter } from "next/navigation";
import {
    saveUserID,
    saveAccCreated,
} from "@/utils/storage";

export default function LoginPage() {
    const router = useRouter();

    const handleGoogleLogin = () => {
        const useMockAuth =
            process.env.NEXT_PUBLIC_USE_MOCK_AUTH === "true";

        // Temporary mock authentication
        if (useMockAuth) {
            const temporaryUserID = "manager-demo-123";
            saveUserID(temporaryUserID);
            saveAccCreated(0);
            router.push("/create-profile");
            return;
        }

        // Real Google OAuth flow
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!apiUrl) {
            console.error(
                "NEXT_PUBLIC_API_URL is not configured"
            );

            return;
        }
        window.location.href = `${apiUrl}/auth/google/manager`;
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#1a1a1a] p-4">
            <div className="relative h-[720px] w-full max-w-[360px] overflow-hidden rounded-[24px]">
                <img
                    src="/login-bg.jpg"
                    alt="Login background"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute bottom-0 left-0 right-0 rounded-t-[24px] bg-[#16465a]/95 px-5 py-8 text-white">
                    <h1 className="text-center text-3xl font-bold italic">
                        Hi there!
                    </h1>

                    <p className="mt-3 text-center text-xs text-gray-200">
                        Sign in to keep things running smoothly.
                    </p>

                    <div className="my-5 h-px bg-white/20" />

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="flex w-full items-center justify-center gap-3 rounded-md bg-[#28627a] px-4 py-3 text-sm transition hover:bg-[#32758f]"
                    >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-blue-500">
                            G
                        </span>

                        Continue with Google
                    </button>

                    <button
                        type="button"
                        className="mt-3 flex w-full items-center justify-center gap-3 rounded-md bg-[#28627a] px-4 py-3 text-sm"
                    >
                        <span className="font-bold text-blue-300">
                            in
                        </span>

                        Continue with LinkedIn
                    </button>

                    <button
                        type="button"
                        className="mt-3 flex w-full items-center justify-center gap-3 rounded-md bg-[#28627a] px-4 py-3 text-sm"
                    >
                        <span className="font-bold text-blue-300">
                            f
                        </span>

                        Continue with Facebook
                    </button>
                </div>
            </div>
        </main>
    );
}