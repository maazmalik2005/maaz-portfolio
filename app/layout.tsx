import type { Metadata } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { seoContent } from "@/lib/content/seo";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: seoContent.title,
    template: "%s | Maaz Sohail",
  },
  description: seoContent.description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    ...seoContent.primaryKeywords,
    ...seoContent.secondaryKeywords,
    ...seoContent.personalBrandKeywords,
  ],
  authors: [{ name: "Maaz Sohail" }],
  creator: "Maaz Sohail",
  category: "Digital marketing and web development",
  openGraph: {
    title: seoContent.openGraphTitle,
    description: seoContent.openGraphDescription,
    type: "website",
    url: siteUrl,
    siteName: "Maaz Sohail",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: seoContent.openGraphTitle,
    description: seoContent.openGraphDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${manrope.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
