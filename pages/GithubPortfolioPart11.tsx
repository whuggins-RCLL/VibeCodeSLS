import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, FileText, Image, AlertCircle, RefreshCw, Compass, CheckCircle, XCircle, GitCommit, FolderOpen, Pin, ArrowRight } from 'lucide-react';

const GithubPortfolioPart11: React.FC = () => {
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
                Part 11: Best Practices for Your GitHub Portfolio
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8 leading-relaxed">
                With your portfolio set up, follow these golden rules to keep it professional, discoverable, and effective.
            </p>
            
            {/* Golden Rules */}
            <div className="pt-8 border-t border-neutral-cool/20">
                <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-8">The Golden Rules</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Rule 1 */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                        <div className="flex items-center gap-3 mb-3 text-cardinal dark:text-electric">
                            <FileText size={24} />
                            <h4 className="text-xl font-bold">1. README First, Always</h4>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool ml-2">
                            <li>Every repository needs a clear README.</li>
                            <li>Assume visitors know nothing about your project.</li>
                            <li>Update it regularly as your project evolves.</li>
                        </ul>
                    </div>

                    {/* Rule 2 */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                        <div className="flex items-center gap-3 mb-3 text-cardinal dark:text-electric">
                            <Image size={24} />
                            <h4 className="text-xl font-bold">2. Show, Don't Just Tell</h4>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool ml-2">
                            <li>Include screenshots.</li>
                            <li>Add example outputs.</li>
                            <li>Share specific use cases.</li>
                            <li>Use before/after comparisons.</li>
                        </ul>
                    </div>

                    {/* Rule 3 */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                        <div className="flex items-center gap-3 mb-3 text-cardinal dark:text-electric">
                            <AlertCircle size={24} />
                            <h4 className="text-xl font-bold">3. Be Honest About Limitations</h4>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool ml-2">
                            <li>What doesn't work yet?</li>
                            <li>Are there known issues?</li>
                            <li>What skills are you still learning?</li>
                            <li>What are your plans for future improvements?</li>
                        </ul>
                    </div>

                    {/* Rule 4 */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                        <div className="flex items-center gap-3 mb-3 text-cardinal dark:text-electric">
                            <RefreshCw size={24} />
                            <h4 className="text-xl font-bold">4. Keep It Current</h4>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool ml-2">
                            <li>Add "Last Updated: [Date]" to your READMEs.</li>
                            <li>Archive old projects that no longer represent your work.</li>
                            <li>Update your profile when you learn new skills.</li>
                        </ul>
                    </div>

                    {/* Rule 5 - Full Width */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20 md:col-span-2">
                        <div className="flex items-center gap-3 mb-3 text-cardinal dark:text-electric">
                            <Compass size={24} />
                            <h4 className="text-xl font-bold">5. Make It Navigable</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool ml-2">
                                <li>Use clear folder structures.</li>
                                <li>Link between related projects.</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool ml-2">
                                <li>Create a table of contents for long documents.</li>
                                <li>Use descriptive file names (e.g., <code className="text-xs bg-black/10 dark:bg-white/10 px-1 rounded">prompt-engineering-notes.md</code>).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Writing Style Tips */}
            <div className="mt-16 pt-8 border-t border-neutral-cool/20">
                <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-8">Writing Style Tips</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Good Examples */}
                    <div className="border-2 border-functional-success/30 bg-functional-success/5 rounded-xl p-6 relative">
                        <div className="absolute -top-3 left-6 bg-white dark:bg-neutral-darkCard px-2 text-functional-success flex items-center gap-1 font-bold text-sm uppercase tracking-wide">
                            <CheckCircle size={16} /> Good Examples
                        </div>
                        <p className="font-semibold text-neutral-charcoal dark:text-white mb-3">This custom GPT helps legal researchers by:</p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool mb-6">
                            <li>Generating structured Westlaw queries.</li>
                            <li>Suggesting alternative search terms.</li>
                            <li>Identifying jurisdiction-specific considerations.</li>
                        </ul>
                        
                        <div className="border-t border-functional-success/20 pt-4">
                            <h5 className="font-bold text-neutral-charcoal dark:text-white mb-2 text-sm">Lessons Learned</h5>
                            <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool text-sm">
                                <li><strong>What Worked:</strong> Using role-based prompting ("You are a senior contracts attorney") dramatically improved output quality.</li>
                                <li><strong>What Didn't:</strong> My first few-shot examples were too complex. Simpler examples taught the model better.</li>
                                <li><strong>Next Steps:</strong> Experiment with chain-of-thought prompting for multi-step legal reasoning.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Avoid These */}
                    <div className="border-2 border-functional-error/30 bg-functional-error/5 rounded-xl p-6 relative">
                        <div className="absolute -top-3 left-6 bg-white dark:bg-neutral-darkCard px-2 text-functional-error flex items-center gap-1 font-bold text-sm uppercase tracking-wide">
                            <XCircle size={16} /> Avoid These
                        </div>
                        <p className="italic text-neutral-slate dark:text-neutral-cool mb-8 mt-2">"This is a GPT. It does legal stuff. It's good."</p>
                        
                        <div className="border-t border-functional-error/20 pt-4">
                            <h5 className="font-bold text-neutral-charcoal dark:text-white mb-2 text-sm">Lessons Learned</h5>
                            <p className="italic text-neutral-slate dark:text-neutral-cool text-sm">"It was good. I learned stuff. Will do more later."</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Commit Message Best Practices */}
            <div className="mt-16 pt-8 border-t border-neutral-cool/20">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                        <GitCommit size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Commit Message Best Practices</h3>
                </div>
                <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8">
                    Every time you save changes (commit), you write a message explaining what you did. This creates a clear history of your work.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-neutral-offWhite dark:bg-white/5 rounded-xl p-6 border border-neutral-cool/20">
                        <h4 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-4 border-b border-neutral-cool/10 pb-2">Good Commit Messages</h4>
                        <ul className="list-disc list-inside space-y-3 text-neutral-slate dark:text-neutral-cool">
                            <li>"Added Week 3 lesson plan on AI ethics"</li>
                            <li>"Fixed broken links in Harvey AI setup guide"</li>
                            <li>"Updated README with new certification from OpenAI"</li>
                            <li>"Reorganized prompt library by difficulty level"</li>
                        </ul>
                    </div>
                    <div className="bg-neutral-offWhite dark:bg-white/5 rounded-xl p-6 border border-neutral-cool/20">
                        <h4 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-4 border-b border-neutral-cool/10 pb-2">Poor Commit Messages</h4>
                        <ul className="list-disc list-inside space-y-3 text-neutral-slate dark:text-neutral-cool">
                            <li>"Update"</li>
                            <li>"Changes"</li>
                            <li>"Fixed stuff"</li>
                            <li>"asdfgh"</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-neutral-offWhite dark:bg-white/5 border-l-4 border-cardinal dark:border-electric p-4 rounded-r-lg mt-6">
                    <p className="text-neutral-slate dark:text-neutral-cool text-sm">
                        <strong className="text-cardinal dark:text-electric">Why this matters:</strong> Commit messages create a permanent history. When you (or others) look back, clear messages help you understand exactly what changed and why.
                    </p>
                </div>
            </div>

            {/* Organizing Multiple Projects */}
            <div className="mt-16 pt-8 border-t border-neutral-cool/20">
                <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-8">Organizing Multiple Projects</h3>
                <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8">
                    As you build more repositories, organize them with consistent naming and pin your best work to your profile.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-cardinal dark:text-electric">
                            <FolderOpen size={20} />
                            <h4 className="font-bold text-lg">Good Naming Patterns</h4>
                        </div>
                        <ul className="space-y-3 text-neutral-slate dark:text-neutral-cool font-mono text-sm">
                            <li className="bg-neutral-offWhite dark:bg-white/5 p-2 rounded border border-neutral-cool/20">ai-training-[topic]</li>
                            <li className="bg-neutral-offWhite dark:bg-white/5 p-2 rounded border border-neutral-cool/20">custom-gpt-[purpose]</li>
                            <li className="bg-neutral-offWhite dark:bg-white/5 p-2 rounded border border-neutral-cool/20">prompts-[category]</li>
                            <li className="bg-neutral-offWhite dark:bg-white/5 p-2 rounded border border-neutral-cool/20">review-[tool-name]</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center gap-2 text-cardinal dark:text-electric mb-3">
                                <Pin size={20} />
                                <h4 className="font-bold text-lg">Pin Your Best Work</h4>
                            </div>
                            <p className="text-neutral-slate dark:text-neutral-cool mb-3 text-sm">You can pin up to 6 repositories to your profile. Choose:</p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-slate dark:text-neutral-cool">
                                <li>Your most complete projects.</li>
                                <li>Your most impressive work.</li>
                                <li>Projects that best represent your skills.</li>
                                <li>Recent work (shows you're active).</li>
                            </ul>
                        </div>
                        
                        <div className="bg-neutral-offWhite dark:bg-white/5 p-4 rounded-lg border border-neutral-cool/20">
                            <h5 className="font-bold text-neutral-charcoal dark:text-white text-sm mb-2">How to Pin:</h5>
                            <ol className="list-decimal list-inside text-sm text-neutral-slate dark:text-neutral-cool space-y-1">
                                <li>Go to your profile.</li>
                                <li>Click "Customize your pins".</li>
                                <li>Select up to 6 repositories.</li>
                                <li>Drag to reorder them.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-neutral-cool/20 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 gap-6">
                <div className="flex-grow">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-slate dark:text-neutral-cool mb-1">Next Up</p>
                    <p className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2">Part 12: Maintaining Your GitHub Presence</p>
                    <p className="text-base text-neutral-slate dark:text-neutral-cool max-w-xl">
                        Set up a simple weekly and monthly routine to keep your profile active and fresh.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/github/part-12" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white bg-cardinal hover:bg-cardinal-dark transition-colors shadow-sls-md hover:shadow-sls-lg transform hover:-translate-y-0.5"
                    >
                        Go to Part 12 <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </section>
    </div>
  );
};

export default GithubPortfolioPart11;