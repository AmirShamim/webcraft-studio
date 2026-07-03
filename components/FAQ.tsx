import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Al Astoora and how does the automation system work?',
    answer:
      'Al Astoora is a premium conversational agency that engineers official automated response systems and booking funnels. We use the Meta Cloud API to connect your business WhatsApp directly to custom databases, calendars, and CRMs. When a lead contacts you, our automation greets them, answers FAQs, displays catalogs, and registers appointment requests in under 2 seconds, 24/7.',
  },
  {
    question: 'How is Al Astoora different from SaaS platforms like Respond.io or Trengo?',
    answer:
      'Broad subscription inbox platforms are built for teams that want hosted shared-inbox software with plans, seats, conversation allowances, and add-ons. Al Astoora builds a custom WhatsApp booking stack on the official Meta Cloud API for your business, with the code, integrations, and connected database handed over to you. Al Astoora does not add a monthly platform fee; Meta WhatsApp message costs can still apply.',
  },
  {
    question: 'What are the costs involved in setting up WhatsApp Cloud API?',
    answer:
      'We charge a one-time flat engineering setup fee to design, build, and deploy your custom system. After setup, you pay no Al Astoora monthly platform fee. Meta WhatsApp message costs can still apply through the official setup.',
  },
  {
    question: 'Is my WhatsApp business number safe from phone number bans?',
    answer:
      'Yes, 100% safe. Unlike unofficial automation tools that scan QR codes and trigger automated client emulator blocks (web automation scrapers), Al Astoora integrates directly through the official Meta Cloud API ecosystem. Because your business profile is verified and approved by Meta, there is zero risk of phone number suspensions or spam blocks.',
  },
  {
    question: 'What CRMs and calendars can be connected to the automation?',
    answer:
      'We build custom webhook routing to link your system with almost any modern CRM, calendar, or tool, including Google Sheets, Notion, HubSpot, Salesforce, Calendly, and custom SQL databases. Leads and scheduling details are synced instantly in real time without requiring extra paid connector tools.',
  },
  {
    question: 'How long does it take to deploy a custom automation stack?',
    answer:
      'A standard deployment takes between 7 to 14 business days. This includes Meta business verification, developer console setup, webhook deployment, database integrations, conversation flow testing, and training on how to use the backend sheets or CRM.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-slate-950 py-20 md:py-28 overflow-hidden border-t border-slate-900">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-emerald-500/[0.02] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-4xl px-5 md:px-8">
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <HelpCircle className="h-3.5 w-3.5" />
            Questions & Answers
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about official WhatsApp automation, setup costs, and software ownership.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
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
  );
}
