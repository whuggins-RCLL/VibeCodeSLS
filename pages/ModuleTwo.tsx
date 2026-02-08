import React, { useState } from 'react';
import { ArrowLeft, Share2, Info, ShieldCheck, Terminal, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModuleTwo: React.FC = () => {
  const fileId = "1_fyh9Hhc8D7AmLc7uWeNTXnZ3ZWYVVQL";
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const authHeader = `Authorization: Bearer sk_live_51M7...`;
  const errorResponse = `{
  "error": {
    "code": "unauthorized",
    "message": "Invalid API Key provided."
  }
}`;

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
             <span className="px-3 py-1 rounded-full bg-electric/10 text-electric text-xs font-bold uppercase tracking-wider">Module 2</span>
             <span className="text-neutral-cool">•</span>
             <span className="text-sm text-neutral-slate dark:text-neutral-cool font-medium">Intermediate</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-charcoal dark:text-white tracking-tight leading-tight">Advanced Integration</h1>
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
            title="Module 2 Video"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Workshop Resources */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white flex items-center gap-2">
          <Terminal size={24} className="text-electric" />
          Lab Snippets
        </h2>
        <div className="bg-neutral-offWhite dark:bg-neutral-darkCard/50 border border-neutral-cool/20 rounded-xl p-6 space-y-6">
          <p className="text-neutral-slate dark:text-neutral-cool">
            Copy these snippets for the Authentication testing segment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Header Snippet */}
            <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg border border-neutral-700">
                <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-neutral-700">
                <span className="text-xs font-mono text-neutral-400">headers.txt</span>
                <button 
                    onClick={() => handleCopy(authHeader, 'auth')}
                    className="text-xs flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors uppercase font-semibold tracking-wider"
                >
                    {copied === 'auth' ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                    {copied === 'auth' ? 'Copied' : 'Copy'}
                </button>
                </div>
                <div className="p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-yellow-300">
                    <code>{authHeader}</code>
                </pre>
                </div>
            </div>

            {/* Error Response Snippet */}
            <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg border border-neutral-700">
                <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-neutral-700">
                <span className="text-xs font-mono text-neutral-400">error.json</span>
                <button 
                    onClick={() => handleCopy(errorResponse, 'err')}
                    className="text-xs flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors uppercase font-semibold tracking-wider"
                >
                    {copied === 'err' ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                    {copied === 'err' ? 'Copied' : 'Copy'}
                </button>
                </div>
                <div className="p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-red-400">
                    <code>{errorResponse}</code>
                </pre>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Meta Info */}
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white dark:bg-neutral-darkCard p-8 rounded-xl border border-neutral-cool/30 shadow-sls-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-charcoal dark:text-white">
            <Info size={20} className="text-deepPurple" />
            About this Module
          </h3>
          <p className="text-lg text-neutral-slate dark:text-neutral-cool leading-relaxed">
            Welcome to the second installment of the Vibe Code curriculum. 
            Building on our understanding of APIs, we dive deeper into the technical infrastructure. 
            This module focuses on <span className="text-deepPurple font-medium">security, data flow,</span> and practical implementation.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1e272e] to-[#000000] rounded-lg p-8 border-l-4 border-electric shadow-sls-lg text-neutral-offWhite font-mono relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldCheck size={120} />
           </div>
           <h3 className="text-sm font-bold uppercase tracking-wider text-electric mb-6 font-sans">Core Concepts</h3>
           <ul className="space-y-4 relative z-10">
             {['Advanced Integration Patterns', 'Data Flow Analysis', 'Security Basics (OAuth)', 'Practical Application'].map((item, i) => (
               <li key={i} className="flex items-center gap-4 group">
                 <div className="w-6 h-6 rounded-full bg-electric/20 flex items-center justify-center text-electric group-hover:bg-electric group-hover:text-white transition-colors border border-electric/30">
                    <span className="text-xs">{i + 1}</span>
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

export default ModuleTwo;