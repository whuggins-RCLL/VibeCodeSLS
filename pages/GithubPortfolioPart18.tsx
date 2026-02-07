import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, TrendingUp, Calendar, Award, Home } from 'lucide-react';

const GithubPortfolioPart18: React.FC = () => {
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
                Part 18: Measuring Your Success
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-10 leading-relaxed">
                How to know your portfolio is effective and track your growth.
            </p>
            
            {/* What Good Looks Like */}
            <div className="pt-8 border-t border-neutral-cool/20">
                <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-8">What Good Looks Like (After 30 Days)</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                        <h4 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-4">Profile</h4>
                        <ul className="space-y-3">
                            {[
                                "Professional photo and bio",
                                "Profile README explains who you are",
                                "3-6 pinned repositories",
                                "Links to LinkedIn and other profiles",
                                "Recent activity (green squares)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-neutral-slate dark:text-neutral-cool">
                                    <CheckCircle size={20} className="text-functional-success flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                        <h4 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-4">Repositories</h4>
                        <ul className="space-y-3">
                            {[
                                "3-5 well-documented repositories",
                                "Clear READMEs for each",
                                "At least one substantial AI project",
                                "Organized folder structures",
                                "Regular commits (weekly at minimum)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-neutral-slate dark:text-neutral-cool">
                                    <CheckCircle size={20} className="text-functional-success flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                    <h4 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-4">Content Quality & Engagement</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-neutral-slate dark:text-neutral-cool">
                                <CheckCircle size={20} className="text-functional-success flex-shrink-0 mt-0.5" />
                                <span>No spelling or grammar errors</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-slate dark:text-neutral-cool">
                                <CheckCircle size={20} className="text-functional-success flex-shrink-0 mt-0.5" />
                                <span>Working links and images</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-slate dark:text-neutral-cool">
                                <CheckCircle size={20} className="text-functional-success flex-shrink-0 mt-0.5" />
                                <span>Clear explanations and specific examples</span>
                            </li>
                        </ul>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-neutral-slate dark:text-neutral-cool">
                                <CheckCircle size={20} className="text-functional-success flex-shrink-0 mt-0.5" />
                                <span>Honest about limitations</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-slate dark:text-neutral-cool">
                                <CheckCircle size={20} className="text-functional-success flex-shrink-0 mt-0.5" />
                                <span>You've received feedback and starred others' projects</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Metrics That Don't Matter */}
            <div className="mt-16 bg-neutral-offWhite dark:bg-white/5 border-l-4 border-neutral-slate/30 p-8 rounded-r-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-lg font-bold text-neutral-charcoal dark:text-white mb-4">Metrics That Don't Matter (At First)</h4>
                        <p className="text-neutral-slate dark:text-neutral-cool mb-4 text-sm">Don't worry about:</p>
                        <ul className="space-y-2">
                            {[
                                "Number of stars (takes time to build)",
                                "Follower count (quality over quantity)",
                                "Contributions graph perfection (life happens)",
                                "Comparing to developers with years of history"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-neutral-slate/70 dark:text-neutral-cool/70">
                                    <XCircle size={18} className="text-neutral-cool flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-neutral-charcoal dark:text-white mb-4">What Actually Matters:</h4>
                        <ul className="space-y-3">
                            {[
                                "Clarity of your documentation",
                                "Authenticity of your work",
                                "Consistency of updates",
                                "Usefulness to others"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-neutral-charcoal dark:text-white font-medium">
                                    <TrendingUp size={18} className="text-cardinal dark:text-electric flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Long-Term Growth */}
            <div className="mt-16 pt-8 border-t border-neutral-cool/20">
                <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-8">Long-Term Growth Indicators</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* 3 Months */}
                    <div className="bg-white dark:bg-neutral-darkCard border border-neutral-cool/20 rounded-xl p-6 shadow-sls-sm hover:border-cardinal/30 transition-colors">
                        <div className="flex items-center gap-2 mb-4 text-cardinal dark:text-electric">
                            <Calendar size={20} />
                            <h4 className="text-lg font-bold">After 3 months:</h4>
                        </div>
                        <ul className="space-y-3 text-sm text-neutral-slate dark:text-neutral-cool">
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cardinal dark:bg-electric flex-shrink-0"/>10+ repositories</li>
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cardinal dark:bg-electric flex-shrink-0"/>Someone has forked or starred your work</li>
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cardinal dark:bg-electric flex-shrink-0"/>You're comfortable with the GitHub workflow</li>
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cardinal dark:bg-electric flex-shrink-0"/>You've helped someone with your documentation</li>
                        </ul>
                    </div>

                    {/* 6 Months */}
                    <div className="bg-white dark:bg-neutral-darkCard border border-neutral-cool/20 rounded-xl p-6 shadow-sls-sm hover:border-cardinal/30 transition-colors">
                        <div className="flex items-center gap-2 mb-4 text-cardinal dark:text-electric">
                            <Calendar size={20} />
                            <h4 className="text-lg font-bold">After 6 months:</h4>
                        </div>
                        <ul className="space-y-3 text-sm text-neutral-slate dark:text-neutral-cool">
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cardinal dark:bg-electric flex-shrink-0"/>GitHub is part of your routine</li>
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cardinal dark:bg-electric flex-shrink-0"/>Projects show progression in skills</li>
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cardinal dark:bg-electric flex-shrink-0"/>You've collaborated with someone</li>
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cardinal dark:bg-electric flex-shrink-0"/>Profile accurately represents your expertise</li>
                        </ul>
                    </div>

                    {/* 1 Year */}
                    <div className="bg-white dark:bg-neutral-darkCard border border-neutral-cool/20 rounded-xl p-6 shadow-sls-sm hover:border-cardinal/30 transition-colors">
                        <div className="flex items-center gap-2 mb-4 text-cardinal dark:text-electric">
                            <Award size={20} />
                            <h4 className="text-lg font-bold">After 1 year:</h4>
                        </div>
                        <ul className="space-y-3 text-sm text-neutral-slate dark:text-neutral-cool">
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cardinal dark:bg-electric flex-shrink-0"/>Strong portfolio of AI projects</li>
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cardinal dark:bg-electric flex-shrink-0"/>Clear documentation of learning journey</li>
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cardinal dark:bg-electric flex-shrink-0"/>Contributed to others' projects</li>
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cardinal dark:bg-electric flex-shrink-0"/>GitHub is your go-to for sharing work</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Conclusion Section */}
            <div className="mt-16 bg-[#1a1a1a] text-neutral-offWhite p-10 md:p-16 rounded-2xl text-center shadow-sls-lg">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Your GitHub Journey Starts Now</h3>
                <p className="text-lg md:text-xl text-neutral-cool mb-6 max-w-3xl mx-auto leading-relaxed">
                    You now have everything you need to build a professional GitHub portfolio showcasing your AI expertise. You don't need to be a programmer. You don't need to wait until you're an expert. You just need to start documenting what you're learning and building.
                </p>
                <p className="text-lg md:text-xl text-neutral-cool mb-10 max-w-3xl mx-auto leading-relaxed">
                    Remember: Start small, be consistent, show your work, and keep improving. Your GitHub profile is a living document of your AI journey.
                </p>
                <p className="text-2xl font-bold text-white mb-8">
                    Good luck. You've got this!
                </p>
                
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-bold text-neutral-charcoal bg-white hover:bg-neutral-offWhite transition-colors shadow-lg transform hover:-translate-y-1"
                >
                    <Home size={20} /> Back to Dashboard
                </Link>
            </div>

        </section>
    </div>
  );
};

export default GithubPortfolioPart18;