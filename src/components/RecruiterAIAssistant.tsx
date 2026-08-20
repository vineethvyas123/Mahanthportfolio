import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  User, 
  ChevronRight, 
  CheckCircle2, 
  Award, 
  Briefcase, 
  Phone, 
  Mail,
  Zap,
  RotateCcw
} from 'lucide-react';
import { personalInfo, experiences, certifications, awards } from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  bullets?: string[];
  actionLink?: {
    text: string;
    action: string;
  };
}

export const RecruiterAIAssistant: React.FC<{ onOpenResume: () => void; onOpenContact: () => void }> = ({ onOpenResume, onOpenContact }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: `Hello! I'm Sai Mahanth's Portfolio AI Assistant. Feel free to ask me anything about Mahanth's 7+ years of experience in Agile Scrum Leadership, Power BI Analytics, or Talend ETL Architecture.`,
      timestamp: 'Just now',
      bullets: [
        'Scrum Master & Senior Developer at HARMAN (SAMSUNG)',
        'Delivered 60+ interactive Power BI dashboards & DAX models',
        'Led zero-downtime Talend 8.0 upgrade & Cloud migrations',
        'Certified Scrum Master (Scrum.org) & AWS Data Engineer'
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "Why hire Mahanth as Scrum Master?",
    "What are his key Power BI achievements?",
    "Tell me about his Talend ETL & Cloud work",
    "What awards has he won?",
    "How can I contact or interview him?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let botResponse: Message;

      if (lower.includes('scrum') || lower.includes('agile') || lower.includes('ceremonies') || lower.includes('leadership')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: `Mahanth is a Certified Scrum Master (Scrum.org) currently spearheading Scrum ceremonies and Agile coaching at HARMAN Connected Services (SAMSUNG).`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          bullets: [
            'Achieved 98% on-time Sprint Goal adherence across complex squads.',
            'Integrates MoSCoW, Kano Model, and WSJF frameworks for rigorous backlog prioritization.',
            'Coaches senior leadership and product owners to mitigate retrospective fatigue.',
            'Servant leader expert at unblocking cross-team technical bottlenecks.'
          ]
        };
      } else if (lower.includes('power bi') || lower.includes('bi') || lower.includes('dashboard') || lower.includes('dax') || lower.includes('analytics')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: `Mahanth has engineered over 60+ interactive enterprise Power BI dashboards with advanced DAX expressions, Star Schema models, and Power Query M transformations.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          bullets: [
            'Boosted executive decision-making speed by 23% at HARMAN.',
            'Drove an 18% sales uplift at Charles Schwab via strategic data visualization.',
            'Reduced report production turnaround by 30% through workflow automation.',
            'Refactored data models to reduce storage redundancy by 25%.'
          ]
        };
      } else if (lower.includes('talend') || lower.includes('etl') || lower.includes('aws') || lower.includes('cloud') || lower.includes('pipeline') || lower.includes('data')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: `Mahanth has 7+ years of deep ETL and Cloud Data Engineering experience across Talend Data Integration (6.x, 7.x, 8.x) and AWS ecosystems.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          bullets: [
            'Orchestrated zero-downtime Talend upgrade from 7.3.1 to 8.0.1 at HARMAN.',
            'Spearheaded Big Data Hive to Cloud Data Warehouse migration for Charles Schwab.',
            'Built enterprise Slowly Changing Dimensions (SCD Types 1, 2, 3, 6) for insurance and healthcare.',
            'AWS Data Engineer Foundations & Cloud Practitioner certified.'
          ]
        };
      } else if (lower.includes('award') || lower.includes('honor') || lower.includes('recognition')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: `Mahanth has been honored with 3 prestigious enterprise awards:`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          bullets: [
            'Persona Award from HARMAN (SAMSUNG) for exemplary servant leadership & Agile coaching.',
            'B Brilliant Award from HARMAN (SAMSUNG) for technical excellence in the Talend 8.0 upgrade.',
            'Laurel Award from Mphasis for outstanding contributions to the Charles Schwab cloud migration.'
          ]
        };
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('reach') || lower.includes('hire') || lower.includes('interview')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: `You can reach Sai Mahanth Mada directly via:`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          bullets: [
            `Email: ${personalInfo.email}`,
            `Phone / WhatsApp: ${personalInfo.phone}`,
            `Location: Sikandrabad / Bangalore / Hyderabad (Open to Hybrid & Remote)`
          ],
          actionLink: {
            text: 'Open Direct Contact Form',
            action: 'contact'
          }
        };
      } else {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: `Mahanth brings a unique dual-power advantage: enterprise Scrum Master leadership paired with hands-on Senior Power BI, DAX & Talend ETL technical mastery across 7+ years in top-tier organizations like HARMAN (SAMSUNG) and Mphasis.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          bullets: [
            '7+ Years of IT Experience in Bangalore & Hyderabad',
            'Certified Scrum Master (Scrum.org) + AWS Certified',
            '3x Enterprise Award Winner',
            'Ready to lead high-performing teams to deliver impactful data products'
          ]
        };
      }

      setIsTyping(false);
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  return (
    <div className="rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-2xl overflow-hidden flex flex-col h-[520px]">
      
      {/* Header */}
      <div className="p-4 dark:bg-slate-950 bg-slate-50 border-b dark:border-slate-800 border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative p-2 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white shadow-md">
            <Bot className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 dark:border-slate-950 border-white"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-heading font-bold dark:text-white text-slate-900">Recruiter AI Assistant</h3>
              <span className="text-[10px] font-semibold dark:bg-cyan-500/20 bg-cyan-100 text-cyan-800 dark:text-cyan-300 px-1.5 py-0.2 rounded border dark:border-cyan-500/30 border-cyan-300">
                Interactive QA
              </span>
            </div>
            <p className="text-[11px] dark:text-slate-400 text-slate-500">Ask questions about Mahanth's background & fit</p>
          </div>
        </div>

        <button
          onClick={() => setMessages([{
            id: '1',
            sender: 'bot',
            text: `Conversation reset. What would you like to know about Sai Mahanth Mada?`,
            timestamp: 'Just now'
          }])}
          className="p-1.5 rounded-lg dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-slate-900 dark:hover:bg-slate-800 hover:bg-slate-200 text-xs transition-colors"
          title="Reset conversation"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Messages Feed */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs dark:bg-slate-950/40 bg-slate-50/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'bot' && (
              <div className="w-7 h-7 rounded-lg dark:bg-cyan-500/20 bg-cyan-100 dark:text-cyan-400 text-cyan-800 border dark:border-cyan-500/30 border-cyan-200 flex items-center justify-center shrink-0 mt-0.5">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-[85%] rounded-2xl p-3.5 space-y-2 ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-tr-none'
                  : 'dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 dark:text-slate-200 text-slate-800 rounded-tl-none shadow-sm'
              }`}
            >
              <p className="leading-relaxed">{msg.text}</p>

              {msg.bullets && msg.bullets.length > 0 && (
                <div className="space-y-1.5 pt-1 border-t dark:border-slate-800/80 border-slate-100">
                  {msg.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-1.5 text-[11px] dark:text-slate-300 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              )}

              {msg.actionLink && (
                <div className="pt-2">
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg dark:bg-cyan-500/20 bg-cyan-100 dark:text-cyan-300 text-cyan-800 font-bold border dark:border-cyan-500/40 border-cyan-300 dark:hover:bg-cyan-500/30 hover:bg-cyan-200 transition-all text-xs"
                  >
                    <span>{msg.actionLink.text}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <div className={`text-[9px] ${msg.sender === 'user' ? 'text-blue-200 text-right' : 'dark:text-slate-500 text-slate-400'}`}>
                {msg.timestamp}
              </div>
            </div>

            {msg.sender === 'user' && (
              <div className="w-7 h-7 rounded-lg bg-blue-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-slate-400 text-xs pl-9">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
            </div>
            <span>Analyzing Mahanth's profile...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompt Chips */}
      <div className="px-3 py-2 dark:bg-slate-950/80 bg-slate-50 border-t dark:border-slate-800/80 border-slate-200 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
          <Zap className="w-3 h-3 text-cyan-500" />
          Prompts:
        </span>
        {quickQuestions.map((q, qIdx) => (
          <button
            key={qIdx}
            onClick={() => handleSend(q)}
            className="px-2.5 py-1 rounded-full text-[11px] dark:bg-slate-900 bg-white hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-300 text-slate-700 hover:text-cyan-600 dark:hover:text-cyan-300 border dark:border-slate-800 border-slate-200 hover:border-cyan-500/40 transition-all whitespace-nowrap shadow-sm"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <form 
        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
        className="p-3 dark:bg-slate-950 bg-slate-50 border-t dark:border-slate-800 border-slate-200 flex items-center gap-2"
      >
        <input
          id="recruiter-chat-input"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask about Scrum, Power BI, AWS, notice period..."
          className="flex-1 px-3 py-2 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 text-xs dark:text-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 shadow-sm"
        />
        <button
          id="recruiter-chat-send-btn"
          type="submit"
          disabled={!inputText.trim() || isTyping}
          className="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-slate-950 font-bold transition-all shadow-sm"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
};
