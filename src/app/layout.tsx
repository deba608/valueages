import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display, Geist } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VALUEAGES | Enterprise GTM & Sales Leadership India",
  description: "Specialized sales & go-to-market (GTM) consulting firm helping global SaaS and product tech companies expand and win in the Indian enterprise market. Dedicated advisory with direct CXO, BFSI, GCC and GSI access.",
  keywords: [
    "Enterprise Sales Strategy",
    "GTM India",
    "Go To Market Consulting",
    "SaaS Market Entry India",
    "BFSI CXO Access",
    "Global Captive Centers India",
    "Global System Integrators partnership",
    "Fractional Country Sales Leader India",
    "VALUEAGES",
    "Digital Transformation"
  ],
  authors: [{ name: "Manas", url: "https://valueages.com" }],
  openGraph: {
    title: "VALUEAGES | Enterprise GTM Strategy India",
    description: "Your strategic bridge to Indian enterprise buyers, BFSI organizations, GCCs, and global system integrators through proven fractional sales leadership.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/Nav_logo1.svg",
    apple: "/Nav_logo1.svg",
    shortcut: "/Nav_logo1.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, playfair.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <head>
        <Script src="/theme-init.js" strategy="beforeInteractive" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)] antialiased">
        <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
