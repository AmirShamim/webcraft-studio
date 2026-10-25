import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
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
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-sans antialiased">
      <Header />

      <main id="main-content" tabIndex={-1}>
        <section className="page-intro premium-grid">
          <div className="site-container reveal">
            <div className="section-label flex items-center gap-2 mb-6">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Knowledge Hub</span>
            </div>

            <h1 className="editorial-title max-w-4xl">
              Al Astoora Insights
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--muted)]">
              Deep dives into WhatsApp automation, lead recovery strategies, and everything you need to know about building custom communication infrastructure for your business.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="site-container">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-5">
              <h2 className="section-label">The Journal</h2>
              <span className="text-xs text-[var(--muted)]">Automation / Communication / Operations</span>
            </div>
            <div>
              {insightPages.map((page, index) => (
                <Link
                  key={page.slug}
                  href={`/insights/${page.slug}`}
                  className={`group grid min-w-0 gap-5 border-b border-[var(--line)] py-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] md:grid-cols-[64px_minmax(0,1.2fr)_minmax(0,1fr)] md:gap-10 md:py-10 ${index === 0 ? 'bg-[var(--blue)] px-5 md:px-8' : ''}`}
                >
                  <span className="pt-2 text-xs font-medium tabular-nums text-[var(--accent)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className={`display-serif min-w-0 text-[24px] leading-[1.25] transition-colors group-hover:text-[var(--accent)] ${index === 0 ? 'md:text-[32px]' : 'md:text-[28px]'}`}>
                    {page.title}
                  </h3>

                  <div className="flex min-w-0 flex-col items-start gap-6 md:pt-1">
                    <p className="text-sm leading-7 text-[var(--muted)]">
                      {page.metaDescription}
                    </p>

                    <span className="mt-auto inline-flex min-h-11 items-center gap-3 text-sm font-medium text-[var(--accent)]">
                      Read insight
                      <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
                    </span>
                  </div>
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
