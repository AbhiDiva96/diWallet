'use client';

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignIn() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const router = useRouter();

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post("/api/signin", formData);
      setSuccess(response.data.message); // Success message from API

      // Store the token in localStorage or cookies
      localStorage.setItem("token", response.data.token);

      // Redirect to the homepage or dashboard
      router.push("/dashboard"); // Assuming you have a dashboard page
    } catch (error: any) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:to-gray-700">
      <div className="p-8 w-full max-w-md bg-white/30 dark:bg-gray-800/30 backdrop-filter backdrop-blur-md shadow-lg rounded-xl border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
          Login
        </h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-white/60 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:text-white text-gray-900 placeholder-gray-400"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-white/60 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:text-white text-gray-900 placeholder-gray-400"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Forgot Password and Sign Up Links */}
        <div className="mt-4 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            Don't have an account?
            <a
              href="/signup"
              className="ml-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            >
              Sign up
            </a>
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Forgot your password?
            <a
              href="/reset-password"
              className="ml-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            >
              Reset here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
