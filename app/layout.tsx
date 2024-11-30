import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PDH School",
  description: "Start your entrepreneurial Journey",
  keywords: [
    "PDH School",
    "Cohort 2",
    "startup building program",
    "aspiring entrepreneurs",
    "entrepreneurship course",
    "business skills",
    "technology skills",
    "startup community",
    "limited seats",
    "registration open",
    "discount on course fee",
    "mentorship for entrepreneurs",
    "startup journey",
    "build your startup",
    "entrepreneurship network",
    "industry experts",
    "business and tech program",
  ].join(", "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-K9SXTNWT1W"></Script>
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-K9SXTNWT1W');
      `}
    </Script>
      <head>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#101820]`}
      >
        {children}
      </body>
    </html>
  );
}
