/**
 * Navbar — Fixed-position site navigation with scroll-aware styling.
 *
 * Features:
 * - Glassmorphism backdrop-blur on scroll
 * - Mobile hamburger drawer with Framer Motion
 * - Logo branding with code tag styling
 * - GitHub and Resume CTA buttons
 *
 * Data source: portfolioData.navItems, portfolioData.personalInfo
 */

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcon';
import { navItems, personalInfo } from '@/data/portfolio-data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Track scroll position to toggle background blur */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-wider font-mono text-text-main flex items-center gap-1.5 group"
          aria-label="Go to homepage"
        >
          <span className="text-accent">&#60;</span>
          <span>Lokesh</span>
          <span className="text-accent-sec">/&#62;</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop navigation">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-text-muted hover:text-text-main transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={personalInfo.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-custom hover:border-accent text-sm font-medium text-text-muted hover:text-text-main transition-all duration-300 bg-secondary-bg/50"
            aria-label="View GitHub profile"
          >
            <GithubIcon size={15} />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent hover:bg-accent/80 text-primary-bg text-sm font-bold transition-all duration-300 shadow-md shadow-accent/20 animate-pulse"
            aria-label="Download resume"
          >
            <FileText size={15} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-text-muted hover:text-text-main p-1"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
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
              {navItems.map((item) => (
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
                  href={personalInfo.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-border-custom hover:border-accent text-sm font-medium text-text-muted hover:text-text-main bg-primary-bg/50 w-full"
                  aria-label="View GitHub profile"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-accent hover:bg-accent/80 text-primary-bg text-sm font-bold w-full"
                  aria-label="Download resume"
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
