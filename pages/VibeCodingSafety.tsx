import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldAlert, Lock, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

const VibeCodingSafety: React.FC = () => {
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
            <h1 className="text-4xl font-bold text-neutral-charcoal dark:text-white mb-4">Safety & Ethics</h1>
            <p className="text-xl text-neutral-slate dark:text-neutral-cool leading-relaxed">
                Before you build, you must understand the risks. Vibe coding creates real software, which means it can have real vulnerabilities.
            </p>
        </div>
      </div>

      {/* The 3 Ground Rules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/20 shadow-sls-sm">
              <div className="w-12 h-12 rounded-full bg-deepPurple/10 flex items-center justify-center text-deepPurple mb-4">
                  <span className="font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-charcoal dark:text-white mb-2">YOU are in Control</h3>
              <p className="text-sm text-neutral-slate dark:text-neutral-cool">
                  It's not magic. You must review the output. If the AI suggests something that looks wrong, question it.
              </p>
          </div>
          <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/20 shadow-sls-sm">
              <div className="w-12 h-12 rounded-full bg-functional-success/10 flex items-center justify-center text-functional-success mb-4">
                  <span className="font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-charcoal dark:text-white mb-2">Privacy First</h3>
              <p className="text-sm text-neutral-slate dark:text-neutral-cool">
                  Never put student names, client data, or passwords into a public AI model prompt.
              </p>
          </div>
          <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/20 shadow-sls-sm">
              <div className="w-12 h-12 rounded-full bg-warmGold/10 flex items-center justify-center text-warmGold mb-4">
                  <span className="font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-charcoal dark:text-white mb-2">API Key Safety</h3>
              <p className="text-sm text-neutral-slate dark:text-neutral-cool">
                  Never hardcode API keys into code you share or publish. They are like credit card numbers.
              </p>
          </div>
      </div>

      {/* The Red Zone: API Keys */}
      <section className="bg-functional-error/5 border border-functional-error/20 rounded-2xl p-8">
        <div className="flex items-center gap-3 text-functional-error mb-6">
            <Lock size={32} />
            <h2 className="text-2xl font-bold">The "Red Zone": API Keys</h2>
        </div>
        <div className="space-y-4 text-neutral-charcoal dark:text-white">
            <p>
                <strong>What is an API Key?</strong> It's a password that lets your app talk to services (like OpenAI or Google Maps). If someone steals it, they can charge your credit card.
            </p>
            <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-functional-error/10">
                <h4 className="font-bold mb-3 text-functional-error flex items-center gap-2"><AlertTriangle size={18} /> Dangerous Practice</h4>
                <code className="block bg-neutral-offWhite dark:bg-black/20 p-3 rounded font-mono text-sm mb-2 text-functional-error">
                    const apiKey = "sk-12345-THIS-IS-BAD";
                </code>
                <p className="text-sm text-neutral-slate dark:text-neutral-cool">
                    Never paste a key directly into your code like this if you plan to share the file.
                </p>
            </div>
            <div className="bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-functional-success/20">
                <h4 className="font-bold mb-3 text-functional-success flex items-center gap-2"><CheckCircle size={18} /> Safe Practice</h4>
                <p className="text-sm text-neutral-slate dark:text-neutral-cool mb-2">
                    For learning projects in Google AI Studio, the environment handles the key for you automatically or asks you to paste it securely in a dedicated "Secrets" panel.
                </p>
            </div>
        </div>
      </section>

      {/* The NY Times Rule */}
      <section className="bg-neutral-offWhite dark:bg-white/5 border border-neutral-cool/20 rounded-2xl p-8">
         <div className="flex items-center gap-3 mb-4">
            <Eye size={24} className="text-deepPurple" />
            <h2 className="text-2xl font-bold text-neutral-charcoal dark:text-white">The NY Times Rule</h2>
         </div>
         <p className="text-lg text-neutral-slate dark:text-neutral-cool leading-relaxed">
            "Before you put data into an AI prompt, ask yourself: <br/>
            <strong>Would I be comfortable seeing this data on the front page of the New York Times?</strong>"
         </p>
         <p className="mt-4 text-neutral-slate dark:text-neutral-cool">
            If the answer is no (e.g., a confidential contract, a student's grade), do not put it in the prompt. Use dummy data instead (e.g., "John Doe", "Company X").
         </p>
      </section>
    </div>
  );
};

export default VibeCodingSafety;