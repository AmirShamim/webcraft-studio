import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getAllInsightSlugs,
  getInsightBySlug,
  type InsightPage,
} from '@/lib/pseo-data';
import { ArrowRight, CalendarCheck2, CheckCircle2, ChevronDown, HelpCircle, MessageSquare, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const verticalPageLinksByInsightSlug: Record<
  string,
  { href: string; title: string; description: string; label: string }
> = {
  'automate-whatsapp-for-gyms-and-fitness': {
    href: '/whatsapp-automation/gyms',
    title: 'See the gym booking page',
    description:
      'Map trial bookings, membership inquiries, class schedule requests, and sales-team handoff into one WhatsApp flow.',
    label: 'Gym booking automation',
  },
  'automate-whatsapp-for-dental-and-healthcare': {
    href: '/whatsapp-automation/dental-clinics',
    title: 'See the dental clinic booking page',
    description:
      'Map appointment requests, service interest, reminders, and reception handoff into one WhatsApp flow.',
    label: 'Dental appointment automation',
  },
};

// ---------------------------------------------------------------------------
// Static Params — Pre-render all insight pages at build time
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// Dynamic Metadata
// ---------------------------------------------------------------------------
type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getInsightBySlug(slug);
  if (!page) return { title: 'Insight Not Found' };

  return {
    title: `${page.title} | Al Astoora`,
    description: page.metaDescription,
    alternates: {
      canonical: `https://alastoora.tech/insights/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: `https://alastoora.tech/insights/${page.slug}`,
      siteName: 'Al Astoora',
      type: 'article',
    },
  };
}

