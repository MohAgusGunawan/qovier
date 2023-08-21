import { Providers } from '@app/redux/provider';

import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';

import './styles/main.css';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Qovier - Explore Color Pair',
  description:
    'Generator of beautiful two color combinations for your designs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSans3.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
