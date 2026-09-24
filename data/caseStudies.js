// Case studies — every figure here comes from the client performance reports and project docs
// in ~/Clients (see `source` on each stat). Do not add numbers or quotes you can't back up.
//
// testimonial: set to { quote, name, role } once the client has approved a quote. While it is
// null the testimonial block is hidden on the page.

export const caseStudies = [
  {
    slug: 'epsom-smiles',
    client: 'Epsom Smiles Dental Practice',
    title: 'Keeping a local dental practice’s diary full',
    summary:
      'Website, local SEO, Google Ads, tracking and patient comms for an independent practice in Epsom, Surrey — turning search demand into booked appointments.',
    url: 'https://www.epsomsmilesdental.co.uk',
    urlLabel: 'epsomsmilesdental.co.uk',
    year: '2026 – present',
    role: 'Digital lead (freelance)',
    sector: 'Healthcare · Local services',
    services: ['Web development', 'Local SEO', 'Google Ads', 'GA4 & tracking', 'Email & CRM'],
    stack: ['WordPress', 'Elementor', 'Yoast', 'Google Ads', 'GA4', 'CareStack', 'Next.js (headless rebuild)'],
    accent: '#501c66',
    accentOnDark: '#d9c4e8',
    cover: { src: '/work/epsom-smiles/home-desktop.webp', width: 1440, height: 900, alt: 'Epsom Smiles homepage' },
    stats: [
      { value: 277, suffix: '', label: 'Phone calls from ads', note: 'Jan – Aug 2026' },
      { value: 77, suffix: '', label: 'Online bookings tracked in GA4', note: 'Jan – Aug 2026' },
      { value: 8.95, suffix: '%', decimals: 2, label: 'CTR on the Special Offers campaign', note: 'Well above dental average' },
      { value: 12, suffix: '', label: 'High-intent condition pages shipped', note: 'One a week since March' },
    ],
    challenge: [
      'Epsom Smiles is an independent practice competing with larger groups for the same local searches. Demand was there, but the website wasn’t built around the pages patients actually search for, and it was hard to tell which ads and pages produced patients.',
      'Bookings arrive by phone and through CareStack online booking, so every page had to support both — and every one of those actions had to be measured.',
    ],
    approach: [
      'Built a weekly programme of high-intent condition pages (dental abscess, toothache, cracked tooth, dental anxiety and more) on a reusable Elementor template, each with its own internal-linking plan.',
      'Structured and ran the Google Ads account — General Dentistry & Hygiene, Emergency Dental and seasonal offer campaigns — steering spend towards the terms that produced calls.',
      'Integrated CareStack online booking and connected GA4 so bookings, calls and offer clicks are tracked as conversions.',
      'Wrote and built CareStack patient emails (recalls, offers, membership launch) as table-based HTML that survives the CRM’s sanitiser.',
      'Produced monthly performance reports and ran technical audits — broken phone links, hidden forms and redirect issues — each with a documented fix.',
      'Started a headless Next.js rebuild on WordPress (WPGraphQL) to give the practice a faster, more flexible site.',
    ],
    highlights: [
      { title: 'Emergency dentist page', body: 'A dedicated same-day emergency page built to capture urgent searches, with click-to-call and online booking above the fold.' },
      { title: 'Condition-page SEO', body: 'The dental abscess page — the template for the series — reached around position 7 in Google and produced the first attributed booking from the programme.' },
      { title: 'Measurement', body: 'Measured ad enquiries rose from 16 to 23 (+44%) in a 28-day period as more booking and call tracking came online.' },
    ],
    analytics: [
      { label: 'Ad clicks (Jan – Aug 2026)', value: '10,164' },
      { label: 'Brand search position', value: '#1 · 38% CTR' },
      { label: 'Organic traffic to pricing page', value: '+58%' },
      { label: 'Technical SEO score', value: '100 / 100' },
    ],
    gallery: [
      { src: '/work/epsom-smiles/emergency-desktop.webp', width: 1440, height: 900, alt: 'Emergency dentist Epsom page', frame: 'browser' },
      { src: '/work/epsom-smiles/home-mobile.webp', width: 780, height: 1688, alt: 'Epsom Smiles homepage on mobile', frame: 'phone' },
      { src: '/work/epsom-smiles/emergency-mobile.webp', width: 780, height: 1688, alt: 'Emergency page on mobile', frame: 'phone' },
    ],
    testimonial: null,
  },
  {
    slug: 'green-lion-distro',
    client: 'Green Lion Distro',
    title: 'A B2B wholesale store built around how trade buyers order',
    summary:
      'A custom WooCommerce trade platform for a UK vape and nicotine wholesaler — approval-gated accounts, role-based pricing and a variation-first ordering UI.',
    url: 'https://greenliondistro.com',
    urlLabel: 'greenliondistro.com',
    year: 'Ongoing',
    role: 'Design, build & ongoing development',
    sector: 'B2B eCommerce · Wholesale',
    services: ['UX / UI design', 'WordPress & WooCommerce development', 'Performance', 'Analytics'],
    stack: ['WordPress', 'WooCommerce', 'XStore child theme', 'Elementor Pro', 'PHP', 'jQuery', 'Figma', 'GA4', 'Microsoft Clarity'],
    accent: '#3aaa35',
    accentOnDark: '#82c781',
    cover: { src: '/work/green-lion-distro/home-desktop.webp', width: 1440, height: 900, alt: 'Green Lion Distro homepage' },
    stats: [
      { value: 3, suffix: '-level', label: 'Catalogue: brand → product → flavour', note: 'Each flavour is its own card' },
      { value: 8, suffix: '', label: 'Product categories', note: 'Pods, kits, nic salts, pouches…' },
      { value: 30, prefix: '£', suffix: 'k', label: 'Trade credit at checkout', note: 'via iwocaPay' },
      { value: 1300, suffix: '+', label: 'Lines of custom PHP', note: 'All in a child theme' },
    ],
    challenge: [
      'Trade buyers often order many flavours across several brands in one go. Standard WooCommerce product pages — one dropdown per product — made that slow, and prices must stay hidden from anyone who isn’t an approved business.',
      'Everything also had to behave identically in Chrome, Safari and Firefox, on desktop and mobile.',
    ],
    approach: [
      'Designed the product pages in Figma and rebuilt brand, category and shop pages so every flavour renders as its own buyable card, with a quantity stepper and add-to-cart in one tap.',
      'Built a B2B approval flow: new registrations are held as pending, blocked from logging in with a friendly message, and unlocked (with trade pricing) when staff approve them.',
      'Hid prices from guests (“Login to see £”) and pending accounts, with role-based pricing tiers for approved buyers.',
      'Added iwocaPay buy-now-pay-later at checkout, automated bank-transfer reminder emails via WP-Cron, and custom CSV import/export for brand data.',
      'Wrote a filter bar with brand, category and trend sorting plus instant search, and a “close all” toggle for scanning long ranges on mobile.',
      'Worked staging-first with byte-for-byte checks against production, and fixed cross-browser issues specific to Safari.',
    ],
    highlights: [
      { title: 'Variation-first UI', body: 'Flavours and strengths are laid out as a grid of cards with nicotine-strength and HOT / NEW badges, instead of hidden in dropdowns.' },
      { title: 'September 2026 redesign', body: 'New hero row, filter bar and mobile “view more / close” states shipped from a Figma file, with every existing JS hook preserved.' },
      { title: 'Performance & insight', body: 'LiteSpeed full-page caching, Imagify WebP images and lazy loading; GA4 and Microsoft Clarity session recordings to see where buyers get stuck.' },
    ],
    analytics: [],
    gallery: [
      { src: '/work/green-lion-distro/product-page-redesign.webp', width: 1440, height: 1100, alt: 'Redesigned brand page with filter bar and variation cards', frame: 'browser' },
      { src: '/work/green-lion-distro/product-page-mobile.webp', width: 375, height: 1000, alt: 'Mobile brand page with filters open', frame: 'phone' },
      { src: '/work/green-lion-distro/shop-desktop.webp', width: 1440, height: 900, alt: 'Shop page brand grid', frame: 'browser' },
      { src: '/work/green-lion-distro/home-mobile.webp', width: 780, height: 1688, alt: 'Green Lion homepage on mobile', frame: 'phone' },
    ],
    testimonial: null,
  },
  {
    slug: 'a2z-bridging',
    client: 'A2Z Bridging',
    title: 'Building a lead-generation engine for a specialist finance broker',
    summary:
      'SEO, case-study content, LinkedIn, Google Ads, conversion tracking and CRM design for an FCA-regulated bridging finance broker in London.',
    url: 'https://a2zbridging.co.uk',
    urlLabel: 'a2zbridging.co.uk',
    year: 'Dec 2025 – present',
    role: 'Digital performance lead (freelance)',
    sector: 'Financial services · B2B',
    services: ['SEO & content', 'Google Ads', 'GTM & GA4', 'LinkedIn content', 'Zoho CRM'],
    stack: ['WordPress', 'Elementor', 'Yoast', 'Google Tag Manager', 'GA4', 'Search Console', 'Google Ads', 'Zoho CRM'],
    accent: '#c8191f',
    accentOnDark: '#ff6b6f',
    cover: { src: '/work/a2z-bridging/home-desktop.webp', width: 1440, height: 900, alt: 'A2Z Bridging homepage' },
    stats: [
      { value: 164, prefix: '+', suffix: '%', label: 'Google search impressions', note: '3 months vs previous 3' },
      { value: 66, prefix: '+', suffix: '%', label: 'Website sessions', note: '90 days to June 2026' },
      { value: 10.4, suffix: '%', decimals: 1, label: 'Google Ads click-through rate', note: 'Launched from zero' },
      { value: 3.2, prefix: '£', suffix: 'm+', decimals: 1, label: 'Deals documented as case studies', note: '10 packages in 3 months' },
    ],
    challenge: [
      'A2Z had a website but no system for turning completed deals into search visibility or leads. The site was found almost only for its own name, and phone calls — the main way bridging clients get in touch — weren’t tracked at all.',
      'Finance is urgent and trust-led, so every piece of content had to show real deals, real numbers and the FCA disclosures, without naming clients.',
    ],
    approach: [
      'Designed a repeatable case-study engine: an intake form so deal details arrive complete, an SEO-structured Elementor template, and a page → featured image → LinkedIn → staff-repost workflow.',
      'Ran a weekly LinkedIn programme across the company page and staff accounts — market commentary, rate moves and case-study posts in CEO, staff and repost voices.',
      'Planned and launched the Google Ads account, then audited search terms to cut wasted match spend.',
      'Built the GTM container, a clean thank-you page conversion endpoint and a tracking checklist so forms, calls and ads can be credited properly.',
      'Designed the Zoho CRM: 882 client records, a multi-case pipeline, lender and introducer modules, and a LinkedIn inbound-lead spec so no enquiry leaks.',
      'Produced branded social creative, seasonal campaigns and a referral-commission campaign.',
    ],
    highlights: [
      { title: 'Search visibility', body: 'Impressions went from 2,330 to 6,140 in three months as case-study and service pages started ranking for non-brand terms. The brand query holds position 1.1 with a 48% CTR.' },
      { title: 'Quality traffic', body: 'Organic search became the highest-quality channel — a 65.9% engagement rate, more than double any other.' },
      { title: 'LinkedIn to website', body: 'Organic social sessions nearly doubled month-on-month (+90.5%) as the LinkedIn programme found its rhythm.' },
    ],
    analytics: [
      { label: 'Active users, 90 days', value: '+69%' },
      { label: 'Search impressions', value: '2,330 → 6,140' },
      { label: 'Case-study packages', value: '10 in 3 months' },
      { label: 'Weekly LinkedIn accounts', value: '5+' },
    ],
    gallery: [
      { src: '/work/a2z-bridging/case-study-dover.webp', width: 1080, height: 1080, alt: '£260,000 commercial bridging loan case-study graphic', frame: 'none' },
      { src: '/work/a2z-bridging/case-study-leicester.webp', width: 1080, height: 1080, alt: '£207,500 bridging loan case-study graphic', frame: 'none' },
      { src: '/work/a2z-bridging/home-mobile.webp', width: 780, height: 1688, alt: 'A2Z Bridging homepage on mobile', frame: 'phone' },
      { src: '/work/a2z-bridging/featured-warehouse.webp', width: 1536, height: 1024, alt: 'Warehouse refinance featured image', frame: 'none' },
      { src: '/work/a2z-bridging/referral-campaign.webp', width: 900, height: 1600, alt: 'Referral commission campaign graphic', frame: 'none' },
    ],
    testimonial: null,
  },
]

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug)
