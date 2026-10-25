import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'FAQ | Al Astoora — B2B Document Intake Infrastructure Questions',
  description:
    'Frequently Asked Questions about Al Astoora’s enterprise B2B document intake engine, Meta Cloud API security, integrations, and platform licensing.',
  alternates: {
    canonical: 'https://alastoora.tech/faq',
  },
  openGraph: {
    title: 'FAQ | Al Astoora Document & Intake Infrastructure',
    description: 'Everything you need to know about our enterprise B2B document intake engine and platform licensing.',
    url: 'https://alastoora.tech/faq',
    siteName: 'Al Astoora',
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-sans antialiased">
      <Header />
      
      <main id="main-content" tabIndex={-1}>
        <FAQ headingLevel="h1" />
        <section className="dark-section border-t border-[var(--line)] py-14 md:py-20" aria-labelledby="faq-contact-heading">
          <div className="site-container grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div><p className="section-label">A conversation, not a checklist</p><h2 id="faq-contact-heading" className="display-serif mt-5 text-3xl sm:text-4xl">Let’s talk about your firm.</h2></div>
            <Link href="/contact" className="button-primary inline-flex w-fit items-center gap-4">Discuss your requirements <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
