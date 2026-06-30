'use client';

import React, { useRef, useState } from 'react';
import type { ReactNode } from 'react';

/**
 * Props for the {@link TiltCard} component.
 */
interface TiltCardProps {
  /** Content rendered inside the 3D-tilting container. */
  children: ReactNode;
  /** Additional CSS classes applied to the outermost wrapper. */
  className?: string;
}

/**
 * A 3D perspective-tilt card that follows the mouse cursor.
 *
 * As the user hovers, the card rotates on both the X and Y axes
 * (maximum ±10°) to create a subtle parallax depth effect.  The inner
 * content is pushed forward on the Z axis for a layered feel.
 *
 * Extracted from `Projects.tsx` for reuse across project cards,
 * testimonials, or any surface that benefits from interactive depth.
 *
 * @example
 * ```tsx
 * <TiltCard className="rounded-xl bg-secondary-bg border border-border-custom">
 *   <h3>My Card</h3>
 * </TiltCard>
 * ```
 */
export default function TiltCard({ children, className }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card centre (-0.5 to 0.5)
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Convert to rotation degrees (max 10 degrees)
    const rX = -(mouseY / height) * 10;
    const rY = (mouseX / width) * 10;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? 'transform 0.05s ease-out' : 'transform 0.4s ease-out',
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      <div style={{ transform: 'translateZ(10px)' }} className="h-full w-full">
        {children}
      </div>
    </div>
  );
}
