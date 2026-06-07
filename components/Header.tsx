'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageSquare, Phone, X, Menu } from 'lucide-react';

const navSections = [
  { id: 'roi', label: 'ROI Calculator' },
  { id: 'portfolio', label: 'Case Studies' },
  { id: 'services', label: 'Features' },
  { id: 'faq', label: 'FAQ' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  const isInsightsActive = pathname?.startsWith('/insights');
  const isLogoActive = pathname === '/' && isAtTop;
  const showActiveSection = pathname === '/' && !isAtTop ? activeSection : '';

  // Track scroll position for header styling
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setIsAtTop(window.scrollY <= 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver for active section highlighting (only on homepage)
  useEffect(() => {
    if (pathname !== '/') {
      return;
    }

    const sectionIds = navSections.map((s) => s.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [pathname]);

  // Smooth scroll click handler
  const handleNavClick = useCallback((e: React.MouseEvent, id: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setMobileOpen(false);
    } else {
      setMobileOpen(false);
    }
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-emerald-500/10 bg-slate-950/90 backdrop-blur-2xl shadow-lg shadow-slate-950/50'
            : 'border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl'
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5 group"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <span
              className={`inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 sm:h-9 sm:w-9 ${
                isLogoActive
                  ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400'
                  : scrolled
                  ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-400'
                  : 'border-emerald-500/25 bg-emerald-500/10 text-emerald-400 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/20'
              }`}
            >
              <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </span>
            <p
              className={`whitespace-nowrap text-[15px] font-semibold tracking-tight sm:text-base transition-colors ${
                isLogoActive
                  ? 'text-emerald-400'
                  : 'text-slate-100 group-hover:text-emerald-400'
              }`}
            >
              Al Astoora
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navSections.map((section) => {
              const isActive = showActiveSection === section.id;
              return (
                <Link
                  key={section.id}
                  href={`/#${section.id}`}
                  onClick={(e) => handleNavClick(e, section.id)}
                  className={`relative px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-emerald-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {section.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-4 rounded-full bg-emerald-500 transition-all" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/insights"
              className={`relative px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-all duration-300 cursor-pointer ${
                isInsightsActive
                  ? 'text-emerald-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Insights
              {isInsightsActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-4 rounded-full bg-emerald-500 transition-all" />
              )}
            </Link>
          </nav>

          {/* Right CTA group */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
              className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-emerald-500/15 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/25 active:scale-95 sm:px-5 sm:text-sm"
            >
              Book Demo
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50 text-slate-300 transition-all hover:border-slate-700 hover:text-white cursor-pointer"
            >
              <div className="relative h-4 w-4">
                <Menu
                  className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${
                    mobileOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <X
                  className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${
                    mobileOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          mobileOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-down Panel */}
        <div
          className={`absolute top-[57px] left-0 right-0 border-b border-emerald-500/10 bg-slate-950/95 backdrop-blur-2xl shadow-2xl shadow-slate-950/60 transition-all duration-300 ${
            mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <nav className="mx-auto max-w-6xl px-5 py-6 space-y-1">
            {navSections.map((section) => {
              const isActive = showActiveSection === section.id;
              return (
                <Link
                  key={section.id}
                  href={`/#${section.id}`}
                  onClick={(e) => handleNavClick(e, section.id)}
                  className={`w-full flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : 'text-slate-300 hover:bg-slate-900/60 hover:text-white border-transparent'
                  }`}
                >
                  <span>{section.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/insights"
              onClick={() => setMobileOpen(false)}
              className={`w-full flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all cursor-pointer border ${
                isInsightsActive
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  : 'text-slate-300 hover:bg-slate-900/60 hover:text-white border-transparent'
              }`}
            >
              <span>Insights</span>
              {isInsightsActive && (
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              )}
            </Link>
            <div className="pt-4 border-t border-slate-900 mt-3 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-emerald-400 active:scale-[0.98]"
              >
                Book Demo
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-300 transition-all hover:border-slate-700 hover:text-white"
              >
                <Phone className="h-3.5 w-3.5" />
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
