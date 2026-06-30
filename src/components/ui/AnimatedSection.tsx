'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Props for the {@link AnimatedSection} component.
 */
interface AnimatedSectionProps {
  /** The content to animate into view. */
  children: ReactNode;
  /** Additional CSS classes applied to the wrapper `div`. */
  className?: string;
  /** Delay in seconds before the animation starts. @default 0 */
  delay?: number;
  /** Direction from which the content slides in. @default 'up' */
  direction?: 'up' | 'left' | 'right';
}

/**
 * A generic viewport-triggered animation wrapper.
 *
 * Wraps its children in a `motion.div` that fades-in and slides from
 * the specified {@link AnimatedSectionProps.direction | direction} when
 * it enters the viewport.  The animation fires only once and uses a
 * custom cubic-bezier easing curve for a polished feel.
 *
 * @example
 * ```tsx
 * <AnimatedSection direction="left" delay={0.2}>
 *   <Card />
 * </AnimatedSection>
 * ```
 */
export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const initialOffset = {
    up: { x: 0, y: 30 },
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
  }[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
