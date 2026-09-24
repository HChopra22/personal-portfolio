import { site } from '@/data/site'

// Child routes replace (not merge) openGraph/twitter, so build them fully here.
export function pageMetadata({ title, description, path, image }) {
  const fullTitle = `${title} | ${site.shortTitle}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [image || { url: '/opengraph-image', width: 1200, height: 630, alt: site.title }],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [image?.url || '/opengraph-image'] },
  }
}
