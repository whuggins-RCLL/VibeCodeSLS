import React, { useState } from 'react';
import { ArrowLeft, Share2, Info, Code, Copy, Check, FileJson } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModuleOne: React.FC = () => {
  const fileId = "1CII6ykZ37UuFtAxR2F89JgrBniRzEk_S";
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const snippet1 = `{
  "student_id": "sls_2026",
  "name": "Jane Doe",
  "courses": ["Law & Tech", "Vibe Code 101"],
  "active": true
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
             <span className="px-3 py-1 rounded-full bg-cardinal/10 text-cardinal text-xs font-bold uppercase tracking-wider">Module 1</span>
             <span className="text-neutral-cool">•</span>
             <span className="text-sm text-neutral-slate font-medium">Core Concepts</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-charcoal dark:text-white tracking-tight leading-tight">What are APIs?</h1>
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
            title="Understanding APIs Video"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Workshop Resources Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white flex items-center gap-2">
          <FileJson size={24} className="text-cardinal" />
          Workshop Resources
        </h2>
        <div className="bg-neutral-offWhite dark:bg-neutral-darkCard/50 border border-neutral-cool/20 rounded-xl p-6 space-y-6">
          <p className="text-neutral-slate dark:text-neutral-cool">
            Use the following JSON object for the "Request/Response" activity in the video.
          </p>

          {/* Copy Library Item */}
          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg border border-neutral-700">
            <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-neutral-700">
              <span className="text-xs font-mono text-neutral-400">student_profile.json</span>
              <button 
                onClick={() => handleCopy(snippet1, 's1')}
                className="text-xs flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors uppercase font-semibold tracking-wider"
              >
                {copied === 's1' ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                {copied === 's1' ? 'Copied' : 'Copy Code'}
              </button>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono text-blue-300 leading-relaxed">
                <code>{snippet1}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Content Meta Info */}
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white dark:bg-neutral-darkCard p-8 rounded-xl border border-neutral-cool/30 shadow-sls-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-charcoal dark:text-white">
            <Info size={20} className="text-cardinal" />
            About this Module
          </h3>
          <p className="text-lg text-neutral-slate dark:text-neutral-cool leading-relaxed">
            In this session, we break down the concept of Application Programming Interfaces (APIs). 
            You will learn how software systems communicate with each other, why APIs are the 
            <span className="text-cardinal font-medium"> "waiters" of the web</span>, and how legal tech leverages these connections to automate workflows.
          </p>
        </div>

        <div className="bg-gradient-to-br from-neutral-charcoal to-neutral-darkBg rounded-lg p-8 border-l-4 border-deepPurple shadow-sls-lg text-neutral-offWhite font-mono relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10">
              <Code size={120} />
           </div>
           <h3 className="text-sm font-bold uppercase tracking-wider text-deepPurple mb-6 font-sans">Key Takeaways</h3>
           <ul className="space-y-4 relative z-10">
             {['What is an API?', 'Request & Response Cycle', 'JSON Data Format', 'Real-world Legal Examples'].map((item, i) => (
               <li key={i} className="flex items-center gap-4 group">
                 <div className="w-6 h-6 rounded-full bg-deepPurple/20 flex items-center justify-center text-deepPurple group-hover:bg-deepPurple group-hover:text-white transition-colors border border-deepPurple/30">
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

export default ModuleOne;