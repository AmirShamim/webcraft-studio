'use client';

import { useState } from 'react';
import { Check, ArrowRight, MessageSquare } from 'lucide-react';

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
    websiteName: 'Company incorporation.',
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
    websiteName: 'Visa & residency intake.',
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
    websiteName: 'Quarterly tax intake.',
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
    websiteName: 'Candidate screening.',
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
    <section id="portfolio" className="border-t border-[var(--line)] bg-[var(--paper)] py-16 text-[var(--ink)] md:py-24">
      <div className="site-container">
        <div className="reveal mb-12 grid gap-6 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <div>
            <span className="section-label">Industry workflows</span>
            <h2 className="section-title mt-5">Different practices.<br /><span className="italic text-[var(--accent)]">The same care.</span></h2>
          </div>
          <p className="max-w-md self-end text-sm leading-7 text-[var(--muted)] sm:text-base">
            Every practice has its own paperwork, decisions, and handoffs. A connected workflow should respect those differences.
          </p>
        </div>
        <div role="tablist" aria-label="Industry workflows" className="grid grid-cols-2 border-l border-t border-[var(--line)] md:grid-cols-4">
          {portfolioSites.map((site, index) => {
            const isActive = site.id === activeTab;
            return (
              <button
                key={site.id}
                type="button"
                role="tab"
                id={`industry-tab-${site.id}`}
                aria-controls={`industry-panel-${site.id}`}
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(site.id)}
                onKeyDown={(event) => {
                  let nextIndex = index;
                  if (event.key === 'ArrowRight') nextIndex = (index + 1) % portfolioSites.length;
                  else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + portfolioSites.length) % portfolioSites.length;
                  else if (event.key === 'Home') nextIndex = 0;
                  else if (event.key === 'End') nextIndex = portfolioSites.length - 1;
                  else return;
                  event.preventDefault();
                  setActiveTab(portfolioSites[nextIndex].id);
                  const nextTab = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex];
                  nextTab?.focus();
                }}
                className={`flex min-h-[92px] cursor-pointer flex-col justify-between gap-3 border-b border-r border-[var(--line)] px-4 py-4 text-left text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[var(--accent)] sm:px-5 sm:text-sm ${
                  isActive
                    ? 'bg-[var(--highlight)] text-[var(--ink)]'
                    : 'text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--ink)]'
                }`}
              >
                <span className="flex w-full items-center justify-between text-caption tabular-nums" aria-hidden="true">0{index + 1}<ArrowRight className={`h-4 w-4 ${isActive ? 'opacity-100' : 'opacity-40'}`} /></span>
                <span>{site.tabLabel}</span>
              </button>
            );
          })}
        </div>

        <div role="tabpanel" id={`industry-panel-${selectedSite.id}`} aria-labelledby={`industry-tab-${selectedSite.id}`} tabIndex={0} className="grid items-start gap-10 py-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] lg:min-h-[600px] lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:py-12">
          <div className="min-w-0 space-y-6 lg:pt-3">
              <div>
                <p className="text-caption font-semibold uppercase text-[var(--muted)]">
                  {selectedSite.category}
                </p>
                <h3 className="display-serif mt-4 max-w-lg text-[28px] leading-[1.2] sm:text-[32px]">
                  {selectedSite.websiteName}
                </h3>
              </div>

              <p className="text-sm leading-7 text-[var(--muted)]">
                {selectedSite.summary}
              </p>

              <div className="space-y-4 border-t border-[var(--line)] pt-6">
                <p className="text-xs font-semibold text-[var(--muted)]">
                  Workflow scope
                </p>
                <ul className="space-y-4">
                  {selectedSite.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm leading-7">
                      <Check aria-hidden="true" className="mt-1.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <a
                  href="/contact"
                  data-analytics-event="primary_cta_clicked"
                  data-analytics-label={`portfolio_${selectedSite.id}_framework_request`}
                  data-analytics-location="portfolio_showcase"
                  className="group inline-flex min-h-11 items-center gap-3 border-b border-[var(--ink)] pb-2 text-sm font-semibold transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  Discuss this workflow
                  <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </a>
              </div>
            </div>
            <figure className="min-w-0 bg-[var(--blue)]">
              <figcaption className="flex flex-wrap items-center justify-between gap-3 bg-[var(--night)] px-5 py-5 text-xs text-[var(--paper)] sm:px-7">
                <span className="flex items-center gap-2 font-semibold"><MessageSquare className="h-4 w-4 text-[var(--highlight)]" aria-hidden="true" />An example conversation</span>
                <span className="text-white/65">Illustrative workflow</span>
              </figcaption>
              <ol className="divide-y divide-black/10 px-5 sm:px-7">
                {activeChat.map((message, index) => (
                  <li key={`${selectedSite.id}-${index}`} className="grid grid-cols-[44px_minmax(0,1fr)] gap-3 py-6 text-sm leading-6 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-4">
                    <span className={`text-xs font-semibold ${message.sender === 'bot' ? 'text-[var(--accent)]' : 'text-[var(--muted)]'}`}>
                      {message.sender === 'bot' ? 'Intake' : 'Client'}
                    </span>
                    <div className="min-w-0 break-words">
                      <p>{message.text}</p>
                      {message.actions && (
                        <p className="mt-3 border-l-2 border-[var(--accent)] pl-3 text-xs leading-6 text-[var(--muted)]">Next steps: {message.actions.join(' / ')}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </figure>
        </div>
        <p className="border-t border-[var(--line)] pt-5 text-xs leading-6 text-[var(--muted)]">Illustrative industry workflows, not client projects. Integrations and validation rules depend on the agreed scope.</p>
      </div>
    </section>
  );
}

