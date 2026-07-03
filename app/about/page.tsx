import Link from 'next/link';
import { ArrowLeft, Shield, Award, Users, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Custom Header matching privacy page */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 md:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 group">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/10 overflow-hidden sm:h-9 sm:w-9">
              <img src="/logo.jpg" alt="Al Astoora Logo" className="h-full w-full object-cover rounded-full" />
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 bg-slate-900/40 space-y-8 relative z-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium">
              <Shield className="h-3.5 w-3.5" />
              Official Registration & Verification
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight pb-2 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Learn more about our mission, founder, and official business credentials.
            </p>
          </div>

          <div className="border-t border-slate-800/80 my-6" />

          <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
            {/* Main Required Sentence */}
            <div className="p-6 rounded-2xl border border-emerald-500/10 bg-emerald-950/10 text-emerald-200">
              <p className="font-medium text-base sm:text-lg">
                &ldquo;Al Astoora is the registered trade name of Amir Shamim, specializing in WhatsApp automation solutions for businesses.&rdquo;
              </p>
            </div>

            <p>
              Founded and lead by <strong>Amir Shamim</strong> as the sole proprietor, Al Astoora builds enterprise-grade communication systems and high-converting marketing structures directly integrated with Meta&rsquo;s official Cloud API.
            </p>

            <h2 className="text-lg font-bold text-white pt-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-emerald-400" />
              Ownership & Legal Structure
            </h2>
            <p>
              As a legally registered sole proprietorship in India, Al Astoora is committed to complete operational transparency. Under the leadership of its founder, Amir Shamim, the trade name is fully registered and compliant with all relevant local and national tax frameworks:
            </p>
            
            <ul className="space-y-3.5 pl-2 mt-4 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Sole Proprietor & Founder:</strong> Amir Shamim (managing all engineering, integration design, and consulting operations).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Trade Name Registration:</strong> &ldquo;Al Astoora&rdquo; is the officially registered and recognized trade name of Amir Shamim.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>MSME / Udyam Registered:</strong> Compliant with the Ministry of Micro, Small and Medium Enterprises, Government of India.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>GST Registered:</strong> Registered for Goods and Services Tax (GSTIN: 07RFVPS6101B1ZZ) to ensure compliance and support enterprise invoicing.
                </span>
              </li>
            </ul>

            <h2 className="text-lg font-bold text-white pt-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-emerald-400" />
              Our Specialization
            </h2>
            <p>
              We focus on removing friction between businesses and their clients by building custom, high-speed automated WhatsApp systems. We replace generic third-party SaaS middleware with customized cloud integrations hosted directly on Meta Developer infrastructure. This enables our clients to own 100% of their database pipelines, cut recurring licensing costs, and capture leads instantly around the clock.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
