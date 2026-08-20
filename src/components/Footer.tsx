import React from 'react';
import { 
  Heart, 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  BarChart3, 
  Briefcase 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC<{ onOpenResume: () => void }> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="dark:bg-slate-950 bg-slate-900 border-t dark:border-slate-900 border-slate-800 pt-16 pb-12 text-slate-400 text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white font-heading font-extrabold text-base shadow-lg shadow-cyan-500/20">
                SM
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Scrum Master & Senior Software Developer with 7+ years of expertise in Power BI Analytics, Talend ETL Architecture, and Agile Project Orchestration.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-400">
              <span className="inline-flex items-center gap-1 dark:bg-slate-900 bg-slate-800/80 px-2.5 py-1 rounded-md border dark:border-slate-800 border-slate-700">
                <ShieldCheck className="w-3 h-3 text-cyan-400" /> Scrum.org CSM
              </span>
              <span className="inline-flex items-center gap-1 dark:bg-slate-900 bg-slate-800/80 px-2.5 py-1 rounded-md border dark:border-slate-800 border-slate-700">
                <BarChart3 className="w-3 h-3 text-blue-400" /> 60+ Power BI Dashboards
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#summary" className="hover:text-cyan-400 transition-colors">Executive Summary</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors">Career Timeline</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills Matrix</a>
              <a href="#powerbi" className="hover:text-cyan-400 transition-colors">Power BI Showroom</a>
              <a href="#simulator" className="hover:text-cyan-400 transition-colors">Agile Sandbox</a>
              <a href="#awards" className="hover:text-cyan-400 transition-colors">Honors & Certs</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Mahanth</a>
              <button onClick={onOpenResume} className="text-left text-cyan-400 hover:underline">
                View Resume
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">{personalInfo.email}</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <a href="https://wa.me/918121791352" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{personalInfo.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t dark:border-slate-900 border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Sai Mahanth Mada. All rights reserved.</p>
          
          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
