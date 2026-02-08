import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RefreshCw, MessageSquare, Play, PenTool, CheckCircle2, ChevronRight } from 'lucide-react';

const VibeCodingProcess: React.FC = () => {
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
            <h1 className="text-4xl font-bold text-neutral-charcoal dark:text-white mb-4">The Core Process</h1>
            <p className="text-xl text-neutral-slate dark:text-neutral-cool leading-relaxed">
                Vibe coding is not a "one-shot" magic trick. It is a reliable, repeatable loop. 
            </p>
        </div>
      </div>

      {/* The Cycle Image */}
      <div className="flex justify-center py-8">
         <img 
            src="https://i.postimg.cc/fRfCBSQD/Untitled-design-(4).png" 
            alt="The Vibe Coding Cycle: Describe, Generate, Test, Refine"
            className="w-full max-w-lg drop-shadow-2xl rounded-xl" 
         />
      </div>

      {/* Detailed Steps */}
      <section className="space-y-12">
        
        {/* Step 1 */}
        <div className="flex gap-6 md:gap-8">
            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-cardinal text-white flex items-center justify-center font-bold text-2xl shadow-lg">1</div>
            <div className="space-y-4 pt-2">
                <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Describe (The Prompt)</h3>
                <p className="text-lg text-neutral-slate dark:text-neutral-cool leading-relaxed">
                    Articulate your idea in plain English. This is the most important step. If you can't describe it clearly to a human, you can't describe it to an AI.
                </p>
                <div className="bg-neutral-offWhite dark:bg-white/5 border border-neutral-cool/20 rounded-xl p-6">
                    <h4 className="font-bold text-sm uppercase tracking-wide text-neutral-slate/70 dark:text-neutral-cool/70 mb-3">Key Questions to Answer:</h4>
                    <ul className="space-y-2 text-neutral-charcoal dark:text-white">
                        <li className="flex items-center gap-2"><ChevronRight size={16} className="text-cardinal"/> What is the goal of this specific component?</li>
                        <li className="flex items-center gap-2"><ChevronRight size={16} className="text-cardinal"/> Who is the user?</li>
                        <li className="flex items-center gap-2"><ChevronRight size={16} className="text-cardinal"/> What data does it need to handle?</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-6 md:gap-8">
            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-deepPurple text-white flex items-center justify-center font-bold text-2xl shadow-lg">2</div>
            <div className="space-y-4 pt-2">
                <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Generate (The AI)</h3>
                <p className="text-lg text-neutral-slate dark:text-neutral-cool leading-relaxed">
                    Let the model write the initial code. In Google AI Studio, this happens when you hit "Run". In other tools, it happens in the chat window.
                </p>
                <p className="text-neutral-slate dark:text-neutral-cool italic">
                    <strong>Note:</strong> You do not need to understand every line of code it writes, but you should scan it to see if the structure matches your logic.
                </p>
            </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-6 md:gap-8">
            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-warmGold text-white flex items-center justify-center font-bold text-2xl shadow-lg">3</div>
            <div className="space-y-4 pt-2">
                <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Test (The Reality Check)</h3>
                <p className="text-lg text-neutral-slate dark:text-neutral-cool leading-relaxed">
                    Run the code. Does it work? This is where beginners get stuck. They expect perfection.
                </p>
                <div className="bg-functional-warning/10 border border-functional-warning/30 rounded-xl p-6">
                    <p className="font-bold text-neutral-charcoal dark:text-white mb-2">The "Vibe Check" Checklist:</p>
                    <ul className="space-y-2 text-neutral-slate dark:text-neutral-cool">
                        <li className="flex gap-2"><CheckCircle2 size={18} className="text-functional-warning"/> Does it look like what I imagined?</li>
                        <li className="flex gap-2"><CheckCircle2 size={18} className="text-functional-warning"/> Does clicking buttons do what I expect?</li>
                        <li className="flex gap-2"><CheckCircle2 size={18} className="text-functional-warning"/> Are there error messages in the console?</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Step 4 */}
        <div className="flex gap-6 md:gap-8">
            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-functional-success text-white flex items-center justify-center font-bold text-2xl shadow-lg">4</div>
            <div className="space-y-4 pt-2">
                <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Refine (The Iteration)</h3>
                <p className="text-lg text-neutral-slate dark:text-neutral-cool leading-relaxed">
                    This is where the magic happens. You take the result from Step 3, identify the gap, and tell the AI to fix it.
                </p>
                <div className="bg-neutral-offWhite dark:bg-white/5 border border-neutral-cool/20 rounded-xl p-6">
                    <h4 className="font-bold text-sm uppercase tracking-wide text-neutral-slate/70 dark:text-neutral-cool/70 mb-3">Example Refinements:</h4>
                    <ul className="space-y-3 font-mono text-sm text-deepPurple dark:text-electric">
                        <li>"It works, but the text is too small. Make it 20px."</li>
                        <li>"I got an error saying 'variable undefined'. Please fix."</li>
                        <li>"Add a 'Download CSV' button to the data table."</li>
                    </ul>
                </div>
            </div>
        </div>

      </section>

      {/* Mindset Footer */}
      <div className="border-t border-neutral-cool/20 pt-12 text-center">
        <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-4">The "Human in the Loop"</h3>
        <p className="text-lg text-neutral-slate dark:text-neutral-cool max-w-2xl mx-auto">
            You are not the coder. You are the Product Manager and the QA Tester. Your job is to define the vision and verify the quality.
        </p>
      </div>
    </div>
  );
};

export default VibeCodingProcess;