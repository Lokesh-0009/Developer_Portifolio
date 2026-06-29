'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const EXPERIENCES = [
  {
    role: 'AWS AI-ML Virtual Internship',
    company: 'AWS Academy',
    location: 'Remote',
    duration: 'January 2025 – March 2025',
    tech: ['AWS Cloud', 'AWS SageMaker', 'Machine Learning', 'AI Workflows', 'Python'],
    bullets: [
      'Worked on AI and Machine Learning use cases using AWS cloud services.',
      'Learned cloud-based machine learning training workflows and model deployments.',
      'Prepared comprehensive technical documentation and system designs.',
      'Completed practical AI/ML model exercises validating dataset outputs.',
    ],
  },
  {
    role: 'Generative AI with IBM Cloud Intern',
    company: 'SmartBridge (IBM)',
    location: 'Remote',
    duration: 'June 2025 – August 2025',
    tech: ['IBM Cloud', 'Generative AI', 'Watson AI', 'Application Development', 'Node-RED'],
    bullets: [
      'Developed AI-powered healthcare application features, optimizing patient chatbot functions.',
      'Implemented disease prediction algorithms and integrated treatment recommendation modules.',
      'Connected cloud-based Watson Assistant and NoSQL schemas on IBM Cloud containers.',
      'Tested, debugged, and deployed healthcare application features under agile remote sprints.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-border-custom relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </div>

        {/* Experience List */}
        <div className="space-y-10">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-6 md:p-8 bg-secondary-bg/25 border border-border-custom rounded-lg hover:border-accent/40 hover:shadow-[0_0_30px_rgba(79,157,255,0.05)] transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-8 text-left"
            >
              {/* Left Logo/Icon Column */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-secondary-bg border border-border-custom group-hover:border-accent flex items-center justify-center transition-colors duration-300">
                  <Briefcase size={20} className="text-accent group-hover:text-text-main transition-colors" />
                </div>
              </div>

              {/* Right content Column */}
              <div className="flex-grow space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-text-main group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-text-muted">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-row sm:flex-col items-start sm:items-end gap-3 sm:gap-1 text-xs font-mono text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-accent-sec" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-accent-sec" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-text-muted leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="hover:text-text-main transition-colors">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-mono border border-border-custom bg-secondary-bg/50 text-text-muted group-hover:text-accent-sec group-hover:border-accent-sec/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
