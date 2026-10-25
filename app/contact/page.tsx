import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ArrowLeft, ShieldCheck, Mail, Lock, Server } from 'lucide-react';
import Footer from '@/components/Footer';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Confidential Consultation & Pilot Provisioning | Al Astoora Legal AI',
  description:
    'Schedule a confidential walkthrough or request 14-day pilot onboarding for your law firm. Autonomous document intake, vision OCR, and fine-tuned legal SLMs with zero data retention.',
  alternates: {
    canonical: 'https://alastoora.tech/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--sf)] text-[var(--tx)] font-sans antialiased">
      {/* Background Ambient Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 opacity-35 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #4f46e5 0%, #ea580c 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b border-[var(--st)] bg-white/80 backdrop-blur-md">
        <div className="site-container flex h-16 items-center justify-between gap-4 md:h-[72px]">
          <Link
            href="/"
            aria-label="Al Astoora Legal AI home"
            className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-[var(--sr-indigo)]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#1e2238] to-[#07090e] text-white shadow-sm ring-1 ring-white/20">
              <span className="font-serif text-base font-bold italic tracking-tight text-[#f97316]">A</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[19px] font-semibold tracking-tight text-[var(--tx)]">
                Al Astoora<span className="text-[var(--sr-terracotta)]">.</span>
              </span>
              <span className="rounded-full border border-indigo-200 bg-indigo-50/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--sr-indigo)]">
                Legal AI
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="btn-sarvam-secondary !min-h-[36px] !px-3.5 !py-1.5 !text-xs !font-medium"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Return to Platform
          </Link>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* Intro Section */}
        <section className="relative border-b border-[var(--st)] bg-white/60 py-12 md:py-16">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              {/* Sarvam Motif & Hairline Divider */}
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className="h-[1px] w-40"
                  style={{
                    background: 'radial-gradient(circle, #ea580c 0%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold uppercase tracking-[2px] text-[var(--sr-terracotta)]">
                  Enterprise Pilot &amp; Deployment Inquiries
                </span>
                <div
                  className="h-[1px] w-40"
                  style={{
                    background: 'radial-gradient(circle, #ea580c 0%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />
              </div>

              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--tx)] sm:text-4xl md:text-5xl">
                Schedule a Confidential Walkthrough for Your Practice.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[var(--tx-secondary)] sm:text-lg">
                Discuss high-volume document intake automation, custom QLoRA legal SLM adapters, or pilot onboarding with our engineering team. All consultations are covered by strict confidentiality protocols.
              </p>
            </div>
          </div>
        </section>

        {/* Form and Contact Information Grid */}
        <div className="site-container py-12 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            {/* Left Column: Direct Channels & Confidentiality Dossier */}
            <aside className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--sr-indigo)]">
                  Direct Inquiries
                </span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--tx)] sm:text-3xl">
                  Connect with Legal Solutions Engineering.
                </h2>
                <p className="mt-2 text-sm text-[var(--tx-secondary)]">
                  We respond to verified legal practices and corporate counsel within 2 hours.
                </p>
              </div>

              {/* Contact Channels Card */}
              <div className="arch-card space-y-5 p-6 sm:p-7">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-[var(--sr-indigo)]">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[var(--tx-tertiary)] uppercase tracking-wider">Direct Telephone</p>
                    <a
                      href="tel:+919289581053"
                      className="mt-0.5 inline-block text-sm font-semibold text-[var(--tx)] hover:text-[var(--sr-indigo)]"
                    >
                      +91 92895 81053
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-[var(--st)] pt-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[var(--sr-terracotta)]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[var(--tx-tertiary)] uppercase tracking-wider">Pilot &amp; Engineering Desk</p>
                    <a
                      href="mailto:founder@alastoora.tech"
                      className="mt-0.5 inline-block text-sm font-semibold text-[var(--tx)] hover:text-[var(--sr-indigo)]"
                    >
                      founder@alastoora.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-[var(--st)] pt-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[var(--tx-tertiary)] uppercase tracking-wider">Security &amp; Compliance</p>
                    <p className="mt-0.5 text-sm font-semibold text-[var(--tx)]">
                      SOC 2 Type II Aligned &bull; 256-Bit TLS
                    </p>
                  </div>
                </div>
              </div>

              {/* Privilege & Security Standards Card */}
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-indigo-950">
                  <Lock className="h-4 w-4 text-[var(--sr-indigo)]" />
                  Privilege &amp; Zero Retention Guarantees
                </h3>
                <ul className="mt-3 space-y-2 text-xs leading-relaxed text-indigo-900/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--sr-indigo)]">&bull;</span>
                    <span>No case files or evidentiary documents are retained on persistent disks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--sr-indigo)]">&bull;</span>
                    <span>Volatile RAM enclaves with instant cryptographic wiping upon delivery.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--sr-indigo)]">&bull;</span>
                    <span>Dedicated Single-Tenant VPC options available for strict jurisdiction sovereignty.</span>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Right Column: Interactive Consultation Form */}
            <section className="arch-card p-7 sm:p-9 shadow-[0_15px_40px_-10px_rgba(15,23,42,0.06)]">
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--st)] pb-4">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-[var(--tx)]">
                    Practice Profile &amp; Pilot Scope
                  </h2>
                  <p className="mt-1 text-xs text-[var(--tx-secondary)]">
                    Tell us about your firm&apos;s intake bottlenecks or litigation workflow requirements.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[var(--tx-tertiary)]">* Required fields</span>
              </div>
              <ContactForm />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
