import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Pizzeria Allegria — Authentische Italienische Küche",
  description:
    "Erleben Sie echte neapolitanische Pizzen, hausgemachte Pasta und mediterrane Aromen in herzlicher Atmosphäre. Jetzt Tisch reservieren.",
  openGraph: {
    title: "Pizzeria Allegria",
    description: "Authentische italienische Küche — Pizza, Pasta, Amore.",
    siteName: "Pizzeria Allegria",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
