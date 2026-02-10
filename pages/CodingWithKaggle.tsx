import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Database, Code, Terminal, Layers, Network, BookOpen, AlertTriangle, Check, Copy, CheckCircle } from 'lucide-react';

// Helper Components defined outside to prevent re-renders and clean up code
const LessonCard = ({ title, children }: { title: string, children?: React.ReactNode }) => (
  <div className="bg-white dark:bg-neutral-darkCard rounded-2xl border border-neutral-cool/20 shadow-sls-sm overflow-hidden mb-12">
    <div className="bg-neutral-offWhite dark:bg-white/5 p-6 border-b border-neutral-cool/20">
      <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">{title}</h3>
    </div>
    <div className="p-6 md:p-8 space-y-8">
      {children}
    </div>
  </div>
);

const VideoEmbed = ({ src, title }: { src: string, title: string }) => (
  <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-md border border-neutral-cool/10">
    <iframe 
      className="absolute top-0 left-0 w-full h-full"
      src={src} 
      title={title}
      allow="autoplay; encrypted-media" 
      allowFullScreen 
      frameBorder="0"
    />
  </div>
);

const CodeBlock = ({ code, id, language = "python" }: { code: string, id: string, language?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg overflow-hidden border border-neutral-cool/20 bg-neutral-offWhite dark:bg-neutral-darkBg/50">
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopy}
          className="p-1.5 bg-white dark:bg-neutral-darkCard rounded-md shadow-sm border border-neutral-cool/20 text-neutral-slate hover:text-cardinal transition-colors"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 text-sm font-mono text-neutral-charcoal dark:text-neutral-cool overflow-x-auto whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const CodingWithKaggle: React.FC = () => {
  const [activeAdkTab, setActiveAdkTab] = useState<'python' | 'go' | 'java'>('python');
  const [activePart, setActivePart] = useState<'part1' | 'part2'>('part1');

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-24">
      {/* Navigation */}
      <div className="space-y-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm font-medium text-neutral-slate dark:text-neutral-cool hover:text-cardinal dark:hover:text-electric transition-colors w-fit group"
        >
          <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
        </Link>
      </div>

      {/* Header */}
      <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-charcoal dark:text-white leading-tight tracking-tighter">
              Coding with <span className="text-cardinal dark:text-electric">Kaggle</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-neutral-slate dark:text-neutral-cool">
              Your free, cloud-based environment for data science and AI projects, no setup required.
          </p>
      </header>

      {/* Introduction Section */}
      <section className="bg-white dark:bg-neutral-darkCard p-6 sm:p-8 rounded-2xl border border-neutral-cool/20 shadow-sls-sm">
          <p className="text-lg leading-relaxed text-neutral-slate dark:text-neutral-cool">
              Kaggle Notebooks is a free, cloud-based coding environment that lets you write and run code directly in your web browser—no installation or setup required. Think of it as Google Docs but for data science and AI projects.
          </p>
      </section>

      {/* Perfect for Beginners */}
      <section>
          <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white mb-8 text-center">Perfect for Beginners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                  {
                      title: "Zero Setup Hassle",
                      desc: "No need to install Python or libraries. Everything runs on Kaggle's servers with free GPU/TPU access for machine learning tasks.",
                      icon: <Code size={24} />
                  },
                  {
                      title: "Pre-loaded Datasets",
                      desc: "Kaggle hosts thousands of datasets that you can instantly access. No downloading or file management needed—just import and go.",
                      icon: <Database size={24} />
                  },
                  {
                      title: "Learn by Doing",
                      desc: "Fork (copy) public notebooks from experienced practitioners to see how they solve problems. It's like having thousands of worked examples.",
                      icon: <BookOpen size={24} />
                  }
              ].map((item, i) => (
                  <div key={i} className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/20 shadow-sls-sm hover:shadow-sls-md transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cardinal/10 text-cardinal dark:text-electric mb-4">
                          {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-2">{item.title}</h3>
                      <p className="text-neutral-slate dark:text-neutral-cool text-sm">{item.desc}</p>
                  </div>
              ))}
          </div>
      </section>

      {/* Jupyter Section */}
      <section className="bg-white dark:bg-neutral-darkCard p-6 sm:p-8 rounded-2xl border border-neutral-cool/20 shadow-sls-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-warmGold/10 rounded-xl flex items-center justify-center text-warmGold">
                  <Terminal size={32} />
              </div>
              <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-charcoal dark:text-white">The Power Behind the Scenes: Jupyter</h2>
                  <p className="text-neutral-slate dark:text-neutral-cool mt-1">Understanding the technology that Kaggle Notebooks are built on.</p>
              </div>
          </div>
          
          <p className="text-neutral-slate dark:text-neutral-cool leading-relaxed mb-4">
              You might hear the term "Jupyter Notebook" a lot. Think of it as the original, open-source recipe for the interactive coding notebook you see on Kaggle. It's a powerful tool that lets you create and share documents containing live code, equations, visualizations, and narrative text. It’s like a digital lab notebook where you can run an experiment in one cell, write down your observations in the next, and then create a chart to visualize the results right below it.
          </p>

          <h3 className="text-xl font-semibold text-neutral-charcoal dark:text-white mt-8 mb-4">Jupyter vs. Kaggle: What's the Difference?</h3>
          <ul className="list-disc list-inside space-y-2 mt-4 text-neutral-slate dark:text-neutral-cool">
              <li><strong>Jupyter</strong> is the <span className="font-semibold text-neutral-charcoal dark:text-white">software</span>. You can install it on your own computer, giving you full control but also requiring you to manage setup, packages, and hardware.</li>
              <li><strong>Kaggle Notebooks</strong> is a <span className="font-semibold text-neutral-charcoal dark:text-white">service</span> that provides a free, cloud-hosted version of a Jupyter-like environment. Kaggle handles all the setup, pre-installs common libraries, and gives you access to powerful hardware (like GPUs) for free.</li>
          </ul>
      </section>

      {/* Organize with Projects */}
      <section className="bg-white dark:bg-neutral-darkCard p-6 sm:p-8 rounded-2xl border border-neutral-cool/20 shadow-sls-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-deepPurple/10 rounded-xl flex items-center justify-center text-deepPurple">
                  <Layers size={32} />
              </div>
              <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-charcoal dark:text-white">Organize Your Work with Projects</h2>
                  <p className="text-neutral-slate dark:text-neutral-cool mt-1">Keep your notebooks, data, and context in one tidy place.</p>
              </div>
          </div>
          <div className="bg-neutral-offWhite dark:bg-white/5 rounded-xl p-6 my-8 border border-neutral-cool/20">
              <h3 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-1">Why Organize This Way?</h3>
              <p className="text-neutral-slate dark:text-neutral-cool text-sm mb-4">It turns scattered files into a cohesive, manageable workflow.</p>
              <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool text-sm">
                  <li><strong>Stay Focused:</strong> Keep everything for one task (like a competition or a research paper) separate from others.</li>
                  <li><strong>Maintain Context:</strong> Easily find all relevant files and custom instructions without searching through dozens of notebooks.</li>
                  <li><strong>Improve Reproducibility:</strong> By grouping a notebook with its specific dataset version, you make it easier for yourself (and others) to re-run your work.</li>
              </ul>
          </div>
      </section>

      {/* AI Studio Connection */}
      <section className="bg-white dark:bg-neutral-darkCard p-6 sm:p-8 rounded-2xl border border-neutral-cool/20 shadow-sls-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-cyanAccent/10 rounded-xl flex items-center justify-center text-cyanAccent dark:text-cyan-400">
                  <Network size={32} />
              </div>
              <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-charcoal dark:text-white">From Prototype to Powerhouse: Google AI Studio</h2>
                  <p className="text-neutral-slate dark:text-neutral-cool mt-1">Seamlessly connect your quick experiments to Kaggle's robust environment.</p>
              </div>
          </div>
          
          <div className="mt-8 bg-neutral-offWhite dark:bg-white/5 border border-neutral-cool/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-2">The "Open in Kaggle" Bridge</h3>
              <p className="text-neutral-slate dark:text-neutral-cool mb-4">
                  AI Studio features an <span className="font-bold">"Open in Kaggle"</span> button. When you click it, AI Studio packages up your current work—including your prompts and any generated code—and exports it into a brand new Kaggle Notebook.
              </p>
              <h4 className="text-lg font-semibold text-neutral-charcoal dark:text-white mt-6 mb-3">Why is this powerful?</h4>
              <ul className="space-y-3 text-neutral-slate dark:text-neutral-cool text-sm">
                  <li className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-functional-success flex-shrink-0 mt-0.5" />
                      <span><strong>Access Pro-Level Hardware:</strong> Immediately gain access to Kaggle's free GPUs and TPUs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-functional-success flex-shrink-0 mt-0.5" />
                      <span><strong>Full Development Environment:</strong> Move from a simple prompt interface to a full-featured coding environment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-functional-success flex-shrink-0 mt-0.5" />
                      <span><strong>Collaboration:</strong> Share your notebook, collaborate, and enter competitions.</span>
                  </li>
              </ul>
          </div>
      </section>

      {/* Featured Course */}
      <section className="bg-white dark:bg-neutral-darkCard p-6 sm:p-8 rounded-2xl border border-neutral-cool/20 shadow-sls-sm">
          <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white mb-8 text-center">Featured Course: 5-Day AI Agents Intensive</h2>
          
          <div className="bg-neutral-offWhite dark:bg-white/5 rounded-xl p-6 my-6 border border-neutral-cool/20">
              <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-4">🤔 What is an AI Agent?</h4>
              <p className="text-neutral-slate dark:text-neutral-cool mb-4">
                  A typical LLM: You give it a prompt, it gives text.
              </p>
              <pre className="bg-white dark:bg-black/20 rounded-md p-3 mb-4 text-sm font-mono text-neutral-slate dark:text-neutral-cool border border-neutral-cool/10">Prompt -&gt; LLM -&gt; Text</pre>
              <p className="text-neutral-slate dark:text-neutral-cool mb-4">
                  An AI Agent: It can think, take actions, and observe results to give a better answer.
              </p>
              <pre className="bg-white dark:bg-black/20 rounded-md p-3 mb-4 text-sm font-mono text-neutral-slate dark:text-neutral-cool border border-neutral-cool/10">Prompt -&gt; Agent -&gt; Thought -&gt; Action -&gt; Observation -&gt; Final Answer</pre>
          </div>

          <div className="bg-neutral-offWhite dark:bg-white/5 rounded-xl p-6 border border-neutral-cool/20">
              <h3 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-4">Agent Development Kit (ADK)</h3>
              <p className="text-neutral-slate dark:text-neutral-cool mb-4">A toolkit for building your own AI assistants. Get started:</p>
              
              <div className="border-b border-neutral-cool/20 mb-4 flex gap-4">
                  {(['python', 'go', 'java'] as const).map((lang) => (
                      <button
                          key={lang}
                          onClick={() => setActiveAdkTab(lang)}
                          className={`pb-2 text-sm font-medium capitalize transition-colors border-b-2 ${
                              activeAdkTab === lang
                                  ? 'border-cardinal dark:border-electric text-cardinal dark:text-electric'
                                  : 'border-transparent text-neutral-slate dark:text-neutral-cool hover:text-neutral-charcoal dark:hover:text-white'
                          }`}
                      >
                          {lang}
                      </button>
                  ))}
              </div>

              <div className="bg-white dark:bg-black/20 rounded-lg p-4 font-mono text-sm border border-neutral-cool/10 overflow-x-auto">
                  {activeAdkTab === 'python' && <code>pip install google-adk</code>}
                  {activeAdkTab === 'go' && <code>go get google.golang.org/adk</code>}
                  {activeAdkTab === 'java' && (
                      <div>
                          <p className="text-xs text-neutral-slate dark:text-neutral-cool mb-2">// pom.xml</p>
                          <code className="block mb-4">{`<dependency>
  <groupId>com.google.adk</groupId>
  <artifactId>google-adk</artifactId>
  <version>0.3.0</version>
</dependency>`}</code>
                      </div>
                  )}
              </div>
              
              <div className="mt-4 flex flex-wrap gap-4">
                  <a href={`https://google.github.io/adk-docs/get-started/${activeAdkTab}/`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-cardinal dark:text-electric hover:underline inline-flex items-center gap-1">
                      Read full {activeAdkTab} docs <ExternalLink size={14} />
                  </a>
              </div>
          </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="bg-white dark:bg-neutral-darkCard p-6 sm:p-8 rounded-2xl border border-neutral-cool/20 shadow-sls-sm">
          <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white mb-4 text-center">Your First AI Project</h2>
          <p className="text-center text-neutral-slate dark:text-neutral-cool mb-8">
              Build a simple AI-powered "mock judge" for legal arguments.
          </p>

          <div className="flex justify-center gap-2 mb-8 border-b border-neutral-cool/20">
              <button
                  onClick={() => setActivePart('part1')}
                  className={`px-6 py-3 text-sm font-bold rounded-t-lg transition-colors border-b-2 ${
                      activePart === 'part1'
                          ? 'border-cardinal dark:border-electric text-cardinal dark:text-electric bg-neutral-offWhite dark:bg-white/5'
                          : 'border-transparent text-neutral-slate dark:text-neutral-cool hover:bg-neutral-offWhite dark:hover:bg-white/5'
                  }`}
              >
                  Part 1: Kaggle Workspace
              </button>
              <button
                  onClick={() => setActivePart('part2')}
                  className={`px-6 py-3 text-sm font-bold rounded-t-lg transition-colors border-b-2 ${
                      activePart === 'part2'
                          ? 'border-cardinal dark:border-electric text-cardinal dark:text-electric bg-neutral-offWhite dark:bg-white/5'
                          : 'border-transparent text-neutral-slate dark:text-neutral-cool hover:bg-neutral-offWhite dark:hover:bg-white/5'
                  }`}
              >
                  Part 2: AI Studio Prototype
              </button>
          </div>

          <div className="space-y-4">
              {activePart === 'part1' ? (
                  <>
                      {/* Lesson 1 */}
                      <LessonCard title="Lesson 1 – Register for a Kaggle Account and Create a Notebook">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-3">Lecture</h4>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-neutral-slate dark:text-neutral-cool space-y-4">
                              <p>Today we're going to build our own AI practice judge. Before we can do anything smart or fancy, we need a place for our work to live.</p>
                              <p>Kaggle is just our workspace. Think of it like a Google Doc, but for code and little experiments. In this lesson, your only job is to get into Kaggle, create a new notebook, and give it a clear title so you always know what it is.</p>
                              <p>We'll start by signing into kaggle.com, creating and renaming a new notebook and clicking on Code. At the top, we'll rename it something like ‘Oral Argument Sparring Partner'. That's the project we're building together.</p>
                              <p>Then, we'll add a little text description at the top—just a paragraph in Markdown—to remind ourselves what this notebook is for: a mock judge that asks questions, gives feedback, and is strictly for learning and practice, not for doing graded work.</p>
                              <p>By the end of this lesson, you won't have any AI yet—but you will have a clean, labeled workspace that feels like ‘home base' for the rest of the course.</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-4">Video Overview</h4>
                            <VideoEmbed src="https://drive.google.com/file/d/1JNILOZHaWGCqNeyhH5AgRYvmi4Ucs_0x/preview" title="Lesson 1 Video" />
                          </div>
                        </div>
                        <div className="pt-8 border-t border-neutral-cool/10 space-y-8">
                          <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white">Steps</h4>
                          {[
                            { step: 1, title: "Get a Kaggle Account", desc: "Go to kaggle.com and click Register. You can set up your profile now, or do it later.", img: "https://i.postimg.cc/hPzQL2GC/Screenshot-2025-11-14-at-10-47-09-AM.png" },
                            { step: 2, title: "Create a New Notebook", desc: "Click the + Create button and select <> Notebook from the dropdown menu.", img: "https://i.postimg.cc/C5MHMkC8/Screenshot-2025-11-14-at-11-10-02-AM.png" },
                            { step: 3, title: "Rename Your Notebook", desc: "In the top-left corner, click on the generic name (like 'notebookb27e6f9d2') and rename it to 'Oral Argument Sparring Partner.'", img: "https://i.postimg.cc/jjVHwGQR/Screenshot-2025-11-14-at-11-11-30-AM.png" },
                            { step: 4, title: "Add a Markdown Cell", desc: "Your notebook starts with a code cell. Click the word 'Code' and change it to 'Markdown' to create a text cell for descriptions.", img: "https://i.postimg.cc/Fs73P9Tm/Screenshot-2025-11-14-at-11-03-29-AM.png" },
                          ].map((item) => (
                            <div key={item.step} className="grid md:grid-cols-2 gap-8 items-center">
                              <div>
                                <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-2">{item.step}. {item.title}</h5>
                                <p className="text-neutral-slate dark:text-neutral-cool">{item.desc}</p>
                              </div>
                              <img src={item.img} alt={item.title} className="rounded-lg shadow-md border border-neutral-cool/20" />
                            </div>
                          ))}
                          <div>
                            <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-4">5. Paste the Description</h5>
                            <p className="text-neutral-slate dark:text-neutral-cool mb-4">Copy and paste the following markdown into your new text cell.</p>
                            <CodeBlock id="l1-code" code={`# Oral Argument Sparring Partner (Text Version)

This notebook creates a simple "mock judge"
that:
- asks me oral argument-style questions,
- analyzes my answers,
- gives feedback on:
  - whether I answered directly,
  - whether I used the key facts,
  - whether I cited legal authority.

It is for **learning and practice only**,
not for writing graded assignments or exams.`} />
                            <p className="text-center text-sm text-neutral-slate dark:text-neutral-cool mt-6">Your notebook should now look like this:</p>
                            <img src="https://i.postimg.cc/d0KCtGwB/Screenshot-2025-11-14-at-11-07-22-AM.png" alt="Final result of the notebook setup" className="rounded-lg shadow-md border border-neutral-cool/20 mt-2 max-w-3xl mx-auto block" />
                          </div>
                        </div>
                      </LessonCard>

                      {/* Lesson 2 */}
                      <LessonCard title="Lesson 2 – Representing a Case or Fact Pattern">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-3">Lecture</h4>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-neutral-slate dark:text-neutral-cool space-y-4">
                              <p>In this lesson, we answer a very basic question: how does our agent know what case we're talking about?</p>
                              <p>The computer can't just 'see' your casebook. We have to hand it the facts in a form it understands. That's what this step is all about.</p>
                              <p>We create a variable called <code>case_text</code>. You can think of this as a labeled box that holds a big chunk of text. Inside that box, you paste or type a short summary of a real case or a hypothetical fact pattern.</p>
                              <p>We use triple quotes so you can paste several paragraphs and keep them nicely formatted. Then we run a simple <code>print</code> statement to check that what's inside <code>case_text</code> is exactly what we expect.</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-4">Video Overview</h4>
                            <VideoEmbed src="https://drive.google.com/file/d/1V8X8QZu5GfdE3xKxulJED0EtaUuLvYCk/preview" title="Lesson 2 Video" />
                          </div>
                        </div>
                        <div className="pt-8 border-t border-neutral-cool/10">
                          <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-6">Practice</h4>
                          <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="text-neutral-slate dark:text-neutral-cool">
                              <p>Let's practice with these two cases below. Copy and paste them into Kaggle as code and click the run button for each. Make sure you preserve the formatting with triple quotations.</p>
                            </div>
                            <CodeBlock id="l2-code" code={`case_text = """
[Paste or type your case summary or
 fact pattern here.]
"""
print("Current case/fact pattern:")
print(case_text)`} />
                          </div>
                          <img src="https://i.postimg.cc/g2kYmJ6Z/Screenshot-2025-11-14-at-11-47-27-AM.png" alt="Kaggle notebook showing case text practice" className="rounded-lg shadow-md border border-neutral-cool/20 mt-6 max-w-4xl mx-auto block" />
                        </div>
                        <div className="pt-8 border-t border-neutral-cool/10 space-y-6">
                          <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white">Example Cases</h4>
                          <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                            <h5 className="text-lg font-bold text-neutral-charcoal dark:text-white">1. Torts - Palsgraf v. Long Island Railroad Co.</h5>
                            <p className="text-sm text-neutral-slate dark:text-neutral-cool mb-4">(foreseeability / proximate cause)</p>
                            <div className="font-mono text-sm border border-neutral-cool/20 p-4 rounded-md bg-white dark:bg-neutral-darkBg text-neutral-charcoal dark:text-neutral-cool leading-relaxed">
                              Helen Palsgraf was standing on a platform of the Long Island Railroad with her daughters, waiting for a train. A different train began to leave the station, and two men ran to catch it. One man jumped on safely. The other man, who was carrying a small package, seemed unsteady as he tried to board. A railroad guard on the platform pushed him from behind while another employee pulled him from inside the train to help him get on. In the process, the man dropped his package onto the tracks. The package contained fireworks, which exploded when it hit the ground. The shock from the explosion caused a heavy coin-operated scale at the other end of the platform to topple over and strike Palsgraf, injuring her. She sued the railroad, arguing that its employees were negligent in the way they assisted the passenger, and that this negligence caused her injuries.
                            </div>
                          </div>
                          <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                            <h5 className="text-lg font-bold text-neutral-charcoal dark:text-white">2. Contracts – Lucy v. Zehmer</h5>
                            <p className="text-sm text-neutral-slate dark:text-neutral-cool mb-4">(objective theory of assent)</p>
                            <div className="font-mono text-sm border border-neutral-cool/20 p-4 rounded-md bg-white dark:bg-neutral-darkBg text-neutral-charcoal dark:text-neutral-cool leading-relaxed">
                              W.O. Lucy had long wanted to buy the Ferguson Farm, owned by A.H. Zehmer and his wife in Dinwiddie County, Virginia. Zehmer had turned down earlier offers. One night, Lucy visited Zehmer's roadside restaurant. The two men drank together and began talking again about selling the farm. During the conversation, Zehmer wrote on the back of a restaurant receipt, "We hereby agree to sell to W. O. Lucy the Ferguson Farm complete for $50,000.00, title satisfactory to buyer," and got his wife to sign it. Lucy took the signed writing home and started arranging financing for the purchase. Later, Zehmer refused to go through with the sale, claiming he had been joking and never seriously intended to sell the farm. Lucy sued to enforce the agreement.
                            </div>
                          </div>
                        </div>
                      </LessonCard>

                      {/* Lesson 3 */}
                      <LessonCard title="Lesson 3 – Extracting Simple “Issues” (Very Basic)">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-3">Lecture</h4>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-neutral-slate dark:text-neutral-cool space-y-4">
                              <p>Now that our case is loaded into the notebook, we want the agent to have at least a <em>rough</em> sense of what kind of law it's dealing with. Is this about negligence? Contracts? Constitutional law?</p>
                              <p>In this lesson, we build a very simple issue spotter—not a smart legal brain, just a keyword scanner. We create a little list that says, in effect, 'If you see words like <em>duty</em> or <em>breach</em>, guess this might be a negligence case; if you see <em>offer</em> or <em>consideration</em>, think contracts.'</p>
                              <p>We then write a helper function that reads through <code>case_text</code>, looks for those words, and returns a list of possible issue areas.</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-4">Video Overview</h4>
                            <VideoEmbed src="https://drive.google.com/file/d/1q_wyHzYfobC0gUwF0jrGbAwgn0M3OMFn/preview" title="Lesson 3 Video" />
                          </div>
                        </div>
                        <div className="pt-8 border-t border-neutral-cool/10">
                          <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-6">Steps</h4>
                          <p className="text-neutral-slate dark:text-neutral-cool mb-4">Let's add another code cell below the <code>case_text</code> one. We won't do fancy AI yet. We'll use <strong>keywords</strong> to guess the issues.</p>
                          <CodeBlock id="l3-code" code={`# A super simple way to guess issues based on words in the text.
POSSIBLE_ISSUES = {
    "negligence": ["duty", "breach", "causation", "harm"],
    "contract": ["offer", "acceptance", "consideration", "breach"],
    "constitutional": ["first amendment", "free speech", "due process", "equal protection"],
}

def extract_issues(text: str):
    """
    Look for key words in the case text and return a list of possible
    issues.
    This is a simple starting point, not a real legal engine.
    """
    text_lower = text.lower()
    found_issues = []
    
    for issue_name, keywords in POSSIBLE_ISSUES.items():
        for kw in keywords:
            if kw in text_lower:
                found_issues.append(issue_name)
                break # we found enough for this issue

    # Remove duplicates
    found_issues = list(set(found_issues))
    return found_issues

issues = extract_issues(case_text)
print("I think these issues might be present:", issues)`} />
                          <div className="mt-6 text-neutral-slate dark:text-neutral-cool space-y-4">
                            <p>You should see something like this as a result: <code>I think these issues might be present: ['contract']</code></p>
                            <p><strong>Parts of the code explained:</strong></p>
                            <ul className="list-disc list-inside">
                                <li><code>POSSIBLE_ISSUES</code> = a <strong>lookup table</strong>: when it sees "duty", it guesses "negligence".</li>
                                <li><code>extract_issues</code> = a <strong>helper function</strong>: takes the case text and returns a list like <code>['negligence']</code>.</li>
                            </ul>
                          </div>
                          <img src="https://i.postimg.cc/7LrjqPhM/Screenshot-2025-11-14-at-12-35-57-PM.png" alt="Sample output of the issue extraction" className="rounded-lg shadow-md border border-neutral-cool/20 mt-6 max-w-4xl mx-auto block" />
                        </div>
                      </LessonCard>

                      {/* Lesson 4 */}
                      <LessonCard title="Lesson 4 – Building a Judge-Style Question Script">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-3">Lecture</h4>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-neutral-slate dark:text-neutral-cool space-y-4">
                              <p>Knowing the general topic is nice, but our real goal is to practice oral argument. That means the judge has to ask questions—good ones.</p>
                              <p>In this lesson, we give the agent a toolbox of judge-style questions for each issue area. For negligence, we might prepare questions about duty and foreseeability. For contracts, questions about offer and acceptance.</p>
                              <p>We store these questions in a structured way, like index cards grouped by topic. Then we write a small function that says, ‘Look at the issues we spotted, pull out the matching cards, and assemble them into a script.'</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-4">Video Overview</h4>
                            <VideoEmbed src="https://drive.google.com/file/d/1bbvjL5hQD5UPh29Y76hf59hhHEPzXBRZ/preview" title="Lesson 4 Video" />
                          </div>
                        </div>
                        <div className="pt-8 border-t border-neutral-cool/10">
                          <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-6">Add this Code to your Notebook</h4>
                          <CodeBlock id="l4-code" code={`JUDGE_QUESTIONS = {
    "negligence": [
        "Counsel, what is your best authority on the defendant's duty in this situation?",
        "How do you respond to the argument that the harm was not reasonably foreseeable?",
        "Where in the record do we see evidence of breach?",
    ],
    "contract": [
        "Counsel, can you walk us through the offer and acceptance in this agreement?",
        "What is the consideration on each side, exactly?",
        "If we accept your interpretation, what happens to the principle of freedom of contract?",
    ],
    "constitutional": [
        "What level of scrutiny applies here, and why?",
        "How do you reconcile your position with precedent on this type of regulation?",
        "Where do you draw the line if we adopt your rule?",
    ],
}

def build_question_script(issues):
    script = []
    for issue in issues:
        if issue in JUDGE_QUESTIONS:
            script.extend(JUDGE_QUESTIONS[issue])
    
    if not script:
        script.append("Counsel, what is the central legal issue in this case, in your view?")

    return script

question_script = build_question_script(issues)
print("Judge question script:")
for i, q in enumerate(question_script, start=1):
    print(f"{i}. {q}")`} />
                          <div className="mt-6">
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-4">Sample Output</h4>
                            <img src="https://i.postimg.cc/L6rbV4zQ/Screenshot-2025-11-14-at-12-36-58-PM.png" alt="Sample output of the question script code" className="rounded-lg shadow-md border border-neutral-cool/20 max-w-4xl mx-auto block" />
                          </div>
                        </div>
                      </LessonCard>

                      {/* Lesson 5 */}
                      <LessonCard title="Lesson 5 – Simple Answer Analyzer">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-3">Lecture</h4>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-neutral-slate dark:text-neutral-cool space-y-4">
                              <p>Next, we turn to your side of the conversation: your answers. The point of this agent is to help you practice good habits.</p>
                              <p>In this lesson, we build a little 'answer analyzer' that acts like a mirror. When you answer a question, the agent checks for three basic things:</p>
                              <ol>
                                  <li>Did you answer <strong>directly</strong>?</li>
                                  <li>Did you use <strong>specific facts</strong> from the case?</li>
                                  <li>Did you cite any <strong>authority</strong>?</li>
                              </ol>
                              <p>The code looks for small clues: words like 'yes' and 'no' for directness, repeated fact words from the case, and patterns that resemble case names.</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-4">Video Overview</h4>
                            <VideoEmbed src="https://drive.google.com/file/d/1sG_FSC0xEOIDavpFOqNvl0RIJfNnIv8S/preview" title="Lesson 5 Video" />
                          </div>
                        </div>
                        <div className="pt-8 border-t border-neutral-cool/10 space-y-12">
                          <div>
                            <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-2">1. Add the `analyze_answer` Function</h5>
                            <p className="text-neutral-slate dark:text-neutral-cool mb-4">Place this code directly below the <code>case_text</code> code from Lesson 2.</p>
                            <CodeBlock id="l5-code1" code={`import re

def analyze_answer(question: str, answer: str, case_text: str):
    answer_lower = answer.lower()
    question_lower = question.lower()
    case_lower = case_text.lower()
    
    direct_keywords = ["yes", "no", "in my view", "the key issue is"]
    direct_score = any(kw in answer_lower for kw in direct_keywords)
    
    case_words = [w for w in re.findall(r"\\b\\w+\\b", case_lower) if len(w) > 4]
    facts_score = any(w in answer_lower for w in case_words[:20])
    
    authority_score = (" v. " in answer) or bool(re.search(r"[A-Z][a-z]+ v\. [A-Z][a-z]+", answer))
    
    feedback = {
        "direct_answer": direct_score,
        "used_facts": facts_score,
        "cited_authority": authority_score,
    }
    return feedback`} />
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-2">2. Define the Sample Judge Question</h5>
                            <CodeBlock id="l5-code2" code={`question = "Counsel, what is your best authority on the defendant's duty in this situation?"
print(question)`} />
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-2">3. Test a Weak Answer</h5>
                            <CodeBlock id="l5-code3" code={`weak_answer = """
Well, Your Honor, this is basically a negligence case and the defendant was
careless, so we think they should be liable.
"""

feedback_weak = analyze_answer(question, weak_answer, case_text)
print("Weak answer feedback:")
print(feedback_weak)`} />
                            <img src="https://i.postimg.cc/cCdDrT8Y/Screenshot-2025-11-14-at-2-01-20-PM.png" alt="Weak answer output" className="rounded-lg shadow-md border border-neutral-cool/20 mt-4 max-w-xl" />
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-2">4. Test a Strong Answer</h5>
                            <CodeBlock id="l5-code4" code={`good_answer = """
Yes, Your Honor. Our best authority is Palsgraf v. Long Island Railroad Co.,
where the court focused on the foreseeability of harm to the plaintiff.
Here, as in Palsgraf, the railroad employees' actions on the crowded
platform created a foreseeable risk that unsecured items could fall and injure
nearby passengers.
"""

feedback_good = analyze_answer(question, good_answer, case_text)
print("Good answer feedback:")
print(feedback_good)`} />
                            <img src="https://i.postimg.cc/pXCdhd3R/Screenshot-2025-11-14-at-2-06-07-PM.png" alt="Strong answer output" className="rounded-lg shadow-md border border-neutral-cool/20 mt-4 max-w-xl" />
                          </div>
                        </div>
                      </LessonCard>

                      {/* Lesson 6 */}
                      <LessonCard title="Lesson 6 – Running the Mock Oral Argument Session">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-3">Lecture</h4>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-neutral-slate dark:text-neutral-cool space-y-4">
                              <p>Now we put everything together into a real practice session. In this lesson, we create a loop: the judge asks a question from your script, you answer, the agent analyzes that answer, and then it gives you immediate feedback.</p>
                              <p>It keeps track of how often you hit each of those marks across all the questions in the session. At the end, it prints a little summary.</p>
                              <p>By the end of this lesson, you have a working <strong>text-based moot court simulator</strong>.</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-4">Video Overview</h4>
                            <VideoEmbed src="https://drive.google.com/file/d/1awEERs6-AwnwSCmF-AGoD0wi-Lf1TM7D/preview" title="Lesson 6 Video" />
                          </div>
                        </div>
                        <div className="pt-8 border-t border-neutral-cool/10">
                          <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-6">The Core Code</h4>
                          <p className="text-neutral-slate dark:text-neutral-cool mb-4">Copy and paste this big block of code into a new cell. This function, <code>oral_argument_session</code>, runs the whole show.</p>
                          <CodeBlock id="l6-code" code={`def oral_argument_session(case_text: str, question_script):
    print("=== ORAL ARGUMENT SPARRING SESSION START ===\\n")
    
    session_scores = {
        "direct_answer": 0,
        "used_facts": 0,
        "cited_authority": 0,
        "total_questions": 0,
    }
    
    for question in question_script:
        print(f"Judge: {question}")
        answer = input("Your answer: ")
        
        feedback = analyze_answer(question, answer, case_text)
        session_scores["total_questions"] += 1
        
        for key in ["direct_answer", "used_facts", "cited_authority"]:
            if feedback[key]:
                session_scores[key] += 1
        
        print("\\n--- Feedback on this answer ---")
        print("Directly answered? ", "✅" if feedback["direct_answer"] else "⚠️ Try to be more direct.")
        print("Used case facts?   ", "✅" if feedback["used_facts"] else "⚠️ Bring in specific facts.")
        print("Cited authority?   ", "✅" if feedback["cited_authority"] else "⚠️ Try citing a case or rule.")
        print("------------------------------\\n")
        
    n = session_scores["total_questions"]
    if n == 0:
        print("No questions were asked.")
        return

    print("=== SESSION SUMMARY ===")
    print(f"Total questions: {n}")
    print(f"Direct answers:  {session_scores['direct_answer']}/{n}")
    print(f"Used facts:      {session_scores['used_facts']}/{n}")
    print(f"Cited authority: {session_scores['cited_authority']}/{n}")
    print("\\nThink about which area you want to practice more next time.")

# Run the session!
oral_argument_session(case_text, question_script)`} />
                        </div>
                      </LessonCard>
                  </>
              ) : (
                  <>
                      {/* Lesson 7 */}
                      <LessonCard title="Lesson 7 – Getting Set Up in Google AI Studio">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-3">Lecture</h4>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-neutral-slate dark:text-neutral-cool space-y-4">
                              <p>Now that we’ve built a simple practice judge in Kaggle, we’re going to move to Google AI Studio.</p>
                              <p>Kaggle was our playground for Python code. Google AI Studio is our playground for <strong>large language models</strong>—we tell them who to be and how to act.</p>
                              <p>Google AI Studio is a workspace, not something scary. The good news is, you already did the hard conceptual work in Kaggle.</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-4">Video Overview</h4>
                            <VideoEmbed src="https://drive.google.com/file/d/1GHF0RnEod1uUqH8qdGDX5U6thleqYE1G/preview" title="Lesson 7 Video" />
                          </div>
                        </div>
                        <div className="pt-8 border-t border-neutral-cool/10">
                          <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-6">Steps</h4>
                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4 text-neutral-slate dark:text-neutral-cool">
                              <ol className="list-decimal list-inside space-y-4">
                                <li>
                                  <strong>Check Google account</strong>
                                  <ul className="list-disc list-inside ml-6 mt-2">
                                    <li>If you use Gmail / Google Drive / YouTube: you already have one.</li>
                                    <li>If not, go to <a href="https://accounts.google.com" target="_blank" className="text-cardinal dark:text-electric hover:underline">accounts.google.com</a>.</li>
                                  </ul>
                                </li>
                                <li>
                                  <strong>Navigate to Google AI Studio</strong>
                                  <p className="mt-2 ml-6">Go to <a href="https://aistudio.google.com/apps" target="_blank" className="text-cardinal dark:text-electric hover:underline">https://aistudio.google.com/apps</a></p>
                                </li>
                                <li>
                                  <strong>Sign in</strong>
                                  <ul className="list-disc list-inside ml-6 mt-2">
                                    <li>Click <strong>Sign in</strong> (top right).</li>
                                    <li>Choose the Google account you want to use.</li>
                                  </ul>
                                </li>
                              </ol>
                            </div>
                            <img src="https://i.postimg.cc/7ZB55NfB/Screenshot-2025-11-14-at-4-00-16-PM.png" alt="Google AI Studio Home Screen" className="rounded-lg shadow-md border border-neutral-cool/20" />
                          </div>
                        </div>
                      </LessonCard>

                      {/* Lesson 8 */}
                      <LessonCard title="Lesson 8 – Defining the AI Judge (System Prompt)">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-3">Lecture</h4>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-neutral-slate dark:text-neutral-cool space-y-4">
                              <p>So far, everything lives in Kaggle and uses simple Python rules. In the second half of the course, we move into Google AI Studio, where we can tap into a more powerful AI model and eventually add voice.</p>
                              <p>The first step there is not code—it’s <strong>instructions</strong>. You can think of this as writing the judge’s job description: who they are, what their goals are, and what they must <em>not</em> do.</p>
                              <p>In this lesson, we write a long, clear paragraph for the model in AI Studio called a "system prompt." By the end of this lesson, your judge in AI Studio understands its role: a strict but helpful practice partner, not a cheating engine.</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-4">Video Overview</h4>
                            <VideoEmbed src="https://drive.google.com/file/d/1HU6NjHTb7kEwlWSPKx7RIiCcGox2jg0B/preview" title="Lesson 8 Video" />
                          </div>
                        </div>
                        <div className="pt-8 border-t border-neutral-cool/10">
                          <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-6">Steps</h4>
                          <div className="space-y-12">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                              <div>
                                <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-2">1. Find "Build" in Sidebar</h5>
                                <p className="text-neutral-slate dark:text-neutral-cool">From the AI Studio home screen, look for the "Build" icon in the left sidebar.</p>
                              </div>
                              <img src="https://i.postimg.cc/y8HrxYBx/Screenshot-2025-11-14-at-11-16-23-PM.png" alt="Finding Build in AI Studio" className="rounded-lg shadow-md border border-neutral-cool/20" />
                            </div>
                            
                            <div>
                              <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-2">2. Copy the System Prompt</h5>
                              <p className="text-neutral-slate dark:text-neutral-cool mb-4">This prompt is very long, but it covers everything: role, settings, case library, live session rules, and feedback. Copy the entire block below.</p>
                              <CodeBlock id="l8-prompt" code={`Stanford Law School Oral Argument Coach – Prompt for Google AI Studio

Overview and Purpose
Build a Stanford Law School Oral Argument Coach web application using Google AI Studio (Gemini 2.5 Pro). This app will serve as a moot court practice platform for law students, providing a realistic oral argument simulation with AI judges and optional AI co-counsel. The experience should be immersive (voice-based) and educational, helping students sharpen their advocacy skills in a safe environment. Key features include a case library (preloaded case summaries by area of law), the ability for students to input or fetch case summaries, configurable practice settings (timer, difficulty, judge behavior, etc.), real-time voice interaction, and post-session feedback with transcripts.

Wow-Factor Features: The app should feel cutting-edge and engaging. It must simulate the pressure of real court arguments with dynamic AI judges (who can interrupt with questions like a “hot bench”) and realistic courtroom ambiance. For example, UBC’s virtual moot court project found that adding an animated judge, voice synthesis for interruptions, subtitles, and timers greatly enhanced the realism of practice sessions. Our app will likewise use voice recognition and text-to-speech for natural spoken dialogue, making the practice feel like a live courtroom exchange. Instant, AI-generated feedback and a transcript at the end will provide valuable insights into the student’s legal reasoning and delivery – a feature highlighted by existing AI moot court tools. The combination of immersive voice interaction and immediate, thorough feedback will give students a “wow” experience that boosts their confidence and skills.

Home Page
Design an attractive Home Page that welcomes users and explains how to use the app in clear, inviting language. The home page should include:
● App Title and Tagline: Prominently display the app name “Stanford Law School Oral Argument Coach” and a brief tagline (e.g. “Practice your oral arguments with an AI Judge in a realistic moot court simulation.”).
● Overview Instructions: A short paragraph (3-5 sentences) describing the app’s purpose and how it works. For example: “Welcome to your AI-powered moot court practice arena. This app lets you simulate appellate oral arguments with an AI judge and optional AI co-counsel. You can use a summary of a real case or your own case summary to argue, all in a realistic courtroom setting with voice interaction. Configure your session settings, practice speaking naturally, and receive a full transcript and feedback at the end.” The tone should be encouraging and professional.
● “Brought to you by” Footer: At the bottom of the home page, include a footer or small text block with a privacy notice and attribution. It should read: “This app is brought to you by the Robert Crown Law Library. Created by Will Huggins using Google AI Studio. © 2025.” Make sure this statement is clearly visible but unobtrusive (e.g. smaller font at page bottom).
● Start Button: A clear call-to-action button labeled “Get Started” or “Begin Practice” that takes the user to the Settings page. This button should stand out (e.g. styled in Stanford’s cardinal red color for emphasis).

Ensure the home page has a clean layout with Stanford Law School branding – use Stanford’s official colors and style. For example, apply Cardinal Red (#8C1515) for headers or accents and white (#FFFFFF) or neutral gray for backgrounds. Stanford’s palette also includes a dark charcoal gray (#231F20) as a secondary color and an accent Palo Alto green (#175E54). Use these colors tastefully for a professional look (e.g. a cardinal red header bar with white text, and charcoal for body text). Include the Stanford Law School logo if available (and if usage is permitted), or simply use a clean text heading with Stanford font styles. The overall design should evoke Stanford’s identity (bold, academic, and modern).

Navigation
All pages after the home page should include a Home button (or icon) in a consistent location (e.g. top-left corner) so that users can return to the home/landing page at any time. This helps with easy navigation. Also include a clear page title at the top of each page (for context, e.g. “Settings”, “Case Selection”, “Practice Session”) so users know where they are. The Home button can be a Stanford logo or a home icon, styled appropriately. Navigation should be intuitive and minimal.

Settings Page
Design a Settings page that appears after the user clicks “Get Started.” This page will allow the student to configure their moot court practice session parameters. Use a clean, “sleek” UI design – perhaps a card or panel for each group of settings, or a simple form. Each setting should have a label and an input control (dropdown, slider, toggle, etc.) as appropriate. The settings to include are:
1. Timer Length: Let the student select a timer duration that mimics real moot court oral argument times. Provide options such as 5 minutes, 10 minutes, 15 minutes, 20 minutes, etc., as well as an option for “No Timer” (i.e. unlimited time). This could be a dropdown menu or radio button list. For example: “Oral argument time limit: [None / 5 min / 10 min / 15 min …]”. In real competitions, appellate arguments often have strict time limits (commonly 10–15 minutes per side), so including those intervals adds realism. If a timer is set, the app will display a countdown during the argument and possibly give a subtle alert (like a gentle sound or visual cue) when time is nearly up and when time has expired. If “No Timer” is selected, the student can speak as long as they want.
2. Difficulty (Law School Year): Allow the student to select their level: 1L, 2L, 3L/LLM. This setting will adjust the complexity of questions the AI judge asks and the expectations for the student’s answers. For instance, a 1L difficulty might mean the judge’s questions are more basic or guiding, whereas a 3L/LLM difficulty could involve more complex, detail-oriented questions and a faster-paced back-and-forth (simulating more experienced students). This can be a dropdown with those options. The app will use this setting to tune the AI judge’s questioning style (perhaps via different prompt presets for the AI judge).
3. Judge’s Bench Style: Select the degree of pressure from the AI judge – Standard Bench vs. Hot Bench. This toggle or dropdown will control how aggressive or frequent the judge’s questions and interruptions are. A “Standard” bench means the judge asks occasional questions and lets the student speak at length between questions. A “Hot Bench” means the judge frequently interrupts with tough, rapid-fire questions, making the experience more challenging (much like a panel of judges that constantly interjects – a known phenomenon in appellate advocacy.. Implement this such that if “Hot Bench” is chosen, the AI’s behavior is coded to interrupt more often and maybe with less waiting time between questions. This setting adds realism as students can practice handling intense questioning vs. a calmer court.
4. Voice Type for AI Judge (and Co-Counsel): Provide a choice of voice for the AI characters. Allow the student to pick between Male Voice and Female Voice for the AI’s text-to-speech output. This will apply to the AI judge’s spoken questions (and the co-counsel’s voice, if activated). Using Google’s text-to-speech capabilities in Gemini 2.5, we can have high-quality, natural voices for these roles. For instance, select a prebuilt male voice (like a confident baritone) or female voice (clear, authoritative tone). In the UI, this could be a dropdown or radio buttons (“Judge Voice: Male / Female”). Implementation note: Google’s Gemini API supports native TTS with different voices and even multi-speaker audio generation. We will use a single voice selection to keep it simple – all AI outputs (judge and co-counsel) use that selected voice. (Optionally, for extra realism, the co-counsel could use a different voice than the judge, but we will assume one voice selection for both unless easily configurable).
5. Courtroom Sounds: A toggle switch labeled something like “Courtroom Ambient Sound: On/Off.” When turned on, the app should play subtle courtroom ambient noise during the session – for example, a low murmur or background sound of a courtroom or the occasional flipping of pages, etc. This adds immersion. Ensure the sound is royalty-free and suitable (perhaps a looping audio of courtroom ambiance from a free library). When this toggle is on, load and play the ambient sound quietly in the background of the session page; when off, no background audio should play. Make sure to include a brief audio loading and a user gesture (like clicking “Start Session”) before audio autoplay if required by browser policies. The ambient sound should not overpower the voices, just complement them. Also include appropriate controls to stop the sound when the session ends or the user toggles it off mid-session.
6. Co-Counsel Assistance: A toggle for “Co-Counsel Hints: On/Off.” When turned on, an AI co-counsel is present during the session to assist the student. The co-counsel will listen to the student’s argument and the judge’s questions, and can interject with hints or suggestions only when asked or at designated times. This feature is like having a partner or second-chair attorney who can whisper advice. Implementation: if enabled, provide a UI button during the session like “Ask Co-Counsel” which the student can click (or a voice command) to get a hint. The AI co-counsel would then briefly pause the simulation and give a helpful suggestion (via voice and text) – for example, reminding the student of a legal precedent or suggesting a way to phrase an answer. The co-counsel’s advice should be context-aware (it will be generated by analyzing the last exchange or the judge’s question). If co-counsel is off, no hints are given. This feature should be carefully balanced so it doesn’t interrupt unless asked.

The Settings page layout can group related settings. For example, timers and difficulty in one section (labeled “Session Parameters”), and environment settings (voice, sounds, co-counsel) in another section (labeled “Environment & Aids”). Use toggles (on/off switches) for binary settings (court sounds, co-counsel), and dropdowns or radio groups for multiple-choice settings (year, voice, etc.). Keep the page visually clean – perhaps using form cards or a simple grid of options.
At the bottom of the Settings page, include a prominent “Next” or “Proceed” button to go to case selection once the user has configured everything. This button could be labeled “Continue to Case Selection” and should only activate (or highlight) once required settings are chosen (if any are required; most have defaults, so it can likely always be active). Remember to keep the Home button visible as well (in case the user wants to cancel and return home).

Case Selection Page
After the user sets their preferences, they proceed to choosing or inputting the case summary for the practice session. The Case Selection page should offer three main options to the student, clearly presented (possibly as three columns or a three-choice menu with icons):
Option A: Choose from App’s Case Library – The app should provide a built-in library of real, pre-summarized case scenarios. Students can browse or search by legal subject area (law interest) and select a case to argue. Organize the library by categories (areas of law) for easy browsing. For example, provide categories like:
● Criminal Law – e.g. Miranda v. Arizona (1966) (summary: suspects must be informed of rights before custodial interrogation, or statements are inadmissible – establishing the “Miranda warning”).
● Constitutional Law – e.g. Brown v. Board of Education (1954) (summary: “Separate but equal” segregation in public schools is unconstitutional under the Equal Protection Clause, ending racial segregation in schools).
● Administrative & Regulatory Law – e.g. Chevron U.S.A., Inc. v. NRDC (1984) (summary: established Chevron deference, where courts defer to reasonable agency interpretations of ambiguous statutes).
● Corporate/Commercial Law – e.g. Dodge v. Ford Motor Co. (Mich. 1919) (summary: a landmark corporate law case holding that a for-profit corporation should primarily benefit its shareholders; Ford Motor Co. was instructed to pay dividends rather than just reinvest profits for employee/public benefit).
● Intellectual Property Law – e.g. Sony Corp. of America v. Universal City Studios (1984) (summary: the Supreme Court held that making individual copies of complete TV shows for time-shifting (using VCRs) is fair use, and device makers (Sony) weren’t liable for VCR users’ copyright infringement.
● Tax Law – e.g. Commissioner v. Glenshaw Glass Co. (1955) (summary: defined “income” for tax purposes as any undeniable accessions to wealth, clearly realized, over which the taxpayers have complete dominion – essentially establishing the broad definition of taxable income).
● Environmental Law – e.g. Massachusetts v. EPA (2007) (summary: the Supreme Court ruled that the EPA has authority under the Clean Air Act to regulate greenhouse gases, and that Massachusetts had standing to sue the EPA for not regulating them, paving the way for federal climate change regulation).
● International Law/Human Rights – e.g. Filartiga v. Pena-Irala (2d Cir. 1980) (summary: a U.S. federal court allowed a civil suit for torture under the Alien Tort Statute, signifying that certain international human rights violations can be addressed in U.S. courts).
(Note: the above are examples; include a diverse set of landmark cases in each category. We want a thorough list of categories covering major law school subjects. Each case in the library should have a concise summary of the facts/issues and holding. Ensure summaries are factual and clear.)
The UI for this could be a list or grid of categories. When the student selects a category, show a list of case titles under it (maybe with a one-line description each). The student can click a case to see its full summary and confirm selection. Alternatively, use a dropdown or search bar to filter cases by name or topic. Provide at least a dozen or more preloaded case summaries across the categories so students have many options.
Option B: AI-Assisted Case Fetch – Allow the student to retrieve a case summary on the fly by searching for a specific case name (or citation). For example, an input box: “Search for a case by name or citation”. The student can type a case name (“Roe v. Wade 1973”, “Marbury v. Madison 1803”, etc.) and click a “Fetch Summary” button. Upon doing so, the app will attempt to fetch the case from an external source (prioritize an API or database) and generate a summary.
● CourtListener Integration: First, try to use the CourtListener API (Free Law Project) to get case information. CourtListener hosts a huge database of legal opinions accessible via REST API. Use their Case Law API to search for the case. For example, call the CourtListener search endpoint with the case name and retrieve the opinion text if available. If found, extract the opinion’s summary or the main points. (If the full text is retrieved, the app can run an on-the-fly summarization using the AI model to condense it into a brief summary for the student to review.)
● Fallback to Web Search: If the case isn’t found via API (or if CourtListener is unavailable), the app should fallback to another method. This could be using a web search or another legal database. For instance, query a public source like Wikipedia or Justia for that case. Example: If the user searches “Roe v. Wade”, the app might query Wikipedia’s API for that title and extract the first paragraph as the summary. Or use an internet search API to find a summary. The implementation should handle this gracefully: if a summary is found, display it; if not, show an error message or suggestion (e.g. “Case not found, please check the name or try another”).
After fetching, show the retrieved summary to the user for confirmation. Let them edit it if needed (maybe the student wants to tweak or shorten it). Then they can confirm to use that summary for the session.
Option C: Provide Your Own Summary – The student can paste or upload a case summary that they have prepared themselves. Provide a large text box for pasting text, or an “Upload .txt/.pdf” file option (if file upload is feasible in AI Studio app). This way, if the student has a specific moot court problem or a custom case scenario (e.g. their moot competition’s problem statement), they can use that. If they paste text, show a word count or prompt length to ensure it’s not too large (though it can be several paragraphs – enough to summarize a case). If file upload is implemented, parse the file to text. Once input is received, display a snippet or the first part of it back to the user so they know it’s loaded correctly.

For all three options, once a case is selected or provided, the app should display the case summary on screen so the student can quickly review the facts before starting. This summary will also be available during the session (perhaps accessible via a sidebar or a “View Summary” button in case they need to reference it mid-argument).
Include a “Start Session” button on this page (or once a case is selected) that becomes enabled after a case summary is chosen via one of the above methods. The user will click “Start Session” to enter the live oral argument simulation.
Ensure the Case Selection page is user-friendly: maybe use icons for each option (e.g. a book icon for library, a search icon for fetch, an upload icon for own summary). Also, maintain that Home button (and perhaps a back button to go back to Settings if needed).

Live Session Page (Oral Argument Simulation)
This is the core of the app: the oral argument practice session. This page will simulate a courtroom interaction. Key elements and functionalities:
● Microphone Access & Voice Input: Upon starting the session, prompt the user to allow microphone access (using the browser’s permission prompt via Web API). The app should then actively listen for the student’s speech. Implement this with the Live API for real-time voice interaction – essentially utilize speech-to-text to convert the student’s spoken words into text for the AI to process. Provide a microphone toggle button (icon of a mic) that indicates when the app is listening. For example, a microphone icon that lights up or animates when active (with a small label “Listening…”). If needed, only start listening when the student presses a “Begin” button or the mic button, to avoid capturing audio prematurely. The goal is for the student to speak naturally as if addressing the court; no typing required during the argument.
● AI Judge (and Co-Counsel) with Voice Output: The AI judge will be the main counterpart in the simulation. The judge’s interactions should be spoken aloud using the selected TTS voice. Use Gemini’s text-to-speech to generate the judge’s utterances in real-time (with minimal lag). The judge will start, for example, by greeting (“Counsel, you may begin.” or a simple introduction depending on moot format) and then listen to the student’s argument. As the student speaks (the app continuously transcribes their speech), the AI model should be analyzing the content. The judge will interject with questions periodically, especially if “Hot Bench” mode is on (meaning frequent interruptions). In Standard mode, the judge might wait longer intervals or let the student finish points before asking. The interruption behavior can be coded by timing (e.g. random intervals, or triggered by certain keywords the student says) or simply by the AI model’s prompt (e.g., instruct the AI to only interrupt after each point vs. freely).
The judge’s questions should be pertinent to the case facts and legal issues in the summary. For realism, ensure the AI’s prompts include the case summary and context that the student sees, so that the judge “knows” the case details and can ask relevant questions (for instance, challenging the student on ambiguous facts or precedents related to the case). The difficulty setting also influences the complexity of questions: at 1L difficulty, the judge might ask more basic or guiding questions (“What is the main holding you want us to adopt?”), whereas at 3L difficulty, questions could be more pointed and reference case law or counterarguments (“How do you reconcile your argument with Smith v. Jones which seems to suggest the opposite outcome?”). The AI model can be directed with system/role prompts to take on the persona of a judge who has deep knowledge of the topic.

If Co-Counsel is enabled, the co-counsel AI should also be listening. The co-counsel will not speak unless asked by the student (or unless the student is stuck for a long pause). We can implement a voice command like “Hey Co-Counsel, any suggestions?” or simply rely on the student clicking an on-screen “Hint” button. When activated, the co-counsel AI will provide a brief hint or whisper (voiced using the same TTS or possibly a slightly different style). The content of the hint could be generated by prompting the AI with the transcript so far and asking for a helpful suggestion. The co-counsel’s interjection should also appear in the transcript (labeled as Co-Counsel).

Real-Time Transcription Display: As everyone speaks (student, judge, co-counsel), the app should display the dialogue as text on the screen (like subtitles or a chat log). This fulfills two purposes: accessibility (in case some audio isn’t clear) and creating a record for later review. Display each speaker’s name (or role) alongside their utterance. For example:
Judge: Counsel, you may proceed with your argument.
Student: [Student's transcribed opening statement appears here]
Judge: [Judge's question...]
Student: [Student's response...]
Co-Counsel: [Hint given, if any]
Judge: [Next question...]
... etc.
● This transcript area can be a scrollable text box or chat-style window on the session page. Update it in real time as new speech is recognized. Google AI Studio’s capabilities can handle streaming speech recognition and output, so implement it such that the user sees their words appear as they speak (perhaps with a slight delay for final transcription). Also show the judge’s questions in text as they are spoken. Having the running transcript is a helpful practice tool (and indeed is similar to having a court reporter; it also reinforces points as the student can quickly glance at what was asked if they need to refocus).
● Timer Display: If the user set a timer, show a countdown timer on the screen. Perhaps top corner or in the header. For example, a digital clock counting down from 10:00 (min:sec). Optionally, have a progress bar or change color when time is almost up (last 1 minute in yellow, last 10 seconds in red, etc.). When time runs out, if we want realism, the judge can say “Your time has expired, please conclude your argument.” However, allow the student to continue if they wish (maybe the judge asks “I’ll allow you to finish your thought” or if strict, end the Q&A). This could be configurable, but for simplicity, once the timer hits zero, we can flash a notice “Time’s up!” and maybe pause or proceed to the conclusion. The student can manually end earlier as well. If “No Timer” was selected, no timer is shown.
● End Session Button: Provide a button labeled “End Session” that the student can click at any time to stop the practice. This could be if they feel done or if something isn’t going right. If ended prematurely, consider still generating partial feedback on what transpired. The End Session button should be somewhere accessible (maybe in a top bar or a floating button). Possibly use a red “End” icon to distinguish it. Ask for confirmation (“Are you sure you want to end the session?”) to avoid accidental clicks.
● Session Flow: Once the session starts, the typical flow: the student speaks their prepared argument introduction, the judge may interrupt with a question, student responds, and so on. Ensure the AI model is primed to handle a back-and-forth dialogue. The model should maintain context (we can keep a conversation history in memory for the AI so it knows what was said earlier). Use the multi-turn conversation abilities of Gemini. We might structure it such that the AI judge is one “agent” continually responding to student input. Alternatively, orchestrate with code: every time the student stops speaking (or pauses), send the latest student utterance (and conversation history) to the model with the judge persona prompt to get the judge’s next question. Then output it via voice. This turn-taking loop continues until time is up or the student indicates they are finished.
If co-counsel is enabled and the student asks for help, interject that into the loop: essentially have the model generate a co-counsel answer when prompted. The co-counsel could be the same model but instructed with a different role prompt (e.g. “You are the student’s co-counsel, offering a brief helpful hint”). This may require a separate call to the model distinct from the judge’s turn, to keep roles clear. Ensure the co-counsel’s hint is short and strategic (and maybe limited in frequency).
● Courtroom Sound: If the ambient sound toggle was on, make sure the ambient audio is playing during this. Perhaps also consider adding small sound effects for realism: e.g., a gavel sound when the session starts (“All rise... you may begin” – though that might be too elaborate; a simple start is fine). If feasible, when time ends, a gavel bang or a “Thank you, counsel” audio could signal conclusion.

Throughout the session, maintain performance: streaming voice recognition and TTS should be handled asynchronously. Google AI Studio’s Live API can manage real-time multimodal input/output, which is ideal here. The interface should remain responsive (e.g., the student can scroll the transcript during the session if needed to reread something).

Post-Session Feedback and Transcript
When the session ends (either due to timer or the student clicking End Session), the app will generate a Feedback Report for the student. This is a crucial part of the learning experience – a detailed, AI-generated critique of their performance, along with the full transcript and case info for review. Implement the following on the Results page that appears after session:
● Thank You/Completion Message: At the top, confirm the session is complete. For example: “Session completed. Great job! Here’s your practice report:” to reassure the student.
● Session Transcript: Display the entire transcript of the oral argument exchange (everything that was captured in the live session text area) in an easy-to-read format. This could be a scrollable text box or a section in the page. Clearly label it “Transcript” and possibly timestamp it. If we recorded timestamps for each turn (optional), we could annotate the transcript with timestamps, but at least include the overall session timestamp. For instance, at the top or bottom say “Session date/time: Nov 16, 2025 11:41PM” for the record. The user should be able to copy this text if they want.
● Case Summary Reference: Include the Case Summary that was used for the argument. Label it “Case Summary: [Case Name]” and show the text of the summary. This reminds the student of the scenario they were arguing. If it’s a built-in or fetched case, we already have the text; if the student provided it, use their provided text. This way, when reviewing feedback, they can cross-reference facts from the summary.
● AI Feedback Analysis: This is a narrative section where the AI provides feedback on the student’s oral argument. Label it clearly, e.g. “Feedback & Suggestions.” Have the AI model analyze the transcript and case to produce a thoughtful critique. The feedback should cover multiple aspects:
○ Legal Arguments: Did the student address the key issues? Were their arguments legally sound and well-supported? Comment on strengths or any missed points.
○ Responses to Questions: Evaluate how well the student answered the judge’s questions. Did they remain composed? Did they concede too much or dodge questions? Highlight good answers and areas to improve (e.g. “You effectively cited the precedent to support your point on X, which was excellent. However, when asked about Y, your answer was a bit unclear – remember to directly address the question...”).
○ Organization and Structure: Feedback on the structure of the argument – was there a clear roadmap, did they signpost issues, manage time well, etc.
○ Speaking Style and Demeanor: Although we mainly have text, we can infer some aspects (if the speech recognition can notice filler words or pauses). The AI can comment on pace (e.g. “You spoke a bit quickly at times” or “Good clear tone”), use of fillers (“try to avoid saying ‘um’ frequently”), confidence, persuasiveness, etc. This makes the feedback holistic, similar to what a moot court judge or coach would give.
○ Handling of Hot/Cold Bench: If hot bench was on, mention how they handled the rapid questions. If cold (standard) and they filled the time well or not.
○ Suggestions for Improvement: Conclude with actionable suggestions – e.g. “Next time, you might prepare a brief opening statement to ensure you cover the main points even if interrupted” or “Practice citing case names more explicitly in your answers,” etc. The tone should be constructive and encouraging, focusing on improvement and acknowledging what was done well. Instant feedback like this is a known benefit of AI moot systems, and we want it to be comprehensive.
To generate this feedback, internally send the transcript and summary (or key points) to the LLM with a prompt to act as a moot court judge providing feedback. This can be done in sections if the transcript is long (but since this is all local, token limits should be okay with a summary of major points). The quality of feedback is paramount – it should feel like personalized coaching. Existing AI advocacy tools emphasize feedback on reasoning, structure, and communication, so our AI feedback should do the same.
● Downloadable Report (PDF): Provide a button to “Download Full Report (PDF)”. When clicked, the app should generate a PDF document containing the Case Summary, Transcript, Feedback, and session timestamp. Ensure formatting is neat (maybe each section starts on a new page or clearly separated). The PDF can be generated using a library like jsPDF or a built-in PDF generator. Include the Stanford logo or app title on the PDF as a header for professionalism. This allows the student to save or print their practice session results. Include the session date/time in the PDF filename or content (e.g., “OralArgumentPractice_Report_Nov162025.pdf”) for reference.

Finally, on the Results page, include an option to “Start New Session” or “Home” to let the student practice again with different settings or cases.

Technical Considerations and Quality Assurance
● Voice and Audio Integration: Leverage Google AI Studio’s capabilities for real-time voice. Use the Live API for streaming input/output so that the conversation flows naturally without requiring the user to hit “enter” after each remark. The text-to-speech for the judge and co-counsel should use the selected voice (for example, Google’s Kore voice or another US English voice for male, and a female voice like Jane or similar – ensure they sound like realistic judges). The audio generation should be quick; use short segments if needed (generate sentence by sentence to reduce latency). Also, provide visual feedback (like a loading spinner or a subtle “Judge is speaking…” text) if there’s any slight delay before the voice plays, so the user knows the system is responding.
● Accuracy and Data Handling: When using external APIs (CourtListener, etc.), handle errors gracefully. If the case text is too long to summarize fully, consider summarizing in chunks or asking the model to summarize only the key facts and issues. Verify that the summary returned (or generated) is accurate by possibly cross-checking for known case names in it. The app should caution the user that the summary is automatically generated from the source material (just in case of any AI error). However, CourtListener provides authoritative case texts, so any summary is only as off as the model’s summarization – which we expect to be high-quality for well-known cases.
● UI/UX: Keep the interface intuitive. Use tooltips or small info icons to clarify settings if needed (e.g., “Hot Bench = judges interrupt frequently”). Ensure the text areas (for summary, transcript, feedback) are scrollable especially on smaller screens. The app should be responsive for different screen sizes (desktop vs. tablet, etc.), though primary use might be on a laptop in practice rooms. Use CSS styles that match Stanford’s branding (maybe a Stanford Law School banner image or a subtle background pattern like the law library facade, but not distracting).
● Testing and Bug Prevention: After building, test a full run: pick a built-in case, go through a session (simulate speaking or actually speak if possible), ensure the judge responds appropriately and stops, check that transcript logging works and that the feedback generation at the end doesn’t crash (if the transcript is long, perhaps summarize the transcript before sending to feedback model to avoid token limits). Also test the microphone permission flow in a browser – the user should be prompted at the right time. If the browser blocks autoplay audio, make sure the first user gesture (like clicking “Start Session”) triggers audio context so TTS can play. Avoid any infinite loops – perhaps implement a max number of judge questions or a natural end (“Thank you, counsel”) after, say, the time is up or a certain number of exchanges, to conclude gracefully.
`} />
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 items-center">
                              <div>
                                <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-2">3. Paste and Build</h5>
                                <p className="text-neutral-slate dark:text-neutral-cool">Paste that prompt into the chat window in AI Studio and click the arrow or "Build" button. Google will then write code to build the app for you!</p>
                              </div>
                              <img src="https://i.postimg.cc/ZnY5JhRD/Screenshot-2025-11-14-at-11-20-05-PM.png" alt="Pasting prompt in AI Studio" className="rounded-lg shadow-md border border-neutral-cool/20" />
                            </div>

                            <div>
                              <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-2">4. Customize & Test</h5>
                              <p className="text-neutral-slate dark:text-neutral-cool">You can follow up by asking the builder to theme the app with "Stanford Law School Colors" or give it a specific name. Once built, you can run the app preview.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 items-start">
                              <div>
                                <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-2">5. Run a Test Case</h5>
                                <p className="text-neutral-slate dark:text-neutral-cool mb-4">Copy and paste this fact pattern (Palsgraf) into your new app to test the judge:</p>
                                <CodeBlock id="l8-test" code={`I am a law student. Here is a short fact pattern:

Helen Palsgraf was standing on a platform of the Long Island Railroad with her daughters, waiting for a train.
A different train began to leave the station, and two men ran to catch it. One man jumped on safely. The other man, who was carrying a small package, seemed unsteady as he tried to board. A railroad guard on the platform pushed him from behind while another employee pulled him from inside the train to help him get on.

In the process, the man dropped his package onto the tracks. The package contained fireworks, which exploded when it hit the ground. The shock from the explosion caused a heavy coin-operated scale at the other end of the platform to topple over and strike Palsgraf, injuring her.

Please start asking me oral argument questions as if I am counsel for the plaintiff. Ask ONE question at a time.`} />
                              </div>
                              <img src="https://i.postimg.cc/X7mBkpXJ/Screenshot-2025-11-14-at-11-31-10-PM.png" alt="Testing the app with a prompt" className="rounded-lg shadow-md border border-neutral-cool/20 mt-2" />
                            </div>

                            <div className="border-t border-neutral-cool/20 pt-8">
                              <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-2">Iterate!</h5>
                              <p className="text-neutral-slate dark:text-neutral-cool mb-2">The app won't be perfect on the first try. Chat with the builder to add features like:</p>
                              <ul className="list-disc list-inside text-neutral-slate dark:text-neutral-cool mb-2">
                                  <li>A court selector dropdown</li>
                                  <li>A timer</li>
                                  <li>Web search for case summaries</li>
                              </ul>
                              <p className="text-neutral-slate dark:text-neutral-cool">Just keep chatting until you get a product that works for you.</p>
                            </div>
                          </div>
                        </div>
                      </LessonCard>

                      {/* Lesson 9 */}
                      <LessonCard title="Lesson 9 – Sharing Your Project on GitHub">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-3">Mini Lecture</h4>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-neutral-slate dark:text-neutral-cool space-y-4">
                              <p>Up to now, everything we've done has lived in Kaggle or Google AI Studio. That's great for experimenting, but what if you want to:</p>
                              <ul className="list-disc list-inside">
                                  <li>show this project to a potential employer,</li>
                                  <li>collaborate with classmates,</li>
                                  <li>or keep a permanent record of your progress?</li>
                              </ul>
                              <p>That's where GitHub comes in. GitHub is like Google Drive for code, plus a time machine.</p>
                              <p>Today, we'll do a very simple version: Create a GitHub account, download our Kaggle notebook, and upload it.</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-4">Video Overview</h4>
                            <VideoEmbed src="https://drive.google.com/file/d/15KoUaOeBuNv-S3ZBuThxOLONgBNFLUZV/preview" title="Lesson 9 Video" />
                          </div>
                        </div>
                        <div className="pt-8 border-t border-neutral-cool/10 space-y-8">
                          <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white">Steps</h4>
                          
                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                              <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-2">Step 1 - Create / Sign Into GitHub</h5>
                              <ol className="list-decimal list-inside space-y-2 text-neutral-slate dark:text-neutral-cool">
                                <li>Open a browser tab and go to <a href="https://github.com" target="_blank" className="text-cardinal dark:text-electric hover:underline">github.com</a>.</li>
                                <li>If you already have an account: Click <strong>Sign in</strong>.</li>
                                <li>If you don't have an account: Click <strong>Sign up</strong>.</li>
                              </ol>
                            </div>
                            <img src="https://i.postimg.cc/FR10vL8G/Screensh.png" alt="GitHub Sign In page" className="rounded-lg shadow-md border border-neutral-cool/20" />
                          </div>

                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                              <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-2">Step 2 – Create a New Repository</h5>
                              <ol className="list-decimal list-inside space-y-2 text-neutral-slate dark:text-neutral-cool">
                                <li>Once logged in, click the "+" icon (top right) and select "New repository".</li>
                                <li><strong>Repository name:</strong> something like <code>oral-argument-sparring-partner</code>.</li>
                                <li><strong>Description (optional):</strong> A simple AI oral argument practice judge.</li>
                                <li>Choose <strong>Public</strong>.</li>
                                <li>Check "Add a README file".</li>
                                <li>Click "Create repository".</li>
                              </ol>
                            </div>
                            <img src="https://i.postimg.cc/JnWWCD5X/Screenshot-2025-11-18-at-11-11-15-AM.png" alt="Create a new GitHub repository" className="rounded-lg shadow-md border border-neutral-cool/20" />
                          </div>

                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                              <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-2">Step 3 – Download Your Kaggle Notebook</h5>
                              <ol className="list-decimal list-inside space-y-2 text-neutral-slate dark:text-neutral-cool">
                                <li>Go back to Kaggle and open your <strong>Oral Argument Sparring Partner</strong> notebook.</li>
                                <li>Look for a <strong>Download</strong> option (File → Download).</li>
                                <li>Save the file to a place you can find (e.g., Desktop).</li>
                              </ol>
                            </div>
                            <img src="https://i.postimg.cc/wB40DS7Q/Screenshot-2025-11-18-at-11-17-35-AM.png" alt="Downloading a notebook from Kaggle" className="rounded-lg shadow-md border border-neutral-cool/20" />
                          </div>

                          <div>
                            <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-2">Step 4 – Upload the Notebook to GitHub</h5>
                            <ol className="list-decimal list-inside space-y-2 text-neutral-slate dark:text-neutral-cool mb-4">
                              <li>On your new repository's page, look for the "uploading an existing file" link.</li>
                              <li>Drag your downloaded <code>.ipynb</code> file into the upload area.</li>
                              <li>Scroll down to the <strong>Commit changes</strong> section. Write a message like <code>Add oral argument sparring partner notebook</code>.</li>
                              <li>Click "Commit changes".</li>
                            </ol>
                            <div className="grid grid-cols-2 gap-4">
                              <img src="https://i.postimg.cc/XN5XSdKh/Screenshot-2025-11-18-at-11-38-41-AM.png" alt="GitHub quick setup options" className="rounded-lg shadow-md border border-neutral-cool/20" />
                              <img src="https://i.postimg.cc/vmw3hWzs/Screenshot-2025-11-18-at-11-38-59-AM.png" alt="Committing uploaded file to GitHub" className="rounded-lg shadow-md border border-neutral-cool/20" />
                            </div>
                          </div>

                          <div>
                            <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-2">Step 5 - (Optional) Add a Friendly README</h5>
                            <div className="grid md:grid-cols-2 gap-8 items-start">
                              <div>
                                <ol className="list-decimal list-inside space-y-2 text-neutral-slate dark:text-neutral-cool mb-4">
                                  <li>On the repo page, click <strong>README.md</strong>.</li>
                                  <li>Click the pencil icon to edit it.</li>
                                  <li>Replace contents with a description of your project.</li>
                                  <li>Scroll down and click "Commit changes".</li>
                                </ol>
                                <CodeBlock id="l9-readme" code={`# Oral Argument Sparring Partner

This repository contains a simple law-school-focused AI project.
**Kaggle notebook**: \`oral-argument-sparring-partner.ipynb\`
**What it does**: simulates an appellate judge who:
- asks oral argument-style questions,
- analyzes my answers for directness, use of facts, and citation to authority,
- gives brief feedback after each answer.
**Why I built it**: to practice oral advocacy and get low-stakes feedback on my habits.
This project pairs with a configuration in **Google AI Studio**.`} />
                              </div>
                              <img src="https://i.postimg.cc/pdkzj8cB/Screenshot-2025-11-18-at-11-46-48-AM.png" alt="Editing the README file on GitHub" className="rounded-lg shadow-md border border-neutral-cool/20" />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                              <h5 className="text-lg font-semibold text-neutral-charcoal dark:text-white mb-2">Step 7 – Adding your Google AI Studio App to Github</h5>
                              <p className="text-neutral-slate dark:text-neutral-cool">In Google AI Studio, you can link to GitHub and commit changes by clicking the GitHub link in the top-right corner. Or download the project as a zip file and upload manually.</p>
                            </div>
                            <img src="https://i.postimg.cc/NMZRpt8G/Screenshot-2025-11-18-at-12-22-38-PM.png" alt="Save to GitHub from AI Studio" className="rounded-lg shadow-md border border-neutral-cool/20" />
                          </div>
                        </div>
                      </LessonCard>

                      {/* Lesson 10 */}
                      <LessonCard title="Lesson 10 – Deploying and Sharing AI Agents with Google AI Studio">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-3">Mini Lecture</h4>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-neutral-slate dark:text-neutral-cool space-y-4">
                              <p>We'll explore each method in a mini-lecture style, provide step-by-step instructions for learners, discuss pros and cons, and highlight when to use each option.</p>
                              <p><strong>Overview of the Three Deployment Methods:</strong></p>
                              <ol className="list-decimal list-inside">
                                  <li><strong>Share Link (Quick Share):</strong> Instantly share your agent via a link – perfect for basic classroom use or demos.</li>
                                  <li><strong>AI Studio Deployed App (Cloud Run):</strong> Use AI Studio's built-in deployment tools to create a polished web app.</li>
                                  <li><strong>API Key Integration:</strong> Conceptual overview of using an API key to integrate your agent into external websites.</li>
                              </ol>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-4">Video Overview</h4>
                            <VideoEmbed src="https://drive.google.com/file/d/1vivfRalhGyM6TEONndtgN_c-TRGt9xta/preview" title="Lesson 10 Video" />
                          </div>
                        </div>
                        <div className="pt-8 border-t border-neutral-cool/10 space-y-12">
                          
                          {/* Section 1 */}
                          <div>
                            <h4 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-4">1. Quick Sharing via AI Studio Share Link</h4>
                            <div className="space-y-4 text-neutral-slate dark:text-neutral-cool">
                              <p>A share link is the fastest way to let others try your AI agent. It's a unique URL generated by Google AI Studio. Think of it like clicking "Share" on a Google Doc.</p>
                              
                              <h5 className="font-semibold text-neutral-charcoal dark:text-white">Student Instructions:</h5>
                              <ol className="list-decimal list-inside space-y-2">
                                <li><strong>Build or Open Your Agent:</strong> Make sure your AI agent is ready.</li>
                                <li><strong>Locate Share:</strong> Look for the “Share” button in the top-right corner.</li>
                                <li><strong>Generate Link:</strong> Create a unique URL (e.g., <code>https://aistudio.google.com/apps/drive/XYZ...</code>).</li>
                                <li><strong>Share:</strong> Send this link to anyone. They can launch your AI agent in their browser.</li>
                              </ol>

                              <h5 className="font-semibold text-neutral-charcoal dark:text-white">Pros & Cons:</h5>
                              <ul className="list-disc list-inside space-y-1">
                                <li><strong>Pros:</strong> Fast, no installation required, secure by default.</li>
                                <li><strong>Cons:</strong> Requires Google account access, limited customization, ephemeral nature.</li>
                              </ul>
                            </div>
                          </div>

                          {/* Section 2 */}
                          <div>
                            <h4 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-4">2. Deploying a Standalone App via AI Studio (Cloud Run)</h4>
                            <div className="space-y-4 text-neutral-slate dark:text-neutral-cool">
                              <p>Google AI Studio can turn your project into a standalone web application with just one click using Google Cloud Run. This "publishes" your AI app as its own website.</p>
                              
                              <h5 className="font-semibold text-neutral-charcoal dark:text-white">Student Instructions:</h5>
                              <ol className="list-decimal list-inside space-y-2">
                                <li><strong>Cloud Project:</strong> Ensure you have a Google Cloud Platform project with billing enabled.</li>
                                <li><strong>Deploy:</strong> Click the "Deploy" button (rocket icon) in AI Studio.</li>
                                <li><strong>Confirm:</strong> Select your project and confirm.</li>
                                <li><strong>Public URL:</strong> Copy the generated URL (e.g., ending in <code>run.app</code>).</li>
                              </ol>

                              <h5 className="font-semibold text-neutral-charcoal dark:text-white">Pros & Cons:</h5>
                              <ul className="list-disc list-inside space-y-1">
                                <li><strong>Pros:</strong> Truly public access (no login required), polished UX, scalable.</li>
                                <li><strong>Cons:</strong> Requires Cloud project billing setup, deployment takes time.</li>
                              </ul>
                            </div>
                          </div>

                          {/* Section 3 */}
                          <div>
                            <h4 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-4">3. API Key-Powered Integration</h4>
                            <div className="space-y-4 text-neutral-slate dark:text-neutral-cool">
                              <p>Using an API key means enabling external applications to talk to your AI model programmatically. This offers maximum flexibility but requires coding knowledge.</p>
                              
                              <h5 className="font-semibold text-neutral-charcoal dark:text-white">Pros & Cons:</h5>
                              <ul className="list-disc list-inside space-y-1">
                                <li><strong>Pros:</strong> Integrate into any app, full control over UI/UX.</li>
                                <li><strong>Cons:</strong> Requires programming, you manage the frontend/backend, security risks if key is exposed.</li>
                              </ul>
                            </div>
                          </div>

                          {/* Sources */}
                          <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                            <h4 className="font-bold text-neutral-charcoal dark:text-white mb-3">Sources & Further Reading</h4>
                            <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool text-sm">
                              <li><a href="https://dev.to/googleai/from-prompt-to-deployed-app-in-less-than-2-minutes-dh3" target="_blank" rel="noopener noreferrer" className="text-cardinal dark:text-electric hover:underline">Google AI Studio Dev Guide</a></li>
                              <li><a href="https://www.kdnuggets.com/the-complete-guide-to-using-google-ai-studio" target="_blank" rel="noopener noreferrer" className="text-cardinal dark:text-electric hover:underline">Google AI Studio Complete Guide (KDnuggets)</a></li>
                              <li><a href="https://codelabs.developers.google.com/sdlc/instructions" target="_blank" rel="noopener noreferrer" className="text-cardinal dark:text-electric hover:underline">Google Cloud Codelab</a></li>
                            </ul>
                          </div>
                        </div>
                      </LessonCard>
                  </>
              )}
          </div>
      </section>

      {/* Wrap Up */}
      <section className="bg-white dark:bg-neutral-darkCard p-6 sm:p-8 rounded-2xl border border-neutral-cool/20 shadow-sls-sm text-center">
          <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white mb-4">Wrap-Up</h2>
          <div className="text-neutral-slate dark:text-neutral-cool mb-8 max-w-3xl mx-auto space-y-6 text-left">
              <p>Let's look back at the journey you've just taken.</p>
              <div>
                <h3 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-2">In Kaggle, you learned how to:</h3>
                <ul className="list-disc list-inside">
                    <li>Store a case in a variable,</li>
                    <li>Do very simple issue spotting with keywords,</li>
                    <li>Assemble a script of judge questions,</li>
                    <li>Analyze your own answers for directness, facts, and authority,</li>
                    <li>And run a full text-based oral argument practice session.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-charcoal dark:text-white mb-2">In Google AI Studio, you saw how to:</h3>
                <ul className="list-disc list-inside">
                    <li>Describe an AI judge's role, goals, and boundaries in plain language,</li>
                    <li>Use a powerful language model to ask realistic questions and give feedback,</li>
                    <li>And imagine how speech-to-text and text-to-speech would turn that into a voice experience.</li>
                </ul>
              </div>
          </div>

          <div className="border-t border-neutral-cool/20 pt-8 mt-8">
            <h3 className="text-3xl font-bold text-cardinal dark:text-electric mb-6">Try Our Prototype!</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center text-left">
                <div className="space-y-4 text-neutral-slate dark:text-neutral-cool">
                    <p>Now, we would like to share with you the app we built while creating this tutorial. You may try it out here:</p>
                    <p><a href="https://ai.studio/apps/drive/1WukN4WIxCoSu41t_VNUeAb0znUBzCDmL?fullscreenApplet=true" target="_blank" rel="noopener noreferrer" className="text-cardinal dark:text-electric hover:underline break-all font-mono text-sm">https://ai.studio/apps/drive/1WukN4WIxCoSu41t_VNUeAb0znUBzCDmL?fullscreenApplet=true</a></p>
                    <p>Our version isn't perfect. It has limitations and bugs, but it is pretty decent despite all that. The point of all this is to learn the skills of building apps with AI.</p>
                    <p>Keep experimenting and share your creations with us in Slack via the #techchat channel.</p>
                </div>
                <div>
                    <a href="https://ai.studio/apps/drive/1WukN4WIxCoSu41t_VNUeAb0znUBzCDmL?fullscreenApplet=true" target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform duration-300">
                        <img src="https://i.postimg.cc/7LcSHzsY/Screenshot-2025-11-18-at-1-39-31-PM.png" alt="Screenshot of the Stanford Law School Oral Argument Coach App" className="rounded-xl shadow-lg border border-neutral-cool/20" />
                    </a>
                </div>
            </div>
          </div>
      </section>

      <footer className="text-center pt-8 border-t border-neutral-cool/20">
          <p className="text-sm text-neutral-slate dark:text-neutral-cool">&copy; 2025. This informational page is not affiliated with Kaggle or Google.</p>
      </footer>
    </div>
  );
};

export default CodingWithKaggle;