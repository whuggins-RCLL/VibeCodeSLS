import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sparkles, 
  ExternalLink, 
  Code, 
  Zap, 
  ShieldAlert, 
  Users, 
  BookOpen, 
  Monitor, 
  CheckCircle, 
  Play,
  Terminal,
  Trophy,
  Rocket
} from 'lucide-react';

const IntroToVibeCoding: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-24">
      {/* Header / Breadcrumbs */}
      <div className="space-y-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm font-medium text-neutral-slate hover:text-cardinal transition-colors w-fit group"
        >
          <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative rounded-[3rem] overflow-hidden bg-neutral-charcoal dark:bg-black text-white p-8 md:p-20 shadow-sls-xl border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-deepPurple/80 via-cardinal/60 to-warmGold/40 opacity-60"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold uppercase tracking-widest text-electric animate-fade-in">
            <Sparkles size={14} /> The Future of Creation
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none drop-shadow-lg">
            Vibe Coding
          </h1>
          <p className="text-xl md:text-3xl font-light text-white/90 leading-relaxed">
            Build working software by describing ideas in plain English. No coding experience required.
          </p>
        </div>
      </section>

      {/* What is it? */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-neutral-charcoal dark:text-white">What is "Vibe Coding"?</h2>
        <p className="text-xl text-neutral-slate dark:text-neutral-cool leading-relaxed">
          Coined by Andrej Karpathy (OpenAI co-founder), "vibe coding" describes a workflow where you 
          <span className="text-deepPurple dark:text-electric font-bold"> "fully give in to the vibes"</span> and let AI generate the code. 
          You guide the vision; AI handles the syntax. It's about clear communication, creative thinking, and iteration.
        </p>
      </section>

      {/* Tools Landscape */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-neutral-cool/20 pb-4">
          <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white flex items-center gap-2">
            <Monitor size={24} className="text-cardinal dark:text-electric" /> The Best Tools for Beginners
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ToolCard 
            title="Claude Artifacts"
            url="https://claude.ai"
            description="The lowest barrier to entry. Describe a tool or app, and see it rendered live in the chat. Free and instant."
            badge="Best Start"
            badgeColor="bg-functional-success"
          />
          <ToolCard 
            title="Replit"
            url="https://replit.com"
            description="All-in-one platform where AI Agents write code, set up databases, and deploy real apps. Powerful but can be costly."
            badge="For Deployment"
            badgeColor="bg-deepPurple"
          />
          <ToolCard 
            title="Lovable"
            url="https://lovable.dev"
            description="Specializes in full-stack web apps via conversation. Fast growth, distinct UI focus, but watch for security settings."
            badge="Full Stack"
            badgeColor="bg-electric"
          />
          <ToolCard 
            title="Bolt.new"
            url="https://bolt.new"
            description="Browser-based builder by StackBlitz. Generous free tier for prototyping full-stack ideas instantly."
            badge="Prototyping"
            badgeColor="bg-warmGold"
          />
        </div>
        
        <div className="bg-neutral-offWhite dark:bg-neutral-darkCard/50 p-6 rounded-xl border border-neutral-cool/20 flex gap-4 items-start">
          <Code size={24} className="text-neutral-slate flex-shrink-0 mt-1" />
          <p className="text-sm text-neutral-slate dark:text-neutral-cool">
            <strong>Note:</strong> Tools like <em>Cursor</em>, <em>Windsurf</em>, and <em>GitHub Copilot</em> are powerful but assume some developer knowledge. Start with the browser-based tools above if you're a complete beginner.
          </p>
        </div>
      </section>

      {/* Free Courses */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-neutral-cool/20 pb-4">
          <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white flex items-center gap-2">
            <BookOpen size={24} className="text-cardinal dark:text-electric" /> Learn in Under 2 Hours
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CourseCard 
            title="Build with Andrew"
            provider="DeepLearning.AI"
            time="30 Minutes"
            url="https://www.deeplearning.ai/courses/build-with-andrew/"
            description="The single best starting point. Build a birthday message generator and ping pong game. Teaches a repeatable framework."
            recommended={true}
          />
          <CourseCard 
            title="Vibe Coding 101"
            provider="DeepLearning.AI & Replit"
            time="90 Minutes"
            url="https://learn.deeplearning.ai/courses/vibe-coding-101-with-replit/"
            description="The natural next step. Learn the 'five skill framework' and deploy two complete web apps."
          />
          <CourseCard 
            title="Intro to Vibe Coding"
            provider="Microsoft Learn"
            time="Self-Paced"
            url="https://learn.microsoft.com/en-us/training/modules/introduction-vibe-coding/"
            description="Interactive training covering prompt creation and prototype building with GitHub Copilot."
          />
          <CourseCard 
            title="Codecademy Intro"
            provider="Codecademy"
            time="Interactive"
            url="https://www.codecademy.com/learn/intro-to-vibe-coding"
            description="Structured lessons, projects, and quizzes to test your knowledge."
          />
        </div>
      </section>

      {/* First Weekend Plan */}
      <section className="bg-gradient-to-br from-neutral-offWhite to-white dark:from-neutral-darkBg dark:to-neutral-darkCard rounded-3xl p-8 md:p-12 border border-neutral-cool/20 shadow-sls-sm relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-3xl font-bold text-neutral-charcoal dark:text-white mb-8 flex items-center gap-3">
            <Rocket size={32} className="text-cardinal dark:text-electric" /> Your First Weekend Plan
          </h3>
          
          <div className="space-y-8 border-l-2 border-neutral-cool/20 ml-4 pl-8">
            <TimelineItem 
              step="1"
              title="Friday Evening: The Magic Moment"
              desc="Open Claude Artifacts. Ask it to 'Make a simple webpage with a dark background, a centered neon title that says HELLO WORLD, and a button that releases confetti.' See it work instantly."
            />
            <TimelineItem 
              step="2"
              title="Saturday Morning: The Expense Tracker"
              desc="The 'Hello World' of vibe coding. Ask Replit or Lovable to build a personal expense tracker. It teaches forms, data storage, and charts. Ask the AI to explain 3 concepts from the code it generated."
            />
            <TimelineItem 
              step="3"
              title="Saturday Afternoon: Portfolio Site"
              desc="Build a personal landing page. Upload your photo and bio. Deploy it to a live URL so you can send it to a friend."
            />
            <TimelineItem 
              step="4"
              title="Sunday: Join a Hackathon"
              desc="Look for events like 'Vibe Code-a-thon' or 'Hack the Vibe'. They are explicitly beginner-friendly and offer workshops."
              link="https://www.vibecodinghackathon.com/"
              linkText="Find Hackathons"
            />
          </div>
        </div>
      </section>

      {/* Security Warning - RED ZONE */}
      <section className="bg-functional-error/5 border-l-4 border-functional-error rounded-r-xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <ShieldAlert size={48} className="text-functional-error" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Critical Security Risks</h3>
            <p className="text-lg text-neutral-slate dark:text-neutral-cool">
              AI optimizes for code that <em>works</em>, not code that is <em>secure</em>. Research shows ~45% of AI-generated code contains vulnerabilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-white dark:bg-neutral-darkCard p-5 rounded-lg border border-functional-error/20">
                <h4 className="font-bold text-functional-error mb-2 uppercase tracking-wide text-sm">The Checklist</h4>
                <ul className="space-y-2 text-sm text-neutral-slate dark:text-neutral-cool">
                  <li className="flex items-start gap-2"><span className="text-functional-error font-bold">!</span> Never paste API keys or passwords into prompts.</li>
                  <li className="flex items-start gap-2"><span className="text-functional-error font-bold">!</span> Explicitly ask for "secure login with input validation".</li>
                  <li className="flex items-start gap-2"><span className="text-functional-error font-bold">!</span> Treat AI code as a draft, not a finished product.</li>
                  <li className="flex items-start gap-2"><span className="text-functional-error font-bold">!</span> Do not use for HIPAA/financial data without review.</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-neutral-darkCard p-5 rounded-lg border border-functional-error/20">
                <h4 className="font-bold text-functional-error mb-2 uppercase tracking-wide text-sm">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://genai.owasp.org/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-functional-error transition-colors">OWASP Top 10 for LLM Apps</a></li>
                  <li><a href="https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-functional-error transition-colors">OpenSSF Security Guide</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-neutral-cool/20 pb-4">
          <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white flex items-center gap-2">
            <Users size={24} className="text-cardinal dark:text-electric" /> Find Your People
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="https://www.reddit.com/r/vibecoding/" target="_blank" rel="noopener noreferrer" className="group block bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/20 hover:border-cardinal/40 transition-all hover:-translate-y-1">
            <h4 className="font-bold text-lg mb-2 group-hover:text-cardinal dark:group-hover:text-electric transition-colors">r/vibecoding</h4>
            <p className="text-sm text-neutral-slate dark:text-neutral-cool">Primary hub with 150k+ members sharing tools and showcases.</p>
          </a>
          <a href="https://discord.com/invite/vibecoding" target="_blank" rel="noopener noreferrer" className="group block bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/20 hover:border-cardinal/40 transition-all hover:-translate-y-1">
            <h4 className="font-bold text-lg mb-2 group-hover:text-cardinal dark:group-hover:text-electric transition-colors">Vibe Coders Discord</h4>
            <p className="text-sm text-neutral-slate dark:text-neutral-cool">Beginner-friendly hands-on coaching and project feedback.</p>
          </a>
          <a href="https://www.meetup.com/vibe-coders-collective/" target="_blank" rel="noopener noreferrer" className="group block bg-white dark:bg-neutral-darkCard p-6 rounded-xl border border-neutral-cool/20 hover:border-cardinal/40 transition-all hover:-translate-y-1">
            <h4 className="font-bold text-lg mb-2 group-hover:text-cardinal dark:group-hover:text-electric transition-colors">Meetups</h4>
            <p className="text-sm text-neutral-slate dark:text-neutral-cool">Social coding jams in cities worldwide.</p>
          </a>
        </div>
      </section>

      {/* Footer Quote */}
      <div className="text-center pt-12 border-t border-neutral-cool/10">
        <p className="text-2xl font-medium text-neutral-charcoal dark:text-white mb-4">
          "The question is no longer whether non-programmers can build software — it's what they'll choose to build first."
        </p>
      </div>
    </div>
  );
};

/* --- Helper Components --- */

const ToolCard: React.FC<{ title: string; url: string; description: string; badge: string; badgeColor: string }> = ({ title, url, description, badge, badgeColor }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="block group h-full">
    <div className="bg-white dark:bg-neutral-darkCard h-full p-6 rounded-xl border border-neutral-cool/20 hover:shadow-sls-md transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h4 className="font-bold text-xl text-neutral-charcoal dark:text-white group-hover:text-cardinal dark:group-hover:text-electric transition-colors">{title}</h4>
        <ExternalLink size={16} className="text-neutral-slate opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white mb-3 w-fit ${badgeColor}`}>{badge}</span>
      <p className="text-sm text-neutral-slate dark:text-neutral-cool leading-relaxed flex-1">
        {description}
      </p>
    </div>
  </a>
);

const CourseCard: React.FC<{ title: string; provider: string; time: string; url: string; description: string; recommended?: boolean }> = ({ title, provider, time, url, description, recommended }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="block group">
    <div className={`bg-white dark:bg-neutral-darkCard p-6 rounded-xl border transition-all duration-300 hover:shadow-sls-md hover:-translate-y-1 relative overflow-hidden ${recommended ? 'border-cardinal/40 ring-1 ring-cardinal/10' : 'border-neutral-cool/20'}`}>
      {recommended && (
        <div className="absolute top-0 right-0 bg-cardinal text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
          START HERE
        </div>
      )}
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-1 text-xs font-bold uppercase tracking-wider text-neutral-slate/60 dark:text-neutral-cool/60">
          <span>{provider}</span> • <span>{time}</span>
        </div>
        <h4 className="font-bold text-xl text-neutral-charcoal dark:text-white mb-3 group-hover:text-cardinal dark:group-hover:text-electric transition-colors flex items-center gap-2">
          {title} <Play size={16} fill="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </h4>
        <p className="text-neutral-slate dark:text-neutral-cool leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </a>
);

const TimelineItem: React.FC<{ step: string; title: string; desc: string; link?: string; linkText?: string }> = ({ step, title, desc, link, linkText }) => (
  <div className="relative pl-8 pb-2">
    <div className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-neutral-charcoal dark:bg-white text-white dark:text-neutral-charcoal font-bold flex items-center justify-center border-4 border-neutral-offWhite dark:border-neutral-darkBg">
      {step}
    </div>
    <h4 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-2">{title}</h4>
    <p className="text-neutral-slate dark:text-neutral-cool leading-relaxed">
      {desc}
    </p>
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-sm font-bold text-cardinal dark:text-electric hover:underline">
        {linkText} <ExternalLink size={12} />
      </a>
    )}
  </div>
);

export default IntroToVibeCoding;