'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SKILLS_DATA = {
  backend: [
    { name: 'Core Java', level: 90, bar: '██████████████████░░', exp: 'OOP, Collections, Multithreading' },
    { name: 'Python', level: 80, bar: '████████████████░░░░', exp: 'Scripting, Automation, AI Integrations' },
    { name: 'REST APIs', level: 85, bar: '█████████████████░░░', exp: 'API Integration, JSON endpoints' },
    { name: 'Flask', level: 75, bar: '███████████████░░░░░', exp: 'Python microservices, web routing' },
  ],
  frontend: [
    { name: 'HTML5 / CSS3', level: 85, bar: '█████████████████░░░', exp: 'Semantic layouts, Responsive UI design' },
    { name: 'JavaScript', level: 80, bar: '████████████████░░░░', exp: 'ES6+ features, asynchronous logic' },
    { name: 'React.js', level: 75, bar: '███████████████░░░░░', exp: 'Components, state hooks, routing' },
  ],
  database: [
    { name: 'MySQL', level: 80, bar: '████████████████░░░░', exp: 'Relational database systems, indexing' },
    { name: 'SQL', level: 85, bar: '█████████████████░░░', exp: 'Structured queries, joins, optimization' },
    { name: 'OOP / SDLC', level: 90, bar: '██████████████████░░', exp: 'SOLID principles, software cycles' },
    { name: 'DSA / Algorithms', level: 80, bar: '████████████████░░░░', exp: 'Problem-solving, logic optimizations' },
  ],
  tools: [
    { name: 'Git', level: 85, bar: '█████████████████░░░', exp: 'Version control workflows, branching' },
    { name: 'GitHub', level: 90, bar: '██████████████████░░', exp: 'Repository management, open-source' },
    { name: 'Visual Studio Code', level: 95, bar: '███████████████████░', exp: 'Custom environment configurations' },
    { name: 'Postman', level: 85, bar: '█████████████████░░░', exp: 'REST API testing and validation' },
  ],
};

type TabType = keyof typeof SKILLS_DATA;

export default function Skills() {
  const [activeTab, setActiveTab] = useState<TabType>('backend');
  const [typedCommand, setTypedCommand] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Run typing animation on tab change
    setIsTyping(true);
    setShowContent(false);
    
    const commandText = `cd ${activeTab}_skills`;
    let charIdx = 0;
    setTypedCommand('');

    const typingInterval = setInterval(() => {
      if (charIdx < commandText.length) {
        const char = commandText[charIdx];
        setTypedCommand((prev) => prev + char);
        charIdx++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        // Show files output after a brief pause
        setTimeout(() => {
          setShowContent(true);
        }, 150);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [activeTab]);

  return (
    <section id="skills" className="py-20 border-b border-border-custom relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <div className="mb-12 text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </div>

        {/* Mock Terminal Wrapper */}
        <div className="w-full bg-secondary-bg border border-border-custom rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.4)] overflow-hidden font-mono text-xs md:text-sm">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-primary-bg/50 border-b border-border-custom select-none">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="text-xs text-text-muted">lokesh@workspace: ~/skills</div>
            <div className="w-12" /> {/* Spacer */}
          </div>

          {/* Terminal Tabs */}
          <div className="flex border-b border-border-custom bg-secondary-bg/50 select-none overflow-x-auto no-scrollbar">
            {(Object.keys(SKILLS_DATA) as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  if (!isTyping) setActiveTab(tab);
                }}
                className={`px-5 py-2.5 border-r border-border-custom font-mono text-xs md:text-sm capitalize transition-all ${
                  activeTab === tab
                    ? 'bg-secondary-bg text-accent border-b-2 border-b-accent'
                    : 'text-text-muted hover:text-text-main hover:bg-secondary-bg/25'
                }`}
              >
                {tab === 'backend' ? '⚙️ Languages & Backend' : tab === 'frontend' ? '🎨 Frontend' : tab === 'database' ? '💾 DB & Core CS' : '🛠️ Tools'}
              </button>
            ))}
          </div>

          {/* Terminal screen content */}
          <div className="p-6 bg-secondary-bg/10 min-h-[320px] flex flex-col text-left space-y-4 font-mono">
            {/* Prompt Command line */}
            <div className="flex items-center text-accent">
              <span className="text-success-green mr-1">lokesh@workspace:~/skills$</span>
              <span>{typedCommand}</span>
              {isTyping && (
                <span className="inline-block w-1.5 h-3.5 bg-accent animate-blink ml-0.5" />
              )}
            </div>

            {/* Simulated Command Output */}
            <AnimatePresence mode="wait">
              {showContent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  {/* Next Prompt Line */}
                  <div className="flex items-center text-accent">
                    <span className="text-success-green mr-1">lokesh@workspace:~/skills/{activeTab}_skills$</span>
                    <span className="text-text-main">cat skills.json</span>
                  </div>

                  <div className="text-text-muted text-[10px] md:text-xs">
                    {`{`}
                    <br />
                    <span className="pl-4">"category": "{activeTab}_skills",</span>
                    <br />
                    <span className="pl-4">"status": "active",</span>
                    <br />
                    <span className="pl-4">"skills": [</span>
                  </div>

                  {/* Skills Grid */}
                  <div className="space-y-4 pl-6">
                    {SKILLS_DATA[activeTab].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.08 }}
                        className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 rounded hover:bg-secondary-bg/30 border border-transparent hover:border-border-custom transition-all duration-300 shadow-hover"
                      >
                        <div className="flex flex-col">
                          <span className="font-bold text-text-main text-sm group-hover:text-accent transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] text-text-muted font-mono">{skill.exp}</span>
                        </div>

                        {/* Progress display */}
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-accent-sec w-32 hidden sm:inline-block tracking-tighter">
                            {skill.bar}
                          </span>
                          <span className="font-mono text-xs text-text-muted min-w-[32px] text-right font-bold">
                            {skill.level}%
                          </span>
                          <div className="w-16 md:w-24 bg-border-custom rounded-full h-1.5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                              className="h-full bg-accent"
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-text-muted text-[10px] md:text-xs">
                    <span className="pl-4">]</span>
                    <br />
                    {`}`}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
