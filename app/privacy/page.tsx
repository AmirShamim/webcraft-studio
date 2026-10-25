import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://alastoora.tech/privacy',
  },
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1></div>
          <p className="text-sm text-[var(--muted)] md:pb-2">Last Updated: <time dateTime="2026-06-02">June 2, 2026</time></p>
          </div>
        </div>

        <div className="site-container grid gap-12 py-14 md:py-20 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <aside className="min-w-0">
            <nav aria-label="Privacy policy contents" className="border-t border-[var(--line)] lg:sticky lg:top-10">
              <p className="section-label py-6">Contents</p>
              {[
                ['information', 'Information we collect'],
                ['use', 'How we use information'],
                ['compliance', 'Meta API & compliance'],
                ['rights', 'Your rights & contacts'],
              ].map(([id, title], index) => <a key={id} href={`#${id}`} className="flex min-h-12 items-baseline gap-4 border-b border-[var(--line)] py-4 text-sm text-[var(--muted)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"><span className="text-xs text-[var(--accent)]">0{index + 1}</span>{title}</a>)}
              <Link href="/terms" className="mt-7 inline-flex min-h-11 items-center text-sm font-medium underline decoration-[var(--line)] underline-offset-4 hover:text-[var(--accent)]">Terms of Service</Link>
            </nav>
          </aside>
          <article aria-label="Privacy policy" className="min-w-0 max-w-[70ch] space-y-6 text-base text-[var(--muted)] leading-8 [&_h2]:scroll-mt-8 [&_h2]:border-t [&_h2]:border-[var(--line)] [&_h2]:pt-9 [&_h2]:mt-10 [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-[var(--accent)]">
            <p className="border-l-2 border-[var(--accent)] pl-6 text-lg leading-8 text-[var(--ink)]">
              At Al Astoora, we value your privacy and are committed to protecting your personal data. This privacy policy describes how we collect, use, and process information when you use our website, automation systems, and API integrations.
            </p>

            <h2 id="information" className="display-serif text-2xl sm:text-3xl text-[var(--ink)]">1. Information We Collect</h2>
            <p>
              We collect information that you submit directly via our request forms (e.g. name, email address, company details, message contents) and general visit statistics (IP address, country, device details). If we integrate custom WhatsApp systems, we route communication streams through official Meta Cloud APIs. We do not store or sell message histories.
            </p>

            <h2 id="use" className="display-serif text-2xl sm:text-3xl text-[var(--ink)]">2. How We Use Information</h2>
            <p>
              We use personal data solely to reply to inquiries, schedule client demos, and deploy your custom integration stacks. Custom databases and spreadsheet hookups created during integrations remain under your sole business control.
            </p>

            <h2 id="compliance" className="display-serif text-2xl sm:text-3xl text-[var(--ink)]">3. Meta API & Third-party Compliance</h2>
            <p>
              Our custom communication architecture relies on Meta&apos;s Official Cloud API. All message streams are subject to Meta&rsquo;s Business Messaging Policy. We configure secure HTTPS endpoints for webhooks to protect all database transactions.
            </p>

            <h2 id="rights" className="display-serif text-2xl sm:text-3xl text-[var(--ink)]">4. Your Rights & Contacts</h2>
            <p>
              You have the right to request deletion of any inquiry records we hold. For privacy requests, contact{' '}
              <a href="mailto:privacy@alastoora.tech" className="break-words font-medium text-[var(--accent)] underline underline-offset-4 hover:text-[var(--ink)]">
                privacy@alastoora.tech
              </a>
              . For general support questions, email{' '}
              <a href="mailto:alastoora@support.tin.computer" className="break-words font-medium text-[var(--accent)] underline underline-offset-4 hover:text-[var(--ink)]">
                alastoora@support.tin.computer
              </a>
              .
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
