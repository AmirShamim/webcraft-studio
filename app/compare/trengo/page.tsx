import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  Database,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  UsersRound,
  WalletCards,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const checkedDate = 'June 23, 2026';
const whatsappHref = `https://wa.me/917011190158?text=${encodeURIComponent(
  'Hi I am comparing Trengo with a custom WhatsApp automation setup for my business'
)}`;

const sources = [
  {
    label: 'Trengo pricing',
    href: 'https://trengo.com/prices',
    detail:
      'Plan prices, included users, conversation allowances, shared inbox, WhatsApp Business API, AI, and add-ons.',
  },
  {
    label: 'Trengo WhatsApp product page',
    href: 'https://trengo.com/products/whatsapp',
    detail:
      'Official WhatsApp Business API connection, shared inbox, AI responses, and team features.',
  },
  {
    label: 'Trengo WhatsApp pricing guide',
    href: 'https://trengo.com/blog/whatsapp-business-costs',
    detail:
      'WhatsApp Business cost factors, Business Solution Provider role, message categories, and API fit.',
  },
  {
    label: 'Trengo Cloud API guide',
    href: 'https://trengo.com/blog/whatsapp-business-cloud-api',
    detail:
      'Cloud API framing, custom solution language, and cloud-hosted WhatsApp setup.',
  },
  {
    label: 'WhatsApp Business Platform pricing',
    href: 'https://whatsappbusiness.com/products/platform-pricing/',
    detail:
      "Meta's per-message pricing model and message categories for the official platform.",
  },
];

const decisionCards = [
  {
    icon: CalendarCheck2,
    title: 'Choose Al Astoora when the job is WhatsApp booking',
    points: [
      'You want a custom flow for appointment requests, trial bookings, FAQs, and lead handoff.',
      'You want customer details sent into tools like Google Sheets, Notion, a CRM, or your own database.',
      'You want the business to keep the automation logic instead of renting a broad shared inbox.',
    ],
  },
  {
    icon: UsersRound,
    title: 'Choose Trengo when the job is a team inbox',
    points: [
      'You need a shared inbox for WhatsApp, email, Instagram, Facebook, and other channels.',
      'You want packaged user seats, conversation allowances, AI features, and support tiers.',
      'You want a subscription customer-engagement platform rather than a custom WhatsApp stack.',
    ],
  },
];

const comparisonRows = [
  {
    label: 'Main fit',
    alAstoora:
      'Custom WhatsApp automation for local service bookings, lead intake, FAQs, PDF sharing, and handoff.',
    trengo:
      'A customer engagement platform and shared inbox for conversations across WhatsApp, email, Instagram, Facebook, and more.',
  },
  {
    label: 'WhatsApp setup',
    alAstoora:
      'Built on the official Meta Cloud API with a flow matched to your booking and follow-up process.',
    trengo:
      'Trengo says it connects teams to the official WhatsApp Business API through its shared inbox.',
  },
  {
    label: 'Pricing model',
    alAstoora:
      'No Al Astoora monthly platform fee. Meta WhatsApp message costs can still apply through the official setup.',
    trengo:
      'Trengo lists Boost from EUR 299/month annually or EUR 349/month monthly, and Pro from EUR 499/month annually or EUR 599/month monthly.',
  },
  {
    label: 'Usage limits',
    alAstoora:
      'The stack is scoped around your workflow, your number, and the handoff tools you approve.',
    trengo:
      'Trengo lists included users and conversation allowances, with add-on pricing for extra users and conversations.',
  },
  {
    label: 'Ownership angle',
    alAstoora:
      'Al Astoora builds the automation flow, customer record path, and integration logic around your operation.',
    trengo:
      'Trengo terms describe a hosted software service. They also describe data return, deletion, and backup responsibilities after termination.',
  },
];

const safeClaims = [
  'Trengo is an official WhatsApp option, so this page should not call it unofficial.',
  'Trengo serves several industries, so this page should not say it is bad for local service businesses.',
  'WhatsApp Business Platform fees can still apply, so this page should not say WhatsApp itself is free.',
  'The safe contrast is custom owned booking stack versus broad subscription inbox platform.',
];

