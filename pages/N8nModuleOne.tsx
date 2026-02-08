import React, { useState } from 'react';
import { ArrowLeft, Share2, Info, Workflow, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const N8nModuleOne: React.FC = () => {
  // Using the Google Drive Folder ID provided. 
  // Note: For best results, this should be replaced with the ID of the specific video file inside the folder.
  const fileId = "1TWRNfWyypFzHwosHbJ4pO88acio3A5wN";
  // The 'folders' endpoint is used for folders, 'file' for files. Adjusting url to attempt folder view if video direct link isn't available.
  const embedUrl = `https://drive.google.com/drive/folders/${fileId}?usp=sharing`;

  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const sampleJSON = `{
  "nodes": [
    {
      "parameters": {},
      "name": "Start",
      "type": "n8n-nodes-base.start",
      "typeVersion": 1,
      "position": [250, 300]
    }
  ],
  "connections": {}
}`;

  return (
    <div className="max-w-[720px] mx-auto space-y-8 pb-16">
      {/* Header / Breadcrumbs */}
      <div className="space-y-6">
        <Link 
          to="/n8n" 
          className="inline-flex items-center text-sm font-medium text-neutral-slate dark:text-neutral-cool hover:text-warmGold transition-colors w-fit group"
        >
          <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to n8n Course
        </Link>
        
        <div className="space-y-2">
          <div className="flex items-center gap-3">
             <span className="px-3 py-1 rounded-full bg-warmGold/10 text-warmGold text-xs font-bold uppercase tracking-wider">Module 1</span>
             <span className="text-neutral-cool">•</span>
             <span className="text-sm text-neutral-slate dark:text-neutral-cool font-medium">Foundations</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-charcoal dark:text-white tracking-tight leading-tight">Introduction to n8n</h1>
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
          {/* Note: Embedding a Google Drive Folder. Ideally this is a direct video file embed. */}
          <iframe
            src={embedUrl}
            title="Introduction to n8n"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Workshop Resources */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white flex items-center gap-2">
          <Workflow size={24} className="text-warmGold" />
          First Workflow
        </h2>
        <div className="bg-neutral-offWhite dark:bg-neutral-darkCard/50 border border-neutral-cool/20 rounded-xl p-6 space-y-6">
          <p className="text-neutral-slate dark:text-neutral-cool">
            n8n workflows are represented as JSON. Below is the structure of a basic "Start" node.
          </p>

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg border border-neutral-700">
            <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-neutral-700">
              <span className="text-xs font-mono text-neutral-400">workflow.json</span>
              <button 
                onClick={() => handleCopy(sampleJSON, 'json')}
                className="text-xs flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors uppercase font-semibold tracking-wider"
              >
                {copied === 'json' ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                {copied === 'json' ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono text-orange-300">
                <code>{sampleJSON}</code>
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
            Welcome to the world of <span className="text-warmGold font-medium">n8n</span>. In this introductory module, we explore the interface, understand the concept of nodes and connections, and learn how to navigate the canvas. n8n allows you to automate tasks by visually connecting different services together.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1e272e] to-[#2D3436] rounded-lg p-8 border-l-4 border-warmGold shadow-sls-lg text-neutral-offWhite font-mono relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10">
              <Workflow size={120} />
           </div>
           <h3 className="text-sm font-bold uppercase tracking-wider text-warmGold mb-6 font-sans">Core Concepts</h3>
           <ul className="space-y-4 relative z-10">
             {['Nodes & Connections', 'The Canvas', 'Workflow Settings', 'Executions View'].map((item, i) => (
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

export default N8nModuleOne;