'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  const terminalSequence = [
    { text: '> Initializing Portfolio...', delay: 500 },
    { text: 'Loading modules...', delay: 400 },
    { text: '  Java ................... OK', delay: 400 },
    { text: '  Spring Boot ............ OK', delay: 400 },
    { text: '  React .................. OK', delay: 400 },
    { text: 'Building Dreams...', delay: 600 },
    { text: 'Loading complete.', delay: 400 },
  ];

  useEffect(() => {
    let currentLineIndex = 0;
    const addedLines: string[] = [];

    const printNextLine = () => {
      if (currentLineIndex < terminalSequence.length) {
        const item = terminalSequence[currentLineIndex];
        addedLines.push(item.text);
        setLines([...addedLines]);
        currentLineIndex++;
        setTimeout(printNextLine, item.delay);
      } else {
        setTimeout(() => {
          setIsDone(true);
          // Allow fade transition to complete before unmounting
          setTimeout(() => {
            onComplete();
          }, 600);
        }, 600);
      }
    };

    const timer = setTimeout(printNextLine, 300);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center p-6"
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <div className="w-full max-w-md font-mono text-sm md:text-base text-left bg-secondary-bg border border-border-custom rounded-lg p-6 shadow-[0_0_50px_rgba(79,157,255,0.1)] relative overflow-hidden">
            {/* Header circles */}
            <div className="flex gap-1.5 mb-4 border-b border-border-custom pb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="text-xs text-text-muted ml-2 select-none">portfolio-build.sh</span>
            </div>

            {/* Terminal output lines */}
            <div className="space-y-3 min-h-[180px]">
              {lines.map((line, idx) => {
                const isOK = line.includes('OK');
                const isInit = line.startsWith('>');
                const isComplete = line.includes('complete');
                
                let textColor = 'text-text-main';
                if (isOK) textColor = 'text-success-green';
                else if (isInit) textColor = 'text-accent';
                else if (isComplete) textColor = 'text-accent-sec font-bold';

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.12 }}
                    className={`${textColor}`}
                  >
                    {line}
                  </motion.div>
                );
              })}
              
              {/* Blinking block cursor */}
              {lines.length < terminalSequence.length && (
                <span className="inline-block w-2 h-4 bg-accent animate-blink ml-1 align-middle" />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
