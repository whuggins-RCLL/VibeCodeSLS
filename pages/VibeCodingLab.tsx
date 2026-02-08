import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Download, Play, RefreshCw, Layers } from 'lucide-react';

const VibeCodingLab: React.FC = () => {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cardinal/10 text-cardinal dark:text-electric text-xs font-bold uppercase tracking-widest mb-4">
                Hands-On Lab
            </div>
            <h1 className="text-4xl font-bold text-neutral-charcoal dark:text-white mb-4">Build a Flashcard App</h1>
            <p className="text-xl text-neutral-slate dark:text-neutral-cool leading-relaxed">
                We will use Google AI Studio to turn a simple idea into a working interactive web application in less than 15 minutes.
            </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="bg-neutral-offWhite dark:bg-white/5 border border-neutral-cool/20 rounded-xl p-6">
        <h3 className="font-bold text-neutral-charcoal dark:text-white mb-3">Prerequisites</h3>
        <ul className="space-y-2 text-neutral-slate dark:text-neutral-cool text-sm">
            <li className="flex items-center gap-2">1. A Google Account</li>
            <li className="flex items-center gap-2">2. Access to <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-cardinal dark:text-electric underline">Google AI Studio</a></li>
            <li className="flex items-center gap-2">3. A sample CSV file (we'll create one below)</li>
        </ul>
      </div>

      {/* Step 1: Data Prep */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-neutral-charcoal dark:bg-white text-white dark:text-neutral-charcoal flex items-center justify-center font-bold text-lg">1</div>
            <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Prepare Your Data</h2>
        </div>
        <p className="text-neutral-slate dark:text-neutral-cool">
            AI works best when you give it examples. Create a simple file named <code>flashcards.csv</code> on your computer with this content:
        </p>
        <div className="bg-white dark:bg-black/20 border border-neutral-cool/20 rounded-lg p-4 font-mono text-sm text-neutral-slate dark:text-neutral-cool overflow-x-auto">
            Question,Answer<br/>
            What is Vibe Coding?,Building software using natural language descriptions.<br/>
            What is an API?,A waiter that takes requests and brings back data.<br/>
            What is Google AI Studio?,A tool for prototyping with Gemini models.
        </div>
      </section>

      {/* Step 2: The Prompt */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-neutral-charcoal dark:bg-white text-white dark:text-neutral-charcoal flex items-center justify-center font-bold text-lg">2</div>
            <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Describe & Generate</h2>
        </div>
        <p className="text-neutral-slate dark:text-neutral-cool">
            Open Google AI Studio. Start a new chat. Upload your <code>flashcards.csv</code> file (click the + button). Then, copy and paste this prompt:
        </p>
        <div className="bg-deepPurple/5 border border-deepPurple/10 rounded-xl p-6 relative group">
            <p className="font-mono text-sm text-neutral-charcoal dark:text-white whitespace-pre-wrap">
                "Act as a frontend web developer. <br/><br/>
                Create an interactive flashcard generator app. <br/><br/>
                The user should be able to upload a .csv file (like the one attached) and the app should parse it and create a flashcard game.<br/><br/>
                The game should show one card at a time. The user clicks the card to flip it and see the answer. Include 'Next' and 'Previous' buttons.<br/><br/>
                Constraint: Provide the entire app as a single HTML file with embedded CSS and JavaScript so I can run it locally."
            </p>
        </div>
      </section>

      {/* Step 3: Test */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-neutral-charcoal dark:bg-white text-white dark:text-neutral-charcoal flex items-center justify-center font-bold text-lg">3</div>
            <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Test the Code</h2>
        </div>
        <ol className="space-y-4 list-decimal list-inside text-neutral-slate dark:text-neutral-cool ml-2">
            <li>Google AI Studio will generate a block of HTML code.</li>
            <li>Copy the code (click the "Copy" icon).</li>
            <li>Create a new text file on your computer named <code>index.html</code>.</li>
            <li>Paste the code into it and save.</li>
            <li>Double-click <code>index.html</code> to open it in your browser.</li>
            <li>Upload your <code>flashcards.csv</code> to the app you just built!</li>
        </ol>
      </section>

      {/* Step 4: Refine */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-neutral-charcoal dark:bg-white text-white dark:text-neutral-charcoal flex items-center justify-center font-bold text-lg">4</div>
            <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Iterate & Refine</h2>
        </div>
        <p className="text-neutral-slate dark:text-neutral-cool">
            It probably works, but looks plain. Let's vibe code a new feature. Go back to the chat and say:
        </p>
        <div className="bg-warmGold/5 border border-warmGold/10 rounded-xl p-6">
            <p className="font-mono text-sm text-neutral-charcoal dark:text-white">
                "That works great! Now, please update the code to make it look modern and sleek. Use a dark mode color scheme with purple accents. Also, add a progress bar at the top showing which card I am on (e.g., 1/3)."
            </p>
        </div>
        <p className="text-neutral-slate dark:text-neutral-cool">
            Repeat the copy/paste/save process to see your updated app.
        </p>
      </section>

      {/* Conclusion */}
      <div className="border-t border-neutral-cool/20 pt-12 text-center">
        <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-4">Congratulations!</h3>
        <p className="text-lg text-neutral-slate dark:text-neutral-cool max-w-2xl mx-auto mb-8">
            You just "vibe coded" your first application. You didn't write the syntax, but you defined the logic, provided the data, and directed the design.
        </p>
        <Link 
            to="/intro" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-cardinal text-white font-bold rounded-xl shadow-lg hover:bg-cardinal-dark transition-colors"
        >
            Back to Curriculum <ArrowLeft size={18} />
        </Link>
      </div>
    </div>
  );
};

export default VibeCodingLab;