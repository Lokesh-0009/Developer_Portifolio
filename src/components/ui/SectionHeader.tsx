'use client';

import { motion } from 'framer-motion';

/**
 * Props for the {@link SectionHeader} component.
 */
interface SectionHeaderProps {
  /** The main heading text rendered as an `<h2>`. */
  title: string;
  /** Optional supporting text displayed below the accent bar. */
  subtitle?: string;
}

/**
 * A reusable section header with an animated entrance.
 *
 * Renders a bold `<h2>` title, a coloured accent bar, and an optional
 * muted subtitle. The entire block fades-in and slides up when it
 * enters the viewport for the first time.
 *
 * @example
 * ```tsx
 * <SectionHeader title="Featured Projects" subtitle="Things I've built" />
 * ```
 */
export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-16 text-left"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-accent rounded-full" />
      {subtitle && (
        <p className="text-text-muted text-sm mt-3">{subtitle}</p>
      )}
    </motion.div>
  );
}
