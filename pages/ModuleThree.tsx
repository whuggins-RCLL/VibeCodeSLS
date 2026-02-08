import React, { useState } from 'react';
import { ArrowLeft, Share2, Info, Network, Server, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModuleThree: React.FC = () => {
  const fileId = "1K8QT28m0eTpnknmUzqb9exxlmINknlhC";
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const systemConfig = `services:
  - name: "case-management"
    port: 8080
    dependencies: ["auth-service", "database"]
  - name: "client-portal"
    port: 3000
    dependencies: ["case-management"]`;

  return (
    <div className="max-w-[720px] mx-auto space-y-8 pb-16">
      {/* Header / Breadcrumbs */}
      <div className="space-y-6">
        <Link 
          to="/apis" 
          className="inline-flex items-center text-sm font-medium text-neutral-slate dark:text-neutral-cool hover:text-cardinal dark:hover:text-electric transition-colors w-fit group"
        >
          <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to API Course
        </Link>
        
        <div className="space-y-2">
          <div className="flex items-center gap-3">
             <span className="px-3 py-1 rounded-full bg-warmGold/10 text-warmGold text-xs font-bold uppercase tracking-wider">Module 3</span>
             <span className="text-neutral-cool">•</span>
             <span className="text-sm text-neutral-slate dark:text-neutral-cool font-medium">Advanced</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-charcoal dark:text-white tracking-tight leading-tight">System Architecture</h1>
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
            title="Module 3 Video"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Workshop Resources */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white flex items-center gap-2">
          <Server size={24} className="text-warmGold" />
          System Design Lab
        </h2>
        <div className="bg-neutral-offWhite dark:bg-neutral-darkCard/50 border border-neutral-cool/20 rounded-xl p-6 space-y-6">
          <p className="text-neutral-slate dark:text-neutral-cool">
            Use this YAML configuration for the microservices exercise.
          </p>

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg border border-neutral-700">
            <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-neutral-700">
              <span className="text-xs font-mono text-neutral-400">docker-compose.yml</span>
              <button 
                onClick={() => handleCopy(systemConfig, 'yaml')}
                className="text-xs flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors uppercase font-semibold tracking-wider"
              >
                {copied === 'yaml' ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                {copied === 'yaml' ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono text-purple-300">
                <code>{systemConfig}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Content Meta Info */}
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white dark:bg-neutral-darkCard p-8 rounded-xl border border-neutral-cool/30 shadow-sls-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-charcoal dark:text-white">
            <Info size={20} className="text-warmGold" />
            About this Module
          </h3>
          <p className="text-lg text-neutral-slate dark:text-neutral-cool leading-relaxed">
            In our third module, we examine the broader context of software architecture. 
            Understanding how individual APIs fit into larger, distributed systems is crucial for 
            modern legal technology implementations.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1e272e] to-[#2D3436] rounded-lg p-8 border-l-4 border-warmGold shadow-sls-lg text-neutral-offWhite font-mono relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10">
              <Network size={120} />
           </div>
           <h3 className="text-sm font-bold uppercase tracking-wider text-warmGold mb-6 font-sans">Core Concepts</h3>
           <ul className="space-y-4 relative z-10">
             {['Distributed Systems', 'Microservices vs Monoliths', 'Scalability Patterns', 'API Gateway Strategies'].map((item, i) => (
               <li key={i} className="flex items-center gap-4 group">
                 <div className="w-6 h-6 rounded-full bg-warmGold/20 flex items-center justify-center text-warmGold group-hover:bg-warmGold group-hover:text-neutral-charcoal transition-colors border border-warmGold/30">
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

export default ModuleThree;