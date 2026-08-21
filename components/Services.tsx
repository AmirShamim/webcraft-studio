'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, FileCheck, MessageSquare, Database, Server } from 'lucide-react';

import type { FunnelEventName } from '@/lib/analytics';
import { verticalAutomationPages } from '@/lib/vertical-automation-pages';

const services = [
  {
    icon: MessageSquare,
    title: '24/7 Pricing & Routine FAQ Triage',
    description:
      'Answers repetitive questions regarding your services, pricing tiers, and document checklists automatically so your billable staff is never interrupted.',
  },
  {
    icon: FileCheck,
    title: 'Direct WhatsApp Document Ingestion',
    description:
      'Clients attach PDFs and images directly in WhatsApp. Our OCR engine validates file completeness, extracts key data fields, and confirms receipt in seconds.',
  },
  {
    icon: Database,
    title: 'Automated CRM & Webhook Syncing',
    description:
      'Dispatches structured client records and verified documents straight into your CRM, cloud storage (Google Drive/Dropbox), or internal case management.',
  },
  {
    icon: Server,
    title: 'Enterprise Meta Cloud & GCP Infrastructure',
    description:
      'Engineered directly on Meta’s Official Cloud API and Google Cloud Platform (GCP) with Firestore for maximum throughput, data stability, and zero downtime.',
  },
];

const verticalPageAnalyticsEvents: Partial<Record<string, FunnelEventName>> = {
  gyms: 'homepage_gym_vertical_clicked',
  'dental-clinics': 'homepage_dental_vertical_clicked',
} as const;

export default function Services() {
  return (
    <section id="services" className="bg-slate-950 py-16 md:py-24 relative overflow-hidden border-t border-slate-900">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-emerald-500/[0.03] blur-[120px] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        
        {/* Header block */}
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Core Infrastructure
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Built to Eliminate Routine Clerical Overhead
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            We automate the front-office intake and repetitive triage so your fee-earning team only spends their time consulting with high-intent, paying clients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {verticalAutomationPages.map((page) => (
            <Link
              key={page.slug}
              href={`/whatsapp-automation/${page.slug}`}
              data-analytics-event={verticalPageAnalyticsEvents[page.slug] ?? 'primary_cta_clicked'}
              data-analytics-label={`services_${page.slug}_vertical_page`}
              data-analytics-location="homepage_services"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 px-5 py-3.5 transition-all hover:border-emerald-500/40 hover:bg-slate-900/70"
            >
              <span>
                <span className="block text-sm font-semibold text-white">
                  {page.title}
                </span>
                <span className="mt-0.5 block text-xs leading-relaxed text-slate-400">
                  {page.primaryUseCase}
                </span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-emerald-400 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}


