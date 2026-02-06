import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Server, 
  ExternalLink, 
  Lightbulb, 
  MessageSquare, 
  Brain, 
  AlertCircle, 
  Sparkles, 
  Layout, 
  GraduationCap 
} from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-12 max-w-7xl mx-auto">
      
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden shadow-sls-xl min-h-[500px] flex items-center group">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop" 
            alt="Abstract Fluid Background" 
            className="w-full h-full object-cover opacity-90 dark:opacity-60 transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cardinal/90 to-deepPurple/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Hero Content Wrapper */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 gap-12">
            {/* Left Text */}
            <div className="max-w-3xl text-white flex-1">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg">
                  Welcome to <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-200">
                  Vibe Coding
                  </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/95 font-light leading-relaxed max-w-2xl drop-shadow-md">
                  Where English becomes your programming language.
              </p>
            </div>

            {/* Right Video Overlay - Phone Portrait Style */}
            <div className="hidden lg:block w-[280px] xl:w-[300px] shrink-0">
                <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black backdrop-blur-sm">
                    <video 
                        src="https://drive.google.com/uc?export=download&id=11rhvFW5DC5QVrUWUyX97ZwXLaoGUl8FJ"
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
        </div>
      </div>

      {/* Intro Grid - Digestible Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Main Concept - Spans 8 cols */}
        <div className="md:col-span-8 bg-white dark:bg-neutral-darkCard rounded-2xl p-8 border border-neutral-cool/20 shadow-sls-sm flex flex-col justify-center hover:shadow-sls-md transition-shadow duration-300">
           <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-4 flex items-center gap-2">
             <Brain className="text-deepPurple" size={24} />
             Not Inherently Technical
           </h2>
           <p className="text-lg text-neutral-slate dark:text-neutral-cool leading-relaxed">
             Vibe coding requires advanced AI literacy, but the skills you need aren't about syntax or loops. They're about what you already possess: <strong className="text-cardinal dark:text-electric">clear communication</strong> and <strong className="text-cardinal dark:text-electric">creative thinking</strong>.
           </p>
        </div>

        {/* Karpathy Quote - Spans 4 cols */}
        <div className="md:col-span-4 bg-deepPurple/5 dark:bg-deepPurple/10 rounded-2xl p-8 border border-deepPurple/10 flex flex-col justify-center relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-5 text-deepPurple">
             <MessageSquare size={100} />
           </div>
           <blockquote className="relative z-10 italic text-neutral-charcoal dark:text-neutral-offWhite font-medium text-lg leading-relaxed">
             "Where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."
           </blockquote>
           <div className="mt-6 flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-deepPurple/20 flex items-center justify-center text-xs font-bold text-deepPurple">AK</div>
             <span className="text-xs font-bold uppercase tracking-wider text-neutral-slate">Andrej Karpathy</span>
           </div>
        </div>

        {/* The Process - Spans 6 cols */}
        <div className="md:col-span-6 bg-white dark:bg-neutral-darkCard rounded-2xl p-8 border border-neutral-cool/20 shadow-sls-sm hover:shadow-sls-md transition-shadow duration-300">
           <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-4">Intention & Conversation</h3>
           <p className="text-neutral-slate dark:text-neutral-cool leading-relaxed">
             You don't write code; you direct it. Your role shifts to articulating ideas, evaluating outcomes, and refining vision. It's software creation through iterative dialogue.
           </p>
        </div>

        {/* Prerequisites Box - Spans 6 cols */}
        <div className="md:col-span-6 bg-gradient-to-br from-neutral-offWhite to-white dark:from-neutral-darkBg dark:to-neutral-darkCard rounded-2xl p-8 border border-neutral-cool/20 shadow-sls-sm flex flex-col hover:shadow-sls-md transition-shadow duration-300">
           <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-4 flex items-center gap-2">
             <Lightbulb className="text-warmGold" size={24} />
             New to AI?
           </h3>
           <p className="text-neutral-slate dark:text-neutral-cool mb-6 flex-1">
             If you've never used AI, start at the <strong>Learning Hub</strong>. Vibe coding assumes you are comfortable with prompt refinement.
           </p>
           <a 
              href="https://sites.google.com/law.stanford.edu/ailearninghub/home" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-cardinal dark:text-electric hover:translate-x-1 transition-transform w-fit"
            >
              Visit AI Learning Hub <ExternalLink size={14} />
            </a>
        </div>
      </div>

      {/* Course Catalog Section */}
      <div className="pt-8 border-t border-neutral-cool/10">
        <h2 className="text-3xl font-bold mb-8 text-neutral-charcoal dark:text-white flex items-center gap-3">
          <span className="w-1.5 h-8 bg-cardinal rounded-full"></span>
          Curriculum
        </h2>
        
        {/* Prerequisite Check Card */}
        <div className="mb-12 bg-white dark:bg-neutral-darkCard rounded-[40px] border border-neutral-cool/20 p-8 md:p-12 shadow-sls-sm overflow-hidden relative animate-fade-in">
          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            
            {/* Left Column: Readiness Check */}
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cardinal/10 text-cardinal dark:text-electric text-[10px] font-bold uppercase tracking-widest mb-6">
                <AlertCircle size={12} /> PREREQUISITE CHECK
              </div>
              <h2 className="text-3xl font-black text-neutral-charcoal dark:text-white mb-6 tracking-tight leading-tight">Are you ready for a Deep Dive?</h2>
              <p className="text-neutral-slate dark:text-neutral-cool mb-8 leading-relaxed">
                Vibe coding is an advanced technique. If you are new to AI, we recommend taking our foundational intro course first.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-neutral-cool mb-4">STEP-UP: PRACTICE FIRST</h3>
                  <div className="flex flex-col gap-3">
                    <a href="https://sites.google.com/law.stanford.edu/ailearninghub/sls-training-center/custom-gpts" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm font-bold text-neutral-charcoal dark:text-neutral-offWhite hover:text-cardinal dark:hover:text-electric transition-colors">
                      <div className="p-2 bg-neutral-offWhite dark:bg-neutral-darkBg rounded-lg group-hover:bg-cardinal group-hover:text-white transition-colors"><MessageSquare size={14}/></div>
                      Custom ChatGPT GPTs Guide
                    </a>
                    <a href="https://sites.google.com/law.stanford.edu/ailearninghub/sls-training-center/custom-gems" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm font-bold text-neutral-charcoal dark:text-neutral-offWhite hover:text-cardinal dark:hover:text-electric transition-colors">
                      <div className="p-2 bg-neutral-offWhite dark:bg-neutral-darkBg rounded-lg group-hover:bg-cardinal group-hover:text-white transition-colors"><Sparkles size={14}/></div>
                      Custom Gemini Gems Guide
                    </a>
                    <a href="https://sites.google.com/law.stanford.edu/ailearninghub/chatgpt-projects" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm font-bold text-neutral-charcoal dark:text-neutral-offWhite hover:text-cardinal dark:hover:text-electric transition-colors">
                      <div className="p-2 bg-neutral-offWhite dark:bg-neutral-darkBg rounded-lg group-hover:bg-cardinal group-hover:text-white transition-colors"><Layout size={14}/></div>
                      ChatGPT Projects Guide
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Foundations Links */}
            <div className="lg:w-2/3">
              <div className="bg-neutral-offWhite/50 dark:bg-neutral-darkBg/50 p-8 rounded-[32px] border border-neutral-cool/10 h-full">
                <h3 className="text-lg font-bold text-neutral-charcoal dark:text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="text-cardinal dark:text-electric" size={20}/> AI Foundations (DIY Intro)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                  {[
                    { label: "What is generative AI?", url: "https://sites.google.com/law.stanford.edu/ailearninghub/ai-introduction-for-beginners/page-1" },
                    { label: "A Brief History of AI", url: "https://sites.google.com/law.stanford.edu/ailearninghub/ai-introduction-for-beginners/page-2" },
                    { label: "How it Works", url: "https://sites.google.com/law.stanford.edu/ailearninghub/ai-introduction-for-beginners/page-3" },
                    { label: "What it Can Create", url: "https://sites.google.com/law.stanford.edu/ailearninghub/ai-introduction-for-beginners/page-4" },
                    { label: "Responsible AI Use", url: "https://sites.google.com/law.stanford.edu/ailearninghub/ai-introduction-for-beginners/page-5" },
                    { label: "Mastering the Prompt", url: "https://sites.google.com/law.stanford.edu/ailearninghub/ai-introduction-for-beginners/page-6" },
                    { label: "Anatomy of a Modern AI Interface", url: "https://sites.google.com/law.stanford.edu/ailearninghub/ai-introduction-for-beginners/page-7" },
                    { label: "The Art of AI Data", url: "https://sites.google.com/law.stanford.edu/ailearninghub/ai-introduction-for-beginners/page-8" },
                    { label: "AI We Do Not Recommend (and Why)", url: "https://sites.google.com/law.stanford.edu/ailearninghub/ai-introduction-for-beginners/page-9" },
                    { label: "The Future and Your AI Strategy", url: "https://sites.google.com/law.stanford.edu/ailearninghub/ai-introduction-for-beginners/page-10" }
                  ].map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 py-3 border-b border-neutral-cool/10 last:border-0 md:[&:nth-last-child(-n+2)]:border-0"
                    >
                      <span className="text-xs font-black text-cardinal/40 dark:text-electric/40 group-hover:text-cardinal dark:group-hover:text-electric transition-colors w-4">{idx + 1}</span>
                      <span className="text-sm font-medium text-neutral-slate dark:text-neutral-cool group-hover:text-cardinal dark:group-hover:text-electric transition-colors">{link.label}</span>
                      <ArrowRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 text-cardinal dark:text-electric transition-all -translate-x-2 group-hover:translate-x-0" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Background Watermark Icon */}
          <AlertCircle size={240} className="absolute -bottom-20 -left-20 text-cardinal/5 dark:text-white/5 pointer-events-none" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/apis" className="group block h-full">
             <div className="h-full bg-white dark:bg-neutral-darkCard rounded-2xl border border-neutral-cool/20 shadow-sls-sm hover:shadow-sls-lg hover:border-cardinal/40 transition-all duration-300 p-8 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                   <Server size={120} />
                </div>
                
                <div className="w-12 h-12 rounded-xl bg-cardinal/10 flex items-center justify-center text-cardinal mb-6 transition-transform group-hover:scale-110 duration-300">
                   <Server size={24} />
                </div>
                
                <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2 group-hover:text-cardinal dark:group-hover:text-electric transition-colors">APIs & Integration</h3>
                <p className="text-neutral-slate dark:text-neutral-cool mb-8 flex-1 leading-relaxed z-10">
                  Master the connectivity layer of the modern web. Learn how systems talk, trade data, and execute actions.
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-cool/10 z-10">
                   <span className="text-xs font-bold uppercase tracking-wider text-neutral-slate/60 dark:text-neutral-cool/50">4 Modules</span>
                   <span className="inline-flex items-center gap-2 text-sm font-semibold text-cardinal dark:text-electric group-hover:translate-x-1 transition-transform">
                     Start Learning <ArrowRight size={16} />
                   </span>
                </div>
             </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;