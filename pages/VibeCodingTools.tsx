import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Code, Zap, Grid, CheckCircle2, XCircle, ExternalLink } from 'lucide-react';

const VibeCodingTools: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-24">
      {/* Header */}
      <div className="space-y-6">
        <Link 
          to="/intro" 
          className="inline-flex items-center text-sm font-medium text-neutral-slate dark:text-neutral-cool hover:text-cardinal dark:hover:text-electric transition-colors w-fit group"
        >
          <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Curriculum
        </Link>
        <div>
            <h1 className="text-4xl font-bold text-neutral-charcoal dark:text-white mb-4">The Tool Landscape</h1>
            <p className="text-xl text-neutral-slate dark:text-neutral-cool leading-relaxed">
                Vibe coding isn't tied to one specific app. It's a method you can use across a spectrum of tools, ranging from simple chatbots to professional engineering environments.
            </p>
        </div>
      </div>

      {/* The Spectrum */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Three Tiers of Vibe Coding</h2>
        
        <div className="grid grid-cols-1 gap-6">
            
            {/* Tier 1: Browser Builders */}
            <div className="bg-white dark:bg-neutral-darkCard rounded-2xl border border-neutral-cool/20 overflow-hidden">
                <div className="bg-cardinal/5 dark:bg-electric/5 p-6 border-b border-neutral-cool/10 flex items-center gap-4">
                    <div className="p-3 bg-cardinal text-white rounded-xl shadow-md">
                        <Monitor size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white">Tier 1: Browser Builders</h3>
                        <p className="text-sm text-neutral-slate dark:text-neutral-cool font-medium">The "Magic" Tier</p>
                    </div>
                </div>
                <div className="p-6 md:p-8 space-y-6">
                    <p className="text-neutral-slate dark:text-neutral-cool">
                        These tools live entirely in your web browser. You type a prompt, and they generate a full, live website instantly. They handle all the file setup, hosting, and deployment for you.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-functional-success mb-2 block">Pros</span>
                            <ul className="space-y-2 text-sm text-neutral-slate dark:text-neutral-cool">
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-functional-success flex-shrink-0" /> Zero setup required</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-functional-success flex-shrink-0" /> One-click deployment</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-functional-success flex-shrink-0" /> Visual preview updates live</li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-functional-error mb-2 block">Cons</span>
                            <ul className="space-y-2 text-sm text-neutral-slate dark:text-neutral-cool">
                                <li className="flex gap-2"><XCircle size={16} className="text-functional-error flex-shrink-0" /> Can become expensive quickly</li>
                                <li className="flex gap-2"><XCircle size={16} className="text-functional-error flex-shrink-0" /> Hard to customize deeply later</li>
                                <li className="flex gap-2"><XCircle size={16} className="text-functional-error flex-shrink-0" /> "Black box" (hides complexity)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-neutral-cool/10">
                        <p className="text-sm font-bold text-neutral-charcoal dark:text-white mb-2">Popular Tools:</p>
                        <div className="flex flex-wrap gap-2 text-neutral-charcoal dark:text-neutral-offWhite">
                            <span className="px-3 py-1 bg-neutral-offWhite dark:bg-white/10 rounded-full text-sm border border-neutral-cool/20">Replit Agent</span>
                            <span className="px-3 py-1 bg-neutral-offWhite dark:bg-white/10 rounded-full text-sm border border-neutral-cool/20">Lovable</span>
                            <span className="px-3 py-1 bg-neutral-offWhite dark:bg-white/10 rounded-full text-sm border border-neutral-cool/20">Bolt.new</span>
                            <span className="px-3 py-1 bg-neutral-offWhite dark:bg-white/10 rounded-full text-sm border border-neutral-cool/20">v0.dev</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tier 2: AI Editors */}
            <div className="bg-white dark:bg-neutral-darkCard rounded-2xl border border-neutral-cool/20 overflow-hidden">
                <div className="bg-deepPurple/5 dark:bg-deepPurple/10 p-6 border-b border-neutral-cool/10 flex items-center gap-4">
                    <div className="p-3 bg-deepPurple text-white rounded-xl shadow-md">
                        <Code size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white">Tier 2: AI Code Editors</h3>
                        <p className="text-sm text-neutral-slate dark:text-neutral-cool font-medium">The "Pro" Tier</p>
                    </div>
                </div>
                <div className="p-6 md:p-8 space-y-6">
                    <p className="text-neutral-slate dark:text-neutral-cool">
                        These are professional software development environments (IDEs) infused with AI. They integrate directly into your existing codebase.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-functional-success mb-2 block">Pros</span>
                            <ul className="space-y-2 text-sm text-neutral-slate dark:text-neutral-cool">
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-functional-success flex-shrink-0" /> Full control over code</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-functional-success flex-shrink-0" /> Works with massive projects</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-functional-success flex-shrink-0" /> Industry standard for engineers</li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-functional-error mb-2 block">Cons</span>
                            <ul className="space-y-2 text-sm text-neutral-slate dark:text-neutral-cool">
                                <li className="flex gap-2"><XCircle size={16} className="text-functional-error flex-shrink-0" /> Steeper learning curve</li>
                                <li className="flex gap-2"><XCircle size={16} className="text-functional-error flex-shrink-0" /> Requires setup (installing software)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-neutral-cool/10">
                        <p className="text-sm font-bold text-neutral-charcoal dark:text-white mb-2">Popular Tools:</p>
                        <div className="flex flex-wrap gap-2 text-neutral-charcoal dark:text-neutral-offWhite">
                            <span className="px-3 py-1 bg-neutral-offWhite dark:bg-white/10 rounded-full text-sm border border-neutral-cool/20">Cursor</span>
                            <span className="px-3 py-1 bg-neutral-offWhite dark:bg-white/10 rounded-full text-sm border border-neutral-cool/20">Windsurf</span>
                            <span className="px-3 py-1 bg-neutral-offWhite dark:bg-white/10 rounded-full text-sm border border-neutral-cool/20">GitHub Copilot</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tier 3: Model Studios */}
            <div className="bg-white dark:bg-neutral-darkCard rounded-2xl border border-neutral-cool/20 overflow-hidden ring-2 ring-warmGold/50">
                <div className="bg-warmGold/10 p-6 border-b border-neutral-cool/10 flex items-center gap-4">
                    <div className="p-3 bg-warmGold text-white rounded-xl shadow-md">
                        <Zap size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white">Tier 3: Raw Model Studios</h3>
                        <p className="text-sm text-neutral-slate dark:text-neutral-cool font-bold text-warmGold">Our Preferred Learning Environment</p>
                    </div>
                </div>
                <div className="p-6 md:p-8 space-y-6">
                    <p className="text-neutral-slate dark:text-neutral-cool">
                        Direct interfaces to the raw intelligence of the model. No "magic" wrapper code hiding what's happening. Just you, the prompt, and the output.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-functional-success mb-2 block">Pros</span>
                            <ul className="space-y-2 text-sm text-neutral-slate dark:text-neutral-cool">
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-functional-success flex-shrink-0" /> Maximum transparency</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-functional-success flex-shrink-0" /> Access to latest models (Gemini 2.5/3)</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-functional-success flex-shrink-0" /> Usually offers free tiers</li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-functional-error mb-2 block">Cons</span>
                            <ul className="space-y-2 text-sm text-neutral-slate dark:text-neutral-cool">
                                <li className="flex gap-2"><XCircle size={16} className="text-functional-error flex-shrink-0" /> Manual copy-pasting required</li>
                                <li className="flex gap-2"><XCircle size={16} className="text-functional-error flex-shrink-0" /> No one-click hosting</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-neutral-cool/10">
                        <p className="text-sm font-bold text-neutral-charcoal dark:text-white mb-2">Popular Tools:</p>
                        <div className="flex flex-wrap gap-2 text-neutral-charcoal dark:text-neutral-offWhite">
                            <span className="px-3 py-1 bg-warmGold/20 text-warmGold rounded-full text-sm border border-warmGold/30 font-bold">Google AI Studio</span>
                            <span className="px-3 py-1 bg-neutral-offWhite dark:bg-white/10 rounded-full text-sm border border-neutral-cool/20">OpenAI Playground</span>
                            <span className="px-3 py-1 bg-neutral-offWhite dark:bg-white/10 rounded-full text-sm border border-neutral-cool/20">Anthropic Console</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </section>

      {/* Why Google AI Studio */}
      <section className="bg-neutral-charcoal dark:bg-black text-white rounded-3xl p-8 md:p-12 shadow-sls-xl">
        <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                <Grid size={32} />
            </div>
            <h2 className="text-3xl font-bold">Why we start with Google AI Studio</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-neutral-cool">
                <p className="text-lg leading-relaxed">
                    While tools like Replit and Lovable are amazing for *production*, they often hide the logic to make things easier.
                </p>
                <p className="text-lg leading-relaxed">
                    To truly learn <strong>Vibe Coding</strong>, you need to see exactly how your prompt translates into code. Google AI Studio gives us this transparency.
                </p>
                <div className="flex gap-4 pt-4">
                    <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-neutral-charcoal px-6 py-3 rounded-full font-bold hover:bg-neutral-200 transition-colors">
                        Open AI Studio <ExternalLink size={16} />
                    </a>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-lg">1</div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">State-of-the-Art Models</h4>
                        <p className="text-neutral-400 text-sm">Access to Gemini 2.5 and Gemini 3 (preview), which excel at reasoning and coding tasks.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-lg">2</div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Huge Context Window</h4>
                        <p className="text-neutral-400 text-sm">The 1M+ token window lets you upload entire books, codebases, or datasets to work with.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-lg">3</div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">It's Free (for now)</h4>
                        <p className="text-neutral-400 text-sm">The generous free tier is perfect for education without hitting credit card paywalls immediately.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default VibeCodingTools;