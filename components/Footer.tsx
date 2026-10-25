'use client';

import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--st)] bg-[#07090e] py-14 text-slate-300 sm:py-20">
      <div className="site-container">
        {/* Top Banner CTA */}
        <div className="grid gap-8 border-b border-white/10 pb-12 md:grid-cols-[1.5fr_auto] md:items-end">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--sr-terracotta)]" />
              <span className="text-xs font-semibold uppercase tracking-[2px] text-orange-400">
                Start Your 14-Day Pilot
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              Eliminate unbillable intake hours.<br />
              <span className="text-slate-400">With guaranteed zero data retention.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/login"
              className="btn-sarvam-accent !text-sm !font-semibold"
            >
              Start 14-Day Pilot <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/login"
              className="btn-sarvam-secondary !bg-white/10 !border-white/20 !text-white hover:!bg-white/20 !text-sm"
            >
              Client Portal
            </Link>
          </div>
        </div>

        {/* 4-Column Navigation Grid */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand Info */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-orange-500 font-serif text-sm font-bold italic text-white">
                A
              </div>
              <span className="text-lg font-bold tracking-tight">
                Al Astoora<span className="text-[var(--sr-terracotta)]">.</span>
              </span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              Enterprise Legal AI &amp; Document Intelligence SaaS. Ephemeral zero-retention pipelines and fine-tuned legal Small Language Models engineered for law firms.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>SOC 2 Type II Aligned &bull; Nitro Enclaves</span>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Platform Architecture
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Omnichannel Intake (WhatsApp &amp; Web)
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Vision OCR &amp; Document IDP
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Fine-Tuned Legal SLMs &amp; RAFT
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  Zero Data Retention SLA
                </a>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Dedicated Single-Tenant VPC Deployment
                </Link>
              </li>
            </ul>
          </div>

          {/* SaaS & Security */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              SaaS &amp; Compliance
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Transparent SaaS Pricing
                </a>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Workspace Client Portal
                </Link>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Attorney-Client Privilege FAQ
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy &amp; Data Rights
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service &amp; BAA
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Enterprise Support
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="mailto:founder@alastoora.tech" className="inline-flex items-center gap-1 hover:text-white transition-colors">
                  founder@alastoora.tech <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="tel:+919289581053" className="hover:text-white transition-colors">
                  +91 92895 81053
                </a>
              </li>
              <li className="text-slate-500">
                256-Bit TLS Transport &bull; SOC 2 Aligned
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Registry & Copyright */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Al Astoora Legal AI. All rights reserved. Registered under MSME/Udyam: UDYAM-DL-09-0046885.
          </p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Lock className="h-3 w-3 text-emerald-400" /> Ephemeral Memory Execution
            </span>
            <span>&bull;</span>
            <span>Zero Persistent Disk Retention</span>
          </div>
        </div>
      </div>
    </footer>
  );
}