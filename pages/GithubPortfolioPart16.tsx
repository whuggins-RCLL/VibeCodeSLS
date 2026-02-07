import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, BookOpen, Users, Compass, AlertCircle, UserPlus, ArrowRight } from 'lucide-react';

const GithubPortfolioPart16: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-16">
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
                Part 16: Resources for Continued Learning
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8 leading-relaxed">
                Your journey doesn't end here. The GitHub and AI ecosystems are always evolving. Here are some excellent resources to help you keep learning.
            </p>
            
            <div className="pt-8 border-t border-neutral-cool/20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {/* Official GitHub Resources */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4 text-cardinal dark:text-electric pb-2 border-b border-neutral-cool/10">
                            <Github size={24} />
                            <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white">Official GitHub Resources</h3>
                        </div>
                        <ul className="list-disc list-inside space-y-3 text-neutral-slate dark:text-neutral-cool text-sm flex-1">
                            <li><a href="https://skills.github.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">GitHub Skills:</a> Interactive, hands-on tutorials where you learn by doing and earn badges.</li>
                            <li><a href="https://docs.github.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">GitHub Docs:</a> The comprehensive, searchable help center for everything GitHub.</li>
                            <li><a href="https://github.com/orgs/community/discussions" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">GitHub Community:</a> Official forums to ask questions, get help, and share your projects.</li>
                            <li><a href="https://docs.github.com/discussions/quickstart" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">Discussions Quickstart:</a> Learn how to add a community forum to your own projects.</li>
                        </ul>
                    </div>

                    {/* Learning Platforms */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4 text-cardinal dark:text-electric pb-2 border-b border-neutral-cool/10">
                            <BookOpen size={24} />
                            <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white">Learning Platforms</h3>
                        </div>
                        
                        <div className="mb-4">
                            <h4 className="font-bold text-base text-neutral-charcoal dark:text-white mb-2">Platform & Video Courses</h4>
                            <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool text-sm">
                                <li><a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">FreeCodeCamp:</a> In-depth interactive courses on Git and GitHub.</li>
                                <li><a href="https://www.freecodecamp.org/news/git-and-github-crash-course/" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">Git/GitHub Course Article:</a> The text-based guide to their popular crash course.</li>
                                <li><a href="https://www.youtube.com/watch?v=RGOj5yH7evk" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">freeCodeCamp Video:</a> A 1-hour video crash course for visual learners.</li>
                                <li><a href="https://www.youtube.com/watch?v=Oaj3RBloGFc" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">GitHub Basics (Video):</a> A 23-minute tutorial explaining GitHub in plain English.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-base text-neutral-charcoal dark:text-white mb-2">Markdown & Writing</h4>
                            <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool text-sm">
                                <li><a href="https://www.markdownguide.org" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">Markdown Guide:</a> A complete reference for all Markdown syntax.</li>
                                <li><a href="https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">GitHub's Markdown Guide:</a> The official docs for GitHub-flavored Markdown.</li>
                                <li><a href="https://github.com/adam-p/markdown-here/wiki/markdown-cheatsheet" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">Markdown Cheatsheet:</a> A quick reference for when you're writing.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Communities to Join */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4 text-cardinal dark:text-electric pb-2 border-b border-neutral-cool/10">
                            <Users size={24} />
                            <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white">Communities to Join</h3>
                        </div>
                        
                        <div className="mb-4">
                            <h4 className="font-bold text-base text-neutral-charcoal dark:text-white mb-2">Reddit</h4>
                            <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool text-sm">
                                <li><a href="https://www.reddit.com/r/ArtificialIntelligence/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">r/ArtificialIntelligence</a></li>
                                <li><a href="https://www.reddit.com/r/PromptEngineering/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">r/PromptEngineering</a></li>
                                <li><a href="https://www.reddit.com/r/github/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">r/github</a></li>
                                <li><a href="https://www.reddit.com/r/learnmachinelearning" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">r/learnmachinelearning</a></li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-bold text-base text-neutral-charcoal dark:text-white mb-2">Discord</h4>
                            <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool text-sm">
                                <li><a href="https://discord.com/invite/openai" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">OpenAI Discord</a></li>
                                <li><a href="https://discord.com/invite/6PPFFzqPDZ" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">Anthropic (Claude) Discord</a></li>
                                <li><a href="https://discord.com/invite/hugging-face-879548962464493619" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">Hugging Face Discord</a></li>
                                <li><a href="https://discord.com/invite/learnaitogether" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">Learn AI Together Discord</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-base text-neutral-charcoal dark:text-white mb-2">Professional</h4>
                            <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool text-sm">
                                <li><a href="https://community.openai.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">OpenAI Community Forum</a></li>
                                <li><a href="https://forum.openai.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">OpenAI Forum</a></li>
                                <li><a href="https://www.linkedin.com/groups/8382828" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">LinkedIn: AI, ML & Data Science Group</a></li>
                                <li><a href="https://www.linkedin.com/groups/6608681" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">LinkedIn: AI & ML Professionals Group</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* AI Project Examples */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4 text-cardinal dark:text-electric pb-2 border-b border-neutral-cool/10">
                            <Compass size={24} />
                            <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white">AI Project Examples</h3>
                        </div>
                        <p className="text-neutral-slate dark:text-neutral-cool mb-4 text-sm">Study popular AI repositories to see how others structure their documentation and projects.</p>
                        <ul className="list-disc list-inside space-y-3 text-neutral-slate dark:text-neutral-cool text-sm flex-1">
                            <li><a href="https://github.com/topics/ai" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">GitHub Topic: AI:</a> Browse 70,000+ projects tagged with "AI".</li>
                            <li><a href="https://github.com/dair-ai/Prompt-Engineering-Guide" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">Prompt Engineering Guide:</a> A massive, popular guide on prompt engineering.</li>
                            <li><a href="https://github.com/NirDiamant/Prompt_Engineering" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">NirDiamant's Prompts:</a> Practical tutorials from basic to advanced.</li>
                            <li><a href="https://github.com/brexhq/prompt-engineering" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">Brex's Prompt Guide:</a> An industry-focused guide with real-world examples.</li>
                            <li><a href="https://github.blog/ai-and-ml/generative-ai/prompt-engineering-guide-generative-ai-llms/" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">GitHub's Prompting Article:</a> See how GitHub's own team thinks about prompting.</li>
                        </ul>
                    </div>

                    {/* AI Ethics Resources */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4 text-cardinal dark:text-electric pb-2 border-b border-neutral-cool/10">
                            <AlertCircle size={24} />
                            <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white">AI Ethics Resources</h3>
                        </div>
                        <p className="text-neutral-slate dark:text-neutral-cool mb-4 text-sm">Essential reading for applying AI responsibly, especially in a professional context.</p>
                        <ul className="list-disc list-inside space-y-3 text-neutral-slate dark:text-neutral-cool text-sm flex-1">
                            <li><a href="https://www.unesco.org/en/artificial-intelligence/recommendation-ethics" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">UNESCO AI Ethics:</a> The first global standard on the ethics of AI.</li>
                            <li><a href="https://www.ibm.com/think/topics/ai-ethics" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">IBM AI Ethics:</a> A practical framework for building ethical AI systems.</li>
                            <li><a href="https://www.edx.org/resources/ai-ethics" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-cardinal dark:hover:text-electric transition-colors">edX AI Ethics Resources:</a> An overview of concepts with links to courses.</li>
                        </ul>
                    </div>

                    {/* People to Follow */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4 text-cardinal dark:text-electric pb-2 border-b border-neutral-cool/10">
                            <UserPlus size={24} />
                            <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white">People to Follow on GitHub</h3>
                        </div>
                        <p className="text-neutral-slate dark:text-neutral-cool mb-4 text-sm">This is one of the best ways to learn. Search GitHub for users who:</p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool text-sm flex-1">
                            <li>Work in AI education</li>
                            <li>Build custom GPTs or AI tools</li>
                            <li>Write excellent documentation</li>
                            <li>Share learning resources</li>
                            <li>Have repositories similar to what you want to create</li>
                        </ul>
                        <p className="mt-4 text-sm font-medium text-neutral-charcoal dark:text-white italic">
                            Click "Follow" on their profiles to see their activity in your feed and learn from their approach.
                        </p>
                    </div>

                </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-neutral-cool/20 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 gap-6">
                <div className="flex-grow">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-slate dark:text-neutral-cool mb-1">Next Up</p>
                    <p className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2">Part 17: Your 30-Day Launch Plan</p>
                    <p className="text-base text-neutral-slate dark:text-neutral-cool max-w-xl">
                        A step-by-step, week-by-week checklist to build your portfolio from scratch.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/github/part-17" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white bg-cardinal hover:bg-cardinal-dark transition-colors shadow-sls-md hover:shadow-sls-lg transform hover:-translate-y-0.5"
                    >
                        Go to Part 17 <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </section>
    </div>
  );
};

export default GithubPortfolioPart16;