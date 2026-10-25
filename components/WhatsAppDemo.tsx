'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CalendarCheck2, Check, CheckCheck, FileCheck2, FileText, FolderOpen, MessageCircle, Pause, Play, RotateCcw, ShieldCheck } from 'lucide-react';

const messages = [
  { sender: 'client', text: 'Hi, I need help with the documents for my visa application.' },
  { sender: 'firm', text: 'Welcome! Please share your passport and tax ID to start your case file.' },
  { sender: 'client', text: 'Here are my documents.', attachment: true },
  { sender: 'firm', text: 'Both documents are verified and added to your case file. When would you like your consultation?' },
  { sender: 'client', text: 'Tomorrow at 3 PM works for me.' },
  { sender: 'firm', text: 'You’re booked. Your calendar invitation is on its way.', booking: true },
];

export default function WhatsAppDemo() {
  const [visibleCount, setVisibleCount] = useState(1);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setTabVisible(!document.hidden);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    if (containerRef.current) observer.observe(containerRef.current);
    updatePreference();
    updateVisibility();
    preference.addEventListener('change', updatePreference);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', updatePreference);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (paused || !inView || !tabVisible || reducedMotion || visibleCount === messages.length) return;
    const timer = window.setTimeout(() => setVisibleCount((count) => count + 1), 2300);
    return () => window.clearTimeout(timer);
  }, [paused, inView, tabVisible, reducedMotion, visibleCount]);

  useEffect(() => {
    const transcript = transcriptRef.current;
    if (transcript && !reducedMotion) transcript.scrollTop = transcript.scrollHeight;
  }, [visibleCount, reducedMotion]);

  const displayedCount = reducedMotion ? messages.length : visibleCount;
  const complete = displayedCount === messages.length;

  return (
    <figure ref={containerRef} className="whatsapp-demo min-w-0 w-full max-w-[460px] justify-self-center lg:justify-self-end" aria-label="Illustrative WhatsApp client intake conversation">
      <figcaption className="mb-3 flex flex-wrap items-center justify-between gap-3 text-caption text-[var(--muted)]">
        <span className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />WhatsApp client intake</span>
        <span>Illustrative conversation</span>
      </figcaption>
      <div className="overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-[0_24px_70px_-35px_rgba(32,35,31,0.25)]">
        <div className="flex items-center gap-3 border-b border-[var(--line)] bg-white px-4 py-4 sm:px-6">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[var(--night)] text-xs font-semibold text-[var(--highlight)]">AA</span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">Al Astoora</p>
            <p className="mt-0.5 text-caption text-[var(--muted)]">Client services / Immigration</p>
          </div>
          <ShieldCheck className="h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
        </div>
        <div className="grid md:grid-cols-[1.25fr_1fr]">
        <div ref={transcriptRef} role="region" aria-label="Sample conversation transcript" tabIndex={0} className="whatsapp-transcript h-[360px] overflow-y-auto overscroll-contain px-3 py-4 sm:h-[400px] sm:px-6">
          <p className="mb-5 text-center text-caption font-medium text-[var(--muted)]">TODAY</p>
          <ol className="flex flex-col gap-3">
            {messages.slice(0, displayedCount).map((message, index) => (
              <li key={message.text} className={`whatsapp-message max-w-[88%] rounded-md border px-3 py-2.5 text-xs leading-[1.65] ${message.sender === 'client' ? 'self-end border-[#c6dfcc] bg-[#deefdf]' : 'self-start border-[#e1e5df] bg-white'}`}>
                <span className="sr-only">{message.sender === 'client' ? 'Client: ' : 'Al Astoora: '}</span>
                <p>{message.text}</p>
                {message.attachment && (
                  <div className="mt-2 space-y-2 border-t border-[#bad4c1] pt-2">
                    {['Passport.pdf', 'Tax ID.pdf'].map((filename) => <div key={filename} className="flex items-center gap-2"><FileText className="h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" /><span className="flex-1 font-medium">{filename}</span><CheckCheck className="h-3.5 w-3.5 text-[#397985]" aria-hidden="true" /></div>)}
                  </div>
                )}
                {message.booking && <div className="mt-2 flex items-center gap-2 border-t border-[var(--line)] pt-2 font-semibold text-[var(--accent)]"><CalendarCheck2 className="h-4 w-4 shrink-0" aria-hidden="true" />Consultation · Tomorrow, 3 PM</div>}
                <div className="mt-1 flex items-center justify-end gap-1 text-caption text-[#526056]" aria-hidden="true">10:{index < 4 ? '02' : '03'}<CheckCheck className="h-3 w-3 text-[#397985]" /></div>
              </li>
            ))}
          </ol>
        </div>
        <aside aria-label="Sample case status" className="flex flex-col border-t border-[var(--line)] bg-[var(--paper)] p-5 md:border-l md:border-t-0 md:p-7">
          <div className="flex items-center justify-between gap-3">
            <span className="text-caption font-semibold uppercase text-[var(--muted)]">Case workspace</span>
            <FolderOpen className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
          </div>
          <h3 className="display-serif mt-5 text-[24px] leading-tight">A clearer picture.<br /><span className="italic text-[var(--accent)]">At every step.</span></h3>
          <ol className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {[
              { label: 'Client connected', ready: displayedCount >= 2 },
              { label: 'Documents received', ready: displayedCount >= 3 },
              { label: 'Case file organised', ready: displayedCount >= 4 },
              { label: 'Consultation booked', ready: complete },
            ].map((stage, index) => (
              <li key={stage.label} className="flex min-h-10 items-center gap-3 py-2 text-xs">
                <span className={`flex h-5 w-5 shrink-0 items-center justify-center text-caption ${stage.ready ? 'bg-[var(--highlight)] text-[var(--ink)]' : 'border border-[var(--line)] text-[var(--muted)]'}`}>
                  {stage.ready ? <Check className="h-3 w-3" aria-hidden="true" /> : `0${index + 1}`}
                </span>
                <span className={stage.ready ? 'text-[var(--ink)]' : 'text-[var(--muted)]'}>{stage.label}</span>
                <span className="sr-only">{stage.ready ? ': complete' : ': pending'}</span>
              </li>
            ))}
          </ol>
          <p className="mt-5 flex items-center gap-2 text-caption text-[var(--muted)]"><ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />One conversation. One connected case.</p>
        </aside>
        </div>
        <div className="flex min-h-[68px] items-center justify-between gap-2 border-t border-[var(--line)] px-3 py-2 sm:px-6">
          <span className="flex items-center gap-2 text-caption font-medium text-[var(--accent)]"><FileCheck2 className="h-4 w-4 shrink-0" aria-hidden="true" />{complete ? 'Ready for the consultation' : displayedCount >= 4 ? 'Documents added to case file' : 'Client intake in progress'}</span>
          {!reducedMotion && <div className="flex shrink-0 gap-1">
            {!complete && <button type="button" className="demo-control" onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Play conversation' : 'Pause conversation'} title={paused ? 'Play conversation' : 'Pause conversation'}>{paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}</button>}
            <button type="button" className="demo-control" onClick={() => { setVisibleCount(1); setPaused(false); }} aria-label="Replay conversation" title="Replay conversation"><RotateCcw className="h-4 w-4" /></button>
          </div>}
        </div>
      </div>
    </figure>
  );
}