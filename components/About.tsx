'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-slate-950 py-20 md:py-28 relative overflow-hidden border-t border-slate-900">
      
      {/* Light glow */}
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-emerald-500/[0.02] blur-[100px] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Main Info Box */}
          <div className="glass-panel rounded-3xl p-8 border border-slate-800 bg-slate-900/40 relative">
            <span className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 text-xs font-semibold text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Meta Developer Registered Stack
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Engineered by founders who value speed.
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Al Astoora was founded to solve a critical issue: local businesses spend massive budgets on Instagram, Facebook, and Google ads, only to lose high-intent leads because of delayed response times. 
            </p>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              We eliminate the delay by integrating direct, enterprise-grade automated front desks using Meta's Official APIs. Your leads are greeted, cataloged, and booked in less than 2 seconds, 24/7/365.
            </p>
          </div>

          {/* Quick FAQ / Detail Blocks */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-white">Why Meta Cloud API?</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Unlike unofficial QR code scan methods, the official API is fully approved by Meta. It ensures no risk of phone number bans, higher message speeds, and access to interactive action buttons.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-white">How does integration work?</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  We handle the setup end-to-end: Meta developer console configuration, webhook links, server databases, custom automated routing flows, and dashboard connections.
                </p>
              </div>
            </div>
          </div>

 <div className="mt-7 grid gap-4 text-sm md:grid-cols-1">
              <div className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Legal Business Name</p>
                <p className="mt-2 font-medium text-slate-100">Al Astoora</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Registered Address</p>
                <p className="mt-2 font-medium text-slate-100">4th, 52/C</p>
                <p className="mt-2 font-medium text-slate-100">MN Block Lane, New Steel Work</p>
                <p className="mt-2 font-medium text-slate-100">Jamia Nagar, New Delhi</p>
                <p className="mt-2 font-medium text-slate-100">South East Delhi</p>
                <p className="mt-2 font-medium text-slate-100">Delhi, 110025</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Registered Business Phone</p>
                <p className="mt-2 font-medium text-slate-100">+91-7011190158</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Tax Registration</p>
                <p className="mt-2 font-medium text-slate-100">GSTIN: 07RFVPS6101B1ZZ</p>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
}
