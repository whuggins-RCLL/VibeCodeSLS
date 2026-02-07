import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, AlertTriangle, EyeOff, Image, FileText, Users, ShieldAlert, Info, ArrowRight, Copy, Check } from 'lucide-react';

const GithubPortfolioPart14: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const gitignoreContent = `# Secrets and credentials
*.env
key
config/secrets.json
credentials.txt

# Personal data
/confidential/
/client-data/

# Large files
*.mp4
*.zip
datasets/large-files/`;

  const mistakes = [
    {
      icon: <AlertTriangle size={24} />,
      title: "Mistake 1: Waiting for Perfect",
      trap: "\"I'll publish this when it's completely finished.\" This is a problem because perfect never comes, and you learn by sharing and getting feedback.",
      better: "Publish early with a clear note:",
      note: "**## Work in Progress**\nThis project is under active development. Documentation is incomplete but functional. Feedback welcome!"
    },
    {
      icon: <FileText size={24} />,
      title: "Mistake 2: Over-explaining",
      trap: "Writing paragraphs about common knowledge (e.g., \"What is ChatGPT?\").",
      better: "Get to the point. Trust your audience and assume basic familiarity. Focus on *your* specific use case, not a general definition."
    },
    {
      icon: <Image size={24} />,
      title: "Mistake 3: No Visual Elements",
      trap: "A wall of text with no images, screenshots, or formatting. People scan before they read, and visuals grab attention.",
      better: "Add a screenshot \"above the fold\" (near the top). Use emoji for visual breaks. Show before/after examples."
    },
    {
      icon: <EyeOff size={24} />,
      title: "Mistake 4: Vague Descriptions",
      trap: "Generic descriptions that could apply to anything.",
      bad: "\"AI project\" or \"Some prompts\"",
      good: "\"Custom GPT that generates IRAC legal analyses from case descriptions\" or \"50+ tested prompts for legal document summarization.\""
    },
    {
      icon: <Users size={24} />,
      title: "Mistake 5: Forgetting Your Audience",
      trap: "Writing only for yourself or experts in your exact situation.",
      bad: "\"That GPT Thing. You know, the one we talked about. For the thing.\"",
      good: "**Contract Review Assistant GPT**\nA custom GPT that helps junior associates review commercial contracts by flagging common issues and suggesting standard clause language."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-16">
        {/* Navigation */}
        <div className="space-y-4">
            <Link 
            to="/github" 
            className="inline-flex items-center text-sm font-medium text-neutral-slate hover:text-cardinal transition-colors w-fit group"
            >
            <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio Guide
            </Link>
        </div>

        {/* Header */}
        <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-neutral-charcoal dark:text-white">
                Your First GitHub Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-neutral-slate dark:text-neutral-cool max-w-3xl mx-auto">
                A No-Code Guide to Showcasing Your AI Journey for Complete Beginners
            </p>
        </header>

        {/* Content Card */}
        <section className="bg-white dark:bg-neutral-darkCard rounded-2xl p-8 md:p-12 border border-neutral-cool/20 shadow-sls-md">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-neutral-charcoal dark:text-white">
                Part 14: Common Mistakes to Avoid
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8 leading-relaxed">
                Learning to avoid common pitfalls is just as important as learning best practices. Here are six traps to watch out for on your journey.
            </p>
            
            <div className="pt-8 border-t border-neutral-cool/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {mistakes.map((mistake, index) => (
                        <div key={index} className={`bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20 ${index === 4 ? 'md:col-span-2' : ''}`}>
                            <div className="flex items-center gap-3 mb-3 text-cardinal dark:text-electric">
                                {mistake.icon}
                                <h4 className="text-xl font-bold">{mistake.title}</h4>
                            </div>
                            <p className="mb-3 text-neutral-slate dark:text-neutral-cool">
                                <strong className="text-neutral-charcoal dark:text-white">The Trap:</strong> {mistake.trap}
                            </p>
                            
                            {mistake.better && (
                                <p className="text-neutral-slate dark:text-neutral-cool">
                                    <strong className="text-neutral-charcoal dark:text-white">Better Approach:</strong> {mistake.better}
                                </p>
                            )}
                            
                            {mistake.note && (
                                <div className="mt-3 p-3 bg-white dark:bg-black/20 rounded border border-neutral-cool/10 text-sm font-mono text-neutral-slate dark:text-neutral-cool whitespace-pre-wrap">
                                    {mistake.note}
                                </div>
                            )}

                            {mistake.bad && (
                                <div className="mt-3 space-y-2">
                                    <p className="text-functional-error text-sm"><span className="font-bold">Bad:</span> {mistake.bad}</p>
                                    <p className="text-functional-success text-sm whitespace-pre-wrap"><span className="font-bold">Good:</span> {mistake.good}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mistake 6: Security (Full Width) */}
                <div className="bg-functional-error/5 border border-functional-error/20 rounded-xl p-8">
                    <div className="flex items-center gap-3 mb-6 text-functional-error">
                        <ShieldAlert size={32} />
                        <h3 className="text-2xl font-bold">Mistake 6: Ignoring Security</h3>
                    </div>
                    
                    <div className="space-y-4 text-lg text-neutral-slate dark:text-neutral-cool mb-6">
                        <p className="font-bold text-neutral-charcoal dark:text-white">Never commit these to a public GitHub repository:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>API keys (OpenAI, Anthropic, etc.)</li>
                            <li>Passwords or credentials</li>
                            <li>Student or client personal information</li>
                            <li>Proprietary company data or confidential documents</li>
                        </ul>
                        <p>
                            <strong className="text-neutral-charcoal dark:text-white">How to protect yourself:</strong> Create a file in your repository named exactly <code className="bg-neutral-offWhite dark:bg-white/10 px-1 rounded font-mono text-base">.gitignore</code> and add the file/folder names you want GitHub to ignore.
                        </p>
                    </div>

                    {/* How It Works Explanation */}
                    <div className="bg-white dark:bg-neutral-darkCard border border-neutral-cool/20 rounded-xl p-6 mb-6">
                        <h5 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-3 flex items-center gap-2">
                            <Info size={20} className="text-functional-info" /> How It Works:
                        </h5>
                        <p className="text-neutral-slate dark:text-neutral-cool mb-3 text-sm">
                            The <code className="bg-neutral-offWhite dark:bg-white/10 px-1 rounded font-mono text-xs">.gitignore</code> file is just a plain text file where every line is a rule. When you try to add files to GitHub, the system first checks this file.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool text-sm ml-2">
                            <li>If a file or folder matches a rule, GitHub pretends it doesn't even exist. It will not be tracked or uploaded.</li>
                            <li>This is crucial because once something is committed (even if you delete it later), it can still be found in the project's history. <code className="bg-neutral-offWhite dark:bg-white/10 px-1 rounded font-mono text-xs">.gitignore</code> prevents the mistake from happening in the first place.</li>
                            <li>A comment line starts with <code className="bg-neutral-offWhite dark:bg-white/10 px-1 rounded font-mono text-xs">#</code>.</li>
                            <li><code className="bg-neutral-offWhite dark:bg-white/10 px-1 rounded font-mono text-xs">*.env</code> uses a wildcard (<code className="bg-neutral-offWhite dark:bg-white/10 px-1 rounded font-mono text-xs">*</code>) to ignore <strong>any</strong> file ending with <code className="bg-neutral-offWhite dark:bg-white/10 px-1 rounded font-mono text-xs">.env</code>.</li>
                            <li><code className="bg-neutral-offWhite dark:bg-white/10 px-1 rounded font-mono text-xs">/confidential/</code> ignores the <strong>entire folder</strong> (and all its contents) named <code className="bg-neutral-offWhite dark:bg-white/10 px-1 rounded font-mono text-xs">confidential</code>.</li>
                        </ul>
                    </div>

                    {/* Code Block */}
                    <div className="relative group">
                        <div className="absolute top-3 right-3 z-10">
                            <button 
                                onClick={() => handleCopy(gitignoreContent, 'git')}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors backdrop-blur-sm"
                            >
                                {copied === 'git' ? <Check size={14} className="text-functional-success" /> : <Copy size={14} />}
                                {copied === 'git' ? 'Copied' : 'Copy'}
                            </button>
                        </div>
                        <pre className="bg-[#1a1a1a] text-neutral-offWhite p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-neutral-cool/20">
                            {gitignoreContent}
                        </pre>
                    </div>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-neutral-cool/20 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 gap-6">
                <div className="flex-grow">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-slate dark:text-neutral-cool mb-1">Next Up</p>
                    <p className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2">Part 15: Advanced Features</p>
                    <p className="text-base text-neutral-slate dark:text-neutral-cool max-w-xl">
                        Explore next-level features like GitHub Pages, Issues, and badges when you're ready.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/github/part-15" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white bg-cardinal hover:bg-cardinal-dark transition-colors shadow-sls-md hover:shadow-sls-lg transform hover:-translate-y-0.5"
                    >
                        Go to Part 15 <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </section>
    </div>
  );
};

export default GithubPortfolioPart14;