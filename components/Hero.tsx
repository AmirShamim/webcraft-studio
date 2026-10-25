'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  FileText,
  ScanText,
  CheckCircle2,
  Lock,
  Cpu,
  Layers,
  Search,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'intake' | 'vision' | 'slm'>('intake');

  return (
    <section className="relative overflow-hidden bg-[var(--sf)] pt-10 pb-16 md:pt-14 md:pb-24">
      {/* Sarvam AI Signature Ambient Radial Blurs */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 opacity-40 blur-[100px] md:h-[600px] md:w-[1000px] md:opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(165, 187, 252, 0.45) 0%, rgba(213, 226, 255, 0.25) 45%, rgba(254, 215, 170, 0.15) 65%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="site-container relative">
        {/* Top Centered Section Header */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Sarvam-style Architectural Badge with Hairline Radial Dividers */}
          <div className="flex flex-col items-center gap-1.5">
            <div
              className="h-[1px] w-48 sm:w-64"
              style={{
                background: 'radial-gradient(circle, #6366f1 0%, transparent 100%)',
              }}
              aria-hidden="true"
            />
            <div className="flex items-center gap-2 rounded-full border border-indigo-100 bg-white/90 px-4 py-1 shadow-[0_1px_4px_rgba(0,0,0,0.03)] backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-[var(--sr-terracotta)] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[1.5px] text-[var(--sr-indigo-dark)]">
                Enterprise Legal AI &amp; Document Intelligence SaaS
              </span>
            </div>
            <div
              className="h-[1px] w-48 sm:w-64"
              style={{
                background: 'radial-gradient(circle, #6366f1 0%, transparent 100%)',
              }}
              aria-hidden="true"
            />
          </div>

          {/* H1 Headline */}
          <h1 className="mt-6 text-[36px] font-semibold leading-[1.12] tracking-tight text-[var(--tx)] sm:text-[52px] md:text-[60px] lg:text-[66px]">
            Autonomous Document Intake &amp; Fine-Tuned Legal AI &mdash;{' '}
            <span className="bg-gradient-to-r from-[var(--sr-indigo)] to-[var(--sr-terracotta)] bg-clip-text text-transparent">
              Zero Data Retention.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--tx-secondary)] sm:text-lg md:text-[19px]">
            Eliminate manual data entry and LLM hallucinations. Al Astoora combines automated WhatsApp/Web client document capture, high-precision OCR, and domain-specific Small Language Models (SLMs) engineered for law firms and compliance teams.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href="/login"
              className="btn-sarvam-accent group !px-6 !py-3 !text-[15px]"
            >
              Start 14-Day Pilot{' '}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="#features"
              className="btn-sarvam-secondary group !px-6 !py-3 !text-[15px]"
            >
              View API &amp; Architecture{' '}
              <ArrowDown className="h-4 w-4 text-[var(--tx-secondary)] transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </div>

          {/* Trust Metric Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[var(--tx-tertiary)]">
            <span className="flex items-center gap-1.5 font-medium text-[var(--tx-secondary)]">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> SOC 2 Type II Aligned
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium text-[var(--tx-secondary)]">
              <Lock className="h-3.5 w-3.5 text-indigo-600" /> Ephemeral RAM Processing
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium text-[var(--tx-secondary)]">
              <CheckCircle2 className="h-3.5 w-3.5 text-amber-600" /> Dedicated Single-Tenant VPC
            </span>
          </div>
        </div>

        {/* Sarvam-Inspired Interactive Legal AI Studio Workbench */}
        <div className="mt-12 md:mt-16">
          <div className="mx-auto max-w-5xl rounded-2xl border border-[var(--st)] bg-white shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)]">
            {/* Studio Navigation Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--st)] bg-[var(--sf-secondary)]/60 px-5 py-3 sm:px-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-400/80" />
                <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-2 font-mono text-xs font-medium text-[var(--tx-tertiary)]">
                  alastoora-legal-studio.vpc:8443
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center rounded-lg border border-[var(--st)] bg-white p-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('intake')}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-all ${
                    activeTab === 'intake'
                      ? 'bg-[var(--tx)] text-white shadow-sm'
                      : 'text-[var(--tx-secondary)] hover:text-[var(--tx)]'
                  }`}
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  Omnichannel Intake
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('vision')}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-all ${
                    activeTab === 'vision'
                      ? 'bg-[var(--tx)] text-white shadow-sm'
                      : 'text-[var(--tx-secondary)] hover:text-[var(--tx)]'
                  }`}
                >
                  <ScanText className="h-3.5 w-3.5" />
                  Vision OCR &amp; IDP
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('slm')}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-all ${
                    activeTab === 'slm'
                      ? 'bg-[var(--tx)] text-white shadow-sm'
                      : 'text-[var(--tx-secondary)] hover:text-[var(--tx)]'
                  }`}
                >
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  RAFT Legal SLM
                </button>
              </div>
            </div>

            {/* Studio Workspace Content */}
            <div className="p-5 sm:p-7 md:p-9">
              {/* TAB 1: Omnichannel Intake */}
              {activeTab === 'intake' && (
                <div className="grid gap-6 md:grid-cols-2 md:gap-10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                        ● WhatsApp Cloud Pipeline Live
                      </span>
                      <span className="font-mono text-xs text-[var(--tx-tertiary)]">Inbound Payload #9482</span>
                    </div>
                    <div className="space-y-2 rounded-xl border border-slate-100 bg-slate-50/70 p-4 font-mono text-xs">
                      <div className="flex items-center justify-between text-slate-500">
                        <span>[10:14:02 AM] Inbound Client Message</span>
                        <span className="text-emerald-600 font-semibold">256-Bit SSL</span>
                      </div>
                      <p className="font-sans text-sm text-slate-800">
                        &quot;Here is the signed non-compete settlement agreement and government photo ID requested for case #2026-CV-881.&quot;
                      </p>
                      <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2">
                        <FileText className="h-4 w-4 text-[var(--sr-indigo)]" />
                        <span className="font-sans text-xs font-medium text-slate-700">Settlement_Agr_Signed.pdf</span>
                        <span className="ml-auto rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-500">2.4 MB</span>
                      </div>
                    </div>
                    <div className="rounded-lg border border-amber-200/70 bg-amber-50/50 p-3 text-xs text-amber-900">
                      <span className="font-semibold">Automated Verification:</span> All signature blocks validated. No unbillable associate follow-up needed.
                    </div>
                  </div>

                  <div className="space-y-3 rounded-xl border border-[var(--st)] bg-[#0c101d] p-5 text-slate-200">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono text-emerald-400">✔ Extracted JSON Schema</span>
                      <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[11px]">Zero-Retention Ephemeral RAM</span>
                    </div>
                    <pre className="overflow-x-auto font-mono text-[12px] leading-5 text-indigo-300">
{`{
  "case_id": "2026-CV-881",
  "document_type": "Settlement_Agreement",
  "signers_verified": [
    { "name": "Elena Vance, Esq.", "status": "VERIFIED" },
    { "name": "Defendant Corp Rep", "status": "VERIFIED" }
  ],
  "jurisdiction": "Southern District of New York",
  "webhook_delivery": "Clio_DMS_Ingested"
}`}
                    </pre>
                    <div className="border-t border-slate-800 pt-3 text-xs text-slate-400">
                      Auto-routed directly into firm litigation folders in 1.4s.
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: Vision OCR & IDP */}
              {activeTab === 'vision' && (
                <div className="grid gap-6 md:grid-cols-2 md:gap-10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                        Skew Correction &amp; Contrast Normalization
                      </span>
                      <span className="font-mono text-xs text-slate-400">99.7% OCR Confidence</span>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-xs font-medium text-slate-600">
                        <span>Input: Skewed Mobile Camera Photo</span>
                        <span className="text-emerald-600">Deskew Angle: +14.2° Fixed</span>
                      </div>
                      <div className="mt-3 space-y-2 text-xs text-slate-700">
                        <div className="rounded bg-white p-2.5 shadow-sm ring-1 ring-slate-100">
                          <p className="font-semibold text-slate-900">Clause 14.3 (Liquidated Damages):</p>
                          <p className="mt-1 text-slate-600">
                            &quot;In the event of uncured material breach, the non-breaching party shall be entitled to liquidated damages calculated at $45,000 per calendar month...&quot;
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      Automatic PII/SSN masking performed before memory buffer release.
                    </div>
                  </div>

                  <div className="space-y-3 rounded-xl border border-[var(--st)] bg-[#0c101d] p-5 text-slate-200">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono text-emerald-400">Classification &amp; Metadata</span>
                      <span className="font-mono text-slate-400">Model: Legal-Vision-7B</span>
                    </div>
                    <pre className="overflow-x-auto font-mono text-[12px] leading-5 text-amber-300">
{`{
  "classification": "Commercial_Lease_Breach",
  "page_count": 18,
  "clause_breakdown": {
    "damages_rate": 45000,
    "cure_period_days": 30,
    "governing_law": "Delaware Chancery"
  },
  "pii_redacted": true,
  "memory_purged_at": "2026-10-25T10:14:03Z"
}`}
                    </pre>
                  </div>
                </div>
              )}

              {/* TAB 3: RAFT Legal SLM */}
              {activeTab === 'slm' && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-semibold text-slate-800">
                        Domain Fine-Tuned SLM (Retrieval-Augmented Fine-Tuning - RAFT)
                      </span>
                    </div>
                    <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
                      Strict Citation-Locking • Zero Hallucinations
                    </span>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <span className="text-xs font-medium text-slate-500">Query Case File Evidentiary Record:</span>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      &quot;Did defendant produce full custodial records prior to the Discovery Cutoff date ordered on March 12, 2026?&quot;
                    </p>
                  </div>

                  <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-5 text-sm leading-relaxed text-slate-800">
                    <div className="mb-2 flex items-center justify-between text-xs font-semibold text-indigo-900">
                      <span>Synthesized Legal Brief Response</span>
                      <span className="rounded bg-indigo-200/60 px-2 py-0.5 font-mono text-[11px] text-indigo-800">
                        100% Citation-Backed
                      </span>
                    </div>
                    <p className="text-slate-800">
                      Defendant did <span className="font-semibold text-rose-700">not</span> produce full custodial records prior to the March 12, 2026 deadline.{' '}
                      <span className="inline-flex cursor-pointer items-center gap-1 rounded bg-indigo-100 px-1.5 py-0.5 font-mono text-xs font-medium text-indigo-800 hover:bg-indigo-200">
                        [Deposition Transcript, Vol. II, pp. 142:12-19]
                      </span>{' '}
                      Defendant specifically withheld Slack audit trails until March 28, violating Pretrial Order #4.{' '}
                      <span className="inline-flex cursor-pointer items-center gap-1 rounded bg-indigo-100 px-1.5 py-0.5 font-mono text-xs font-medium text-indigo-800 hover:bg-indigo-200">
                        [Docket Entry #79, Order Granting Sanctions]
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Studio Footer Status */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--st)] bg-white px-5 py-3 text-xs text-[var(--tx-tertiary)] sm:px-6">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Zero data retained in disk storage &mdash; Ephemeral RAM pipeline
              </span>
              <Link
                href="/login"
                className="font-semibold text-[var(--sr-indigo)] hover:underline"
              >
                Test with your firm&apos;s case files &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Customer & Bar Council Alignment Marquee */}
        <div className="mt-14 border-t border-[var(--st)] pt-10 text-center md:mt-20">
          <p className="text-xs font-semibold uppercase tracking-[2px] text-[var(--tx-tertiary)]">
            Trusted by Litigation Boutiques, Corporate Counsel &amp; Legal Compliance Teams
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-slate-500 sm:gap-14">
            <span className="hover:text-slate-800">AUSTIN &amp; PARTNERS LEGAL</span>
            <span className="hover:text-slate-800">SUMMIT LITIGATION GROUP</span>
            <span className="hover:text-slate-800">GLOBAL COMPLIANCE ADVOCATES</span>
            <span className="hover:text-slate-800">MERCURY IP &amp; CONTRACTS</span>
            <span className="hover:text-slate-800">APEX ARBITRATION CHAMBERS</span>
          </div>
        </div>
      </div>
    </section>
  );
}