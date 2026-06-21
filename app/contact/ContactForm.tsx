'use client';

import { useMemo, useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const whatsappNumber = '917011190158';

type FormState = {
  name: string;
  email: string;
  business: string;
  message: string;
};

const initialFormState: FormState = {
  name: '',
  email: '',
  business: 'Clinic / Healthcare',
  message: '',
};

function buildWhatsAppUrl(form: FormState) {
  const text = [
    'Hi Al Astoora, I want to discuss WhatsApp automation for my business.',
    '',
    `Name: ${form.name || '[your name]'}`,
    `Email: ${form.email || '[your email]'}`,
    `Business type: ${form.business}`,
    `Project goals: ${form.message || '[what you want to automate]'}`,
  ].join('\n');

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState('');
  const whatsappUrl = useMemo(() => buildWhatsAppUrl(form), [form]);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const submittedForm: FormState = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      business: String(formData.get('business') || initialFormState.business),
      message: String(formData.get('message') || ''),
    };
    const submittedUrl = buildWhatsAppUrl(submittedForm);

    setStatus('Opening WhatsApp with your project details filled in.');

    const opened = window.open(submittedUrl, '_blank');
    if (opened) {
      opened.opener = null;
      return;
    }

    window.location.href = submittedUrl;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={form.name}
          onChange={(event) => updateField('name', event.target.value)}
          placeholder="Alex Carter"
          className="mt-2 block w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:border-emerald-500 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
          Business Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={form.email}
          onChange={(event) => updateField('email', event.target.value)}
          placeholder="alex@company.com"
          className="mt-2 block w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:border-emerald-500 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="business" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
          Business Sector / Type
        </label>
        <select
          id="business"
          name="business"
          value={form.business}
          onChange={(event) => updateField('business', event.target.value)}
          className="mt-2 block w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 focus:border-emerald-500 focus:outline-none transition-colors cursor-pointer"
        >
          <option>Clinic / Healthcare</option>
          <option>Beauty / Hair Salon</option>
          <option>Restaurant / Café</option>
          <option>Gym / Fitness Studio</option>
          <option>Real Estate Agency</option>
          <option>Training Academy / Course Creator</option>
          <option>Other Service Business</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
          Project Details & Goals
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
          placeholder="Describe your current lead booking flow and where you lose the most inquiries..."
          className="mt-2 block w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:border-emerald-500 focus:outline-none transition-colors"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-emerald-400 active:scale-[0.98] shadow-md shadow-emerald-500/10 cursor-pointer"
      >
        <Send className="h-4 w-4" />
        Send Details on WhatsApp
      </button>

      <p className="text-center text-xs leading-relaxed text-slate-500" aria-live="polite">
        {status || 'This opens WhatsApp with your project details prefilled. No new account is needed.'}
      </p>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-slate-700 hover:bg-slate-900 hover:text-white"
      >
        <MessageSquare className="h-4 w-4 text-emerald-400" />
        Open WhatsApp instead
      </a>

      <noscript>
        <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
          JavaScript is off. Use the WhatsApp link above to send your project details.
        </p>
      </noscript>
    </form>
  );
}
