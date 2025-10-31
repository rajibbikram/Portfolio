import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  Logo from '../../public/image/profile.jpg'

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Rajib Bikram Shah Portfolio",
  description: "Generated from Rajib Bikram Shah Portfolio using Next.js",
  icons: {
    icon: "/image/profile.jpg", 
    shortcut: "/favicon.png",   
    apple: "/image/profile.jpg" 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        style={{
          fontFamily: `var(${geistSans.variable}), var(${geistMono.variable}), sans-serif`,
        }}
      >
        {children}
      </body>
    </html>
  );
}