// ---------------------------------------------------------------------------
// JSON-LD Schema Generator
// ---------------------------------------------------------------------------
function buildJsonLd(page: InsightPage) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: page.title,
        description: page.metaDescription,
        url: `https://alastoora.tech/insights/${page.slug}`,
        publisher: {
          '@type': 'Organization',
          name: 'Al Astoora',
          url: 'https://alastoora.tech',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faqItems.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getInsightBySlug(slug);
  if (!page) notFound();

  const relatedPages = page.relatedSlugs
    .map((s) => getInsightBySlug(s))
    .filter(Boolean) as InsightPage[];
  const verticalPageLink = verticalPageLinksByInsightSlug[page.slug];

  const jsonLd = buildJsonLd(page);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <Header />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* ── Hero Section ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-950 py-20 md:py-28">
          <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

          <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-medium text-emerald-400 mb-6 shadow-lg shadow-emerald-950/20">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Al Astoora Insights</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
              {page.title}
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-slate-400">
              {page.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                data-analytics-event="insight_cta_clicked"
                data-analytics-label={`insight_hero_book_demo:${page.slug}`}
                data-analytics-location="insight_hero"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/whatsapp-automation"
                data-analytics-event="insight_cta_clicked"
                data-analytics-label={`insight_hero_service_hub:${page.slug}`}
                data-analytics-location="insight_hero"
                className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-sm px-7 py-4 text-sm font-semibold text-slate-200 transition-all hover:border-slate-700 hover:text-white hover:bg-slate-900"
              >
                See WhatsApp Automation
              </Link>
            </div>
          </div>
        </section>

        {/* ── Problem Statement ────────────────────────────────────── */}
        <section className="relative bg-slate-950 py-16 md:py-24 border-t border-slate-900">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/25 bg-rose-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rose-400 mb-6">
              The Problem
            </div>
            <div className="space-y-5">
              {page.problemStatement.map((para, idx) => (
                <p key={idx} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Solution Blocks ─────────────────────────────────────── */}
        <section className="relative bg-slate-950 py-16 md:py-24 border-t border-slate-900">
          <div className="absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-emerald-500/[0.03] blur-[120px] pointer-events-none" />

          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-6">
              The Al Astoora Solution
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-10">
              How we solve this for your business
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {page.solutionBlocks.map((block, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {block.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Hub Link ─────────────────────────────────────── */}
        <section className="relative bg-slate-950 py-16 md:py-24 border-t border-slate-900">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="glass-panel rounded-3xl border border-emerald-500/20 bg-emerald-950/10 p-6 sm:p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-5">
                    WhatsApp Automation Service
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                    See how this fits into the full WhatsApp front desk.
                  </h2>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400">
                    This guide explains one part of the problem. The service page shows the complete Al Astoora stack: official Cloud API setup, instant replies, booking flows, lead capture, and CRM sync for local service businesses.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <Link
                    href="/whatsapp-automation"
                    data-analytics-event="insight_cta_clicked"
                    data-analytics-label={`insight_service_hub:${page.slug}`}
                    data-analytics-location="insight_service_hub"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
                  >
                    Explore the Service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    data-analytics-event="insight_cta_clicked"
                    data-analytics-label={`insight_service_hub_demo:${page.slug}`}
                    data-analytics-location="insight_service_hub"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:border-slate-700 hover:bg-slate-900 hover:text-white"
                  >
                    Book a Demo
                    <MessageSquare className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Vertical Booking Page Link ───────────────────────────── */}
        {verticalPageLink && (
          <section className="relative bg-slate-950 py-16 md:py-24 border-t border-slate-900">
            <div className="mx-auto max-w-5xl px-5 md:px-8">
              <div className="glass-panel rounded-3xl border border-blue-500/20 bg-blue-950/10 p-6 sm:p-8 md:p-10">
                <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-5">
                      <CalendarCheck2 className="h-3.5 w-3.5" />
                      {verticalPageLink.label}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                      {verticalPageLink.title}
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400">
                      {verticalPageLink.description}
                    </p>
                  </div>
                  <Link
                    href={verticalPageLink.href}
                    data-analytics-event="insight_cta_clicked"
                    data-analytics-label={`insight_vertical_page:${page.slug}`}
                    data-analytics-location="insight_vertical_page"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
                  >
                    Open booking page
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── FAQ Section ─────────────────────────────────────────── */}
        <section className="relative bg-slate-950 py-16 md:py-24 border-t border-slate-900">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-6">
              <HelpCircle className="h-3.5 w-3.5" />
              Questions & Answers
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {page.faqItems.map((faq, idx) => (
                <details
                  key={idx}
                  className="group border border-slate-900 bg-slate-900/20 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden [&[open]]:bg-slate-900/30 [&[open]]:border-emerald-500/20"
                >
                  <summary className="flex items-center justify-between font-semibold text-white cursor-pointer select-none list-none gap-4">
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown className="h-5 w-5 text-slate-400 transition-transform duration-300 group-open:-rotate-180 shrink-0" />
                  </summary>
                  <div className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed pt-3 border-t border-slate-900/60">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Insights ────────────────────────────────────── */}
        {relatedPages.length > 0 && (
          <section className="relative bg-slate-950 py-16 md:py-24 border-t border-slate-900">
            <div className="mx-auto max-w-5xl px-5 md:px-8">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-6">
                Related Insights
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {relatedPages.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/insights/${related.slug}`}
                    className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col gap-3 group"
                  >
                    <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {related.metaDescription}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mt-auto">
                      Read more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Bottom CTA ──────────────────────────────────────────── */}
        <section className="relative bg-slate-950 py-16 md:py-24 border-t border-slate-900">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/[0.04] blur-[120px] pointer-events-none" />

          <div className="relative mx-auto max-w-3xl px-5 md:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Ready to stop losing leads?
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
              Get a free consultation and see exactly how Al Astoora can automate your WhatsApp customer operations.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                data-analytics-event="insight_cta_clicked"
                data-analytics-label={`insight_bottom_book_demo:${page.slug}`}
                data-analytics-location="insight_bottom_cta"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
              >
                <MessageSquare className="h-4 w-4" />
                Book Demo
              </Link>
              <a
                href="https://wa.me/919289581053?text=Hi%20I%20want%20to%20learn%20more%20about%20Al%20Astoora"
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="whatsapp_clicked"
                data-analytics-label={`insight_bottom_whatsapp:${page.slug}`}
                data-analytics-location="insight_bottom_cta"
                className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-sm px-7 py-4 text-sm font-semibold text-slate-200 transition-all hover:border-slate-700 hover:text-white hover:bg-slate-900"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
