import { Inter, Space_Grotesk, Poppins } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Background from '@/components/Background';

// Load Inter font with multiple weights and styles
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
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
};

export const generateViewport = () => ({
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
  },
  metadata: {
    themeColor: '#2563eb',
  },
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable} scroll-smooth`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-adsense-account" content="ca-pub-5511490636642140"
        />
      </head>
      <body className="antialiased">
        <Background />
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
