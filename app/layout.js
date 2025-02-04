import { Outfit } from "next/font/google";
import "./globals.css";
import Head from "next/head"; // Import the Head component

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Harsh Chopra - Digital Media",
  description: "Welcome to my digital media portfolio!",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "url": "https://harshchopra.com",
    "name": "Harsh Chopra - Digital Media",
    "description": metadata.description,
    "publisher": {
      "@type": "Organization",
      "name": "Harsh Chopra",
      "logo": {
        "@type": "ImageObject",
        "url": "https://harshchopra.com/logo.png" // Use absolute path
      }
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="UTF-8" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content="https://harshchopra.com/logo.png" /> {/* Absolute image URL */}
            <meta property="og:url" content="https://harshchopra.com" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metadata.title} />
            <meta name="twitter:description" content={metadata.description} />
            <meta name="twitter:image" content="https://harshchopra.com/logo.png" /> {/* Absolute image URL */}
            
            {/* Canonical Link */}
            <link rel="canonical" href="https://harshchopra.com" />
            
            {/* Structured Data (JSON-LD) */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
              }}
            />
          </Head>

          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
