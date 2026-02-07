import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Key, 
  RefreshCw,
  MessageSquare,
  Zap,
  CheckCircle2,
  Layout,
  Play,
  ArrowRight
} from 'lucide-react';

const IntroToVibeCoding: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-24">
      {/* Header / Breadcrumbs */}
      <div className="space-y-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm font-medium text-neutral-slate hover:text-cardinal transition-colors w-fit group"
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
            <Sparkles size={12} /> Session One
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
            Vibe Coding in <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-warmGold">Google AI Studio</span>
          </h1>
          <p className="text-xl text-neutral-offWhite/90 max-w-2xl leading-relaxed font-light">
            Building software by describing what you want in plain language, then iterating the source code through conversation with Gen AI.
          </p>
        </div>
      </section>

      {/* What is Vibe Coding? */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white mb-6">What is "vibe coding"?</h2>
          <div className="prose dark:prose-invert text-neutral-slate dark:text-neutral-cool text-lg leading-relaxed space-y-4">
            <p>
              It is the process of building software by describing your vision in plain English (the "vibe"), and letting Artificial Intelligence handle the syntax and structure.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="text-functional-success mt-1 flex-shrink-0" size={20} />
                <span><strong>No coding experience required</strong> (though it helps to have it).</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="text-functional-success mt-1 flex-shrink-0" size={20} />
                <span>You guide the vision in plain text; <strong>AI writes the code</strong>.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="text-functional-success mt-1 flex-shrink-0" size={20} />
                <span>It is inherently <strong>iterative</strong>. You refine as you go.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-neutral-offWhite dark:bg-white/5 rounded-2xl p-8 border border-neutral-cool/20 flex flex-col justify-center h-full">
           <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-4 flex items-center gap-2">
             <Zap className="text-warmGold" /> Why Vibe Code?
           </h3>
           <p className="text-neutral-slate dark:text-neutral-cool mb-6">
             Create fast prototypes. Move from <strong>idea</strong> to <strong>tool</strong> without needing to hire developers or spend years learning syntax.
           </p>
           <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-neutral-darkCard rounded-xl border border-neutral-cool/10 shadow-sm">
                <Layout size={20} className="text-cardinal mb-2" />
                <span className="text-sm font-bold text-neutral-charcoal dark:text-white">Web Apps</span>
              </div>
              <div className="p-4 bg-white dark:bg-neutral-darkCard rounded-xl border border-neutral-cool/10 shadow-sm">
                <Layout size={20} className="text-deepPurple mb-2" />
                <span className="text-sm font-bold text-neutral-charcoal dark:text-white">Websites</span>
              </div>
              <div className="p-4 bg-white dark:bg-neutral-darkCard rounded-xl border border-neutral-cool/10 shadow-sm">
                <Cpu size={20} className="text-electric mb-2" />
                <span className="text-sm font-bold text-neutral-charcoal dark:text-white">Programs</span>
              </div>
              <div className="p-4 bg-white dark:bg-neutral-darkCard rounded-xl border border-neutral-cool/10 shadow-sm">
                <ShieldCheck size={20} className="text-functional-success mb-2" />
                <span className="text-sm font-bold text-neutral-charcoal dark:text-white">Data Systems</span>
              </div>
           </div>
        </div>
      </section>

      {/* The Process Cycle */}
      <section className="bg-white dark:bg-neutral-darkCard rounded-3xl p-8 md:p-12 border border-neutral-cool/20 shadow-sls-sm">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white mb-4">The Vibe Coding Process</h2>
          <p className="text-neutral-slate dark:text-neutral-cool text-lg">It's a loop, not a straight line. Play this on repeat.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Cycle Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-electric/20 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src="https://i.postimg.cc/fRfCBSQD/Untitled-design-(4).png" 
                alt="Vibe Coding Cycle: Describe, Generate, Test, Refine" 
                className="relative z-10 w-full max-w-[500px] drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </div>

          {/* Steps Description */}
          <div className="w-full lg:w-1/2 space-y-6">
             <ProcessStep 
               number="1" 
               title="Describe" 
               desc="Articulate your idea in plain English. Be specific about what you want." 
             />
             <ProcessStep 
               number="2" 
               title="Generate" 
               desc="Let the AI write the initial code based on your description." 
             />
             <ProcessStep 
               number="3" 
               title="Test" 
               desc="Run the code. Does it work? Does it look right? Find the gaps." 
             />
             <ProcessStep 
               number="4" 
               title="Refine" 
               desc="Tell the AI what to fix. 'Make the button blue,' 'Fix the error,' 'Add a scoreboard'." 
             />
             <div className="mt-6 pt-6 border-t border-neutral-cool/20 flex gap-3 text-neutral-slate dark:text-neutral-cool italic text-sm">
                <RefreshCw size={16} /> Inherently iterative! Don't expect perfection on the first try.
             </div>
          </div>
        </div>
      </section>

      {/* The Tool: Google AI Studio */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e272e] to-[#000000] p-8 md:p-12 text-white shadow-sls-xl border border-white/10">
         <div className="absolute top-0 right-0 p-8 opacity-10">
            <Cpu size={200} />
         </div>
         
         <div className="relative z-10">
           <div className="flex items-center gap-3 mb-6">
             <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
               <Sparkles size={24} className="text-white" />
             </div>
             <h2 className="text-3xl font-bold">The Tool: Google AI Studio</h2>
           </div>
           
           <p className="text-xl text-neutral-cool mb-8 max-w-3xl">
             We recommend starting with <strong>Google AI Studio</strong>. It provides a professional, "under-the-hood" view of the models without the complexity of a full IDE.
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard 
                icon={<Zap />} 
                title="Gemini 3 Models" 
                desc="Access to Google's latest, most capable reasoning models." 
              />
              <FeatureCard 
                icon={<Layout />} 
                title="1M Token Context" 
                desc="Can process massive amounts of information (books, codebases) at once." 
              />
              <FeatureCard 
                icon={<Play />} 
                title="Preview Tools" 
                desc="Instant interactive previews for web apps (HTML/JS/React)." 
              />
              <FeatureCard 
                icon={<ShieldCheck />} 
                title="Free Tier" 
                desc="Generous free tier suitable for learning and prototyping." 
              />
           </div>

           <div className="mt-10">
             <a 
               href="https://aistudio.google.com/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-charcoal rounded-full font-bold hover:bg-neutral-offWhite transition-colors transform hover:-translate-y-1"
             >
               Launch Google AI Studio <ArrowRight size={18} />
             </a>
           </div>
         </div>
      </section>

      {/* 3 Ground Rules */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white text-center">Three Ground Rules</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RuleCard 
            number="1"
            title="YOU are in Control"
            icon={<RefreshCw size={32} className="text-deepPurple" />}
            points={[
              "Craft clear prompts",
              "Learn a bit of coding",
              "Reiterate and refine",
              "Remember: it's not magic!"
            ]}
          />
          <RuleCard 
            number="2"
            title="Privacy, Ethics & Safety"
            icon={<ShieldCheck size={32} className="text-functional-success" />}
            points={[
              "Follow the 'NY Times Rule' for prompting",
              "Read the terms of service",
              "Watch for bias & errors",
              "You are responsible for what you create"
            ]}
          />
          <RuleCard 
            number="3"
            title="Keep API Keys Safe"
            icon={<Key size={32} className="text-warmGold" />}
            points={[
              "Never share your keys publicly",
              "Never hardcode keys in shared code",
              "Free tiers have limits, but compromised keys cause headaches",
              "Use environment variables"
            ]}
          />
        </div>
      </section>

      {/* Example Test Case */}
      <section className="bg-neutral-offWhite dark:bg-white/5 border border-neutral-cool/20 rounded-3xl p-8 md:p-12">
         <div className="max-w-3xl mx-auto">
           <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-cardinal text-white text-xs font-bold uppercase tracking-wider rounded-full">Test Case</span>
              <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Example: The Flashcard Maker</h2>
           </div>
           
           <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8">
             Let's apply the process. Imagine you have a CSV file of legal terms, but reading a spreadsheet is boring. You want a study game.
           </p>

           <div className="space-y-6 relative border-l-2 border-neutral-cool/20 ml-4 pl-8 py-2">
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-cardinal border-4 border-white dark:border-neutral-darkBg"></span>
                <h4 className="font-bold text-neutral-charcoal dark:text-white text-lg">1. The Problem</h4>
                <p className="text-neutral-slate dark:text-neutral-cool">"I have a spreadsheet of questions and answers, but I want an interactive app to test myself."</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-neutral-cool border-4 border-white dark:border-neutral-darkBg"></span>
                <h4 className="font-bold text-neutral-charcoal dark:text-white text-lg">2. Describe & Generate</h4>
                <p className="text-neutral-slate dark:text-neutral-cool italic bg-white dark:bg-black/20 p-4 rounded-lg border border-neutral-cool/10 mt-2">
                  "Create an interactive flashcard generator. The user should be able to upload a .csv file (like the one attached) and the app should create a flashcard game where they can click the card to see the answer."
                </p>
              </div>
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-neutral-cool border-4 border-white dark:border-neutral-darkBg"></span>
                <h4 className="font-bold text-neutral-charcoal dark:text-white text-lg">3. Test & Refine</h4>
                <p className="text-neutral-slate dark:text-neutral-cool">
                  "It works, but it's too easy to cheat. <strong>Build a feature</strong> that lets the user pick A, B, C, D choices. Have Gemini evaluate if their choice is correct."
                </p>
              </div>
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-neutral-cool border-4 border-white dark:border-neutral-darkBg"></span>
                <h4 className="font-bold text-neutral-charcoal dark:text-white text-lg">4. Share</h4>
                <p className="text-neutral-slate dark:text-neutral-cool">Deploy the app and send the link to your study group for feedback.</p>
              </div>
           </div>
         </div>
      </section>

      {/* Call to Action */}
      <div className="text-center pt-8">
        <p className="text-neutral-slate dark:text-neutral-cool mb-6">Ready to try it yourself?</p>
        <div className="flex justify-center gap-4">
           <a 
             href="https://aistudio.google.com/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="px-8 py-4 bg-cardinal text-white font-bold rounded-xl shadow-lg hover:bg-cardinal-dark transition-colors hover:-translate-y-1"
           >
             Open Google AI Studio
           </a>
           <a 
             href="https://sites.google.com/law.stanford.edu/ailearninghub/home" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="px-8 py-4 bg-white dark:bg-neutral-darkCard text-neutral-charcoal dark:text-white border border-neutral-cool/20 font-bold rounded-xl shadow-lg hover:bg-neutral-offWhite dark:hover:bg-neutral-cool/10 transition-colors hover:-translate-y-1"
           >
             Visit Learning Hub
           </a>
        </div>
      </div>
    </div>
  );
};

/* --- Helper Components --- */

const ProcessStep: React.FC<{ number: string; title: string; desc: string }> = ({ number, title, desc }) => (
  <div className="flex gap-4 p-4 rounded-xl hover:bg-neutral-offWhite dark:hover:bg-white/5 transition-colors">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cardinal text-white flex items-center justify-center font-bold text-lg shadow-md">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-1">{title}</h3>
      <p className="text-neutral-slate dark:text-neutral-cool leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  </div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
    <div className="mb-4 text-electric">{icon}</div>
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-sm text-neutral-cool leading-relaxed">{desc}</p>
  </div>
);

const RuleCard: React.FC<{ number: string; title: string; icon: React.ReactNode; points: string[] }> = ({ number, title, icon, points }) => (
  <div className="bg-white dark:bg-neutral-darkCard p-8 rounded-2xl border border-neutral-cool/20 shadow-sls-sm flex flex-col h-full hover:-translate-y-1 transition-transform">
    <div className="flex justify-between items-start mb-6">
       <div className="p-3 bg-neutral-offWhite dark:bg-white/5 rounded-xl border border-neutral-cool/10">
         {icon}
       </div>
       <span className="text-4xl font-black text-neutral-cool/20">{number}</span>
    </div>
    <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-4">{title}</h3>
    <ul className="space-y-3 flex-1">
      {points.map((point, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-neutral-slate dark:text-neutral-cool">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cardinal dark:bg-electric flex-shrink-0"></span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default IntroToVibeCoding;