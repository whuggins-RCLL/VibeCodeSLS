import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

const GithubPortfolioPart2: React.FC = () => {
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
                Part 2: Setting Up Your Account
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8 leading-relaxed">
                This is your digital storefront. Let's spend a few minutes making it professional. A complete profile builds trust and shows you're serious about your work.
            </p>
            
            {/* Note Box */}
            <div className="bg-functional-warning/10 border border-functional-warning/30 rounded-xl p-6 mb-10">
                <p className="text-neutral-charcoal dark:text-white text-base">
                    <strong className="text-functional-warning">Note on AI Tools:</strong> You may see options to "Try GitHub Copilot" or other AI tools. It is not necessary to subscribe to any paid tools for this project, but it is something you can explore later if you get into coding.
                </p>
            </div>
            
            <div className="pt-8 border-t border-neutral-cool/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* COLUMN 1: STEP 1 */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Step 1: Create Your Account</h3>
                        
                        <img 
                            src="https://i.postimg.cc/KY6yWj5m/Screenshot-2025-10-29-at-10-36-07-PM.png" 
                            alt="GitHub signup screen" 
                            className="rounded-xl shadow-sls-sm border border-neutral-cool/20 w-full mb-6"
                        />
                        
                        <ol className="list-decimal list-inside space-y-3 text-neutral-slate dark:text-neutral-cool text-lg marker:font-bold marker:text-cardinal dark:marker:text-electric">
                            <li>Go to <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-cardinal dark:text-electric hover:underline font-medium">github.com</a></li>
                            <li>Click the green "Sign up" button</li>
                            <li><strong className="text-neutral-charcoal dark:text-white">Important:</strong> Use a personal email address (like Gmail) rather than your work email. GitHub accounts last forever. You'll want access after you move jobs.</li>
                        </ol>
    
                        {/* Highlighted Username Box */}
                        <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20 my-6">
                            <p className="font-bold text-lg mb-4 text-neutral-charcoal dark:text-white">Choosing Your Username</p>
                            <p className="mb-3 text-neutral-slate dark:text-neutral-cool">This is public and professional. Good options:</p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-slate dark:text-neutral-cool mb-4 font-mono">
                                <li>Your actual name: <span className="text-cardinal dark:text-electric">jane-smith</span></li>
                                <li>Name plus profession: <span className="text-cardinal dark:text-electric">jane-ai-educator</span></li>
                                <li>Professional handle: <span className="text-cardinal dark:text-electric">ai-with-jane</span></li>
                            </ul>
                            <p className="mb-3 text-neutral-slate dark:text-neutral-cool font-medium">Avoid:</p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-slate dark:text-neutral-cool font-mono">
                                <li>Numbers that look random: <span className="opacity-70">jane12345</span></li>
                                <li>Joke names: <span className="opacity-70">coolcoder99</span></li>
                                <li>Temporary identifiers: <span className="opacity-70">stanford-temp</span></li>
                            </ul>
                        </div>
    
                        <ol start={4} className="list-decimal list-inside space-y-3 text-neutral-slate dark:text-neutral-cool text-lg marker:font-bold marker:text-cardinal dark:marker:text-electric">
                            <li>Create a strong password</li>
                            <li>Verify your email address (check your inbox)</li>
                            <li>Answer the setup questions:
                                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-base">
                                    <li>Select "Just me" for team size</li>
                                    <li>Choose "Student" or "Teacher" if applicable (or skip)</li>
                                    <li>Select your interests: check "Collaborative coding" and "Automation"</li>
                                </ul>
                            </li>
                        </ol>
                    </div>

                    {/* COLUMN 2: STEP 2 */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Step 2: Complete Your Profile</h3>
                        <p className="text-lg text-neutral-slate dark:text-neutral-cool">Click your profile picture (top right) &rarr; Settings &rarr; Profile</p>
                        
                        <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                            <h4 className="font-bold text-lg mb-4 text-neutral-charcoal dark:text-white">Add This Information:</h4>
                            <ul className="space-y-6 text-neutral-slate dark:text-neutral-cool">
                                <li>
                                    <strong className="block text-neutral-charcoal dark:text-white mb-1">Profile Picture:</strong>
                                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                                        <li>Upload a professional photo (your face, clearly visible)</li>
                                        <li>Or use a professional illustration/avatar</li>
                                        <li>This appears on all your contributions</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="block text-neutral-charcoal dark:text-white mb-1">Name:</strong> 
                                    Your real name (helps people find and remember you)
                                </li>
                                <li>
                                    <strong className="block text-neutral-charcoal dark:text-white mb-1">Bio:</strong> 
                                    2-3 sentences about you. Example:
                                    <blockquote className="mt-2 pl-4 border-l-2 border-cardinal dark:border-electric italic text-neutral-slate/80 dark:text-neutral-cool/80 text-sm">
                                        AI educator and legal tech enthusiast. Teaching professionals how to work effectively with AI tools. Currently at Stanford Law School.
                                    </blockquote>
                                </li>
                                <li>
                                    <strong className="block text-neutral-charcoal dark:text-white mb-1">Location:</strong> 
                                    Your city (helps with networking)
                                </li>
                                <li>
                                    <strong className="block text-neutral-charcoal dark:text-white mb-1">Website:</strong> 
                                    Your personal website or LinkedIn profile
                                </li>
                                <li>
                                    <strong className="block text-neutral-charcoal dark:text-white mb-1">Twitter/Social:</strong> 
                                    Optional, but useful for networking
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-neutral-cool/20 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 gap-6">
                <div className="flex-grow">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-slate dark:text-neutral-cool mb-1">Next Up</p>
                    <p className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2">Part 3: Creating Your Profile README</p>
                    <p className="text-base text-neutral-slate dark:text-neutral-cool max-w-xl">
                        Learn the "secret weapon" of GitHub profiles: the special Profile README that acts as your personal billboard.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/github/part-3" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white bg-cardinal hover:bg-cardinal-dark transition-colors shadow-sls-md hover:shadow-sls-lg transform hover:-translate-y-0.5"
                    >
                        Go to Part 3 <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </section>
    </div>
  );
};

export default GithubPortfolioPart2;