const faqItems = [
  {
    question: 'Is Trengo unofficial?',
    answer:
      'No. Trengo says it connects teams to the official WhatsApp Business API. The difference is not official versus unofficial; it is a broad shared inbox platform versus a custom WhatsApp booking stack.',
  },
  {
    question: 'Does Al Astoora remove all WhatsApp costs?',
    answer:
      'No. Al Astoora does not add a monthly SaaS platform fee for a shared inbox, but Meta WhatsApp message costs can still apply through the official platform.',
  },
  {
    question: 'Is Trengo bad for local service businesses?',
    answer:
      'No. Trengo covers several industries and can fit teams that need an omnichannel inbox. Al Astoora is narrower: WhatsApp-first booking, intake, and handoff for local service businesses.',
  },
  {
    question: 'Why compare Al Astoora with Trengo?',
    answer:
      'Local businesses searching for WhatsApp automation may compare custom setups with packaged platforms. This page explains the difference without making unsupported claims.',
  },
];

export const metadata: Metadata = {
  title: 'Al Astoora vs Trengo | WhatsApp Automation Comparison',
  description:
    'Compare Al Astoora and Trengo for WhatsApp automation. See when a custom local-service booking stack fits better than a broad shared inbox platform.',
  alternates: {
    canonical: 'https://alastoora.tech/compare/trengo',
  },
  openGraph: {
    title: 'Al Astoora vs Trengo | WhatsApp Automation Comparison',
    description:
      'A sourced comparison for local service businesses choosing between custom WhatsApp booking automation and a broad shared inbox platform.',
    url: 'https://alastoora.tech/compare/trengo',
    siteName: 'Al Astoora',
    type: 'website',
  },
};

function buildJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://alastoora.tech/compare/trengo#webpage',
        name: 'Al Astoora vs Trengo',
        description:
          'A sourced comparison of Al Astoora and Trengo for WhatsApp automation.',
        url: 'https://alastoora.tech/compare/trengo',
        dateModified: '2026-06-23',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://alastoora.tech/compare/trengo#faq',
        mainEntity: faqItems.map((item) => ({
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
            name: 'Compare',
            item: 'https://alastoora.tech/compare',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Al Astoora vs Trengo',
            item: 'https://alastoora.tech/compare/trengo',
          },
        ],
      },
    ],
  };
}

