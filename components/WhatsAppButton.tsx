import { MessageSquareCode } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <aside aria-label="Quick contact" className="group fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      <span className="pointer-events-none rounded-full border border-slate-200 bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-md opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
        Test WhatsApp Intake Pipeline
      </span>
      <a
        href="https://wa.me/919289581053?text=Hi%2C%20I%20would%20like%20to%20test%20the%20Al%20Astoora%20Legal%20AI%20intake%20pipeline"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Test WhatsApp Intake Pipeline (opens in a new tab)"
        title="Test WhatsApp Intake Pipeline"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg ring-2 ring-white transition-all hover:scale-105 hover:shadow-xl"
      >
        <MessageSquareCode className="h-5 w-5" aria-hidden="true" />
      </a>
    </aside>
  );
}