import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, GraduationCap, LayoutDashboard, Code, ExternalLink, Library } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', path: '/', icon: <LayoutDashboard size={18} /> },
    { label: 'APIs', path: '/apis', icon: <Code size={18} /> },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-pureWhite dark:bg-neutral-darkBg text-neutral-charcoal dark:text-neutral-offWhite transition-colors duration-300">
      
      {/* Top Navigation Bar */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
          scrolled || isMobileMenuOpen
            ? 'bg-white/90 dark:bg-neutral-darkBg/90 backdrop-blur-xl border-neutral-cool/20 shadow-sls-sm' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-gradient-to-br from-cardinal to-cardinal-dark text-white rounded-lg shadow-sls-sm group-hover:scale-105 transition-transform duration-200">
              <GraduationCap size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight leading-none text-neutral-charcoal dark:text-white">Vibe Code</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-cardinal dark:text-electric mt-1">Stanford Law</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group flex items-center gap-2 ${
                  isActive(item.path)
                    ? 'text-cardinal dark:text-electric bg-cardinal/5 dark:bg-electric/10'
                    : 'text-neutral-slate dark:text-neutral-cool hover:text-cardinal dark:hover:text-electric hover:bg-neutral-offWhite dark:hover:bg-neutral-cool/5'
                }`}
              >
                {item.icon}
                {item.label}
                {/* Active Indicator Dot */}
                {isActive(item.path) && (
                  <span className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-cardinal dark:bg-electric"></span>
                )}
              </Link>
            ))}
            
            {/* AI Learning Hub External Link */}
            <a
              href="https://sites.google.com/law.stanford.edu/ailearninghub/home"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group flex items-center gap-2 text-neutral-slate dark:text-neutral-cool hover:text-cardinal dark:hover:text-electric hover:bg-neutral-offWhite dark:hover:bg-neutral-cool/5"
            >
              <ExternalLink size={18} />
              AI Learning Hub
            </a>

            {/* AI in the Library External Link */}
            <a
              href="https://ai-at-rcll.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group flex items-center gap-2 text-neutral-slate dark:text-neutral-cool hover:text-cardinal dark:hover:text-electric hover:bg-neutral-offWhite dark:hover:bg-neutral-cool/5"
            >
              <Library size={18} />
              AI in the Library
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-neutral-slate dark:text-neutral-cool hover:bg-neutral-offWhite dark:hover:bg-neutral-cool/10 transition-colors border border-transparent hover:border-neutral-cool/20"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Sun size={20} className="text-warmGold" /> : <Moon size={20} className="text-deepPurple" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg text-neutral-charcoal dark:text-white hover:bg-neutral-offWhite dark:hover:bg-neutral-cool/10 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-40 bg-white/95 dark:bg-neutral-darkBg/95 backdrop-blur-xl animate-fade-in border-t border-neutral-cool/10">
          <nav className="p-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-cardinal/10 text-cardinal dark:text-electric border border-cardinal/20'
                    : 'text-neutral-slate dark:text-neutral-cool hover:bg-neutral-offWhite dark:hover:bg-neutral-cool/5'
                }`}
              >
                <span className={isActive(item.path) ? 'text-cardinal dark:text-electric' : 'text-neutral-cool'}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            ))}
            
            {/* Mobile External Link - Learning Hub */}
            <a
              href="https://sites.google.com/law.stanford.edu/ailearninghub/home"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-medium transition-colors text-neutral-slate dark:text-neutral-cool hover:bg-neutral-offWhite dark:hover:bg-neutral-cool/5"
            >
              <span className="text-neutral-cool">
                <ExternalLink size={18} />
              </span>
              AI Learning Hub
            </a>

            {/* Mobile External Link - AI in the Library */}
            <a
              href="https://ai-at-rcll.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-medium transition-colors text-neutral-slate dark:text-neutral-cool hover:bg-neutral-offWhite dark:hover:bg-neutral-cool/5"
            >
              <span className="text-neutral-cool">
                <Library size={18} />
              </span>
              AI in the Library
            </a>
          </nav>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto p-4 md:p-8 lg:p-12 animate-fade-in">
        {children}
      </main>
      
      {/* Simple Footer */}
      <footer className="border-t border-neutral-cool/10 bg-neutral-offWhite/50 dark:bg-neutral-darkCard/30 mt-auto">
        <div className="max-w-[1400px] mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-slate/60 dark:text-neutral-cool/40">
           <p>© 2026 Stanford Law School. Vibe Code Initiative.</p>
           <div className="flex gap-6">
             <a href="#" className="hover:text-cardinal transition-colors">Accessibility</a>
             <a href="#" className="hover:text-cardinal transition-colors">Privacy</a>
             <a href="#" className="hover:text-cardinal transition-colors">SLS Home</a>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;