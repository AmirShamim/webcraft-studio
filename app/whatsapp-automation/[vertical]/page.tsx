import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  ClipboardList,
  Database,
  MessageSquare,
  ShieldCheck,
  Sparkles,
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
          telephone: '+91-7011190158',
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
  const whatsappHref = `https://wa.me/917011190158?text=${encodeURIComponent(page.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <section className="relative overflow-hidden border-b border-slate-900 bg-slate-950 py-20 md:py-28">
          <div className="absolute inset-0 bg-hex-grid [mask-image:linear-gradient(to_bottom,#000,transparent_82%)] pointer-events-none" />
          <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 md:grid-cols-[1.05fr_0.95fr] md:px-8">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-medium text-emerald-400">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{page.eyebrow}</span>
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.08]">
                {page.heroTitle}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                {page.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  data-analytics-event="primary_cta_clicked"
                  data-analytics-label={`vertical_${page.slug}_book_demo`}
                  data-analytics-location="vertical_hero"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
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
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-7 py-4 text-sm font-semibold text-slate-200 transition-all hover:border-slate-700 hover:bg-slate-900 hover:text-white"
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full rounded-3xl border border-slate-800 bg-slate-950 p-5 shadow-2xl shadow-slate-950/40">
                <div className="flex items-center gap-3 border-b border-slate-900 pb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">WhatsApp booking flow</p>
                    <p className="text-xs text-emerald-400">Official Cloud API handoff</p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="max-w-[88%] rounded-2xl rounded-bl-sm border border-slate-800 bg-slate-900 px-4 py-3 text-sm leading-relaxed text-slate-200">
                    Hi, what would you like to book or ask about today?
                  </div>
                  <div className="ml-auto max-w-[84%] rounded-2xl rounded-br-sm bg-emerald-500 px-4 py-3 text-sm font-medium leading-relaxed text-slate-950">
                    I want to check availability and prices.
                  </div>
                  <div className="max-w-[92%] rounded-2xl rounded-bl-sm border border-slate-800 bg-slate-900 px-4 py-3 text-sm leading-relaxed text-slate-200">
                    I can help. Please choose an option, then I will collect the details your team needs.
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      <span className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-center text-xs font-semibold text-emerald-400">
                        Book a slot
                      </span>
                      <span className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-center text-xs font-semibold text-emerald-400">
                        Ask a question
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-900 bg-slate-950 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
                Best fit
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built for a specific WhatsApp booking job.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                {page.buyerFit}
              </p>
              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/35 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Primary use case
                </p>
                <p className="mt-2 text-base font-semibold text-white">{page.primaryUseCase}</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {page.fitSignals.map((signal) => (
                <div key={signal} className="flex gap-3 rounded-2xl border border-slate-900 bg-slate-900/25 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <p className="text-sm leading-relaxed text-slate-300">{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-900 bg-slate-950 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Booking flow
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                What the WhatsApp assistant does before a human replies.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {page.bookingFlow.map((step, index) => (
                <article key={step.title} className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8">
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                    {index === 0 && <ClipboardList className="h-5 w-5" />}
                    {index === 1 && <CalendarCheck2 className="h-5 w-5" />}
                    {index === 2 && <Database className="h-5 w-5" />}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-900 bg-slate-950 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-8">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Official setup
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built on the official Cloud API and synced to your tools.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                Al Astoora sets up the approved WhatsApp infrastructure, message flow, handoff logic, and data sync so your team owns the customer records and the operating workflow.
              </p>
              <Link
                href="/whatsapp-automation"
                data-analytics-event="primary_cta_clicked"
                data-analytics-label={`vertical_${page.slug}_service_hub`}
                data-analytics-location="vertical_service_hub"
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:border-slate-700 hover:bg-slate-900 hover:text-white"
              >
                See the full automation service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/35 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <h3 className="text-lg font-semibold tracking-tight text-white">What can sync</h3>
              </div>
              <div className="mt-6 space-y-4">
                {page.syncPoints.map((point) => (
                  <div key={point} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <p className="text-sm leading-relaxed text-slate-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-900 bg-slate-950 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
              Read next
            </span>
            <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/35 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                {page.relatedInsight.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Use the insight guide for the broader buyer problem, then use this page when you are ready to map the WhatsApp booking flow.
              </p>
              <Link
                href={page.relatedInsight.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
              >
                Open the guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-900 bg-slate-950 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Questions
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Common questions before building this flow.
            </h2>

            <div className="mt-8 space-y-4">
              {page.faqItems.map((item) => (
                <article key={item.question} className="rounded-2xl border border-slate-900 bg-slate-900/25 p-5">
                  <h3 className="text-base font-semibold tracking-tight text-white">{item.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Want this WhatsApp booking flow for your business?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Tell us what your team books today. We will map the first reply, qualification questions, handoff, and sync that fit your operation.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                data-analytics-event="primary_cta_clicked"
                data-analytics-label={`vertical_${page.slug}_bottom_demo`}
                data-analytics-location="vertical_bottom_cta"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
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
                className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-7 py-4 text-sm font-semibold text-slate-200 transition-all hover:border-slate-700 hover:bg-slate-900 hover:text-white"
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
