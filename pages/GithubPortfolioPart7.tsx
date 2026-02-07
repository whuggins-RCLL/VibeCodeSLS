import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Copy, Check, Linkedin, FileText, Link as LinkIcon, Mail, Twitter, Globe } from 'lucide-react';

const GithubPortfolioPart7: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const linkedinBadge = `## Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/your-profile)`;

  const authorCredit = `## About the Author
Created by [Your Name](https://www.linkedin.com/in/your-profile), AI educator at [Organization].`;

  const cvLink = `## Professional Background
- **Current Role**: AI Educator
- **LinkedIn**: [linkedin.com/in/yourname](https://linkedin.com/in/yourname)
- **Full CV**: [Available on request](mailto:your.email@domain.com)`;

  const linksTemplate = `## Find Me Online

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](your-linkedin-url)
[![Website](https://img.shields.io/badge/Website-4285F4?style=flat&logo=google-chrome&logoColor=white)](your-website-url)
[![Email](https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white)](mailto:your.email@domain.com)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=flat&logo=twitter&logoColor=white)](your-twitter-url)

**Looking to collaborate on**: AI education projects, prompt engineering research, legal tech innovations.`;

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
                Part 7: Adding Your LinkedIn, CV, and Professional Links
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8 leading-relaxed">
                Your GitHub profile doesn't exist in a bubble. Let's link it to your professional identity to show recruiters and collaborators the full picture.
            </p>
            
            <div className="pt-8 border-t border-neutral-cool/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* COLUMN 1: LinkedIn & CV */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white flex items-center gap-2">
                                <Linkedin size={24} className="text-[#0077B5]" />
                                Linking Your LinkedIn
                            </h3>
                            
                            <div className="space-y-4">
                                <p className="text-neutral-slate dark:text-neutral-cool font-medium">In Your Profile README:</p>
                                <div className="relative group">
                                    <div className="absolute top-3 right-3 z-10">
                                        <button 
                                            onClick={() => handleCopy(linkedinBadge, 'badge')}
                                            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors backdrop-blur-sm"
                                        >
                                            {copied === 'badge' ? <Check size={14} className="text-functional-success" /> : <Copy size={14} />}
                                            {copied === 'badge' ? 'Copied' : 'Copy'}
                                        </button>
                                    </div>
                                    <pre className="bg-[#1a1a1a] text-neutral-offWhite p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-neutral-cool/20">
                                        {linkedinBadge}
                                    </pre>
                                </div>

                                <p className="text-neutral-slate dark:text-neutral-cool font-medium pt-2">In Individual Project READMEs:</p>
                                <div className="relative group">
                                    <div className="absolute top-3 right-3 z-10">
                                        <button 
                                            onClick={() => handleCopy(authorCredit, 'author')}
                                            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors backdrop-blur-sm"
                                        >
                                            {copied === 'author' ? <Check size={14} className="text-functional-success" /> : <Copy size={14} />}
                                            {copied === 'author' ? 'Copied' : 'Copy'}
                                        </button>
                                    </div>
                                    <pre className="bg-[#1a1a1a] text-neutral-offWhite p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-neutral-cool/20">
                                        {authorCredit}
                                    </pre>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 pt-6 border-t border-neutral-cool/10">
                            <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white flex items-center gap-2">
                                <FileText size={24} className="text-cardinal dark:text-electric" />
                                Adding Your CV
                            </h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-2">Option 1: Upload PDF</h4>
                                    <p className="text-sm text-neutral-slate dark:text-neutral-cool">Not always recommended for privacy, but you can create a <code className="bg-neutral-offWhite dark:bg-white/10 px-1 rounded">professional-documents</code> repo and upload your PDF there.</p>
                                </div>
                                
                                <div>
                                    <h4 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-2">Option 2: External Link (Recommended)</h4>
                                    <p className="text-sm text-neutral-slate dark:text-neutral-cool mb-3">Link to LinkedIn or use a "mailto" link.</p>
                                    <div className="relative group">
                                        <div className="absolute top-3 right-3 z-10">
                                            <button 
                                                onClick={() => handleCopy(cvLink, 'cv')}
                                                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors backdrop-blur-sm"
                                            >
                                                {copied === 'cv' ? <Check size={14} className="text-functional-success" /> : <Copy size={14} />}
                                                {copied === 'cv' ? 'Copied' : 'Copy'}
                                            </button>
                                        </div>
                                        <pre className="bg-[#1a1a1a] text-neutral-offWhite p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-neutral-cool/20">
                                            {cvLink}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 2: Links Template */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                             <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                                <LinkIcon size={24} />
                             </div>
                             <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Professional Links Template</h3>
                        </div>

                        <p className="text-lg text-neutral-slate dark:text-neutral-cool">
                            Add this to your profile README for a clean, visual set of links. It uses visual badges that look great on GitHub.
                        </p>
                        
                        <div className="relative group">
                            <div className="absolute top-3 right-3 z-10">
                                <button 
                                    onClick={() => handleCopy(linksTemplate, 'links')}
                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors backdrop-blur-sm"
                                >
                                    {copied === 'links' ? <Check size={14} className="text-functional-success" /> : <Copy size={14} />}
                                    {copied === 'links' ? 'Copied' : 'Copy'}
                                </button>
                            </div>
                            <pre className="bg-[#1a1a1a] text-neutral-offWhite p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-neutral-cool/20 h-full">
                                {linksTemplate}
                            </pre>
                        </div>

                        <div className="bg-neutral-offWhite dark:bg-white/5 border border-neutral-cool/20 rounded-xl p-6 mt-6">
                            <h4 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-4">Preview of Icons Used:</h4>
                            <div className="flex flex-wrap gap-4 text-neutral-slate dark:text-neutral-cool">
                                <div className="flex items-center gap-2 bg-white dark:bg-black/20 px-3 py-2 rounded-lg border border-neutral-cool/10">
                                    <Linkedin className="text-[#0077B5]" size={20} /> <span className="text-sm font-medium">LinkedIn</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white dark:bg-black/20 px-3 py-2 rounded-lg border border-neutral-cool/10">
                                    <Globe className="text-[#4285F4]" size={20} /> <span className="text-sm font-medium">Website</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white dark:bg-black/20 px-3 py-2 rounded-lg border border-neutral-cool/10">
                                    <Mail className="text-[#D14836]" size={20} /> <span className="text-sm font-medium">Email</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white dark:bg-black/20 px-3 py-2 rounded-lg border border-neutral-cool/10">
                                    <Twitter className="text-[#1DA1F2]" size={20} /> <span className="text-sm font-medium">Twitter</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-neutral-cool/20 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 gap-6">
                <div className="flex-grow">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-slate dark:text-neutral-cool mb-1">Next Up</p>
                    <p className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2">Part 8: Making Your Work Discoverable</p>
                    <p className="text-base text-neutral-slate dark:text-neutral-cool max-w-xl">
                        Your profile is set up. Now, let's learn how to use topics and descriptions to help people find your work on GitHub.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/github/part-8" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white bg-cardinal hover:bg-cardinal-dark transition-colors shadow-sls-md hover:shadow-sls-lg transform hover:-translate-y-0.5"
                    >
                        Go to Part 8 <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </section>
    </div>
  );
};

export default GithubPortfolioPart7;