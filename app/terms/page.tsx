import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://alastoora.tech/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-sans antialiased">
      <header className="border-b border-[var(--line)] bg-[var(--paper)]">
        <div className="site-container flex min-h-[76px] items-center justify-between gap-3 py-4 lg:min-h-[88px]">
          <Link href="/" aria-label="Al Astoora home" className="flex min-h-11 min-w-0 items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
            <Image src="/logo.jpg" alt="" width={36} height={36} className="shrink-0" />
            <span className="display-serif text-[23px] leading-none sm:text-[26px]">Al Astoora<span className="text-[var(--accent)]">.</span></span>
          </Link>

          <Link
            href="/"
            aria-label="Back to Home"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-xs hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:text-sm"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            <span className="hidden sm:inline">Back to </span>Home
          </Link>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <div className="page-intro reveal">
          <div className="site-container grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="section-label">Al Astoora / Legal</p>
          <h1 className="editorial-title mt-5">
            Terms of Service
          </h1></div>
          <p className="text-sm text-[var(--muted)] md:pb-2">Last Updated: <time dateTime="2026-06-02">June 2, 2026</time></p>
          </div>
        </div>

        <div className="site-container grid gap-12 py-14 md:py-20 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <aside className="min-w-0">
            <nav aria-label="Terms of service contents" className="border-t border-[var(--line)] lg:sticky lg:top-10">
              <p className="section-label py-6">Contents</p>
              {[
                ['services', 'Scope of services'],
                ['responsibilities', 'Client responsibilities'],
                ['billing', 'Fees & billing'],
                ['ownership', 'Intellectual property'],
                ['liability', 'Limitation of liability'],
              ].map(([id, title], index) => <a key={id} href={`#${id}`} className="flex min-h-12 items-baseline gap-4 border-b border-[var(--line)] py-4 text-sm text-[var(--muted)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"><span className="text-xs text-[var(--accent)]">0{index + 1}</span>{title}</a>)}
              <Link href="/privacy" className="mt-7 inline-flex min-h-11 items-center text-sm font-medium underline decoration-[var(--line)] underline-offset-4 hover:text-[var(--accent)]">Privacy Policy</Link>
            </nav>
          </aside>
          <article aria-label="Terms of service" className="min-w-0 max-w-[70ch] space-y-6 text-base text-[var(--muted)] leading-8 [&_h2]:scroll-mt-8 [&_h2]:border-t [&_h2]:border-[var(--line)] [&_h2]:pt-9 [&_h2]:mt-10">
            <p className="border-l-2 border-[var(--accent)] pl-6 text-lg leading-8 text-[var(--ink)]">
              Welcome to Al Astoora (&quot;Agency&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By accessing our website, purchasing our automation setups, or utilizing our custom API engineering services, you agree to comply with and be bound by the following Terms of Service.
            </p>

            <h2 id="services" className="display-serif text-2xl sm:text-3xl text-[var(--ink)]">1. Scope of Services</h2>
            <p>
              We design, build, and deploy custom conversation automation stacks utilizing official Meta Developer portals, direct API integrations, database integrations, and custom website/landing page components. We provide these on a flat fee structure or maintenance retainer.
            </p>

            <h2 id="responsibilities" className="display-serif text-2xl sm:text-3xl text-[var(--ink)]">2. Client Responsibilities</h2>
            <p>
              To initiate development, clients must provide necessary permissions (e.g. Meta Developer Portal business verification access) and standard api access where necessary. The client is solely responsible for compliance with local WhatsApp business messaging policies in their target markets (UAE, SEA, US, etc.).
            </p>

            <h2 id="billing" className="display-serif text-2xl sm:text-3xl text-[var(--ink)]">3. Fees, Meta Charges & Billing</h2>
            <p>
              Our fee covers our design, development, and engineering setup. Clients pay Meta (Facebook/WhatsApp Cloud API) directly for message volume costs based on standard official country tariffs. Al Astoora does not markup or charge platform commission on message streams.
            </p>

            <h2 id="ownership" className="display-serif text-2xl sm:text-3xl text-[var(--ink)]">4. Intellectual Property</h2>
            <p>
              Upon complete payout of project deliverables, ownership of the custom dashboard connections, spreadsheet templates, and client-side scripts is fully transferred to the client. Core agency framework templates remain the proprietary property of Al Astoora.
            </p>

            <h2 id="liability" className="display-serif text-2xl sm:text-3xl text-[var(--ink)]">5. Limitation of Liability</h2>
            <p>
              In no event shall Al Astoora be liable for any indirect, incidental, or consequential damages resulting from Meta API outages, client business policy violations, or third-party service interruptions.
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
