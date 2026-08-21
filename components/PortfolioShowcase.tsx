'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

type PortfolioSite = {
  id: string;
  tabLabel: string;
  websiteName: string;
  category: string;
  summary: string;
  highlights: string[];
};

const portfolioSites: PortfolioSite[] = [
  {
    id: 'corp-sec',
    tabLabel: 'Corporate Secretarial',
    websiteName: 'Incorporation & Signature Routing Engine',
    category: 'Corporate Secretarial & Legal Services',
    summary:
      'Automate company incorporation document intake and signature routing.',
    highlights: [
      'Automated shareholder passport & proof of address request triggers',
      'Instant validation of Memorandum of Association (MoA) signature fields',
      'Direct webhook routing into corporate secretarial registers',
    ],
  },
  {
    id: 'immigration',
    tabLabel: 'Immigration & Visa',
    websiteName: 'Immigration Document Intake Pipeline',
    category: 'Immigration & Visa Advisory',
    summary:
      'Seamlessly collect, categorize, and verify client passports, IDs, and financial records.',
    highlights: [
      'Multi-document intake checklists for visa and residency applicants',
      'Automated OCR document status checks and verification receipts',
      'Secure encrypted routing directly into firm case files',
    ],
  },
  {
    id: 'accounting',
    tabLabel: 'Accounting & Tax',
    websiteName: 'Quarterly Tax Ingestion Infrastructure',
    category: 'Accounting & Tax Advisory Firms',
    summary:
      'Securely request and ingest quarterly tax forms directly into your firm’s database.',
    highlights: [
      'Automated deadline reminders sent directly via official WhatsApp API',
      'Direct ingestion of P&L spreadsheets, balance sheets, and VAT receipts',
      'Real-time API sync with Xero, Quickbooks, or proprietary ERPs',
    ],
  },
  {
    id: 'employment',
    tabLabel: 'Employment Agencies',
    websiteName: 'Candidate Screening & Resume Intake',
    category: 'Executive Search & Staffing Agencies',
    summary:
      'Automate candidate screening, resume collection, and initial interview scheduling.',
    highlights: [
      'WhatsApp-native qualification survey for fast candidate filtering',
      'Resume PDF ingestion and instant candidate profile compilation',
      'Automated interview slot selection synced with recruiter calendars',
    ],
  },
];

type SimulationChat = {
  sender: 'user' | 'bot';
  text: string;
  actions?: string[];
};

