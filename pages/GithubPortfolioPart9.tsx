import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Copy, Check, Award, FileText, FolderTree, BookOpen, PenTool } from 'lucide-react';

const GithubPortfolioPart9: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const mainReadmeTemplate = `# AI Training & Certifications

Professional development and formal training in artificial intelligence.

## Completed Certifications

### [Certificate Name] ([Organization])
- **Completion Date**: Month Year
- **Verification**: [Link to credential]
- **Key Skills**: Skill 1, Skill 2, Skill 3
- **[See Detailed Write-up & Notes](courses/certificate-name.md)**

### [Certificate Name 2] ([Organization])
- **Completion Date**: Month Year
- **Verification**: [Link to credential]
- **Key Skills**: Skill 1, Skill 2
- **[See Detailed Write-up & Notes](courses/certificate-name-2.md)**

## In Progress
- [Course Name] ([Organization])

## Courses Wishlist
- [Course] (Why you're interested)`;

  const deepDiveTemplate = `# [Course Name] ([Organization])

![Course Badge](../images/badge.png)

## Course Information
- **Provider**: [e.g., Stanford Law School]
- **Instructor**: [Name]
- **Completion Date**: Month Year
- **Duration**: [e.g., 8 weeks (40 hours)]
- **Certificate ID**: [ID Number]
- **Verification**: [Link to credential]

## Course Objectives
This course taught me to:
- [Objective 1 from syllabus]
- [Objective 2 from syllabus]
- [Objective 3 from syllabus]

## Curriculum Overview
### Week 1: Foundations
- [Topic 1]
- [Topic 2]
### Week 2: Advanced Techniques
- [Topic 3]
- [Topic 4]
...and so on...

## Key Concepts Mastered

### 1. [Specific Skill, e.g., Chain-of-Thought Prompting]
**Before Training**: [My old, simple prompt]
**After Training**: [My new, advanced prompt that shows my skill]

### 2. [Specific Skill 2, e.g., Bias Detection]
[Example of how I learned to spot bias in an AI response]

## Projects & Assignments
### Final Project: [Project Name]
- **Objective**: [What was the goal?]
- **Repository**: [Link to the project if it has its own repo]
- **What I Built**: [Description]
- **Challenges**: [What was difficult]
- **Solutions**: [How you overcame them]

## Skills Assessment
| Skill | Before Course | After Course |
|---|---|---|
| Prompt Writing | Beginner | Advanced |
| Bias Detection | Novice | Intermediate |
| Legal AI Apps | None | Proficient |

## Personal Reflections
**Most Valuable Lesson**: [The insight that changed how you work]
**How I'm Applying This**: [Specific ways you use these skills now]

## Certificate
![Certificate of Completion](../images/cert-name.png)`;

  const folderStructure = `ai-certifications/
├── README.md   (Your main overview, using the template above)
│
├── images/
│   ├── cert-prompt-engineering.png
│   ├── badge-prompt-engineering.png
│   └── cert-ai-ethics.png
│
├── courses/
│   ├── prompt-engineering-fundamentals.md  (Deep dive 1)
│   └── ai-ethics-professionals.md      (Deep dive 2)
│
└── notes/
    ├── prompt-engineering-notes.md
    └── ai-ethics-notes.md`;

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
                Part 9: Documenting AI Training & Certifications
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8 leading-relaxed">
                This is how you prove your expertise. Instead of just listing a course on LinkedIn, you'll create a rich, detailed record of what you learned and how you learned it. This is incredibly valuable to recruiters.
            </p>
            
            <div className="pt-8 border-t border-neutral-cool/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* COLUMN 1: Strategies */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                 <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                                    <Award size={24} />
                                 </div>
                                 <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Strategy 1: The "Certifications" Repository</h3>
                            </div>
                            <p className="text-neutral-slate dark:text-neutral-cool">
                                We recommend creating a new, dedicated repository just for your training. This keeps your profile clean and organized.
                            </p>
                            <p className="font-mono text-sm bg-neutral-offWhite dark:bg-white/10 px-3 py-2 rounded border border-neutral-cool/20 w-fit text-cardinal dark:text-electric font-semibold">
                                Repository name: ai-certifications
                            </p>
                            <p className="text-neutral-slate dark:text-neutral-cool text-sm">
                                The main <code className="bg-neutral-offWhite dark:bg-white/10 px-1 rounded font-mono text-cardinal dark:text-electric">README.md</code> for this repository will serve as a high-level overview or "table of contents" for all your training.
                            </p>
                        </div>

                        <div className="pt-6 border-t border-neutral-cool/10 space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                 <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                                    <FileText size={24} />
                                 </div>
                                 <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Strategy 2: The "Deep Dive" Page</h3>
                            </div>
                            <p className="text-neutral-slate dark:text-neutral-cool">
                                For each certification, you'll create a new file inside your repository (e.g., <code className="bg-neutral-offWhite dark:bg-white/10 px-1 rounded font-mono text-xs">courses/prompt-engineering.md</code>). This file is a <em>deep dive</em> into the course.
                            </p>
                            <p className="text-neutral-slate dark:text-neutral-cool">
                                This is your chance to shine. You'll go beyond just posting the certificate; you'll document the curriculum, share your notes, show project examples, and reflect on what you learned.
                            </p>
                        </div>
                    </div>

                    {/* COLUMN 2: Main README Template */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                             <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                                <BookOpen size={24} />
                             </div>
                             <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Main README Template</h3>
                        </div>
                        <p className="text-neutral-slate dark:text-neutral-cool">
                            Use this for the main <code className="bg-neutral-offWhite dark:bg-white/10 px-1 rounded font-mono text-cardinal dark:text-electric">README.md</code> of your <code className="bg-neutral-offWhite dark:bg-white/10 px-1 rounded font-mono text-cardinal dark:text-electric">ai-certifications</code> repository.
                        </p>
                        
                        <div className="relative group">
                            <div className="absolute top-3 right-3 z-10">
                                <button 
                                    onClick={() => handleCopy(mainReadmeTemplate, 'main')}
                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors backdrop-blur-sm"
                                >
                                    {copied === 'main' ? <Check size={14} className="text-functional-success" /> : <Copy size={14} />}
                                    {copied === 'main' ? 'Copied' : 'Copy'}
                                </button>
                            </div>
                            <pre className="bg-[#1a1a1a] text-neutral-offWhite p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-neutral-cool/20 h-full max-h-[500px]">
                                {mainReadmeTemplate}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Template - Full Width */}
                <div className="mt-16 pt-12 border-t border-neutral-cool/20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                            <PenTool size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">"Deep Dive" Page Template</h3>
                    </div>
                    
                    <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8">
                        Create a new file (e.g., <code className="bg-neutral-offWhite dark:bg-white/10 px-1 rounded font-mono text-base text-cardinal dark:text-electric">courses/prompt-engineering-fundamentals.md</code>) and use this template. This is what sets you apart from other candidates.
                    </p>

                    <div className="relative group">
                        <div className="absolute top-3 right-3 z-10">
                            <button 
                                onClick={() => handleCopy(deepDiveTemplate, 'deep')}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors backdrop-blur-sm"
                            >
                                {copied === 'deep' ? <Check size={14} className="text-functional-success" /> : <Copy size={14} />}
                                {copied === 'deep' ? 'Copied' : 'Copy'}
                            </button>
                        </div>
                        <pre className="bg-[#1a1a1a] text-neutral-offWhite p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-neutral-cool/20">
                            {deepDiveTemplate}
                        </pre>
                    </div>
                </div>

                {/* Folder Structure - Full Width */}
                <div className="mt-16 pt-12 border-t border-neutral-cool/20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                            <FolderTree size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Recommended Folder Structure</h3>
                    </div>
                    
                    <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8">
                        Here's how to organize your <code className="bg-neutral-offWhite dark:bg-white/10 px-1 rounded font-mono text-base text-cardinal dark:text-electric">ai-certifications</code> repository:
                    </p>

                    <div className="relative group">
                        <div className="absolute top-3 right-3 z-10">
                            <button 
                                onClick={() => handleCopy(folderStructure, 'folder')}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors backdrop-blur-sm"
                            >
                                {copied === 'folder' ? <Check size={14} className="text-functional-success" /> : <Copy size={14} />}
                                {copied === 'folder' ? 'Copied' : 'Copy'}
                            </button>
                        </div>
                        <pre className="bg-[#1a1a1a] text-neutral-offWhite p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-neutral-cool/20">
                            {folderStructure}
                        </pre>
                    </div>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-neutral-cool/20 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 gap-6">
                <div className="flex-grow">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-slate dark:text-neutral-cool mb-1">Next Up</p>
                    <p className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2">Part 10: What Else Lives on GitHub?</p>
                    <p className="text-base text-neutral-slate dark:text-neutral-cool max-w-xl">
                        You're focused on AI, but it helps to understand the wider GitHub ecosystem. Let's explore what other kinds of projects live on the platform.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/github/part-10" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white bg-cardinal hover:bg-cardinal-dark transition-colors shadow-sls-md hover:shadow-sls-lg transform hover:-translate-y-0.5"
                    >
                        Go to Part 10 <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </section>
    </div>
  );
};

export default GithubPortfolioPart9;