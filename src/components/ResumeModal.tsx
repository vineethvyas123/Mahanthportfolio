import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Briefcase, 
  Calendar,
  Building2,
  Sparkles
} from 'lucide-react';
import { personalInfo, experiences, skillCategories, certifications, awards, coreCompetenciesList } from '../data/portfolioData';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
SAI MAHANTH MADA
Scrum Master & Senior Software Developer / Senior Power BI Developer
Phone: ${personalInfo.phone} | Email: ${personalInfo.email} | Location: ${personalInfo.location}

CAREER OBJECTIVE:
${personalInfo.careerObjective}

PROFILE SUMMARY:
${personalInfo.about}

WORK EXPERIENCE:
1. ${experiences[0].company} (${experiences[0].parentCompany}) | ${experiences[0].period}
Role: ${experiences[0].role} | Project: ${experiences[0].project}
Key Highlights:
${experiences[0].highlights.map(h => `- ${h}`).join('\n')}

2. ${experiences[1].company} | ${experiences[1].period}
Role: ${experiences[1].role} | Project: ${experiences[1].project}
Key Highlights:
${experiences[1].highlights.map(h => `- ${h}`).join('\n')}

3. ${experiences[2].company} | ${experiences[2].period}
Role: ${experiences[2].role} | Project: ${experiences[2].project}
Key Highlights:
${experiences[2].highlights.map(h => `- ${h}`).join('\n')}

CERTIFICATIONS:
${certifications.map(c => `- ${c.name} (${c.issuer})`).join('\n')}

AWARDS:
${awards.map(a => `- ${a.title} (${a.organization})`).join('\n')}

