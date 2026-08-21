import { CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-slate-950 py-16 md:py-24 relative overflow-hidden border-t border-slate-900">
      
      {/* Light glow */}
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-emerald-500/[0.02] blur-[100px] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          
          {/* Main Info Box */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-900/40 relative">
            <span className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 text-xs font-semibold text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Official Meta Cloud API Developer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Enterprise Front-Office Infrastructure
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Al Astoora provides automated WhatsApp intake & qualification backends for legal, accounting, and advisory firms. We engineer direct, high-throughput systems on Meta&apos;s Official Cloud API backed by Google Cloud Platform (GCP) and Firestore.
            </p>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed">
              We handle the entire setup: Meta Business Verification, display name approval, custom intake workflows, and webhook routing directly into your internal case management system.
            </p>
          </div>

          {/* Quick FAQ / Detail Blocks */}
          <div className="space-y-5">
            <div className="flex gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white">Why Official Meta Cloud API?</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Unlike unofficial scrapers, the official API operates with zero risk of phone number bans, higher message throughput, 256-bit encryption, and direct enterprise webhook triggers.
                </p>
              </div>
            </div>

            <div className="flex gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white">Zero-Data AI Training Guarantee</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Confidential client paperwork and personal files are processed with strict isolation in Google Cloud. Data is never leaked or used to train public AI models.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


