'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="relative border-t border-[var(--st)] bg-[var(--sf)] py-16 md:py-24">
      <div className="site-container">
        {/* Section Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className="h-[1px] w-36"
              style={{
                background: 'radial-gradient(circle, #ea580c 0%, transparent 100%)',
              }}
              aria-hidden="true"
            />
            <span className="text-xs font-semibold uppercase tracking-[2px] text-[var(--sr-terracotta)]">
              Transparent SaaS Pricing
            </span>
            <div
              className="h-[1px] w-36"
              style={{
                background: 'radial-gradient(circle, #ea580c 0%, transparent 100%)',
              }}
              aria-hidden="true"
            />
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--tx)] sm:text-4xl md:text-5xl">
            Predictable Plans for Modern Legal Practices.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--tx-secondary)] sm:text-lg">
            No unpredictable hourly consulting or opaque per-seat penalties. Scale by your firm&apos;s monthly document intake and AI reasoning volume.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!annual ? 'text-[var(--tx)]' : 'text-[var(--tx-secondary)]'}`}>
              Monthly
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={annual}
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-300 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sr-indigo)] data-[checked=true]:bg-[var(--sr-indigo)]"
              data-checked={annual}
            >
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  annual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-[var(--tx)]' : 'text-[var(--tx-secondary)]'}`}>
              Annual
            </span>
            <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-700">
              Save 20%
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {/* TIER 1: Starter / Solo Practice */}
          <div className="arch-card flex flex-col justify-between p-7 sm:p-9">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[var(--tx)]">Starter / Solo Practice</h3>
              </div>
              <p className="mt-2 text-xs text-[var(--tx-secondary)]">
                For solo practitioners and boutique firms automating client document capture.
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-mono text-4xl font-bold tracking-tight text-[var(--tx)]">
                  ${annual ? '79' : '99'}
                </span>
                <span className="text-sm font-medium text-[var(--tx-secondary)]">/month</span>
              </div>
              {annual && <p className="mt-1 text-xs text-emerald-600">Billed annually ($948/yr)</p>}

              <ul className="mt-8 space-y-3.5 border-t border-[var(--st)] pt-6 text-sm text-[var(--tx-secondary)]">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span><strong>Up to 500</strong> documents/mo</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span><strong>Automated WhatsApp &amp; Portal Intake</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span><strong>Standard OCR &amp; JSON Extraction</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span><strong>2 Team Seats</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Ephemeral Zero Data Retention Pipeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Email &amp; Community Support</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/login?plan=starter"
                className="btn-sarvam-secondary w-full justify-center !text-sm !font-semibold"
              >
                Start 14-Day Pilot
              </Link>
            </div>
          </div>

          {/* TIER 2: Growth / Litigation Firm (FEATURED) */}
          <div className="arch-card relative flex flex-col justify-between border-2 border-indigo-500 bg-white p-7 shadow-xl sm:p-9">
            {/* Recommended Pill Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--sr-indigo)] to-[var(--sr-terracotta)] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
              Recommended for Law Firms
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[var(--tx)]">Growth / Litigation Firm</h3>
              </div>
              <p className="mt-2 text-xs text-[var(--tx-secondary)]">
                For active litigation teams requiring fine-tuned legal SLMs and brief synthesis.
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-mono text-4xl font-bold tracking-tight text-[var(--tx)]">
                  ${annual ? '239' : '299'}
                </span>
                <span className="text-sm font-medium text-[var(--tx-secondary)]">/month</span>
              </div>
              {annual && <p className="mt-1 text-xs text-emerald-600">Billed annually ($2,868/yr)</p>}

              <ul className="mt-8 space-y-3.5 border-t border-[var(--st)] pt-6 text-sm text-[var(--tx-secondary)]">
                <li className="flex items-start gap-3 text-[var(--tx)] font-medium">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                  <span><strong>Up to 2,500</strong> documents/mo</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--tx)] font-medium">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                  <span><strong>Fine-Tuned Legal SLM Workspace</strong></span>
                </li>
                <li className="flex items-start gap-3 text-[var(--tx)] font-medium">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                  <span><strong>Citation-Backed RAG Briefs</strong></span>
                </li>
                <li className="flex items-start gap-3 text-[var(--tx)] font-medium">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                  <span><strong>CMS Webhook Integrations</strong></span>
                </li>
                <li className="flex items-start gap-3 text-[var(--tx)] font-medium">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                  <span><strong>10 Team Seats</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                  <span>Multi-Page Contract Classification</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                  <span>Priority 24/7 Slack &amp; WhatsApp Support</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/login?plan=growth"
                className="btn-sarvam-accent w-full justify-center !text-sm !font-semibold"
              >
                Start 14-Day Pilot <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* TIER 3: Enterprise / Sovereign Cloud */}
          <div className="arch-card flex flex-col justify-between p-7 sm:p-9">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[var(--tx)]">Enterprise / Sovereign Cloud</h3>
              </div>
              <p className="mt-2 text-xs text-[var(--tx-secondary)]">
                For major practices, sovereign compliance, and dedicated single-tenant VPCs.
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-mono text-4xl font-bold tracking-tight text-[var(--tx)]">
                  Custom
                </span>
                <span className="text-sm font-medium text-[var(--tx-secondary)]">/annual contract</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">Dedicated deployment SLA</p>

              <ul className="mt-8 space-y-3.5 border-t border-[var(--st)] pt-6 text-sm text-[var(--tx-secondary)]">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span><strong>Unlimited</strong> document volume</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span><strong>Dedicated Single-Tenant VPC / Ephemeral Endpoints</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span><strong>Custom QLoRA Model Adapters</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span><strong>Full REST API Access</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Custom SAML / Okta / Azure AD SSO</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Dedicated Solutions Architect &amp; BAA</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/contact?plan=enterprise"
                className="btn-sarvam-secondary w-full justify-center !text-sm !font-semibold"
              >
                Contact Enterprise Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Security & Audit Guarantee Banner */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--tx-secondary)]">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="h-4 w-4 text-emerald-600" /> 14-Day Free Pilot
          </span>
          <span>•</span>
          <span className="font-medium">No Credit Card Required</span>
          <span>•</span>
          <span className="font-medium">Zero Data Retention SLA</span>
          <span>•</span>
          <span className="font-medium">Cancel Anytime</span>
        </div>
      </div>
    </section>
  );
}
