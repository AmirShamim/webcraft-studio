import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  ChevronDown,
  Database,
  FileText,
  MessageSquare,
  Settings2,
  ShieldCheck,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { verticalAutomationPages } from '@/lib/vertical-automation-pages';

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

const answerSnippets = [
  {
    icon: MessageSquare,
    question: "What is Al Astoora's WhatsApp automation service?",
    answer:
      'Al Astoora builds a custom WhatsApp Cloud API automation stack for local service businesses. It replies to common questions, captures lead details, routes booking requests, shares PDFs, and syncs customer records to tools like Google Sheets, Notion, a CRM, or a custom database.',
  },
  {
    icon: ShieldCheck,
    question: 'How does the official Meta Cloud API setup work?',
    answer:
      'Al Astoora configures the approved Meta Cloud API, webhook routing, message templates, business profile flow, and handoff logic so your WhatsApp number runs on a server-side setup rather than a QR-code browser session.',
  },
  {
    icon: CheckCircle2,
    question: 'What counts as a qualified lead?',
    answer:
      'A qualified lead gives your team enough context to follow up: a usable contact detail, the business type, and the stated automation need, such as bookings, FAQs, PDFs, reminders, or CRM sync.',
  },
  {
    icon: Settings2,
    question: 'Who owns the automation stack and customer data?',
    answer:
      'Your business keeps the automation flow, integration logic, and customer records. Al Astoora builds the setup around your operation instead of forcing every conversation into a generic shared inbox workflow.',
  },
  {
    icon: Building2,
    question: 'Which businesses are the best fit?',
    answer:
      'The best fit is a local service business that already gets inquiries, bookings, menu requests, PDFs, appointment questions, or follow-ups through WhatsApp and needs faster first replies.',
  },
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
          telephone: '+91 92895 81053',
        },
        areaServed: ['IN', 'AE', 'SG', 'US'],
        serviceType: 'WhatsApp Cloud API automation',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://alastoora.tech/whatsapp-automation#faq',
        mainEntity: [...answerSnippets, ...faqItems].map((item) => ({
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
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-sans antialiased">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content" tabIndex={-1}>
        <section className="page-intro premium-grid">
          <div className="site-container">
            <div className="max-w-5xl reveal">
              <div className="section-label mb-6 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                <span>Official WhatsApp Cloud API automation</span>
              </div>

              <h1 className="editorial-title">
                WhatsApp automation for service businesses.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                Turn WhatsApp into a 24/7 front desk for your service business. Al Astoora builds custom WhatsApp automation stacks that answer common questions, capture lead details, share PDFs, book appointments, and sync customer data to the tools you already use.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  data-analytics-event="primary_cta_clicked"
                  data-analytics-label="automation_hero_book_demo"
                  data-analytics-location="whatsapp_automation_hero"
                  className="button-primary inline-flex items-center gap-2 text-sm"
                >
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/insights/official-meta-cloud-api-vs-unofficial-tools"
                  data-analytics-event="primary_cta_clicked"
                  data-analytics-label="automation_hero_api_difference"
                  data-analytics-location="whatsapp_automation_hero"
                  className="button-secondary inline-flex items-center text-sm"
                >
                  See the official API difference
                </Link>
              </div>
            </div>
            <nav aria-label="Explore WhatsApp automation" className="mt-10 flex flex-wrap gap-x-8 border-t border-[var(--line)] pt-4">
              {[
                { href: '#workflow', label: 'The workflow' },
                { href: '#industries', label: 'Find your booking flow' },
                { href: '#ownership', label: 'Ownership & setup' },
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
            <figure>
              <figcaption className="mb-6 flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
                <MessageSquare className="h-4 w-4" />
                Al Astoora assistant / Example booking conversation
              </figcaption>
              <ol className="grid gap-6 md:grid-cols-3 md:gap-10">
                <li className="space-y-3 border-t border-[var(--ink)]/20 pt-5">
                  <MessageSquare aria-hidden="true" className="h-5 w-5 text-[var(--accent)]" />
                  <p className="text-xs font-semibold text-[var(--muted)]">01 / First response</p>
                  <p className="text-sm leading-relaxed">Hi, welcome. What can I help you book today?</p>
                </li>
                <li className="space-y-3 border-t border-[var(--ink)]/20 pt-5">
                  <CalendarCheck2 aria-hidden="true" className="h-5 w-5 text-[var(--accent)]" />
                  <p className="text-xs font-semibold text-[var(--muted)]">02 / Customer request</p>
                  <p className="text-sm leading-relaxed">I want a dental cleaning appointment this week.</p>
                </li>
                <li className="space-y-3 border-t border-[var(--ink)]/20 pt-5">
                  <Database aria-hidden="true" className="h-5 w-5 text-[var(--accent)]" />
                  <p className="text-xs font-semibold text-[var(--muted)]">03 / Booking handoff</p>
                  <p className="text-sm leading-relaxed">Today 4:30 PM or tomorrow 11:00 AM. Your name, phone number, service, and preferred slot are captured for the clinic team.</p>
                </li>
              </ol>
            </figure>
          </div>
        </section>

        <section className="border-b border-[var(--line)] py-12 md:py-20">
          <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <div className="self-start lg:sticky lg:top-28">
              <span className="section-label">
                Quick answers
              </span>
              <h2 className="display-serif mt-4 text-3xl sm:text-4xl">
                Short answers for buyers comparing WhatsApp automation.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                These are the core service details: what gets built, how the official API setup works, who owns the stack, and when Al Astoora is the right fit.
              </p>
            </div>

            <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {answerSnippets.map((item) => (
                <article key={item.question} className="grid min-w-0 gap-x-5 py-7 sm:grid-cols-[24px_minmax(0,1fr)]">
                  <span className="mb-4 inline-flex text-[var(--accent)] sm:row-span-2 sm:pt-1">
                    <item.icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="scroll-mt-28 border-b border-[var(--line)] bg-[var(--surface)] py-12 md:py-20">
          <div className="site-container">
            <div className="max-w-3xl">
              <span className="section-label">
                What gets built
              </span>
              <h2 className="display-serif mt-4 text-3xl sm:text-4xl">
                A WhatsApp flow that captures the lead before your team replies.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                The system handles the repeatable first steps: greet the lead, understand the request, collect useful details, show booking options, and push the record into your operating tools.
              </p>
            </div>

            <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {automationSteps.map((step, index) => (
                <li key={step.title} className="min-w-0 border-t border-[var(--ink)]/25 pt-6">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center bg-[var(--highlight)] text-[var(--ink)]">
                      <step.icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="text-xs tabular-nums text-[var(--muted)]">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-[var(--line)] py-12 md:py-16">
          <div className="site-container grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="section-label">
                Local service fit
              </span>
              <h2 className="display-serif mt-4 text-3xl sm:text-4xl">
                Built for businesses that already sell through WhatsApp.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                The strongest fit is not a generic chatbot. It is a clear front-desk workflow for teams that get bookings, inquiries, menus, PDFs, and follow-up questions through WhatsApp every day.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {useCases.map((useCase) => (
                <div key={useCase} className="flex gap-3 border-t border-[var(--line)] py-5">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="scroll-mt-28 border-b border-[var(--line)] py-12 md:py-20">
          <div className="site-container">
            <div className="max-w-3xl">
              <span className="section-label">
                Booking pages
              </span>
              <h2 className="display-serif mt-4 text-3xl sm:text-4xl">
                Start with the booking flow that matches your business.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                These focused pages show how the same official WhatsApp automation stack handles common appointment and lead-capture jobs in local service businesses.
              </p>
            </div>

            <div className="mt-10 border-b border-[var(--line)]">
              {verticalAutomationPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/whatsapp-automation/${page.slug}`}
                  data-analytics-event="primary_cta_clicked"
                  data-analytics-label={`automation_vertical_${page.slug}`}
                  data-analytics-location="whatsapp_automation_verticals"
                  className="group grid min-w-0 gap-5 border-t border-[var(--line)] py-8 transition-colors hover:bg-[var(--surface)] md:grid-cols-[32px_minmax(0,1fr)_minmax(0,1fr)_100px] md:items-start md:gap-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  <span className="inline-flex pt-1 text-[var(--accent)]">
                    <CalendarCheck2 className="h-5 w-5" />
                  </span>
                  <h3 className="display-serif text-[28px] leading-tight transition-colors group-hover:text-[var(--accent)]">
                    {page.title}
                  </h3>
                  <p className="text-sm leading-7 text-[var(--muted)]">{page.metaDescription}</p>
                  <span className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[var(--accent)]">
                    Open page
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="ownership" className="dark-section scroll-mt-28 py-12 md:py-20 [&_p]:text-[var(--paper)]/75 [&_svg]:text-[var(--highlight)]">
          <div className="site-container grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="section-label">
                Business-owned setup
              </span>
              <h2 className="display-serif mt-4 text-3xl sm:text-4xl">
                Own the stack instead of renting another shared inbox.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                Al Astoora builds on the official Meta Cloud API and connects the flow to your business tools. The goal is a durable setup that belongs to your operation, not a temporary workaround.
              </p>
            </div>

            <div className="border-t border-white/20 pt-6 md:border-t-0 md:border-l md:pl-10">
              <div className="flex items-center gap-3">
                <Settings2 className="h-5 w-5 text-[var(--accent)]" />
                <h3 className="text-lg font-semibold">What this avoids</h3>
              </div>
              <div className="mt-6 space-y-4">
                {ownershipPoints.map((point) => (
                  <div key={point} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                    <p className="text-sm leading-relaxed text-[var(--muted)]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--line)] py-12 md:py-16">
          <div className="site-container">
            <div className="max-w-3xl">
              <span className="section-label">
                Read next
              </span>
              <h2 className="display-serif mt-4 text-3xl sm:text-4xl">
                Useful guides before you automate WhatsApp.
              </h2>
            </div>

            <div className="mt-10 grid gap-x-16 gap-y-8 md:grid-cols-2">
              {linkedInsights.map((insight) => (
                <Link
                  key={insight.href}
                  href={insight.href}
                  className="group grid min-w-0 gap-x-5 border-t border-[var(--line)] pt-6 sm:grid-cols-[24px_minmax(0,1fr)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  <span className="mb-4 inline-flex text-[var(--accent)] sm:row-span-3 sm:pt-1">
                    <FileText className="h-5 w-5" />
                  </span>
                  <h3 className="display-serif text-2xl leading-snug transition-colors group-hover:text-[var(--accent)]">
                    {insight.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">{insight.description}</p>
                  <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[var(--accent)]">
                    Read guide
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="questions" className="scroll-mt-28 border-b border-[var(--line)] py-12 md:py-20">
          <div className="site-container grid gap-x-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <span className="section-label">
                Questions
              </span>
              <h2 className="display-serif mt-4 text-3xl sm:text-4xl">
                Common WhatsApp automation questions.
              </h2>
            </div>

            <div className="mt-8 min-w-0 border-t border-[var(--line)] lg:mt-0">
              {faqItems.map((item) => (
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
              Ready to build your WhatsApp front desk?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
              Tell us how leads reach you today. We will map the first reply, booking path, handoff, and lead sync that fits your business.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                data-analytics-event="primary_cta_clicked"
                data-analytics-label="automation_bottom_book_demo"
                data-analytics-location="whatsapp_automation_bottom_cta"
                className="button-primary inline-flex items-center gap-2 text-sm"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/919289581053?text=Hi%20I%20want%20to%20automate%20WhatsApp%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="whatsapp_clicked"
                data-analytics-label="automation_bottom_whatsapp"
                data-analytics-location="whatsapp_automation_bottom_cta"
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
