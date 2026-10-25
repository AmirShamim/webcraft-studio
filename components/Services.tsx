'use client';

import {
  MessageSquareCode,
  ScanText,
  BrainCircuit,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Database,
  Lock,
} from 'lucide-react';
import Link from 'next/link';

const pillars = [
  {
    num: '01',
    icon: MessageSquareCode,
    title: 'Autonomous Omnichannel Intake (WhatsApp & Web Portal)',
    description:
      'Automatically collect, verify, and chase client documentation via self-serve WhatsApp pipelines and encrypted upload portals—returning hundreds of billable hours to your firm.',
    badges: [
      'Meta Official Cloud API',
      'Encrypted Web Upload Portal',
      'Automated KYC Reminders',
      'Direct CRM Webhooks',
    ],
    architectureHighlight:
      'End-to-end 256-bit SSL encrypted pipelines with automated signature validation and client WhatsApp routing.',
  },
  {
    num: '02',
    icon: ScanText,
    title: 'Vision OCR & Intelligent Document Processing (IDP)',
    description:
      'Automatically upscale skewed mobile captures, classify multi-page legal PDFs, and extract structured JSON schemas with ephemeral, zero-data-retention processing pipelines.',
    badges: [
      'Skew & Contrast Normalization',
      'Contract Multi-Page Classification',
      'Structured JSON Extraction',
      'Instant Memory Buffer Purge',
    ],
    architectureHighlight:
      'RAM-only ephemeral image processing that guarantees zero document retention on server disks.',
  },
  {
    num: '03',
    icon: BrainCircuit,
    title: 'Fine-Tuned Legal SLMs & RAFT Reasoning',
    description:
      'Query case files, cross-examine evidentiary records, and generate citation-locked legal briefs using domain-fine-tuned Small Language Models engineered for zero hallucinations.',
    badges: [
      'Domain QLoRA Model Adapters',
      'RAFT (Retrieval-Augmented Fine-Tuning)',
      'Line-Level Citation Locking',
      'Court Record Verification',
    ],
    architectureHighlight:
      '100% citation-grounded outputs that reject unverified claims and cite exact evidentiary pages.',
  },
];

export default function Services() {
  return (
    <section id="features" className="relative border-t border-[var(--st)] bg-white py-16 md:py-24">
      <div className="site-container">
        {/* Section Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className="h-[1px] w-40"
              style={{
                background: 'radial-gradient(circle, #ea580c 0%, transparent 100%)',
              }}
              aria-hidden="true"
            />
            <span className="text-xs font-semibold uppercase tracking-[2px] text-[var(--sr-terracotta)]">
              Core Platform Architecture
            </span>
            <div
              className="h-[1px] w-40"
              style={{
                background: 'radial-gradient(circle, #ea580c 0%, transparent 100%)',
              }}
              aria-hidden="true"
            />
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--tx)] sm:text-4xl md:text-5xl">
            Three Pillars Built for Legal Rigor &amp; Zero Retention.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--tx-secondary)] sm:text-lg">
            Engineered from the ground up to satisfy stringent enterprise cloud security benchmarks and legal privilege ethics.
          </p>
        </div>

        {/* The 3 Architectural Pillar Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.num}
              className="arch-card relative flex flex-col justify-between overflow-hidden p-6 sm:p-8"
            >
              {/* Top Accent Gradient Border */}
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--sr-indigo)] to-[var(--sr-terracotta)] opacity-80"
                aria-hidden="true"
              />

              <div>
                {/* Header with Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--sr-terracotta)]">
                    Pillar {pillar.num}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-[var(--sr-indigo)]">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Pillar Title */}
                <h3 className="mt-6 text-xl font-semibold leading-snug tracking-tight text-[var(--tx)]">
                  {pillar.title}
                </h3>

                {/* Exact Pillar Copy */}
                <p className="mt-3 text-sm leading-relaxed text-[var(--tx-secondary)]">
                  {pillar.description}
                </p>

                {/* Feature Tags */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {pillar.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-md border border-slate-200 bg-[var(--sf-secondary)] px-2.5 py-1 text-[11px] font-medium text-slate-700"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Guarantee Footer */}
              <div className="mt-8 border-t border-[var(--st)] pt-5">
                <div className="flex items-start gap-2.5 text-xs text-[var(--tx-secondary)]">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{pillar.architectureHighlight}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Architecture CTA Link */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50/60 via-slate-50 to-orange-50/40 p-6 sm:p-8">
          <div>
            <h4 className="text-base font-semibold text-[var(--tx)] sm:text-lg">
              Need custom model weights or dedicated private cloud deployment?
            </h4>
            <p className="mt-1 text-xs text-[var(--tx-secondary)] sm:text-sm">
              We provide single-tenant dedicated deployments and custom QLoRA adapter training for proprietary case taxonomies.
            </p>
          </div>
          <Link
            href="/login"
            className="btn-sarvam-primary shrink-0 !text-xs !font-semibold"
          >
            Review Zero-Retention Architecture <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
