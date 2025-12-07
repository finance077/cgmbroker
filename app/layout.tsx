import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CGM Trade - Brokerlar İçin White-Label Trading Platformu",
  description: "Kendi markalı Forex, CFD ve Kripto trading platformunuzu günler içinde başlatın. Gelişmiş trading motoru, admin paneli ve mobil uygulamalar ile eksiksiz çözüm.",
  keywords: "white-label trading, forex platformu, cfd trading, kripto trading, trading yazılımı, brokerlik çözümü, trading platform",
  openGraph: {
    title: "CGM Trade - Brokerlar İçin White-Label Trading Platformu",
    description: "Kendi markalı Forex, CFD ve Kripto trading platformunuzu günler içinde başlatın.",
    type: "website",
    locale: "tr_TR",
    url: "https://cgmbroker.com",
    siteName: "CGM Trade",
  },
  twitter: {
    card: "summary_large_image",
    title: "CGM Trade - White-Label Trading Platformu",
    description: "Kendi markalı trading platformunuzu günler içinde başlatın.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

