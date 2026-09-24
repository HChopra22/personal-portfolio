import { SITE_URL } from '@/data/site'
import { caseStudies } from '@/data/caseStudies'

export default function sitemap() {
  const lastModified = new Date()
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/projects`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    ...caseStudies.map((c) => ({ url: `${SITE_URL}/work/${c.slug}`, lastModified, changeFrequency: 'monthly', priority: 0.8 })),
  ]
}
