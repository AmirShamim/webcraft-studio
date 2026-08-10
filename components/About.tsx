import { CheckCircle2, MessageCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-slate-950 py-20 md:py-28 relative overflow-hidden border-t border-slate-900">
      
      {/* Light glow */}
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-emerald-500/[0.02] blur-[100px] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Main Info Box */}
          <div className="glass-panel rounded-3xl p-8 border border-slate-800 bg-slate-900/40 relative">
            <span className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 text-xs font-semibold text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Meta Developer Ecosystem Partner
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Enterprise B2B Infrastructure
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Al Astoora is a B2B SaaS infrastructure company providing enterprise-grade conversational AI and document intake platforms for professional services. We engineer secure, high-throughput systems on Meta&apos;s Official Developer Ecosystem.
            </p>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              We design and construct direct, enterprise-grade automated backends using Meta&apos;s Official Developer Portal to collect KYC documents, verify paperwork, and route case files in under 2 seconds.
            </p>
          </div>

          {/* Quick FAQ / Detail Blocks */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-white">Why Meta Cloud API?</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Unlike unofficial scrapers, the official API is fully approved by Meta. It ensures zero risk of phone number bans, higher message throughput, 256-bit encryption, and direct enterprise webhook triggers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-white">How does integration work?</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  We handle the infrastructure setup end-to-end: Meta developer console configuration, secure webhook endpoints, document verification pipelines, and direct CRM/cloud storage syncing.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

