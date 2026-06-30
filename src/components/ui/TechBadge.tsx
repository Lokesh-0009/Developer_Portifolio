'use client';

/**
 * Props for the {@link TechBadge} component.
 */
interface TechBadgeProps {
  /** The technology or tag label to display. */
  label: string;
  /** Additional CSS classes merged with the default badge styles. */
  className?: string;
}

/**
 * A small pill-shaped badge for displaying technology stack labels.
 *
 * Styled with a monospace font, subtle border, and a colour-shift
 * hover effect that highlights the badge with the secondary accent.
 * Commonly used inside project cards and skill sections.
 *
 * @example
 * ```tsx
 * <TechBadge label="TypeScript" />
 * <TechBadge label="React" className="mr-2" />
 * ```
 */
export default function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-mono border border-border-custom bg-secondary-bg/50 text-text-muted hover:text-accent-sec hover:border-accent-sec/30 transition-colors duration-200${className ? ` ${className}` : ''}`}
    >
      {label}
    </span>
  );
}
