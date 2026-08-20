import React, { useState } from 'react';
import { 
  Cpu, 
  Users, 
  Clock, 
  AlertTriangle, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Flame,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Blocker {
  id: string;
  title: string;
  impact: number;
  remedy: string;
  resolved: boolean;
}

export const AgileSprintSimulator: React.FC = () => {
  const [squadSize, setSquadSize] = useState<number>(7);
  const [sprintDurationWeeks, setSprintDurationWeeks] = useState<number>(2);
  const [focusFactor, setFocusFactor] = useState<number>(80);
  const [prioritizationFramework, setPrioritizationFramework] = useState<'WSJF' | 'MoSCoW' | 'Kano'>('WSJF');

  const [activeBlocker, setActiveBlocker] = useState<Blocker | null>(null);
  const [sprintStatus, setSprintStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [velocityAdherence, setVelocityAdherence] = useState<number>(98);
  const [resolvedCount, setResolvedCount] = useState<number>(0);

  // Calculate sprint capacity in Story Points
  // Base: ~8 story points per engineer per 2-week sprint at 80% focus
  const calculatedCapacity = Math.round((squadSize * 8 * (sprintDurationWeeks / 2) * (focusFactor / 80)));
  const deliveredPoints = Math.round(calculatedCapacity * (velocityAdherence / 100));

  const simulationBlockers: Blocker[] = [
    {
      id: 'b1',
      title: 'Talend ETL Pipeline Schema Drift in QA',
      impact: 18,
      remedy: 'Mahanth led emergency Swarm session with Data Architecture; refactored tMap schemas within 3 hours, unblocking QA.',
      resolved: false
    },
    {
      id: 'b2',
      title: 'AWS Cloud IAM Role Delegation Latency',
      impact: 12,
      remedy: 'Mahanth engaged Enterprise Cloud SecOps lead, escalated via Scrum of Scrums, securing temporary sandbox credentials.',
      resolved: false
    },
    {
      id: 'b3',
      title: 'Mid-Sprint Scope Creep from Stakeholders',
      impact: 15,
      remedy: 'Applied WSJF (Weighted Shortest Job First) trade-off matrix to swap low-priority backlog items without expanding Sprint backlog.',
      resolved: false
    }
  ];

  const triggerBlocker = (blocker: Blocker) => {
    setActiveBlocker({ ...blocker, resolved: false });
    setVelocityAdherence(prev => Math.max(65, prev - blocker.impact));
  };

  const resolveBlocker = () => {
    if (!activeBlocker) return;
    setActiveBlocker(prev => prev ? { ...prev, resolved: true } : null);
    setVelocityAdherence(98);
    setResolvedCount(prev => prev + 1);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {}
  };

  const runSimulation = () => {
    setSprintStatus('running');
    setTimeout(() => {
      setSprintStatus('completed');
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#3b82f6', '#10b981']
        });
      } catch {}
    }, 1200);
  };

  const resetSimulation = () => {
    setSquadSize(7);
    setSprintDurationWeeks(2);
    setFocusFactor(80);
    setActiveBlocker(null);
    setSprintStatus('idle');
    setVelocityAdherence(98);
  };

  return (
    <section id="simulator" className="py-20 dark:bg-slate-950 bg-slate-50 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-emerald-500/10 bg-emerald-100 dark:text-emerald-400 text-emerald-800 border dark:border-emerald-500/20 border-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Agile Scrum Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold dark:text-white text-slate-900">
            Simulate an <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-400">Agile Sprint Delivery</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-base sm:text-lg">
            Experience how Sai Mahanth Mada orchestrates team capacity, navigates real-world impediments, and guarantees 98% Sprint Goal adherence.
          </p>
        </div>

        {/* Sandbox Canvas Card */}
        <div className="rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-2xl p-6 sm:p-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls: Parameters */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="flex items-center justify-between border-b dark:border-slate-800 border-slate-100 pb-3">
                <h3 className="text-base font-heading font-bold dark:text-white text-slate-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-cyan-500" />
                  <span>Sprint Configuration Parameters</span>
                </h3>
                <button
                  id="reset-sprint-btn"
                  onClick={resetSimulation}
                  className="text-xs text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Defaults</span>
                </button>
              </div>

              {/* Squad Size Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold dark:text-slate-300 text-slate-700">Engineering Squad Size:</span>
                  <span className="font-mono font-bold dark:text-cyan-400 text-cyan-700">{squadSize} Cross-Functional Engineers</span>
                </div>
                <input
                  id="squad-size-slider"
                  type="range"
                  min={3}
                  max={12}
                  value={squadSize}
                  onChange={(e) => setSquadSize(Number(e.target.value))}
                  className="w-full h-2 rounded-lg dark:bg-slate-800 bg-slate-200 accent-cyan-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>3 Engineers (Lean)</span>
                  <span>7 Engineers (Scrum Standard)</span>
                  <span>12 Engineers (Scaled Squad)</span>
                </div>
              </div>

              {/* Sprint Duration & Focus Factor */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="space-y-2">
                  <label className="text-xs font-semibold dark:text-slate-300 text-slate-700 block">Sprint Cadence:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2].map((w) => (
                      <button
                        key={w}
                        onClick={() => setSprintDurationWeeks(w)}
                        className={`py-2 rounded-xl text-xs font-semibold transition-all border ${
                          sprintDurationWeeks === w
                            ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm'
                            : 'dark:bg-slate-950 bg-slate-50 dark:text-slate-300 text-slate-700 dark:border-slate-800 border-slate-200'
                        }`}
                      >
                        {w} {w === 1 ? 'Week' : 'Weeks'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold dark:text-slate-300 text-slate-700 block">Focus Factor ({focusFactor}%):</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[70, 80].map((f) => (
                      <button
                        key={f}
                        onClick={() => setFocusFactor(f)}
                        className={`py-2 rounded-xl text-xs font-semibold transition-all border ${
                          focusFactor === f
                            ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm'
                            : 'dark:bg-slate-950 bg-slate-50 dark:text-slate-300 text-slate-700 dark:border-slate-800 border-slate-200'
                        }`}
                      >
                        {f}% Focus
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Prioritization Framework */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-semibold dark:text-slate-300 text-slate-700 block">Backlog Prioritization Model:</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['WSJF', 'MoSCoW', 'Kano'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setPrioritizationFramework(m)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                        prioritizationFramework === m
                          ? 'dark:bg-slate-800 bg-slate-200 dark:text-cyan-300 text-cyan-800 dark:border-cyan-500/50 border-cyan-500/40'
                          : 'dark:bg-slate-950 bg-slate-50 dark:text-slate-400 text-slate-600 dark:border-slate-800 border-slate-200'
                      }`}
                    >
                      {m} Model
                    </button>
                  ))}
                </div>
              </div>

              {/* Test Real-World Impediments */}
              <div className="space-y-2 pt-3 border-t dark:border-slate-800 border-slate-100">
                <label className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Simulate Real-World Blockers & Bottlenecks:</span>
                </label>
                <div className="space-y-2">
                  {simulationBlockers.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => triggerBlocker(b)}
                      className="w-full text-left p-3 rounded-xl dark:bg-slate-950 bg-slate-50 hover:bg-amber-50 dark:hover:bg-slate-850 border dark:border-slate-800 border-slate-200 hover:border-amber-500/40 transition-all text-xs flex items-center justify-between group shadow-sm"
                    >
                      <span className="dark:text-slate-300 text-slate-700 group-hover:text-amber-700 dark:group-hover:text-amber-300">{b.title}</span>
                      <span className="text-[10px] text-rose-600 dark:text-rose-400 font-mono font-bold shrink-0 ml-2">-{b.impact}% Velocity</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Display: Live Output & Playbook Resolution */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Output Metrics Card */}
              <div className="p-6 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider dark:text-slate-400 text-slate-500">Live Forecasted Sprint Output</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{velocityAdherence}% Goal Adherence</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-sm">
                    <p className="text-xs dark:text-slate-400 text-slate-500 font-medium">Committed Capacity</p>
                    <p className="text-2xl sm:text-3xl font-heading font-extrabold dark:text-white text-slate-900 mt-1">
                      {calculatedCapacity} <span className="text-xs font-normal text-slate-400">Story Points</span>
                    </p>
                  </div>

                  <div className="p-4 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-sm">
                    <p className="text-xs dark:text-slate-400 text-slate-500 font-medium">Delivered at Sprint Close</p>
                    <p className="text-2xl sm:text-3xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 mt-1">
                      {deliveredPoints} <span className="text-xs font-normal text-slate-400">Points</span>
                    </p>
                  </div>
                </div>

                {/* Velocity Progress bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs">
                    <span className="dark:text-slate-400 text-slate-600">Sprint Goal Completion Confidence:</span>
                    <span className="font-mono font-bold dark:text-white text-slate-900">{velocityAdherence}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full dark:bg-slate-800 bg-slate-200 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        velocityAdherence >= 90 ? 'bg-gradient-to-r from-emerald-500 to-cyan-500' : 'bg-gradient-to-r from-amber-500 to-rose-500'
                      }`}
                      style={{ width: `${velocityAdherence}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Active Blocker & Servant Leadership Playbook */}
              {activeBlocker && (
                <div className="p-5 rounded-2xl dark:bg-amber-950/30 bg-amber-50/80 border dark:border-amber-500/40 border-amber-300 space-y-3 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 text-xs font-bold">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Impediment Detected: {activeBlocker.title}</span>
                    </div>
                    <span className="text-xs font-bold text-rose-600 dark:text-rose-400">-{activeBlocker.impact}% Impact</span>
                  </div>

                  <div className="p-3.5 rounded-xl dark:bg-slate-900/90 bg-white border dark:border-slate-800 border-amber-200 text-xs space-y-1.5 shadow-sm">
                    <p className="font-bold text-cyan-600 dark:text-cyan-400">Sai Mahanth's Servant Leadership Intervention:</p>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed">{activeBlocker.remedy}</p>
                  </div>

                  {!activeBlocker.resolved ? (
                    <button
                      id="resolve-blocker-btn"
                      onClick={resolveBlocker}
                      className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-heading font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20 active:scale-95 transition-all"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Execute Scrum Master Resolution Playbook</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 pt-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Impediment Resolved. Squad Velocity Restored to 98%.</span>
                    </div>
                  )}
                </div>
              )}

              {/* Simulation CTA */}
              <button
                id="run-sprint-simulation-btn"
                onClick={runSimulation}
                disabled={sprintStatus === 'running'}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-slate-950 font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 active:scale-95 transition-all disabled:opacity-50"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>{sprintStatus === 'running' ? 'Simulating Sprint Delivery...' : 'Run Sprint Simulation'}</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
