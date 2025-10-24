import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Rajib Bikram Shah Portfolio",
  description: "Generated From Rajib Bikram Shah Portfolio with using Next.js",
    icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/",
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
