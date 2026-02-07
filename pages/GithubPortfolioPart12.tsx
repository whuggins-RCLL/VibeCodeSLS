import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Clock, RefreshCw, CheckSquare, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';

const GithubPortfolioPart12: React.FC = () => {
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
                Part 12: Maintaining Your GitHub Presence
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8 leading-relaxed">
                Your portfolio is a living document. Regular, small updates show you're actively learning and keep your profile fresh.
            </p>
            
            <div className="pt-8 border-t border-neutral-cool/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Weekly Habits */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4 text-cardinal dark:text-electric">
                            <Clock size={24} />
                            <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white">Weekly Habits</h3>
                        </div>
                        <p className="text-sm font-semibold text-neutral-slate dark:text-neutral-cool mb-4 uppercase tracking-wider">Spend 15 minutes per week:</p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool flex-1">
                            <li>Document something new you learned.</li>
                            <li>Add a new prompt to your library.</li>
                            <li>Update a project README.</li>
                            <li>Upload course notes or certificates.</li>
                            <li>Review and respond to any comments.</li>
                        </ul>
                    </div>

                    {/* Monthly Check-ins */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4 text-cardinal dark:text-electric">
                            <Calendar size={24} />
                            <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white">Monthly Check-ins</h3>
                        </div>
                        <p className="text-sm font-semibold text-neutral-slate dark:text-neutral-cool mb-4 uppercase tracking-wider">Once a month:</p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool flex-1">
                            <li>Review your profile README (does it still represent you?).</li>
                            <li>Check all repository links.</li>
                            <li>Update your "Currently Learning" section.</li>
                            <li>Add new skills or tools you've mastered.</li>
                            <li>Archive projects you're no longer proud of.</li>
                        </ul>
                    </div>

                    {/* Quarterly Deep Dives */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4 text-cardinal dark:text-electric">
                            <RefreshCw size={24} />
                            <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white">Quarterly Deep Dives</h3>
                        </div>
                        <p className="text-sm font-semibold text-neutral-slate dark:text-neutral-cool mb-4 uppercase tracking-wider">Every 3 months:</p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool flex-1">
                            <li>Create a new substantial project.</li>
                            <li>Write detailed documentation for a course.</li>
                            <li>Review and improve your top 3 repositories.</li>
                            <li>Reorganize if your focus has shifted.</li>
                            <li>Update screenshots and examples.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Why Consistency Matters */}
            <div className="mt-12 bg-functional-info/10 border-l-4 border-functional-info p-6 rounded-r-xl flex gap-4 items-start">
                <TrendingUp className="text-functional-info flex-shrink-0 mt-1" size={24} />
                <div>
                    <h4 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-2">Why consistency matters</h4>
                    <p className="text-neutral-slate dark:text-neutral-cool">
                        Regular activity shows you're actively learning. Even small, consistent updates keep your profile fresh and demonstrate your commitment.
                    </p>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-neutral-cool/20 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 gap-6">
                <div className="flex-grow">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-slate dark:text-neutral-cool mb-1">Next Up</p>
                    <p className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2">Part 13: Getting Feedback and Improving</p>
                    <p className="text-base text-neutral-slate dark:text-neutral-cool max-w-xl">
                        Find out how and where to ask for constructive feedback to improve your projects.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/github/part-13" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white bg-cardinal hover:bg-cardinal-dark transition-colors shadow-sls-md hover:shadow-sls-lg transform hover:-translate-y-0.5"
                    >
                        Go to Part 13 <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </section>
    </div>
  );
};

export default GithubPortfolioPart12;