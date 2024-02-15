import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js tutortial',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme='dracula' lang='en'>
      <body className={inter.className}>
        <Header />
        <main className='max-w-6xl mx-auto px-6 py-20'>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}