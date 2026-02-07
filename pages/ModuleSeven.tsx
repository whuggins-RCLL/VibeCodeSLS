import React, { useState } from 'react';
import { ArrowLeft, Share2, Info, Rocket, Sparkles, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModuleSeven: React.FC = () => {
  const fileId = "1Y3lbwE-CfcXIy0B3-_-MLwHhggSrtSX_";
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const ethicsPolicy = `{
  "ethics_policy": {
    "human_in_the_loop": true,
    "transparency": "maximum",
    "bias_mitigation": "active",
    "data_privacy": "strict"
  }
}`;

  const evolutionLoop = `// The loop of continuous improvement
async function evolve() {
  while(true) {
    const insights = await agent.reflect();
    await agent.optimize(insights);
    await human.review(); // Crucial step
  }
}`;

  return (
    <div className="max-w-[720px] mx-auto space-y-8 pb-16">
      {/* Header / Breadcrumbs */}
      <div className="space-y-6">
        <Link 
          to="/apis" 
          className="inline-flex items-center text-sm font-medium text-neutral-slate hover:text-cardinal transition-colors w-fit group"
        >
          <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to API Course
        </Link>
        
        <div className="space-y-2">
          <div className="flex items-center gap-3">
             <span className="px-3 py-1 rounded-full bg-electric/10 text-electric text-xs font-bold uppercase tracking-wider">Module 7</span>
             <span className="text-neutral-cool">•</span>
             <span className="text-sm text-neutral-slate font-medium">Visionary</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-charcoal dark:text-white tracking-tight leading-tight">The Future of Vibe Coding</h1>
        </div>

        <div className="flex items-center justify-end py-4 border-b border-neutral-cool/20">
           <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-neutral-charcoal dark:text-neutral-offWhite bg-white dark:bg-neutral-darkCard border border-neutral-cool/30 rounded-lg hover:bg-neutral-offWhite dark:hover:bg-neutral-cool/10 hover:-translate-y-0.5 transition-all shadow-sls-sm">
            <Share2 size={16} /> Share
           </button>
        </div>
      </div>

      {/* Main Video Embed Container */}
      <div className="w-full bg-black rounded-xl overflow-hidden shadow-sls-xl ring-1 ring-neutral-charcoal/5 dark:ring-neutral-offWhite/10 group">
        <div className="relative w-full" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
          <iframe
            src={embedUrl}
            title="Module 7 Video"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Workshop Resources */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white flex items-center gap-2">
          <Sparkles size={24} className="text-electric" />
          The Final Manifest
        </h2>
        <div className="bg-neutral-offWhite dark:bg-neutral-darkCard/50 border border-neutral-cool/20 rounded-xl p-6 space-y-6">
          <p className="text-neutral-slate dark:text-neutral-cool">
            As you build the future, adhere to these core principles of responsible AI development.
          </p>

          {/* Snippet 1 */}
          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg border border-neutral-700">
            <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-neutral-700">
              <span className="text-xs font-mono text-neutral-400">ethics.json</span>
              <button 
                onClick={() => handleCopy(ethicsPolicy, 'ethics')}
                className="text-xs flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors uppercase font-semibold tracking-wider"
              >
                {copied === 'ethics' ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                {copied === 'ethics' ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono text-purple-300">
                <code>{ethicsPolicy}</code>
              </pre>
            </div>
          </div>

          {/* Snippet 2 */}
          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg border border-neutral-700">
            <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-neutral-700">
              <span className="text-xs font-mono text-neutral-400">evolution.js</span>
              <button 
                onClick={() => handleCopy(evolutionLoop, 'evolve')}
                className="text-xs flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors uppercase font-semibold tracking-wider"
              >
                {copied === 'evolve' ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                {copied === 'evolve' ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono text-electric">
                <code>{evolutionLoop}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Content Meta Info */}
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white dark:bg-neutral-darkCard p-8 rounded-xl border border-neutral-cool/30 shadow-sls-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-charcoal dark:text-white">
            <Info size={20} className="text-electric" />
            About this Module
          </h3>
          <p className="text-lg text-neutral-slate dark:text-neutral-cool leading-relaxed">
            Congratulations on reaching the final module. Here we step back to look at the <strong className="text-electric">bigger picture</strong>. We discuss the ethical implications of autonomous code, the future of the "Vibe Protocol", and how you can continue to lead in this rapidly evolving field.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1e272e] to-[#000000] rounded-lg p-8 border-l-4 border-electric shadow-sls-lg text-neutral-offWhite font-mono relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10">
              <Rocket size={120} />
           </div>
           <h3 className="text-sm font-bold uppercase tracking-wider text-electric mb-6 font-sans">Next Steps</h3>
           <ul className="space-y-4 relative z-10">
             {['Build a Capstone Project', 'Join the AI Community', 'Continuous Ethics Review', 'Mentorship'].map((item, i) => (
               <li key={i} className="flex items-center gap-4 group">
                 <div className="w-6 h-6 rounded-full bg-electric/20 flex items-center justify-center text-electric group-hover:bg-electric group-hover:text-white transition-colors border border-electric/30">
                    <span className="text-xs font-bold">{i + 1}</span>
                 </div>
                 <span className="text-neutral-offWhite/90">{item}</span>
               </li>
             ))}
           </ul>
        </div>
      </div>
    </div>
  );
};

export default ModuleSeven;