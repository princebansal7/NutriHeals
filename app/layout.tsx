import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NutriHeals - Dt. Yogita Bansal | Clinical Dietitian",
  description: "Evidence-based nutrition for weight loss, PMOS (formerly PCOS/PCOD) management, and lifestyle disorders. Transform your health with personalized diet plans from expert dietitian.",
  keywords: "dietitian, nutrition, weight loss, PMOS, PCOS, PCOD, clinical dietitian, healthy eating, diabetes diet, thyroid diet, Chandigarh",
  authors: [{ name: "Dt. Yogita Bansal" }],
  openGraph: {
    title: "NutriHeals - Dt. Yogita Bansal | Clinical Dietitian",
    description: "Evidence-based nutrition for weight loss, PMOS (formerly PCOS/PCOD) management, and lifestyle disorders.",
    type: "website",
    locale: "en_IN",
    siteName: "NutriHeals",
    url: "https://www.nutriheals.in",
    images: [
      {
        url: "https://www.nutriheals.in/og-image.svg",
        width: 1200,
        height: 630,
        alt: "NutriHeals - Dt. Yogita Bansal | Clinical Dietitian",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NutriHeals - Clinical Dietitian",
    description: "Transform your health with personalized diet plans",
    images: ["https://www.nutriheals.in/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSans.variable} ${playfairDisplay.variable}`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        <Navbar />
        <main className="grow">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}