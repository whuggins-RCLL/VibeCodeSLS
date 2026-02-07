import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Layers, Network, ChevronRight, ArrowLeft, Cpu, Bot, BookOpen, AlertTriangle, FileJson, CheckCircle, Activity, Globe, Terminal, GraduationCap, Users, ExternalLink, Rocket } from 'lucide-react';

const UnderstandingAPIs: React.FC = () => {
  const jsonSyntax = `{
  "string": "text in quotes",
  "number": 42,
  "decimal": 3.14,
  "boolean": true,
  "null_value": null,
  "array": [1, 2, 3],
  "nested_object": {
    "inner_key": "inner_value"
  }
}`;

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
            <h1 className="text-4xl font-bold text-neutral-charcoal dark:text-white tracking-tight mb-2">API Curriculum</h1>
            <p className="text-lg text-neutral-slate dark:text-neutral-cool">Master the language of modern software connectivity.</p>
          </div>
          <div className="flex items-center gap-2">
             <div className="px-3 py-1 rounded-full bg-cardinal/10 text-cardinal text-xs font-bold uppercase tracking-wider">7 Modules</div>
             <div className="px-3 py-1 rounded-full bg-neutral-offWhite dark:bg-neutral-darkCard text-neutral-slate text-xs font-bold uppercase tracking-wider">~90 Minutes</div>
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

        {/* Module 5 */}
        <Link to="/apis/module-5" className="block group">
          <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/30 shadow-sls-sm hover:shadow-sls-md hover:border-cyanAccent/30 dark:hover:border-cyan-400/30 transition-all duration-200 flex items-center justify-between relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyanAccent dark:bg-cyan-400 group-hover:w-2 transition-all duration-200"></div>
            <div className="flex items-center gap-6 pl-4">
              <div className="w-12 h-12 rounded-full bg-cyanAccent/10 dark:bg-cyan-400/10 flex items-center justify-center text-cyanAccent dark:text-cyan-400 group-hover:bg-cyanAccent dark:group-hover:bg-cyan-400 group-hover:text-white transition-colors duration-200">
                <Bot size={22} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white group-hover:text-cyanAccent dark:group-hover:text-cyan-400 transition-colors">Module 5: Autonomous Agents</h3>
                </div>
                <p className="text-neutral-slate dark:text-neutral-cool">Building systems that plan, reason, and act independently.</p>
              </div>
            </div>
            <div className="hidden sm:block pr-4">
                <span className="text-cyanAccent dark:text-cyan-400 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Module <ChevronRight size={16} />
                </span>
            </div>
          </div>
        </Link>

        {/* Module 6 */}
        <Link to="/apis/module-6" className="block group">
          <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/30 shadow-sls-sm hover:shadow-sls-md hover:border-functional-warning/30 transition-all duration-200 flex items-center justify-between relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-functional-warning group-hover:w-2 transition-all duration-200"></div>
            <div className="flex items-center gap-6 pl-4">
              <div className="w-12 h-12 rounded-full bg-functional-warning/10 flex items-center justify-center text-functional-warning group-hover:bg-functional-warning group-hover:text-neutral-charcoal transition-colors duration-200">
                <Activity size={22} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white group-hover:text-functional-warning transition-colors">Module 6: Testing & Observability</h3>
                </div>
                <p className="text-neutral-slate dark:text-neutral-cool">Validation, monitoring, and maintaining reliability in production.</p>
              </div>
            </div>
            <div className="hidden sm:block pr-4">
                <span className="text-functional-warning font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Module <ChevronRight size={16} />
                </span>
            </div>
          </div>
        </Link>

        {/* Module 7 */}
        <Link to="/apis/module-7" className="block group">
          <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/30 shadow-sls-sm hover:shadow-sls-md hover:border-electric/30 transition-all duration-200 flex items-center justify-between relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-electric group-hover:w-2 transition-all duration-200"></div>
            <div className="flex items-center gap-6 pl-4">
              <div className="w-12 h-12 rounded-full bg-electric/10 flex items-center justify-center text-electric group-hover:bg-electric group-hover:text-white transition-colors duration-200">
                <Rocket size={22} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white group-hover:text-electric transition-colors">Module 7: The Future of Vibe Coding</h3>
                </div>
                <p className="text-neutral-slate dark:text-neutral-cool">Ethics, evolution, and the next frontier of human-AI collaboration.</p>
              </div>
            </div>
            <div className="hidden sm:block pr-4">
                <span className="text-electric font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Module <ChevronRight size={16} />
                </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Resource Library Section */}
      <div className="pt-12 border-t border-neutral-cool/20">
        <h2 className="text-2xl font-bold mb-8 text-neutral-charcoal dark:text-white flex items-center gap-3">
          <Globe className="text-neutral-slate" size={28} />
          Resource Library
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Practice APIs */}
          <div className="bg-white dark:bg-neutral-darkCard rounded-xl border border-neutral-cool/20 shadow-sls-sm p-6 hover:border-cardinal/20 transition-colors">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-cool/10">
              <div className="p-2 rounded-lg bg-cardinal/10 text-cardinal dark:text-electric">
                 <Terminal size={20} />
              </div>
              <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white">Practice APIs</h3>
            </div>
            <ul className="space-y-3">
              {[
                { label: "JSONPlaceholder", url: "https://jsonplaceholder.typicode.com" },
                { label: "PokéAPI", url: "https://pokeapi.co" },
                { label: "Open-Meteo", url: "https://open-meteo.com" },
                { label: "REST Countries", url: "https://restcountries.com" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group text-sm font-medium text-neutral-slate dark:text-neutral-cool hover:text-cardinal dark:hover:text-electric transition-colors">
                    {item.label}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Resources */}
          <div className="bg-white dark:bg-neutral-darkCard rounded-xl border border-neutral-cool/20 shadow-sls-sm p-6 hover:border-deepPurple/20 transition-colors">
             <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-cool/10">
              <div className="p-2 rounded-lg bg-deepPurple/10 text-deepPurple">
                 <GraduationCap size={20} />
              </div>
              <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white">Learning Hubs</h3>
            </div>
            <ul className="space-y-3">
              {[
                { label: "Postman Learning Center", url: "https://learning.postman.com" },
                { label: "RapidAPI Learn", url: "https://rapidapi.com/learn" },
                { label: "FreeCodeCamp Tutorials", url: "https://www.freecodecamp.org/news/tag/api/" },
                { label: "Nordic APIs University", url: "https://nordicapis.com/api-ebooks/" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group text-sm font-medium text-neutral-slate dark:text-neutral-cool hover:text-deepPurple dark:hover:text-electric transition-colors">
                    {item.label}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Communities */}
          <div className="bg-white dark:bg-neutral-darkCard rounded-xl border border-neutral-cool/20 shadow-sls-sm p-6 hover:border-cyanAccent/20 transition-colors">
             <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-cool/10">
              <div className="p-2 rounded-lg bg-cyanAccent/10 text-cyanAccent dark:text-cyan-400">
                 <Users size={20} />
              </div>
              <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white">Communities</h3>
            </div>
            <ul className="space-y-3">
              {[
                { label: "r/webdev API Threads", url: "https://www.reddit.com/r/webdev/search?q=API" },
                { label: "Dev.to API Articles", url: "https://dev.to/t/api" },
                { label: "Stack Overflow #api", url: "https://stackoverflow.com/questions/tagged/api" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group text-sm font-medium text-neutral-slate dark:text-neutral-cool hover:text-cyanAccent dark:hover:text-cyan-400 transition-colors">
                    {item.label}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Appendix Section */}
      <div className="pt-12 border-t border-neutral-cool/20">
        <h2 className="text-2xl font-bold mb-8 text-neutral-charcoal dark:text-white flex items-center gap-3">
          <BookOpen className="text-neutral-slate" size={28} />
          APPENDIX: Quick Reference Cards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Reference A: Status Codes */}
          <div className="bg-white dark:bg-neutral-darkCard rounded-xl border border-neutral-cool/20 shadow-sls-sm overflow-hidden flex flex-col">
              <div className="bg-functional-success/10 p-4 border-b border-functional-success/10 flex items-center gap-2">
                  <CheckCircle size={20} className="text-functional-success"/>
                  <h3 className="font-bold text-neutral-charcoal dark:text-white">REF A: Status Code Cheat Sheet</h3>
              </div>
              <div className="p-0 overflow-x-auto">
                  <table className="w-full text-sm text-left">
                      <thead className="bg-neutral-offWhite dark:bg-neutral-darkBg text-xs uppercase font-semibold text-neutral-slate dark:text-neutral-cool">
                          <tr>
                              <th className="px-4 py-3">Code</th>
                              <th className="px-4 py-3">Meaning</th>
                              <th className="px-4 py-3">What To Do</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-cool/10 dark:divide-neutral-700">
                          {[
                            { code: 200, mean: "Success", do: "Celebrate!" },
                            { code: 201, mean: "Created", do: "Your POST worked" },
                            { code: 204, mean: "No content", do: "Success, nothing to return" },
                            { code: 400, mean: "Bad request", do: "Check your parameters" },
                            { code: 401, mean: "Unauthorized", do: "Check your API key" },
                            { code: 403, mean: "Forbidden", do: "You don't have permission" },
                            { code: 404, mean: "Not found", do: "Check the endpoint URL" },
                            { code: 429, mean: "Too many requests", do: "Slow down, hit rate limit" },
                            { code: 500, mean: "Server error", do: "Not your fault, try again" },
                            { code: 503, mean: "Service unavailable", do: "Server is overwhelmed" },
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-neutral-offWhite dark:hover:bg-white/5 transition-colors">
                              <td className="px-4 py-2 font-mono font-bold text-cardinal dark:text-electric">{row.code}</td>
                              <td className="px-4 py-2 font-medium text-neutral-charcoal dark:text-white">{row.mean}</td>
                              <td className="px-4 py-2 text-neutral-slate dark:text-neutral-cool italic">{row.do}</td>
                            </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>

          {/* Reference B: Common Errors */}
          <div className="bg-white dark:bg-neutral-darkCard rounded-xl border border-neutral-cool/20 shadow-sls-sm overflow-hidden flex flex-col">
               <div className="bg-functional-error/10 p-4 border-b border-functional-error/10 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-functional-error"/>
                  <h3 className="font-bold text-neutral-charcoal dark:text-white">REF B: Common Errors & Fixes</h3>
              </div>
               <div className="p-0 overflow-x-auto">
                  <table className="w-full text-sm text-left">
                       <thead className="bg-neutral-offWhite dark:bg-neutral-darkBg text-xs uppercase font-semibold text-neutral-slate dark:text-neutral-cool">
                          <tr>
                              <th className="px-4 py-3">Error</th>
                              <th className="px-4 py-3">Fix</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-cool/10 dark:divide-neutral-700">
                           {[
                            { err: '"Invalid API key"', fix: "Regenerate and copy carefully" },
                            { err: '"Rate limit exceeded"', fix: "Wait, then slow down" },
                            { err: '"Malformed JSON"', fix: "Check brackets, commas, quotes" },
                            { err: '"Endpoint not found"', fix: "Check documentation" },
                            { err: '"Missing required parameter"', fix: "Read docs, add missing param" },
                            { err: '"CORS error"', fix: "Use API tool instead of browser" },
                           ].map((row, i) => (
                             <tr key={i} className="hover:bg-neutral-offWhite dark:hover:bg-white/5 transition-colors">
                               <td className="px-4 py-2 font-mono text-cardinal dark:text-electric">{row.err}</td>
                               <td className="px-4 py-2 text-neutral-slate dark:text-neutral-cool">{row.fix}</td>
                             </tr>
                           ))}
                      </tbody>
                  </table>
               </div>
          </div>

          {/* Reference C: JSON Syntax - Full Width */}
          <div className="md:col-span-2 bg-white dark:bg-neutral-darkCard rounded-xl border border-neutral-cool/20 shadow-sls-sm overflow-hidden">
               <div className="bg-deepPurple/10 p-4 border-b border-deepPurple/10 flex items-center gap-2">
                  <FileJson size={20} className="text-deepPurple"/>
                  <h3 className="font-bold text-neutral-charcoal dark:text-white">REF C: JSON Syntax Quick Guide</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-6 bg-[#1e1e1e] border-r border-neutral-700 font-mono text-sm overflow-x-auto">
                    <pre className="text-cyan-300">
                      <code>{jsonSyntax}</code>
                    </pre>
                  </div>
                  <div className="p-6 bg-neutral-offWhite dark:bg-neutral-darkBg/30 text-sm text-neutral-slate dark:text-neutral-cool">
                      <h4 className="font-bold text-neutral-charcoal dark:text-white mb-3 uppercase tracking-wide text-xs">JSON Rules</h4>
                      <ul className="space-y-3">
                          {[
                            "All keys must be in quotes",
                            "Strings must be in quotes",
                            "Numbers, booleans, null: no quotes",
                            "No trailing commas allowed",
                          ].map((rule, i) => (
                            <li key={i} className="flex items-start gap-2">
                               <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-deepPurple flex-shrink-0" />
                               <span>{rule}</span>
                            </li>
                          ))}
                          <li className="flex items-start gap-2 pt-2">
                             <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-deepPurple flex-shrink-0" />
                             <span>Use <a href="https://jsonlint.com" target="_blank" rel="noreferrer" className="text-cardinal dark:text-electric hover:underline font-bold">jsonlint.com</a> to validate</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UnderstandingAPIs;