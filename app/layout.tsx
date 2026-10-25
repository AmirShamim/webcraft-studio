import type { Metadata } from 'next';
import { Manrope, Newsreader } from 'next/font/google';
import AnalyticsProvider from '@/components/AnalyticsProvider';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Al Astoora | Autonomous Document Intake & Fine-Tuned Legal AI SaaS',
  description:
    'Eliminate manual data entry and LLM hallucinations. Al Astoora combines automated WhatsApp/Web client document capture, high-precision OCR, and domain-specific Small Language Models (SLMs) engineered for law firms and compliance teams. Zero data retention.',
  metadataBase: new URL('https://alastoora.tech'),
  alternates: {
    canonical: 'https://alastoora.tech',
  },
  keywords: [
    'Legal AI SaaS',
    'Autonomous Document Intake',
    'Legal Document Intelligence',
    'Fine-Tuned Legal SLM',
    'Zero Data Retention',
    'Legal OCR IDP',
    'RAFT Legal Reasoning',
    'Law Firm Intake Automation',
    'Al Astoora',
    'Dedicated Single-Tenant VPC',
    'Legal Tech B2B SaaS',
  ],
  authors: [{ name: 'Al Astoora Legal AI Platform Team', url: 'https://alastoora.tech' }],
  openGraph: {
    title: 'Al Astoora | Autonomous Document Intake & Fine-Tuned Legal AI SaaS',
    description:
      'Autonomous client document capture, high-precision OCR, and domain-specific Legal SLMs engineered for zero hallucinations and zero data retention.',
    url: 'https://alastoora.tech',
    siteName: 'Al Astoora Legal AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Al Astoora | Enterprise Legal AI & Document Intelligence SaaS',
    description:
      'Autonomous Document Intake & Fine-Tuned Legal AI with Zero Data Retention.',
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://alastoora.tech/#software',
      'name': 'Al Astoora Legal AI',
      'applicationCategory': 'LegalApplication',
      'operatingSystem': 'Cloud, Sovereign VPC',
      'description':
        'Autonomous Document Intake & Fine-Tuned Legal AI SaaS with zero data retention for law firms and compliance teams.',
      'offers': {
        '@type': 'Offer',
        'price': '99.00',
        'priceCurrency': 'USD',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://alastoora.tech/#organization',
      'name': 'Al Astoora Legal AI',
      'url': 'https://alastoora.tech',
      'telephone': '+91 92895 81053',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '4th, 52/C, MN Block Lane, New Steel Work, Jamia Nagar',
        'addressLocality': 'South East Delhi',
        'addressRegion': 'Delhi',
        'postalCode': '110025',
        'addressCountry': 'IN',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased bg-[var(--sf)] text-[var(--tx)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <AnalyticsProvider />
        {children}
      </body>
    </html>
  );
}
