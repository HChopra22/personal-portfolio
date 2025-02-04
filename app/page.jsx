import Head from "next/head";  // Importing Head component
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <>
      {/* Meta tags specific to the homepage */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Harsh Chopra - Digital Media" />
        <meta property="og:description" content="Welcome to my digital media portfolio showcasing my skills, projects, and creative work." />
        <meta property="og:image" content="https://harshchopra.com/hero-image.jpg" /> {/* Update this with your actual image path */}
        <meta property="og:url" content="https://harshchopra.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Harsh Chopra - Digital Media" />
        <meta name="twitter:description" content="Welcome to my digital media portfolio showcasing my skills, projects, and creative work." />
        <meta name="twitter:image" content="https://harshchopra.com/hero-image.jpg" /> {/* Update this with your actual image path */}
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Harsh Chopra",
              url: "https://harshchopra.com",
              sameAs: [
                "https://www.linkedin.com/in/harshdeep-chopra/",
                "https://github.com/HChopra22",
                "https://www.instagram.com/harshc._/"
              ],
              image: "https://harshchopra.com/hero-image.jpg"  // Add your actual image URL
            }),
          }}
        />
      </Head>

      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Reviews />
        <Cta />
      </main>
    </>
  );
}
