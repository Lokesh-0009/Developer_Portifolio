'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUOTES = [
  {
    text: `/*
 * First solve the problem.
 * Then write the code.
 * — John Johnson
 */`,
  },
  {
    text: `/*
 * The best way to predict the future
 * is to build it.
 * — Alan Kay
 */`,
  },
  {
    text: `/*
 * Stay curious.
 * Keep building.
 * Never stop learning.
 */`,
  },
];

export default function Quotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-secondary-bg/30 border border-border-custom rounded-lg p-6 font-mono text-xs md:text-sm text-accent-sec select-none min-h-[130px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.pre
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="whitespace-pre-wrap leading-relaxed text-center font-mono opacity-90"
        >
          {QUOTES[index].text}
        </motion.pre>
      </AnimatePresence>
    </div>
  );
}
