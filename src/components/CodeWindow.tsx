'use client';

import { useState, useEffect } from 'react';

const SNIPPETS = [
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
}`
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
}`
  }
];

export default function CodeWindow() {
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');

  const currentSnippet = SNIPPETS[snippetIdx];

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (phase === 'typing') {
      if (displayedCode.length < currentSnippet.code.length) {
        timer = setTimeout(() => {
          setDisplayedCode(currentSnippet.code.substring(0, displayedCode.length + 1));
        }, 45); // Typing speed
      } else {
        timer = setTimeout(() => {
          setPhase('deleting');
        }, 3000); // Pause when fully typed
      }
    } else if (phase === 'deleting') {
      if (displayedCode.length > 0) {
        timer = setTimeout(() => {
          setDisplayedCode(currentSnippet.code.substring(0, displayedCode.length - 1));
        }, 15); // Fast delete speed
      } else {
        timer = setTimeout(() => {
          setSnippetIdx((prev) => (prev + 1) % SNIPPETS.length);
          setPhase('typing');
        }, 800); // Pause before typing next snippet
      }
    }

    return () => clearTimeout(timer);
  }, [displayedCode, phase, snippetIdx, currentSnippet.code]);

  return (
    <div className="w-full bg-secondary-bg border border-border-custom rounded-lg overflow-hidden font-mono text-xs md:text-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Editor Tab Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-primary-bg/50 border-b border-border-custom select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-xs text-text-muted flex items-center gap-1">
          <span className="text-[#e28743] font-bold">☕</span>
          <span>{currentSnippet.fileName}</span>
        </div>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Editor Code Body */}
      <div className="p-4 md:p-6 overflow-x-auto min-h-[220px] bg-secondary-bg/25">
        <pre className="text-text-main text-left leading-relaxed whitespace-pre font-mono">
          <code className="text-xs md:text-sm font-mono">
            {displayedCode.split('\n').map((line, lineIdx) => {
              const linesCount = displayedCode.split('\n').length;
              const isLastLine = lineIdx === linesCount - 1;
              
              return (
                <span key={lineIdx} className="block">
                  <span className="text-text-muted select-none mr-4 w-5 inline-block text-right text-xs">
                    {lineIdx + 1}
                  </span>
                  {line.split(/(\b(?:public|private|class|static|void|while|true|main|String|args|learn|build|improve|new|Future|return|List|ResponseEntity|BackendController|ProjectService|Project|getProjects|getAllBuiltProjects|getPassion|ok)\b|@\w+)/).map((word, wordIdx) => {
                    let color = 'text-text-main';
                    if (['public', 'private', 'class', 'static', 'void', 'while', 'new', 'return'].includes(word)) {
                      color = 'text-accent-sec font-bold';
                    } else if (['true', 'String', 'Future', 'ResponseEntity', 'List', 'Project', 'BackendController', 'ProjectService'].includes(word) || word.startsWith('@')) {
                      color = 'text-accent';
                    } else if (['learn', 'build', 'improve', 'main', 'getProjects', 'getAllBuiltProjects', 'getPassion', 'ok'].includes(word)) {
                      color = 'text-[#22C55E]';
                    }
                    return <span key={wordIdx} className={color}>{word}</span>;
                  })}
                  {isLastLine && (
                    <span className="inline-block w-2 h-4 bg-accent animate-blink ml-0.5 align-middle" />
                  )}
                </span>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
}
