'use client';

import { motion } from 'framer-motion';
import { BookOpen, Code, Briefcase, Database, Cpu, Milestone } from 'lucide-react';

const TIMELINE_STEPS = [
  {
    title: 'Started Programming',
    subtitle: 'First lines of code',
    description: 'Began journey with fundamentals. Discovered a deep fascination for algorithms, structures, and object-oriented programming concepts using C and Java.',
    icon: BookOpen,
    date: '2022',
  },
  {
    title: 'Built Projects',
    subtitle: 'From theory to reality',
    description: 'Engineered web scrapers, desktop tools, and full-stack websites. Connected frontends to databases, exploring relational models and query optimizations.',
    icon: Code,
    date: '2023',
  },
  {
    title: 'Internships',
    subtitle: 'Industry exposure',
    description: 'Collaborated on remote internships: AWS AI ML and SmartBridge IBM. Gained hands-on experience in machine learning pipelines, cloud services, and Agile processes.',
    icon: Briefcase,
    date: '2024',
  },
  {
    title: 'Java Backend Mastery',
    subtitle: 'Deep dive into servers',
    description: 'Focused on building scalable server-side systems. Deepened knowledge in RESTful API design, database schemas (MySQL/SQL), concurrency, and OOP patterns.',
    icon: Database,
    date: '2025',
  },
  {
    title: 'Learning Spring Boot',
    subtitle: 'Enterprise architectures',
    description: 'Explored the Spring ecosystem: Spring Boot, Spring Data JPA, Security, and Microservices. Wired backend APIs to react-based interfaces and AI pipelines.',
    icon: Cpu,
    date: '2025 - 2026',
  },
  {
    title: 'Future Software Engineer',
    subtitle: 'Next Chapter',
    description: 'Aspiring to engineer highly resilient, performant software systems. Ready to bring backend efficiency, product-focused thinking, and continuous learning to high-impact teams.',
    icon: Milestone,
    date: 'Present & Beyond',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 border-b border-border-custom relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6 text-left text-text-muted">
            <h3 className="text-xl font-semibold text-text-main">
              A developer who translates problems into reliable, optimized code.
            </h3>
            
            <p className="leading-relaxed">
              Hello, I'm Rowtu Lokesh, a Computer Science graduate passionate about backend development and modern software engineering.
            </p>

            <p className="leading-relaxed">
              My primary focus is Java backend development using REST APIs, SQL, and scalable application design. I enjoy solving real-world problems through software while continuously improving my knowledge of data structures, object-oriented programming, and backend architecture.
            </p>

            <p className="leading-relaxed">
              Alongside Java, I have worked with Python, Flask, React, HTML, CSS, JavaScript, and MySQL to build complete applications. My goal is to become a professional backend engineer who builds reliable and impactful software.
            </p>

            {/* Quick Facts Card */}
            <div className="p-6 bg-secondary-bg/30 border border-border-custom rounded-lg space-y-4">
              <h4 className="font-mono text-sm text-accent font-bold uppercase">Quick Credentials</h4>
              <ul className="space-y-2 font-mono text-xs md:text-sm">
                <li className="flex justify-between border-b border-border-custom/50 pb-1.5">
                  <span className="text-text-muted">Education:</span>
                  <span className="text-text-main text-right">B.Tech (CSE) | CGPA: 7.5</span>
                </li>
                <li className="flex justify-between border-b border-border-custom/50 pb-1.5">
                  <span className="text-text-muted">College:</span>
                  <span className="text-text-main text-right">Avanthi Inst. of Eng. & Tech</span>
                </li>
                <li className="flex justify-between border-b border-border-custom/50 pb-1.5">
                  <span className="text-text-muted">Primary Focus:</span>
                  <span className="text-text-main text-accent-sec font-semibold">Java Backend</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-text-muted">Location:</span>
                  <span className="text-text-main text-right">Visakhapatnam, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Timeline Column */}
          <div className="lg:col-span-7 relative pl-4 sm:pl-8">
            {/* Center line */}
            <div className="absolute left-4 sm:left-8 top-2 bottom-2 w-[2px] bg-border-custom" />

            <div className="space-y-12">
              {TIMELINE_STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="relative pl-10 sm:pl-12 text-left group"
                  >
                    {/* Node circle */}
                    <div className="absolute left-[-5px] sm:left-[11px] top-1 w-10 h-10 rounded-full bg-secondary-bg border border-border-custom group-hover:border-accent flex items-center justify-center transition-colors duration-300 z-10">
                      <Icon size={16} className="text-text-muted group-hover:text-accent transition-colors duration-300" />
                    </div>

                    {/* Date badge */}
                    <span className="inline-block px-2.5 py-0.5 rounded-full border border-border-custom bg-secondary-bg/50 text-[10px] md:text-xs font-mono text-accent-sec mb-2">
                      {step.date}
                    </span>

                    <h4 className="text-lg md:text-xl font-bold text-text-main mb-1 group-hover:text-accent transition-colors">
                      {step.title}
                    </h4>
                    
                    <h5 className="text-xs md:text-sm font-mono text-text-muted mb-2 font-semibold">
                      {step.subtitle}
                    </h5>

                    <p className="text-xs md:text-sm text-text-muted leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
