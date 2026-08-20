import React, { useState } from 'react';
import { 
  BarChart3, 
  Layers, 
  Code, 
  Eye, 
  Database, 
  TrendingUp, 
  Filter, 
  RefreshCw, 
  Check, 
  Copy,
  Table,
  Cpu,
  ChevronRight
} from 'lucide-react';
import { powerBIDashboards } from '../data/portfolioData';

export const PowerBIDashboardShowcase: React.FC = () => {
  const [selectedDashboard, setSelectedDashboard] = useState(powerBIDashboards[0]);
  const [activeSegment, setActiveSegment] = useState<'All' | 'Retail' | 'Digital' | 'Enterprise'>('All');
  const [timeFilter, setTimeFilter] = useState<'MTD' | 'QTD' | 'YTD'>('YTD');
  const [copiedDax, setCopiedDax] = useState(false);

  // Dynamic calculation multiplier based on filters
  const multiplier = activeSegment === 'Retail' ? 0.65 : activeSegment === 'Digital' ? 0.85 : activeSegment === 'Enterprise' ? 1.2 : 1.0;

  const handleCopyDax = () => {
    navigator.clipboard.writeText(selectedDashboard.daxCode);
    setCopiedDax(true);
    setTimeout(() => setCopiedDax(false), 2000);
  };

  return (
    <section id="powerbi" className="py-20 dark:bg-slate-950/70 bg-slate-100/70 border-t dark:border-slate-900 border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-blue-500/10 bg-blue-100 dark:text-blue-400 text-blue-800 border dark:border-blue-500/20 border-blue-300 text-xs font-semibold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Interactive Business Intelligence Showroom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold dark:text-white text-slate-900">
            Enterprise Power BI & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">DAX Engineering</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-base sm:text-lg">
            Simulate real-world Power BI reports, Star Schema data models, and enterprise DAX calculations designed by Sai Mahanth Mada.
          </p>
        </div>

        {/* Dashboard Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {powerBIDashboards.map((dash) => {
            const isSelected = selectedDashboard.id === dash.id;
            return (
              <button
                key={dash.id}
                id={`powerbi-tab-${dash.id}`}
                onClick={() => setSelectedDashboard(dash)}
                className={`p-5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between shadow-sm ${
                  isSelected
                    ? 'dark:bg-slate-900 bg-white dark:border-cyan-500 border-cyan-500 shadow-lg dark:shadow-cyan-950/30 ring-1 dark:ring-cyan-500/30 ring-cyan-500/20'
                    : 'dark:bg-slate-900/60 bg-white/70 dark:border-slate-800 border-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold font-mono dark:text-cyan-400 text-cyan-700">
                      {dash.enterprise}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full dark:bg-slate-800 bg-slate-100 dark:text-slate-300 text-slate-700 border dark:border-slate-700 border-slate-200">
                      {dash.kpis.length} Live KPIs
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base dark:text-white text-slate-900 mb-1">
                    {dash.title}
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 line-clamp-2">
                    {dash.description}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t dark:border-slate-800/80 border-slate-100 flex items-center justify-between text-xs">
                  <span className="dark:text-slate-400 text-slate-500 font-medium">Star Schema Model</span>
                  <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-cyan-500' : 'text-slate-400'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Power BI Simulation Sandbox */}
        <div className="rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-2xl overflow-hidden">
          
          {/* Top Power BI Filter Ribbon */}
          <div className="p-4 sm:p-5 dark:bg-slate-950 bg-slate-50 border-b dark:border-slate-800 border-slate-200 flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-500 text-slate-950 font-extrabold text-xs shadow-md">
                PBI
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm sm:text-base dark:text-white text-slate-900">
                  {selectedDashboard.title}
                </h3>
                <p className="text-xs dark:text-slate-400 text-slate-500">
                  Data Source: {selectedDashboard.enterprise} Enterprise Warehouse
                </p>
              </div>
            </div>

            {/* Interactive Slicers */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 dark:bg-slate-900 bg-white p-1 rounded-xl border dark:border-slate-800 border-slate-200 shadow-sm text-xs">
                <span className="px-2 text-slate-400 text-[11px] font-semibold flex items-center gap-1">
                  <Filter className="w-3 h-3 text-cyan-500" /> Slicer:
                </span>
                {(['All', 'Retail', 'Digital', 'Enterprise'] as const).map((seg) => (
                  <button
                    key={seg}
                    onClick={() => setActiveSegment(seg)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                      activeSegment === seg
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                        : 'dark:text-slate-400 text-slate-600 hover:text-cyan-600 dark:hover:text-white'
                    }`}
                  >
                    {seg}
                  </button>
                ))}
              </div>

              {/* Time Horizon Slicer */}
              <div className="flex items-center gap-1 dark:bg-slate-900 bg-white p-1 rounded-xl border dark:border-slate-800 border-slate-200 shadow-sm text-xs">
                {(['MTD', 'QTD', 'YTD'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTimeFilter(t)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      timeFilter === t
                        ? 'dark:bg-slate-800 bg-slate-200 dark:text-cyan-300 text-cyan-800 border dark:border-slate-700 border-slate-300'
                        : 'dark:text-slate-400 text-slate-600 hover:text-cyan-600 dark:hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* KPI Tiles Strip */}
          <div className="p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 dark:bg-slate-900/50 bg-slate-50/50 border-b dark:border-slate-800 border-slate-200">
            {selectedDashboard.kpis.map((kpi, idx) => (
              <div key={idx} className="p-4 rounded-2xl dark:bg-slate-950 bg-white border dark:border-slate-800 border-slate-200 shadow-sm">
                <p className="text-xs dark:text-slate-400 text-slate-500 font-medium">{kpi.name}</p>
                <div className="text-xl sm:text-2xl font-heading font-extrabold dark:text-white text-slate-900 mt-1">
                  {kpi.value}
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{kpi.growth}</span>
                  <span className="dark:text-slate-500 text-slate-400 font-normal ml-1">vs prior period</span>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Body: Visual Dashboard Mockup & Data Architecture */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Visual Charts & Insights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold uppercase tracking-wider dark:text-white text-slate-900 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-cyan-500" />
                  <span>Simulated Report Visuals ({activeSegment} Segment - {timeFilter})</span>
                </h4>
                <span className="text-xs text-slate-500 font-mono">Real-time Slicing Active</span>
              </div>

              {/* Bar Chart Mockup */}
              <div className="p-5 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold dark:text-slate-300 text-slate-700">Quarterly Metric Velocity & Distribution</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-mono font-medium">Variance: +{(multiplier * 4.2).toFixed(1)}%</span>
                </div>

                <div className="space-y-3 pt-2">
                  {[
                    { label: 'Q1 Performance Base', val: Math.min(100, Math.round(72 * multiplier)), color: 'bg-cyan-500' },
                    { label: 'Q2 Optimized Throughput', val: Math.min(100, Math.round(84 * multiplier)), color: 'bg-blue-500' },
                    { label: 'Q3 Enterprise Expansion', val: Math.min(100, Math.round(91 * multiplier)), color: 'bg-indigo-500' },
                    { label: 'Q4 Peak Scalability', val: Math.min(100, Math.round(98 * multiplier)), color: 'bg-emerald-500' },
                  ].map((bar, bIdx) => (
                    <div key={bIdx} className="space-y-1">
                      <div className="flex justify-between text-xs dark:text-slate-400 text-slate-600">
                        <span>{bar.label}</span>
                        <span className="font-mono font-bold dark:text-white text-slate-900">{bar.val}% Target</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full dark:bg-slate-800 bg-slate-200 overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${bar.color} transition-all duration-500`}
                          style={{ width: `${bar.val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Schema Architecture */}
              <div className="p-5 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider dark:text-slate-300 text-slate-700 flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-cyan-500" />
                  <span>Star Schema Model Architecture</span>
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {selectedDashboard.modelArchitecture.map((tbl, tIdx) => (
                    <div key={tIdx} className="p-2.5 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 text-center shadow-sm">
                      <Table className="w-3.5 h-3.5 text-cyan-500 mx-auto mb-1" />
                      <span className="font-mono font-semibold dark:text-slate-200 text-slate-800 text-[11px] block truncate">
                        {tbl}
                      </span>
                      <span className="text-[9px] text-slate-500 uppercase">
                        {tbl.startsWith('Fact') ? 'Fact Table' : 'Dimension'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* DAX Code Inspection */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold uppercase tracking-wider dark:text-white text-slate-900 flex items-center gap-2">
                  <Code className="w-4 h-4 text-amber-500" />
                  <span>Custom DAX Formula Snippet</span>
                </h4>

                <button
                  id="copy-dax-btn"
                  onClick={handleCopyDax}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-750 text-xs font-semibold dark:text-slate-300 text-slate-700 border dark:border-slate-700 border-slate-300 transition-all shadow-sm"
                >
                  {copiedDax ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedDax ? 'Copied' : 'Copy DAX'}</span>
                </button>
              </div>

              {/* Code Container */}
              <div className="rounded-2xl dark:bg-slate-950 bg-slate-900 border dark:border-slate-800 border-slate-800 p-4 font-mono text-xs text-slate-200 shadow-inner overflow-x-auto">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3 text-[11px] text-slate-400">
                  <span>Measure: {selectedDashboard.daxMeasureName}</span>
                  <span className="text-amber-400">DAX Time-Intelligence</span>
                </div>
                <pre className="text-cyan-300 leading-relaxed text-[11px]">
                  {selectedDashboard.daxCode}
                </pre>
              </div>

              {/* Optimization Highlight */}
              <div className="p-4 rounded-xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 text-xs space-y-1">
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">Performance Engineering:</span>
                <p className="dark:text-slate-400 text-slate-600 leading-relaxed">
                  Optimized using calculated columns minimized into dynamic measures and indexed integer keys, reducing storage footprint by 25% and report refresh time by 30%.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
