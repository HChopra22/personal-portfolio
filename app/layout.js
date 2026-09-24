import { Outfit } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import ConsentBanner from '@/components/ConsentBanner'
import { SITE_URL, site, socials } from '@/data/site'
import { CONSENT_KEY } from '@/lib/analytics'

const outfit = Outfit({ subsets: ['latin'], display: 'swap' })
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: site.title, template: `%s | ${site.shortTitle}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description },
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#22233a' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: site.name,
      alternateName: site.legalName,
      url: SITE_URL,
      image: `${SITE_URL}/hero/harsh-hero-memoji-1.png`,
      jobTitle: site.jobTitle,
      worksFor: { '@type': 'Organization', name: site.employer },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Royal Holloway, University of London' },
      address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
      email: `mailto:${site.email}`,
      knowsAbout: ['Product management', 'Web development', 'UX design', 'SEO', 'Google Analytics 4', 'Google Tag Manager', 'Photography'],
      sameAs: socials.map((s) => s.url).concat('https://photos.harshchopra.com'),
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: site.name,
      description: site.description,
      inLanguage: 'en-GB',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
  ],
}

// Consent Mode v2 defaults — must run before GTM loads.
const consentDefaults = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try { if (localStorage.getItem('${CONSENT_KEY}') === 'granted') gtag('consent','update',{analytics_storage:'granted'}); } catch(e) {}
`

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body className={outfit.className}>
        {GTM_ID && (
          <>
            <Script id="consent-defaults" strategy="beforeInteractive">{consentDefaults}</Script>
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
          </>
        )}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md">
            Skip to content
          </a>
          <Header />
          {children}
          <Footer />
          {GTM_ID && <ConsentBanner />}
        </ThemeProvider>
      </body>
    </html>
  )
}
