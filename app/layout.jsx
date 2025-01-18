'use client';

import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import { registerServiceWorker } from './sw-register';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  useEffect(() => {
    const initServiceWorker = async () => {
      try {
        await registerServiceWorker();
      } catch (error) {
        console.error('Failed to register service worker:', error);
      }
    };

    // Only register service worker in production
    if (process.env.NODE_ENV === 'production') {
      initServiceWorker();
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/icon-192.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="/icon-512.png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="apple-touch-icon" href="/icon-512.png" />
      </head>
      <body className={`${inter.className} min-h-screen bg-white text-gray-900 antialiased`}>
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
