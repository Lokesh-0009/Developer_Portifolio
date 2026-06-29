'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';


const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resumeLink = "https://docs.google.com/document/d/1iJ5yTmvZoj2KsSkNLS_7kVYsudmTLs0Z/edit?usp=sharing&ouid=113295431589261029173&rtpof=true&sd=true";
  const githubLink = "https://github.com/Lokesh-0009";

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled 
          ? 'bg-primary-bg/70 backdrop-blur-md border-b border-border-custom py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-wider font-mono text-text-main flex items-center gap-1.5 group">
          <span className="text-accent">&#60;</span>
          <span>Lokesh</span>
          <span className="text-accent-sec">/&#62;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-text-muted hover:text-text-main transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-custom hover:border-accent text-sm font-medium text-text-muted hover:text-text-main transition-all duration-300 bg-secondary-bg/50"
          >
            <GithubIcon size={15} />
            <span>GitHub</span>
          </a>
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent hover:bg-accent/80 text-primary-bg text-sm font-bold transition-all duration-300 shadow-md shadow-accent/20 animate-pulse"
          >
            <FileText size={15} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-text-muted hover:text-text-main p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-secondary-bg border-b border-border-custom overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-text-muted hover:text-text-main py-1"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-border-custom">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-border-custom hover:border-accent text-sm font-medium text-text-muted hover:text-text-main bg-primary-bg/50 w-full"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-accent hover:bg-accent/80 text-primary-bg text-sm font-bold w-full"
                >
                  <FileText size={16} />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
