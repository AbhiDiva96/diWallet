'use client'


import { Navbar } from '@/components/landing/navbar';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/feature';
import { Footer } from '@/components/landing/footer';

export default function Home(){
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

