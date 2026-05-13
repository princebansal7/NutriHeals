import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "NutriHeals - Dt. Yogita Bansal | Clinical Dietitian",
  description: "Evidence-based nutrition for weight loss, PCOS/PCOD management, and lifestyle disorders. Transform your health with personalized diet plans from expert dietitian.",
  keywords: "dietitian, nutrition, weight loss, PCOS, PCOD, clinical dietitian, healthy eating, diabetes diet, thyroid diet, Pinjore, Haryana",
  authors: [{ name: "Dt. Yogita Bansal" }],
  openGraph: {
    title: "NutriHeals - Dt. Yogita Bansal | Clinical Dietitian",
    description: "Evidence-based nutrition for weight loss, PCOS/PCOD management, and lifestyle disorders.",
    type: "website",
    locale: "en_IN",
    siteName: "NutriHeals",
  },
  twitter: {
    card: "summary_large_image",
    title: "NutriHeals - Clinical Dietitian",
    description: "Transform your health with personalized diet plans",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}