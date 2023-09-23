import { ToastContainer } from 'react-toastify';

import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';

import { Providers } from '@/src/redux/provider';

import GoogleAnalytics from './GoogleAnalytics';

import 'react-toastify/dist/ReactToastify.css';

import './styles/main.css';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Qovier - Explore Color Pairs',
  description:
    'With Qovier you can generate and explore two color combinations for your design, preview how color pairs will look on Text, Illustration, Gradient, and more!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSans3.variable}`}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qovier.vercel.app/" />
        <meta property="og:title" content="Qovier - Explore Color Pair" />
        <meta
          property="og:description"
          content="With Qovier you can generate and explore two color combinations for your design, preview how color pairs will look on Text, Illustration, Gradient, and more!"
        />
        <meta
          property="og:image"
          content="https://qovier.vercel.app/images/qovier.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://qovier.vercel.app/" />
        <meta property="twitter:title" content="Qovier - Explore Color Pair" />
        <meta
          property="twitter:description"
          content="With Qovier you can generate and explore two color combinations for your design, preview how color pairs will look on Text, Illustration, Gradient, and more!"
        />
        <meta
          property="twitter:image"
          content="https://qovier.vercel.app/images/qovier.png"
        />
      </head>
      <body>
        <Providers>
          {children}
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
            theme="dark"
            style={{ zIndex: 99999999 }}
          />
        </Providers>
        {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
      </body>
    </html>
  );
}
