import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export default function PlatformComparison() {
  return (
    <section className="bg-slate-950 py-20 md:py-28 relative overflow-hidden border-t border-slate-900">
      
      {/* Light Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-500/[0.03] blur-[120px] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
            Ownership vs SaaS
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Zero platform fees. Absolute stack ownership.
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Stop paying monthly rent on subscription software. We build your automation on Meta&apos;s official API so you own the code and customer database completely.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          
          {/* SaaS Card */}
          <div className="rounded-3xl border border-slate-900 bg-slate-950 p-6 sm:p-8 flex flex-col justify-between relative opacity-85">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Standard SaaS (Respond, Trengo, etc.)
                </span>
                <span className="text-rose-500 bg-rose-500/10 text-xs font-bold px-3 py-1 rounded-full border border-rose-500/20">
                  High Markup
                </span>
              </div>
              <p className="text-2xl font-bold text-slate-300 tracking-tight">
                Up to $3,600+ <span className="text-sm font-normal text-slate-500">/ year</span>
              </p>
              
              <ul className="mt-8 space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <X className="h-4 w-4 shrink-0 text-rose-500 mt-0.5" />
                  <span>Expensive markup per monthly user seat.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-4 w-4 shrink-0 text-rose-500 mt-0.5" />
                  <span>Your database is locked into their proprietary portal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-4 w-4 shrink-0 text-rose-500 mt-0.5" />
                  <span>Limits on number of contacts and message flows.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-4 w-4 shrink-0 text-rose-500 mt-0.5" />
                  <span>Risk of service interruption if SaaS company raises prices.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-900/60 flex items-center gap-2 text-xs text-slate-600">
              <ShieldAlert className="h-4 w-4" />
              <span>SaaS lock-in traps your operations data.</span>
            </div>
          </div>

          {/* Al Astoora Card */}
          <div className="rounded-3xl border border-emerald-500/20 bg-slate-900/40 p-6 sm:p-8 flex flex-col justify-between relative shadow-xl shadow-emerald-950/10">
            <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-emerald-500/[0.02] blur-2xl" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                  Al Astoora Custom Stack
                </span>
                <span className="text-emerald-400 bg-emerald-500/10 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/20">
                  Direct Cost
                </span>
              </div>
              <p className="text-2xl font-bold text-white tracking-tight">
                $0 Platform Fees <span className="text-sm font-normal text-slate-500">/ forever</span>
              </p>

              <ul className="mt-8 space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>Only pay Meta direct wholesale per-message costs (~$0.01).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>You own the infrastructure, code, and direct API key.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>Unlimited monthly active contacts and custom agents.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>Seamless connection to other platforms (CRM, Sheets).</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-900 flex items-center gap-2 text-xs text-emerald-400">
              <Sparkles className="h-4 w-4" />
              <span>Full ownership remains with your business.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
