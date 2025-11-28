import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

// Load Inter font with multiple weights and styles
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Rajib Bikram Shah - Portfolio',
  description: 'Professional portfolio of Rajib Bikram Shah - Web Developer & Designer',
  icons: {
    icon: '/image/profile.jpg',
    shortcut: '/favicon.png',
    apple: '/image/profile.jpg',
  },
  other: {
    'google-adsense-account': 'ca-pub-5511490636642140',
  },
  themeColor: '#2563eb',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-adsense-account" content="ca-pub-5511490636642140"
        />
      </head>
      <body className="antialiased">
        {children}

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5511490636642140"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
