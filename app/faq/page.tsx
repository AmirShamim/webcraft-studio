import { Metadata } from 'next';
import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'FAQ | Al Astoora — WhatsApp Automation Questions & Answers',
  description:
    'Everything you need to know about official WhatsApp automation, setup costs, integrations, and business software ownership with Al Astoora.',
  alternates: {
    canonical: 'https://alastoora.tech/faq',
  },
  openGraph: {
    title: 'FAQ | Al Astoora',
    description: 'Frequently Asked Questions about our WhatsApp Automation stacks.',
    url: 'https://alastoora.tech/faq',
    siteName: 'Al Astoora',
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <Header />
      
      <main className="pt-8">
        <FAQ />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
