import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400 py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">

            <div className="mt-7 grid gap-4 text-sm md:grid-cols-4 mb-8">
              <div className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Legal Business Name</p>
                <p className="mt-2 font-medium text-slate-100">Amir Shamim</p>
                <p className="text-xs text-slate-400 mt-1">(Trade Name: Al Astoora)</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Registered Address</p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-100">
                  4th, 52/C, MN Block Lane, New Steel Work,<br />
                  Jamia Nagar, New Delhi,<br />
                  South East Delhi, Delhi - 110025
                </p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Registered Business Phone</p>
                <p className="mt-2 font-medium text-slate-100">+91 92895 81053</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Tax Registration</p>
                <h2 className="mt-2 font-medium text-slate-100">GSTIN: 07RFVPS6101B1ZZ</h2>
              </div>
            </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/10 overflow-hidden">
                <img src="/logo.jpg" alt="Al Astoora Logo" className="h-full w-full object-cover rounded-full" />
              </span>
              <span className="text-base font-semibold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                Al Astoora
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              We design and engineer bespoke WhatsApp & Instagram automation infrastructure using Meta&apos;s official Cloud API. Stop losing revenue to delayed responses.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-emerald-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-emerald-400 transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
            <div className="mt-5 border-t border-slate-900 pt-5 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                Support
              </p>
              <a
                href="mailto:alastoora@support.tin.computer"
                className="mt-2 block break-all text-slate-400 transition-colors hover:text-emerald-400"
              >
                alastoora@support.tin.computer
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="space-y-1.5 text-center sm:text-left">
            <p>© {currentYear} Al Astoora. All rights reserved. Built on Meta&apos;s Official Developer Ecosystem.</p>
            <p className="text-slate-500">
              Al Astoora | Founded by Amir Shamim<br className="sm:hidden" />
              <span className="hidden sm:inline"> | </span>MSME/Udyam Registered | GST Registered
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-300 font-medium">Official Meta Developer Integration</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
