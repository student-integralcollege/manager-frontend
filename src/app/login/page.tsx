"use client";

import { useRouter } from "next/navigation";
import {saveUserID,saveAccCreated,} from "@/utils/storage";

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleLogin = () => {
    console.log("MOCK GOOGLE LOGIN CLICKED");
    saveUserID("manager-demo-123");
    saveAccCreated(0);
    router.replace("/create-profile");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1a1a1a] p-4">
      <div className="relative h-[720px] w-full max-w-[360px] overflow-hidden rounded-[24px]">
        <img
          src="/photo.png"
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
            className="flex w-full items-center justify-center gap-3 rounded-md bg-[#28627a] px-4 py-3 text-sm"
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
            Continue with LinkedIn
          </button>

          <button
            type="button"
            className="mt-3 flex w-full items-center justify-center gap-3 rounded-md bg-[#28627a] px-4 py-3 text-sm"
          >
            Continue with Facebook
          </button>
        </div>
      </div>
    </main>
  );
}