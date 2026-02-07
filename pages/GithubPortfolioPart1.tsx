import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const GithubPortfolioPart1: React.FC = () => {
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
                Part 1: Understanding GitHub in Plain English
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8 leading-relaxed">
                Before you can build a portfolio, you need to speak the language. This first part breaks down what GitHub is, why it matters, and the handful of key terms you'll need to know. No code, just plain English.
            </p>
            
            <div className="pt-8 border-t border-neutral-cool/20 space-y-10">
                <div>
                    <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-4">What Exactly Is GitHub?</h3>
                    <p className="text-neutral-slate dark:text-neutral-cool mb-4 text-lg">
                        Think of GitHub as a combination of:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-slate dark:text-neutral-cool mb-6 marker:text-cardinal dark:marker:text-electric text-lg">
                        <li>Dropbox (stores your files in the cloud)</li>
                        <li>Google Docs version history (tracks every change you make)</li>
                        <li>LinkedIn (showcases your professional work)</li>
                        <li>A filing cabinet (keeps everything organized)</li>
                    </ul>
                    <p className="text-neutral-slate dark:text-neutral-cool text-lg leading-relaxed">
                        When you put a project on GitHub, you're creating a <strong className="text-neutral-charcoal dark:text-white">repository</strong> (or "repo" for short). A repository is simply a project folder that lives online and remembers its entire history.
                    </p>
                </div>
            
                <div>
                    <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-6">Key Terms You'll Need to Know</h3>
                    
                    {/* Card Grid for Key Terms */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Repository (Repo)", desc: "Your project folder. Contains all your files, documentation, and history." },
                            { title: "README", desc: "The front page of your project. Think of it as your project's welcome mat, the first thing visitors see." },
                            { title: "Commit", desc: "Saving your work with a note about what you changed. Like a checkpoint in a video game." },
                            { title: "Profile", desc: "Your personal page on GitHub. Shows all your projects and tells visitors about you." },
                            { title: "Public vs. Private", desc: "Public repos are visible to everyone (great for portfolios). Private repos are only visible to people you invite." },
                            { title: "Fork", desc: "Making your own copy of someone else's project to experiment with." },
                            { title: "Star", desc: "Like bookmarking a project you find interesting. Also shows appreciation to the creator." }
                        ].map((term, i) => (
                             <div key={i} className="bg-neutral-offWhite dark:bg-white/5 border border-neutral-cool/20 rounded-xl p-6 hover:shadow-sls-sm hover:-translate-y-1 transition-all duration-300">
                                <h4 className="text-xl font-bold text-cardinal dark:text-electric mb-2">{term.title}</h4>
                                <p className="text-neutral-slate dark:text-neutral-cool leading-relaxed">
                                    {term.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* About the Company */}
                <div className="pt-8 border-t border-neutral-cool/20">
                    <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-4">A Bit About the Company</h3>
                    <p className="text-neutral-slate dark:text-neutral-cool mb-4 leading-relaxed text-lg">
                        GitHub is the world's leading platform for software development and version control, founded in 2008. It supports millions of users globally, providing essential tools for code sharing, collaboration, and project management.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-neutral-slate dark:text-neutral-cool marker:text-cardinal dark:marker:text-electric text-lg">
                        <li><strong className="text-neutral-charcoal dark:text-white">Ownership:</strong> After several rounds of venture investment, GitHub was acquired by Microsoft in 2018.</li>
                        <li><strong className="text-neutral-charcoal dark:text-white">Business Model:</strong> GitHub operates on a freemium model. Core features and public repositories are free, while paid plans unlock advanced collaboration, storage, and enterprise features.</li>
                        <li><strong className="text-neutral-charcoal dark:text-white">Strategic Importance:</strong> It enables remote collaboration, is central to modern open-source software, and is widely adopted by individual developers, major tech companies, and organizations of all sizes.</li>
                    </ul>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-neutral-cool/20 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 gap-6">
                <div className="flex-grow">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-slate dark:text-neutral-cool mb-1">Next Up</p>
                    <p className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2">Part 2: Setting Up Your Account</p>
                    <p className="text-base text-neutral-slate dark:text-neutral-cool max-w-xl">
                        In the next section, you'll create your professional GitHub account and fill out your profile to make a great first impression.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/github/part-2" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white bg-cardinal hover:bg-cardinal-dark transition-colors shadow-sls-md hover:shadow-sls-lg transform hover:-translate-y-0.5"
                    >
                        Go to Part 2 <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </section>
    </div>
  );
};

export default GithubPortfolioPart1;