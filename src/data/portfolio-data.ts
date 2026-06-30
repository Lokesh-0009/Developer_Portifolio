/**
 * Portfolio Data — Single Source of Truth
 *
 * Every piece of content displayed on the portfolio is defined here.
 * Components import from this file instead of hardcoding data.
 * All data is extracted verbatim from the original component files
 * and the portfolio-content.md.txt specification.
 *
 * @see {@link file:///c:/Developer%20potiffolio/portfolio-content.md.txt}
 */

import {
  BookOpen,
  Code,
  Briefcase,
  Database,
  Cpu,
  Milestone,
  Layout,
  Layers,
  ShieldAlert,
} from 'lucide-react';

import type {
  PersonalInfo,
  HeroStat,
  TimelineStep,
  Skill,
  SkillTab,
  Experience,
  Project,
  EducationEntry,
  Certification,
  Quote,
  CodeSnippet,
  NavItem,
  TerminalCommands,
  TerminalResponse,
  GithubLanguage,
  BootSequenceLine,
} from './types';

/* ══════════════════════════════════════════════
 * PERSONAL INFORMATION
 * ══════════════════════════════════════════════ */

export const personalInfo: PersonalInfo = {
  name: 'Rowtu Lokesh',
  titles: [
    'Java Backend Developer',
    'Backend Developer',
    'Java Developer',
    'AI Enthusiast',
    'Software Engineering Fresher',
  ],
  tagline: 'Building Reliable Backend Systems with Java.',
  heroBio:
    'I build scalable backend applications using Java, REST APIs, SQL, and AI-powered technologies while continuously improving my problem-solving and software engineering skills.',
  heroSummary:
    "I'm Rowtu Lokesh, a Software Engineering graduate passionate about backend development, Java, and AI. I enjoy transforming ideas into real-world software by writing clean, maintainable code and continuously learning modern technologies.",
  aboutHeading:
    'A developer who translates problems into reliable, optimized code.',
  aboutParagraphs: [
    "Hello, I'm Rowtu Lokesh, a Computer Science graduate passionate about backend development and modern software engineering.",
    'My primary focus is Java backend development using REST APIs, SQL, and scalable application design. I enjoy solving real-world problems through software while continuously improving my knowledge of data structures, object-oriented programming, and backend architecture.',
    'Alongside Java, I have worked with Python, Flask, React, HTML, CSS, JavaScript, and MySQL to build complete applications. My goal is to become a professional backend engineer who builds reliable and impactful software.',
  ],
  location: 'Visakhapatnam, AP, India',
  cgpa: '7.5',
  college: 'Avanthi Institute of Engineering and Technology',
  collegeShort: 'Avanthi Inst. of Eng. & Tech',
  primaryFocus: 'Java Backend',
  resumeLink:
    'https://docs.google.com/document/d/1iJ5yTmvZoj2KsSkNLS_7kVYsudmTLs0Z/edit?usp=sharing&ouid=113295431589261029173&rtpof=true&sd=true',
  githubUsername: 'Lokesh-0009',
  githubLink: 'https://github.com/Lokesh-0009',
  linkedinUrl: 'https://www.linkedin.com/in/rowtulokesh/',
  email: 'rowtulokesh1123@gmail.com',
  phone: '+91 9581125944',
};

/* ══════════════════════════════════════════════
 * HERO STATS
 * ══════════════════════════════════════════════ */

export const heroStats: HeroStat[] = [
  { value: '2 Roles', label: 'Internships' },
  { value: '2+ Major', label: 'Projects Built' },
  { value: '7.5 CGPA', label: 'B.Tech Graduate' },
];

/* ══════════════════════════════════════════════
 * NAVIGATION
 * ══════════════════════════════════════════════ */

export const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

/* ══════════════════════════════════════════════
 * ABOUT ME TIMELINE
 * ══════════════════════════════════════════════ */

