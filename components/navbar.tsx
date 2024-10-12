// app/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { DarkModeToggle } from './DarkModeToggle';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push('/');
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
          {session ? (
            <div className="flex items-center space-x-4">
              <span className="text-black dark:text-white font-bold">{session.user?.name}</span>
              <button onClick={handleLogout} className="border border-gray-800/20 text-lg text-black dark:text-white font-bold md:text-xl p-2 rounded">
                Logout
              </button>
            </div>
          ) : (
            <>
              <button onClick={() => signIn()} className="flex justify-center border border-gray-800/20 text-lg text-black dark:text-white font-bold md:text-xl p-2 rounded">
                Login
              </button>
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
