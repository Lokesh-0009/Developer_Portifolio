'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EDUCATION_DATA = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering (CGPA: 7.5)',
    institution: 'Avanthi Institute of Engineering and Technology, Vizianagaram, AP',
    duration: '2022 - 2026',
    details: 'Specialized in core computer science areas, including Object-Oriented Programming (Java), Data Structures & Algorithms, Database Management Systems, and Software Development Life Cycles.',
  },
  {
    degree: 'Intermediate (MPC Stream)',
    field: 'Mathematics, Physics, Chemistry (Grade: 81%)',
    institution: 'Sri Aditya Junior College, Rajam, AP',
    duration: '2020 - 2022',
    details: 'Completed higher secondary education focusing on advanced mathematics and sciences, building strong logical and quantitative skills.',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    field: 'General Education (Grade: 95%)',
    institution: 'Z.P.H School, Laxmipuram, AP',
    duration: '2020',
    details: 'Graduated with high honors, developing early analytical and scientific methodologies.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 border-b border-border-custom relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </div>

        {/* Education Timeline */}
        <div className="relative pl-6 sm:pl-10 text-left">
          {/* Vertical line */}
          <div className="absolute left-[29px] sm:left-[33px] top-4 bottom-4 w-[2px] bg-border-custom" />

          <div className="space-y-12">
            {EDUCATION_DATA.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12 group"
              >
                {/* Node icon */}
                <div className="absolute left-[-5px] top-0 w-10 h-10 rounded-full bg-secondary-bg border border-border-custom group-hover:border-accent flex items-center justify-center transition-colors duration-300 z-10">
                  <GraduationCap size={16} className="text-accent group-hover:text-text-main transition-colors" />
                </div>

                {/* Content block */}
                <div className="space-y-2 max-w-3xl">
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-accent-sec bg-secondary-bg/50 border border-border-custom px-2.5 py-0.5 rounded-full">
                    <Calendar size={12} />
                    {edu.duration}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold text-text-main group-hover:text-accent transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <h4 className="text-sm font-semibold text-text-muted">
                    {edu.field} | <span className="font-mono text-xs">{edu.institution}</span>
                  </h4>
                  
                  <p className="text-sm text-text-muted leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
