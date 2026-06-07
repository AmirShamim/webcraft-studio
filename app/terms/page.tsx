import Link from 'next/link';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 md:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 group">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 sm:h-9 sm:w-9">
              <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </span>
            <p className="whitespace-nowrap text-[15px] font-semibold tracking-tight text-slate-100 sm:text-base group-hover:text-emerald-400 transition-colors">
              Al Astoora
            </p>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-800 bg-slate-900/50 px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:border-slate-700 hover:text-white sm:text-sm"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="relative py-16 md:py-24 max-w-4xl mx-auto px-5">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 bg-slate-900/40 space-y-6">
          <h1 className="text-3xl font-extrabold text-white tracking-tight border-b border-slate-900 pb-4">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500">Last Updated: June 2, 2026</p>

          <div className="space-y-6 text-sm text-slate-300 leading-relaxed font-sans">
            <p>
              Welcome to Al Astoora (&quot;Agency&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By accessing our website, purchasing our automation setups, or utilizing our custom API engineering services, you agree to comply with and be bound by the following Terms of Service.
            </p>

            <h2 className="text-lg font-bold text-white pt-4">1. Scope of Services</h2>
            <p>
              We design, build, and deploy custom conversation automation stacks utilizing official Meta Developer portals, direct API integrations, database integrations, and custom website/landing page components. We provide these on a flat fee structure or maintenance retainer.
            </p>

            <h2 className="text-lg font-bold text-white pt-4">2. Client Responsibilities</h2>
            <p>
              To initiate development, clients must provide necessary permissions (e.g. Meta Developer Portal business verification access) and standard api access where necessary. The client is solely responsible for compliance with local WhatsApp business messaging policies in their target markets (UAE, SEA, US, etc.).
            </p>

            <h2 className="text-lg font-bold text-white pt-4">3. Fees, Meta Charges & Billing</h2>
            <p>
              Our fee covers our design, development, and engineering setup. Clients pay Meta (Facebook/WhatsApp Cloud API) directly for message volume costs based on standard official country tariffs. Al Astoora does not markup or charge platform commission on message streams.
            </p>

            <h2 className="text-lg font-bold text-white pt-4">4. Intellectual Property</h2>
            <p>
              Upon complete payout of project deliverables, ownership of the custom dashboard connections, spreadsheet templates, and client-side scripts is fully transferred to the client. Core agency framework templates remain the proprietary property of Al Astoora.
            </p>

            <h2 className="text-lg font-bold text-white pt-4">5. Limitation of Liability</h2>
            <p>
              In no event shall Al Astoora be liable for any indirect, incidental, or consequential damages resulting from Meta API outages, client business policy violations, or third-party service interruptions.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
