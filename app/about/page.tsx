import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, Shield, Award, Users, CheckCircle, MessageSquare, Database, Workflow } from 'lucide-react';
import Footer from '@/components/Footer';

export default function AboutPage() {
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
        <div className="reveal">
          <div className="page-intro">
            <div className="site-container grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div className="space-y-6">
            <div className="section-label flex items-center gap-2">
              <Shield className="h-3.5 w-3.5" />
              Official Registration & Verification
            </div>
            <h1 className="editorial-title max-w-3xl">
              Al Astoora.<br /><span className="text-[var(--accent)]">Built on ownership.</span>
            </h1>
            </div>
            <p className="max-w-md text-[var(--muted)] text-base sm:text-lg leading-relaxed lg:pb-2">
              Learn more about our mission, founder, and official business credentials.
            </p>
            </div>
          </div>

          <div className="text-base text-[var(--muted)] leading-relaxed [&_strong]:text-[var(--ink)]">
            <section className="site-container grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_2fr] lg:gap-20" aria-labelledby="mission-heading">
            <div><p className="section-label">01 / The studio</p><h2 id="mission-heading" className="display-serif mt-5 text-3xl text-[var(--ink)]">Infrastructure with<br />a direct connection.</h2></div>
            <div className="space-y-8">
            <div className="text-[var(--ink)]">
              <p className="display-serif text-2xl sm:text-4xl leading-snug">
                &ldquo;Al Astoora is a B2B SaaS infrastructure company providing enterprise-grade conversational AI and document intake platforms for professional services. We engineer secure, high-throughput systems on Meta&apos;s Official Developer Ecosystem.&rdquo;
              </p>
            </div>

            <p>
              Founded and lead by <strong>Amir Shamim</strong> as the sole proprietor, Al Astoora builds enterprise-grade communication systems and high-converting marketing structures directly integrated with Meta&rsquo;s official Cloud API.
            </p>
            </div>
            </section>

            <section className="border-y border-[var(--line)] bg-[var(--surface)]" aria-labelledby="ownership-heading">
            <div className="site-container grid gap-10 py-16 md:py-20 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div><p className="section-label">02 / Credentials</p>
            <h2 id="ownership-heading" className="display-serif mt-5 text-3xl text-[var(--ink)] flex items-start gap-3">
              <Award className="h-5 w-5 shrink-0 text-[var(--accent)]" />
              Ownership & Legal Structure
            </h2>
            </div>
            <div>
            <p>
              As a legally registered sole proprietorship in India, Al Astoora is committed to complete operational transparency. Under the leadership of its founder, Amir Shamim, the trade name is fully registered and compliant with all relevant local and national tax frameworks:
            </p>
            
            <ul className="mt-8 grid gap-x-8 text-sm text-[var(--muted)] sm:grid-cols-2 [&>li]:border-t [&>li]:border-[var(--line)] [&>li]:py-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[var(--accent)] shrink-0 mt-0.5" />
                <span>
                  <strong>Sole Proprietor & Founder:</strong> Amir Shamim (managing all engineering, integration design, and consulting operations).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-5 w-5 text-[var(--accent)] shrink-0 mt-0.5" />
                <span>
                  <strong>Trade Name Registration:</strong> &ldquo;Al Astoora&rdquo; is the officially registered and recognized trade name of Amir Shamim.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-5 w-5 text-[var(--accent)] shrink-0 mt-0.5" />
                <span>
                  <strong>MSME / Udyam Registered:</strong> Compliant with the Ministry of Micro, Small and Medium Enterprises, Government of India.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-5 w-5 text-[var(--accent)] shrink-0 mt-0.5" />
                <span>
                  <strong>GST Registered:</strong> Registered for Goods and Services Tax (GSTIN: 07RFVPS6101B1ZZ) to ensure compliance and support enterprise invoicing.
                </span>
              </li>
            </ul>
            </div>
            </div>
            </section>

            <section className="site-container grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_2fr] lg:gap-20" aria-labelledby="specialization-heading">
            <div><p className="section-label">03 / Our focus</p>
            <h2 id="specialization-heading" className="display-serif mt-5 text-3xl text-[var(--ink)] flex items-center gap-3">
              <Users className="h-5 w-5 shrink-0 text-[var(--accent)]" />
              Our Specialization
            </h2>
            </div>
            <div className="space-y-10">
            <p>
              We focus on removing friction between businesses and their clients by building custom, high-speed automated WhatsApp systems. We replace generic third-party SaaS middleware with customized cloud integrations hosted directly on Meta Developer infrastructure. This enables our clients to own 100% of their database pipelines, cut recurring licensing costs, and capture leads instantly around the clock.
            </p>
            <ol aria-label="Our integration approach" className="grid divide-y divide-[var(--line)] border-y border-[var(--line)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {[{ icon: MessageSquare, label: 'Client conversations', detail: 'WhatsApp' }, { icon: Workflow, label: 'Direct integration', detail: 'Meta Cloud API' }, { icon: Database, label: 'Your infrastructure', detail: 'Owned data pipelines' }].map(({ icon: Icon, label, detail }) => (
                <li key={label} className="py-6 sm:px-5 first:pl-0"><Icon aria-hidden="true" className="mb-5 h-5 w-5 text-[var(--accent)]" /><p className="text-sm font-semibold text-[var(--ink)]">{label}</p><p className="mt-1 text-xs">{detail}</p></li>
              ))}
            </ol>
            <Link href="/contact" className="button-primary inline-flex items-center gap-3">Discuss your project <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
            </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
