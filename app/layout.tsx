
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import { BUSINESS_INFO } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.base_url),
  title: {
    default: `${BUSINESS_INFO.name} | Porta Potty Rental in Franklin, TN`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description: "Joe Rental Works offers fast, affordable, and clean porta potty rentals for construction sites, events, and more in Franklin, TN. Call us for a free quote!",
  openGraph: {
    title: `${BUSINESS_INFO.name} | Porta Potty Rental in Franklin, TN`,
    description: "Top-rated porta potty and portable toilet rentals in Franklin, Tennessee.",
    url: BUSINESS_INFO.base_url,
    siteName: BUSINESS_INFO.name,
    images: [
      {
        url: 'https://ik.imagekit.io/e5qb76enw/lancaster-portable-toilets.png',
        width: 800,
        height: 600,
        alt: 'A row of clean portable toilets'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_INFO.name} | Porta Potty Rental in Franklin, TN`,
    description: "Your reliable source for portable sanitation in Franklin.",
    images: ['https://ik.imagekit.io/e5qb76enw/lancaster-portable-toilets.png'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-light text-dark`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallButton />
        {/* Analytics-ready placeholder */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script> */}
        {/* <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'YOUR_ID');` }} /> */}
      </body>
    </html>
  );
}
