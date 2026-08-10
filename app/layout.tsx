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
          'name': 'What is Al Astoora and how does the automation system work?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Al Astoora is a premium conversational agency that engineers official automated response systems and booking funnels. We use the Meta Cloud API to connect your business WhatsApp directly to custom databases, calendars, and CRMs. When a lead contacts you, our automation greets them, answers FAQs, displays catalogs, and registers appointment requests in under 2 seconds, 24/7.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How is Al Astoora different from SaaS platforms like Respond.io or Trengo?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Broad subscription inbox platforms are built for teams that want hosted shared-inbox software with plans, seats, conversation allowances, and add-ons. Al Astoora builds a custom WhatsApp booking stack on the official Meta Cloud API for your business, with the code, integrations, and connected database handed over to you. Al Astoora does not add a monthly platform fee; Meta WhatsApp message costs can still apply.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What are the costs involved in setting up WhatsApp Cloud API?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'We charge a one-time flat engineering setup fee to design, build, and deploy your custom system. After setup, you pay no Al Astoora monthly platform fee. Meta WhatsApp message costs can still apply through the official setup.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Is my WhatsApp business number safe from phone number bans?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Yes, 100% safe. Unlike unofficial automation tools that scan QR codes and trigger automated client emulator blocks (web automation scrapers), Al Astoora integrates directly through the official Meta Cloud API ecosystem. Because your business profile is verified and approved by Meta, there is zero risk of phone number suspensions or spam blocks.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What CRMs and calendars can be connected to the automation?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'We build custom webhook routing to link your system with almost any modern CRM, calendar, or tool, including Google Sheets, Notion, HubSpot, Salesforce, Calendly, and custom SQL databases. Leads and scheduling details are synced instantly in real time without requiring extra paid connector tools.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How long does it take to deploy a custom automation stack?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'A standard deployment takes between 7 to 14 business days. This includes Meta business verification, developer console setup, webhook deployment, database integrations, conversation flow testing, and training on how to use the backend sheets or CRM.',
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
