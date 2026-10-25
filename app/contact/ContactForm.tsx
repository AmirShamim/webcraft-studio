'use client';

import { useState } from 'react';
import { Send, MessageSquareCode, ShieldCheck, Check } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const whatsappNumber = '919289581053';

type LegalFormState = {
  name: string;
  email: string;
  firmName: string;
  practiceArea: string;
  documentVolume: string;
  message: string;
  pilotRequested: boolean;
};

const initialFormState: LegalFormState = {
  name: '',
  email: '',
  firmName: '',
  practiceArea: 'Litigation & Dispute Resolution',
  documentVolume: '500 - 2,500 docs/mo (Growth Practice)',
  message: '',
  pilotRequested: true,
};

function buildLegalWhatsAppUrl(form: LegalFormState) {
  const text = [
    'Hello Al Astoora Legal AI, I would like to schedule a walkthrough / request pilot provisioning for our practice.',
    '',
    `Name: ${form.name || '[Attorney / Partner Name]'}`,
    `Firm / Organization: ${form.firmName || '[Law Firm / Legal Dept]'}`,
    `Work Email: ${form.email || '[Email]'}`,
    `Practice Area: ${form.practiceArea}`,
    `Monthly Document Volume: ${form.documentVolume}`,
    `14-Day Pilot Requested: ${form.pilotRequested ? 'YES (14-Day Zero-Retention Pilot)' : 'No'}`,
    `Workflow Context & Goals: ${form.message || '[Automated intake & legal SLM reasoning]'}`,
  ].join('\n');

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function ContactForm() {
  const [form, setForm] = useState<LegalFormState>(initialFormState);
  const [status, setStatus] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function updateField<K extends keyof LegalFormState>(field: K, value: LegalFormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => ({ ...current, [field]: '' }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = buildLegalWhatsAppUrl(form);

    trackEvent('contact_form_handoff_submitted', {
      has_name: form.name.trim().length > 0,
      has_email: form.email.trim().length > 0,
      has_firm: form.firmName.trim().length > 0,
      practice_area: form.practiceArea,
      document_volume: form.documentVolume,
      pilot_requested: form.pilotRequested,
      message_length: form.message.trim().length,
    });

    setStatus('Walkthrough request received. Opening secure WhatsApp consultation channel...');

    const opened = window.open(url, '_blank');
    if (opened) {
      opened.opener = null;
      return;
    }

    window.location.href = url;
  }

  return (
    <form
      onSubmit={handleSubmit}
      onInvalid={(event) => {
        const field = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        setFieldErrors((current) => ({ ...current, [field.name]: field.validationMessage }));
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
          Attorney / Contact Name <span className="text-[var(--sr-terracotta)]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          value={form.name}
          onChange={(e) => updateField('name', e.target.value)}
          placeholder="Elena Vance, Esq."
          className="mt-1.5 w-full rounded-lg border border-[var(--st)] bg-slate-50/50 px-3.5 py-2.5 text-sm text-[var(--tx)] placeholder:text-slate-400 focus:border-[var(--sr-indigo)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
        />
        {fieldErrors.name && <p className="mt-1 text-xs text-rose-600">{fieldErrors.name}</p>}
      </div>

      {/* Business Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
          Firm Work Email <span className="text-[var(--sr-terracotta)]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder="elena@vancelegal.com"
          className="mt-1.5 w-full rounded-lg border border-[var(--st)] bg-slate-50/50 px-3.5 py-2.5 text-sm text-[var(--tx)] placeholder:text-slate-400 focus:border-[var(--sr-indigo)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
        />
        {fieldErrors.email && <p className="mt-1 text-xs text-rose-600">{fieldErrors.email}</p>}
      </div>

      {/* Law Firm Name */}
      <div className="sm:col-span-2">
        <label htmlFor="firmName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
          Law Firm / Corporate Legal Department <span className="text-[var(--sr-terracotta)]">*</span>
        </label>
        <input
          type="text"
          id="firmName"
          name="firmName"
          required
          value={form.firmName}
          onChange={(e) => updateField('firmName', e.target.value)}
          placeholder="Vance, Sterling &amp; Partners LLP"
          className="mt-1.5 w-full rounded-lg border border-[var(--st)] bg-slate-50/50 px-3.5 py-2.5 text-sm text-[var(--tx)] placeholder:text-slate-400 focus:border-[var(--sr-indigo)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      {/* Practice Area */}
      <div>
        <label htmlFor="practiceArea" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
          Primary Practice Vertical
        </label>
        <select
          id="practiceArea"
          name="practiceArea"
          value={form.practiceArea}
          onChange={(e) => updateField('practiceArea', e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-[var(--st)] bg-slate-50/50 px-3.5 py-2.5 text-sm text-[var(--tx)] focus:border-[var(--sr-indigo)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
        >
          <option>Litigation &amp; Dispute Resolution</option>
          <option>Corporate Secretarial &amp; M&amp;A</option>
          <option>Immigration &amp; Visa Advisory</option>
          <option>Tax, Audit &amp; Regulatory Compliance</option>
          <option>In-House Corporate Counsel</option>
          <option>Other Specialized Practice</option>
        </select>
      </div>

      {/* Document Volume */}
      <div>
        <label htmlFor="documentVolume" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
          Est. Monthly Document Volume
        </label>
        <select
          id="documentVolume"
          name="documentVolume"
          value={form.documentVolume}
          onChange={(e) => updateField('documentVolume', e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-[var(--st)] bg-slate-50/50 px-3.5 py-2.5 text-sm text-[var(--tx)] focus:border-[var(--sr-indigo)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
        >
          <option>&lt; 500 docs/mo (Starter / Solo Practice)</option>
          <option>500 - 2,500 docs/mo (Growth Practice)</option>
          <option>2,500 - 10,000 docs/mo (Litigation Team)</option>
          <option>10,000+ docs/mo (Enterprise Sovereign Cloud)</option>
        </select>
      </div>

      {/* Workflow Context */}
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
          Workflow Goals &amp; Intake Bottlenecks <span className="text-[var(--sr-terracotta)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          value={form.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="Tell us about your firm's intake bottlenecks (e.g. chasing client KYC/evidentiary files, manual PDF contract classification, extracting structured schemas into your DMS, or generating citation-locked briefs)..."
          className="mt-1.5 w-full rounded-lg border border-[var(--st)] bg-slate-50/50 px-3.5 py-2.5 text-sm text-[var(--tx)] placeholder:text-slate-400 focus:border-[var(--sr-indigo)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
        />
        {fieldErrors.message && <p className="mt-1 text-xs text-rose-600">{fieldErrors.message}</p>}
      </div>

      {/* 14-Day Pilot Checkbox */}
      <div className="sm:col-span-2 rounded-xl border border-indigo-100 bg-indigo-50/60 p-3.5">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.pilotRequested}
            onChange={(e) => updateField('pilotRequested', e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[var(--sr-indigo)] focus:ring-indigo-500"
          />
          <div className="text-xs text-indigo-950">
            <span className="font-semibold">Provision 14-Day Zero-Retention Pilot Workspace</span>
            <p className="mt-0.5 text-indigo-900/70">
              Check this box to fast-track single-tenant pilot access with sample litigation and document test suites.
            </p>
          </div>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn-sarvam-accent sm:col-span-2 w-full justify-center !min-h-[46px] !text-sm !font-semibold"
      >
        <Send className="h-4 w-4" />
        Request Confidential Walkthrough &amp; Pilot
      </button>

      {status && (
        <p className="sm:col-span-2 rounded-lg bg-emerald-50 p-3 text-center text-xs font-semibold text-emerald-800">
          {status}
        </p>
      )}

      {/* Direct WhatsApp link */}
      <a
        href={buildLegalWhatsAppUrl(form)}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:col-span-2 inline-flex items-center justify-center gap-2 text-xs font-medium text-[var(--tx-secondary)] hover:text-[var(--sr-indigo)] hover:underline"
      >
        <MessageSquareCode className="h-4 w-4 text-emerald-600" />
        Or initiate consultation directly on WhatsApp
      </a>
    </form>
  );
}
