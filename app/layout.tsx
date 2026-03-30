import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Al Astoora | High-Conversion Websites & WhatsApp Automation',
  description:
    'Scale your local business with Al Astoora. We build high-converting websites and custom AI WhatsApp automations to capture leads, handle FAQs, and book customers 24/7.',
  // Replace with your exact .tech domain
  metadataBase: new URL('https://alastoora.tech'),
  openGraph: {
    title: 'Al Astoora | Automation & Web Development Agency',
    description: 'Stop losing revenue. Automate your operations and scale your business today.',
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
    title: 'Al Astoora | Premium Automation Agency',
    card: 'summary_large_image',
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
