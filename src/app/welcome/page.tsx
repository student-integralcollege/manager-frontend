"use client";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1b1b1b] p-4">
      <div className="relative h-[720px] w-[360px] overflow-hidden rounded-[28px] shadow-2xl">

        {/* Background */}
        <img
          src="/photo.png"
          alt="welcome background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">

          <h1 className="text-[30px] font-extrabold italic leading-tight text-white">
            Manage Your
          </h1>

          <h1 className="text-[30px] font-extrabold italic leading-tight text-lime-400">
            Fitness Centre
          </h1>

          <h1 className="text-[30px] font-extrabold italic leading-tight text-white">
            with us!
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            All your business operations in one place,
            ready for you to take charge.
          </p>

          <hr className="my-8 border-gray-500" />

          <button
            onClick={() => router.push("/login")}
            className="w-full rounded-xl bg-lime-400 py-4 text-xl font-semibold text-black transition hover:bg-lime-300"
          >
            Get Started
          </button>

        </div>
      </div>
    </main>
  );
}