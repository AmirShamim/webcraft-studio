import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { insightPages } from '@/lib/pseo-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Insights | Al Astoora — WhatsApp Automation Knowledge Hub',
  description:
    'Expert insights on WhatsApp automation, Meta Cloud API integration, lead recovery, and CRM connectivity for local businesses. Learn how to stop losing leads.',
  alternates: {
    canonical: 'https://alastoora.tech/insights',
  },
  openGraph: {
    title: 'Insights | Al Astoora',
    description:
      'Expert insights on WhatsApp automation and lead recovery for local businesses.',
    url: 'https://alastoora.tech/insights',
    siteName: 'Al Astoora',
    type: 'website',
  },
};

export default function InsightsIndexPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 py-20 md:py-28">
          <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

          <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-medium text-emerald-400 mb-6 shadow-lg shadow-emerald-950/20">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Knowledge Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
              Al Astoora Insights
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-slate-400">
              Deep dives into WhatsApp automation, lead recovery strategies, and everything you need to know about building custom communication infrastructure for your business.
            </p>
          </div>
        </section>

        {/* Insights Grid */}
        <section className="relative bg-slate-950 py-16 md:py-24 border-t border-slate-900">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {insightPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/insights/${page.slug}`}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col gap-4 group"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Sparkles className="h-5 w-5" />
                  </span>

                  <h2 className="text-base font-semibold text-white tracking-tight group-hover:text-emerald-400 transition-colors leading-snug">
                    {page.title}
                  </h2>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 flex-1">
                    {page.metaDescription}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mt-auto pt-2">
                    Read insight
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
