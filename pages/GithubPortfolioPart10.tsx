import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Code, Database, BookOpen, GraduationCap, PenTool, Settings, Box, User, Briefcase, FileText, ArrowRight } from 'lucide-react';

const GithubPortfolioPart10: React.FC = () => {
  const categories = [
    {
      icon: <Code size={24} />,
      title: "1. Software Code & Applications",
      description: "This is the most common use. Repositories in this category contain the actual code for websites, mobile apps, desktop tools, and browser extensions.",
      examples: [
        {
          title: 'RealWorld ("Medium" Clone)',
          desc: 'A "Rosetta Stone" for developers, showing the *exact same* app built in 24+ frameworks (React, Spring Boot, etc.) so you can compare them.',
          link: 'https://github.com/gothinkster/realworld'
        },
        {
          title: 'Spring PetClinic',
          desc: 'The classic, production-ready example for the Java Spring framework. It\'s a full-featured web app, not just a simple demo.',
          link: 'https://github.com/spring-projects/spring-petclinic'
        }
      ]
    },
    {
      icon: <Database size={24} />,
      title: "2. Data Science & Analysis",
      description: "These repositories are filled with Jupyter Notebooks, statistical models, and data visualizations. They show how researchers process data and find insights.",
      examples: [
        {
          title: 'Awesome Data Science',
          desc: 'A massive, community-curated "encyclopedia" of data science. It links to free courses, algorithms, and tools.',
          link: 'https://github.com/academic/awesome-datascience'
        },
        {
          title: 'Data Science Portfolio',
          desc: 'A perfect example of a *personal* portfolio. It shows complete, end-to-end data projects in easy-to-read Jupyter Notebooks.',
          link: 'https://github.com/sajal2692/data-science-portfolio'
        }
      ]
    },
    {
      icon: <BookOpen size={24} />,
      title: "3. Documentation & Writing",
      description: "Not all code is an app. This category includes technical guides, API documentation, and even entire books written in Markdown.",
      examples: [
        {
          title: 'mdBook by rust-lang',
          desc: 'A tool that turns Markdown files into a beautiful, searchable online book. It used to write the official Rust programming language book.',
          link: 'https://github.com/rust-lang/mdBook'
        },
        {
          title: 'Bookdown by rstudio',
          desc: 'A powerful tool for academic and technical writing that can create HTML, PDF, and e-book formats all from a single source.',
          link: 'https://github.com/rstudio/bookdown'
        }
      ]
    },
    {
      icon: <GraduationCap size={24} />,
      title: "4. Learning Resources",
      description: "Many people use GitHub to share their learning journey. These repos are full of tutorial series, cheat sheets, study notes, and solutions to coding challenges.",
      examples: [
        {
          title: 'freeCodeCamp',
          desc: 'The source code for the entire FreeCodeCamp platform, a massive free educational curriculum with over 9,000 tutorials.',
          link: 'https://github.com/freeCodeCamp/freeCodeCamp'
        },
        {
          title: 'Developer Roadmap',
          desc: 'Visually interactive guides that show exactly what to learn (and in what order) for careers like Frontend, Backend, and DevOps.',
          link: 'https://github.com/kamranahmedse/developer-roadmap'
        }
      ]
    },
    {
      icon: <PenTool size={24} />,
      title: "5. Design & Creative Work",
      description: "It's not just for text. Designers share entire systems, icon sets, illustration collections, and design templates for others to use.",
      examples: [
        {
          title: 'Technical Writing Portfolio',
          desc: 'A professional technical writer\'s portfolio at Amazon, showcasing writing samples, infographics, and logos.',
          link: 'https://github.com/melissakinsey/tech'
        },
        {
          title: 'Designer Portfolios Collection',
          desc: 'A curated list of 100+ designer portfolios to show how creatives use GitHub to host their work.',
          link: 'https://github.com/mejed-alkoutaini/designer-portfolios'
        }
      ]
    },
    {
      icon: <Settings size={24} />,
      title: "6. Configuration Files & Tools",
      description: "This is a more advanced use. Developers share their personal \"dotfiles\" (computer configurations), automation scripts, and development environment setups.",
      examples: [
        {
          title: 'holman/dotfiles',
          desc: 'The canonical example that launched the dotfiles movement. It shows how to organize all your system settings by topic.',
          link: 'https://github.com/holman/dotfiles'
        },
        {
          title: 'mathiasbynens/dotfiles',
          desc: 'A famous, comprehensive repository for automating and optimizing all your macOS system preferences.',
          link: 'https://github.com/mathiasbynens/dotfiles'
        }
      ]
    },
    {
      icon: <Box size={24} />,
      title: "7. Open Source Projects",
      description: "These are the libraries and frameworks that power other applications. Think of big names like React (by Facebook) or VS Code (by Microsoft).",
      examples: [
        {
          title: 'Visual Studio Code',
          desc: 'The most popular code editor, with a massive community and over 50,000 extensions. A key example of corporate open-source.',
          link: 'https://github.com/microsoft/vscode'
        },
        {
          title: 'Kubernetes',
          desc: 'The de facto standard for container orchestration, managing applications at enterprise scale. A core of modern cloud infrastructure.',
          link: 'https://github.com/kubernetes/kubernetes'
        }
      ]
    },
    {
      icon: <User size={24} />,
      title: "8. Personal Projects",
      description: "This is where you fit in! These are personal portfolios (like the one you're building), hobby projects, experiments, and creative coding.",
      examples: [
        {
          title: 'The-Cookbook',
          desc: 'A personal recipe collection that uses GitHub Issues to track recipes and GitHub Projects for meal planning.',
          link: 'https://github.com/jcallaghan/The-Cookbook'
        },
        {
          title: 'Open Source Knitting Patterns',
          desc: 'A community project for sharing and collaborating on knitting patterns, using GitHub for version control and standardization.',
          link: 'https://github.com/fossasia/knittingpattern'
        }
      ]
    },
    {
      icon: <Briefcase size={24} />,
      title: "9. Business & Product",
      description: "Some companies use GitHub for more than code. They post public product roadmaps, project management templates, and standard operating procedures.",
      examples: [
        {
          title: 'GitHub\'s Own Public Roadmap',
          desc: 'GitHub uses its own platform to host its public product roadmap, making it a key example of transparent product management.',
          link: 'https://github.com/github/roadmap'
        },
        {
          title: 'GDI Standard Operating Procedures',
          desc: 'A project showing how to use GitHub to manage, version, and collaborate on Standard Operating Procedures (SOPs) for compliance.',
          link: 'https://github.com/GenomicDataInfrastructure/standard-operating-procedures'
        }
      ]
    },
    {
      icon: <FileText size={24} />,
      title: "10. Research & Academia",
      description: "Researchers and academics use GitHub to share the code and data from their published papers, allowing for reproducible research.",
      examples: [
        {
          title: 'Free Law Project',
          desc: 'A comprehensive open-source infrastructure for legal research, providing free access to millions of court opinions and legal data.',
          link: 'https://github.com/freelawproject'
        },
        {
          title: 'ReScience Journal',
          desc: 'A peer-reviewed journal that exists entirely on GitHub to publish replications of computational research. Submissions are pull requests.',
          link: 'https://github.com/ReScience/ReScience'
        }
      ]
    }
  ];

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
                Part 10: What Else Lives on GitHub? (Beyond AI)
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8 leading-relaxed">
                While you're focused on AI projects, it's helpful to know what else people share on GitHub. Understanding the broader ecosystem helps you position your AI work and discover new ideas. Here are the 10 most common categories you'll find.
            </p>
            
            <div className="pt-8 border-t border-neutral-cool/20 space-y-16">
                {categories.map((cat, idx) => (
                    <div key={idx} className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                                    {cat.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">{cat.title}</h3>
                            </div>
                            <p className="text-lg text-neutral-slate dark:text-neutral-cool leading-relaxed">
                                {cat.description}
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-base text-neutral-charcoal dark:text-white mb-4">Examples to Explore:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {cat.examples.map((example, i) => (
                                    <a 
                                        key={i} 
                                        href={example.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block group bg-neutral-offWhite dark:bg-white/5 border border-neutral-cool/20 rounded-xl p-6 hover:shadow-sls-sm hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h5 className="font-bold text-lg text-cardinal dark:text-electric group-hover:underline">{example.title}</h5>
                                            <ExternalLink size={16} className="text-neutral-slate dark:text-neutral-cool opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <p className="text-sm text-neutral-slate dark:text-neutral-cool leading-relaxed">
                                            {example.desc}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Context Section */}
            <div className="mt-16 pt-12 border-t border-neutral-cool/20 space-y-12">
                <div>
                    <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-4">How This Relates to Your AI Work</h3>
                    <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-4">
                        As you can see, your AI repositories fit into several of these categories:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-neutral-slate dark:text-neutral-cool marker:text-cardinal dark:marker:text-electric">
                        <li><strong>Learning Resources</strong> (your certification documentation)</li>
                        <li><strong>Documentation & Writing</strong> (prompt libraries, tool reviews)</li>
                        <li><strong>Data Science & Analysis</strong> (AI experiments, testing models)</li>
                        <li><strong>Personal Projects</strong> (custom GPTs, AI workflows)</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-4">Inspiration from Other Fields</h3>
                    <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-4">
                        Understanding these categories helps you find inspiration:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-neutral-slate dark:text-neutral-cool marker:text-cardinal dark:marker:text-electric">
                        <li><strong>From Software Developers:</strong> Learn how they write clear installation and troubleshooting guides.</li>
                        <li><strong>From Designers:</strong> See in how they present visual portfolios with beautiful READMEs.</li>
                        <li><strong>From Data Scientists:</strong> Adopt their approach to documenting experiments and results.</li>
                        <li><strong>From Educators:</strong> Use their structured learning paths and progressive difficulty.</li>
                    </ul>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-neutral-cool/20 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 gap-6">
                <div className="flex-grow">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-slate dark:text-neutral-cool mb-1">Next Up</p>
                    <p className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2">Part 11: Best Practices for Your GitHub Portfolio</p>
                    <p className="text-base text-neutral-slate dark:text-neutral-cool max-w-xl">
                        Let's review the "golden rules" for making your portfolio look professional, from writing style to commit messages.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/github/part-11" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white bg-cardinal hover:bg-cardinal-dark transition-colors shadow-sls-md hover:shadow-sls-lg transform hover:-translate-y-0.5"
                    >
                        Go to Part 11 <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </section>
    </div>
  );
};

export default GithubPortfolioPart10;