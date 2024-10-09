// components/Navbar.tsx
'use client'
import Link from 'next/link';
import { DarkModeToggle } from './DarkModeToggle';

export const Navbar = () => {

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/">
            <div className="flex justify-center text-lg text-black dark:text-white font-bold md:text-xl">
                YourWallet
            </div>
        </Link>
        <div className="flex space-x-4">
          <Link href="/signin">
          <button 
           className='flex-justify-center border border-gray-800/20 text-lg text-black dark:text-white font-bold md:text-xl p-2 rounded'
          >
               login
          </button>
          </Link>
          <Link href="/signup">
              <button
            className='flex-justify-center border border-gray-800/20 text-lg text-black dark:text-white font-bold md:text-xl p-2  rounded'
              >
                SignUp
              </button>
          </Link>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};
