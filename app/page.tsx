'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ROICalculator from '@/components/ROICalculator';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import Services from '@/components/Services';
import PlatformComparison from '@/components/PlatformComparison';
import About from '@/components/About';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <Header />
      
      <main>
        <Hero />
        <ROICalculator />
        <PortfolioShowcase />
        <Services />
        <PlatformComparison />
        <About />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
