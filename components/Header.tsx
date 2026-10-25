'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X, ShieldCheck } from 'lucide-react';

const navigation = [
  { href: '/#features', label: 'Platform & Pillars' },
  { href: '/#architecture', label: 'Zero-Retention Architecture' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#security', label: 'Legal Compliance' },
  { href: '/#faq', label: 'FAQ' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onDesktop = () => {
      if (desktop.matches) setMobileOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onDesktop);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onDesktop);
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--st)] bg-white/90 backdrop-blur-md transition-all duration-200">
      <div className="site-container flex h-16 items-center justify-between gap-4 md:h-[72px]">
        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="Al Astoora Legal AI home"
          className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-[var(--sr-indigo)]"
          onClick={() => setMobileOpen(false)}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#1e2238] to-[#07090e] text-white shadow-sm ring-1 ring-white/20">
            <span className="font-serif text-base font-bold italic tracking-tight text-[#f97316]">A</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[19px] font-semibold tracking-tight text-[var(--tx)]">
              Al Astoora<span className="text-[var(--sr-terracotta)]">.</span>
            </span>
            <span className="hidden rounded-full border border-indigo-200 bg-indigo-50/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--sr-indigo)] sm:inline-block">
              Legal AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-[var(--tx-secondary)] transition-colors hover:bg-[var(--sf-secondary)] hover:text-[var(--tx)] focus-visible:outline-2 focus-visible:outline-[var(--sr-indigo)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/login"
            aria-label="Sign In to Client Portal"
            className="btn-sarvam-secondary !min-h-[38px] !px-4 !py-1.5 !text-[13px] max-[520px]:!hidden"
          >
            Client Portal
          </Link>
          <Link
            href="/login"
            aria-label="Launch Workspace or Start Pilot"
            className="btn-sarvam-primary !min-h-[38px] !px-4 !py-1.5 !text-[13px]"
          >
            Launch Workspace <ArrowUpRight className="h-3.5 w-3.5 text-white/80" aria-hidden="true" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            ref={toggleRef}
            type="button"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--st)] bg-white text-[var(--tx)] hover:bg-[var(--sf-secondary)] focus-visible:outline-2 focus-visible:outline-[var(--sr-indigo)] lg:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <nav
        ref={menuRef}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!mobileOpen}
        className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-[var(--st)] bg-white px-6 pb-8 pt-4 shadow-xl lg:hidden"
      >
        <div className="flex flex-col gap-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between border-b border-[var(--st)] py-3 text-sm font-medium text-[var(--tx)] hover:text-[var(--sr-indigo)]"
            >
              {item.label}
              <ArrowUpRight className="h-3.5 w-3.5 text-[var(--tx-tertiary)]" />
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2.5 pt-2">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="btn-sarvam-secondary w-full justify-center text-center"
            >
              Client Portal (Sign In)
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="btn-sarvam-primary w-full justify-center text-center"
            >
              Launch Workspace
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}