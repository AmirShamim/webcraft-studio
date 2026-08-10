import { Metadata } from 'next';
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
