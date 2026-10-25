'use client';

import { useState } from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';

const faqs = [
  {
    q: 'How does Al Astoora guarantee zero data retention for attorney-client privileged documents?',
    a: 'All client document intake pipelines execute strictly inside volatile RAM buffers within isolated Nitro Enclaves. Once the OCR classification, schema extraction, or brief synthesis is pushed to your firm’s verified webhook endpoint or private DMS, the memory buffer is cryptographically zeroed. No document files, images, or extracted text are stored on persistent disks or retained on Al Astoora servers.',
  },
  {
    q: 'How do domain-tuned Legal SLMs eliminate hallucinations in court briefs and evidentiary filings?',
    a: 'Traditional LLMs hallucinate case citations because they generate tokens statistically. Al Astoora uses Retrieval-Augmented Fine-Tuning (RAFT) paired with Small Language Models (SLMs) trained specifically on legal taxonomies and court record structures. The model is mathematically locked to cite only verified page, line, and docket references within the supplied case file. If a fact cannot be proven from the evidentiary record, the model explicitly flags it as unsupported.',
  },
  {
    q: 'Can clients submit confidential documents via WhatsApp without breaching ethical confidentiality rules?',
    a: 'Yes. Al Astoora connects exclusively through Meta’s Official WhatsApp Cloud API—not unauthorized QR-code web scrapers. All transmissions utilize 256-bit SSL transport encryption. For ultra-sensitive matters or clients who prefer browser intake, Al Astoora provides parallel encrypted web client portals with client-side zero-knowledge encryption.',
  },
  {
    q: 'Can we deploy Al Astoora inside our firm’s own dedicated private VPC or single-tenant environment?',
    a: 'Yes. On our Enterprise plan, we deploy containerized single-tenant infrastructure directly within your firm’s private Virtual Private Cloud (VPC) or provision a dedicated sovereign VPC managed under strict Business Associate Agreements (BAA) and compliance SLAs.',
  },
  {
    q: 'Which practice management systems and legal document management systems (DMS) do you integrate with?',
    a: 'We provide out-of-the-box webhooks and REST API connectors for Clio, Filevine, NetDocuments, iManage, Salesforce, Google Drive, OneDrive, and custom legal databases. Extracted JSON schemas map directly into your firm’s custom matter fields.',
  },
  {
    q: 'What is included in the 14-Day Free Pilot?',
    a: 'The pilot provides full access to the Growth workspace tier: up to 500 document processing runs, WhatsApp omnichannel intake pipeline setup, fine-tuned legal SLM queries, and technical onboarding assistance to connect your first practice workflow.',
  },
];

export default function FAQ({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const HeadingTag = headingLevel;

  return (
    <section id="faq" className="border-t border-[var(--st)] bg-white py-16 md:py-24">
      <div className="site-container">
        {/* Section Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className="h-[1px] w-36"
              style={{
                background: 'radial-gradient(circle, #6366f1 0%, transparent 100%)',
              }}
              aria-hidden="true"
            />
            <span className="text-xs font-semibold uppercase tracking-[2px] text-[var(--sr-indigo)]">
              Legal Practitioner FAQ
            </span>
            <div
              className="h-[1px] w-36"
              style={{
                background: 'radial-gradient(circle, #6366f1 0%, transparent 100%)',
              }}
              aria-hidden="true"
            />
          </div>

          <HeadingTag className="mt-5 text-3xl font-semibold tracking-tight text-[var(--tx)] sm:text-4xl md:text-5xl">
            Frequently Asked Questions.
          </HeadingTag>
          <p className="mt-4 text-base leading-relaxed text-[var(--tx-secondary)] sm:text-lg">
            Essential answers on legal privilege, zero data retention, and integration standards for managing partners and legal operations.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-[var(--st)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-4 text-left font-medium text-[var(--tx)] hover:text-[var(--sr-indigo)] focus-visible:outline-2 focus-visible:outline-[var(--sr-indigo)]"
                >
                  <span className="text-base font-semibold sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`mt-1 h-5 w-5 shrink-0 text-[var(--tx-tertiary)] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[var(--sr-indigo)]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm leading-relaxed text-[var(--tx-secondary)] sm:text-base">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
