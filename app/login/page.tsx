'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Lock,
  KeyRound,
  Building2,
  CheckCircle2,
} from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('Authenticating single-tenant VPC session...');
    setTimeout(() => {
      setLoading(false);
      setStatusMessage('Pilot Workspace Authenticated. Redirecting to legal workspace dashboard...');
    }, 1200);
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-between bg-[var(--sf)]">
      {/* Background Ambient Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 opacity-35 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #4f46e5 0%, #ea580c 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Top Header */}
      <header className="site-container flex h-16 items-center justify-between border-b border-[var(--st)] bg-white/70 backdrop-blur-md">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[var(--tx)] focus-visible:outline-2 focus-visible:outline-[var(--sr-indigo)]"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#1e2238] to-[#07090e] text-white shadow-sm ring-1 ring-white/20">
            <span className="font-serif text-base font-bold italic text-[#f97316]">A</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Al Astoora<span className="text-[var(--sr-terracotta)]">.</span>
          </span>
          <span className="hidden rounded-full border border-indigo-200 bg-indigo-50/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--sr-indigo)] sm:inline-block">
            Legal AI
          </span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-1.5 text-xs font-semibold text-[var(--tx-secondary)] hover:text-[var(--tx)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Return to Homepage
        </Link>
      </header>

      {/* Center Auth Card */}
      <main className="site-container my-auto flex flex-col items-center justify-center py-12">
        <div className="w-full max-w-[460px] rounded-2xl border border-[var(--st)] bg-white p-7 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)] sm:p-9">
          {/* Pilot Badge */}
          <div className="flex items-center justify-between border-b border-[var(--st)] pb-4">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs font-semibold text-slate-700">
                v2.4 Pilot Workspace Active
              </span>
            </div>
            <span className="rounded bg-indigo-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-[var(--sr-indigo)]">
              Zero-Retention Enclave
            </span>
          </div>

          <div className="mt-5 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-[var(--tx)] sm:text-3xl">
              Sign In to Legal Workspace
            </h1>
            <p className="mt-2 text-xs text-[var(--tx-secondary)] sm:text-sm">
              Access your firm’s autonomous intake pipelines, fine-tuned SLMs, and case audit trails.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Firm Work Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="attorney@yourlawfirm.com"
                className="mt-1.5 w-full rounded-lg border border-[var(--st)] bg-slate-50/50 px-3.5 py-2.5 text-sm text-[var(--tx)] placeholder:text-slate-400 focus:border-[var(--sr-indigo)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Password
                </label>
                <a href="#forgot" className="text-xs text-[var(--sr-indigo)] hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="mt-1.5 w-full rounded-lg border border-[var(--st)] bg-slate-50/50 px-3.5 py-2.5 text-sm text-[var(--tx)] placeholder:text-slate-400 focus:border-[var(--sr-indigo)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-[var(--tx-secondary)]">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-300 text-[var(--sr-indigo)] focus:ring-indigo-500" />
                <span>Remember this workstation</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-sarvam-primary w-full justify-center !min-h-[44px] !text-sm !font-semibold"
            >
              {loading ? 'Authenticating...' : 'Sign In to Workspace'}{' '}
              <ArrowRight className="h-4 w-4" />
            </button>

            {statusMessage && (
              <div className="rounded-lg bg-indigo-50 p-3 text-center text-xs font-medium text-[var(--sr-indigo)]">
                {statusMessage}
              </div>
            )}
          </form>

          {/* SSO Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--st)]" />
            </div>
            <span className="relative bg-white px-3 text-[11px] font-semibold uppercase tracking-wider text-[var(--tx-tertiary)]">
              Or Enterprise Single Sign-On
            </span>
          </div>

          {/* SSO Button */}
          <button
            type="button"
            onClick={() => setStatusMessage('Initiating SAML / Okta / Azure AD handshake...')}
            className="flex w-full items-center justify-center gap-2.5 rounded-full border border-[var(--st)] bg-white px-4 py-2.5 text-xs font-semibold text-[var(--tx)] shadow-sm hover:bg-[var(--sf-secondary)] transition-colors"
          >
            <Building2 className="h-4 w-4 text-[var(--sr-indigo)]" />
            Single Sign-On (SAML / Okta / Azure AD)
          </button>

          {/* Pilot Gate Whitelist Notice */}
          <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/60 p-3.5 text-xs leading-relaxed text-amber-900">
            <span className="font-semibold text-amber-950">Pilot Access Notice:</span> Firms currently enrolled in the 14-day zero-retention pilot can authenticate using their whitelisted domain.{' '}
            <Link href="/contact" className="font-semibold text-[var(--sr-terracotta)] underline">
              Request Pilot Provisioning &rarr;
            </Link>
          </div>
        </div>

        {/* Security Disclosures */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center text-xs text-[var(--tx-tertiary)]">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> 256-Bit TLS 1.3
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Lock className="h-3.5 w-3.5 text-indigo-600" /> Ephemeral RAM Enclave
          </span>
          <span>•</span>
          <span>SOC 2 Type II Audited</span>
        </div>
      </main>

      {/* Mini Footer */}
      <footer className="border-t border-[var(--st)] bg-white/70 py-4 text-center text-xs text-[var(--tx-tertiary)]">
        &copy; {new Date().getFullYear()} Al Astoora Legal AI Platform. All rights reserved. Zero data retained on persistent disks.
      </footer>
    </div>
  );
}
