"use client";

import {FormEvent, useState,} from "react";
import { useRouter } from "next/navigation";
import type { ManagerProfile } from "@/api/profile";
import {getUserID, saveAccCreated,} from "@/utils/storage";

export default function CreateProfilePage() {
  const router = useRouter();

  const [formData, setFormData] =
    useState<ManagerProfile>({
      contactNumber: "",
      dob: "",
      role: "Manager",
      gender: "Male",
      coordinates: [77.5946, 12.9716],
      city: "",
      state: "",
      country: "India",
      pincode: "",
    });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const managerID = getUserID();

    if (!managerID) {
      router.replace("/login");
      return;
    }

    try {
      setLoading(true);
      setError("");

      console.log("Mock Profile Data:", formData);

      // Temporary fake API delay
      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      saveAccCreated(1);

      // Show success message before redirecting
      setSuccess(true);

      // Wait 2 seconds so the user sees the success screen
      await new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );

      router.replace("/dashboard");
    } catch (error) {
      console.error(
        "Profile creation failed:",
        error
      );

      setError(
        "Unable to create profile. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Show success screen after profile is created
  if (success) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100 p-5">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <span className="text-3xl">✓</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Profile Created Successfully!
          </h1>

          <p className="mt-2 text-gray-500">
            Redirecting you to the dashboard...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 text-2xl font-bold text-gray-900">
          Complete Your Profile
        </h1>

        <div className="space-y-4">
          <input
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="w-full rounded-md border p-3 text-black"
          />

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full rounded-md border p-3 text-black"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full rounded-md border p-3 text-black"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full rounded-md border p-3 text-black"
          />

          <input
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full rounded-md border p-3 text-black"
          />

          <input
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full rounded-md border p-3 text-black"
          />

          <input
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
            className="w-full rounded-md border p-3 text-black"
          />
        </div>

        {error && (
          <p className="mt-4 text-sm text-red-500">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-md bg-[#16465a] p-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "Creating Profile..."
            : "Complete Profile"}
        </button>
      </form>
    </main>
  );
}