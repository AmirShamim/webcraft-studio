import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Al Astoora and how does the intake infrastructure platform work?',
    answer:
      'Al Astoora is a B2B SaaS infrastructure company providing enterprise-grade conversational AI and automated document intake for professional services (legal, accounting, tax, immigration, corporate secretarial). Built directly on Meta’s Official Cloud API, our platform ingests client PDFs, images, and KYC paperwork via WhatsApp, validates submissions in real time, and routes structured data into your CRM, database, or case management system.',
  },
  {
    question: 'How does Al Astoora streamline document intake for professional service firms?',
    answer:
      'Our proprietary intake engine automates multi-step onboarding workflows. Instead of billable partners and associates manually chasing clients over fragmented email threads, Al Astoora triggers automated document collection checklists, verifies files, and pushes organized records into your backend database in under 2 seconds.',
  },
  {
    question: 'How does Al Astoora integrate with our existing CRMs, ERPs, and cloud storage?',
    answer:
      'We provide enterprise webhooks and REST API endpoints that push collected documents and client data directly into your firm’s CRM, document management system, cloud storage (Google Drive, OneDrive, AWS S3), or ERP (Salesforce, HubSpot, Xero, Quickbooks, custom SQL).',
  },
  {
    question: 'Is client data and document transfer secure and compliant?',
    answer:
      'Yes. All document transmissions through Meta’s Official Cloud API ecosystem use 256-bit SSL encryption. We enforce a strict Zero-Data Training Policy: client paperwork, passports, and financial records are never used to train public AI models. Data is processed through enterprise Google Cloud Platform (GCP) and Firestore with complete data isolation.',
  },
  {
    question: 'What is the pricing model and how does ownership work?',
    answer:
      'We believe in transparent, predictable pricing without predatory vendor lock-in. Our model consists of a one-time onboarding & architecture setup (which covers Meta business verification, display name approval, custom intake pipelines, and webhook setup) plus an ongoing monthly managed retainer for cloud infrastructure hosting on GCP, continuous uptime monitoring, and workflow maintenance.',
  },
  {
    question: 'What professional service verticals are supported by Al Astoora?',
    answer:
      'Al Astoora is engineered for document-heavy professional industries including Corporate Secretarial (incorporation & signature routing), Immigration & Visa Advisory (KYC & passport verification), Accounting & Tax (quarterly financial form ingestion), and Employment Agencies (candidate resume screening & interview scheduling).',
  },
  {
    question: 'How does Al Astoora reclaim lost administrative capacity for professional firms?',
    answer:
      'Professional firms lose 5 to 20 hours per staff member weekly on manual document follow-ups. By replacing manual email chains with automated WhatsApp intake routing, Al Astoora automates repetitive follow-up cycles, allowing senior partners and associates to focus strictly on client advisory.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-slate-950 py-20 md:py-28 overflow-hidden border-t border-slate-900">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-emerald-500/[0.02] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-4xl px-5 md:px-8">
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <HelpCircle className="h-3.5 w-3.5" />
            Infrastructure FAQ
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our enterprise B2B document intake engine, Meta Cloud API security, integrations, and platform licensing.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group border border-slate-900 bg-slate-900/20 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden [&[open]]:bg-slate-900/30 [&[open]]:border-emerald-500/20"
            >
              <summary className="flex items-center justify-between font-semibold text-white cursor-pointer select-none list-none gap-4">
                <span className="text-sm sm:text-base">{faq.question}</span>
                <ChevronDown className="h-5 w-5 text-slate-400 transition-transform duration-300 group-open:-rotate-180 shrink-0" />
              </summary>
              <div className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed pt-3 border-t border-slate-900/60">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

