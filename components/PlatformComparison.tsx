import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export default function PlatformComparison() {
  return (
    <section className="bg-slate-950 py-16 md:py-24 relative overflow-hidden border-t border-slate-900">
      
      {/* Light Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-500/[0.03] blur-[120px] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
            Workflow Transformation
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Manual Clerical Labor vs Automated Infrastructure
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Stop paying expensive fee-earning staff to chase missing paperwork and answer the same pricing questions. Reclaim your team&apos;s full advisory potential.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          
          {/* Legacy Card */}
          <div className="rounded-3xl border border-slate-900 bg-slate-950 p-6 sm:p-7 flex flex-col justify-between relative opacity-85">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Manual Team Intake
                </span>
                <span className="text-rose-400 bg-rose-500/10 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-rose-500/20">
                  Expensive Overhead
                </span>
              </div>
              <p className="text-xl font-bold text-slate-200 tracking-tight">
                Associates Wasting Hours on Chores
              </p>
              
              <ul className="mt-6 space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <X className="h-4 w-4 shrink-0 text-rose-500 mt-0.5" />
                  <span>Senior staff interrupted by routine pricing and FAQ questions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="h-4 w-4 shrink-0 text-rose-500 mt-0.5" />
                  <span>Manual email chase-ups for missing passport and tax IDs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="h-4 w-4 shrink-0 text-rose-500 mt-0.5" />
                  <span>Salaried payroll burned on non-billable administrative tasks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="h-4 w-4 shrink-0 text-rose-500 mt-0.5" />
                  <span>Slow turnaround times and frustrated prospective clients.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-900 flex items-center gap-2 text-xs text-slate-500">
              <ShieldAlert className="h-4 w-4 shrink-0" />
              <span>Manual intake consumes up to 20 hrs/week per professional.</span>
            </div>
          </div>

          {/* Al Astoora Platform Card */}
          <div className="rounded-3xl border border-emerald-500/20 bg-slate-900/40 p-6 sm:p-7 flex flex-col justify-between relative shadow-xl shadow-emerald-950/10">
            <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-emerald-500/[0.02] blur-2xl" />
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Al Astoora Infrastructure
                </span>
                <span className="text-emerald-400 bg-emerald-500/10 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Automated Front-Office
                </span>
              </div>
              <p className="text-xl font-bold text-white tracking-tight">
                Staff Only Consults Paying Clients
              </p>

              <ul className="mt-6 space-y-3.5 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>Instant 24/7 automated FAQ responses and service fee breakdowns.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>Direct WhatsApp document attachment with instant OCR validation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>Structured records and files synced automatically via webhooks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>Fee-earning staff focuses 100% on closed, revenue-generating cases.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-900 flex items-center gap-2 text-xs text-emerald-400">
              <Sparkles className="h-4 w-4 shrink-0" />
              <span>Built on Official Meta Cloud API & GCP Firestore backend.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


