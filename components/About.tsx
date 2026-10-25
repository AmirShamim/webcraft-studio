import { CheckCircle2, MessageCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="premium-grid border-t border-[var(--line)] bg-[var(--paper)] py-16 text-[var(--ink)] md:py-24">
      <div className="site-container">
        <div className="reveal grid gap-7 border-b border-[var(--line)] pb-10 md:grid-cols-[1fr_2fr] md:gap-16 md:pb-14">
          <span className="section-label self-start md:pt-3">About Al Astoora</span>
          <h2 className="section-title max-w-4xl">Technology should<br /><span className="italic text-[var(--accent)]">make room for people.</span></h2>
        </div>
        <div className="grid items-start gap-10 pt-10 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:pt-14">
          <div>
            <p className="display-serif text-[28px] leading-tight">A studio for<br />the work that matters.</p>
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)]">
              We build conversational automation and document intake systems for professional service firms. Our focus is the work between a client&apos;s first message and a complete, usable case file.
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
              Clear requests. Organized information. Fewer manual handoffs. Infrastructure that supports the people doing the work.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
            <div className="border-t border-[var(--ink)] pt-6">
              <span className="mb-8 flex items-center justify-between text-xs tabular-nums text-[var(--muted)]">01<MessageCircle aria-hidden="true" strokeWidth={1.25} className="h-7 w-7 text-[var(--accent)]" /></span>
              <div>
                <h3 className="text-base font-semibold">Official foundations.</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Meta&apos;s WhatsApp Cloud API connects client conversations to structured workflows. Messaging remains subject to Meta&apos;s policies and account requirements.
                </p>
              </div>
            </div>
            <div className="border-t border-[var(--ink)] pt-6">
              <span className="mb-8 flex items-center justify-between text-xs tabular-nums text-[var(--muted)]">02<CheckCircle2 aria-hidden="true" strokeWidth={1.25} className="h-7 w-7 text-[var(--accent)]" /></span>
              <div>
                <h3 className="text-base font-semibold">Your operations, connected.</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  We handle developer configuration, webhook endpoints, document intake workflows, and CRM integration around the tools your team already uses.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

