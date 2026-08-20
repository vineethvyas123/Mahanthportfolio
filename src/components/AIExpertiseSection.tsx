import React, { useState } from 'react';
import { 
  Sparkles, 
  Bot, 
  Zap, 
  Layers, 
  BarChart3, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck, 
  Copy, 
  Check, 
  Terminal, 
  ArrowRight, 
  Wand2, 
  Award, 
  ExternalLink,
  Code2,
  BrainCircuit,
  TrendingUp,
  FileCheck,
  Play
} from 'lucide-react';
import { aiUseCases, aiToolStack, aiPromptPlaygroundItems } from '../data/portfolioData';

export const AIExpertiseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sandbox' | 'usecases' | 'tools'>('sandbox');
  const [selectedPlaygroundIndex, setSelectedPlaygroundIndex] = useState<number>(0);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Custom interactive user story prompt generator state
  const [customFeatureInput, setCustomFeatureInput] = useState('');
  const [customGeneratedResult, setCustomGeneratedResult] = useState<string | null>(null);
  const [isGeneratingCustom, setIsGeneratingCustom] = useState(false);

  const activePlayground = aiPromptPlaygroundItems[selectedPlaygroundIndex];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleGenerateCustom = () => {
    if (!customFeatureInput.trim()) return;
    setIsGeneratingCustom(true);
    setCustomGeneratedResult(null);

    setTimeout(() => {
      const topic = customFeatureInput.trim();
      const generated = `### 🤖 AI-Generated INVEST Story:
**Story Title:** US-510 - Enable ${topic}
**User Persona:** Enterprise Operations & Analytics Lead
**Value Statement:**
- **As an** Operations Lead,
- **I want to** leverage automated ${topic.toLowerCase()},
- **So that** our teams eliminate manual tracking, improve SLA adherence, and gain real-time visibility.

---
#### 📋 Acceptance Criteria (BDD / Gherkin):
\`\`\`gherkin
Scenario: Successful execution of ${topic.toLowerCase()}
  Given authenticated user with role "OPERATIONS_LEAD"
  When the automated trigger executes for "${topic}"
  Then the data is synchronized with Power BI telemetry
  And an executive audit record is logged with timestamp.

Scenario: Ingestion failure or schema boundary exception
  Given downstream system timeout (> 3000ms)
  When the request is rejected
  Then return HTTP 504 with retry-after header
  And alert the on-call DevOps channel.
\`\`\`

---
#### 🛠️ Technical Subtasks:
1. [Data Engineering]: Build ingestion pipeline with tMap schema mapping and null safety.
2. [Power BI / DAX]: Implement real-time metric card with conditional status alerts.
3. [Quality Assurance]: Conduct edge-case testing under peak concurrency.`;
      
      setCustomGeneratedResult(generated);
      setIsGeneratingCustom(false);
    }, 600);
  };

  return (
    <section 
      id="ai-lab" 
      className="py-20 lg:py-28 relative overflow-hidden transition-colors duration-300 border-t dark:border-slate-800/80 border-slate-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-14 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-cyan-500/10 bg-cyan-50 border dark:border-cyan-500/30 border-cyan-200 text-xs font-semibold dark:text-cyan-400 text-cyan-800 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-600 dark:text-cyan-400" />
            <span>Applied Generative AI & Prompt Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold dark:text-white text-slate-900 tracking-tight">
            AI Innovation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-300">Intelligent Workflows</span>
          </h2>

          <p className="dark:text-slate-400 text-slate-600 text-base sm:text-lg leading-relaxed">
            Bridging senior Scrum leadership and enterprise data engineering with applied Generative AI. Certified across 13+ GenAI productivity tools, accelerating delivery speed, DAX prototyping, and team velocity.
          </p>
        </div>

        {/* Quantified AI ROI Impact Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-2xl dark:bg-slate-900/80 bg-white border dark:border-slate-800 border-slate-200 shadow-md hover:border-cyan-500/40 transition-all text-center space-y-1">
            <div className="inline-flex p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mb-1">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">
              +35%
            </div>
            <p className="text-xs font-bold dark:text-slate-200 text-slate-800">Story Refinement Speed</p>
            <p className="text-[11px] dark:text-slate-400 text-slate-500">Automated INVEST slicing & BDD criteria</p>
          </div>

          <div className="p-5 rounded-2xl dark:bg-slate-900/80 bg-white border dark:border-slate-800 border-slate-200 shadow-md hover:border-blue-500/40 transition-all text-center space-y-1">
            <div className="inline-flex p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-1">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              -25%
            </div>
            <p className="text-xs font-bold dark:text-slate-200 text-slate-800">DAX / SQL Debugging</p>
            <p className="text-[11px] dark:text-slate-400 text-slate-500">Fast formula refactoring & query CTEs</p>
          </div>

          <div className="p-5 rounded-2xl dark:bg-slate-900/80 bg-white border dark:border-slate-800 border-slate-200 shadow-md hover:border-purple-500/40 transition-all text-center space-y-1">
            <div className="inline-flex p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 mb-1">
              <FileCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              -50%
            </div>
            <p className="text-xs font-bold dark:text-slate-200 text-slate-800">Release Notes Overhead</p>
            <p className="text-[11px] dark:text-slate-400 text-slate-500">Automated sprint summaries & briefs</p>
          </div>

          <div className="p-5 rounded-2xl dark:bg-slate-900/80 bg-white border dark:border-slate-800 border-slate-200 shadow-md hover:border-emerald-500/40 transition-all text-center space-y-1">
            <div className="inline-flex p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-1">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">
              13+ Tools
            </div>
            <p className="text-xs font-bold dark:text-slate-200 text-slate-800">Be10x Certified</p>
            <p className="text-[11px] dark:text-slate-400 text-slate-500">GenAI Tools & Workflow Specialist</p>
          </div>
        </div>

        {/* View Switcher Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl dark:bg-slate-900/90 bg-white border dark:border-slate-800 border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab('sandbox')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-heading font-semibold text-xs sm:text-sm transition-all ${
                activeTab === 'sandbox'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md'
                  : 'dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900'
              }`}
            >
              <BrainCircuit className="w-4 h-4" />
              <span>Interactive AI Sandbox</span>
            </button>

            <button
              onClick={() => setActiveTab('usecases')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-heading font-semibold text-xs sm:text-sm transition-all ${
                activeTab === 'usecases'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md'
                  : 'dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Enterprise AI Workflows</span>
            </button>

            <button
              onClick={() => setActiveTab('tools')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-heading font-semibold text-xs sm:text-sm transition-all ${
                activeTab === 'tools'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md'
                  : 'dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900'
              }`}
            >
              <Wand2 className="w-4 h-4" />
              <span>GenAI Tool Stack</span>
            </button>
          </div>
        </div>

        {/* TAB 1: INTERACTIVE AI PROMPT PLAYGROUND */}
        {activeTab === 'sandbox' && (
          <div className="space-y-8">
            
            {/* Preset Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {aiPromptPlaygroundItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedPlaygroundIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 shadow-sm ${
                    selectedPlaygroundIndex === idx
                      ? 'dark:bg-slate-900 bg-white dark:border-cyan-500 border-cyan-400 ring-2 ring-cyan-500/20'
                      : 'dark:bg-slate-900/60 bg-white/70 dark:border-slate-800 border-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${
                    selectedPlaygroundIndex === idx
                      ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400'
                      : 'dark:bg-slate-800 bg-slate-100 dark:text-slate-400 text-slate-600'
                  }`}>
                    {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                    {idx === 1 && <BarChart3 className="w-5 h-5" />}
                    {idx === 2 && <Cpu className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block mb-0.5">
                      {item.domain}
                    </span>
                    <h4 className="text-xs sm:text-sm font-heading font-bold dark:text-white text-slate-900 line-clamp-1">
                      {item.title}
                    </h4>
                    <span className="text-[11px] dark:text-slate-400 text-slate-500 flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3 text-emerald-500" /> {item.efficiencyGain.split('(')[0]}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Main Interactive Comparison Display */}
            <div className="p-6 sm:p-8 rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-xl space-y-6">
              
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b dark:border-slate-800 border-slate-100 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg dark:bg-cyan-500/10 bg-cyan-50 text-cyan-600 dark:text-cyan-400 text-xs font-bold border dark:border-cyan-500/20 border-cyan-200">
                      {activePlayground.domain}
                    </span>
                    <span className="text-xs font-semibold dark:text-slate-400 text-slate-500">
                      Prompt Engineering Case #{selectedPlaygroundIndex + 1}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold dark:text-white text-slate-900 mt-1">
                    {activePlayground.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-xl dark:bg-emerald-500/10 bg-emerald-50 text-emerald-600 dark:text-emerald-400 text-xs font-bold border dark:border-emerald-500/20 border-emerald-200 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{activePlayground.efficiencyGain}</span>
                  </div>
                </div>
              </div>

              {/* Grid: Context & System Prompt vs. AI Output */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left: Input Context & System Prompt */}
                <div className="lg:col-span-5 space-y-5">
                  
                  {/* System Instruction Persona */}
                  <div className="p-4 rounded-2xl dark:bg-slate-950/80 bg-slate-50 border dark:border-slate-800 border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold dark:text-cyan-400 text-cyan-700 flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5" /> Contextual System Prompt
                      </span>
                      <span className="text-[10px] dark:text-slate-500 text-slate-400 font-mono">ROLE: EXPERT</span>
                    </div>
                    <p className="text-xs dark:text-slate-300 text-slate-700 font-mono leading-relaxed bg-black/5 dark:bg-black/40 p-2.5 rounded-xl">
                      {activePlayground.systemPrompt}
                    </p>
                  </div>

                  {/* Input Requirement */}
                  <div className="p-4 rounded-2xl dark:bg-slate-950/80 bg-slate-50 border dark:border-slate-800 border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold dark:text-amber-400 text-amber-700 flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5" /> {activePlayground.inputDescription}
                      </span>
                    </div>
                    <pre className="text-xs dark:text-slate-300 text-slate-800 font-mono whitespace-pre-wrap leading-relaxed bg-black/5 dark:bg-black/40 p-3 rounded-xl max-h-48 overflow-y-auto">
                      {activePlayground.inputCodeOrPrompt}
                    </pre>
                  </div>

                  {/* Prompt Engineering Techniques used */}
                  <div className="p-4 rounded-2xl dark:bg-cyan-950/20 bg-cyan-50/50 border dark:border-cyan-500/20 border-cyan-200 text-xs space-y-2">
                    <span className="font-bold dark:text-cyan-300 text-cyan-800 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Prompt Patterns Applied
                    </span>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-400 text-[11px]">
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-cyan-500" />
                        <span>Few-Shot Persona & Domain Constrained Grounding</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-cyan-500" />
                        <span>Chain-of-Thought (CoT) Structured Output Formatting</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-cyan-500" />
                        <span>Edge-case Boundary Condition Generation</span>
                      </li>
                    </ul>
                  </div>

                </div>

                {/* Right: AI Output Display */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-cyan-500" />
                      <span className="text-xs font-bold dark:text-slate-200 text-slate-800">
                        {activePlayground.aiOutputTitle}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy(activePlayground.aiOutputContent, `output-${activePlayground.id}`)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium dark:text-slate-300 text-slate-700 transition-all"
                    >
                      {copiedKey === `output-${activePlayground.id}` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy Output</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-5 rounded-2xl dark:bg-slate-950 bg-slate-900 border dark:border-slate-800 border-slate-700 shadow-inner overflow-x-auto text-slate-200 font-mono text-xs leading-relaxed max-h-[500px] overflow-y-auto">
                    <pre className="whitespace-pre-wrap font-sans dark:font-mono">
                      {activePlayground.aiOutputContent}
                    </pre>
                  </div>
                </div>

              </div>

            </div>

            {/* Interactive Live Generator Sandbox Card */}
            <div className="p-6 sm:p-8 rounded-3xl dark:bg-slate-900/90 bg-white border dark:border-cyan-500/30 border-cyan-200 shadow-lg space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Wand2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-heading font-bold dark:text-white text-slate-900">
                      Live AI Agile Story Generator Test
                    </h4>
                    <p className="text-xs dark:text-slate-400 text-slate-600">
                      Try entering any business requirement to test Mahanth's automated INVEST slicing framework.
                    </p>
                  </div>
                </div>

                <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 px-3 py-1 rounded-full dark:bg-cyan-500/10 bg-cyan-50 border dark:border-cyan-500/20 border-cyan-200 self-start sm:self-auto">
                  Instant Simulation
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="text"
                  value={customFeatureInput}
                  onChange={(e) => setCustomFeatureInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleGenerateCustom()}
                  placeholder="e.g. Automated reconciliation for daily lottery ticket settlements with retry logic"
                  className="flex-1 px-4 py-3 rounded-xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-300 text-xs sm:text-sm dark:text-slate-100 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 shadow-inner"
                />
                <button
                  onClick={handleGenerateCustom}
                  disabled={isGeneratingCustom || !customFeatureInput.trim()}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-heading font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {isGeneratingCustom ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin" />
                      <span>Synthesizing Story...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Generate INVEST Story</span>
                    </>
                  )}
                </button>
              </div>

              {/* Sample Quick Fill Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span className="text-slate-400 dark:text-slate-500 font-medium">Quick Examples:</span>
                <button
                  onClick={() => setCustomFeatureInput('Automated lottery payout threshold alerts for regional store managers')}
                  className="px-2.5 py-1 rounded-lg dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 text-[11px] dark:text-slate-300 text-slate-700 transition-colors"
                >
                  Lottery Payout Alerts
                </button>
                <button
                  onClick={() => setCustomFeatureInput('Power BI dashboard real-time data sync with AWS Athena partition filtering')}
                  className="px-2.5 py-1 rounded-lg dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 text-[11px] dark:text-slate-300 text-slate-700 transition-colors"
                >
                  Athena Partition Sync
                </button>
                <button
                  onClick={() => setCustomFeatureInput('Talend SCD Type-2 dimension tracking for customer address updates')}
                  className="px-2.5 py-1 rounded-lg dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 text-[11px] dark:text-slate-300 text-slate-700 transition-colors"
                >
                  Talend SCD2 Customer Sync
                </button>
              </div>

              {customGeneratedResult && (
                <div className="mt-4 p-5 rounded-2xl dark:bg-slate-950 bg-slate-900 border dark:border-slate-800 border-slate-700 text-slate-200 font-mono text-xs leading-relaxed relative">
                  <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                    <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" /> AI Generated Backlog Story Output:
                    </span>
                    <button
                      onClick={() => handleCopy(customGeneratedResult, 'custom-result')}
                      className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1"
                    >
                      {copiedKey === 'custom-result' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy</span>
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap font-sans">
                    {customGeneratedResult}
                  </pre>
                </div>
              )}

            </div>

          </div>
        )}

        {/* TAB 2: ENTERPRISE AI WORKFLOWS & CASE STUDIES */}
        {activeTab === 'usecases' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiUseCases.map((useCase) => (
              <div 
                key={useCase.id}
                className="p-6 sm:p-8 rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all space-y-6 group"
              >
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between gap-3">
                    <span className={`px-3 py-1 rounded-xl text-xs font-bold uppercase tracking-wider ${
                      useCase.category === 'agile' ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20' :
                      useCase.category === 'bi' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20' :
                      useCase.category === 'etl' ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20' :
                      'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                    }`}>
                      {useCase.category.toUpperCase()} WORKFLOW
                    </span>

                    <span className="text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-xl dark:bg-slate-950 bg-slate-100 border dark:border-slate-800 border-slate-200 shadow-sm">
                      {useCase.metricsGain}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold dark:text-white text-slate-900 group-hover:text-cyan-500 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                      {useCase.roleImpact}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-600 leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-2 border-t dark:border-slate-800/80 border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500 block">
                      Core Implementation Workflows:
                    </span>
                    <ul className="space-y-2">
                      {useCase.keyWorkflows.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs dark:text-slate-300 text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="pt-4 border-t dark:border-slate-800 border-slate-100 flex items-center justify-between text-xs dark:text-slate-400 text-slate-500">
                  <span className="font-medium flex items-center gap-1.5">
                    <Bot className="w-4 h-4 text-cyan-500" />
                    <strong>Tooling:</strong> {useCase.toolUsed}
                  </span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
                    Enterprise Tested <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* TAB 3: GENAI TOOL STACK & CERTIFICATIONS */}
        {activeTab === 'tools' && (
          <div className="space-y-8">
            
            {/* Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiToolStack.map((tool) => (
                <div 
                  key={tool.id}
                  className="p-6 rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-xl space-y-4 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500">
                        {tool.category}
                      </span>
                      <span className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 px-2.5 py-0.5 rounded-full dark:bg-cyan-500/10 bg-cyan-50 border dark:border-cyan-500/20 border-cyan-200">
                        {tool.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-heading font-bold dark:text-white text-slate-900">
                      {tool.name}
                    </h4>

                    <p className="text-xs dark:text-slate-300 text-slate-600 leading-relaxed">
                      {tool.useCase}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t dark:border-slate-800 border-slate-100">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[11px] dark:text-slate-400 text-slate-500">
                        Proficiency & Application Depth
                      </span>
                      <span className="font-bold font-mono text-cyan-600 dark:text-cyan-400">
                        {tool.proficiency}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full dark:bg-slate-800 bg-slate-100 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-700"
                        style={{ width: `${tool.proficiency}%` }}
                      />
                    </div>
                    <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 italic">
                      ✨ {tool.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Be10x Certification Banner */}
            <div className="p-6 sm:p-8 rounded-3xl dark:bg-gradient-to-r dark:from-slate-900 dark:via-cyan-950/30 dark:to-slate-900 bg-gradient-to-r from-cyan-50 via-white to-blue-50 border dark:border-cyan-500/30 border-cyan-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl dark:bg-cyan-500/10 bg-cyan-100 text-cyan-600 dark:text-cyan-400 border dark:border-cyan-500/20 border-cyan-300 shadow-sm shrink-0">
                  <Award className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    Official AI Credential
                  </span>
                  <h4 className="text-xl sm:text-2xl font-heading font-bold dark:text-white text-slate-900">
                    Certified AI Tools & Workflow Specialist (13+ AI Tools)
                  </h4>
                  <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-600">
                    Conferred by <strong>Be10x</strong> &bull; Credential ID: <code>BE10X-AI-883</code> &bull; Verification Status: <span className="text-emerald-500 font-bold">Verified</span>
                  </p>
                </div>
              </div>

              <a
                href="#awards"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-heading font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 whitespace-nowrap"
              >
                View All Certifications
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
