import type {Metadata} from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'WebCraft Studio | Premium Digital Agency',
  description: 'We design and develop blazing-fast, conversion-optimized websites for ambitious brands.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body suppressHydrationWarning className="font-sans bg-[#05050A] text-zinc-400 antialiased selection:bg-white/10 selection:text-white">
        {children}
      </body>
    </html>
  );
}
