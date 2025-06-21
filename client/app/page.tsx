'use client';

import AnimatedHero from '@/components/AnimatedHero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
      <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <Navbar />
        <AnimatedHero />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
  );
}