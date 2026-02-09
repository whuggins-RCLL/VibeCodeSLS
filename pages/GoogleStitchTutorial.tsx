import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Info, CheckCircle, AlertTriangle, Layout, Code, Palette, Smartphone, Share2 } from 'lucide-react';

const GoogleStitchTutorial: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-24">
       {/* Navigation */}
       <div className="space-y-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm font-medium text-neutral-slate dark:text-neutral-cool hover:text-cardinal dark:hover:text-electric transition-colors w-fit group"
        >
          <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
        </Link>
      </div>

      {/* Hero Section */}
      <section>
          <p className="text-lg font-bold text-cardinal dark:text-electric uppercase tracking-wider">A Practical Guide for Stanford Law School</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2 text-neutral-charcoal dark:text-white">Stitch (Google Labs)</h1>
          <p className="mt-4 text-xl text-neutral-slate dark:text-neutral-cool leading-relaxed">
            Turn your ideas into simple, working app interfaces quickly. This guide explains what Stitch is and how it can be a powerful prototyping tool for your SLS projects.
          </p>
      </section>

      {/* Quick Links */}
      <section className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
            <h3 className="font-bold text-lg mb-4 text-neutral-charcoal dark:text-white">Official Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="https://stitch.withgoogle.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 bg-white dark:bg-neutral-darkCard hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-colors border border-neutral-cool/20 text-neutral-charcoal dark:text-white font-medium shadow-sm hover:shadow-md">
                Stitch Home <ExternalLink size={16} className="text-neutral-slate dark:text-neutral-cool group-hover:text-cardinal dark:group-hover:text-electric transition-colors" />
            </a>
            <a href="https://discuss.ai.google.dev/t/stitch-prompt-guide/83844" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 bg-white dark:bg-neutral-darkCard hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-colors border border-neutral-cool/20 text-neutral-charcoal dark:text-white font-medium shadow-sm hover:shadow-md">
                Prompt Guide & Community <ExternalLink size={16} className="text-neutral-slate dark:text-neutral-cool group-hover:text-cardinal dark:group-hover:text-electric transition-colors" />
            </a>
        </div>
      </section>

      <div className="space-y-16 text-lg text-neutral-slate dark:text-neutral-cool leading-relaxed">
        
        {/* Introduction */}
        <section id="introduction" className="space-y-4">
            <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white flex items-center gap-3">
                <Layout className="text-cardinal dark:text-electric" />
                What is Stitch?
            </h2>
            <p>
                Stitch is an AI‑assisted interface design tool from Google Labs. You describe an app or page in natural language (or upload a reference image), and Stitch drafts working UI screens with real front‑end code. Think of it as a shortcut from idea to a clickable interface, so teams can test flows and visual direction before investing in full design and development cycles.
            </p>
            <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/20">
                <p className="font-medium text-neutral-charcoal dark:text-white mb-2">Great for quick prototypes at SLS:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Event RSVP pages</li>
                    <li>Reading‑room seat finders</li>
                    <li>Clinic intake pre‑screeners</li>
                    <li>Stakeholder demos</li>
                    <li>Proof-of-concepts for internal tools</li>
                </ul>
            </div>
        </section>

        {/* Comparison */}
        <section id="comparison" className="space-y-4">
            <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white">How it Compares</h2>
            <p>Stitch fits into a specific niche in the design and development workflow:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                    <h3 className="font-bold text-cardinal dark:text-electric mb-2">Stitch</h3>
                    <p className="text-sm"><strong>Idea & Scaffolding Engine.</strong> Creates UI structure and code fast from prompts. Refine by chatting.</p>
                </div>
                <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                    <h3 className="font-bold text-neutral-charcoal dark:text-white mb-2">Figma</h3>
                    <p className="text-sm"><strong>Design System.</strong> For pixel‑accurate design, components, and detailed visual polishing.</p>
                </div>
                <div className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                    <h3 className="font-bold text-neutral-charcoal dark:text-white mb-2">Canva/Sites</h3>
                    <p className="text-sm"><strong>Publishing.</strong> Great when you already know what you’re building and need to ship polished pages.</p>
                </div>
            </div>
            <p className="italic border-l-4 border-cardinal dark:border-electric pl-4 mt-4 bg-white dark:bg-neutral-darkCard py-2 pr-2">
                <strong>The bottom line:</strong> Prototype in Stitch to clarify structure and flow; polish and collaborate in Figma or your chosen publishing tool when you’re ready to ship.
            </p>
        </section>

        {/* Access, Cost, Limits */}
        <section id="access-cost-limits" className="space-y-4">
            <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white">Access, Cost, and Limits</h2>
            <p>Stitch is currently positioned as a Google Labs experiment. Here’s what to expect:</p>
            <ul className="space-y-4">
                <li className="flex gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cardinal dark:bg-electric flex-shrink-0" />
                    <div><strong className="text-neutral-charcoal dark:text-white">Access:</strong> Sign in with your Google account at the Stitch home link. As an experimental tool, availability may vary.</div>
                </li>
                <li className="flex gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cardinal dark:bg-electric flex-shrink-0" />
                    <div><strong className="text-neutral-charcoal dark:text-white">Cost:</strong> Free to use but comes with usage limits (monthly allowance of generations).</div>
                </li>
                <li className="flex gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cardinal dark:bg-electric flex-shrink-0" />
                    <div><strong className="text-neutral-charcoal dark:text-white">Limits:</strong> English-first prompting. Complex business logic and enterprise authentication are out of scope.</div>
                </li>
                <li className="flex gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cardinal dark:bg-electric flex-shrink-0" />
                    <div><strong className="text-neutral-charcoal dark:text-white">Commercial Use:</strong> Google does not claim ownership over the original designs or code you generate (per Terms). You are responsible for reviewing and complying with all terms.</div>
                </li>
            </ul>
        </section>

        {/* Quick Start */}
        <section id="quick-start" className="space-y-6">
            <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white">Quick Start</h2>
            <div className="bg-white dark:bg-neutral-darkCard rounded-2xl border border-neutral-cool/20 overflow-hidden">
                <div className="p-8 space-y-6">
                    <ol className="space-y-6 list-decimal list-inside marker:text-cardinal dark:marker:text-electric marker:font-bold">
                        <li className="pl-2">
                            <strong className="text-neutral-charcoal dark:text-white">Start with a brief.</strong> 
                            <p className="mt-1 ml-6 text-base">Describe the app, audience, and tasks. Example: <em>“A mobile‑friendly RSVP page for SLS events with a session list, speaker bios, and a simple signup flow.”</em></p>
                        </li>
                        <li className="pl-2">
                            <strong className="text-neutral-charcoal dark:text-white">Generate the first screen.</strong>
                            <p className="mt-1 ml-6 text-base">Paste your brief into Stitch. Upload a sketch if you have one.</p>
                        </li>
                        <li className="pl-2">
                            <strong className="text-neutral-charcoal dark:text-white">Iterate in plain language.</strong>
                            <p className="mt-1 ml-6 text-base">Chat to refine: “Add a filter for session tracks,” “Make the primary button high-contrast.”</p>
                        </li>
                        <li className="pl-2">
                            <strong className="text-neutral-charcoal dark:text-white">Branch and compare.</strong>
                            <p className="mt-1 ml-6 text-base">Ask for variations: “Try a card grid layout” vs “Try a compact list.”</p>
                        </li>
                        <li className="pl-2">
                            <strong className="text-neutral-charcoal dark:text-white">Add more screens.</strong>
                            <p className="mt-1 ml-6 text-base">Build out the flow: details view, form steps, confirmation page.</p>
                        </li>
                        <li className="pl-2">
                            <strong className="text-neutral-charcoal dark:text-white">Review accessibility.</strong>
                            <p className="mt-1 ml-6 text-base">Ask Stitch to ensure high contrast and accessible focus states.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </section>

        {/* Example Project */}
        <section id="example-project" className="space-y-6">
            <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white">Example Project in Action</h2>
            <p>An "Employee Feedback Dashboard" created by Google. See the final design on the left and the prompt conversation on the right.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20">
                <div className="space-y-2">
                    <img 
                        src="https://i.postimg.cc/cHb8WSMp/Screenshot-2025-09-24-at-4-17-41-PM.png" 
                        alt="Screenshot of the Employee Feedback Dashboard UI created in Stitch." 
                        className="rounded-lg shadow-lg w-full border border-neutral-cool/10"
                    />
                    <p className="text-sm text-center font-bold text-neutral-charcoal dark:text-white">Final Dashboard UI</p>
                </div>
                <div className="space-y-2">
                    <img 
                        src="https://i.postimg.cc/pLHC4fdD/Screenshot-2025-09-24-at-4-19-43-PM.png" 
                        alt="Screenshot of the AI and user interaction sidebar showing prompts and responses." 
                        className="rounded-lg shadow-lg w-full border border-neutral-cool/10"
                    />
                    <p className="text-sm text-center font-bold text-neutral-charcoal dark:text-white">Conversational Prompts</p>
                </div>
            </div>
            <p>
                This illustrates how a simple series of requests can build a complex interface. <a href="https://stitch.withgoogle.com/projects/1727023767905083552-example?pli=1" target="_blank" rel="noopener noreferrer" className="text-cardinal dark:text-electric hover:underline font-medium inline-flex items-center gap-1">View live example <ExternalLink size={14}/></a>.
            </p>
        </section>

        {/* Prompt Interface */}
        <section id="prompt-interface" className="space-y-6">
            <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white">The Prompt Interface</h2>
            <p>When you start a new design, you're presented with powerful options to guide the AI.</p>
            <img 
                src="https://i.postimg.cc/Sxg9dCYQ/Screenshot-2025-09-24-at-4-21-44-PM.png" 
                alt="The prompt interface in Stitch" 
                className="rounded-lg shadow-lg w-full border border-neutral-cool/20"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-white dark:bg-neutral-darkCard p-5 rounded-xl border border-neutral-cool/20">
                    <h4 className="font-bold text-neutral-charcoal dark:text-white mb-2 flex items-center gap-2"><Smartphone size={18}/> Mobile vs. Web</h4>
                    <p className="text-sm">Specify target platform to influence layout and component sizing.</p>
                </div>
                <div className="bg-white dark:bg-neutral-darkCard p-5 rounded-xl border border-neutral-cool/20">
                    <h4 className="font-bold text-neutral-charcoal dark:text-white mb-2 flex items-center gap-2"><Palette size={18}/> Image Upload</h4>
                    <p className="text-sm">Upload a sketch or screenshot as visual inspiration for the AI.</p>
                </div>
                <div className="bg-white dark:bg-neutral-darkCard p-5 rounded-xl border border-neutral-cool/20 md:col-span-2">
                    <h4 className="font-bold text-neutral-charcoal dark:text-white mb-2 flex items-center gap-2"><Layout size={18}/> Generation Modes</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <strong className="block text-cardinal dark:text-electric text-sm mb-1">Standard Mode (Gemini 2.5 Flash)</strong>
                            <p className="text-xs">Optimized for speed. Best for rapid iteration and initial ideas.</p>
                        </div>
                        <div>
                            <strong className="block text-deepPurple dark:text-electric text-sm mb-1">Experimental Mode (Gemini 2.5 Pro)</strong>
                            <p className="text-xs">High-fidelity, detailed designs. Required for image-to-design.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Editing Toolbar */}
        <section id="editing-toolbar" className="space-y-6">
            <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white">The Editing Toolbar</h2>
            <p>Once generated, a toolbar appears for refining the UI.</p>
            <img 
                src="https://i.postimg.cc/NjthDrqn/Screenshot-2025-09-24-at-4-28-12-PM.png" 
                alt="The editing toolbar in Stitch" 
                className="rounded-lg shadow-lg w-full border border-neutral-cool/20"
            />
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {['Add Design in Chat', 'Adjust Theme', 'Create Variants', 'View Code', 'Add New Design'].map((tool, i) => (
                    <li key={i} className="flex items-center gap-2 bg-neutral-offWhite dark:bg-white/5 p-3 rounded-lg border border-neutral-cool/10 text-sm font-medium text-neutral-charcoal dark:text-white">
                        <CheckCircle size={16} className="text-cardinal dark:text-electric" /> {tool}
                    </li>
                ))}
            </ul>
        </section>

        {/* Prompting Tips */}
        <section id="prompting-tips" className="space-y-6">
            <div className="bg-cardinal/5 dark:bg-electric/5 border-l-4 border-cardinal dark:border-electric p-6 rounded-r-xl">
                <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-4">Tips for Prompting Well</h2>
                <ul className="space-y-3">
                    <li className="flex gap-3">
                        <Info size={20} className="text-cardinal dark:text-electric flex-shrink-0 mt-1" />
                        <span><strong>State problem & constraints.</strong> "For prospective students, evening event, readable on phones, no login required."</span>
                    </li>
                    <li className="flex gap-3">
                        <Info size={20} className="text-cardinal dark:text-electric flex-shrink-0 mt-1" />
                        <span><strong>Name components explicitly.</strong> "Navigation bar," "filter chips," "sortable table," "toast message."</span>
                    </li>
                    <li className="flex gap-3">
                        <Info size={20} className="text-cardinal dark:text-electric flex-shrink-0 mt-1" />
                        <span><strong>Isolate variables.</strong> "Same layout, but show a muted palette." Then, "Now show high-contrast."</span>
                    </li>
                    <li className="flex gap-3">
                        <Info size={20} className="text-cardinal dark:text-electric flex-shrink-0 mt-1" />
                        <span><strong>Reference positions.</strong> "Make the RSVP button sticky at the bottom on mobile."</span>
                    </li>
                </ul>
            </div>
        </section>

        {/* Export & Handoff */}
        <section id="export-handoff" className="space-y-6">
            <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white">Sharing & Export</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-3 flex items-center gap-2"><Share2 size={20}/> Sharing</h3>
                    <p className="mb-4">Generate a public link to share view-only access with stakeholders.</p>
                    <img 
                        src="https://i.postimg.cc/8zv8BB0M/Screenshot-2025-09-24-at-4-26-08-PM.png" 
                        alt="Sharing modal" 
                        className="rounded-lg shadow-sm border border-neutral-cool/20 w-full"
                    />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-3 flex items-center gap-2"><Code size={20}/> Export</h3>
                    <ul className="space-y-4">
                        <li className="bg-white dark:bg-neutral-darkCard p-4 rounded-lg border border-neutral-cool/20">
                            <strong>Download Code:</strong> Get the full HTML/CSS/JS package to create functional demos or hand off to developers.
                        </li>
                        <li className="bg-white dark:bg-neutral-darkCard p-4 rounded-lg border border-neutral-cool/20">
                            <strong>Design Export:</strong> (Coming Soon) Direct integration with Figma for seamless design hand-off.
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="space-y-6">
            <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white">SLS‑Friendly Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { title: "Regular Office Work", desc: "Prototype event RSVPs, room‑booking interfaces, or staff resource finders." },
                    { title: "Marketing & Comms", desc: "Mock up speaker lineups, agenda pages, or new story templates for the web team." },
                    { title: "Law School Classroom", desc: "Demonstrate legal‑tech ideas (intake wizards, precedent browsers) and discuss AI ethics." },
                    { title: "Stakeholder Brainstorming", desc: "Make abstract requirements concrete. Compare user flows side‑by‑side." }
                ].map((caseItem, i) => (
                    <div key={i} className="bg-neutral-offWhite dark:bg-white/5 p-6 rounded-xl border border-neutral-cool/20 hover:border-cardinal/30 transition-colors">
                        <h3 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-2">{caseItem.title}</h3>
                        <p className="text-sm">{caseItem.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Responsible Use */}
        <section id="responsible-use" className="bg-functional-warning/10 border-l-4 border-functional-warning p-6 rounded-r-xl">
            <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2 flex items-center gap-2">
                <AlertTriangle className="text-functional-warning" /> Responsible Use
            </h2>
            <p>
                Keep accessibility and privacy front‑of‑mind. Avoid collecting sensitive personal data in prototypes; use placeholder data (e.g., "John Doe") and clearly mark interfaces as “Demo Only.” Verify color contrast and keyboard accessibility before sharing broadly.
            </p>
        </section>

      </div>
    </div>
  );
};

export default GoogleStitchTutorial;