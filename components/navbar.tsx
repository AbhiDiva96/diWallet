'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { DarkModeToggle } from './DarkModeToggle';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await fetch('/api/user', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          // Check if the response is OK
          if (response.ok) {
            const userData = await response.json();
            console.log("User data fetched:", userData); // Debugging line
            setUser(userData); // Assuming userData contains { name, avatarUrl }
          } else {
            console.error("Failed to fetch user data:", response.statusText); // Log errors
            setUser(null); // Reset user state if not logged in
          }
        } catch (error) {
          console.error("Failed to fetch user data", error);
          setUser(null);
        }
      } else {
        setUser(null); // Reset user state if no token
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
    setUser(null); // Clear user state
    router.push('/signin'); // Redirect to the sign-in page
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/">
          <div className="flex justify-center text-lg text-black dark:text-white font-bold md:text-xl">
            YourWallet
          </div>
        </Link>

        <div className="flex space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-black dark:text-white font-bold">{user.name}</span>
              <button
                onClick={handleLogout}
                className="border border-gray-800/20 text-lg text-black dark:text-white font-bold md:text-xl p-2 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/signin">
                <button className="flex justify-center border border-gray-800/20 text-lg text-black dark:text-white font-bold md:text-xl p-2 rounded">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="flex justify-center border border-gray-800/20 text-lg text-black dark:text-white font-bold md:text-xl p-2 rounded">
                  Sign Up
                </button>
              </Link>
            </>
          )}
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};
