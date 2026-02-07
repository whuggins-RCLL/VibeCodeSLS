import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Tag, Globe, Image, Search, Settings, ArrowRight } from 'lucide-react';

const GithubPortfolioPart8: React.FC = () => {
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
                Part 8: Making Your Work Discoverable
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8 leading-relaxed">
                You've built your projects and linked your profile, but how do people find you? This section covers the simple settings you can use to make your work visible to the right audience.
            </p>
            
            <div className="pt-8 border-t border-neutral-cool/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* COLUMN 1: Topics & Description */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                 <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                                    <Tag size={24} />
                                 </div>
                                 <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Topics (Tags)</h3>
                            </div>
                            <p className="text-neutral-slate dark:text-neutral-cool">
                                Topics help people find your repositories when searching GitHub. Think of them like hashtags.
                            </p>
                            
                            <div>
                                <h4 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-2">How to add topics:</h4>
                                <ol className="list-decimal list-inside space-y-1 text-neutral-slate dark:text-neutral-cool marker:font-bold marker:text-cardinal dark:marker:text-electric">
                                    <li>Go to your repository.</li>
                                    <li>Look for the "About" section (right sidebar).</li>
                                    <li>Click the gear icon <Settings size={14} className="inline ml-1" />.</li>
                                    <li>Add relevant topics (press Enter after each).</li>
                                </ol>
                            </div>
                            
                            <div>
                                <h4 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-2">Good topics for AI projects:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['artificial-intelligence', 'ai-education', 'prompt-engineering', 'chatgpt', 'claude-ai', 'gemini-ai', 'legal-tech', 'custom-gpt', 'ai-portfolio', 'learning-resources', 'documentation'].map((tag, i) => (
                                        <span key={i} className="px-2 py-1 bg-neutral-offWhite dark:bg-white/10 rounded text-xs font-mono text-cardinal dark:text-electric border border-neutral-cool/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-neutral-cool/10">
                            <div className="flex items-center gap-3 mb-4">
                                 <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                                    <Search size={24} />
                                 </div>
                                 <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Repository Description</h3>
                            </div>
                            <p className="text-neutral-slate dark:text-neutral-cool mb-4">
                                That one-line description at the top of your repository matters! Make it specific and keyword-rich.
                            </p>
                            
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-wider text-functional-success mb-2 flex items-center gap-1">
                                        Good Examples
                                    </h4>
                                    <ul className="space-y-2 text-sm text-neutral-slate dark:text-neutral-cool">
                                        <li className="flex gap-2"><span className="text-functional-success">✓</span> "Collection of tested ChatGPT prompts for legal professionals with examples and documentation"</li>
                                        <li className="flex gap-2"><span className="text-functional-success">✓</span> "Portfolio of custom GPTs built to automate research workflows in law firms"</li>
                                        <li className="flex gap-2"><span className="text-functional-success">✓</span> "Beginner-friendly guide to AI tools with honest reviews and use cases"</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-wider text-functional-error mb-2 flex items-center gap-1">
                                        Avoid
                                    </h4>
                                    <ul className="space-y-2 text-sm text-neutral-slate dark:text-neutral-cool">
                                        <li className="flex gap-2"><span className="text-functional-error">✗</span> "AI stuff"</li>
                                        <li className="flex gap-2"><span className="text-functional-error">✗</span> "My project"</li>
                                        <li className="flex gap-2"><span className="text-functional-error">✗</span> "Testing"</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 2: Website & Social */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                 <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                                    <Globe size={24} />
                                 </div>
                                 <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Website Field</h3>
                            </div>
                            <p className="text-neutral-slate dark:text-neutral-cool">
                                You can add a link to your personal website, LinkedIn, or a live demo of your project.
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-neutral-slate dark:text-neutral-cool marker:font-bold marker:text-cardinal dark:marker:text-electric">
                                <li>Go to the repository "About" section (right sidebar).</li>
                                <li>Click the gear icon.</li>
                                <li>Add your Website URL.</li>
                            </ol>
                        </div>
                        
                        <div className="pt-6 border-t border-neutral-cool/10">
                            <div className="flex items-center gap-3 mb-4">
                                 <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                                    <Image size={24} />
                                 </div>
                                 <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Social Preview Image</h3>
                            </div>
                            <p className="text-neutral-slate dark:text-neutral-cool mb-4">
                                This is the image that appears when someone shares your repository link on sites like Twitter or LinkedIn.
                            </p>
                            
                            <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                                <ol className="list-decimal list-inside space-y-3 text-neutral-slate dark:text-neutral-cool marker:font-bold marker:text-cardinal dark:marker:text-electric">
                                    <li>Go to your repository's <strong className="text-neutral-charcoal dark:text-white">Settings</strong> tab.</li>
                                    <li>Scroll down to "Social preview."</li>
                                    <li>Upload a custom image (1280x640px is a good size).</li>
                                </ol>
                                <p className="mt-4 text-sm font-medium text-neutral-charcoal dark:text-white italic">
                                    This makes your project look much more professional when shared on social media or messaging apps.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-neutral-cool/20 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 gap-6">
                <div className="flex-grow">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-slate dark:text-neutral-cool mb-1">Next Up</p>
                    <p className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2">Part 9: Documenting AI Training & Certifications</p>
                    <p className="text-base text-neutral-slate dark:text-neutral-cool max-w-xl">
                        Time to show off your hard-earned credentials! Let's create a dedicated, professional space for your AI training and certificates.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/github/part-9" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white bg-cardinal hover:bg-cardinal-dark transition-colors shadow-sls-md hover:shadow-sls-lg transform hover:-translate-y-0.5"
                    >
                        Go to Part 9 <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </section>
    </div>
  );
};

export default GithubPortfolioPart8;