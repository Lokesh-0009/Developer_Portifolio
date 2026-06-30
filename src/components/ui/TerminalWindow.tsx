'use client';

import type { ReactNode } from 'react';

/**
 * Props for the {@link TerminalWindow} component.
 */
interface TerminalWindowProps {
  /** Title shown in the header bar centre. @default 'terminal' */
  title?: string;
  /** Content rendered inside the terminal body area. */
  children: ReactNode;
  /** Additional CSS classes applied to the outermost wrapper. */
  className?: string;
}

/**
 * A decorative terminal/editor chrome wrapper.
 *
 * Renders a macOS-style window header with traffic-light dots
 * (close · minimise · maximise), a title label, and a body area that
 * renders arbitrary children.  Based on the repeated pattern found in
 * `CodeWindow.tsx`, `Skills.tsx`, and `LoadingScreen.tsx`.
 *
 * @example
 * ```tsx
 * <TerminalWindow title="lokesh@workspace: ~/projects">
 *   <pre className="p-4 font-mono text-xs">$ npm run dev</pre>
 * </TerminalWindow>
 * ```
 */
export default function TerminalWindow({
  title = 'terminal',
  children,
  className,
}: TerminalWindowProps) {
  return (
    <div
      className={`w-full bg-secondary-bg border border-border-custom rounded-lg overflow-hidden font-mono text-xs md:text-sm shadow-[0_15px_40px_rgba(0,0,0,0.4)]${className ? ` ${className}` : ''}`}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-primary-bg/50 border-b border-border-custom select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-xs text-text-muted">{title}</div>
        {/* Spacer to keep the title centred */}
        <div className="w-12" />
      </div>

      {/* Body */}
      <div className="w-full">{children}</div>
    </div>
  );
}
