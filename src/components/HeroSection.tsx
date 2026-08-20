import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  FileText, 
  ArrowRight, 
  BarChart2, 
  Layers, 
  Database,
  Award
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenContact }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern bg-radial-gradient transition-colors duration-300"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio, Quick Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-slate-900/90 bg-white/90 border dark:border-cyan-500/30 border-cyan-500/40 text-xs font-medium dark:text-slate-200 text-slate-800 shadow-sm backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="dark:text-cyan-300 text-cyan-700 font-semibold">Available for Opportunities</span>
              <span className="text-slate-400">•</span>
              <span className="dark:text-slate-400 text-slate-600">Bangalore / Hyderabad / Hybrid</span>
            </div>

            {/* Main Header */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold dark:text-white text-slate-900 tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-300">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-heading font-medium dark:text-cyan-300/90 text-cyan-800 flex flex-wrap items-center gap-2">
                <span>{personalInfo.title}</span>
                <span className="hidden sm:inline text-slate-400 dark:text-slate-600">|</span>
                <span className="dark:text-slate-400 text-slate-600 text-lg font-normal">7+ Yrs Enterprise IT</span>
              </p>
            </div>

            {/* Subtitle / Value Hook */}
            <p className="text-base sm:text-lg dark:text-slate-300 text-slate-700 leading-relaxed max-w-2xl font-normal">
              Empowering high-performing engineering teams at <span className="dark:text-white text-slate-950 font-semibold">HARMAN Connected Services (SAMSUNG)</span>. 
              Bridging the gap between <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Agile Scrum Leadership</span>, 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> Power BI Business Intelligence</span>, and 
              <span className="text-indigo-600 dark:text-indigo-300 font-semibold"> Cloud Data Warehouse & Talend ETL Architecture</span>.
            </p>

            {/* Quick Contact & Info Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <button
                id="hero-copy-email-btn"
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg dark:bg-slate-900/80 bg-white hover:bg-slate-100 dark:hover:bg-slate-800 border dark:border-slate-800 border-slate-200 text-xs font-medium dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-950 hover:border-slate-300 dark:hover:border-slate-700 transition-all group shadow-sm"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-500 group-hover:scale-110 transition-transform" />
                <span>{personalInfo.email}</span>
                {copiedField === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 ml-1 opacity-60" />
                )}
              </button>

              <button
                id="hero-copy-phone-btn"
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg dark:bg-slate-900/80 bg-white hover:bg-slate-100 dark:hover:bg-slate-800 border dark:border-slate-800 border-slate-200 text-xs font-medium dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-950 hover:border-slate-300 dark:hover:border-slate-700 transition-all group shadow-sm"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-500 group-hover:scale-110 transition-transform" />
                <span>{personalInfo.phone}</span>
                {copiedField === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 ml-1 opacity-60" />
                )}
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg dark:bg-slate-900/60 bg-white/80 border dark:border-slate-800 border-slate-200 text-xs font-medium dark:text-slate-400 text-slate-600 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{personalInfo.location.split(',')[0]}, India</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-view-experience-btn"
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-heading font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 active:scale-95"
              >
                <span>Explore Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-view-resume-modal-btn"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl dark:bg-slate-900 bg-white hover:bg-slate-50 dark:hover:bg-slate-800 dark:text-slate-200 text-slate-800 font-semibold text-sm border dark:border-slate-700/80 border-slate-300 transition-all hover:border-slate-400 dark:hover:border-slate-600 active:scale-95 shadow-sm"
              >
                <FileText className="w-4 h-4 text-cyan-500" />
                <span>Resume & Qualifications</span>
              </button>

              <a
                id="hero-try-ai-lab-btn"
                href="#ai-lab"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl dark:bg-slate-900/80 bg-cyan-50 hover:bg-cyan-100 dark:hover:bg-slate-800 dark:text-cyan-300 text-cyan-800 font-semibold text-xs border dark:border-cyan-500/40 border-cyan-300 transition-all active:scale-95 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400 animate-pulse" />
                <span>Explore AI Lab</span>
              </a>

              <a
                id="hero-try-simulator-btn"
                href="#simulator"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl dark:bg-slate-900/60 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 dark:text-slate-300 text-slate-700 font-semibold text-xs border dark:border-slate-800 border-slate-200 transition-all active:scale-95 shadow-sm"
              >
                <Layers className="w-4 h-4 text-slate-500" />
                <span>Agile Sandbox</span>
              </a>
            </div>

            {/* Certifications highlights ribbon */}
            <div className="pt-4 border-t dark:border-slate-800/80 border-slate-200 flex flex-wrap items-center gap-3 text-xs dark:text-slate-400 text-slate-600">
              <span className="font-semibold dark:text-slate-400 text-slate-700">Core Credentials:</span>
              <span className="inline-flex items-center gap-1.5 dark:bg-slate-900 bg-white px-2.5 py-1 rounded-md border dark:border-slate-800 border-slate-200 dark:text-slate-300 text-slate-700 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" /> Certified Scrum Master (Scrum.org)
              </span>
              <span className="inline-flex items-center gap-1.5 dark:bg-slate-900 bg-white px-2.5 py-1 rounded-md border dark:border-cyan-500/30 border-cyan-200 dark:text-cyan-300 text-cyan-800 shadow-sm font-medium">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" /> Be10x GenAI Specialist (13+ Tools)
              </span>
              <span className="inline-flex items-center gap-1.5 dark:bg-slate-900 bg-white px-2.5 py-1 rounded-md border dark:border-slate-800 border-slate-200 dark:text-slate-300 text-slate-700 shadow-sm">
                <BarChart2 className="w-3.5 h-3.5 text-blue-500" /> Power BI & DAX Specialist
              </span>
              <span className="inline-flex items-center gap-1.5 dark:bg-slate-900 bg-white px-2.5 py-1 rounded-md border dark:border-slate-800 border-slate-200 dark:text-slate-300 text-slate-700 shadow-sm">
                <Database className="w-3.5 h-3.5 text-amber-500" /> AWS Data Engineering
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Decorative background aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl transform -rotate-3 scale-95" />

              {/* Main Photo Card */}
              <div className="relative rounded-3xl dark:bg-slate-900 bg-white p-3.5 border dark:border-slate-700/70 border-slate-200 shadow-2xl dark:shadow-cyan-950/40 shadow-slate-300/60">
                
                {/* Photo container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950 group shadow-inner">
                  <img
                    src={personalInfo.photoUrl}
                    alt="Sai Mahanth Mada - Scrum Master & Senior Software Developer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

                  {/* On-photo badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-lg text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-sm font-heading font-bold text-white">Sai Mahanth Mada</h2>
                        <p className="text-xs text-cyan-400 font-medium">Scrum Master @ HARMAN (SAMSUNG)</p>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-semibold bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-md border border-cyan-500/30">
                        <Award className="w-3 h-3 text-cyan-400" />
                        <span>3x Awardee</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Achievement Badges */}
                <div className="absolute -top-4 -left-4 dark:bg-slate-900/95 bg-white/95 backdrop-blur-md border dark:border-cyan-500/40 border-cyan-500/30 px-3 py-2 rounded-xl shadow-xl flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider dark:text-slate-400 text-slate-500">Agile Metric</p>
                    <p className="text-xs font-bold dark:text-white text-slate-900">98% On-Time Sprints</p>
                  </div>
                </div>

                <div className="absolute -bottom-3 -right-3 dark:bg-slate-900/95 bg-white/95 backdrop-blur-md border dark:border-blue-500/40 border-blue-500/30 px-3 py-2 rounded-xl shadow-xl flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-600 dark:text-blue-400">
                    <BarChart2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider dark:text-slate-400 text-slate-500">Business Intel</p>
                    <p className="text-xs font-bold dark:text-white text-slate-900">60+ Power BI Dashboards</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Key Metrics Strip */}
        <div className="mt-16 pt-8 border-t dark:border-slate-800/80 border-slate-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {personalInfo.keyMetrics.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl dark:bg-slate-900/60 bg-white border dark:border-slate-800/80 border-slate-200 hover:border-cyan-500/40 transition-all text-center group shadow-sm"
              >
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-cyan-600 dark:from-white dark:via-slate-100 dark:to-cyan-400 group-hover:scale-105 transition-transform">
                  {item.value}
                </div>
                <div className="text-xs font-medium dark:text-slate-400 text-slate-600 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
