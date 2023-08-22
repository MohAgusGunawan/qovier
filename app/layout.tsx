import { Providers } from '@app/redux/provider';
import { ToastContainer } from 'react-toastify';
import { TbCopy } from 'react-icons/tb';

import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';

import './styles/main.css';

import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer
          position="bottom-center"
          autoClose={1500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          icon={<TbCopy />}
        />
      </body>
    </html>
  );
}
