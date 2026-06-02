'use client';

import Link from 'next/link';
import { MessageSquare, Phone, Send, ArrowLeft, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 md:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 group">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 sm:h-9 sm:w-9 transition-colors group-hover:border-emerald-500/50 group-hover:bg-emerald-500/20">
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

      {/* Main Body container */}
      <main className="relative py-16 md:py-24 overflow-hidden">
        
        {/* Lights */}
        <div className="absolute top-10 left-10 h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />

        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            
            {/* Info Column */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-4">
                  Outreach Portal
                </span>
                <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let’s build your official automation architecture.
                </h1>
                <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
                  Ready to stop losing leads and fully automate your customer bookings? Fill out the project details and our team will get in touch in less than 24 hours.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-900">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-500">Fast Callback Channel</p>
                    <p className="text-sm font-semibold text-slate-200">+91 70111 90158</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
                    <Shield className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-500">API Certification</p>
                    <p className="text-sm font-semibold text-slate-200">100% Meta Compliant Stack</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-900/40">
              <h2 className="text-xl font-bold text-white tracking-tight mb-6">Project Request Form</h2>
              <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Alex Carter"
                    className="mt-2 block w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Business Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="alex@company.com"
                    className="mt-2 block w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Business Sector / Type
                  </label>
                  <select
                    id="business"
                    name="business"
                    className="mt-2 block w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 focus:border-emerald-500 focus:outline-none transition-colors cursor-pointer"
                  >
                    <option>Clinic / Healthcare</option>
                    <option>Beauty / Hair Salon</option>
                    <option>Restaurant / Café</option>
                    <option>Gym / Fitness Studio</option>
                    <option>Real Estate Agency</option>
                    <option>Training Academy / Course Creator</option>
                    <option>Other Service Business</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Project Details & Goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe your current lead booking flow and where you lose the most inquiries..."
                    className="mt-2 block w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-emerald-400 active:scale-[0.98] shadow-md shadow-emerald-500/10 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  Submit Project Details
                </button>
              </form>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
