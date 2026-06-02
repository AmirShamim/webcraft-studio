'use client';

import Link from 'next/link';
import { MessageSquare, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 md:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 group">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 sm:h-9 sm:w-9 transition-colors group-hover:border-emerald-500/50 group-hover:bg-emerald-500/20">
            <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </span>
          <p className="whitespace-nowrap text-[15px] font-semibold tracking-tight text-slate-100 sm:text-base group-hover:text-emerald-400 transition-colors">
            Al Astoora
          </p>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <Link
            href="/contact"
            className="hidden items-center gap-2 whitespace-nowrap rounded-full border border-slate-800 bg-slate-900/50 px-3.5 py-2 text-xs font-medium text-slate-300 transition-all hover:border-slate-700 hover:text-white hover:bg-slate-900 min-[520px]:inline-flex sm:px-4 sm:text-sm"
          >
            <Phone className="h-3.5 w-3.5" />
            Contact Us
          </Link>
          <Link
            href="/contact"
            aria-label="Call Al Astoora"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50 text-slate-300 transition-all hover:border-slate-700 hover:text-white min-[520px]:hidden"
          >
            <Phone className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-emerald-500/15 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/25 active:scale-95 sm:px-5 sm:text-sm"
          >
            Book Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