EDUCATION:
${personalInfo.education.degree} - ${personalInfo.education.institution} (${personalInfo.education.year})
`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    try {
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 } });
    } catch {}
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div 
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4"
    >
      <div className="relative w-full max-w-4xl dark:bg-slate-900 bg-white rounded-3xl border dark:border-slate-700 border-slate-300 shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]">
        
        {/* Top Action Header */}
        <div className="p-4 sm:p-5 dark:bg-slate-950 bg-slate-50 border-b dark:border-slate-800 border-slate-200 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl dark:bg-cyan-500/10 bg-cyan-100 dark:text-cyan-400 text-cyan-800 border dark:border-cyan-500/20 border-cyan-200">
              <Briefcase className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base font-heading font-bold dark:text-white text-slate-900">Sai Mahanth Mada - Resume</h3>
              <p className="text-xs dark:text-slate-400 text-slate-500">Official Curriculum Vitae & Qualifications</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-modal-copy-btn"
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl dark:bg-slate-800 bg-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 text-xs font-semibold dark:text-slate-200 text-slate-800 border dark:border-slate-700 border-slate-300 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-cyan-500" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              id="resume-modal-print-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-xs font-bold text-slate-950 shadow-md shadow-cyan-500/20 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-xl dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-slate-900 dark:hover:bg-slate-800 hover:bg-slate-100 transition-all ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 dark:bg-slate-950/70 bg-white dark:text-slate-200 text-slate-800 text-xs sm:text-sm">
          
          {/* Header */}
          <div className="border-b dark:border-slate-800 border-slate-200 pb-6 text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-heading font-extrabold dark:text-white text-slate-900 uppercase tracking-wider">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs dark:text-slate-400 text-slate-600 pt-2 font-mono">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-500" /> {personalInfo.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-500" /> {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" /> {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Objective */}
          <div className="p-4 rounded-xl dark:bg-slate-900 bg-slate-50 border dark:border-slate-800 border-slate-200 space-y-1">
            <h2 className="font-heading font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider text-xs">Career Objective</h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed">{personalInfo.careerObjective}</p>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="font-heading font-bold dark:text-white text-slate-900 uppercase tracking-wider text-sm border-b dark:border-slate-800 border-slate-200 pb-1.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-500" />
              <span>Profile Summary</span>
            </h2>
            <div className="space-y-2 dark:text-slate-300 text-slate-700 leading-relaxed">
              <p>• Accomplished IT professional with over 7 years of expertise in Power BI Analytics, ETL Development, and Agile frameworks, delivering sophisticated data solutions and driving digital transformation.</p>
              <p>• Spearheading Scrum Master and Senior Software Developer at HARMAN Connected Services (SAMSUNG), orchestrating cross-functional teams to enhance productivity and ensure seamless delivery of high-quality software products.</p>
              <p>• Dynamic Scrum Master & Power BI Developer with expertise in agile project facilitation & designing data visualizations that drive strategic decision-making and team productivity.</p>
              <p>• Mastery in Agile Methodologies, ETL Architecture, & Business Intelligence, enabling organizational agility and cultivating high-performance teams to achieve strategic goals.</p>
              <p>• Drove substantial improvements in sprint delivery and team efficiency through strategic Backlog Prioritization, increasing adherence to Sprint Goal timelines and project milestones.</p>
              <p>• Exemplify exceptional leadership and communication skills, expert at conflict resolution and nurturing collaborative environments that elevate team cohesion and engagement.</p>
              <p>• Possess deep expertise in AWS cloud services, optimizing data processing pipelines and analytics workflow to maximize operational scalability and business value.</p>
              <p>• Skilled in designing dynamic Power BI dashboards that facilitate insightful data-driven decisions, substantially boosting stakeholder engagement and actionable intelligence.</p>
              <p>• Spearheaded migration of Talend workflow to a Cloud Data Warehouse, ensuring data accuracy and performance optimization, leading to a measurable uplift in operational efficiency.</p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="font-heading font-bold dark:text-white text-slate-900 uppercase tracking-wider text-sm border-b dark:border-slate-800 border-slate-200 pb-1.5 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-500" />
              <span>Work Experience</span>
            </h2>

            {experiences.map((exp) => (
              <div key={exp.id} className="p-5 rounded-2xl dark:bg-slate-900/60 bg-slate-50 border dark:border-slate-800 border-slate-200 space-y-3 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b dark:border-slate-800/80 border-slate-200 pb-2">
                  <div>
                    <h3 className="font-heading font-bold dark:text-white text-slate-900 text-base">{exp.role}</h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium text-xs">
                      {exp.company} {exp.parentCompany && `(${exp.parentCompany})`}, {exp.location}
                    </p>
                  </div>
                  <div className="text-xs dark:text-slate-400 text-slate-600 font-mono">
                    {exp.period}
                  </div>
                </div>

                <div className="text-xs dark:text-slate-400 text-slate-600 font-semibold">
                  Project: <span className="dark:text-white text-slate-900">{exp.project}</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <p className="font-semibold dark:text-slate-300 text-slate-700 text-xs">Key Highlights & Accomplishments:</p>
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 dark:text-slate-300 text-slate-700 text-xs">
                      <span className="text-cyan-500 font-bold">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Competencies & Technical Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-3">
              <h2 className="font-heading font-bold dark:text-white text-slate-900 uppercase tracking-wider text-sm border-b dark:border-slate-800 border-slate-200 pb-1.5">
                Technical Skills
              </h2>
              <div className="space-y-2 text-xs">
                <p><strong className="text-cyan-600 dark:text-cyan-400">Agile & Project Management:</strong> Scrum, Jira, Asana, Confluence, MoSCoW, WSJF, Kano</p>
                <p><strong className="text-blue-600 dark:text-blue-400">BI & Visualization:</strong> Power BI, DAX, Power Query, Microsoft Excel, Power Pivot</p>
                <p><strong className="text-indigo-600 dark:text-indigo-400">AI & GenAI (Intermediate):</strong> Prompt Engineering, ChatGPT, Microsoft Copilot, Automated Story Slicing, DAX/SQL AI Generation, Be10x Suite (13+ AI Tools)</p>
                <p><strong className="text-purple-600 dark:text-purple-400">ETL Tools:</strong> Talend Data Integration (6.x, 7.x, 8.x), TAC, tMap, SCD 1/2/3/6</p>
                <p><strong className="text-sky-600 dark:text-sky-400">Cloud Platforms:</strong> AWS (S3, EC2, DynamoDB, Athena, RedShift), Google Cloud Platform (GCP)</p>
                <p><strong className="text-emerald-600 dark:text-emerald-400">Databases:</strong> Oracle SQL Developer, SQL Server, Teradata, PostgreSQL, MySQL, Hive, SSAS, SSMS, SSDT</p>
                <p><strong className="text-slate-500 dark:text-slate-400">OS & Scheduling:</strong> Linux, UNIX, Windows, Control-M, TAC</p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-bold dark:text-white text-slate-900 uppercase tracking-wider text-sm border-b dark:border-slate-800 border-slate-200 pb-1.5">
                Certifications & Awards
              </h2>
              <div className="space-y-2 text-xs">
                <p><strong className="text-amber-600 dark:text-amber-400">Certifications:</strong></p>
                {certifications.map(c => (
                  <p key={c.id} className="dark:text-slate-300 text-slate-700">• {c.name} ({c.issuer})</p>
                ))}
                <p className="pt-2"><strong className="text-amber-600 dark:text-amber-400">Enterprise Awards:</strong></p>
                {awards.map(a => (
                  <p key={a.id} className="dark:text-slate-300 text-slate-700">• {a.title} - {a.organization}</p>
                ))}
              </div>
            </div>

          </div>

          {/* Education & Personal Details */}
          <div className="p-4 rounded-xl dark:bg-slate-900 bg-slate-50 border dark:border-slate-800 border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <p className="font-bold dark:text-white text-slate-900">Education:</p>
              <p className="dark:text-slate-300 text-slate-700">{personalInfo.education.degree}</p>
              <p className="dark:text-slate-400 text-slate-600">{personalInfo.education.institution} ({personalInfo.education.year})</p>
            </div>
            <div>
              <p className="font-bold dark:text-white text-slate-900">Personal Details:</p>
              <p className="dark:text-slate-300 text-slate-700">Date of Birth: {personalInfo.dob}</p>
              <p className="dark:text-slate-400 text-slate-600">Languages: {personalInfo.languages.join(', ')}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
