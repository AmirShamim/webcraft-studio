'use client';

import {
  ShieldAlert,
  Server,
  Cpu,
  Trash2,
  Lock,
  ArrowRight,
  Database,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Client Ingestion',
    tech: 'Meta WhatsApp Cloud & Web Portal',
    desc: 'Client submits evidentiary scans, IDs, or agreement PDFs over TLS 1.3 encrypted endpoints.',
    status: 'Inbound Encrypted',
  },
  {
    step: '02',
    title: 'Ephemeral RAM Enclave',
    tech: 'Nitro Enclaves / Isolated Volatile RAM',
    desc: 'Documents execute strictly in volatile memory. Zero blocks written to persistent disk storage.',
    status: 'Zero Disk Writes',
  },
  {
    step: '03',
    title: 'Vision IDP & Redaction',
    tech: 'OpenCV & Legal-Vision-7B',
    desc: 'Mobile captures are deskewed, contrast-normalized, and sensitive client PII is redacted in-flight.',
    status: 'PII Protected',
  },
  {
    step: '04',
    title: 'RAFT SLM Synthesis',
    tech: 'Domain QLoRA & Vector Index',
    desc: 'Evidentiary questions are answered with locked citations; unverified extrapolations are rejected.',
    status: 'Citation Locked',
  },
  {
    step: '05',
    title: 'Instant Memory Purge',
    tech: 'Automated Cryptographic Wipe',
    desc: 'Payload pushed to your firm’s private DMS/CRM via webhook. RAM memory is cryptographically zeroed.',
    status: '0.00s Retention',
  },
];

export default function LegalArchitecture() {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden bg-[#07090e] py-16 text-slate-100 md:py-24"
    >
      {/* Background Subtle Gradient Mesh */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 opacity-25 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #4f46e5 0%, #ea580c 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="site-container relative">
        {/* Section Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className="h-[1px] w-36"
              style={{
                background: 'radial-gradient(circle, #6366f1 0%, transparent 100%)',
              }}
              aria-hidden="true"
            />
            <span className="text-xs font-semibold uppercase tracking-[2px] text-indigo-400">
              Ephemeral Security Architecture
            </span>
            <div
              className="h-[1px] w-36"
              style={{
                background: 'radial-gradient(circle, #6366f1 0%, transparent 100%)',
              }}
              aria-hidden="true"
            />
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Zero Data Retention By Architectural Design.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Client privilege and work-product protection are non-negotiable. Our ephemeral pipeline processes documents in memory and purges them instantly upon delivery.
          </p>
        </div>

        {/* 5-Step Pipeline Flow */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="dark-arch-card relative flex flex-col justify-between p-5 transition-all duration-200 hover:border-indigo-500/50"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs font-bold text-indigo-400">
                    Step {item.step}
                  </span>
                  <span className="rounded bg-indigo-950/70 px-2 py-0.5 font-mono text-[10px] text-indigo-300 ring-1 ring-indigo-500/30">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 font-mono text-[11px] text-orange-400">
                  {item.tech}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Telemetry Benchmarks Card */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-[#0e121c] p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-4 md:divide-x md:divide-white/10">
            <div className="text-center md:text-left">
              <span className="text-xs uppercase tracking-wider text-slate-400">Data Retention Time</span>
              <p className="mt-1 font-mono text-3xl font-bold text-emerald-400">0.00s</p>
              <span className="text-xs text-slate-500">Purged upon webhook ack</span>
            </div>
            <div className="text-center md:pl-6 md:text-left">
              <span className="text-xs uppercase tracking-wider text-slate-400">Citation Precision</span>
              <p className="mt-1 font-mono text-3xl font-bold text-indigo-400">100%</p>
              <span className="text-xs text-slate-500">Zero unreferenced claims</span>
            </div>
            <div className="text-center md:pl-6 md:text-left">
              <span className="text-xs uppercase tracking-wider text-slate-400">OCR Extraction Latency</span>
              <p className="mt-1 font-mono text-3xl font-bold text-amber-400">&lt; 1.8s</p>
              <span className="text-xs text-slate-500">Full 20-page legal PDF</span>
            </div>
            <div className="text-center md:pl-6 md:text-left">
              <span className="text-xs uppercase tracking-wider text-slate-400">Deployment SLA</span>
              <p className="mt-1 font-mono text-3xl font-bold text-purple-400">99.99%</p>
              <span className="text-xs text-slate-500">Dedicated Single-Tenant VPC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
