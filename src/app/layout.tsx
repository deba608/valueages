import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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

const SITE_URL = "https://valueages.com";

export const viewport: Viewport = {
  themeColor: "#109B82",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Valueages — India Enterprise GTM Advisory",
    template: "%s | Valueages",
  },
  description:
    "Specialized go-to-market advisory helping global SaaS and product companies expand in India. Direct CXO, BFSI, GCC, and GSI access — from day one.",
  keywords: [
    "Enterprise Sales Strategy",
    "GTM India",
    "Go To Market Consulting",
    "SaaS Market Entry India",
    "BFSI CXO Access",
    "Global Captive Centers India",
    "Global System Integrators partnership",
    "Fractional Country Sales Leader India",
    "Valueages",
    "Digital Transformation",
    "UnifyApps",
    "India Enterprise Advisory",
  ],
  authors: [{ name: "Valueages", url: SITE_URL }],
  creator: "Valueages",
  publisher: "Valueages",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Valueages — India Enterprise GTM Advisory",
    description:
      "Your strategic bridge to Indian enterprise buyers, BFSI organisations, GCCs, and global system integrators through proven fractional sales leadership.",
    url: SITE_URL,
    siteName: "Valueages",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Valueages — India Enterprise GTM Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valueages — India Enterprise GTM Advisory",
    description:
      "Specialized go-to-market advisory helping global SaaS companies expand in India with direct CXO, BFSI, GCC, and GSI access.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/Nav_logo1.svg",
    apple: "/Nav_logo1.svg",
    shortcut: "/Nav_logo1.svg",
  },
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
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)] antialiased">
        <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
