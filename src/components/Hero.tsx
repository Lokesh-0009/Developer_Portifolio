'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import CodeWindow from './CodeWindow';
import Quotes from './Quotes';

const TITLES = [
  'Java Backend Developer',
  'Backend Developer',
  'Java Developer',
  'AI Enthusiast',
  'Software Engineering Fresher',
];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = TITLES[titleIdx];

    const handleType = () => {
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause when finished typing
          setTypingSpeed(2000); // Wait 2s
          setIsDeleting(true);
        } else {
          setTypingSpeed(80);
        }
      } else {
        // Deleting characters
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTitleIdx((prev) => (prev + 1) % TITLES.length);
          setTypingSpeed(500); // Pause before next title
        } else {
          setTypingSpeed(45);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIdx, typingSpeed]);

  const resumeLink = "/Rowtu_Lokesh_Resume.pdf";

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-custom bg-secondary-bg/40 text-xs font-mono text-accent"
          >
            <span className="w-2 h-2 rounded-full bg-success-green animate-ping" />
            <span>Open for internships & opportunities</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight font-sans text-text-main"
            >
              Rowtu Lokesh
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-8 flex items-center"
            >
              <h2 className="text-lg md:text-2xl font-mono text-accent font-semibold">
                {currentText}
                <span className="inline-block w-[2px] h-[18px] md:h-[24px] bg-accent ml-1.5 animate-blink align-middle" />
              </h2>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-xl md:text-2xl font-bold tracking-tight text-accent-sec"
            >
              Building Reliable Backend Systems with Java.
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm md:text-base text-text-muted max-w-xl font-normal leading-relaxed space-y-4"
          >
            <span className="block font-semibold text-text-main border-l-2 border-accent pl-3">
              I build scalable backend applications using Java, REST APIs, SQL, and AI-powered technologies while continuously improving my problem-solving and software engineering skills.
            </span>
            <span className="block text-xs md:text-sm">
              I'm Rowtu Lokesh, a Software Engineering graduate passionate about backend development, Java, and AI. I enjoy transforming ideas into real-world software by writing clean, maintainable code and continuously learning modern technologies.
            </span>
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-[10px] md:text-xs text-text-muted"
          >
            <div className="p-3 bg-secondary-bg/25 border border-border-custom rounded-lg flex flex-col justify-center">
              <span className="block text-accent font-bold text-sm">2 Roles</span>
              <span>Internships</span>
            </div>
            <div className="p-3 bg-secondary-bg/25 border border-border-custom rounded-lg flex flex-col justify-center">
              <span className="block text-accent font-bold text-sm">2+ Major</span>
              <span>Projects Built</span>
            </div>
            <div className="p-3 bg-secondary-bg/25 border border-border-custom rounded-lg flex flex-col justify-center col-span-2 sm:col-span-1">
              <span className="block text-accent font-bold text-sm">7.5 CGPA</span>
              <span>B.Tech Graduate</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent/80 text-primary-bg font-bold transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 group"
            >
              <span>View Projects</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={resumeLink}
              download="Rowtu_Lokesh_Resume.pdf"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border-custom hover:border-accent-sec bg-secondary-bg/50 hover:bg-secondary-bg text-text-muted hover:text-text-main font-semibold transition-all duration-300"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side Illustration & Code Window */}
        <div className="lg:col-span-6 flex flex-col gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full relative"
          >
            <CodeWindow />
            
            {/* Workstation SVG elements overlapping */}
            <div className="hidden sm:block absolute -top-8 -right-8 w-16 h-16 bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-lg flex items-center justify-center animate-float-slow select-none">
              <span className="text-[#22C55E] text-2xl font-bold font-mono">☕</span>
            </div>
            
            <div className="hidden sm:block absolute -bottom-10 -left-6 w-14 h-14 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center animate-float-medium select-none">
              <span className="text-accent text-2xl font-bold font-mono">🍃</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full"
          >
            <Quotes />
          </motion.div>
        </div>
      </div>

      {/* Background visual graphics */}
      <div className="absolute bottom-[-100px] left-[5%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none select-none -z-10" />
      <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-accent-sec/5 blur-[120px] pointer-events-none select-none -z-10" />
    </section>
  );
}
