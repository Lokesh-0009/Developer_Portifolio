'use client';

import { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';
import CustomCursor from './CustomCursor';
import AnimatedBackground from './AnimatedBackground';
import Navbar from './Navbar';
import TerminalOverlay from './TerminalOverlay';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const bar = document.querySelector('.scroll-progress') as HTMLElement;
      if (!bar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${pct}%`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress no-print" />
      <CustomCursor />
      <AnimatedBackground />
      
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <TerminalOverlay />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full z-10 pt-16">
              {children}
            </main>
          </div>
        </>
      )}
    </>
  );
}

