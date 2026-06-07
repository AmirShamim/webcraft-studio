'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Zap, Shield, Sparkles } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'WhatsApp & IG Automation',
    description:
      'Instant replies, PDF catalogs, lead captures, and customized table or class appointment bookings. All running inside one reliable, high-converting customer flow.',
  },
  {
    icon: Zap,
    title: 'Custom CRM Integrations',
    description:
      'Connect leads directly to Google Sheets, Notion, or your existing booking tool. Auto-record customer contacts without paying seat fees on expensive platforms.',
  },
  {
    icon: Shield,
    title: 'Official Cloud API Setup',
    description:
      'Engineered directly on Meta’s developer framework. Get stable, verified business profiles, fast bulk broadcast throughput, and robust server reliability.',
  },
  {
    icon: Sparkles,
    title: 'Smart Re-engagement Funnels',
    description:
      'Automatically follow up with cold leads or send personalized appointment notifications, birthday offers, and customer retention campaigns.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-950 py-20 md:py-28 relative overflow-hidden border-t border-slate-900">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-emerald-500/[0.03] blur-[120px] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        
        {/* Header block */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Features
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Conversational architecture built for customer generation.
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            We don&apos;t build generic chatbots. We design custom automated systems engineered to increase conversions, lower human error, and save hundreds of hours weekly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
