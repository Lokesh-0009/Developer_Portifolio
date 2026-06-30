/**
 * CodeWindow — Animated code snippet display in a terminal-style editor.
 *
 * Cycles through Java code snippets with a typing/deleting animation.
 * Features syntax highlighting for Java keywords, annotations, and method names.
 *
 * Data source: portfolioData.codeSnippets
 */

'use client';

import { useState, useEffect } from 'react';
import { codeSnippets } from '@/data/portfolio-data';
import TerminalWindow from '@/components/ui/TerminalWindow';

/** Java keywords that receive purple/accent-sec syntax highlighting */
const JAVA_KEYWORDS = ['public', 'private', 'class', 'static', 'void', 'while', 'new', 'return'];

/** Java types and annotations that receive blue/accent highlighting */
const JAVA_TYPES = [
  'true', 'String', 'Future', 'ResponseEntity', 'List',
  'Project', 'BackendController', 'ProjectService',
];

/** Method/function names that receive green highlighting */
const JAVA_METHODS = [
  'learn', 'build', 'improve', 'main',
  'getProjects', 'getAllBuiltProjects', 'getPassion', 'ok',
];

export default function CodeWindow() {
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');

  const currentSnippet = codeSnippets[snippetIdx];

  /* Typing/deleting animation state machine */
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (phase === 'typing') {
      if (displayedCode.length < currentSnippet.code.length) {
        /* Type one character at a time — 45ms per keystroke */
        timer = setTimeout(() => {
          setDisplayedCode(currentSnippet.code.substring(0, displayedCode.length + 1));
        }, 45);
      } else {
        /* Pause 3s when fully typed before starting to delete */
        timer = setTimeout(() => {
          setPhase('deleting');
        }, 3000);
      }
    } else if (phase === 'deleting') {
      if (displayedCode.length > 0) {
        /* Fast-delete at 15ms per character */
        timer = setTimeout(() => {
          setDisplayedCode(currentSnippet.code.substring(0, displayedCode.length - 1));
        }, 15);
      } else {
        /* Advance to next snippet after 800ms pause */
        timer = setTimeout(() => {
          setSnippetIdx((prev) => (prev + 1) % codeSnippets.length);
          setPhase('typing');
        }, 800);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedCode, phase, snippetIdx, currentSnippet.code]);

  /**
   * Applies syntax highlighting to a single line of Java code.
   * Splits on word boundaries and annotation patterns, then colorizes matches.
   */
  const highlightLine = (line: string) => {
    return line
      .split(/(\b(?:public|private|class|static|void|while|true|main|String|args|learn|build|improve|new|Future|return|List|ResponseEntity|BackendController|ProjectService|Project|getProjects|getAllBuiltProjects|getPassion|ok)\b|@\w+)/)
      .map((word, wordIdx) => {
        let color = 'text-text-main';
        if (JAVA_KEYWORDS.includes(word)) {
          color = 'text-accent-sec font-bold';
        } else if (JAVA_TYPES.includes(word) || word.startsWith('@')) {
          color = 'text-accent';
        } else if (JAVA_METHODS.includes(word)) {
          color = 'text-[#22C55E]';
        }
        return (
          <span key={wordIdx} className={color}>
            {word}
          </span>
        );
      });
  };

  return (
    <div className="w-full bg-secondary-bg border border-border-custom rounded-lg overflow-hidden font-mono text-xs md:text-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Editor tab bar with traffic light dots and filename */}
      <TerminalWindow
        title={
          <span className="flex items-center gap-1">
            <span className="text-[#e28743] font-bold">☕</span>
            <span>{currentSnippet.fileName}</span>
          </span>
        }
      >
        {/* Editor code body */}
        <div className="p-4 md:p-6 overflow-x-auto min-h-[220px] bg-secondary-bg/25">
          <pre className="text-text-main text-left leading-relaxed whitespace-pre font-mono">
            <code className="text-xs md:text-sm font-mono">
              {displayedCode.split('\n').map((line, lineIdx) => {
                const linesCount = displayedCode.split('\n').length;
                const isLastLine = lineIdx === linesCount - 1;

                return (
                  <span key={lineIdx} className="block">
                    {/* Line number gutter */}
                    <span className="text-text-muted select-none mr-4 w-5 inline-block text-right text-xs">
                      {lineIdx + 1}
                    </span>
                    {highlightLine(line)}
                    {/* Blinking cursor on the last line */}
                    {isLastLine && (
                      <span className="inline-block w-2 h-4 bg-accent animate-blink ml-0.5 align-middle" />
                    )}
                  </span>
                );
              })}
            </code>
          </pre>
        </div>
      </TerminalWindow>
    </div>
  );
}
