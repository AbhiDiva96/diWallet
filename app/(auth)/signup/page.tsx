'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js for navigation
import axios from 'axios';

export default function Signup() {
  const router = useRouter(); // Initialize router for redirecting

  // Form state to handle input values and feedback
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Handle input change
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

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('/api/signup', {
        name,
        email,
        password
      })

      if (response.status === 200) {
        setSuccess('User created successfully!');
        router.push('/dashboard');
        setFormData({ name: '', email: '', password: '' });
         // Clear the form on success
      } else {
        setError(response.data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while submitting the form');
    } finally {
      setLoading(false);
    }
  };

  // Redirect to login page when clicking the "Already have an account?" button
  const redirectToLogin = () => {
    router.push('/signin'); // Use Next.js router to navigate to login page
  };

  return (
       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:to-gray-700">
      <div className="p-8 w-full max-w-md bg-white/30 dark:bg-gray-800/30 backdrop-filter backdrop-blur-md shadow-lg rounded-xl border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
          Sign Up
        </h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-white/60 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:text-white text-gray-900 placeholder-gray-400"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email:
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
              Password:
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
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        {/* Already have an account? Redirect to Login */}
        <div className="mt-4 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            Already have an account?
            <button
              onClick={redirectToLogin}
              className="ml-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            >
              Log in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
