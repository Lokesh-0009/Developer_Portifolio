'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Terminal, AwardIcon } from 'lucide-react';

const CERTIFICATIONS = [
  {
    title: 'NPTEL Java Programming',
    issuer: 'NPTEL (IIT Kharagpur)',
    credentialId: 'IITKGP-JAVA-2025',
    date: 'Jan – Apr 2025',
    details: 'Completed advanced coursework and examination covering OOP, Java Collections Framework, Exception Handling, Multithreading, and file systems.',
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    issuer: 'SmartBridge',
    credentialId: 'SB-AIML-2026',
    date: 'March 2026',
    details: 'Completed verified project workflows in building predictive analytical models, data pre-processing, and model evaluation parameters.',
  },
  {
    title: 'AWS AI-ML Virtual Internship Certificate',
    issuer: 'Amazon Web Services (AWS)',
    credentialId: 'AWS-AIML-INTERN-2025',
    date: 'March 2025',
    details: 'Credential for AWS Academy Virtual Internship, covering Amazon SageMaker pipelines, Rekognition visual processing, and custom Lex chatbots.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 border-b border-border-custom relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-secondary-bg/25 border border-border-custom hover:border-accent-sec/30 rounded-lg hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(124,92,255,0.05)] transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div className="space-y-4">
                {/* Header Icon */}
                <div className="w-10 h-10 rounded-lg bg-secondary-bg border border-border-custom group-hover:border-accent-sec flex items-center justify-center transition-colors">
                  <Award size={18} className="text-accent-sec group-hover:text-text-main transition-colors" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-text-muted">
                    {cert.issuer}
                  </span>
                  <h3 className="text-lg font-bold text-text-main group-hover:text-accent transition-colors leading-snug">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs text-text-muted leading-relaxed">
                  {cert.details}
                </p>
              </div>

              {/* Bottom Credential info */}
              <div className="mt-6 pt-4 border-t border-border-custom/50 flex items-center justify-between font-mono text-[9px] text-text-muted">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={11} className="text-success-green" />
                  ID: {cert.credentialId}
                </span>
                <span>{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
