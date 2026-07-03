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
              Meta Developer Registered Stack
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Founded by Amir Shamim.
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Al Astoora is the registered trade name of founder and sole proprietor Amir Shamim, specializing in custom WhatsApp and conversational automation infrastructure.
            </p>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              We design and construct direct, enterprise-grade automated front desks using Meta&apos;s Official Developer Portal to capture leads, answer questions, and schedule customers in under 2 seconds.
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
                  Unlike unofficial QR code scan methods, the official API is fully approved by Meta. It ensures no risk of phone number bans, higher message speeds, and access to interactive action buttons.
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
                  We handle the setup end-to-end: Meta developer console configuration, webhook links, server databases, custom automated routing flows, and dashboard connections.
                </p>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}
