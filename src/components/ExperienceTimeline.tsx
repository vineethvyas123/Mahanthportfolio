import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Award, 
  CheckCircle2, 
  Briefcase, 
  Sparkles,
  TrendingUp,
  Layers,
  ChevronDown
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>(experiences[0].id);

  return (
    <section id="experience" className="py-20 dark:bg-slate-950 bg-slate-50 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-cyan-500/10 bg-cyan-100 dark:text-cyan-400 text-cyan-800 border dark:border-cyan-500/20 border-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>7+ Years Professional Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold dark:text-white text-slate-900">
            Work Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">Enterprise Milestones</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-base sm:text-lg">
            High-impact leadership at HARMAN (SAMSUNG), Mphasis (Charles Schwab), and Business Technology Solutions.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const isSelected = activeExpId === exp.id;
            return (
              <div 
                key={exp.id}
                id={`experience-card-${exp.id}`}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden shadow-lg ${
                  isSelected 
                    ? 'dark:bg-slate-900 bg-white dark:border-cyan-500/50 border-cyan-500/40 ring-1 dark:ring-cyan-500/30 ring-cyan-500/20 shadow-cyan-950/10' 
                    : 'dark:bg-slate-900/60 bg-white/80 dark:border-slate-800 border-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Card Header Bar */}
                <div 
                  onClick={() => setActiveExpId(isSelected ? '' : exp.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b dark:border-slate-800/80 border-slate-100 select-none"
                >
                  <div className="flex items-start gap-4">
                    {/* Number Badge */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white font-heading font-extrabold text-lg shrink-0 shadow-md shadow-cyan-500/20">
                      0{index + 1}
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-heading font-bold dark:text-white text-slate-900">
                          {exp.role}
                        </h3>
                        {exp.awardWon && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold dark:bg-amber-500/10 bg-amber-50 dark:text-amber-300 text-amber-800 border dark:border-amber-500/30 border-amber-300 shadow-sm">
                            <Award className="w-3.5 h-3.5 text-amber-500" />
                            <span>{exp.awardWon}</span>
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs dark:text-slate-300 text-slate-600">
                        <span className="font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5" />
                          {exp.company} {exp.parentCompany && `(${exp.parentCompany})`}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 dark:text-slate-400 text-slate-500">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                        <span>•</span>
                        <span className="dark:text-slate-300 text-slate-700 font-medium">
                          Client: <strong className="dark:text-white text-slate-900">{exp.client}</strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between lg:justify-end gap-4">
                    <div className="text-left lg:text-right">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full dark:bg-slate-800 bg-slate-100 dark:text-cyan-300 text-cyan-800 border dark:border-slate-700 border-slate-200 text-xs font-mono font-medium shadow-sm">
                        <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="p-2 rounded-xl dark:bg-slate-800 bg-slate-100 text-slate-400">
                      {isSelected ? <ChevronDown className="w-5 h-5 text-cyan-500" /> : <ChevronRight className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <div className={`p-6 sm:p-8 space-y-8 ${isSelected ? 'block' : 'hidden sm:block'}`}>
                  
                  {/* Project Overview Box */}
                  <div className="p-4 rounded-2xl dark:bg-slate-950/70 bg-slate-50 border dark:border-slate-800 border-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1">
                      Project Scope & Environment
                    </p>
                    <p className="text-sm dark:text-slate-200 text-slate-800 font-medium">
                      {exp.project}
                    </p>
                  </div>

                  {/* Quantified Impact Metrics */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500 mb-3 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-cyan-500" />
                      <span>Key Business Results & Quantified Impact</span>
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {exp.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-3.5 rounded-xl dark:bg-slate-950/90 bg-white border dark:border-slate-800 border-slate-200 shadow-sm">
                          <div className="text-lg sm:text-xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">
                            {m.value}
                          </div>
                          <div className="text-xs dark:text-slate-400 text-slate-600 mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                      <span>Detailed Responsibilities & Deliverables</span>
                    </h4>
                    <div className="space-y-2.5">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t dark:border-slate-800/80 border-slate-200">
                    <p className="text-xs font-semibold dark:text-slate-400 text-slate-500 mb-2">Technologies & Frameworks Utilized:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-3 py-1 rounded-lg text-xs font-medium dark:bg-slate-950 bg-slate-100 dark:text-cyan-300 text-cyan-800 border dark:border-slate-800 border-slate-200 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
