import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, CheckSquare, Flag, Star, Share2, Rocket, ArrowRight } from 'lucide-react';

const GithubPortfolioPart17: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'week1' | 'week2' | 'week3' | 'week4'>('week1');

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
                Part 17: Your 30-Day GitHub Launch Plan
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-10 leading-relaxed">
                Follow this plan to build a professional GitHub presence from scratch in one month.
            </p>
            
            {/* Tabs */}
            <div className="border-b border-neutral-cool/20 mb-8 overflow-x-auto">
                <div className="flex gap-2 min-w-max pb-1">
                    {[
                        { id: 'week1', label: 'Week 1: Foundation', icon: <Flag size={18} /> },
                        { id: 'week2', label: 'Week 2: Content', icon: <CheckSquare size={18} /> },
                        { id: 'week3', label: 'Week 3: Polish', icon: <Star size={18} /> },
                        { id: 'week4', label: 'Week 4: Launch', icon: <Rocket size={18} /> }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-t-lg transition-all duration-200 border-b-2 ${
                                activeTab === tab.id
                                    ? 'border-cardinal dark:border-electric text-cardinal dark:text-electric bg-neutral-offWhite dark:bg-white/5'
                                    : 'border-transparent text-neutral-slate dark:text-neutral-cool hover:text-neutral-charcoal dark:hover:text-white hover:bg-neutral-offWhite dark:hover:bg-white/5'
                            }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Panels */}
            <div className="min-h-[400px]">
                {activeTab === 'week1' && (
                    <div className="animate-fade-in space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <DayCard day={1} title="Setup">
                                <li>Create GitHub account</li>
                                <li>Complete profile (photo, bio)</li>
                                <li>Add LinkedIn and website links</li>
                            </DayCard>
                            <DayCard day={2} title="Profile README">
                                <li>Create profile README repository</li>
                                <li>Write initial profile README</li>
                            </DayCard>
                            <DayCard day={3} title="Training Repo">
                                <li>Create <code className="text-xs bg-black/5 dark:bg-white/10 px-1 rounded">ai-training-portfolio</code> repo</li>
                                <li>Write main README for it</li>
                                <li>Add folder structure</li>
                            </DayCard>
                            <DayCard day={4} title="Documentation">
                                <li>Document one completed AI course</li>
                                <li>Upload course certificate</li>
                            </DayCard>
                            <DayCard day={5} title="Discoverability">
                                <li>Add topics to your repositories</li>
                                <li>Write clear repo descriptions</li>
                                <li>Pin your portfolio to profile</li>
                            </DayCard>
                            <DayCard day={6} title="Prompt Library">
                                <li>Create <code className="text-xs bg-black/5 dark:bg-white/10 px-1 rounded">my-prompt-library</code> repo</li>
                                <li>Add 5 prompts you use</li>
                                <li>Document why each prompt works</li>
                            </DayCard>
                            <DayCard day={7} title="Review">
                                <li>Review everything you've created</li>
                                <li>Ask one friend for feedback</li>
                            </DayCard>
                        </div>
                    </div>
                )}

                {activeTab === 'week2' && (
                    <div className="animate-fade-in space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <DayCard day={8} title="Expand Training">
                                <li>Add 3 more AI courses to portfolio</li>
                            </DayCard>
                            <DayCard day={9} title="First Project">
                                <li>Create repo for your first AI project</li>
                                <li>Write detailed README</li>
                                <li>Add screenshots or examples</li>
                            </DayCard>
                            <DayCard day={10} title="Expand Library">
                                <li>Add 10 more prompts to library</li>
                                <li>Organize them by category</li>
                            </DayCard>
                            <DayCard day={11} title="Tool Reviews">
                                <li>Create <code className="text-xs bg-black/5 dark:bg-white/10 px-1 rounded">ai-tools-tested</code> repository</li>
                                <li>Write reviews of 3 AI tools</li>
                            </DayCard>
                            <DayCard day={12} title="Cross-Linking">
                                <li>Update profile README</li>
                                <li>Add links to your new repos</li>
                            </DayCard>
                            <DayCard day={13} title="Visuals">
                                <li>Improve your best repo's README</li>
                                <li>Add more screenshots</li>
                            </DayCard>
                            <DayCard day={14} title="Check-in">
                                <li>Mid-point review</li>
                                <li>Check that all links work</li>
                            </DayCard>
                        </div>
                    </div>
                )}

                {activeTab === 'week3' && (
                    <div className="animate-fade-in space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <DayCard day={15} title="Professionalism">
                                <li>Add professional links to profile</li>
                                <li>Create custom GitHub badges</li>
                            </DayCard>
                            <DayCard day={16} title="Deep Dive">
                                <li>Document a complex AI project</li>
                                <li>Include "Lessons Learned" section</li>
                            </DayCard>
                            <DayCard day={17} title="Templates">
                                <li>Create a template repository</li>
                                <li>Include README scaffold</li>
                            </DayCard>
                            <DayCard day={18} title="History">
                                <li>Review your commit messages</li>
                                <li>Establish a commit style</li>
                            </DayCard>
                            <DayCard day={19} title="Enhance">
                                <li>Add visual elements to top 3 repos</li>
                            </DayCard>
                            <DayCard day={20} title="GitHub Pages">
                                <li>Enable GitHub Pages for one project</li>
                                <li>Test that the live site works</li>
                            </DayCard>
                            <DayCard day={21} title="Feedback Loop">
                                <li>Get feedback from 2-3 people</li>
                                <li>Make one significant improvement</li>
                            </DayCard>
                        </div>
                    </div>
                )}

                {activeTab === 'week4' && (
                    <div className="animate-fade-in space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <DayCard day={22} title="Final Polish">
                                <li>Final polish on profile README</li>
                                <li>Check all links and for typos</li>
                            </DayCard>
                            <DayCard day={23} title="Integration">
                                <li>Update LinkedIn with GitHub link</li>
                                <li>Add GitHub to email signature</li>
                            </DayCard>
                            <DayCard day={24} title="Announcement">
                                <li>Write a LinkedIn post about your portfolio</li>
                            </DayCard>
                            <DayCard day={25} title="Networking">
                                <li>Join 2 AI communities</li>
                                <li>Share your GitHub profile</li>
                            </DayCard>
                            <DayCard day={26} title="Engagement">
                                <li>Star 10 inspiring repositories</li>
                                <li>Follow 5 people in the AI space</li>
                            </DayCard>
                            <DayCard day={27} title="Future Proofing">
                                <li>Add "What's Next" section to profile</li>
                            </DayCard>
                            <DayCard day={28} title="Meta-Documentation">
                                <li>Document your GitHub creation process</li>
                            </DayCard>
                            <DayCard day={29} title="Final Review">
                                <li>Final review of all repositories</li>
                            </DayCard>
                            <DayCard day={30} title="Launch">
                                <li>Celebrate!</li>
                                <li>Plan next month's projects</li>
                            </DayCard>
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-neutral-cool/20 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 gap-6">
                <div className="flex-grow">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-slate dark:text-neutral-cool mb-1">Next Up</p>
                    <p className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2">Part 18: Measuring Your Success</p>
                    <p className="text-base text-neutral-slate dark:text-neutral-cool max-w-xl">
                        Understand what 'good' looks like and what metrics really matter.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/github/part-18" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white bg-cardinal hover:bg-cardinal-dark transition-colors shadow-sls-md hover:shadow-sls-lg transform hover:-translate-y-0.5"
                    >
                        Go to Part 18 <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </section>
    </div>
  );
};

const DayCard: React.FC<{ day: number; title: string; children: React.ReactNode }> = ({ day, title, children }) => (
    <div className="bg-neutral-offWhite dark:bg-white/5 border border-neutral-cool/20 rounded-xl p-5 hover:border-cardinal/30 dark:hover:border-electric/30 transition-colors">
        <div className="flex items-center gap-2 mb-3">
            <span className="bg-cardinal dark:bg-electric text-white text-xs font-bold px-2 py-1 rounded">Day {day}</span>
            <h3 className="font-bold text-neutral-charcoal dark:text-white">{title}</h3>
        </div>
        <ul className="space-y-2 text-sm text-neutral-slate dark:text-neutral-cool marker:text-cardinal dark:marker:text-electric list-disc list-inside">
            {children}
        </ul>
    </div>
);

export default GithubPortfolioPart17;