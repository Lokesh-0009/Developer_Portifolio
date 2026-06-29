'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }> = [];

    // Initialize particles
    const particleCount = Math.min(60, Math.floor((width * height) / 30000));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15, // Very slow movement
        vy: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.15,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw floating particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 157, 255, ${p.alpha})`; // Accent blue
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-primary-bg pointer-events-none">
      {/* Moving gradient lights */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-accent/10 blur-[150px] animate-pulse duration-10000" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-accent-sec/10 blur-[150px] animate-pulse duration-8000" />
        <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-[#1e293b]/15 blur-[120px] pointer-events-none" />
      </div>

      {/* Subtle animated grid lines */}
      <div className="absolute inset-0 bg-grid-lines bg-repeat opacity-30 pointer-events-none" />

      {/* Particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" />

      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />
    </div>
  );
}
