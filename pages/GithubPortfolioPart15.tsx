import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, List, Globe, Shield, Code, Table, CheckSquare, ChevronDown, ArrowRight } from 'lucide-react';

const GithubPortfolioPart15: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-16">
        {/* Navigation */}
        <div className="space-y-4">
            <Link 
            to="/github" 
            className="inline-flex items-center text-sm font-medium text-neutral-slate hover:text-cardinal transition-colors w-fit group"
            >
            <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio Guide
            </Link>
        </div>

        {/* Header */}
        <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-neutral-charcoal dark:text-white">
                Your First GitHub Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-neutral-slate dark:text-neutral-cool max-w-3xl mx-auto">
                A No-Code Guide to Showcasing Your AI Journey for Complete Beginners
            </p>
        </header>

        {/* Content Card */}
        <section className="bg-white dark:bg-neutral-darkCard rounded-2xl p-8 md:p-12 border border-neutral-cool/20 shadow-sls-md">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-neutral-charcoal dark:text-white">
                Part 15: Advanced Features (When You're Ready)
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8 leading-relaxed">
                You don't need these to start, but they're useful as you grow. These features can add a layer of professionalism and organization to your work.
            </p>
            
            <div className="pt-8 border-t border-neutral-cool/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* GitHub Issues */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                        <div className="flex items-center gap-3 mb-4 text-cardinal dark:text-electric">
                            <List size={24} />
                            <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white">GitHub Issues: Project Management</h3>
                        </div>
                        <p className="text-neutral-slate dark:text-neutral-cool mb-4">
                            Issues work like a to-do list for your repository. They're perfect for planning your work and tracking progress, even for personal projects.
                        </p>
                        <h4 className="font-bold text-neutral-charcoal dark:text-white mb-2 text-sm uppercase tracking-wide">How to use them:</h4>
                        <ol className="list-decimal list-inside space-y-2 text-neutral-slate dark:text-neutral-cool text-sm ml-2">
                            <li>Go to your repository and click the "Issues" tab.</li>
                            <li>Click "New issue" to create a new task.</li>
                            <li>Give it a title (e.g., "Add troubleshooting section to README") and add details.</li>
                            <li>Use labels like "documentation" or "enhancement" to stay organized.</li>
                            <li>Work on the task and close the issue when it's done.</li>
                        </ol>
                        <p className="mt-4 text-sm text-neutral-slate dark:text-neutral-cool italic border-l-4 border-cardinal dark:border-electric pl-3">
                            <strong>Why it's useful:</strong> It shows visitors your planning process and that you're actively improving your projects.
                        </p>
                    </div>

                    {/* GitHub Pages */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                        <div className="flex items-center gap-3 mb-4 text-cardinal dark:text-electric">
                            <Globe size={24} />
                            <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white">GitHub Pages: Free Website Hosting</h3>
                        </div>
                        <p className="text-neutral-slate dark:text-neutral-cool mb-4">
                            You can turn any repository into a live, public website for free. It's perfect for hosting a portfolio, a project's documentation, or a blog.
                        </p>
                        <h4 className="font-bold text-neutral-charcoal dark:text-white mb-2 text-sm uppercase tracking-wide">How to enable:</h4>
                        <ol className="list-decimal list-inside space-y-2 text-neutral-slate dark:text-neutral-cool text-sm ml-2">
                            <li>In your repository, go to "Settings" (top right).</li>
                            <li>Scroll down to the "Pages" section in the left sidebar.</li>
                            <li>For "Source," select "main" branch and "/ (root)" folder.</li>
                            <li>Click "Save."</li>
                        </ol>
                        <div className="mt-4 p-3 bg-white dark:bg-black/20 rounded border border-neutral-cool/10 text-xs font-mono text-neutral-slate dark:text-neutral-cool">
                            https://yourusername.github.io/repository-name
                        </div>
                    </div>

                    {/* README Badges */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                        <div className="flex items-center gap-3 mb-4 text-cardinal dark:text-electric">
                            <Shield size={24} />
                            <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white">README Badges: Visual Status</h3>
                        </div>
                        <p className="text-neutral-slate dark:text-neutral-cool mb-4">
                            Badges are small, colorful labels that add a professional touch and show the status of your project at a glance.
                        </p>
                        
                        <p className="text-xs font-bold text-neutral-charcoal dark:text-white mb-2 uppercase tracking-wide">Rendered Example:</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <img src="https://img.shields.io/badge/status-active-success" alt="Status Active" />
                            <img src="https://img.shields.io/badge/license-MIT-blue" alt="License MIT" />
                            <img src="https://img.shields.io/badge/updated-October%202024-brightgreen" alt="Updated October 2024" />
                        </div>

                        <p className="text-xs font-bold text-neutral-charcoal dark:text-white mb-2 uppercase tracking-wide">Markdown Code:</p>
                        <div className="bg-[#1a1a1a] text-neutral-offWhite p-3 rounded-lg overflow-x-auto text-xs font-mono shadow-inner border border-neutral-cool/20">
                            <pre>![Status](https://img.shields.io/badge/status-active-success){'\n'}![License](https://img.shields.io/badge/license-MIT-blue)</pre>
                        </div>
                        <p className="mt-4 text-sm text-neutral-slate dark:text-neutral-cool">
                            You can create your own custom badges for any purpose using services like <a href="https://shields.io/" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline text-cardinal dark:text-electric">shields.io</a>.
                        </p>
                    </div>

                    {/* Advanced Markdown - Full Width on Mobile, Col span 1 on large if odd number, but here fits well in grid or span full */}
                    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20 md:col-span-2">
                        <div className="flex items-center gap-3 mb-4 text-cardinal dark:text-electric">
                            <Code size={24} />
                            <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white">Advanced Markdown Formatting</h3>
                        </div>
                        <p className="text-neutral-slate dark:text-neutral-cool mb-6">
                            Go beyond simple text with these advanced formatting options to make your READMEs clean and organized.
                        </p>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Tables */}
                            <div>
                                <h4 className="font-bold text-neutral-charcoal dark:text-white mb-2 flex items-center gap-2">
                                    <Table size={18} /> Tables (for comparisons)
                                </h4>
                                <div className="mb-2 overflow-x-auto bg-white dark:bg-black/20 rounded border border-neutral-cool/20">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-neutral-offWhite dark:bg-white/10 text-neutral-charcoal dark:text-white font-semibold">
                                            <tr>
                                                <th className="p-2 border-b border-r border-neutral-cool/20">Tool</th>
                                                <th className="p-2 border-b border-r border-neutral-cool/20">Best For</th>
                                                <th className="p-2 border-b border-neutral-cool/20">Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-neutral-slate dark:text-neutral-cool">
                                            <tr className="border-b border-neutral-cool/10">
                                                <td className="p-2 border-r border-neutral-cool/20">ChatGPT</td>
                                                <td className="p-2 border-r border-neutral-cool/20">General</td>
                                                <td className="p-2">$20/mo</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 border-r border-neutral-cool/20">Claude</td>
                                                <td className="p-2 border-r border-neutral-cool/20">Docs</td>
                                                <td className="p-2">$20/mo</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="bg-[#1a1a1a] text-neutral-offWhite p-3 rounded-lg overflow-x-auto text-xs font-mono shadow-inner border border-neutral-cool/20">
<pre>{`| Tool    | Best For | Cost   |
|---------|----------|--------|
| ChatGPT | General  | $20/mo |
| Claude  | Docs     | $20/mo |`}</pre>
                                </div>
                            </div>

                            {/* Collapsible Sections */}
                            <div>
                                <h4 className="font-bold text-neutral-charcoal dark:text-white mb-2 flex items-center gap-2">
                                    <ChevronDown size={18} /> Collapsible Sections
                                </h4>
                                <div className="mb-2 bg-white dark:bg-black/20 p-2 rounded border border-neutral-cool/20">
                                    <details className="text-sm">
                                        <summary className="cursor-pointer font-semibold text-neutral-charcoal dark:text-white">Click to see full prompt</summary>
                                        <p className="mt-2 text-neutral-slate dark:text-neutral-cool pl-4 border-l-2 border-neutral-cool/20">Your long, detailed prompt text goes here... It's hidden by default.</p>
                                    </details>
                                </div>
                                <div className="bg-[#1a1a1a] text-neutral-offWhite p-3 rounded-lg overflow-x-auto text-xs font-mono shadow-inner border border-neutral-cool/20">
<pre>{`<details>
<summary>Click to see full prompt</summary>

Your long, detailed prompt text goes here...

</details>`}</pre>
                                </div>
                            </div>

                            {/* Task Lists */}
                            <div>
                                <h4 className="font-bold text-neutral-charcoal dark:text-white mb-2 flex items-center gap-2">
                                    <CheckSquare size={18} /> Task Lists (for roadmaps)
                                </h4>
                                <div className="mb-2 bg-white dark:bg-black/20 p-3 rounded border border-neutral-cool/20 text-sm">
                                    <ul className="list-none space-y-1 text-neutral-slate dark:text-neutral-cool">
                                        <li className="flex items-center gap-2"><input type="checkbox" checked readOnly className="accent-cardinal" /> Complete research</li>
                                        <li className="flex items-center gap-2"><input type="checkbox" checked readOnly className="accent-cardinal" /> Build prototype</li>
                                        <li className="flex items-center gap-2"><input type="checkbox" disabled /> Test with users</li>
                                    </ul>
                                </div>
                                <div className="bg-[#1a1a1a] text-neutral-offWhite p-3 rounded-lg overflow-x-auto text-xs font-mono shadow-inner border border-neutral-cool/20">
<pre>{`- [x] Complete research
- [x] Build prototype
- [ ] Test with users`}</pre>
                                </div>
                            </div>

                            {/* Code Blocks */}
                            <div>
                                <h4 className="font-bold text-neutral-charcoal dark:text-white mb-2 flex items-center gap-2">
                                    <Code size={18} /> Code Blocks (Syntax Highlighting)
                                </h4>
                                <div className="mb-2 bg-[#1a1a1a] p-3 rounded border border-neutral-cool/20 text-xs font-mono">
                                    <span className="text-blue-400">def</span> <span className="text-yellow-300">create_prompt</span>(role, task):<br/>
                                    &nbsp;&nbsp;<span className="text-purple-400">return</span> f<span className="text-green-300">"You are a &#123;role&#125;. &#123;task&#125;"</span>
                                </div>
                                <div className="bg-[#1a1a1a] text-neutral-offWhite p-3 rounded-lg overflow-x-auto text-xs font-mono shadow-inner border border-neutral-cool/20">
<pre>{`\`\`\`python
def create_prompt(role, task):
  return f"You are a {role}. {task}"
\`\`\``}</pre>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-neutral-cool/20 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 gap-6">
                <div className="flex-grow">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-slate dark:text-neutral-cool mb-1">Next Up</p>
                    <p className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2">Part 16: Resources for Learning</p>
                    <p className="text-base text-neutral-slate dark:text-neutral-cool max-w-xl">
                        A curated list of official docs, tutorials, and communities to continue your journey.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/github/part-16" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white bg-cardinal hover:bg-cardinal-dark transition-colors shadow-sls-md hover:shadow-sls-lg transform hover:-translate-y-0.5"
                    >
                        Go to Part 16 <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </section>
    </div>
  );
};

export default GithubPortfolioPart15;