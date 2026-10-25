import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Database,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  getAllVerticalAutomationSlugs,
  getVerticalAutomationPage,
  type VerticalAutomationPage,
} from '@/lib/vertical-automation-pages';

type PageProps = { params: Promise<{ vertical: string }> };

export function generateStaticParams() {
  return getAllVerticalAutomationSlugs().map((vertical) => ({ vertical }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { vertical } = await params;
  const page = getVerticalAutomationPage(vertical);
  if (!page) return { title: 'Automation page not found' };

  const url = `https://alastoora.tech/whatsapp-automation/${page.slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      siteName: 'Al Astoora',
      type: 'website',
    },
  };
}

function buildJsonLd(page: VerticalAutomationPage) {
  const url = `https://alastoora.tech/whatsapp-automation/${page.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: page.title,
        description: page.metaDescription,
        url,
        serviceType: 'WhatsApp Cloud API automation',
        provider: {
          '@type': 'Organization',
          name: 'Al Astoora',
          url: 'https://alastoora.tech',
          telephone: '+91 92895 81053',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: page.faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://alastoora.tech',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'WhatsApp Automation',
            item: 'https://alastoora.tech/whatsapp-automation',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: page.title,
            item: url,
          },
        ],
      },
    ],
  };
}

export default async function VerticalWhatsAppAutomationPage({ params }: PageProps) {
  const { vertical } = await params;
  const page = getVerticalAutomationPage(vertical);
  if (!page) notFound();

  const jsonLd = buildJsonLd(page);
  const whatsappHref = `https://wa.me/919289581053?text=${encodeURIComponent(page.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-sans antialiased">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content" tabIndex={-1}>
        <section className="page-intro premium-grid">
          <div className="site-container">
            <Link href="/whatsapp-automation" className="mb-8 inline-flex min-h-11 items-center gap-3 text-sm text-[var(--muted)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              WhatsApp automation
            </Link>
            <div className="max-w-5xl reveal">
              <div className="section-label mb-6 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <span>{page.eyebrow}</span>
              </div>

              <h1 className="editorial-title">
                {page.heroTitle}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                {page.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  data-analytics-event="primary_cta_clicked"
                  data-analytics-label={`vertical_${page.slug}_book_demo`}
                  data-analytics-location="vertical_hero"
                  className="button-primary inline-flex items-center gap-2 text-sm"
                >
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="whatsapp_clicked"
                  data-analytics-label={`vertical_${page.slug}_whatsapp`}
                  data-analytics-location="vertical_hero"
                  className="button-secondary inline-flex items-center gap-2 text-sm"
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <nav aria-label="Explore this booking flow" className="mt-10 flex flex-wrap gap-x-8 border-t border-[var(--line)] pt-4">
              {[
                { href: '#fit', label: 'Is this a fit?' },
                { href: '#booking-flow', label: 'The booking flow' },
                { href: '#setup', label: 'Setup & handoff' },
                { href: '#questions', label: 'Questions' },
              ].map((item) => (
                <a key={item.href} href={item.href} className="inline-flex min-h-11 items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
                  {item.label}<ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="border-b border-[var(--line)] bg-[var(--blue)] py-10 md:py-12">
          <div className="site-container">
            <figure className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
              <figcaption className="flex items-start gap-3 text-sm font-medium text-[var(--accent)]">
                <MessageSquare className="h-4 w-4 shrink-0" />
                WhatsApp booking flow / Example conversation
              </figcaption>
              <ol className="divide-y divide-[var(--ink)]/15 border-y border-[var(--ink)]/15">
                <li className="grid gap-3 py-5 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6">
                  <p className="text-xs font-semibold text-[var(--muted)]">01 / First response</p>
                  <p className="text-sm leading-relaxed">Hi, what would you like to book or ask about today?</p>
                </li>
                <li className="grid gap-3 py-5 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6">
                  <p className="text-xs font-semibold text-[var(--muted)]">02 / Customer request</p>
                  <p className="text-sm leading-relaxed">I want to check availability and prices.</p>
                </li>
                <li className="grid gap-3 py-5 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6">
                  <p className="text-xs font-semibold text-[var(--muted)]">03 / Official Cloud API handoff</p>
                  <p className="text-sm leading-relaxed">Booking requests and questions arrive with the details your team needs to follow up.</p>
                </li>
              </ol>
            </figure>
          </div>
        </section>

        <section id="fit" className="scroll-mt-28 border-b border-[var(--line)] py-12 md:py-20">
          <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <div>
              <span className="section-label">
                Best fit
              </span>
              <h2 className="display-serif mt-4 text-3xl sm:text-4xl">
                Built for a specific WhatsApp booking job.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                {page.buyerFit}
              </p>
              <div className="mt-8 border-l-4 border-[var(--highlight)] pl-5">
                <p className="text-xs font-semibold text-[var(--muted)]">
                  Primary use case
                </p>
                <p className="mt-2 text-base font-medium">{page.primaryUseCase}</p>
              </div>
            </div>

            <div className="self-start border-b border-[var(--line)]">
              {page.fitSignals.map((signal) => (
                <div key={signal} className="flex gap-4 border-t border-[var(--line)] py-6">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  <p className="text-base leading-7 text-[var(--muted)]">{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="booking-flow" className="scroll-mt-28 border-b border-[var(--line)] bg-[var(--surface)] py-12 md:py-20">
          <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <div className="self-start lg:sticky lg:top-28">
              <span className="section-label">
                Booking flow
              </span>
              <h2 className="display-serif mt-4 text-3xl sm:text-4xl">
                What the WhatsApp assistant does before a human replies.
              </h2>
            </div>

            <ol className="border-t border-[var(--line)]">
              {page.bookingFlow.map((step, index) => (
                <li key={step.title} className="grid min-w-0 grid-cols-[44px_minmax(0,1fr)] gap-x-5 border-b border-[var(--line)] py-8 sm:gap-x-8">
                  <div className="row-span-2 flex flex-col items-center gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center bg-[var(--highlight)] text-[var(--ink)]">
                      {index === 0 && <ClipboardList aria-hidden="true" className="h-5 w-5" />}
                      {index === 1 && <CalendarCheck2 aria-hidden="true" className="h-5 w-5" />}
                      {index === 2 && <Database aria-hidden="true" className="h-5 w-5" />}
                    </span>
                    <span className="text-xs tabular-nums text-[var(--muted)]">{String(index + 1).padStart(2, '0')}</span>
                    {index < page.bookingFlow.length - 1 && <span aria-hidden="true" className="min-h-6 w-px flex-1 bg-[var(--line)]" />}
                  </div>
                  <h3 className="display-serif text-[28px] leading-tight sm:text-[32px]">{step.title}</h3>
                  <p className="mt-4 text-base leading-8 text-[var(--muted)]">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="setup" className="dark-section scroll-mt-28 py-12 md:py-20 [&_p]:text-[var(--paper)]/75 [&_svg]:text-[var(--highlight)] [&_.button-secondary]:border-white/40 [&_.button-secondary]:text-[var(--paper)] [&_.button-secondary:hover]:bg-white/10">
          <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-20">
            <div>
              <span className="section-label">
                Official setup
              </span>
              <h2 className="display-serif mt-4 text-3xl sm:text-4xl">
                Built on the official Cloud API and synced to your tools.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                Al Astoora sets up the approved WhatsApp infrastructure, message flow, handoff logic, and data sync so your team owns the customer records and the operating workflow.
              </p>
              <Link
                href="/whatsapp-automation"
                data-analytics-event="primary_cta_clicked"
                data-analytics-label={`vertical_${page.slug}_service_hub`}
                data-analytics-location="vertical_service_hub"
                className="button-secondary mt-7 inline-flex items-center gap-2 text-sm"
              >
                See the full automation service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="border-t border-white/20 pt-6 lg:border-t-0 lg:border-l lg:pl-10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[var(--accent)]" />
                <h3 className="text-lg font-semibold">What can sync</h3>
              </div>
              <div className="mt-6 space-y-4">
                {page.syncPoints.map((point) => (
                  <div key={point} className="flex gap-3 border-b border-white/15 pb-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                    <p className="text-sm leading-relaxed text-[var(--muted)]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--line)] bg-[var(--blue)] py-12 md:py-16">
          <div className="site-container grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-20">
            <span className="section-label">
              Read next
            </span>
            <div className="max-w-3xl">
              <h2 className="display-serif text-3xl sm:text-4xl">
                {page.relatedInsight.title}
              </h2>
              <Link
                href={page.relatedInsight.href}
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[var(--accent)] underline underline-offset-4 hover:text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                Open the guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section id="questions" className="scroll-mt-28 border-b border-[var(--line)] py-12 md:py-20">
          <div className="site-container grid gap-x-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <span className="section-label">
                Questions
              </span>
              <h2 className="display-serif mt-4 text-3xl sm:text-4xl">
                Common questions before building this flow.
              </h2>
            </div>

            <div className="mt-8 min-w-0 border-t border-[var(--line)] lg:mt-0">
              {page.faqItems.map((item) => (
                <details key={item.question} className="group border-b border-[var(--line)] [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-base font-medium hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
                    {item.question}
                    <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-[var(--accent)] group-open:rotate-180" />
                  </summary>
                  <p className="pb-6 pr-8 text-base leading-relaxed text-[var(--muted)]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--highlight)] py-16 md:py-20">
          <div className="site-container">
            <h2 className="section-title max-w-3xl">
              Want this WhatsApp booking flow for your business?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
              Tell us what your team books today. We will map the first reply, qualification questions, handoff, and sync that fit your operation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                data-analytics-event="primary_cta_clicked"
                data-analytics-label={`vertical_${page.slug}_bottom_demo`}
                data-analytics-location="vertical_bottom_cta"
                className="button-primary inline-flex items-center gap-2 text-sm"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="whatsapp_clicked"
                data-analytics-label={`vertical_${page.slug}_bottom_whatsapp`}
                data-analytics-location="vertical_bottom_cta"
                className="button-secondary inline-flex items-center gap-2 text-sm"
              >
                <MessageSquare className="h-4 w-4" />
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
