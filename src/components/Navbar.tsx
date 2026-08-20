import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Send, 
  Menu, 
  X, 
  CheckCircle2, 
  Award, 
  Briefcase, 
  BarChart3, 
  Cpu, 
  Phone,
  Sun,
  Moon
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Calculate scroll progress percentage (0 to 100)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      } else {
        setScrollProgress(0);
      }

      const sections = ['hero', 'summary', 'experience', 'powerbi', 'simulator', 'skills', 'awards', 'contact'];
      const scrollPosition = window.scrollY + 130;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#summary', icon: Cpu },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: CheckCircle2 },
    { name: 'Power BI Hub', href: '#powerbi', icon: BarChart3 },
    { name: 'Agile Simulator', href: '#simulator', icon: Cpu },
    { name: 'Awards & Certs', href: '#awards', icon: Award },
  ];

  return (
    <>
      {/* Subtle Horizontal Reading Progress Bar at the very top */}
      <div 
        id="reading-progress-bar-container"
        className="fixed top-0 left-0 right-0 h-[3.5px] z-[60] bg-transparent pointer-events-none"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div 
          id="reading-progress-bar-fill"
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-[width] duration-100 ease-out shadow-[0_0_10px_rgba(6,182,212,0.7)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header 
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'dark:bg-slate-950/85 bg-white/85 backdrop-blur-md border-b dark:border-slate-800/80 border-slate-200/80 py-3 shadow-xl dark:shadow-cyan-950/10 shadow-slate-200/50' 
            : 'bg-transparent py-5'
        }`}
      >
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-14 w-full">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Tag */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white font-heading font-extrabold text-lg shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              SM
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 dark:border-slate-950 border-white" title="Available for roles"></span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-base sm:text-lg dark:text-white text-slate-900 group-hover:text-cyan-500 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium dark:bg-cyan-500/10 bg-cyan-50 dark:text-cyan-400 text-cyan-700 border dark:border-cyan-500/20 border-cyan-200">
                  CSM &bull; 7+ Yrs Exp
                </span>
              </div>
              <p className="text-xs dark:text-slate-400 text-slate-500 hidden sm:block">
                Scrum Master &bull; Senior Software & BI Developer
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 dark:bg-slate-900/60 bg-slate-100/80 p-1.5 rounded-full border dark:border-slate-800/80 border-slate-200/80 backdrop-blur-sm shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'dark:bg-cyan-500/20 bg-cyan-500 text-cyan-900 dark:text-cyan-300 font-bold dark:border border-cyan-500/30 shadow-sm'
                      : 'dark:text-slate-300 text-slate-600 hover:text-cyan-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Theme Switcher */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-desktop"
              onClick={toggleTheme}
              className="p-2 rounded-xl dark:bg-slate-900 bg-slate-100 dark:text-amber-400 text-slate-700 border dark:border-slate-800 border-slate-200 hover:scale-105 active:scale-95 transition-all shadow-sm flex items-center justify-center group"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 group-hover:rotate-45 transition-transform text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 group-hover:-rotate-12 transition-transform text-indigo-600" />
              )}
            </button>

            <button
              id="navbar-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold dark:bg-slate-800/90 bg-white hover:bg-slate-100 dark:hover:bg-slate-700/90 dark:text-slate-200 text-slate-700 border dark:border-slate-700/80 border-slate-200 transition-all hover:border-slate-300 dark:hover:border-slate-600 active:scale-95 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-500" />
              <span>Resume</span>
            </button>

            <button
              id="navbar-contact-btn"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Theme Toggle Button */}
            <button
              id="theme-toggle-mobile"
              onClick={toggleTheme}
              className="p-2 rounded-lg dark:bg-slate-900 bg-slate-100 dark:text-amber-400 text-slate-700 border dark:border-slate-800 border-slate-200 transition-all shadow-sm"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              id="mobile-contact-icon-btn"
              onClick={onOpenContact}
              aria-label="Quick contact"
              className="p-2 rounded-lg dark:bg-slate-800 bg-cyan-50 text-cyan-600 dark:text-cyan-400 border dark:border-slate-700 border-cyan-200"
            >
              <Phone className="w-4 h-4" />
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg dark:bg-slate-900 bg-white dark:text-slate-300 text-slate-700 hover:text-cyan-500 border dark:border-slate-800 border-slate-200 focus:outline-none shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden dark:bg-slate-950/95 bg-white/98 border-b dark:border-slate-800 border-slate-200 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl mt-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
          
          <div className="flex items-center justify-between px-1 pb-2 border-b dark:border-slate-800 border-slate-100">
            <span className="text-xs font-semibold dark:text-slate-400 text-slate-500">Appearance Mode</span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg dark:bg-slate-900 bg-slate-100 border dark:border-slate-800 border-slate-200 text-xs font-medium dark:text-slate-200 text-slate-700"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-medium dark:text-slate-200 text-slate-700 hover:text-cyan-500 dark:hover:text-cyan-400 dark:hover:bg-slate-900 hover:bg-slate-100 border dark:border-slate-800/60 border-slate-200"
              >
                <link.icon className="w-3.5 h-3.5 text-cyan-500" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t dark:border-slate-800/80 border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold dark:bg-slate-800 bg-slate-100 dark:text-slate-200 text-slate-800 border dark:border-slate-700 border-slate-300 shadow-sm"
            >
              <FileText className="w-4 h-4 text-cyan-500" />
              <span>View & Download Full Resume</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Contact Mahanth Directly</span>
            </button>
          </div>
        </div>
      )}
    </header>
    </>
  );
};
