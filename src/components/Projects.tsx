'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Layout, Layers, ShieldAlert } from 'lucide-react';
import Image from 'next/image';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


const PROJECTS = [
  {
    title: 'PrescriptoAI – AI Health Risk & Safety Analyzer',
    description: 'An AI-powered healthcare application that digitizes medical prescriptions using OCR and Natural Language Processing. The system extracts prescription data, identifies dosage risks, stores patient history in a SQL database, and provides safety alerts through a REST API backend.',
    image: '/prescripto_ai.png',
    tech: ['Python', 'OCR', 'NLP', 'Flask', 'SQL', 'REST API'],
    features: [
      { icon: Cpu, label: 'OCR & NLP', text: 'Digitises prescriptions, extracting drug names, dosages, and patient details.' },
      { icon: Layers, label: 'SQL DB Integration', text: 'Stores complete patient records and historical prescription data.' },
      { icon: ShieldAlert, label: 'Dosage Risk Detection', text: 'Analyses prescription metrics to detect contradiction and dose safety.' }
    ],
    github: 'https://github.com/Lokesh-0009/PrescriptoAI',
    demo: '#',
    category: 'Major Academic Project',
  },
  {
    title: 'Developer Portfolio Website',
    description: 'A fully responsive portfolio website developed to showcase projects, technical skills, and professional experience. Built with responsive layouts, smooth animations, and interactive user interface components.',
    image: '/portfolio.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Next.js', 'React', 'Tailwind', 'Framer Motion'],
    features: [
      { icon: Layout, label: 'Responsive Design', text: 'Adapts seamlessly to mobile, tablet, and desktop viewports.' },
      { icon: Cpu, label: 'Interactive Console', text: 'Features a command line emulator Easter Egg (Press J).' },
      { icon: Layers, label: 'Modern UI & Theme', text: 'Utilises Lokesh\'s signature dark theme, glows, and animations.' }
    ],
    github: 'https://github.com/Lokesh-0009',
    demo: '#',
    category: 'Frontend Project',
  },
];

// Custom 3D Tilt Component
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
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

    // Mouse coordinates relative to card center (-0.5 to 0.5)
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

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-border-custom relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="h-full"
            >
              <TiltCard className="h-full w-full rounded-xl bg-secondary-bg/25 border border-border-custom hover:border-accent/40 hover:shadow-[0_0_50px_rgba(79,157,255,0.06)] overflow-hidden group transition-all duration-300">
                {/* Project Image Panel */}
                <div className="relative h-56 md:h-72 w-full overflow-hidden border-b border-border-custom bg-primary-bg/40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-w-7xl) 50vw, 100vw"
                    priority={idx === 0}
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  {/* Neon Glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-bg via-transparent to-transparent opacity-60" />
                </div>

                {/* Project Body */}
                <div className="p-6 md:p-8 space-y-5 text-left">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest block">{project.category}</span>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl md:text-2xl font-bold text-text-main group-hover:text-accent transition-colors font-sans leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-text-main transition-colors p-1"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon size={20} />
                        </a>
                        {project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-text-main transition-colors p-1"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-text-muted leading-relaxed font-normal">
                  {project.description}
                </p>

                  {/* Core Features */}
                  <div className="space-y-3">
                    {project.features.map((feat, fIdx) => {
                      const Icon = feat.icon;
                      return (
                        <div key={fIdx} className="flex gap-3 items-start">
                          <div className="mt-0.5 p-1 rounded bg-accent/10 border border-accent/20 flex-shrink-0">
                            <Icon size={12} className="text-accent" />
                          </div>
                          <div className="text-xs">
                            <span className="font-bold text-text-main mr-1">{feat.label}:</span>
                            <span className="text-text-muted">{feat.text}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border-custom/50">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-mono border border-border-custom bg-secondary-bg/50 text-text-muted group-hover:text-accent-sec group-hover:border-accent-sec/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
