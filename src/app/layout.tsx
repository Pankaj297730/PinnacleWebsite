import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lexend } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

// ⭐ FULL SEO METADATA
export const metadata: Metadata = {
  title: {
    default: "Pinnacle Property – Real Estate Consulting Experts",
    template: "%s | Pinnacle Property",
  },

  description:
    "Pinnacle Property is a leading real estate consulting company offering property advisory, investment consulting, project consulting, and premium real estate services across Kota & Jaipur.",

  keywords: [
    "Pinnacle Property",
    "Real Estate Consultant",
    "Property Consultant Kota",
    "Real Estate Jaipur",
    "Investment Consulting Rajasthan",
    "Property Advisor Kota Jaipur",
    "Real Estate Consulting Firm",
    "Buy Sell Rent Property",
    "Commercial Real Estate Consulting",
  ],

  authors: [{ name: "Pinnacle Property" }],
  creator: "Pinnacle Property",
  publisher: "Pinnacle Property",

  openGraph: {
    title: "Pinnacle Property – Expert Real Estate Consulting",
    description:
      "Get professional guidance for buying, selling, investing, or developing real estate. Trusted consultants in Kota & Jaipur.",
    url: "https://pinnacleproperty.in",
    siteName: "Pinnacle Property",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pinnacle Property – Real Estate Consulting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pinnacle Property – Real Estate Consulting Experts",
    description:
      "Leading real estate consulting company for premium properties, investment advisory, and project consulting.",
    images: ["/og-image.jpg"],
    creator: "@pinnacle",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://pinnacleproperty.in",
  },

  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
  <body className={`${jakarta.className} ${lexend.className} antialiased`}>


        {children}
      </body>
    </html>
  );
}