export const timelineSteps: TimelineStep[] = [
  {
    title: 'Started Programming',
    subtitle: 'First lines of code',
    description:
      'Began journey with fundamentals. Discovered a deep fascination for algorithms, structures, and object-oriented programming concepts using C and Java.',
    icon: BookOpen,
    date: '2022',
  },
  {
    title: 'Built Projects',
    subtitle: 'From theory to reality',
    description:
      'Engineered web scrapers, desktop tools, and full-stack websites. Connected frontends to databases, exploring relational models and query optimizations.',
    icon: Code,
    date: '2023',
  },
  {
    title: 'Internships',
    subtitle: 'Industry exposure',
    description:
      'Collaborated on remote internships: AWS AI ML and SmartBridge IBM. Gained hands-on experience in machine learning pipelines, cloud services, and Agile processes.',
    icon: Briefcase,
    date: '2024',
  },
  {
    title: 'Java Backend Mastery',
    subtitle: 'Deep dive into servers',
    description:
      'Focused on building scalable server-side systems. Deepened knowledge in RESTful API design, database schemas (MySQL/SQL), concurrency, and OOP patterns.',
    icon: Database,
    date: '2025',
  },
  {
    title: 'Learning Spring Boot',
    subtitle: 'Enterprise architectures',
    description:
      'Explored the Spring ecosystem: Spring Boot, Spring Data JPA, Security, and Microservices. Wired backend APIs to react-based interfaces and AI pipelines.',
    icon: Cpu,
    date: '2025 - 2026',
  },
  {
    title: 'Future Software Engineer',
    subtitle: 'Next Chapter',
    description:
      'Aspiring to engineer highly resilient, performant software systems. Ready to bring backend efficiency, product-focused thinking, and continuous learning to high-impact teams.',
    icon: Milestone,
    date: 'Present & Beyond',
  },
];

/* ══════════════════════════════════════════════
 * TECHNICAL SKILLS
 * ══════════════════════════════════════════════ */

export const skillTabs: SkillTab[] = [
  { key: 'backend', label: 'Languages & Backend', emoji: '⚙️' },
  { key: 'frontend', label: 'Frontend', emoji: '🎨' },
  { key: 'database', label: 'DB & Core CS', emoji: '💾' },
  { key: 'tools', label: 'Tools', emoji: '🛠️' },
];

export const skillsData: Record<string, Skill[]> = {
  backend: [
    {
      name: 'Core Java',
      level: 90,
      bar: '██████████████████░░',
      exp: 'OOP, Collections, Multithreading',
    },
    {
      name: 'Python',
      level: 80,
      bar: '████████████████░░░░',
      exp: 'Scripting, Automation, AI Integrations',
    },
    {
      name: 'REST APIs',
      level: 85,
      bar: '█████████████████░░░',
      exp: 'API Integration, JSON endpoints',
    },
    {
      name: 'Flask',
      level: 75,
      bar: '███████████████░░░░░',
      exp: 'Python microservices, web routing',
    },
  ],
  frontend: [
    {
      name: 'HTML5 / CSS3',
      level: 85,
      bar: '█████████████████░░░',
      exp: 'Semantic layouts, Responsive UI design',
    },
    {
      name: 'JavaScript',
      level: 80,
      bar: '████████████████░░░░',
      exp: 'ES6+ features, asynchronous logic',
    },
    {
      name: 'React.js',
      level: 75,
      bar: '███████████████░░░░░',
      exp: 'Components, state hooks, routing',
    },
  ],
  database: [
    {
      name: 'MySQL',
      level: 80,
      bar: '████████████████░░░░',
      exp: 'Relational database systems, indexing',
    },
    {
      name: 'SQL',
      level: 85,
      bar: '█████████████████░░░',
      exp: 'Structured queries, joins, optimization',
    },
    {
      name: 'OOP / SDLC',
      level: 90,
      bar: '██████████████████░░',
      exp: 'SOLID principles, software cycles',
    },
    {
      name: 'DSA / Algorithms',
      level: 80,
      bar: '████████████████░░░░',
      exp: 'Problem-solving, logic optimizations',
    },
  ],
  tools: [
    {
      name: 'Git',
      level: 85,
      bar: '█████████████████░░░',
      exp: 'Version control workflows, branching',
    },
    {
      name: 'GitHub',
      level: 90,
      bar: '██████████████████░░',
      exp: 'Repository management, open-source',
    },
    {
      name: 'Visual Studio Code',
      level: 95,
      bar: '███████████████████░',
      exp: 'Custom environment configurations',
    },
    {
      name: 'Postman',
      level: 85,
      bar: '█████████████████░░░',
      exp: 'REST API testing and validation',
    },
  ],
};

/* ══════════════════════════════════════════════
 * PROFESSIONAL EXPERIENCE
 * ══════════════════════════════════════════════ */

export const experiences: Experience[] = [
  {
    role: 'AWS AI-ML Virtual Internship',
    company: 'AWS Academy',
    location: 'Remote',
    duration: 'January 2025 – March 2025',
    tech: [
      'AWS Cloud',
      'AWS SageMaker',
      'Machine Learning',
      'AI Workflows',
      'Python',
    ],
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
    tech: [
      'IBM Cloud',
      'Generative AI',
      'Watson AI',
      'Application Development',
      'Node-RED',
    ],
    bullets: [
      'Developed AI-powered healthcare application features, optimizing patient chatbot functions.',
      'Implemented disease prediction algorithms and integrated treatment recommendation modules.',
      'Connected cloud-based Watson Assistant and NoSQL schemas on IBM Cloud containers.',
      'Tested, debugged, and deployed healthcare application features under agile remote sprints.',
    ],
  },
];

