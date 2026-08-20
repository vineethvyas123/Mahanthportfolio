import React, { useState } from 'react';
import { 
  Users, 
  BarChart3, 
  Database, 
  Target, 
  Award, 
  Sparkles, 
  Search,
  BookOpen,
  Bot,
  Zap,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { personalInfo, coreCompetenciesList } from '../data/portfolioData';

export const ExecutiveSummary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const pillars = [
    {
      id: 'agile',
      icon: Users,
      badge: 'Agile & Leadership',
      title: 'Scrum Master & Team Facilitator',
      color: 'dark:from-cyan-500/20 dark:to-blue-500/20 from-cyan-50 to-blue-50 dark:border-cyan-500/30 border-cyan-200 text-cyan-600 dark:text-cyan-400',
      description: 'Orchestrating high-morale engineering teams through servant leadership, structured Scrum ceremonies, and advanced prioritization models (WSJF, MoSCoW, Kano).',
      points: [
        '98% on-time Sprint Goal adherence across cross-functional enterprise squads',
        'Mitigated retrospective fatigue via engaging, actionable continuous improvement frameworks',
        'Coached senior leadership and product owners on backlog refinement and value slicing',
        'Eliminated cross-team blockers and systemic delivery bottlenecks proactively'
      ]
    },
    {
      id: 'bi',
      icon: BarChart3,
      badge: 'Analytics & Visualization',
      title: 'Senior Power BI & DAX Specialist',
      color: 'dark:from-blue-500/20 dark:to-indigo-500/20 from-blue-50 to-indigo-50 dark:border-blue-500/30 border-blue-200 text-blue-600 dark:text-blue-400',
      description: 'Designing intuitive, high-performance Power BI dashboards that distill multi-million record datasets into clear executive actions and strategic business growth.',
      points: [
        'Built 60+ interactive Power BI dashboards boosting leadership decision speed by 23%',
        'Engineered complex DAX measures, time-intelligence, and ad-hoc forecasting models',
        'Reduced report response latency by 20% and slashed reporting errors by 15%',
        'Drove an 18% annual sales increase at Charles Schwab through strategic visual insights'
      ]
    },
    {
      id: 'etl',
      icon: Database,
      badge: 'Data Engineering & Cloud',
      title: 'Talend ETL & Cloud Warehouse Architect',
      color: 'dark:from-purple-500/20 dark:to-cyan-500/20 from-purple-50 to-cyan-50 dark:border-purple-500/30 border-purple-200 text-purple-600 dark:text-purple-400',
      description: 'Architecting resilient ETL pipelines, managing zero-downtime version upgrades, executing Big Data to Cloud migrations, and preserving audit-proof data integrity.',
      points: [
        'Orchestrated critical zero-downtime Talend upgrade from 7.3.1 to 8.0.1 at HARMAN',
        'Spearheaded Big Data Hive to Cloud Data Warehouse migrations with full data integrity',
        'Implemented comprehensive Slowly Changing Dimensions (SCD Types 1, 2, 3, 6)',
        'Administered Talend Administration Center (TAC) managing 150+ daily scheduled pipelines'
      ]
    }
  ];

  const filteredCompetencies = coreCompetenciesList.filter(comp => 
    comp.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="summary" className="py-20 dark:bg-slate-950/60 bg-slate-100/60 border-t dark:border-slate-900 border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-cyan-500/10 bg-cyan-100 dark:text-cyan-400 text-cyan-800 border dark:border-cyan-500/20 border-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Profile Summary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold dark:text-white text-slate-900">
            Transforming Complex Data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">High-Velocity Value</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-base sm:text-lg leading-relaxed">
            {personalInfo.about}
          </p>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`p-6 sm:p-7 rounded-2xl bg-gradient-to-b ${pillar.color} dark:bg-slate-900/80 bg-white border glass-card glass-card-hover flex flex-col justify-between shadow-sm`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 text-cyan-500 shadow-md">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md dark:bg-slate-900/90 bg-white border dark:border-slate-700 border-slate-200 dark:text-slate-300 text-slate-700 shadow-sm">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold dark:text-white text-slate-900 mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm dark:text-slate-300 text-slate-600 mb-5 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="space-y-2.5 border-t dark:border-slate-800/80 border-slate-200 pt-4">
                  {pillar.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs dark:text-slate-300 text-slate-700">
                      <Target className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Work & Generative AI Enablement Spotlight */}
        <div className="p-6 sm:p-8 rounded-3xl dark:bg-gradient-to-r dark:from-slate-900 dark:via-cyan-950/20 dark:to-slate-900 bg-gradient-to-r from-cyan-50/80 via-white to-blue-50/80 border dark:border-cyan-500/30 border-cyan-200 shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b dark:border-slate-800 border-cyan-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl dark:bg-cyan-500/10 bg-cyan-100 text-cyan-600 dark:text-cyan-400 border dark:border-cyan-500/20 border-cyan-300 shadow-sm">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full dark:bg-cyan-500/20 bg-cyan-200 dark:text-cyan-300 text-cyan-800 text-[10px] font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3 h-3" /> Intermediate AI Work & Applied GenAI
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold dark:text-white text-slate-900">
                    AI-Powered Agile Acceleration & Analytics Automation
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-700 border-cyan-200 dark:text-cyan-400 text-cyan-700 shadow-sm self-start sm:self-auto">
                Be10x Certified (13+ AI Tools)
              </span>
            </div>

            <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed max-w-4xl">
              Actively leveraging intermediate Generative AI practices, advanced prompt engineering, and LLM-assisted workflows to accelerate Scrum ceremonies, synthesize complex technical documentation, generate optimized DAX/SQL logic, and eliminate delivery bottlenecks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-2xl dark:bg-slate-950/80 bg-white border dark:border-slate-800 border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs">
                  <Zap className="w-4 h-4" />
                  <span>Agile Story Synthesis</span>
                </div>
                <p className="text-xs dark:text-slate-300 text-slate-600 leading-relaxed">
                  Automated drafting of INVEST user stories, edge-case acceptance criteria, and sprint risk logs via ChatGPT & Copilot—cutting story prep time by <strong>35%</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl dark:bg-slate-950/80 bg-white border dark:border-slate-800 border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs">
                  <BarChart3 className="w-4 h-4" />
                  <span>DAX & SQL Prototyping</span>
                </div>
                <p className="text-xs dark:text-slate-300 text-slate-600 leading-relaxed">
                  Utilizing prompt patterns to generate complex time-intelligence DAX measures and optimize relational SQL queries, reducing debugging turnaround by <strong>25%</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl dark:bg-slate-950/80 bg-white border dark:border-slate-800 border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs">
                  <Cpu className="w-4 h-4" />
                  <span>ETL Anomaly Diagnosis</span>
                </div>
                <p className="text-xs dark:text-slate-300 text-slate-600 leading-relaxed">
                  Applying AI assistance for fast Talend error log analysis, regex creation, and schema mapping validation, accelerating data pipeline resolution.
                </p>
              </div>

              <div className="p-4 rounded-2xl dark:bg-slate-950/80 bg-white border dark:border-slate-800 border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Productivity Automation</span>
                </div>
                <p className="text-xs dark:text-slate-300 text-slate-600 leading-relaxed">
                  Certified mastery in 13+ GenAI productivity tools for automated sprint release notes, presentation synthesis, and structured meeting summaries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Objective & Education Strip */}
        <div className="p-6 sm:p-8 rounded-3xl dark:bg-slate-900/90 bg-white border dark:border-slate-800 border-slate-200 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                <Target className="w-4 h-4" />
                <span>Career Vision & Philosophy</span>
              </div>
              <h3 className="text-xl font-heading font-bold dark:text-white text-slate-900">
                Servant Leadership &bull; Measurable Business Outcomes
              </h3>
              <p className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                "{personalInfo.careerObjective}"
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl dark:bg-slate-950/80 bg-slate-50 border dark:border-slate-800 border-slate-200 flex items-start gap-4 shadow-sm">
              <div className="p-2.5 rounded-xl dark:bg-cyan-500/10 bg-cyan-100 dark:text-cyan-400 text-cyan-800 border dark:border-cyan-500/20 border-cyan-200">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-xs dark:text-slate-400 text-slate-500 font-medium">Academic Foundation</p>
                <p className="text-sm font-bold dark:text-white text-slate-900">{personalInfo.education.degree}</p>
                <p className="text-xs dark:text-slate-300 text-slate-600">{personalInfo.education.institution}</p>
                <p className="text-[11px] text-cyan-600 dark:text-cyan-400 font-medium font-mono">Graduated {personalInfo.education.year}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Competencies Explorer */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-heading font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-500" />
                <span>Mastered Competencies ({coreCompetenciesList.length})</span>
              </h3>
              <p className="text-xs dark:text-slate-400 text-slate-500">
                Domain skills tested across 7+ years of enterprise production delivery
              </p>
            </div>

            {/* Competency Filter / Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="competency-search-input"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter competencies..."
                className="w-full pl-9 pr-3 py-1.5 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 text-xs dark:text-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 shadow-sm"
              />
            </div>
          </div>

          {/* Tags Cloud */}
          <div className="flex flex-wrap gap-2.5">
            {filteredCompetencies.map((comp, index) => (
              <span
                key={index}
                className="px-3.5 py-1.5 rounded-xl text-xs font-medium dark:bg-slate-900/90 bg-white dark:text-slate-300 text-slate-700 border dark:border-slate-800/90 border-slate-200 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-300 dark:hover:bg-slate-800 hover:bg-slate-50 transition-all cursor-default shadow-sm"
              >
                {comp}
              </span>
            ))}
            {filteredCompetencies.length === 0 && (
              <p className="text-xs text-slate-500 py-2">No competencies matching "{searchTerm}"</p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
