import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, MessageSquare, Users, HelpCircle, CheckCircle, ThumbsUp, ArrowRight } from 'lucide-react';

const GithubPortfolioPart13: React.FC = () => {
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
                Part 13: Getting Feedback and Improving
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8 leading-relaxed">
                You don't build in a vacuum. Getting feedback is the fastest way to improve your projects and your documentation.
            </p>
            
            <div className="pt-8 border-t border-neutral-cool/20">
                <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-6">How to Get Helpful Feedback</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {/* From Colleagues */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                        <div className="flex items-center gap-3 mb-3 text-cardinal dark:text-electric">
                            <MessageSquare size={24} />
                            <h4 className="text-xl font-bold">From Colleagues & Peers</h4>
                        </div>
                        <p className="text-sm font-medium text-neutral-charcoal dark:text-white mb-2">Send your GitHub profile link with specific questions:</p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool ml-2">
                            <li>"Does my README clearly explain what this GPT does?"</li>
                            <li>"Would you be able to use my prompts based on the documentation?"</li>
                            <li>"What's confusing about my training portfolio?"</li>
                        </ul>
                    </div>

                    {/* From Online Communities */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                        <div className="flex items-center gap-3 mb-3 text-cardinal dark:text-electric">
                            <Users size={24} />
                            <h4 className="text-xl font-bold">From Online Communities</h4>
                        </div>
                        <p className="text-sm font-medium text-neutral-charcoal dark:text-white mb-2">Share your repositories in:</p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool ml-2">
                            <li>AI learning communities (Discord, Slack).</li>
                            <li>Professional networks (LinkedIn).</li>
                            <li>Reddit communities (e.g., r/PromptEngineering).</li>
                        </ul>
                    </div>
                </div>

                {/* What to Ask For */}
                <div className="bg-cardinal/5 dark:bg-electric/5 border-l-4 border-cardinal dark:border-electric p-6 rounded-r-xl mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <HelpCircle size={24} className="text-cardinal dark:text-electric" />
                        <h4 className="text-xl font-bold text-neutral-charcoal dark:text-white">What to Ask For</h4>
                    </div>
                    <p className="text-neutral-slate dark:text-neutral-cool mb-4">Be specific with your request to get specific feedback. Ask about:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-functional-success mt-1 flex-shrink-0" />
                            <div>
                                <strong className="text-neutral-charcoal dark:text-white">Clarity:</strong>
                                <p className="text-sm text-neutral-slate dark:text-neutral-cool">"Is my explanation clear?"</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-functional-success mt-1 flex-shrink-0" />
                            <div>
                                <strong className="text-neutral-charcoal dark:text-white">Completeness:</strong>
                                <p className="text-sm text-neutral-slate dark:text-neutral-cool">"What information is missing?"</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-functional-success mt-1 flex-shrink-0" />
                            <div>
                                <strong className="text-neutral-charcoal dark:text-white">Organization:</strong>
                                <p className="text-sm text-neutral-slate dark:text-neutral-cool">"Is the structure logical?"</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-functional-success mt-1 flex-shrink-0" />
                            <div>
                                <strong className="text-neutral-charcoal dark:text-white">Visuals:</strong>
                                <p className="text-sm text-neutral-slate dark:text-neutral-cool">"Are the screenshots helpful?"</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Acting on Feedback */}
                <div>
                    <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-4">Acting on Feedback</h3>
                    <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-6 leading-relaxed">
                        When someone suggests improvements, it's an opportunity, not a criticism. Always thank them for their time and consider their perspective—they represent your audience. Show you value their input by making changes and letting them know.
                    </p>

                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20 relative">
                        <div className="absolute -top-3 left-6 bg-white dark:bg-neutral-darkCard px-2 text-functional-success flex items-center gap-1 font-bold text-sm uppercase tracking-wide border border-functional-success/20 rounded-full">
                            <ThumbsUp size={14} /> Example Response
                        </div>
                        <p className="italic text-neutral-charcoal dark:text-neutral-cool font-medium leading-relaxed mt-2">
                            "Thanks for the feedback! You're right that the installation instructions were unclear. I've updated the README with step-by-step screenshots and added a troubleshooting section. Let me know if it makes more sense now!"
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-neutral-cool/20 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 gap-6">
                <div className="flex-grow">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-slate dark:text-neutral-cool mb-1">Next Up</p>
                    <p className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2">Part 14: Common Mistakes to Avoid</p>
                    <p className="text-base text-neutral-slate dark:text-neutral-cool max-w-xl">
                        Dodge common traps like waiting for perfection or accidentally sharing private data.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/github/part-14" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white bg-cardinal hover:bg-cardinal-dark transition-colors shadow-sls-md hover:shadow-sls-lg transform hover:-translate-y-0.5"
                    >
                        Go to Part 14 <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </section>
    </div>
  );
};

export default GithubPortfolioPart13;