import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, AlertCircle, CheckCircle, Copy } from 'lucide-react';

const VibeCodingPrompting: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-24">
      {/* Header */}
      <div className="space-y-6">
        <Link 
          to="/intro" 
          className="inline-flex items-center text-sm font-medium text-neutral-slate dark:text-neutral-cool hover:text-cardinal dark:hover:text-electric transition-colors w-fit group"
        >
          <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Curriculum
        </Link>
        <div>
            <h1 className="text-4xl font-bold text-neutral-charcoal dark:text-white mb-4">Prompting for Code</h1>
            <p className="text-xl text-neutral-slate dark:text-neutral-cool leading-relaxed">
                Speaking "developer" doesn't mean knowing C++. It means knowing how to clearly describe structure, behavior, and constraints.
            </p>
        </div>
      </div>

      {/* The Formula */}
      <section className="bg-white dark:bg-neutral-darkCard border border-neutral-cool/20 rounded-2xl p-8 shadow-sls-sm">
        <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-6">The Golden Prompt Formula</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-cardinal/10 rounded-xl border border-cardinal/20">
                <span className="block font-bold text-cardinal mb-1">Role</span>
                <span className="text-sm text-neutral-slate dark:text-neutral-cool">Who is the AI?</span>
            </div>
            <div className="hidden md:flex items-center justify-center text-neutral-cool">+</div>
            <div className="p-4 bg-deepPurple/10 rounded-xl border border-deepPurple/20">
                <span className="block font-bold text-deepPurple mb-1">Context</span>
                <span className="text-sm text-neutral-slate dark:text-neutral-cool">What are we building?</span>
            </div>
            <div className="hidden md:flex items-center justify-center text-neutral-cool">+</div>
            <div className="p-4 bg-warmGold/10 rounded-xl border border-warmGold/20">
                <span className="block font-bold text-warmGold mb-1">Task</span>
                <span className="text-sm text-neutral-slate dark:text-neutral-cool">What exactly do you need?</span>
            </div>
            <div className="hidden md:flex items-center justify-center text-neutral-cool">+</div>
            <div className="p-4 bg-functional-success/10 rounded-xl border border-functional-success/20">
                <span className="block font-bold text-functional-success mb-1">Constraints</span>
                <span className="text-sm text-neutral-slate dark:text-neutral-cool">Tech stack/Limitations</span>
            </div>
        </div>
      </section>

      {/* Examples */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Bad vs. Good</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bad Example */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-functional-error font-bold uppercase tracking-wider text-sm">
                    <AlertCircle size={16} /> The "Lazy" Prompt
                </div>
                <div className="bg-functional-error/5 border border-functional-error/20 p-6 rounded-xl relative">
                    <p className="font-mono text-neutral-charcoal dark:text-white">
                        "Make a flashcard app for me."
                    </p>
                </div>
                <div className="text-neutral-slate dark:text-neutral-cool text-sm">
                    <strong className="block mb-1">Why it fails:</strong>
                    <ul className="list-disc list-inside">
                        <li>What language? Python? React?</li>
                        <li>Is it a website or mobile app?</li>
                        <li>Where does the data come from?</li>
                    </ul>
                </div>
            </div>

            {/* Good Example */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-functional-success font-bold uppercase tracking-wider text-sm">
                    <CheckCircle size={16} /> The "Vibe" Prompt
                </div>
                <div className="bg-functional-success/5 border border-functional-success/20 p-6 rounded-xl relative">
                    <p className="font-mono text-sm text-neutral-charcoal dark:text-white leading-relaxed">
                        "Act as a senior frontend engineer <strong>(Role)</strong>. <br/><br/>
                        Create an interactive flashcard web app <strong>(Context)</strong>. <br/><br/>
                        The user should upload a CSV file with 'Question' and 'Answer' columns. The app should display one card at a time that flips when clicked <strong>(Task)</strong>. <br/><br/>
                        Use a single HTML file with embedded CSS/JS so I can run it easily in my browser <strong>(Constraint)</strong>."
                    </p>
                </div>
                <div className="text-neutral-slate dark:text-neutral-cool text-sm">
                    <strong className="block mb-1">Why it works:</strong>
                    <ul className="list-disc list-inside">
                        <li>Specifies the output format (Single HTML).</li>
                        <li>Defines the data source (CSV).</li>
                        <li>Describes the interaction (Flip on click).</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Pro Tip */}
      <section className="bg-neutral-offWhite dark:bg-white/5 border border-neutral-cool/20 rounded-xl p-8">
        <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-4">Pro Tip: Iterate, Don't Restart</h3>
        <p className="text-lg text-neutral-slate dark:text-neutral-cool leading-relaxed">
            If the AI gives you code that is 80% correct, <strong>do not start over</strong>. Reply to it like a colleague:
        </p>
        <div className="mt-4 bg-white dark:bg-black/20 p-4 rounded-lg border-l-4 border-deepPurple italic text-neutral-charcoal dark:text-white">
            "That's great, but the flashcards aren't centering on the screen. Can you update the CSS to flex center the card in the middle of the viewport?"
        </div>
      </section>
    </div>
  );
};

export default VibeCodingPrompting;