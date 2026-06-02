'use client';

import Link from 'next/link';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 md:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 group">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 sm:h-9 sm:w-9">
              <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </span>
            <p className="whitespace-nowrap text-[15px] font-semibold tracking-tight text-slate-100 sm:text-base group-hover:text-emerald-400 transition-colors">
              Al Astoora
            </p>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-800 bg-slate-900/50 px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:border-slate-700 hover:text-white sm:text-sm"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="relative py-16 md:py-24 max-w-4xl mx-auto px-5">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 bg-slate-900/40 space-y-6">
          <h1 className="text-3xl font-extrabold text-white tracking-tight border-b border-slate-900 pb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500">Last Updated: June 2, 2026</p>

          <div className="space-y-6 text-sm text-slate-300 leading-relaxed font-sans">
            <p>
              At Al Astoora, we value your privacy and are committed to protecting your personal data. This privacy policy describes how we collect, use, and process information when you use our website, automation systems, and API integrations.
            </p>

            <h2 className="text-lg font-bold text-white pt-4">1. Information We Collect</h2>
            <p>
              We collect information that you submit directly via our request forms (e.g. name, email address, company details, message contents) and general visit statistics (IP address, country, device details). If we integrate custom WhatsApp systems, we route communication streams through official Meta Cloud APIs. We do not store or sell message histories.
            </p>

            <h2 className="text-lg font-bold text-white pt-4">2. How We Use Information</h2>
            <p>
              We use personal data solely to reply to inquiries, schedule client demos, and deploy your custom integration stacks. Custom databases and spreadsheet hookups created during integrations remain under your sole business control.
            </p>

            <h2 className="text-lg font-bold text-white pt-4">3. Meta API & Third-party Compliance</h2>
            <p>
              Our custom communication architecture relies on Meta's Official Cloud API. All message streams are subject to Meta’s Business Messaging Policy. We configure secure HTTPS endpoints for webhooks to protect all database transactions.
            </p>

            <h2 className="text-lg font-bold text-white pt-4">4. Your Rights & Contacts</h2>
            <p>
              You have the right to request deletion of any inquiry records we hold. For requests or questions, please contact our support team at <span className="text-emerald-400 font-medium">privacy@alastoora.tech</span>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
