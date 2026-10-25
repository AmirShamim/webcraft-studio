import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import LegalArchitecture from '@/components/LegalArchitecture';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--sf)] text-[var(--tx)] font-sans antialiased selection:bg-indigo-500 selection:text-white">
      <Header />
      
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Services />
        <LegalArchitecture />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
