import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Copy, Check, Lightbulb, BookOpen, MessageSquare, Search, Zap } from 'lucide-react';

const GithubPortfolioPart5: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const gptShowcaseReadme = `# My Custom GPT Collection

A showcase of specialized GPTs I've built to solve real problems.

## Featured GPTS

### 1. [Legal Research Assistant]

**Purpose**: Helps legal professionals draft research queries and analyze precedents
**Target Users**: Law students, paralegals, junior associates
**Key Features**:
- Structured research query generation
- Citation format assistance
- Case law summarization
- Jurisdiction-specific guidance

**Prompt Strategy**:
- Role: Expert legal research librarian
- Constraints: Always cite sources, flag jurisdictional differences
- Output format: Structured research memos

**Example Use Case**: [Describe a specific problem this solved]

**Screenshots**:
[Upload images showing the GPT in action]

**Lessons Learned**:
- [What worked well]
- [What I'd improve]
- [Unexpected uses I discovered]

[Repeat for each GPT]`;

  const promptLibraryReadme = `# Effective Prompts Library

A curated collection of AI prompts I've tested and refined through real-world use.

## Prompt Categories
- Research & Analysis
- Creative Writing
- Data Analysis
- Professional Communication
- Learning & Education

## How to Use This Library
1. Browse by category
2. Copy the prompt template
3. Replace [bracketed sections] with your specifics
4. Adjust parameters based on your needs

## Featured Prompt: Research Synthesis

**Purpose**: Synthesize multiple sources into a coherent summary with citations

**Prompt**:
You are a research analyst. I will provide you with [X] sources on [topic].
Your task:
1. Identify the 3-5 key themes across all sources
2. Note where sources agree and disagree
3. Synthesize findings into a 500-word summary
4. Include inline citations in [APA/MLA/Chicago] format
5. End with a "Key Takeaways" section

Sources: [Paste your sources here]

**Why This Works**:
- Clearly defines role and task
- Specifies exact output requirements
- Includes formatting instructions
- Asks for structured thinking

**When to Use**: Research papers, literature reviews, due diligence reports

[Include 10-20 prompts...]`;

  const toolReviewReadme = `# AI Tools I've Tested

Honest reviews and comparisons of AI tools for [your field/industry].

## Purpose
I test and document AI tools so others can make informed decisions.

## Review Criteria
Every tool is evaluated on:
- **Ease of Use** (1-5)
- **Output Quality** (1-5)
- **Cost** (Free/Paid tiers)
- **Use Cases**: Where does this tool shine?
- **Limitations**: What can't it do?

## Tools Reviewed

### Large Language Models

#### ChatGPT (OpenAI)
**Tested**: GPT-5 (Plus)
**Best For**: General knowledge, creative writing
**Rating**: (5/5)
**Strengths**:
- Most versatile LLM available
- Custom GPTs extend functionality
**Limitations**:
- Can be overly verbose
- Knowledge cutoff
**My Use Cases**:
- Draft initial versions of documents
- Research synthesis
- Brainstorming and ideation
[Repeat format for Claude, Gemini, etc.]

## VS Head-to-Head Comparisons
### ChatGPT vs Claude vs Gemini
[Detailed comparison table]

## Best Tool for Different Tasks
- **Creative Writing**: [Tool]
- **Data Analysis**: [Tool]`;

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
                Part 5: Three Beginner-Friendly AI Projects
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8 leading-relaxed">
                Now let's create three actual project repositories. These are perfect for beginners because they require no coding, just documentation, screenshots, and examples.
            </p>
            
            <div className="pt-8 border-t border-neutral-cool/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* COLUMN 1: PROJECT 1 */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                                    <MessageSquare size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Project Idea 1: Custom GPT Showcase</h3>
                            </div>
                            
                            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-2">
                                <strong className="text-neutral-charcoal dark:text-white">Repository Name:</strong> <code className="bg-neutral-offWhite dark:bg-white/10 px-1.5 py-0.5 rounded text-cardinal dark:text-electric font-mono text-base">my-custom-gpts</code>
                            </p>

                            {/* Note Box */}
                            <div className="bg-neutral-offWhite dark:bg-white/5 border border-neutral-cool/20 rounded-xl p-5 my-6">
                                <p className="font-bold text-neutral-charcoal dark:text-white mb-2 flex items-center gap-2">
                                    <Lightbulb size={18} className="text-warmGold" />
                                    Don't know how to make a Custom GPT?
                                </p>
                                <p className="text-neutral-slate dark:text-neutral-cool text-sm">
                                    No problem! This is a skill you can learn. For a complete guide on how to build your first Custom GPT, check out the <a href="https://sites.google.com/law.stanford.edu/ailearninghub/sls-training-center/custom-gpts" target="_blank" rel="noopener noreferrer" className="text-cardinal dark:text-electric hover:underline font-semibold">Custom GPT Training Documentation</a>.
                                </p>
                            </div>
                            
                            <h4 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-3">What to Include:</h4>
                            <ol className="list-decimal list-inside space-y-2 text-neutral-slate dark:text-neutral-cool marker:font-bold marker:text-cardinal dark:marker:text-electric">
                                <li>Screenshots of each GPT you create</li>
                                <li>The instructions/system prompt you used</li>
                                <li>Example conversations showing what it does</li>
                                <li>Who it's designed for and why you made it</li>
                                <li>Lessons learned during creation</li>
                            </ol>
                            
                            <div className="mt-6">
                                <h4 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-3">README Template:</h4>
                                <div className="relative group">
                                    <div className="absolute top-3 right-3 z-10">
                                        <button 
                                            onClick={() => handleCopy(gptShowcaseReadme, 'gpt')}
                                            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors backdrop-blur-sm"
                                        >
                                            {copied === 'gpt' ? <Check size={14} className="text-functional-success" /> : <Copy size={14} />}
                                            {copied === 'gpt' ? 'Copied' : 'Copy'}
                                        </button>
                                    </div>
                                    <pre className="bg-[#1a1a1a] text-neutral-offWhite p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-neutral-cool/20">
                                        {gptShowcaseReadme}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 2: PROJECT 2 */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                                    <BookOpen size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Project Idea 2: AI Prompt Library</h3>
                            </div>

                            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-4">
                                <strong className="text-neutral-charcoal dark:text-white">Repository Name:</strong> <code className="bg-neutral-offWhite dark:bg-white/10 px-1.5 py-0.5 rounded text-cardinal dark:text-electric font-mono text-base">effective-prompts-library</code>
                            </p>
                            
                            <h4 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-3">What to Include:</h4>
                            <p className="text-neutral-slate dark:text-neutral-cool mb-6">Your best prompts organized by category, with explanations of why they work.</p>

                            <div className="mt-6">
                                <h4 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-3">README Template:</h4>
                                <div className="relative group">
                                    <div className="absolute top-3 right-3 z-10">
                                        <button 
                                            onClick={() => handleCopy(promptLibraryReadme, 'prompts')}
                                            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors backdrop-blur-sm"
                                        >
                                            {copied === 'prompts' ? <Check size={14} className="text-functional-success" /> : <Copy size={14} />}
                                            {copied === 'prompts' ? 'Copied' : 'Copy'}
                                        </button>
                                    </div>
                                    <pre className="bg-[#1a1a1a] text-neutral-offWhite p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-neutral-cool/20">
                                        {promptLibraryReadme}
                                    </pre>
                                </div>
                            </div>

                            <div className="bg-neutral-offWhite dark:bg-white/5 p-4 rounded-xl border border-neutral-cool/20 mt-6">
                                <h4 className="font-bold text-base text-neutral-charcoal dark:text-white mb-2 flex items-center gap-2">
                                    <Zap size={16} className="text-deepPurple" />
                                    How to Add Prompts:
                                </h4>
                                <p className="text-sm text-neutral-slate dark:text-neutral-cool">
                                    Create files like <code className="font-mono bg-white/50 dark:bg-black/20 px-1 rounded">research-prompts.md</code>, <code className="font-mono bg-white/50 dark:bg-black/20 px-1 rounded">creative-prompts.md</code>, etc., in your repository.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 3: Full Width */}
                <div className="mt-16 pt-12 border-t border-neutral-cool/20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                                <Search size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Project Idea 3: AI Tool Comparison & Reviews</h3>
                        </div>

                        <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-2">
                            <strong className="text-neutral-charcoal dark:text-white">Repository Name:</strong> <code className="bg-neutral-offWhite dark:bg-white/10 px-1.5 py-0.5 rounded text-cardinal dark:text-electric font-mono text-base">ai-tools-tested</code>
                        </p>
                        
                        <div className="mt-6 mb-8">
                            <h4 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-2">What to Include:</h4>
                            <p className="text-neutral-slate dark:text-neutral-cool">Detailed reviews of AI tools you've tried, with honest pros/cons and use cases.</p>
                        </div>

                        {/* Tutorial Section */}
                        <div className="bg-gradient-to-br from-neutral-offWhite to-white dark:from-neutral-darkBg dark:to-neutral-darkCard border border-neutral-cool/20 rounded-xl p-8 mb-10 shadow-sls-sm">
                            <h4 className="font-bold text-xl text-neutral-charcoal dark:text-white mb-6 flex items-center gap-2">
                                <Lightbulb size={24} className="text-warmGold" />
                                How to Compare Tools (A Simple Tutorial)
                            </h4>
                            <ol className="space-y-4">
                                {[
                                    { title: "Pick a Standard Task", desc: "Choose a real-world task you do often. For example: \"Summarize a complex article,\" \"Draft a professional email,\" or \"Explain a technical concept simply.\"" },
                                    { title: "Use the Same Prompt", desc: "Copy and paste the exact same prompt into every tool you are testing (e.g., GPT-5, Claude 4.5, Gemini 2.5)." },
                                    { title: "Compare the Results", desc: "Look at the outputs side-by-side. Ask yourself: Which one was more accurate? Which one was clearer? Which one had the better tone? Which one was faster?" },
                                    { title: "Take Screenshots", desc: "Document everything! Take screenshots of your prompt and the different results." },
                                    { title: "Write Your Review", desc: "Use your notes and screenshots to write the review in your README. This is your evidence!" }
                                ].map((step, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-charcoal/5 dark:bg-white/10 flex items-center justify-center font-bold text-neutral-charcoal dark:text-white border border-neutral-cool/20">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <strong className="block text-neutral-charcoal dark:text-white mb-1">{step.title}</strong>
                                            <span className="text-neutral-slate dark:text-neutral-cool">{step.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        
                        <div>
                            <h4 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-3">README Template:</h4>
                            <div className="relative group">
                                <div className="absolute top-3 right-3 z-10">
                                    <button 
                                        onClick={() => handleCopy(toolReviewReadme, 'review')}
                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors backdrop-blur-sm"
                                    >
                                        {copied === 'review' ? <Check size={14} className="text-functional-success" /> : <Copy size={14} />}
                                        {copied === 'review' ? 'Copied' : 'Copy'}
                                    </button>
                                </div>
                                <pre className="bg-[#1a1a1a] text-neutral-offWhite p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-neutral-cool/20">
                                    {toolReviewReadme}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-neutral-cool/20 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 gap-6">
                <div className="flex-grow">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-slate dark:text-neutral-cool mb-1">Next Up</p>
                    <p className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2">Part 6: Adding Files to Your Repository</p>
                    <p className="text-base text-neutral-slate dark:text-neutral-cool max-w-xl">
                        Your projects are set up! Now, let's learn how to upload files like screenshots, PDFs, and images to make them visual.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/github/part-6" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white bg-cardinal hover:bg-cardinal-dark transition-colors shadow-sls-md hover:shadow-sls-lg transform hover:-translate-y-0.5"
                    >
                        Go to Part 6 <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </section>
    </div>
  );
};

export default GithubPortfolioPart5;