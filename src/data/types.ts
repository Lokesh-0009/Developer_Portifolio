/**
 * Portfolio Data Type Definitions
 *
 * Centralized TypeScript interfaces for every data structure used
 * across the portfolio. Imported by portfolio-data.ts and all
 * section components that consume the data.
 */

import type { LucideIcon } from 'lucide-react';

/* ──────────────────────────────────────────────
 * Personal / Hero
 * ────────────────────────────────────────────── */

/** Core personal information displayed in the Hero and About sections */
export interface PersonalInfo {
  name: string;
  titles: string[];
  tagline: string;
  heroBio: string;
  heroSummary: string;
  aboutHeading: string;
  aboutParagraphs: string[];
  location: string;
  cgpa: string;
  college: string;
  collegeShort: string;
  primaryFocus: string;
  resumeLink: string;
  githubUsername: string;
  githubLink: string;
  linkedinUrl: string;
  email: string;
  phone: string;
}

/** A stat card shown in the Hero quick-stats grid */
export interface HeroStat {
  value: string;
  label: string;
}

/* ──────────────────────────────────────────────
 * About / Timeline
 * ────────────────────────────────────────────── */

/** A single step in the About Me timeline */
export interface TimelineStep {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  date: string;
}

/* ──────────────────────────────────────────────
 * Skills
 * ────────────────────────────────────────────── */

/** A single technical skill entry within a category */
export interface Skill {
  name: string;
  level: number;
  bar: string;
  exp: string;
}

/** Tab labels mapped to their display names */
export interface SkillTab {
  key: string;
  label: string;
  emoji: string;
}

/* ──────────────────────────────────────────────
 * Experience
 * ────────────────────────────────────────────── */

/** A professional internship / work experience entry */
export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  tech: string[];
  bullets: string[];
}

/* ──────────────────────────────────────────────
 * Projects
 * ────────────────────────────────────────────── */

/** A feature highlight within a project card */
export interface ProjectFeature {
  icon: LucideIcon;
  label: string;
  text: string;
}

/** A featured project entry */
export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: ProjectFeature[];
  github: string;
  demo: string;
  category: string;
}

/* ──────────────────────────────────────────────
 * Education
 * ────────────────────────────────────────────── */

/** An education history entry */
export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  duration: string;
  details: string;
}

/* ──────────────────────────────────────────────
 * Certifications
 * ────────────────────────────────────────────── */

/** A professional certification */
export interface Certification {
  title: string;
  issuer: string;
  credentialId: string;
  date: string;
  details: string;
}

/* ──────────────────────────────────────────────
 * Quotes / Code Snippets
 * ────────────────────────────────────────────── */

/** An inspirational code-comment quote */
export interface Quote {
  text: string;
}

/** A code snippet shown in the hero CodeWindow */
export interface CodeSnippet {
  fileName: string;
  code: string;
}

/* ──────────────────────────────────────────────
 * Navigation
 * ────────────────────────────────────────────── */

/** A navigation menu item */
export interface NavItem {
  name: string;
  href: string;
}

/* ──────────────────────────────────────────────
 * Terminal
 * ────────────────────────────────────────────── */

/** Command definitions for the terminal overlay Easter egg */
export interface TerminalCommands {
  [command: string]: string;
}

/** Terminal command output mappings */
export interface TerminalResponse {
  command: string;
  output: string[];
}

/* ──────────────────────────────────────────────
 * GitHub Stats
 * ────────────────────────────────────────────── */

/** GitHub language breakdown for the stats sidebar */
export interface GithubLanguage {
  name: string;
  percentage: number;
  color: string;
}

/* ──────────────────────────────────────────────
 * Loading Screen
 * ────────────────────────────────────────────── */

/** A terminal boot sequence line */
export interface BootSequenceLine {
  text: string;
  delay: number;
}
