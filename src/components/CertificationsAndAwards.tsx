import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink, 
  Building2, 
  Calendar,
  CheckCircle2,
  Trophy,
  Medal,
  Star
} from 'lucide-react';
import { certifications, awards } from '../data/portfolioData';

export const CertificationsAndAwards: React.FC = () => {
  return (
    <section id="awards" className="py-20 dark:bg-slate-950 bg-slate-50 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-amber-500/10 bg-amber-100 dark:text-amber-400 text-amber-800 border dark:border-amber-500/20 border-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Enterprise Honors & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold dark:text-white text-slate-900">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-cyan-600 dark:from-amber-400 dark:to-cyan-400">Awards</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-base sm:text-lg">
            Certified by Scrum.org and Amazon Web Services, with multiple enterprise excellence awards from SAMSUNG / HARMAN and Mphasis.
          </p>
        </div>

        {/* 1. Enterprise Awards Showcase */}
        <div className="mb-16 space-y-6">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider dark:text-white text-slate-900">
            <Medal className="w-4 h-4 text-amber-500" />
            <span>Enterprise Recognition & Honors (3 Awards)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={award.id}
                className="p-6 rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:border-amber-500/50 transition-all duration-300"
              >
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl dark:bg-amber-500/10 bg-amber-50 dark:text-amber-400 text-amber-700 border dark:border-amber-500/20 border-amber-200 shadow-sm group-hover:scale-105 transition-transform">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold dark:text-amber-400 text-amber-700 dark:bg-slate-950 bg-amber-50/80 px-2.5 py-1 rounded-md border dark:border-slate-800 border-amber-200">
                      {award.organization}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold dark:text-white text-slate-900 mb-2">
                    {award.title}
                  </h3>
                  <p className="text-xs dark:text-slate-300 text-slate-600 leading-relaxed mb-4">
                    {award.description}
                  </p>
                </div>

                <div className="pt-3 border-t dark:border-slate-800/80 border-slate-100 flex items-center justify-between text-xs dark:text-slate-400 text-slate-500">
                  <span className="font-medium text-cyan-600 dark:text-cyan-400">{award.project}</span>
                  <span className="flex items-center gap-1 font-semibold text-amber-600 dark:text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" /> Honored
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Official Certifications Showcase */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider dark:text-white text-slate-900">
            <ShieldCheck className="w-4 h-4 text-cyan-500" />
            <span>Official Industry Certifications</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-3xl dark:bg-slate-900/70 bg-white border dark:border-slate-800 border-slate-200 shadow-lg flex flex-col justify-between hover:border-cyan-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full dark:bg-cyan-500/10 bg-cyan-50 dark:text-cyan-400 text-cyan-800 border dark:border-cyan-500/20 border-cyan-200">
                      {cert.issuer}
                    </span>
                    <span className="text-xs dark:text-slate-400 text-slate-500 font-mono">
                      {cert.credentialId}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base dark:text-white text-slate-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-xs dark:text-slate-300 text-slate-600 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t dark:border-slate-800/80 border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Credential
                  </span>
                  <span className="dark:text-slate-400 text-slate-500 font-mono">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
