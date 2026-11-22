import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://perfai.in'),
  title: 'PERFAI — Physical AI. Intelligent Infrastructure. Measurable Impact.',
  description:
    'Bringing Physical AI to buildings, energy and infrastructure to unlock operational efficiency, measurable performance and new capacity. Commercial sales partner for Senatria solutions.',
  keywords: [
    'Physical AI',
    'Senatria',
    'BuildingShield',
    'ATRIA',
    'HVAC optimization',
    'Commercial Real Estate AI',
    'BMS automation',
    'Energy efficiency',
    'Intelligent Infrastructure'
  ],
  authors: [{ name: 'PERFAI Technologies' }],
  openGraph: {
    title: 'PERFAI — Enterprise Physical AI for Infrastructure',
    description:
      'Unlock the intelligence hidden within your buildings and energy systems. Autonomous HVAC optimization and measurable performance.',
    url: 'https://perfai.in',
    siteName: 'PERFAI',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-textdark font-sans selection:bg-tealaccent selection:text-midnight">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
