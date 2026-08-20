import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  Sparkles, 
  Calendar,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { RecruiterAIAssistant } from './RecruiterAIAssistant';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    roleInterest: 'Scrum Master',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#06b6d4', '#3b82f6', '#10b981']
        });
      } catch {}
    }, 800);
  };

  return (
    <section id="contact" className="py-20 dark:bg-slate-950/90 bg-slate-100/90 border-t dark:border-slate-900 border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark:bg-cyan-500/10 bg-cyan-100 dark:text-cyan-400 text-cyan-800 border dark:border-cyan-500/20 border-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Hiring & Collaboration Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold dark:text-white text-slate-900">
            Let's Discuss <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-300">Your Next High-Impact Role</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-base sm:text-lg">
            Looking for a seasoned Scrum Master or Senior Power BI & ETL Developer? Reach out directly or test the interactive recruiter assistant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Message Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Email Card */}
              <div className="p-5 rounded-2xl dark:bg-slate-900/80 bg-white border dark:border-slate-800 border-slate-200 space-y-3 group hover:border-cyan-500/40 transition-all shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl dark:bg-cyan-500/10 bg-cyan-100 text-cyan-600 dark:text-cyan-400 border dark:border-cyan-500/20 border-cyan-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <button
                    id="contact-copy-email-btn"
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="text-xs text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div>
                  <p className="text-xs dark:text-slate-400 text-slate-500 font-medium">Direct Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-sm font-heading font-bold dark:text-white text-slate-900 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors break-all flex items-center gap-1 mt-0.5"
                  >
                    <span>{personalInfo.email}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-500" />
                  </a>
                </div>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="p-5 rounded-2xl dark:bg-slate-900/80 bg-white border dark:border-slate-800 border-slate-200 space-y-3 group hover:border-emerald-500/40 transition-all shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl dark:bg-emerald-500/10 bg-emerald-100 text-emerald-600 dark:text-emerald-400 border dark:border-emerald-500/20 border-emerald-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <button
                    id="contact-copy-phone-btn"
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="text-xs text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 flex items-center gap-1 transition-colors"
                  >
                    {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div>
                  <p className="text-xs dark:text-slate-400 text-slate-500 font-medium">Phone & WhatsApp</p>
                  <a 
                    href="https://wa.me/918121791352" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-heading font-bold dark:text-white text-slate-900 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center gap-1 mt-0.5"
                  >
                    <span>{personalInfo.phone}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500" />
                  </a>
                </div>
              </div>

            </div>

            {/* Location & Availability Ribbon */}
            <div className="p-4 rounded-2xl dark:bg-slate-900/60 bg-white border dark:border-slate-800 border-slate-200 flex items-center justify-between gap-3 text-xs shadow-sm">
              <div className="flex items-center gap-2 dark:text-slate-300 text-slate-700">
                <MapPin className="w-4 h-4 text-cyan-500 shrink-0" />
                <span><strong>Location:</strong> {personalInfo.location}</span>
              </div>
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold dark:bg-emerald-500/10 bg-emerald-50 px-2.5 py-1 rounded-md border dark:border-emerald-500/20 border-emerald-200 shrink-0">
                Open to Bangalore, Hyderabad & Hybrid
              </span>
            </div>

            {/* Message Form */}
            <div className="p-6 sm:p-7 rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-xl space-y-4">
              <h3 className="text-lg font-heading font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-500" />
                <span>Send a Direct Inquiry or Interview Request</span>
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl dark:bg-emerald-950/40 bg-emerald-50 border dark:border-emerald-500/40 border-emerald-300 text-center space-y-3 animate-in zoom-in-95 duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-heading font-bold dark:text-white text-slate-900">Inquiry Sent Successfully!</h4>
                  <p className="text-xs dark:text-slate-300 text-slate-600 max-w-md mx-auto">
                    Thank you, {formData.name}. Mahanth has received your note regarding the <strong>{formData.roleInterest}</strong> role and will respond promptly via <strong>{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', company: '', roleInterest: 'Scrum Master', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-semibold dark:bg-slate-800 bg-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 dark:text-slate-200 text-slate-800"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium dark:text-slate-300 text-slate-700">Your Full Name *</label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 text-xs dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 shadow-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium dark:text-slate-300 text-slate-700">Your Work Email *</label>
                      <input
                        id="contact-email-input"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 text-xs dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium dark:text-slate-300 text-slate-700">Company / Organization</label>
                      <input
                        id="contact-company-input"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. TechCorp Solutions"
                        className="w-full px-3.5 py-2.5 rounded-xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 text-xs dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 shadow-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium dark:text-slate-300 text-slate-700">Role Focus</label>
                      <select
                        id="contact-role-select"
                        value={formData.roleInterest}
                        onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 text-xs dark:text-white text-slate-900 focus:outline-none focus:border-cyan-500/50 shadow-sm"
                      >
                        <option value="Scrum Master">Scrum Master Role</option>
                        <option value="Senior Power BI Developer">Senior Power BI Developer</option>
                        <option value="Senior ETL / Talend Architect">Senior ETL / Talend Architect</option>
                        <option value="Agile Coach & BI Lead">Agile Coach & BI Lead</option>
                        <option value="Consulting / Advisory">Contract / Consulting</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium dark:text-slate-300 text-slate-700">Message / Opportunity Overview *</label>
                    <textarea
                      id="contact-message-input"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Mahanth, we came across your portfolio and would like to discuss our open role..."
                      className="w-full px-3.5 py-2.5 rounded-xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 text-xs dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 shadow-sm"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 active:scale-95 transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Transmitting Note...' : 'Send Message to Sai Mahanth'}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: AI Assistant for Recruiters */}
          <div className="lg:col-span-5 space-y-4">
            <RecruiterAIAssistant 
              onOpenResume={onOpenResume} 
              onOpenContact={() => {
                const formEl = document.getElementById('contact-name-input');
                formEl?.focus();
              }} 
            />
          </div>

        </div>

      </div>
    </section>
  );
};
