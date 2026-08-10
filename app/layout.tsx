import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import AnalyticsProvider from '@/components/AnalyticsProvider';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Al Astoora | Intelligent Document & Intake Infrastructure for Professional Services',
  description:
    'Stop paying high-skilled professionals to chase down client paperwork. Al Astoora is a scalable, API-first WhatsApp backend that automates complex client onboarding, secure document collection, and case scheduling. Built for legal, accounting, and immigration firms.',
  metadataBase: new URL('https://alastoora.tech'),
  alternates: {
    canonical: 'https://alastoora.tech',
  },
  keywords: [
    'Document Intake Infrastructure',
    'Professional Services Automation',
    'Legal Tech WhatsApp API',
    'Accounting Intake Automation',
    'Immigration Document Verification',
    'Meta Cloud API Backend',
    'Al Astoora',
    'B2B SaaS Infrastructure',
    'WhatsApp Client Onboarding',
  ],
  authors: [{ name: 'Al Astoora Platform Team', url: 'https://alastoora.tech' }],
  openGraph: {
    title: 'Al Astoora | Document & Intake Infrastructure for Professional Services',
    description: 'Automate complex client onboarding, secure document collection, and case scheduling.',
    url: 'https://alastoora.tech',
    siteName: 'Al Astoora',
    locale: 'en_US',
    type: 'website',
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
  twitter: {
    title: 'Al Astoora | B2B Document & Intake Infrastructure',
    card: 'summary_large_image',
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://alastoora.tech/#organization',
      'name': 'Al Astoora',
      'url': 'https://alastoora.tech',
      'logo': 'https://alastoora.tech/logo.png',
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
    {
      '@type': 'ProfessionalService',
      '@id': 'https://alastoora.tech/#service',
      'name': 'Al Astoora | WhatsApp Automation & Web Development Agency',
      'url': 'https://alastoora.tech',
      'telephone': '+91 92895 81053',
      'priceRange': '$$',
      'image': 'https://alastoora.tech/logo.png',
      'description':
        'We design and build custom conversation automation systems and high-converting landing pages utilizing Meta\'s official WhatsApp Cloud API.',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '4th, 52/C, MN Block Lane, New Steel Work, Jamia Nagar',
        'addressLocality': 'South East Delhi',
        'addressRegion': 'Delhi',
        'postalCode': '110025',
        'addressCountry': 'IN',
      },
      'areaServed': ['AE', 'SG', 'IN', 'US'],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://alastoora.tech/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is Al Astoora and how does the intake infrastructure platform work?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Al Astoora is a B2B SaaS infrastructure company providing enterprise-grade conversational AI and automated document intake for professional services (legal, accounting, tax, immigration, corporate secretarial). Built directly on Meta’s Official Cloud API, our platform ingests client PDFs, images, and KYC paperwork via WhatsApp, validates submissions in real time, and routes structured data into your CRM, database, or case management system.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How does Al Astoora streamline document intake for professional service firms?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Our proprietary intake engine automates multi-step onboarding workflows. Instead of billable partners and associates manually chasing clients over fragmented email threads, Al Astoora triggers automated document collection checklists, verifies files, and pushes organized records into your backend database in under 2 seconds.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How does Al Astoora integrate with our existing CRMs, ERPs, and cloud storage?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'We provide enterprise webhooks and REST API endpoints that push collected documents and client data directly into your firm’s CRM, document management system, cloud storage (Google Drive, OneDrive, AWS S3), or ERP (Salesforce, HubSpot, Xero, Quickbooks, custom SQL).',
          },
        },
        {
          '@type': 'Question',
          'name': 'Is client data and document transfer secure and compliant?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Yes. All document transmissions through Meta’s Official Cloud API ecosystem use 256-bit SSL encryption. Unlike unofficial QR-code scrapers that carry security and account ban risks, Al Astoora operates strictly within Meta’s official developer framework for maximum data stability, enterprise compliance, and zero downtime.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What professional service verticals are supported by Al Astoora?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Al Astoora is engineered for document-heavy professional industries including Corporate Secretarial (incorporation & signature routing), Immigration & Visa Advisory (KYC & passport verification), Accounting & Tax (quarterly financial form ingestion), and Employment Agencies (candidate resume screening & interview scheduling).',
          },
        },
        {
          '@type': 'Question',
          'name': 'How is Al Astoora licensed and deployed for enterprise firms?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Al Astoora provides flexible infrastructure licensing tailored to your firm’s case volume and active team size. Deployment is fast and turnkey—our team configures Meta business verification, API webhooks, document routing rules, and database connectors so your firm can reclaim unbillable administrative hours immediately.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased">
        <AnalyticsProvider />
        {children}
      </body>
    </html>
  );
}
