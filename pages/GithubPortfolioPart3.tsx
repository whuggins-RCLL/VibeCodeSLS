import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Copy, Check } from 'lucide-react';

const GithubPortfolioPart3: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const readmeTemplate = `# Hi, I'm [Your Name]

## About Me
I'm passionate about making AI accessible and practical for everyone. Currently working at [Your Organization], where I [what you do].

## What I'm Working On
- Teaching AI literacy to legal professionals
- Building custom GPTs for [specific use case]
- Exploring [AI topic you're interested in]

## AI Tools I Use
- ChatGPT (Advanced prompting, Custom GPTs)
- Claude (Research, document analysis)
- Harvey AI (Legal-specific applications)
- [Other tools you use]

## AI Training Completed
- **Prompt Engineering Fundamentals** (Stanford Law School, 2024)
- **Building Custom GPTs** (OpenAI, 2024)
- **AI Ethics for Professionals** ([Organization], 2024)

## Featured Projects
Coming soon! Currently documenting my AI work.

## Let's Connect
- LinkedIn: [Your LinkedIn URL]
- Email: your.email@domain.com
- Website: yourwebsite.com

## Fun Fact
[Something interesting about you or your AI journey]`;

  const handleCopy = () => {
    navigator.clipboard.writeText(readmeTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
                Part 3: Creating Your Profile README
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8 leading-relaxed">
                Here's a GitHub feature most people don't know about: if you create a special repository with the exact same name as your username, GitHub displays it as your profile page. This is your digital billboard. Let's build one.
            </p>
            
            <div className="pt-8 border-t border-neutral-cool/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* COLUMN 1: STEP 1 */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Step 1: Create the Magic Repository</h3>
                        
                        <ol className="list-decimal list-inside space-y-6 text-neutral-slate dark:text-neutral-cool text-lg marker:font-bold marker:text-cardinal dark:marker:text-electric">
                            <li>
                                Click the "+" button (top right) &rarr; "New repository"
                                <div className="mt-4 space-y-4 pl-4">
                                    <img 
                                        src="https://i.postimg.cc/5yTCDwjn/Screenshot-2025-10-29-at-10-55-27-PM.png" 
                                        alt="Click the Create New button" 
                                        className="rounded-xl shadow-sls-sm border border-neutral-cool/20 max-w-full"
                                    />
                                    <img 
                                        src="https://i.postimg.cc/C5Xq9jdX/Screenshot-2025-10-29-at-10-55-39-PM.png" 
                                        alt="Select New Repository from the dropdown" 
                                        className="rounded-xl shadow-sls-sm border border-neutral-cool/20 max-w-full"
                                    />
                                </div>
                            </li>
                            <li>
                                <strong className="text-neutral-charcoal dark:text-white">Repository name:</strong> Type your exact username (GitHub will show a special message when you get it right)
                                <div className="mt-4 pl-4">
                                    <img 
                                        src="https://i.postimg.cc/gjQZ1vr7/Screenshot-2025-10-29-at-11-02-00-PM.png" 
                                        alt="The special repository message appears when you type your username" 
                                        className="rounded-xl shadow-sls-sm border border-neutral-cool/20 max-w-full"
                                    />
                                </div>
                            </li>
                            <li><strong className="text-neutral-charcoal dark:text-white">Description:</strong> "My GitHub profile"</li>
                            <li>Select "Public" (this must be public to work)</li>
                            <li>Check "Add a README file"</li>
                            <li>Click "Create repository"</li>
                        </ol>
                    </div>

                    {/* COLUMN 2: STEP 2 */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Step 2: Edit Your Profile README</h3>
                        <p className="text-lg text-neutral-slate dark:text-neutral-cool">
                            You'll see your new <code className="bg-neutral-offWhite dark:bg-white/10 px-1.5 py-0.5 rounded text-cardinal dark:text-electric font-mono text-base">README.md</code> file. Click the pencil icon (top right of the file) to edit. Here's a template to start with:
                        </p>
                        
                        {/* Code Block */}
                        <div className="relative group">
                            <div className="absolute top-3 right-3 z-10">
                                <button 
                                    onClick={handleCopy}
                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors backdrop-blur-sm"
                                >
                                    {copied ? <Check size={14} className="text-functional-success" /> : <Copy size={14} />}
                                    {copied ? 'Copied' : 'Copy'}
                                </button>
                            </div>
                            <pre className="bg-[#1a1a1a] text-neutral-offWhite p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-neutral-cool/20">
                                {readmeTemplate}
                            </pre>
                        </div>

                        <div className="space-y-4 text-neutral-slate dark:text-neutral-cool text-lg">
                            <p>Click the green "Commit changes" button at the top right.</p>
                            <p>Now visit your profile (click your username anywhere) and you'll see your new profile page!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-neutral-cool/20 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 gap-6">
                <div className="flex-grow">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-slate dark:text-neutral-cool mb-1">Next Up</p>
                    <p className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2">Part 4: Creating Your First AI Project Repository</p>
                    <p className="text-base text-neutral-slate dark:text-neutral-cool max-w-xl">
                        Your profile is set! Now let's create the first *project* repository to showcase your actual AI work and documentation.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/github/part-4" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white bg-cardinal hover:bg-cardinal-dark transition-colors shadow-sls-md hover:shadow-sls-lg transform hover:-translate-y-0.5"
                    >
                        Go to Part 4 <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </section>
    </div>
  );
};

export default GithubPortfolioPart3;