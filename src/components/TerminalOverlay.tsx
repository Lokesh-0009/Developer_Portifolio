'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X } from 'lucide-react';

const COMMANDS_HELP = {
  help: 'Show list of available commands',
  about: 'Learn more about Lokesh',
  skills: 'Display technical skill matrix',
  projects: 'Summarise featured coding projects',
  contact: 'Show contact details & social channels',
  github: 'Get Lokesh\'s GitHub details',
  resume: 'Open Lokesh\'s Google Docs resume',
  clear: 'Clear terminal screen',
  exit: 'Close developer terminal mode',
};

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export default function TerminalOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Welcome to Lokesh\'s Developer Console v1.0.0',
    'Type "help" for a list of available commands, or "exit" to close.',
    ''
  ]);
  const [konamiIndex, setKonamiIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const resumeLink = "https://docs.google.com/document/d/1iJ5yTmvZoj2KsSkNLS_7kVYsudmTLs0Z/edit?usp=sharing&ouid=113295431589261029173&rtpof=true&sd=true";

  // Watch key events for 'J', Escape, and Konami Code
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isTyping = activeEl && (
        activeEl.tagName === 'INPUT' || 
        activeEl.tagName === 'TEXTAREA' || 
        activeEl.getAttribute('contenteditable') === 'true'
      );

      // Check Konami Code
      if (e.key === KONAMI_CODE[konamiIndex]) {
        const nextIndex = konamiIndex + 1;
        if (nextIndex === KONAMI_CODE.length) {
          setIsOpen(true);
          setHistory(prev => [
            ...prev,
            '>> SUCCESS: Konami Code activated!',
            '>> "You found the developer mode."',
            ''
          ]);
          setKonamiIndex(0);
        } else {
          setKonamiIndex(nextIndex);
        }
      } else {
        setKonamiIndex(0); // Reset on error
      }

      // Close on escape
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }

      // Open terminal on 'J' or 'j'
      if ((e.key === 'j' || e.key === 'J') && !isTyping && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, konamiIndex]);

  // Scroll to bottom of terminal output
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  // Autofocus input when terminal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const processCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    const newHistory = [...history, `lokesh@workspace:~$ ${cmdStr}`];

    switch (cleanCmd) {
      case 'help':
        newHistory.push('Available Commands:');
        Object.entries(COMMANDS_HELP).forEach(([cmd, desc]) => {
          newHistory.push(`  ${cmd.padEnd(10)} - ${desc}`);
        });
        break;
      case 'about':
        newHistory.push(
          'LOKESH | Software Engineer & Backend Developer',
          'Focus: Java, Spring Boot, REST APIs, and Relational Databases (MySQL/SQL).',
          'Passionate about building enterprise-grade architectures and smart AI-driven automation pipelines.'
        );
        break;
      case 'skills':
        newHistory.push(
          'TECHNICAL SKILLS:',
          '  [Backend]  Java, Spring Boot, REST APIs, Flask',
          '  [Frontend] HTML/CSS, JavaScript, React',
          '  [Database] MySQL, SQL',
          '  [Tools]    Git, GitHub, VS Code, Postman'
        );
        break;
      case 'projects':
        newHistory.push(
          'FEATURED PROJECTS:',
          '  1. PrescriptoAI - AI Medical Assistant (OCR, NLP Parsing, Contradiction Detection)',
          '  2. Developer Portfolio - Dark themed Interactive Terminal Workspace'
        );
        break;
      case 'contact':
        newHistory.push(
          'CONTACT DETAILS:',
          '  Email:    lokesh.dev.contact@gmail.com',
          '  LinkedIn: linkedin.com/in/lokesh-0009',
          '  GitHub:   github.com/Lokesh-0009'
        );
        break;
      case 'github':
        newHistory.push(
          'Username: Lokesh-0009',
          'Visit Lokesh\'s repositories at: https://github.com/Lokesh-0009'
        );
        window.open('https://github.com/Lokesh-0009', '_blank');
        break;
      case 'resume':
        newHistory.push('Opening Google Drive Resume...');
        window.open(resumeLink, '_blank');
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'exit':
        setIsOpen(false);
        return;
      case '':
        break;
      default:
        newHistory.push(`Command not found: "${cmdStr}". Type "help" for a list of valid commands.`);
    }

    newHistory.push(''); // Add trailing space line
    setHistory(newHistory);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal) return;
    processCommand(inputVal);
    setInputVal('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[99999] flex items-center justify-center p-4 md:p-6"
          onClick={() => inputRef.current?.focus()}
        >
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="w-full max-w-3xl h-[70vh] bg-secondary-bg border border-border-custom rounded-lg shadow-2xl flex flex-col overflow-hidden font-mono"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Tab header */}
            <div className="flex items-center justify-between px-4 py-3 bg-primary-bg border-b border-border-custom select-none">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-accent" />
                <span className="text-xs text-text-main font-semibold">lokesh@developer-console:~</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-text-main hover:bg-secondary-bg/50 p-1 rounded transition-colors"
                aria-label="Close Console"
              >
                <X size={16} />
              </button>
            </div>

            {/* Terminal output lines screen */}
            <div className="flex-grow p-4 md:p-6 overflow-y-auto space-y-2 text-left text-xs md:text-sm scrollbar-thin select-text">
              {history.map((line, idx) => {
                let color = 'text-text-muted';
                if (line.startsWith('lokesh@workspace')) color = 'text-accent';
                else if (line.startsWith('Welcome') || line.startsWith('Available') || line.startsWith('TECHNICAL') || line.startsWith('FEATURED') || line.startsWith('CONTACT')) color = 'text-text-main font-semibold';
                else if (line.startsWith('>>') || line.includes('activated')) color = 'text-success-green';
                
                return (
                  <div key={idx} className={`${color} whitespace-pre-wrap leading-relaxed`}>
                    {line}
                  </div>
                );
              })}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal CLI Command Input Form */}
            <form onSubmit={handleFormSubmit} className="p-4 border-t border-border-custom bg-primary-bg/30 flex items-center gap-2 select-none">
              <span className="text-success-green text-xs md:text-sm font-bold">lokesh@workspace:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type command..."
                className="flex-grow bg-transparent border-none text-text-main placeholder-text-muted/30 focus:outline-none focus:ring-0 text-xs md:text-sm font-mono"
              />
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
