import React, { useState } from 'react';
import { ArrowLeft, Share2, Info, Activity, Bug, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModuleSix: React.FC = () => {
  const fileId = "1PylZWOtW9OUGXjAKgSSz5SR9WezDWZHG";
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const testCase = `describe('Agent Contract Review', () => {
  it('should flag high-risk clauses', async () => {
    const doc = await loadFixture('risky_contract.pdf');
    const result = await agent.analyze(doc);
    expect(result.riskScore).toBeGreaterThan(80);
    expect(result.flags).toContain('Indemnification');
  });
});`;

  const monitorConfig = `{
  "alerting": {
    "latency_threshold_ms": 1500,
    "error_rate_threshold": 0.05,
    "channels": ["slack-ops", "email-admin"],
    "log_level": "DEBUG"
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
             <span className="px-3 py-1 rounded-full bg-functional-warning/10 text-functional-warning text-xs font-bold uppercase tracking-wider">Module 6</span>
             <span className="text-neutral-cool">•</span>
             <span className="text-sm text-neutral-slate font-medium">Expert</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-charcoal dark:text-white tracking-tight leading-tight">Testing & Observability</h1>
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
            title="Module 6 Video"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Workshop Resources */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white flex items-center gap-2">
          <Bug size={24} className="text-functional-warning" />
          Test Suite & Config
        </h2>
        <div className="bg-neutral-offWhite dark:bg-neutral-darkCard/50 border border-neutral-cool/20 rounded-xl p-6 space-y-6">
          <p className="text-neutral-slate dark:text-neutral-cool">
            Ensure your agents perform reliably with these testing templates.
          </p>

          {/* Snippet 1 */}
          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg border border-neutral-700">
            <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-neutral-700">
              <span className="text-xs font-mono text-neutral-400">agent_test.js</span>
              <button 
                onClick={() => handleCopy(testCase, 'test')}
                className="text-xs flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors uppercase font-semibold tracking-wider"
              >
                {copied === 'test' ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                {copied === 'test' ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono text-orange-300">
                <code>{testCase}</code>
              </pre>
            </div>
          </div>

          {/* Snippet 2 */}
          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg border border-neutral-700">
            <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-neutral-700">
              <span className="text-xs font-mono text-neutral-400">monitoring.json</span>
              <button 
                onClick={() => handleCopy(monitorConfig, 'monitor')}
                className="text-xs flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors uppercase font-semibold tracking-wider"
              >
                {copied === 'monitor' ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                {copied === 'monitor' ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono text-blue-300">
                <code>{monitorConfig}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Content Meta Info */}
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white dark:bg-neutral-darkCard p-8 rounded-xl border border-neutral-cool/30 shadow-sls-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-charcoal dark:text-white">
            <Info size={20} className="text-functional-warning" />
            About this Module
          </h3>
          <p className="text-lg text-neutral-slate dark:text-neutral-cool leading-relaxed">
            Deployment is just the beginning. In this module, we focus on <strong className="text-functional-warning">Testing & Observability</strong>. Learn how to write unit tests for your AI agents and set up monitoring to catch hallucinations or errors before they affect client work.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1e272e] to-[#000000] rounded-lg p-8 border-l-4 border-functional-warning shadow-sls-lg text-neutral-offWhite font-mono relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10">
              <Activity size={120} />
           </div>
           <h3 className="text-sm font-bold uppercase tracking-wider text-functional-warning mb-6 font-sans">Reliability Checklist</h3>
           <ul className="space-y-4 relative z-10">
             {['Unit Testing Prompts', 'Regression Testing', 'Latency Monitoring', 'Error Budgets'].map((item, i) => (
               <li key={i} className="flex items-center gap-4 group">
                 <div className="w-6 h-6 rounded-full bg-functional-warning/20 flex items-center justify-center text-functional-warning group-hover:bg-functional-warning group-hover:text-neutral-charcoal transition-colors border border-functional-warning/30">
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

export default ModuleSix;