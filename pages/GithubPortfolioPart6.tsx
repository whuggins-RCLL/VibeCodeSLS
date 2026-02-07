import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Copy, Check, Upload, Image, FolderTree, FileText, AlertCircle } from 'lucide-react';

const GithubPortfolioPart6: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const folderStructure = `your-repository/
├── README.md
├── LICENSE
├── images/
│   ├── screenshot-custom-gpt.png
│   ├── certificate-prompt-engineering.pdf
│   └── profile-photo.jpg
│
└── courses/
    └── README.md`;

  const imageMarkdown = `## My Custom GPT in Action

![Screenshot of my legal research GPT](images/screenshot-custom-gpt.png)`;

  const fileLinkMarkdown = `## My Certification

You can view my prompt engineering certificate [here](images/certificate-prompt-engineering.pdf).`;

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
                Part 6: Adding Files to Your Repository
            </h2>

            <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8 leading-relaxed">
                You're not limited to just text! You can add screenshots, PDFs, images, and other files to showcase your work visually.
            </p>
            
            <div className="pt-8 border-t border-neutral-cool/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* COLUMN 1: Uploading */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                             <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                                <Upload size={24} />
                             </div>
                             <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Uploading Files</h3>
                        </div>
                        
                        <ol className="list-decimal list-inside space-y-4 text-neutral-slate dark:text-neutral-cool text-lg marker:font-bold marker:text-cardinal dark:marker:text-electric">
                            <li>Navigate to the folder where you want to add files (e.g., inside your <code className="font-mono text-base bg-neutral-offWhite dark:bg-white/10 px-1 rounded text-cardinal dark:text-electric">my-custom-gpts</code> repository).</li>
                            <li>Click the "Add file" button (near the top right) and select "Upload files" from the dropdown.</li>
                            <li>You can now drag and drop your files directly onto the page or click "choose your files" to open a file browser.</li>
                            <li>Once your files are uploaded, scroll to the bottom and add a clear commit message, like "Added course certificate and project screenshots."</li>
                            <li>Click the green "Commit changes" button to save your files to the repository.</li>
                        </ol>
                    </div>

                    {/* COLUMN 2: Organizing */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                             <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                                <FolderTree size={24} />
                             </div>
                             <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Organizing Media Files</h3>
                        </div>

                        <p className="text-neutral-slate dark:text-neutral-cool text-lg">
                            It's a best practice to create a dedicated folder (like <code className="font-mono text-base bg-neutral-offWhite dark:bg-white/10 px-1 rounded">images/</code> or <code className="font-mono text-base bg-neutral-offWhite dark:bg-white/10 px-1 rounded">assets/</code>) to keep your media files organized and separate from your main README.
                        </p>
                        
                        <div className="relative group">
                            <div className="absolute top-3 right-3 z-10">
                                <button 
                                    onClick={() => handleCopy(folderStructure, 'structure')}
                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors backdrop-blur-sm"
                                >
                                    {copied === 'structure' ? <Check size={14} className="text-functional-success" /> : <Copy size={14} />}
                                    {copied === 'structure' ? 'Copied' : 'Copy'}
                                </button>
                            </div>
                            <pre className="bg-[#1a1a1a] text-neutral-offWhite p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-neutral-cool/20">
                                {folderStructure}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Linking Images Section */}
                <div className="mt-16 pt-12 border-t border-neutral-cool/20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-cardinal/10 rounded-lg text-cardinal dark:text-electric">
                            <Image size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-white">Linking to Images in Your README</h3>
                    </div>
                    
                    <p className="text-lg text-neutral-slate dark:text-neutral-cool mb-8">
                        Once you've uploaded your files, you can display them directly in your <code className="font-mono text-base bg-neutral-offWhite dark:bg-white/10 px-1 rounded text-cardinal dark:text-electric">README.md</code> file using Markdown syntax. Edit your README (click the pencil icon) and add links like this:
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <h4 className="font-bold text-neutral-charcoal dark:text-white flex items-center gap-2">
                                <Image size={18} className="text-cardinal dark:text-electric" /> To display an image:
                            </h4>
                            <div className="relative group">
                                <div className="absolute top-3 right-3 z-10">
                                    <button 
                                        onClick={() => handleCopy(imageMarkdown, 'img')}
                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors backdrop-blur-sm"
                                    >
                                        {copied === 'img' ? <Check size={14} className="text-functional-success" /> : <Copy size={14} />}
                                        {copied === 'img' ? 'Copied' : 'Copy'}
                                    </button>
                                </div>
                                <pre className="bg-[#1a1a1a] text-neutral-offWhite p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-neutral-cool/20">
                                    {imageMarkdown}
                                </pre>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-bold text-neutral-charcoal dark:text-white flex items-center gap-2">
                                <FileText size={18} className="text-cardinal dark:text-electric" /> To link to a file (like a PDF):
                            </h4>
                            <div className="relative group">
                                <div className="absolute top-3 right-3 z-10">
                                    <button 
                                        onClick={() => handleCopy(fileLinkMarkdown, 'file')}
                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors backdrop-blur-sm"
                                    >
                                        {copied === 'file' ? <Check size={14} className="text-functional-success" /> : <Copy size={14} />}
                                        {copied === 'file' ? 'Copied' : 'Copy'}
                                    </button>
                                </div>
                                <pre className="bg-[#1a1a1a] text-neutral-offWhite p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-neutral-cool/20">
                                    {fileLinkMarkdown}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* File Size Limits */}
                <div className="mt-12 bg-neutral-offWhite dark:bg-white/5 border border-neutral-cool/20 rounded-xl p-6">
                    <h4 className="font-bold text-lg text-neutral-charcoal dark:text-white mb-4 flex items-center gap-2">
                        <AlertCircle size={20} className="text-warmGold" />
                        A Note on File Size Limits
                    </h4>
                    <p className="text-neutral-slate dark:text-neutral-cool mb-4">GitHub has a soft limit of 100MB per file. For larger files, it's better to:</p>
                    <ul className="list-disc list-inside space-y-2 text-neutral-slate dark:text-neutral-cool ml-4">
                        <li>Compress images before uploading using a tool like <a href="https://tinypng.com/" target="_blank" rel="noopener noreferrer" className="text-cardinal dark:text-electric font-semibold hover:underline">TinyPNG</a>.</li>
                        <li>Link to large files (like datasets or high-res videos) hosted elsewhere, such as Google Drive or Dropbox.</li>
                        <li>For video demos, upload them to YouTube or Vimeo and link to the video page.</li>
                    </ul>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-neutral-cool/20 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0 gap-6">
                <div className="flex-grow">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-slate dark:text-neutral-cool mb-1">Next Up</p>
                    <p className="text-2xl font-bold text-neutral-charcoal dark:text-white mb-2">Part 7: Adding Professional Links</p>
                    <p className="text-base text-neutral-slate dark:text-neutral-cool max-w-xl">
                        Connect your portfolio by adding your LinkedIn, CV, and other professional links.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/github/part-7" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white bg-cardinal hover:bg-cardinal-dark transition-colors shadow-sls-md hover:shadow-sls-lg transform hover:-translate-y-0.5"
                    >
                        Go to Part 7 <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </section>
    </div>
  );
};

export default GithubPortfolioPart6;