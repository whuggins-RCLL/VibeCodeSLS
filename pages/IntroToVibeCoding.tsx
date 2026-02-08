import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sparkles, 
  Monitor, 
  RefreshCw, 
  MessageSquare, 
  ShieldAlert, 
  Zap,
  ArrowRight
} from 'lucide-react';

const IntroToVibeCoding: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-24">
      {/* Header / Breadcrumbs */}
      <div className="space-y-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm font-medium text-neutral-slate dark:text-neutral-cool hover:text-cardinal dark:hover:text-electric transition-colors w-fit group"
        >
          <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative rounded-[2rem] overflow-hidden bg-neutral-charcoal dark:bg-black shadow-sls-xl border border-neutral-cool/20 group">
        <div className="absolute inset-0">
           <img 
             src="https://i.postimg.cc/c45fF7rR/f-No-more-code-Just-say-what-you-want-in-plain-language.png" 
             alt="No more code! Just say what you want in plain language." 
             className="w-full h-full object-cover opacity-60 mix-blend-overlay"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 p-8 md:p-16 flex flex-col justify-end min-h-[400px]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/20 backdrop-blur-md border border-electric/30 text-xs font-bold uppercase tracking-widest text-electric mb-4 w-fit">
            <Sparkles size={12} /> Vibe Coding 101
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
            Software Creation for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-warmGold">Everyone</span>
          </h1>
          <p className="text-xl text-neutral-offWhite/90 max-w-2xl leading-relaxed font-light">
            A comprehensive guide to building applications using natural language. No syntax required—just logic, creativity, and the right vibes.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white">What is Vibe Coding?</h2>
        <p className="text-lg text-neutral-slate dark:text-neutral-cool leading-relaxed">
          It is the process of building software by describing your vision in plain English, and iterating with Artificial Intelligence to handle the code. It shifts the skill from "writing syntax" to "directing logic."
        </p>
      </section>

      {/* Course Curriculum Grid */}
      <section>
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white flex items-center gap-2">
                <Sparkles className="text-deepPurple" /> The Curriculum
            </h2>
            <span className="text-sm font-bold text-neutral-slate dark:text-neutral-cool uppercase tracking-wider">5 Modules</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Module 1: The Landscape */}
            <Link to="/intro/tools" className="group block h-full">
                <div className="h-full bg-white dark:bg-neutral-darkCard p-8 rounded-2xl border border-neutral-cool/20 shadow-sls-sm hover:shadow-sls-md hover:border-cardinal/40 transition-all duration-300 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-cardinal/10 flex items-center justify-center text-cardinal mb-6 group-hover:scale-110 transition-transform">
                        <Monitor size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-2 group-hover:text-cardinal dark:group-hover:text-electric transition-colors">1. The Tool Landscape</h3>
                    <p className="text-neutral-slate dark:text-neutral-cool text-sm leading-relaxed mb-6 flex-1">
                        From "Browser Builders" like Replit to "AI Editors" like Cursor. Understand the ecosystem and why we start with Google AI Studio.
                    </p>
                    <div className="flex items-center text-sm font-bold text-cardinal dark:text-electric gap-1 group-hover:translate-x-1 transition-transform">
                        Explore Tools <ArrowRight size={14} />
                    </div>
                </div>
            </Link>

            {/* Module 2: The Process */}
            <Link to="/intro/process" className="group block h-full">
                <div className="h-full bg-white dark:bg-neutral-darkCard p-8 rounded-2xl border border-neutral-cool/20 shadow-sls-sm hover:shadow-sls-md hover:border-deepPurple/40 transition-all duration-300 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-deepPurple/10 flex items-center justify-center text-deepPurple mb-6 group-hover:scale-110 transition-transform">
                        <RefreshCw size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-2 group-hover:text-deepPurple dark:group-hover:text-electric transition-colors">2. The Core Process</h3>
                    <p className="text-neutral-slate dark:text-neutral-cool text-sm leading-relaxed mb-6 flex-1">
                        Master the loop: Describe, Generate, Test, and Refine. Learn the "Human in the Loop" mindset required for success.
                    </p>
                    <div className="flex items-center text-sm font-bold text-deepPurple dark:text-electric gap-1 group-hover:translate-x-1 transition-transform">
                        Learn the Cycle <ArrowRight size={14} />
                    </div>
                </div>
            </Link>

            {/* Module 3: Prompting */}
            <Link to="/intro/prompting" className="group block h-full">
                <div className="h-full bg-white dark:bg-neutral-darkCard p-8 rounded-2xl border border-neutral-cool/20 shadow-sls-sm hover:shadow-sls-md hover:border-warmGold/40 transition-all duration-300 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-warmGold/10 flex items-center justify-center text-warmGold mb-6 group-hover:scale-110 transition-transform">
                        <MessageSquare size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-2 group-hover:text-warmGold transition-colors">3. Prompting for Code</h3>
                    <p className="text-neutral-slate dark:text-neutral-cool text-sm leading-relaxed mb-6 flex-1">
                        How to speak "developer" without knowing code. Best practices for role-playing, constraints, and context.
                    </p>
                    <div className="flex items-center text-sm font-bold text-warmGold gap-1 group-hover:translate-x-1 transition-transform">
                        Master Prompts <ArrowRight size={14} />
                    </div>
                </div>
            </Link>

            {/* Module 4: Safety */}
            <Link to="/intro/safety" className="group block h-full">
                <div className="h-full bg-white dark:bg-neutral-darkCard p-8 rounded-2xl border border-neutral-cool/20 shadow-sls-sm hover:shadow-sls-md hover:border-functional-success/40 transition-all duration-300 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-functional-success/10 flex items-center justify-center text-functional-success mb-6 group-hover:scale-110 transition-transform">
                        <ShieldAlert size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-2 group-hover:text-functional-success transition-colors">4. Safety & Ground Rules</h3>
                    <p className="text-neutral-slate dark:text-neutral-cool text-sm leading-relaxed mb-6 flex-1">
                        Critical rules for API keys, personal data, and maintaining control over the AI's output.
                    </p>
                    <div className="flex items-center text-sm font-bold text-functional-success gap-1 group-hover:translate-x-1 transition-transform">
                        Stay Safe <ArrowRight size={14} />
                    </div>
                </div>
            </Link>

            {/* Module 5: Lab */}
            <Link to="/intro/lab" className="group block h-full md:col-span-2 lg:col-span-2">
                <div className="h-full bg-gradient-to-br from-cardinal to-deepPurple rounded-2xl border border-white/20 shadow-sls-md hover:shadow-sls-lg transition-all duration-300 p-8 flex flex-col relative overflow-hidden text-white">
                    <div className="absolute top-0 right-0 p-8 opacity-20">
                        <Zap size={120} />
                    </div>
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">Hands-On Lab</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">5. Build a Flashcard App</h3>
                        <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl">
                            Apply everything you've learned. We'll use Google AI Studio to build a fully functional, interactive flashcard application from a simple spreadsheet concept.
                        </p>
                        <div className="mt-auto flex items-center gap-2 font-bold bg-white text-cardinal px-6 py-3 rounded-xl w-fit hover:bg-neutral-offWhite transition-colors">
                            Start Building <ArrowRight size={18} />
                        </div>
                    </div>
                </div>
            </Link>

        </div>
      </section>
    </div>
  );
};

export default IntroToVibeCoding;