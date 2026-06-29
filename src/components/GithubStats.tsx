'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitFork, Star, Folder, Users, BookOpen, Terminal } from 'lucide-react';

interface GitHubProfile {
  public_repos: number;
  followers: number;
  following: number;
  login: string;
  avatar_url: string;
}

interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string;
}

export default function GithubStats() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch profile
        const profileRes = await fetch('https://api.github.com/users/Lokesh-0009');
        const profileData = await profileRes.json();
        
        // Fetch repos
        const reposRes = await fetch('https://api.github.com/users/Lokesh-0009/repos?sort=updated&per_page=6');
        const reposData = await reposRes.json();

        if (profileRes.ok) setProfile(profileData);
        if (reposRes.ok && Array.isArray(reposData)) {
          // Sort repos by stars + forks or pick specific ones
          const sorted = reposData
            .filter(r => !r.fork)
            .slice(0, 4);
          setRepos(sorted);
        }
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Generate fake contribution calendar grid values (53 cols * 7 rows)
  const contributionGrid = Array.from({ length: 371 }, (_, idx) => {
    // Generate values: 0 (no activity) to 4 (high activity)
    const rand = Math.random();
    if (rand < 0.6) return 0;
    if (rand < 0.8) return 1;
    if (rand < 0.9) return 2;
    if (rand < 0.97) return 3;
    return 4;
  });

  const getGlowColor = (val: number) => {
    switch (val) {
      case 0: return 'bg-[#161b22]'; // Dark grey
      case 1: return 'bg-[#0e4429]'; // Light green
      case 2: return 'bg-[#006d32]'; // Mid green
      case 3: return 'bg-[#26a641]'; // Bright green
      case 4: return 'bg-[#39d353] animate-pulse'; // Glowing green
      default: return 'bg-[#161b22]';
    }
  };

  const username = "Lokesh-0009";

  return (
    <section id="github" className="py-20 border-b border-border-custom relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            GitHub Contributions
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: User Stats Card */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="p-6 bg-secondary-bg/25 border border-border-custom rounded-lg shadow-xl relative overflow-hidden group">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-border-custom bg-black/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={profile?.avatar_url || 'https://avatars.githubusercontent.com/u/110903333?v=4'}
                    alt={username}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-text-main group-hover:text-accent transition-colors font-mono">
                    @{username}
                  </h3>
                  <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent font-mono hover:underline flex items-center gap-1"
                  >
                    <span>View GitHub Profile</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-border-custom font-mono text-center">
                <div className="space-y-1">
                  <BookOpen size={16} className="mx-auto text-accent-sec" />
                  <div className="text-lg font-bold text-text-main">
                    {profile?.public_repos ?? 14}
                  </div>
                  <div className="text-[10px] text-text-muted">Repos</div>
                </div>
                <div className="space-y-1">
                  <Users size={16} className="mx-auto text-accent-sec" />
                  <div className="text-lg font-bold text-text-main">
                    {profile?.followers ?? 5}
                  </div>
                  <div className="text-[10px] text-text-muted">Followers</div>
                </div>
                <div className="space-y-1">
                  <Users size={16} className="mx-auto text-accent-sec" />
                  <div className="text-lg font-bold text-text-main">
                    {profile?.following ?? 12}
                  </div>
                  <div className="text-[10px] text-text-muted">Following</div>
                </div>
              </div>
            </div>

            {/* Languages card */}
            <div className="p-6 bg-secondary-bg/25 border border-border-custom rounded-lg space-y-4">
              <h4 className="font-mono text-xs text-accent font-bold uppercase flex items-center gap-1.5">
                <Terminal size={14} />
                <span>Primary Languages</span>
              </h4>
              <div className="space-y-3 font-mono text-xs">
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-text-main font-semibold">Java / Spring</span>
                    <span className="text-accent">65%</span>
                  </div>
                  <div className="h-1 bg-border-custom rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[65%]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-text-main font-semibold">SQL / MySQL</span>
                    <span className="text-accent-sec">20%</span>
                  </div>
                  <div className="h-1 bg-border-custom rounded-full overflow-hidden">
                    <div className="h-full bg-accent-sec w-[20%]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-text-main font-semibold">React / TypeScript</span>
                    <span className="text-success-green">15%</span>
                  </div>
                  <div className="h-1 bg-border-custom rounded-full overflow-hidden">
                    <div className="h-full bg-success-green w-[15%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Contribution Simulation Map */}
          <div className="lg:col-span-8 space-y-6 text-left">
            {/* Grid display */}
            <div className="p-6 bg-secondary-bg/25 border border-border-custom rounded-lg space-y-4">
              <div className="flex justify-between items-center select-none pb-2 border-b border-border-custom">
                <h4 className="font-mono text-xs text-text-muted font-semibold">
                  Contribution History
                </h4>
                <div className="flex items-center gap-1 font-mono text-[10px] text-text-muted">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 bg-[#161b22] rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-[#0e4429] rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-[#006d32] rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-[#26a641] rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-[#39d353] rounded-sm" />
                  <span>More</span>
                </div>
              </div>

              {/* The Graph Grid */}
              <div className="overflow-x-auto no-scrollbar pt-2">
                <div className="grid grid-flow-col grid-rows-7 gap-[3px] min-w-[700px] select-none">
                  {contributionGrid.map((val, idx) => (
                    <div
                      key={idx}
                      className={`w-2.5 h-2.5 rounded-[1px] transition-all hover:scale-125 duration-100 ${getGlowColor(val)}`}
                      title={`${val} contributions`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Repos list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {repos.length > 0 ? (
                repos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 bg-secondary-bg/15 border border-border-custom hover:border-accent/40 rounded-lg flex flex-col justify-between gap-4 transition-all duration-300 group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-text-main group-hover:text-accent transition-colors font-mono font-bold text-sm">
                        <Folder size={14} className="text-accent-sec" />
                        <span>{repo.name}</span>
                      </div>
                      <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                        {repo.description || 'No description available for this repository.'}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-[10px] font-mono text-text-muted">
                      {repo.language && (
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-accent" />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star size={11} />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={11} />
                        {repo.forks_count}
                      </span>
                    </div>
                  </a>
                ))
              ) : (
                // Fallback mock repos if loading or network error
                <>
                  <div className="p-5 bg-secondary-bg/15 border border-border-custom rounded-lg flex flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-text-main font-mono font-bold text-sm">
                        <Folder size={14} className="text-accent-sec" />
                        <span>PrescriptoAI</span>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed">
                        Medical prescription parser utilizing OCR technology, NLP and clinical risk detection.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-mono text-text-muted">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#b07219]" />
                        Java
                      </span>
                      <span className="flex items-center gap-1"><Star size={11} /> 12</span>
                      <span className="flex items-center gap-1"><GitFork size={11} /> 3</span>
                    </div>
                  </div>
                  <div className="p-5 bg-secondary-bg/15 border border-border-custom rounded-lg flex flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-text-main font-mono font-bold text-sm">
                        <Folder size={14} className="text-accent-sec" />
                        <span>developer-portfolio</span>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed">
                        Next.js 15, Tailwind v4 and Framer Motion powered interactive workspace portfolio.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-mono text-text-muted">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#3178c6]" />
                        TypeScript
                      </span>
                      <span className="flex items-center gap-1"><Star size={11} /> 8</span>
                      <span className="flex items-center gap-1"><GitFork size={11} /> 1</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
