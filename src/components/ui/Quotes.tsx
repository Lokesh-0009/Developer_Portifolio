/**
 * Quotes — Rotating inspirational code-comment quotes.
 *
 * Displays quotes in a styled container with smooth crossfade
 * animations. Cycles through quotes on a 6-second interval.
 *
 * Data source: portfolioData.quotes
 */

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quotes } from '@/data/portfolio-data';

export default function Quotes() {
  const [index, setIndex] = useState(0);

  /* Cycle through quotes every 6 seconds */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full bg-secondary-bg/30 border border-border-custom rounded-lg p-6 font-mono text-xs md:text-sm text-accent-sec select-none min-h-[130px] flex items-center justify-center"
      role="marquee"
      aria-label="Inspirational developer quotes"
    >
      <AnimatePresence mode="wait">
        <motion.pre
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="whitespace-pre-wrap leading-relaxed text-center font-mono opacity-90"
        >
          {quotes[index].text}
        </motion.pre>
      </AnimatePresence>
    </div>
  );
}
