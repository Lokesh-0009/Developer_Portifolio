'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<'default' | 'hover-button' | 'hover-link'>('default');
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable custom cursor on fine-pointer devices (desktops)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      if (
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT'
      ) {
        setCursorType('hover-button');
      } else if (target.tagName === 'A' || target.closest('a')) {
        setCursorType('hover-link');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent rounded-full pointer-events-none z-[10001] mix-blend-screen"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000] flex items-center justify-center font-mono text-xs text-accent select-none mix-blend-screen border"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: cursorType === 'hover-button' ? 48 : cursorType === 'hover-link' ? 36 : 24,
          height: cursorType === 'hover-button' ? 48 : cursorType === 'hover-link' ? 36 : 24,
          backgroundColor: cursorType === 'hover-button' ? 'rgba(79, 157, 255, 0.15)' : 'rgba(79, 157, 255, 0)',
          borderColor: cursorType === 'hover-button' ? 'rgba(79, 157, 255, 0.8)' : cursorType === 'hover-link' ? 'rgba(79, 157, 255, 0)' : 'rgba(79, 157, 255, 0.4)',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      >
        {cursorType === 'hover-link' && (
          <span className="flex items-center justify-center font-bold tracking-tighter text-accent font-mono">
            &#123;&#125;
          </span>
        )}
      </motion.div>
    </>
  );
}
