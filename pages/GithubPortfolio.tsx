import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const GithubPortfolio: React.FC = () => {
  const guideParts = [
    { title: "Understanding GitHub", desc: "Learn what a repository, commit, and README are in simple, non-technical terms.", link: "/github/part-1", part: 1 },
    { title: "Setting Up Your Account", desc: "Create your professional GitHub account and set up your profile for success.", link: "/github/part-2", part: 2 },
    { title: "Your Profile README", desc: "Build your 'digital billboard' to introduce yourself to the tech world.", link: "/github/part-3", part: 3 },
    { title: "First AI Project Repository", desc: "Create your first project folder, add a license, and structure it properly.", link: "/github/part-4", part: 4 },
    { title: "3 Beginner-Friendly Projects", desc: "Get three no-code project ideas, like a prompt library or a GPT showcase.", link: "/github/part-5", part: 5 },
    { title: "Adding Files to Your Repo", desc: "Learn how to upload files, screenshots, and PDFs to your projects.", link: "/github/part-6", part: 6 },
    { title: "Linking Your LinkedIn & CV", desc: "Connect your portfolio by adding your LinkedIn, CV, and other professional links.", link: "/github/part-7", part: 7 },
    { title: "Making Your Work Discoverable", desc: "Use topics and good descriptions to help recruiters and collaborators find you.", link: "/github/part-8", part: 8 },
    { title: "Documenting Certifications", desc: "Showcase your expertise by creating a dedicated repository for your AI courses.", link: "/github/part-9", part: 9 },
    { title: "What Else Lives on GitHub?", desc: "Explore the wider world of GitHub beyond just AI and code to get new ideas.", link: "/github/part-10", part: 10 },
    { title: "Portfolio Best Practices", desc: "Learn the 'golden rules' of a great portfolio, from clear READMEs to commit messages.", link: "/github/part-11", part: 11 },
    { title: "Maintaining Your Presence", desc: "Set up a simple weekly and monthly routine to keep your profile active and fresh.", link: "/github/part-12", part: 12 },
    { title: "Getting Feedback", desc: "Find out how and where to ask for constructive feedback to improve your projects.", link: "/github/part-13", part: 13 },
    { title: "Common Mistakes to Avoid", desc: "Dodge common traps like waiting for perfection or accidentally sharing private data.", link: "/github/part-14", part: 14 },
    { title: "Advanced Features", desc: "Explore next-level features like GitHub Pages, Issues, and badges when you're ready.", link: "/github/part-15", part: 15 },
    { title: "Resources for Learning", desc: "A curated list of official docs, tutorials, and communities to continue your journey.", link: "/github/part-16", part: 16 },
    { title: "Your 30-Day Launch Plan", desc: "A step-by-step, week-by-week checklist to build your portfolio from scratch.", link: "/github/part-17", part: 17 },
    { title: "Measuring Your Success", desc: "Understand what 'good' looks like and what metrics *really* matter (hint: it's not stars).", link: "/github/part-18", part: 18 },
  ];

  return (
    <div className="space-y-12 max-w-7xl mx-auto pb-16">
      {/* Header */}
      <div className="space-y-6">
         <Link 
          to="/" 
          className="inline-flex items-center text-sm font-medium text-neutral-slate hover:text-cardinal transition-colors w-fit group"
        >
          <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
        </Link>
        <div className="text-center max-w-3xl mx-auto">
             <h1 className="text-4xl md:text-5xl font-bold text-neutral-charcoal dark:text-white tracking-tight leading-tight mb-4">Your First GitHub Portfolio</h1>
             <p className="text-xl text-neutral-slate dark:text-neutral-cool">A No-Code Guide to Showcasing Your AI Journey for Complete Beginners</p>
        </div>
      </div>

      {/* Intro Card */}
      <div className="bg-white dark:bg-neutral-darkCard rounded-2xl p-8 md:p-12 border border-neutral-cool/20 shadow-sls-md">
         <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white mb-6">Why GitHub? (And Why Now?)</h2>
         <div className="space-y-4 text-lg text-neutral-slate dark:text-neutral-cool leading-relaxed">
            <p>You just completed an amazing AI training course. You've built a custom GPT, learned prompt engineering, or created a helpful automation. You're proud of your work, but where do you put it?</p>
            <p>Email attachments? A folder on your desktop? A Google Doc somewhere?</p>
            <p>Here's the thing: <strong className="text-cardinal dark:text-electric">GitHub is where the tech world expects to find your work.</strong> It's like LinkedIn, but instead of just saying you know AI, you show what you've built. Recruiters look there. Collaborators find you there. It's your professional showcase that proves you can work with modern technology.</p>
            <p>The best part? You don't need to code to use GitHub effectively. You can do everything through your web browser, point-and-click style. Let's build your AI portfolio together.</p>
         </div>
      </div>

      {/* Grid of Parts */}
      <div>
         <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white mb-8 text-center">The 18-Part Guide</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideParts.map((part) => {
               const isInternal = part.link.startsWith('/');
               const Component = isInternal ? Link : 'a';
               const props = isInternal ? { to: part.link } : { href: part.link, target: "_blank", rel: "noopener noreferrer" };

               return (
                <Component 
                 key={part.part}
                 {...props}
                 className="group bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/20 shadow-sls-sm hover:shadow-sls-md hover:border-cardinal/40 dark:hover:border-electric/40 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
               >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-neutral-offWhite dark:bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                      <div className="text-xs font-bold uppercase tracking-widest text-cardinal dark:text-electric mb-3">Part {part.part}</div>
                      <h3 className="text-xl font-bold text-neutral-charcoal dark:text-white mb-3 group-hover:text-cardinal dark:group-hover:text-electric transition-colors">{part.title}</h3>
                      <p className="text-neutral-slate dark:text-neutral-cool mb-6 flex-grow leading-relaxed">{part.desc}</p>
                      <div className="mt-auto pt-4 border-t border-neutral-cool/10 flex items-center text-sm font-bold text-cardinal dark:text-electric gap-2">
                         Read Part {part.part} {isInternal ? <ArrowLeft size={14} className="rotate-180 group-hover:translate-x-1 transition-transform" /> : <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />}
                      </div>
                  </div>
               </Component>
            )})}
         </div>
      </div>
      
      {/* Footer */}
      <div className="text-center pt-12 border-t border-neutral-cool/20">
         <p className="text-neutral-slate dark:text-neutral-cool text-lg font-medium italic">Your AI portfolio is waiting.</p>
      </div>
    </div>
  );
};

export default GithubPortfolio;