/* ══════════════════════════════════════════════
 * FEATURED PROJECTS
 * ══════════════════════════════════════════════ */

export const projects: Project[] = [
  {
    title: 'PrescriptoAI – AI Health Risk & Safety Analyzer',
    description:
      'An AI-powered healthcare application that digitizes medical prescriptions using OCR and Natural Language Processing. The system extracts prescription data, identifies dosage risks, stores patient history in a SQL database, and provides safety alerts through a REST API backend.',
    image: '/prescripto_ai.png',
    tech: ['Python', 'OCR', 'NLP', 'Flask', 'SQL', 'REST API'],
    features: [
      {
        icon: Cpu,
        label: 'OCR & NLP',
        text: 'Digitises prescriptions, extracting drug names, dosages, and patient details.',
      },
      {
        icon: Layers,
        label: 'SQL DB Integration',
        text: 'Stores complete patient records and historical prescription data.',
      },
      {
        icon: ShieldAlert,
        label: 'Dosage Risk Detection',
        text: 'Analyses prescription metrics to detect contradiction and dose safety.',
      },
    ],
    github: 'https://github.com/Lokesh-0009/PrescriptoAI',
    demo: '#',
    category: 'Major Academic Project',
  },
  {
    title: 'Developer Portfolio Website',
    description:
      'A fully responsive portfolio website developed to showcase projects, technical skills, and professional experience. Built with responsive layouts, smooth animations, and interactive user interface components.',
    image: '/portfolio.png',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'Next.js',
      'React',
      'Tailwind',
      'Framer Motion',
    ],
    features: [
      {
        icon: Layout,
        label: 'Responsive Design',
        text: 'Adapts seamlessly to mobile, tablet, and desktop viewports.',
      },
      {
        icon: Cpu,
        label: 'Interactive Console',
        text: 'Features a command line emulator Easter Egg (Press J).',
      },
      {
        icon: Layers,
        label: 'Modern UI & Theme',
        text: "Utilises Lokesh's signature dark theme, glows, and animations.",
      },
    ],
    github: 'https://github.com/Lokesh-0009',
    demo: '#',
    category: 'Frontend Project',
  },
];

/* ══════════════════════════════════════════════
 * EDUCATION
 * ══════════════════════════════════════════════ */

export const educationEntries: EducationEntry[] = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering (CGPA: 7.5)',
    institution:
      'Avanthi Institute of Engineering and Technology, Vizianagaram, AP',
    duration: '2022 - 2026',
    details:
      'Specialized in core computer science areas, including Object-Oriented Programming (Java), Data Structures & Algorithms, Database Management Systems, and Software Development Life Cycles.',
  },
  {
    degree: 'Intermediate (MPC Stream)',
    field: 'Mathematics, Physics, Chemistry (Grade: 81%)',
    institution: 'Sri Aditya Junior College, Rajam, AP',
    duration: '2020 - 2022',
    details:
      'Completed higher secondary education focusing on advanced mathematics and sciences, building strong logical and quantitative skills.',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    field: 'General Education (Grade: 95%)',
    institution: 'Z.P.H School, Laxmipuram, AP',
    duration: '2020',
    details:
      'Graduated with high honors, developing early analytical and scientific methodologies.',
  },
];

/* ══════════════════════════════════════════════
 * CERTIFICATIONS
 * ══════════════════════════════════════════════ */

export const certifications: Certification[] = [
  {
    title: 'NPTEL Java Programming',
    issuer: 'NPTEL (IIT Kharagpur)',
    credentialId: 'IITKGP-JAVA-2025',
    date: 'Jan – Apr 2025',
    details:
      'Completed advanced coursework and examination covering OOP, Java Collections Framework, Exception Handling, Multithreading, and file systems.',
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    issuer: 'SmartBridge',
    credentialId: 'SB-AIML-2026',
    date: 'March 2026',
    details:
      'Completed verified project workflows in building predictive analytical models, data pre-processing, and model evaluation parameters.',
  },
  {
    title: 'AWS AI-ML Virtual Internship Certificate',
    issuer: 'Amazon Web Services (AWS)',
    credentialId: 'AWS-AIML-INTERN-2025',
    date: 'March 2025',
    details:
      'Credential for AWS Academy Virtual Internship, covering Amazon SageMaker pipelines, Rekognition visual processing, and custom Lex chatbots.',
  },
];