export default function TrengoComparisonPage() {
  const jsonLd = buildJsonLd();

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
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Sourced comparison draft</span>
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.08]">
                Al Astoora vs Trengo for WhatsApp automation.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                Trengo is a broad shared inbox platform. Al Astoora is a custom WhatsApp booking
                stack for local service businesses that want owned automation, lead handoff, and
                no Al Astoora monthly platform fee.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  data-analytics-event="primary_cta_clicked"
                  data-analytics-label="trengo_comparison_book_demo"
                  data-analytics-location="trengo_comparison_hero"
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
                  data-analytics-label="trengo_comparison_whatsapp"
                  data-analytics-location="trengo_comparison_hero"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-7 py-4 text-sm font-semibold text-slate-200 transition-all hover:border-slate-700 hover:bg-slate-900 hover:text-white"
                >
                  <MessageSquare className="h-4 w-4" />
                  Ask on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full rounded-3xl border border-slate-800 bg-slate-950 p-5 shadow-2xl shadow-slate-950/40">
                <div className="flex items-center gap-3 border-b border-slate-900 pb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <WalletCards className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Quick answer</p>
                    <p className="text-xs text-emerald-400">What this comparison is really about</p>
                  </div>
                </div>

                <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300">
                  <p>
                    Pick Trengo if the main problem is team-wide inbox management across several
                    channels.
                  </p>
                  <p>
                    Pick Al Astoora if the main problem is turning WhatsApp inquiries into booking
                    requests, structured lead records, and a handoff your team can act on.
                  </p>
                  <p className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-emerald-200">
                    Sources checked {checkedDate}. Trengo pricing and package details can change,
                    so confirm them before making a final buying decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-900 bg-slate-950 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
                Decision guide
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Choose based on the job you need WhatsApp to do.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {decisionCards.map((card) => (
                <article key={card.title} className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8">
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                    <card.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-white">{card.title}</h3>
                  <div className="mt-5 space-y-4">
                    {card.points.map((point) => (
                      <div key={point} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <p className="text-sm leading-relaxed text-slate-400">{point}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-900 bg-slate-950 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Side-by-side
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A fair comparison without risky claims.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                Trengo is not framed here as unofficial or unsuitable. The factual difference is
                platform shape: subscription inbox software versus a custom WhatsApp booking stack.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/25">
              <div className="grid border-b border-slate-800 bg-slate-950/70 text-sm font-semibold text-white md:grid-cols-[0.75fr_1.1fr_1.1fr]">
                <div className="border-b border-slate-800 p-4 md:border-b-0 md:border-r">Factor</div>
                <div className="border-b border-slate-800 p-4 md:border-b-0 md:border-r">Al Astoora</div>
                <div className="p-4">Trengo</div>
              </div>

              {comparisonRows.map((row) => (
                <div
                  key={row.label}
                  className="grid border-b border-slate-800 last:border-b-0 md:grid-cols-[0.75fr_1.1fr_1.1fr]"
                >
                  <div className="border-b border-slate-800 p-4 text-sm font-semibold text-white md:border-b-0 md:border-r">
                    {row.label}
                  </div>
                  <div className="border-b border-slate-800 p-4 text-sm leading-relaxed text-slate-300 md:border-b-0 md:border-r">
                    {row.alAstoora}
                  </div>
                  <div className="p-4 text-sm leading-relaxed text-slate-300">{row.trengo}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-900 bg-slate-950 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
                Local-service fit
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Al Astoora is narrower on purpose.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                Local service teams often need a fast first reply, a booking question, a clean
                handoff, and a record in the right tool. They do not always need a broad inbox for
                every channel.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'Gym trial bookings and membership inquiries.',
                'Dental and clinic appointment requests.',
                'Salon service questions and preferred time slots.',
                'Restaurant menu, event, and table inquiries.',
                'Training academy course and follow-up flows.',
                'Home service job requests with location and urgency.',
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-slate-900 bg-slate-900/25 p-4">
                  <Database className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <p className="text-sm leading-relaxed text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-900 bg-slate-950 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Guardrails
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                What this page does not claim.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {safeClaims.map((claim) => (
                <div key={claim} className="rounded-2xl border border-slate-900 bg-slate-900/25 p-5">
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <p className="text-sm leading-relaxed text-slate-300">{claim}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-900 bg-slate-950 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
              Sources
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Public sources checked {checkedDate}.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              This draft uses primary source pages where possible. Pricing and package details can
              change, so the sources should be checked again before publication.
            </p>

            <div className="mt-8 space-y-4">
              {sources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 rounded-2xl border border-slate-900 bg-slate-900/25 p-5 transition-colors hover:border-slate-800 hover:bg-slate-900/50"
                >
                  <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>
                    <span className="block text-sm font-semibold text-white transition-colors group-hover:text-emerald-400">
                      {source.label}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-400">
                      {source.detail}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-900 bg-slate-950 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Questions
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Common questions when comparing Al Astoora and Trengo.
            </h2>

            <div className="mt-8 space-y-4">
              {faqItems.map((item) => (
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
              Want the WhatsApp booking flow instead of another inbox?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Tell us what customers ask on WhatsApp today. We will map the first reply, booking
              questions, handoff, and lead sync that fit your business.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                data-analytics-event="primary_cta_clicked"
                data-analytics-label="trengo_comparison_bottom_book_demo"
                data-analytics-location="trengo_comparison_bottom_cta"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/whatsapp-automation"
                data-analytics-event="primary_cta_clicked"
                data-analytics-label="trengo_comparison_bottom_service_page"
                data-analytics-location="trengo_comparison_bottom_cta"
                className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/40 px-7 py-4 text-sm font-semibold text-slate-200 transition-all hover:border-slate-700 hover:bg-slate-900 hover:text-white"
              >
                View WhatsApp service
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
