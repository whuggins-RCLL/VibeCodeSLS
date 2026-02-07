import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Layers, 
  Network, 
  ChevronRight, 
  ArrowLeft, 
  Workflow, 
  Settings, 
  Zap, 
  Database, 
  GitMerge, 
  ExternalLink,
  BookOpen,
  Wrench,
  Bot,
  Code,
  Cloud
} from 'lucide-react';

const N8nCurriculum: React.FC = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="space-y-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm font-medium text-neutral-slate hover:text-cardinal transition-colors w-fit group"
        >
          <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
        </Link>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-cool/20 pb-8">
          <div>
            <h1 className="text-4xl font-bold text-neutral-charcoal dark:text-white tracking-tight mb-2">n8n Automation</h1>
            <p className="text-lg text-neutral-slate dark:text-neutral-cool">Build powerful workflows with node-based visual programming.</p>
          </div>
          <div className="flex items-center gap-2">
             <div className="px-3 py-1 rounded-full bg-warmGold/10 text-warmGold text-xs font-bold uppercase tracking-wider">6 Modules</div>
             <div className="px-3 py-1 rounded-full bg-neutral-offWhite dark:bg-neutral-darkCard text-neutral-slate text-xs font-bold uppercase tracking-wider">~60 Minutes</div>
          </div>
        </div>
      </div>

      {/* Module List */}
      <div className="space-y-4">
          
        {/* Module 1 */}
        <Link to="/n8n/module-1" className="block group">
          <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/30 shadow-sls-sm hover:shadow-sls-md hover:border-warmGold/30 transition-all duration-200 flex items-center justify-between relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-warmGold group-hover:w-2 transition-all duration-200"></div>
            <div className="flex items-center gap-6 pl-4">
              <div className="w-12 h-12 rounded-full bg-warmGold/10 flex items-center justify-center text-warmGold group-hover:bg-warmGold group-hover:text-white transition-colors duration-200">
                <Play size={22} className="ml-1" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white group-hover:text-warmGold transition-colors">Module 1: Introduction to n8n</h3>
                </div>
                <p className="text-neutral-slate dark:text-neutral-cool">Understand the interface, nodes, and connections.</p>
              </div>
            </div>
            <div className="hidden sm:block pr-4">
                <span className="text-warmGold font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Module <ChevronRight size={16} />
                </span>
            </div>
          </div>
        </Link>

        {/* Module 2 */}
        <div className="block group opacity-70 cursor-not-allowed">
          <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/30 shadow-sls-sm flex items-center justify-between relative overflow-hidden">
            <div className="flex items-center gap-6 pl-4">
              <div className="w-12 h-12 rounded-full bg-neutral-cool/20 flex items-center justify-center text-neutral-slate">
                <Database size={22} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white">Module 2: Data Transformation</h3>
                </div>
                <p className="text-neutral-slate dark:text-neutral-cool">Working with JSON, arrays, and binary data.</p>
              </div>
            </div>
            <div className="hidden sm:block pr-4">
                <span className="text-neutral-cool font-semibold text-sm inline-flex items-center gap-1">
                  Coming Soon
                </span>
            </div>
          </div>
        </div>

        {/* Module 3 */}
        <div className="block group opacity-70 cursor-not-allowed">
          <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/30 shadow-sls-sm flex items-center justify-between relative overflow-hidden">
            <div className="flex items-center gap-6 pl-4">
              <div className="w-12 h-12 rounded-full bg-neutral-cool/20 flex items-center justify-center text-neutral-slate">
                <Zap size={22} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white">Module 3: Webhooks & Triggers</h3>
                </div>
                <p className="text-neutral-slate dark:text-neutral-cool">Starting workflows from external events.</p>
              </div>
            </div>
            <div className="hidden sm:block pr-4">
                <span className="text-neutral-cool font-semibold text-sm inline-flex items-center gap-1">
                  Coming Soon
                </span>
            </div>
          </div>
        </div>

        {/* Module 4 */}
        <div className="block group opacity-70 cursor-not-allowed">
          <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/30 shadow-sls-sm flex items-center justify-between relative overflow-hidden">
            <div className="flex items-center gap-6 pl-4">
              <div className="w-12 h-12 rounded-full bg-neutral-cool/20 flex items-center justify-center text-neutral-slate">
                <Network size={22} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white">Module 4: HTTP Requests</h3>
                </div>
                <p className="text-neutral-slate dark:text-neutral-cool">Connecting to any REST API from n8n.</p>
              </div>
            </div>
            <div className="hidden sm:block pr-4">
                <span className="text-neutral-cool font-semibold text-sm inline-flex items-center gap-1">
                  Coming Soon
                </span>
            </div>
          </div>
        </div>

        {/* Module 5 */}
        <div className="block group opacity-70 cursor-not-allowed">
          <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/30 shadow-sls-sm flex items-center justify-between relative overflow-hidden">
            <div className="flex items-center gap-6 pl-4">
              <div className="w-12 h-12 rounded-full bg-neutral-cool/20 flex items-center justify-center text-neutral-slate">
                <Settings size={22} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white">Module 5: Error Handling</h3>
                </div>
                <p className="text-neutral-slate dark:text-neutral-cool">Building robust and reliable workflows.</p>
              </div>
            </div>
            <div className="hidden sm:block pr-4">
                <span className="text-neutral-cool font-semibold text-sm inline-flex items-center gap-1">
                  Coming Soon
                </span>
            </div>
          </div>
        </div>

        {/* Module 6 */}
        <div className="block group opacity-70 cursor-not-allowed">
          <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/30 shadow-sls-sm flex items-center justify-between relative overflow-hidden">
            <div className="flex items-center gap-6 pl-4">
              <div className="w-12 h-12 rounded-full bg-neutral-cool/20 flex items-center justify-center text-neutral-slate">
                <GitMerge size={22} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white">Module 6: Advanced Logic</h3>
                </div>
                <p className="text-neutral-slate dark:text-neutral-cool">Branching, merging, and complex data flows.</p>
              </div>
            </div>
            <div className="hidden sm:block pr-4">
                <span className="text-neutral-cool font-semibold text-sm inline-flex items-center gap-1">
                  Coming Soon
                </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Resources */}
      <div className="pt-12 border-t border-neutral-cool/20">
        <h2 className="text-2xl font-bold mb-8 text-neutral-charcoal dark:text-white flex items-center gap-3">
          <Workflow className="text-neutral-slate" size={28} />
          n8n Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-neutral-darkCard rounded-xl border border-neutral-cool/20 shadow-sls-sm p-6">
            <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-4">Official Docs</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://docs.n8n.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-slate dark:text-neutral-cool hover:text-warmGold transition-colors">
                  <ExternalLink size={14} /> Documentation Home
                </a>
              </li>
              <li>
                <a href="https://n8n.io/workflows" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-slate dark:text-neutral-cool hover:text-warmGold transition-colors">
                  <ExternalLink size={14} /> Workflow Templates
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-darkCard rounded-xl border border-neutral-cool/20 shadow-sls-sm p-6">
            <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://community.n8n.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-slate dark:text-neutral-cool hover:text-warmGold transition-colors">
                  <ExternalLink size={14} /> n8n Community Forum
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/n8n-io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-slate dark:text-neutral-cool hover:text-warmGold transition-colors">
                  <ExternalLink size={14} /> YouTube Channel
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* NEW APPENDIX SECTION */}
      <div className="pt-12 border-t border-neutral-cool/20">
        <h2 className="text-2xl font-bold mb-8 text-neutral-charcoal dark:text-white flex items-center gap-3">
          <BookOpen className="text-neutral-slate" size={28} />
          APPENDIX: Quick Reference
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Reference A: Node Types */}
            <div className="bg-white dark:bg-neutral-darkCard rounded-xl border border-neutral-cool/20 shadow-sls-sm overflow-hidden flex flex-col">
                <div className="bg-warmGold/10 p-4 border-b border-warmGold/10 flex items-center gap-2">
                    <Workflow size={20} className="text-warmGold"/>
                    <h3 className="font-bold text-neutral-charcoal dark:text-white">REF A: Node Types Cheat Sheet</h3>
                </div>
                <div className="p-0 overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-neutral-offWhite dark:bg-neutral-darkBg text-xs uppercase font-semibold text-neutral-slate dark:text-neutral-cool">
                            <tr>
                                <th className="px-4 py-3">Type</th>
                                <th className="px-4 py-3">Purpose</th>
                                <th className="px-4 py-3">Examples</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-cool/10 dark:divide-neutral-700">
                            {[
                                { icon: <Zap size={16} className="text-yellow-500" />, type: "Trigger", purpose: "Starts the workflow", ex: "Schedule, Webhook, Email" },
                                { icon: <Wrench size={16} className="text-blue-400" />, type: "Action", purpose: "Does something", ex: "Gmail, Sheets, Slack" },
                                { icon: <GitMerge size={16} className="text-purple-400" />, type: "Logic", purpose: "Controls flow", ex: "IF, Switch, Loop" },
                                { icon: <Bot size={16} className="text-green-400" />, type: "AI", purpose: "Processes with AI", ex: "Basic LLM, Summarize" },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-neutral-offWhite dark:hover:bg-white/5 transition-colors">
                                    <td className="px-4 py-3 font-medium text-neutral-charcoal dark:text-white flex items-center gap-2">
                                        {row.icon} {row.type}
                                    </td>
                                    <td className="px-4 py-3 text-neutral-slate dark:text-neutral-cool">{row.purpose}</td>
                                    <td className="px-4 py-3 text-neutral-slate dark:text-neutral-cool italic">{row.ex}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Reference B: Common Triggers */}
            <div className="bg-white dark:bg-neutral-darkCard rounded-xl border border-neutral-cool/20 shadow-sls-sm overflow-hidden flex flex-col">
                <div className="bg-deepPurple/10 p-4 border-b border-deepPurple/10 flex items-center gap-2">
                    <Zap size={20} className="text-deepPurple"/>
                    <h3 className="font-bold text-neutral-charcoal dark:text-white">REF B: Common Triggers</h3>
                </div>
                <div className="p-0 overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-neutral-offWhite dark:bg-neutral-darkBg text-xs uppercase font-semibold text-neutral-slate dark:text-neutral-cool">
                            <tr>
                                <th className="px-4 py-3">Trigger</th>
                                <th className="px-4 py-3">When It Fires</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-cool/10 dark:divide-neutral-700">
                            {[
                                { name: "Schedule", when: "At specified time(s)" },
                                { name: "Webhook", when: "External service calls URL" },
                                { name: "Gmail", when: "New email received" },
                                { name: "Google Sheets", when: "Row added/updated" },
                                { name: "n8n Form", when: "Someone submits form" },
                                { name: "Manual", when: "You click 'Test'" },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-neutral-offWhite dark:hover:bg-white/5 transition-colors">
                                    <td className="px-4 py-3 font-medium text-neutral-charcoal dark:text-white">{row.name}</td>
                                    <td className="px-4 py-3 text-neutral-slate dark:text-neutral-cool">{row.when}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Reference C: Expression Cheat Sheet */}
            <div className="bg-white dark:bg-neutral-darkCard rounded-xl border border-neutral-cool/20 shadow-sls-sm overflow-hidden flex flex-col">
                <div className="bg-cardinal/10 p-4 border-b border-cardinal/10 flex items-center gap-2">
                    <Code size={20} className="text-cardinal dark:text-electric"/>
                    <h3 className="font-bold text-neutral-charcoal dark:text-white">REF C: Expression Cheat Sheet</h3>
                </div>
                <div className="p-0 overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-neutral-offWhite dark:bg-neutral-darkBg text-xs uppercase font-semibold text-neutral-slate dark:text-neutral-cool">
                            <tr>
                                <th className="px-4 py-3">Expression</th>
                                <th className="px-4 py-3">What It Does</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-cool/10 dark:divide-neutral-700">
                            {[
                                { exp: "{{ $json.fieldname }}", desc: "Value from previous node" },
                                { exp: "{{ $now }}", desc: "Current date/time" },
                                { exp: "{{ $now.format('YYYY-MM-DD') }}", desc: "Formatted date" },
                                { exp: "{{ $json.email.split('@')[1] }}", desc: "Domain from email" },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-neutral-offWhite dark:hover:bg-white/5 transition-colors">
                                    <td className="px-4 py-3 font-mono text-xs text-cardinal dark:text-electric bg-neutral-offWhite dark:bg-white/5 rounded mx-2 block w-fit my-1 px-2 py-0.5">{row.exp}</td>
                                    <td className="px-4 py-3 text-neutral-slate dark:text-neutral-cool">{row.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Reference D: Cloud vs Self-Hosted */}
            <div className="bg-white dark:bg-neutral-darkCard rounded-xl border border-neutral-cool/20 shadow-sls-sm overflow-hidden flex flex-col">
                <div className="bg-neutral-slate/10 p-4 border-b border-neutral-slate/10 flex items-center gap-2">
                    <Cloud size={20} className="text-neutral-charcoal dark:text-white"/>
                    <h3 className="font-bold text-neutral-charcoal dark:text-white">REF D: Hosting Options</h3>
                </div>
                <div className="p-0 overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-neutral-offWhite dark:bg-neutral-darkBg text-xs uppercase font-semibold text-neutral-slate dark:text-neutral-cool">
                            <tr>
                                <th className="px-4 py-3">Factor</th>
                                <th className="px-4 py-3">Cloud</th>
                                <th className="px-4 py-3">Self-Hosted</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-cool/10 dark:divide-neutral-700">
                            {[
                                { factor: "IT Support", cloud: "None needed", self: "Required" },
                                { factor: "Data Sensitivity", cloud: "Standard", self: "Confidential" },
                                { factor: "Setup Time", cloud: "Instant", self: "Hours/Days" },
                                { factor: "Maintenance", cloud: "Managed", self: "You manage" },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-neutral-offWhite dark:hover:bg-white/5 transition-colors">
                                    <td className="px-4 py-3 font-bold text-neutral-charcoal dark:text-white">{row.factor}</td>
                                    <td className="px-4 py-3 text-neutral-slate dark:text-neutral-cool">{row.cloud}</td>
                                    <td className="px-4 py-3 text-neutral-slate dark:text-neutral-cool">{row.self}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default N8nCurriculum;