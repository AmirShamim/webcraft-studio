import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  Database,
  FileText,
  MessageSquare,
  Settings2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'WhatsApp Automation for Local Service Businesses | Al Astoora',
  description:
    'Custom WhatsApp Cloud API automation for local service businesses. Capture leads, answer FAQs, book appointments, and sync customer details without monthly platform fees.',
  alternates: {
    canonical: 'https://alastoora.tech/whatsapp-automation',
  },
  openGraph: {
    title: 'WhatsApp Automation for Local Service Businesses | Al Astoora',
    description:
      'Build a business-owned WhatsApp automation stack for lead capture, bookings, FAQs, and CRM sync on the official Meta Cloud API.',
    url: 'https://alastoora.tech/whatsapp-automation',
    siteName: 'Al Astoora',
    type: 'website',
  },
};

const automationSteps = [
  {
    icon: ShieldCheck,
    title: 'Official Cloud API setup',
    description:
      'We configure the Meta Cloud API, webhooks, message templates, and business profile flow so your WhatsApp number runs on the approved stack.',
  },
  {
    icon: MessageSquare,
    title: 'Instant WhatsApp response',
    description:
      'Every inquiry gets a clear first reply, service choices, and next steps before the lead cools down or messages another business.',
  },
  {
    icon: CalendarCheck2,
    title: 'Booking and qualification flow',
    description:
      'Customers can share what they need, choose a service, request a slot, and leave the details your team needs to follow up.',
  },
  {
    icon: Database,
    title: 'Lead sync to your tools',
    description:
      'Names, phone numbers, services, preferred times, and notes can flow into Google Sheets, Notion, a CRM, or a custom database.',
  },
];

const useCases = [
  'Gyms booking trial sessions and sharing class schedules.',
  'Clinics collecting treatment interest and appointment requests.',
  'Restaurants sending menus, table booking options, and event inquiry flows.',
  'Salons answering service questions and capturing preferred time slots.',
  'Training academies sharing course details and follow-up reminders.',
  'Home service teams routing job requests with location and urgency.',
];

const ownershipPoints = [
  'No QR-code tools that depend on a browser session.',
  'No monthly platform markup added by a generic shared inbox.',
  'Your business keeps the automation flow, customer records, and integration logic.',
  'Your only recurring message cost is paid directly through Meta where applicable.',
];

const linkedInsights = [
  {
    href: '/insights/official-meta-cloud-api-vs-unofficial-tools',
    title: 'Official Meta Cloud API vs unofficial tools',
    description: 'See why the approved API stack is safer than QR-based automation tools.',
  },
  {
    href: '/insights/whatsapp-crm-integration-google-sheets-notion',
    title: 'WhatsApp CRM integration with Sheets and Notion',
    description: 'Learn how captured leads can move into the tools your team already uses.',
  },
  {
    href: '/insights/zero-platform-fees-whatsapp-automation-setup',
    title: 'Zero platform fees for WhatsApp automation',
    description: 'Understand the ownership model behind a business-owned automation stack.',
  },
  {
    href: '/insights/reduce-lead-response-time-under-2-seconds',
    title: 'Reduce lead response time under 2 seconds',
    description: 'See why first-response speed matters for high-intent WhatsApp inquiries.',
  },
];

const faqItems = [
  {
    question: 'What does a WhatsApp automation stack include?',
    answer:
      'A typical stack includes the official Meta Cloud API setup, webhook routing, automated replies, lead capture, FAQ answers, booking prompts, and a sync to a sheet, Notion workspace, CRM, or database.',
  },
  {
    question: 'Is this a monthly SaaS platform?',
    answer:
      'No. Al Astoora builds a custom setup for your business. You do not pay a monthly platform fee to use a shared tool. Any Meta message costs are paid through the official Meta setup where applicable.',
  },
  {
    question: 'Can the flow hand off to a person?',
    answer:
      'Yes. The automation can collect the context first, then route the conversation to your team when a lead needs a human reply or a custom quote.',
  },
  {
    question: 'Which businesses is this built for?',
    answer:
      'The strongest fit is a local service business that already depends on WhatsApp for inquiries, bookings, follow-ups, menus, PDFs, or appointment questions.',
  },
];

function buildJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://alastoora.tech/whatsapp-automation#service',
        name: 'WhatsApp automation for local service businesses',
        description:
          'Custom WhatsApp Cloud API automation for lead capture, FAQs, bookings, and CRM sync.',
        url: 'https://alastoora.tech/whatsapp-automation',
        provider: {
          '@type': 'Organization',
          name: 'Al Astoora',
          url: 'https://alastoora.tech',
          telephone: '+91-7011190158',
        },
        areaServed: ['IN', 'AE', 'SG', 'US'],
        serviceType: 'WhatsApp Cloud API automation',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://alastoora.tech/whatsapp-automation#faq',
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
            name: 'WhatsApp Automation',
            item: 'https://alastoora.tech/whatsapp-automation',
          },
        ],
      },
    ],
  };
}

export default function WhatsAppAutomationPage() {
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
                <Sparkles className="h-3.5 w-3.5" />
                <span>Official WhatsApp Cloud API automation</span>
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.08]">
                Turn WhatsApp into a 24/7 front desk for your service business.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                Al Astoora builds custom WhatsApp automation stacks that answer common questions, capture lead details, share PDFs, book appointments, and sync customer data to the tools you already use.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
                >
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/insights/official-meta-cloud-api-vs-unofficial-tools"
                  className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/40 px-7 py-4 text-sm font-semibold text-slate-200 transition-all hover:border-slate-700 hover:bg-slate-900 hover:text-white"
                >
                  See the official API difference
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full rounded-3xl border border-slate-800 bg-slate-950 p-5 shadow-2xl shadow-slate-950/40">
                <div className="flex items-center gap-3 border-b border-slate-900 pb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Al Astoora assistant</p>
                    <p className="text-xs text-emerald-400">Online and ready to qualify leads</p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="max-w-[88%] rounded-2xl rounded-bl-sm border border-slate-800 bg-slate-900 px-4 py-3 text-sm leading-relaxed text-slate-200">
                    Hi, welcome. What can I help you book today?
                  </div>
                  <div className="ml-auto max-w-[84%] rounded-2xl rounded-br-sm bg-emerald-500 px-4 py-3 text-sm font-medium leading-relaxed text-slate-950">
                    I want a dental cleaning appointment this week.
                  </div>
                  <div className="max-w-[92%] rounded-2xl rounded-bl-sm border border-slate-800 bg-slate-900 px-4 py-3 text-sm leading-relaxed text-slate-200">
                    Great. Please choose a time, then I will save your name, phone number, service, and preferred slot for the clinic team.
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      <span className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-center text-xs font-semibold text-emerald-400">
                        Today 4:30 PM
                      </span>
                      <span className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-center text-xs font-semibold text-emerald-400">
                        Tomorrow 11:00 AM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-900 bg-slate-950 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                What gets built
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A WhatsApp flow that captures the lead before your team replies.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                The system handles the repeatable first steps: greet the lead, understand the request, collect useful details, show booking options, and push the record into your operating tools.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {automationSteps.map((step) => (
                <article key={step.title} className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8">
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-900 bg-slate-950 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
                Local service fit
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built for businesses that already sell through WhatsApp.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                The strongest fit is not a generic chatbot. It is a clear front-desk workflow for teams that get bookings, inquiries, menus, PDFs, and follow-up questions through WhatsApp every day.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {useCases.map((useCase) => (
                <div key={useCase} className="flex gap-3 rounded-2xl border border-slate-900 bg-slate-900/25 p-4">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <p className="text-sm leading-relaxed text-slate-300">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-900 bg-slate-950 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-8">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Business-owned setup
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Own the stack instead of renting another shared inbox.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                Al Astoora builds on the official Meta Cloud API and connects the flow to your business tools. The goal is a durable setup that belongs to your operation, not a temporary workaround.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/35 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Settings2 className="h-5 w-5 text-emerald-400" />
                <h3 className="text-lg font-semibold tracking-tight text-white">What this avoids</h3>
              </div>
              <div className="mt-6 space-y-4">
                {ownershipPoints.map((point) => (
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
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
                Read next
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Useful guides before you automate WhatsApp.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {linkedInsights.map((insight) => (
                <Link
                  key={insight.href}
                  href={insight.href}
                  className="glass-panel glass-panel-hover group flex min-h-[220px] flex-col rounded-2xl p-6"
                >
                  <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                    <FileText className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold leading-snug tracking-tight text-white transition-colors group-hover:text-emerald-400">
                    {insight.title}
                  </h3>
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-400">{insight.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    Read guide
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
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
              Common WhatsApp automation questions.
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
              Ready to build your WhatsApp front desk?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Tell us how leads reach you today. We will map the first reply, booking path, handoff, and lead sync that fits your business.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/917011190158?text=Hi%20I%20want%20to%20automate%20WhatsApp%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
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
