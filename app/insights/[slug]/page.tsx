import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getAllInsightSlugs,
  getInsightBySlug,
  type InsightPage,
} from '@/lib/pseo-data';
import { ArrowLeft, ArrowRight, CalendarCheck2, CheckCircle2, ChevronDown, HelpCircle, MessageSquare, BookOpen } from 'lucide-react';
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
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-sans antialiased">
      <Header />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content" tabIndex={-1}>
        {/* ── Hero Section ─────────────────────────────────────────── */}
        <section className="page-intro premium-grid">
          <div className="site-container reveal">
            <Link href="/insights" className="mb-8 inline-flex min-h-11 items-center gap-3 text-sm text-[var(--muted)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              All insights
            </Link>
            <div className="section-label flex items-center gap-2 mb-6">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Al Astoora Insights</span>
            </div>

            <h1 className="editorial-title max-w-5xl">
              {page.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--muted)]">
              {page.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                data-analytics-event="insight_cta_clicked"
                data-analytics-label={`insight_hero_book_demo:${page.slug}`}
                data-analytics-location="insight_hero"
                className="button-primary inline-flex items-center gap-2 text-sm"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/whatsapp-automation"
                data-analytics-event="insight_cta_clicked"
                data-analytics-label={`insight_hero_service_hub:${page.slug}`}
                data-analytics-location="insight_hero"
                className="button-secondary inline-flex items-center text-sm"
              >
                See WhatsApp Automation
              </Link>
            </div>
          </div>
        </section>

        <div className="site-container grid gap-8 py-12 lg:grid-cols-[240px_minmax(0,760px)] lg:gap-20 lg:py-20">
          <aside className="min-w-0">
            <nav aria-label="On this page" className="border-t border-[var(--line)] pt-5 lg:sticky lg:top-28">
              <p className="section-label mb-4">In this insight</p>
              <div className="flex flex-wrap gap-x-6 lg:flex-col lg:gap-0">
                {[
                  { href: '#problem', label: '01 / The problem' },
                  { href: '#solution', label: '02 / The solution' },
                  { href: '#service', label: '03 / Put it into practice' },
                  { href: '#questions', label: '04 / Questions & answers' },
                ].map((item) => (
                  <a key={item.href} href={item.href} className="inline-flex min-h-11 items-center text-sm text-[var(--muted)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          </aside>
          <article className="min-w-0" aria-label={page.title}>
        {/* ── Problem Statement ────────────────────────────────────── */}
        <section id="problem" className="scroll-mt-28 border-t border-[var(--line)] pt-6 pb-12 md:pb-16">
          <div>
            <div className="section-label mb-6">
              The Problem
            </div>
            <div className="max-w-3xl space-y-5">
              {page.problemStatement.map((para, idx) => (
                <p key={idx} className="text-base leading-8 text-[var(--muted)] first:text-lg first:text-[var(--ink)]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Solution Blocks ─────────────────────────────────────── */}
        <section id="solution" className="scroll-mt-28 border-t border-[var(--line)] pt-8">
          <div>
            <div className="section-label mb-6">
              The Al Astoora Solution
            </div>
            <h2 className="display-serif text-3xl sm:text-4xl mb-10">
              How we solve this for your business
            </h2>

            <div className="divide-y divide-[var(--line)]">
              {page.solutionBlocks.map((block, idx) => (
                <div
                  key={idx}
                  className="grid min-w-0 gap-x-5 py-8 sm:grid-cols-[40px_minmax(0,1fr)]"
                >
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center bg-[var(--highlight)] text-[var(--ink)] sm:row-span-2">
                    <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="display-serif text-[28px] leading-tight">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-[var(--muted)]">
                    {block.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
          </article>
        </div>

        {/* ── Service Hub Link ─────────────────────────────────────── */}
        <section id="service" className="scroll-mt-28 bg-[var(--blue)] py-12 md:py-16 border-t border-[var(--line)]">
          <div className="site-container">
            <div>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20 lg:items-center">
                <div>
                  <div className="section-label mb-5">
                    WhatsApp Automation Service
                  </div>
                  <h2 className="display-serif text-3xl sm:text-4xl">
                    See how this fits into the full WhatsApp front desk.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
                    This guide explains one part of the problem. The service page shows the complete Al Astoora stack: official Cloud API setup, instant replies, booking flows, lead capture, and CRM sync for local service businesses.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link
                    href="/whatsapp-automation"
                    data-analytics-event="insight_cta_clicked"
                    data-analytics-label={`insight_service_hub:${page.slug}`}
                    data-analytics-location="insight_service_hub"
                    className="button-primary inline-flex items-center justify-center gap-2 text-sm"
                  >
                    Explore the Service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    data-analytics-event="insight_cta_clicked"
                    data-analytics-label={`insight_service_hub_demo:${page.slug}`}
                    data-analytics-location="insight_service_hub"
                    className="button-secondary inline-flex items-center justify-center gap-2 text-sm"
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
          <section className="py-12 md:py-16 border-t border-[var(--line)]">
            <div className="site-container">
              <div>
                <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                  <div>
                    <div className="section-label flex items-center gap-2 mb-5">
                      <CalendarCheck2 className="h-3.5 w-3.5" />
                      {verticalPageLink.label}
                    </div>
                    <h2 className="display-serif text-3xl sm:text-4xl">
                      {verticalPageLink.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                      {verticalPageLink.description}
                    </p>
                  </div>
                  <Link
                    href={verticalPageLink.href}
                    data-analytics-event="insight_cta_clicked"
                    data-analytics-label={`insight_vertical_page:${page.slug}`}
                    data-analytics-location="insight_vertical_page"
                    className="button-primary inline-flex items-center justify-center gap-2 text-sm"
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
        <section id="questions" className="scroll-mt-28 py-12 md:py-20 border-t border-[var(--line)]">
          <div className="site-container grid gap-8 lg:grid-cols-[240px_minmax(0,760px)] lg:gap-x-20">
            <div className="section-label flex items-center gap-2 self-start">
              <HelpCircle className="h-3.5 w-3.5" />
              Questions & Answers
            </div>
            <h2 className="display-serif text-3xl sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <div className="min-w-0 border-t border-[var(--line)] lg:col-start-2">
              {page.faqItems.map((faq, idx) => (
                <details
                  key={idx}
                  className="group border-b border-[var(--line)] [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between py-6 font-medium cursor-pointer list-none gap-5 hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown aria-hidden="true" className="h-5 w-5 text-[var(--accent)] group-open:rotate-180 shrink-0" />
                  </summary>
                  <div className="pb-6 pr-8 text-base text-[var(--muted)] leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Insights ────────────────────────────────────── */}
        {relatedPages.length > 0 && (
          <section className="bg-[var(--surface)] py-12 md:py-16 border-t border-[var(--line)]">
            <div className="site-container">
              <div className="section-label mb-6">
                Related Insights
              </div>
              <div className="grid gap-x-16 gap-y-8 md:grid-cols-2">
                {relatedPages.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/insights/${related.slug}`}
                    className="border-t border-[var(--line)] pt-6 flex min-w-0 flex-col gap-4 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  >
                    <h3 className="display-serif text-2xl group-hover:text-[var(--accent)] transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      {related.metaDescription}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] mt-auto">
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
        <section className="dark-section py-16 md:py-20 border-t border-[var(--line)] [&_.button-secondary]:border-white/40 [&_.button-secondary]:text-[var(--paper)] [&_.button-secondary:hover]:bg-white/10">
          <div className="site-container">
            <h2 className="section-title max-w-3xl">
              Ready to stop losing leads?
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--paper)]/75 text-base leading-relaxed">
              Get a free consultation and see exactly how Al Astoora can automate your WhatsApp customer operations.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                data-analytics-event="insight_cta_clicked"
                data-analytics-label={`insight_bottom_book_demo:${page.slug}`}
                data-analytics-location="insight_bottom_cta"
                className="button-primary inline-flex items-center gap-2 text-sm"
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
                className="button-secondary inline-flex items-center gap-2 text-sm"
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