/* ══════════════════════════════════════════════
 * QUOTES
 * ══════════════════════════════════════════════ */

export const quotes: Quote[] = [
  {
    text: `/*\n * First solve the problem.\n * Then write the code.\n * — John Johnson\n */`,
  },
  {
    text: `/*\n * The best way to predict the future\n * is to build it.\n * — Alan Kay\n */`,
  },
  {
    text: `/*\n * Stay curious.\n * Keep building.\n * Never stop learning.\n */`,
  },
];

/* ══════════════════════════════════════════════
 * CODE SNIPPETS (Hero CodeWindow)
 * ══════════════════════════════════════════════ */

export const codeSnippets: CodeSnippet[] = [
  {
    fileName: 'Future.java',
    code: `public class Future {
    public static void main(String[] args) {
        while (true) {
            learn();
            build();
            improve();
        }
    }
    // ...
}`,
  },
  {
    fileName: 'BackendController.java',
    code: `@RestController
@RequestMapping("/api/v1")
public class BackendController {
    @Autowired
    private ProjectService projectService;

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return projectService.getAllBuiltProjects();
    }
}`,
  },
];

/* ══════════════════════════════════════════════
 * TERMINAL OVERLAY (Easter Egg)
 * ══════════════════════════════════════════════ */

export const terminalHelpCommands: TerminalCommands = {
  help: 'Show list of available commands',
  about: 'Learn more about Lokesh',
  skills: 'Display technical skill matrix',
  projects: 'Summarise featured coding projects',
  contact: 'Show contact details & social channels',
  github: "Get Lokesh's GitHub details",
  resume: "Open Lokesh's Google Docs resume",
  clear: 'Clear terminal screen',
  exit: 'Close developer terminal mode',
};

export const terminalResponses: TerminalResponse[] = [
  {
    command: 'about',
    output: [
      'LOKESH | Software Engineer & Backend Developer',
      'Focus: Java, Spring Boot, REST APIs, and Relational Databases (MySQL/SQL).',
      'Passionate about building enterprise-grade architectures and smart AI-driven automation pipelines.',
    ],
  },
  {
    command: 'skills',
    output: [
      'TECHNICAL SKILLS:',
      '  [Backend]  Java, Spring Boot, REST APIs, Flask',
      '  [Frontend] HTML/CSS, JavaScript, React',
      '  [Database] MySQL, SQL',
      '  [Tools]    Git, GitHub, VS Code, Postman',
    ],
  },
  {
    command: 'projects',
    output: [
      'FEATURED PROJECTS:',
      '  1. PrescriptoAI - AI Medical Assistant (OCR, NLP Parsing, Contradiction Detection)',
      '  2. Developer Portfolio - Dark themed Interactive Terminal Workspace',
    ],
  },
  {
    command: 'contact',
    output: [
      'CONTACT DETAILS:',
      `  Email:    ${personalInfo.email}`,
      '  LinkedIn: linkedin.com/in/rowtulokesh',
      `  GitHub:   github.com/${personalInfo.githubUsername}`,
    ],
  },
  {
    command: 'github',
    output: [
      `Username: ${personalInfo.githubUsername}`,
      `Visit Lokesh's repositories at: ${personalInfo.githubLink}`,
    ],
  },
];

/* ══════════════════════════════════════════════
 * GITHUB STATS SIDEBAR
 * ══════════════════════════════════════════════ */

export const githubLanguages: GithubLanguage[] = [
  { name: 'Java / Spring', percentage: 65, color: 'accent' },
  { name: 'SQL / MySQL', percentage: 20, color: 'accent-sec' },
  { name: 'React / TypeScript', percentage: 15, color: 'success-green' },
];

/* ══════════════════════════════════════════════
 * LOADING SCREEN BOOT SEQUENCE
 * ══════════════════════════════════════════════ */

export const bootSequence: BootSequenceLine[] = [
  { text: '> Initializing Portfolio...', delay: 500 },
  { text: 'Loading modules...', delay: 400 },
  { text: '  Java ................... OK', delay: 400 },
  { text: '  Spring Boot ............ OK', delay: 400 },
  { text: '  React .................. OK', delay: 400 },
  { text: 'Building Dreams...', delay: 600 },
  { text: 'Loading complete.', delay: 400 },
];

/* ══════════════════════════════════════════════
 * KONAMI CODE SEQUENCE (Terminal Easter Egg)
 * ══════════════════════════════════════════════ */

export const konamiCode: string[] = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];
