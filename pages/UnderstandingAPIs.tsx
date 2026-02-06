import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Layers, Network, ChevronRight, ArrowLeft, Cpu } from 'lucide-react';

const UnderstandingAPIs: React.FC = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
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
            <h1 className="text-4xl font-bold text-neutral-charcoal dark:text-white tracking-tight mb-2">API Curriculum</h1>
            <p className="text-lg text-neutral-slate dark:text-neutral-cool">Master the language of modern software connectivity.</p>
          </div>
          <div className="flex items-center gap-2">
             <div className="px-3 py-1 rounded-full bg-cardinal/10 text-cardinal text-xs font-bold uppercase tracking-wider">4 Modules</div>
             <div className="px-3 py-1 rounded-full bg-neutral-offWhite dark:bg-neutral-darkCard text-neutral-slate text-xs font-bold uppercase tracking-wider">~1 Hour</div>
          </div>
        </div>
      </div>

      {/* Module List */}
      <div className="space-y-4">
          
        {/* Module 1 */}
        <Link to="/apis/module-1" className="block group">
          <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/30 shadow-sls-sm hover:shadow-sls-md hover:border-cardinal/30 transition-all duration-200 flex items-center justify-between relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-cardinal group-hover:w-2 transition-all duration-200"></div>
            <div className="flex items-center gap-6 pl-4">
              <div className="w-12 h-12 rounded-full bg-cardinal/10 flex items-center justify-center text-cardinal group-hover:bg-cardinal group-hover:text-white transition-colors duration-200">
                <Play size={22} className="ml-1" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white group-hover:text-cardinal dark:group-hover:text-electric transition-colors">Module 1: What are APIs?</h3>
                </div>
                <p className="text-neutral-slate dark:text-neutral-cool">The fundamental building blocks of modern software.</p>
              </div>
            </div>
            <div className="hidden sm:block pr-4">
                <span className="text-cardinal dark:text-electric font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Module <ChevronRight size={16} />
                </span>
            </div>
          </div>
        </Link>

        {/* Module 2 */}
        <Link to="/apis/module-2" className="block group">
          <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/30 shadow-sls-sm hover:shadow-sls-md hover:border-deepPurple/30 transition-all duration-200 flex items-center justify-between relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-deepPurple group-hover:w-2 transition-all duration-200"></div>
            <div className="flex items-center gap-6 pl-4">
              <div className="w-12 h-12 rounded-full bg-deepPurple/10 flex items-center justify-center text-deepPurple group-hover:bg-deepPurple group-hover:text-white transition-colors duration-200">
                <Layers size={22} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white group-hover:text-deepPurple dark:group-hover:text-electric transition-colors">Module 2: Advanced Integration</h3>
                </div>
                <p className="text-neutral-slate dark:text-neutral-cool">Security, data flow, and practical implementation.</p>
              </div>
            </div>
            <div className="hidden sm:block pr-4">
                <span className="text-deepPurple dark:text-electric font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Module <ChevronRight size={16} />
                </span>
            </div>
          </div>
        </Link>

        {/* Module 3 */}
        <Link to="/apis/module-3" className="block group">
          <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/30 shadow-sls-sm hover:shadow-sls-md hover:border-warmGold/30 transition-all duration-200 flex items-center justify-between relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-warmGold group-hover:w-2 transition-all duration-200"></div>
            <div className="flex items-center gap-6 pl-4">
              <div className="w-12 h-12 rounded-full bg-warmGold/10 flex items-center justify-center text-warmGold group-hover:bg-warmGold group-hover:text-white transition-colors duration-200">
                <Network size={22} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white group-hover:text-warmGold transition-colors">Module 3: System Architecture</h3>
                </div>
                <p className="text-neutral-slate dark:text-neutral-cool">Contextualizing APIs within larger distributed systems.</p>
              </div>
            </div>
            <div className="hidden sm:block pr-4">
                <span className="text-warmGold font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Module <ChevronRight size={16} />
                </span>
            </div>
          </div>
        </Link>

        {/* Module 4 */}
        <Link to="/apis/module-4" className="block group">
          <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/30 shadow-sls-sm hover:shadow-sls-md hover:border-functional-success/30 transition-all duration-200 flex items-center justify-between relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-functional-success group-hover:w-2 transition-all duration-200"></div>
            <div className="flex items-center gap-6 pl-4">
              <div className="w-12 h-12 rounded-full bg-functional-success/10 flex items-center justify-center text-functional-success group-hover:bg-functional-success group-hover:text-white transition-colors duration-200">
                <Cpu size={22} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white group-hover:text-functional-success transition-colors">Module 4: The Vibe Protocol</h3>
                </div>
                <p className="text-neutral-slate dark:text-neutral-cool">Write your first Vibe Code script and automate a workflow.</p>
              </div>
            </div>
            <div className="hidden sm:block pr-4">
                <span className="text-functional-success font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Module <ChevronRight size={16} />
                </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UnderstandingAPIs;