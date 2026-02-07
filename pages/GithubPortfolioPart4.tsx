import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Copy, Check, FolderPlus, FileText, Shield } from 'lucide-react';

const GithubPortfolioPart4: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const coursesReadme = `# AI Courses & Certifications

This directory contains documentation of AI training and courses I've completed.

## 2024 Courses

### Prompt Engineering Fundamentals
- **Provider**: Stanford Law School
- **Completion Date**: September 2024
- **Duration**: 8 weeks
- **Key Topics**:
    - Effective prompt structure
    - Few-shot learning
    - Chain-of-thought prompting
- **What I Learned**: [2-3 sentences]
- **Certificate**: [Link to certificate]

### [Your Next Course]
[Repeat the format above]`;

  const mainReadme = `# AI Training Portfolio

Welcome! This repository documents my journey learning and working with AI tools.

## About This Portfolio
I'm [Your Name], and I believe AI is a tool everyone can learn to use effectively. This repository showcases my formal training, hands-on projects, and growing expertise in artificial intelligence.

## What's Inside

### [Courses & Certifications](/courses)
Formal AI training I've completed, including:
- Prompt engineering
- Custom GPT development
- AI ethics and responsible use

### [Projects](/projects)
Real-world AI applications I've built:
- [Project 1 name and brief description]
- [Project 2 name and brief description]

### [Resources](/resources)
Curated collection of helpful AI learning materials.

### [Practice Exercises](/exercises)
Hands-on work and experiments as I learn.

## Tools & Platforms I Work With
**Large Language Models:**
- OpenAI (GPT-5)
- Anthropic (Claude 4.5 Sonnet, Claude 4.1 Opus)
- Google (Gemini 2.5 Pro)

**Specialized Tools:**
- Harvey AI (legal research)
- [Other tools you use]

## Skills I'm Developing
- Prompt engineering and optimization
- Custom GPT creation and deployment
- AI ethics and bias mitigation
- Workflow automation with AI

## Get In Touch
- **LinkedIn**: [Your LinkedIn URL]
- **Email**: your.email@domain.com
- **Website**: yourwebsite.com

## License
This portfolio is licensed under the MIT License.`;

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
                Part 4: Creating Your First AI Project Repository
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8 leading-relaxed">
                Let's create a real project repository. We'll start with documenting an AI training you completed.
            </p>
            
            <div className="pt-8 border-t border-neutral-cool/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* COLUMN 1: STEP 1 */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                             <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                                <FolderPlus size={24} />
                             </div>
                             <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Step 1: Create a New Repository</h3>
                        </div>
                        
                        <ol className="list-decimal list-inside space-y-3 text-neutral-slate dark:text-neutral-cool text-lg marker:font-bold marker:text-cardinal dark:marker:text-electric">
                            <li>Click "+" (top right) &rarr; "New repository"</li>
                            <li><strong className="text-neutral-charcoal dark:text-white">Repository name:</strong> <code className="bg-neutral-offWhite dark:bg-white/10 px-1.5 py-0.5 rounded text-cardinal dark:text-electric font-mono text-base">ai-training-portfolio</code> (lowercase, use hyphens, no spaces)</li>
                            <li><strong className="text-neutral-charcoal dark:text-white">Description:</strong> "Documentation of my AI courses, certifications, and learning journey"</li>
                            <li>Select "Public" (so others can see your expertise)</li>
                            <li>Check "Add a README file"</li>
                            <li><strong className="text-neutral-charcoal dark:text-white">Add .gitignore:</strong> Select "None" (we'll explain this later)</li>
                            <li><strong className="text-neutral-charcoal dark:text-white">Choose a license:</strong> Select "MIT License"</li>
                            <li>Click "Create repository"</li>
                        </ol>

                        <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20 mt-6">
                            <div className="flex items-center gap-2 mb-3 text-cardinal dark:text-electric">
                                <Shield size={20} />
                                <h4 className="font-bold text-lg">What does an MIT License mean?</h4>
                            </div>
                            <p className="text-neutral-slate dark:text-neutral-cool mb-3">The MIT License is a simple, permissive license that says:</p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-slate dark:text-neutral-cool mb-4">
                                <li>Anyone can use your work</li>
                                <li>Anyone can modify your work</li>
                                <li>Anyone can share your work</li>
                                <li>You get credit as the original creator</li>
                                <li>You're not responsible if something goes wrong</li>
                            </ul>
                            <p className="text-neutral-slate dark:text-neutral-cool text-sm italic">It's perfect for educational content because you want people to learn from and use your work.</p>
                            
                            <h4 className="font-bold text-base mt-4 mb-2 text-neutral-charcoal dark:text-white">Other common licenses:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-slate dark:text-neutral-cool">
                                <li><strong>Apache 2.0:</strong> Similar to MIT, but with more legal protections</li>
                                <li><strong>GNU GPL:</strong> Requires others to share their modifications (more restrictive)</li>
                                <li><strong>Creative Commons:</strong> Better for non-code content like documents and media</li>
                            </ul>
                        </div>
                    </div>

                    {/* COLUMN 2: STEP 2 */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                             <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                                <FileText size={24} />
                             </div>
                             <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Step 2: Organize Your Repository</h3>
                        </div>

                        <div className="text-lg text-neutral-slate dark:text-neutral-cool space-y-4">
                            <p>You'll see your new repository with just a README and LICENSE file. Let's add some structure.</p>
                            <p>Click "Add file" &rarr; "Create new file"</p>
                            <p>File name: <code className="bg-neutral-offWhite dark:bg-white/10 px-1.5 py-0.5 rounded text-cardinal dark:text-electric font-mono text-base">courses/README.md</code></p>
                            <p className="text-sm bg-neutral-offWhite dark:bg-white/5 p-3 rounded-lg border-l-4 border-cardinal dark:border-electric">
                                <strong>Tip:</strong> Notice the slash? This automatically creates a folder called "courses" with a README inside it.
                            </p>
                            <p>Add this content:</p>
                        </div>
                        
                        {/* Code Block for courses/README.md */}
                        <div className="relative group">
                            <div className="absolute top-3 right-3 z-10">
                                <button 
                                    onClick={() => handleCopy(coursesReadme, 'courses')}
                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors backdrop-blur-sm"
                                >
                                    {copied === 'courses' ? <Check size={14} className="text-functional-success" /> : <Copy size={14} />}
                                    {copied === 'courses' ? 'Copied' : 'Copy'}
                                </button>
                            </div>
                            <pre className="bg-[#1a1a1a] text-neutral-offWhite p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-neutral-cool/20">
                                {coursesReadme}
                            </pre>
                        </div>

                        <div className="text-lg text-neutral-slate dark:text-neutral-cool space-y-2">
                            <p>Click "Commit changes". Repeat this process to create:</p>
                            <ul className="list-disc list-inside font-mono text-base text-cardinal dark:text-electric">
                                <li>projects/README.md</li>
                                <li>resources/README.md</li>
                                <li>exercises/README.md</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Step 3: Full Width */}
                <div className="mt-16 pt-12 border-t border-neutral-cool/20">
                    <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-6">Step 3: Write a Compelling Main README</h3>
                    <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-6">
                        Click on your repository name (top left) to go back to the main page, then click the pencil icon on your <code className="font-mono text-cardinal dark:text-electric">README.md</code> file. Replace the default text with:
                    </p>

                    {/* Code Block for Main README */}
                    <div className="relative group">
                        <div className="absolute top-3 right-3 z-10">
                            <button 
                                onClick={() => handleCopy(mainReadme, 'main')}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors backdrop-blur-sm"
                            >
                                {copied === 'main' ? <Check size={14} className="text-functional-success" /> : <Copy size={14} />}
                                {copied === 'main' ? 'Copied' : 'Copy'}
                            </button>
                        </div>
                        <pre className="bg-[#1a1a1a] text-neutral-offWhite p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-neutral-cool/20">
                            {mainReadme}
                        </pre>
                    </div>
                    
                    <p className="text-lg text-neutral-slate dark:text-neutral-cool mt-6 font-medium">
                        Click "Commit changes" and add the message: "Enhanced README with complete portfolio structure"
                    </p>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-neutral-cool/20 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 gap-6">
                <div className="flex-grow">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-slate dark:text-neutral-cool mb-1">Next Up</p>
                    <p className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2">Part 5: Three Beginner-Friendly AI Projects</p>
                    <p className="text-base text-neutral-slate dark:text-neutral-cool max-w-xl">
                        With your main portfolio repository set up, it's time to create some actual project repositories to fill it.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/github/part-5" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white bg-cardinal hover:bg-cardinal-dark transition-colors shadow-sls-md hover:shadow-sls-lg transform hover:-translate-y-0.5"
                    >
                        Go to Part 5 <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </section>
    </div>
  );
};

export default GithubPortfolioPart4;