import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Layers, 
  Search, 
  Sparkles, 
  Cpu, 
  Database, 
  BarChart3, 
  Cloud,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Agile & Project Management':
        return ShieldCheck;
      case 'Business Intelligence & Visualization':
        return BarChart3;
      case 'ETL & Data Engineering':
        return Layers;
      case 'Cloud & Big Data Platforms':
        return Cloud;
      case 'Databases & Querying':
        return Database;
      case 'Operating Systems & Schedulers':
        return Terminal;
      default:
        return Cpu;
    }
  };

  const filteredCategories = skillCategories
    .filter(cat => selectedCategory === 'all' || cat.category === selectedCategory)
    .map(cat => ({
      ...cat,
      skills: cat.skills.filter(skill => 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 dark:bg-slate-950/80 bg-slate-100/80 border-t dark:border-slate-900 border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-cyan-500/10 bg-cyan-100 dark:text-cyan-400 text-cyan-800 border dark:border-cyan-500/20 border-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Mastery & Frameworks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold dark:text-white text-slate-900">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">Tool Ecosystem</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-base sm:text-lg">
            7+ years of deep hands-on expertise spanning Agile facilitation, enterprise BI, ETL architecture, cloud platforms, and databases.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm'
                  : 'dark:bg-slate-900 bg-white dark:text-slate-300 text-slate-700 dark:border-slate-800 border-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                  selectedCategory === cat.category
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm'
                    : 'dark:bg-slate-900 bg-white dark:text-slate-300 text-slate-700 dark:border-slate-800 border-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {cat.category.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="skill-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. DAX, Talend, Jira)..."
              className="w-full pl-9 pr-3.5 py-2 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 text-xs dark:text-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 shadow-sm"
            />
          </div>

        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const IconComponent = getCategoryIcon(cat.category);
            return (
              <div 
                key={idx}
                className="p-6 rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5 border-b dark:border-slate-800/80 border-slate-100 pb-3">
                    <div className="p-2.5 rounded-xl dark:bg-cyan-500/10 bg-cyan-100 text-cyan-600 dark:text-cyan-400 border dark:border-cyan-500/20 border-cyan-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-sm sm:text-base dark:text-white text-slate-900">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills with Progress Bars */}
                  <div className="space-y-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span className="font-semibold dark:text-slate-200 text-slate-800">{skill.name}</span>
                          <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-medium">{skill.level}% Proficiency</span>
                        </div>
                        <div className="w-full h-2 rounded-full dark:bg-slate-950 bg-slate-100 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t dark:border-slate-800/80 border-slate-100 flex items-center justify-between text-[11px] dark:text-slate-400 text-slate-500">
                  <span>{cat.skills.length} Validated Tools</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Enterprise Tested
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
