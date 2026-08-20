import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { PowerBIDashboardShowcase } from './components/PowerBIDashboardShowcase';
import { AgileSprintSimulator } from './components/AgileSprintSimulator';
import { SkillsMatrix } from './components/SkillsMatrix';
import { CertificationsAndAwards } from './components/CertificationsAndAwards';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { FileText, Send, Sun, Moon } from 'lucide-react';

function PortfolioApp() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen dark:bg-slate-950 bg-slate-50 dark:text-slate-100 text-slate-800 font-sans selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200 transition-colors duration-300">
      {/* Sticky Top Navbar */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section with Portrait & Key Stats */}
        <HeroSection 
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={scrollToContact}
        />

        {/* 2. Executive Profile Summary & Core Competencies */}
        <ExecutiveSummary />

        {/* 3. Career Timeline & 7+ Years Experience */}
        <ExperienceTimeline />

        {/* 4. Interactive Power BI & Analytics Showroom */}
        <PowerBIDashboardShowcase />

        {/* 5. Interactive Agile Sprint Simulator & Playbook */}
        <AgileSprintSimulator />

        {/* 6. Technical & Leadership Skills Matrix */}
        <SkillsMatrix />

        {/* 7. Certifications & Enterprise Awards */}
        <CertificationsAndAwards />

        {/* 8. Direct Contact & Recruiter AI Assistant */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Full Screen Printable Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Quick Action Widget for Mobile */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 sm:hidden">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full dark:bg-slate-900 bg-white border dark:border-slate-700 border-slate-300 dark:text-amber-400 text-slate-800 shadow-xl flex items-center justify-center active:scale-95"
          aria-label="Toggle Theme"
          title="Toggle Light/Dark Theme"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-indigo-600" />}
        </button>
        <button
          onClick={() => setIsResumeOpen(true)}
          className="p-3 rounded-full dark:bg-slate-900 bg-white border dark:border-slate-700 border-slate-300 text-cyan-600 dark:text-cyan-400 shadow-xl flex items-center justify-center active:scale-95"
          aria-label="Open Resume"
          title="Open Resume"
        >
          <FileText className="w-5 h-5" />
        </button>
        <button
          onClick={scrollToContact}
          className="p-3 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-slate-950 shadow-xl shadow-cyan-500/30 flex items-center justify-center font-bold active:scale-95"
          aria-label="Contact Sai Mahanth"
          title="Contact"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