const chatSimulations: Record<string, SimulationChat[]> = {
  'corp-sec': [
    { sender: 'user', text: 'We need to initiate company incorporation for ACME Holdings.' },
    { sender: 'bot', text: 'Welcome! Please upload the Passport copies and Address proofs for all directors below.' },
    { sender: 'user', text: 'Uploaded 2 Passport PDFs and utility bill proof.' },
    { sender: 'bot', text: 'Documents verified! Draft MoA generated and sent for digital signature.', actions: ['View Draft MoA PDF', 'Confirm Board Signers'] },
  ],
  immigration: [
    { sender: 'user', text: 'Submitting Golden Visa documents for family application.' },
    { sender: 'bot', text: 'Please upload bank statements for the last 6 months and main applicant passport bio-page.' },
    { sender: 'user', text: 'Bank_Statement_6Mo.pdf uploaded.' },
    { sender: 'bot', text: 'Passports and bank records verified! Application package routed to your case officer.', actions: ['Track Case Status', 'Download Receipt'] },
  ],
  accounting: [
    { sender: 'user', text: 'Here are our Q3 financial statements for corporate tax filing.' },
    { sender: 'bot', text: 'Received Q3 Financials PDF. Please upload your VAT return summary file to complete intake.' },
    { sender: 'user', text: 'VAT_Q3_Summary.pdf attached.' },
    { sender: 'bot', text: 'Tax intake complete! Files securely ingested into firm database.', actions: ['View Ingested Files', 'Schedule Advisor Call'] },
  ],
  employment: [
    { sender: 'user', text: 'Applying for the Senior Tax Consultant position.' },
    { sender: 'bot', text: 'Great! Please upload your updated Resume/CV PDF to initiate qualification screening.' },
    { sender: 'user', text: 'Resume_2026.pdf uploaded.' },
    { sender: 'bot', text: 'Resume parsed! You qualify for Stage 1 interview. Pick a time below.', actions: ['Select Interview Slot', 'View Job Description'] },
  ],
};

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<string>('corp-sec');

  const selectedSite = portfolioSites.find((site) => site.id === activeTab) ?? portfolioSites[0];
  const activeChat = chatSimulations[activeTab] ?? chatSimulations['corp-sec'];

  return (
    <section id="portfolio" className="bg-slate-950 py-20 md:py-28 relative overflow-hidden border-t border-slate-900">
      
      {/* Lights */}
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-emerald-500/[0.04] blur-[100px] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
            Industry Solutions
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Scalable Infrastructure for Document-Heavy Workflows
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Discover how high-value professional service industries leverage Al Astoora&apos;s Meta Cloud API intake engine to automate complex client document collection.
          </p>
        </div>

        {/* Tab controls - Horizontal list scrollable on mobile */}
        <div className="flex overflow-x-auto pb-4 gap-2 border-b border-slate-900 scrollbar-none snap-x snap-mandatory justify-start sm:justify-center">
          {portfolioSites.map((site) => {
            const isActive = site.id === activeTab;
            return (
              <button
                key={site.id}
                onClick={() => setActiveTab(site.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all cursor-pointer snap-start ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {site.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Grid */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] mt-12 items-center">
          
          {/* Details Column */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSite.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div>
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                  {selectedSite.category}
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {selectedSite.websiteName}
                </h3>
              </div>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {selectedSite.summary}
              </p>

              <div className="space-y-3.5 border-t border-slate-900 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Infrastructure Highlights
                </p>
                <ul className="space-y-3">
                  {selectedSite.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5">
                        <Check className="h-3.5 w-3.5 font-bold" />
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <a
                  href={`https://wa.me/919289581053?text=Hi%20Al%20Astoora%20Team%2C%20I%20want%20to%20deploy%20the%20${encodeURIComponent(selectedSite.tabLabel)}%20intake%20infrastructure`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="whatsapp_clicked"
                  data-analytics-label={`portfolio_${selectedSite.id}_whatsapp_request`}
                  data-analytics-location="portfolio_showcase"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
                >
                  <span>Deploy this workflow via WhatsApp</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Chat Simulation Column */}
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSite.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-[310px] h-[500px] rounded-[36px] border-8 border-slate-900 bg-slate-950 shadow-2xl flex flex-col overflow-hidden"
              >
                {/* Phone Header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center gap-2.5 shrink-0">
                  <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">
                    AA
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Al Astoora Intake Engine</p>
                    <p className="text-xs text-emerald-400 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Auto-intake active
                    </p>
                  </div>
                </div>

                {/* Simulated Messages Screen */}
                <div className="flex-1 p-3 bg-slate-950 overflow-y-auto space-y-3 flex flex-col justify-end">
                  {activeChat.map((msg, index) => {
                    const isBot = msg.sender === 'bot';
                    return (
                      <div
                        key={index}
                        className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} w-full`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                            isBot
                              ? 'bg-slate-900 border border-slate-800 text-slate-100 rounded-bl-sm'
                              : 'bg-emerald-500 text-slate-950 font-semibold rounded-br-sm'
                          }`}
                        >
                          {msg.text}

                          {msg.actions && (
                            <div className="mt-2.5 space-y-1.5 border-t border-slate-800 pt-2">
                              {msg.actions.map((act, actIdx) => (
                                <div
                                  key={actIdx}
                                  className="flex items-center justify-center gap-1.5 rounded-lg bg-slate-950 border border-slate-800 px-2.5 py-1 text-xs font-medium text-emerald-400 cursor-pointer"
                                >
                                  {act}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Phone Bottom Input */}
                <div className="p-2.5 bg-slate-900 border-t border-slate-800/80 flex items-center gap-2 shrink-0">
                  <div className="flex-1 bg-slate-950 border border-slate-800/50 rounded-full py-1 px-3 text-xs text-slate-500">
                    Document intake mode...
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

