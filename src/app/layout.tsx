import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Fellas Distribuidora | Experiência Premium",
  description: "Distribuição exclusiva dos Drinks Mansão Maromba. Elevando a experiência em cada gole.",
  openGraph: {
    title: "Fellas Distribuidora | Experiência Premium",
    description: "Distribuidora oficial dos Drinks Mansão Maromba.",
    type: "website",
    locale: "pt_BR",
    siteName: "Fellas Distribuidora"
  },
  twitter: {
    card: "summary_large_image",
    title: "Fellas Distribuidora | Experiência Premium",
    description: "Distribuidora oficial dos Drinks Mansão Maromba."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
