import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://movementphotobooth.id";
const siteTitle = "Movement Photobooth — Photobooth Terbaik untuk Wedding & Event";
const siteDescription =
  "Sewa photobooth premium untuk pernikahan, ulang tahun, dan acara korporat. Cetak instan, properti seru, dan tim profesional yang membuat setiap momen tak terlupakan.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "photobooth",
    "sewa photobooth",
    "photobooth wedding",
    "photobooth event",
    "Movement Photobooth",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Movement Photobooth",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Movement Photobooth di sebuah acara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink">{children}</body>
    </html>
  );
}
