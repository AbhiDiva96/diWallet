'use client'


import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Features } from '@/components/feature';
import { Footer } from '@/components/footer';

export default function Home(){
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

