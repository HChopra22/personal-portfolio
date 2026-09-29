// Case studies — every figure here comes from the client performance reports and project docs
// in ~/Clients (see `source` on each stat). Do not add numbers or quotes you can't back up.
//
// chart: optional { title, caption, labels, values, highlightFrom } bar chart shown on the case study.
// Testimonials live in data/site.js (`testimonials`).

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
    logo: { src: '/clients/epsom-smiles.webp', width: 600, height: 313, bg: '#ffffff' },
    cover: { src: '/work/epsom-smiles/home-desktop.webp', width: 1440, height: 900, alt: 'Epsom Smiles homepage' },
    stats: [
      { value: 2, suffix: '×', label: 'New patients per month', note: '~21/mo before → ~41/mo since Feb 2026 (CareStack)' },
      { value: 3, prefix: '#', suffix: '', label: 'On Google Maps for “dentist Epsom”', note: 'Top-3 organic local result, Sept 2026' },
      { value: 429, suffix: 'K', label: 'Google Ads impressions', note: '13.6K clicks at £1.65 avg CPC' },
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
      { label: 'Google Ads clicks (all time)', value: '13.6K' },
      { label: 'Average cost per click', value: '£1.65' },
      { label: 'Phone calls from ads (Jan – Aug 2026)', value: '277' },
      { label: 'Organic clicks, last 3 months', value: '966' },
      { label: 'Brand search position', value: '#1 · 38% CTR' },
      { label: 'Technical SEO score', value: '100 / 100' },
    ],
    chart: {
      title: 'New patients per month',
      caption: 'CareStack new-patient registrations, Sep 2025 – Aug 2026. Highlighted months are after the new SEO, ads and booking work went live.',
      labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      values: [18, 20, 22, 24, 21, 38, 43, 51, 33, 46, 35, 40],
      highlightFrom: 5,
    },
    media: [
      {
        type: 'site',
        title: 'The website — old vs new',
        intro: 'The live WordPress site I manage today, the high-intent emergency page, and the new headless Next.js build in development. Switch between desktop and mobile.',
        screens: [
          { label: 'Current site', tag: 'Live · WordPress + Elementor', url: 'epsomsmilesdental.co.uk', desktop: { src: '/work/epsom-smiles/site-home-desktop.webp', width: 1280, height: 2844, alt: "Epsom Smiles homepage, desktop" }, mobile: { src: '/work/epsom-smiles/site-home-mobile.webp', width: 585, height: 4500, alt: "Epsom Smiles homepage, mobile" } },
          { label: 'Emergency page', tag: 'Live · high-intent landing page', url: 'epsomsmilesdental.co.uk/emergency-dentist-epsom', desktop: { src: '/work/epsom-smiles/site-emergency-desktop.webp', width: 1280, height: 2844, alt: "Emergency dentist page, desktop" }, mobile: { src: '/work/epsom-smiles/site-emergency-mobile.webp', width: 585, height: 4500, alt: "Emergency dentist page, mobile" } },
          { label: 'New design', tag: 'In development · headless Next.js on WordPress', url: 'epsomsmilesdental.co.uk (new build)', desktop: { src: '/work/epsom-smiles/site-new-desktop.webp', width: 1280, height: 2133, alt: "New Epsom Smiles design, desktop" }, mobile: { src: '/work/epsom-smiles/site-new-mobile.webp', width: 585, height: 3900, alt: "New Epsom Smiles design, mobile" } },
        ],
      },
      {
        type: 'emails',
        title: 'Patient newsletters',
        intro: 'Recall, referral and seasonal campaigns built as table-based HTML for CareStack — on-brand, mobile-first and tracked back to bookings.',
        from: 'Epsom Smiles <enquiries@epsomsmiles.co.uk>',
        items: [
          { subject: 'It’s been a while — summer recall', note: 'Recall + refer-a-friend', src: '/work/epsom-smiles/email-summer-recall.webp', width: 640, height: 2185 },
          { subject: 'The heat & your teeth', note: 'Seasonal tips + check-up CTA', src: '/work/epsom-smiles/email-heatwave.webp', width: 640, height: 2519 },
          { subject: 'Start term with a fresh smile', note: 'Back to school · families', src: '/work/epsom-smiles/email-back-to-school.webp', width: 640, height: 2707 },
          { subject: 'Don’t tough it out', note: 'Tooth-pain re-engagement', src: '/work/epsom-smiles/email-tooth-pain.webp', width: 640, height: 1645 },
        ],
      },
    ],
    gallery: [
      { src: '/work/epsom-smiles/google-ads.webp', width: 1204, height: 448, alt: 'Google Ads account overview: 13.6K clicks, 429K impressions, £1.65 average CPC', frame: 'none', full: true },
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
    logo: { src: '/clients/green-lion-distro.png', width: 600, height: 129, bg: '#ffffff' },
    cover: { src: '/work/green-lion-distro/home-desktop.webp', width: 1440, height: 900, alt: 'Green Lion Distro homepage' },
    stats: [
      { value: 100, suffix: '%', label: 'Bespoke B2B trade build', note: 'Custom WooCommerce child theme, no off-the-shelf store' },
      { value: 6, suffix: '+', label: 'Custom integrations', note: 'iwocaPay, B2B pricing, Mailchimp, OneSignal, GA4, Clarity' },
      { value: 30, prefix: '£', suffix: 'k', label: 'Trade credit at checkout', note: 'via iwocaPay buy-now-pay-later' },
      { value: 1300, suffix: '+', label: 'Lines of custom PHP', note: 'Approval flow, pricing, stepper, emails' },
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
    analytics: [
      { label: 'Account approval', value: 'Staff-gated' },
      { label: 'Guest pricing', value: 'Hidden' },
      { label: 'Checkout options', value: 'Card · Bank · iwocaPay' },
      { label: 'Tracking', value: 'GA4 + Clarity' },
    ],
    // Add monthly traffic here when available, e.g.
    // chart: { title: 'Monthly sessions', caption: 'GA4 sessions', labels: ['Jan', ...], values: [...], highlightFrom: 0 },
    chart: null,
    media: [
      {
        type: 'site',
        title: 'The website — old design vs new',
        intro: 'The brand page before the September 2026 redesign, and after: a hero row, a proper filter bar and flavour cards that work on a phone.',
        screens: [
          { label: 'Before', tag: 'Brand page · before the redesign (Mar 2026)', url: 'greenliondistro.com/brand/big-bar', desktop: { src: '/work/green-lion-distro/site-brand-old-desktop.webp', width: 1280, height: 645, alt: "Green Lion brand page before the redesign" }, mobile: null },
          { label: 'After', tag: 'Brand page · after the redesign (Sep 2026)', url: 'greenliondistro.com/brand/big-bar', desktop: { src: '/work/green-lion-distro/site-brand-desktop.webp', width: 1280, height: 2311, alt: "Green Lion brand page after the redesign, desktop" }, mobile: { src: '/work/green-lion-distro/site-brand-mobile.webp', width: 585, height: 3900, alt: "Green Lion brand page after the redesign, mobile" } },
          { label: 'Homepage', tag: 'Live homepage', url: 'greenliondistro.com', desktop: { src: '/work/green-lion-distro/site-home-desktop.webp', width: 1280, height: 2844, alt: "Green Lion homepage, desktop" }, mobile: { src: '/work/green-lion-distro/site-home-mobile.webp', width: 585, height: 4500, alt: "Green Lion homepage, mobile" } },
        ],
      },
    ],
    gallery: [
      { src: '/work/green-lion-distro/product-page-redesign.webp', width: 1440, height: 1100, alt: 'Redesign built from the Figma file — desktop', frame: 'browser' },
      { src: '/work/green-lion-distro/product-page-mobile.webp', width: 375, height: 1000, alt: 'Redesign — mobile filters open', frame: 'phone' },
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
    logo: { src: '/clients/a2z-bridging.webp', width: 600, height: 184, bg: '#0d1e3d' },
    cover: { src: '/work/a2z-bridging/home-desktop.webp', width: 1440, height: 900, alt: 'A2Z Bridging homepage' },
    stats: [
      { value: 164, prefix: '+', suffix: '%', label: 'Google search impressions', note: 'Mar – Jun 2026 vs previous 3 months' },
      { value: 66, prefix: '+', suffix: '%', label: 'Website sessions (web uplift)', note: '+69% users, 90 days to June 2026' },
      { value: 42, suffix: '', label: 'Places gained in average Google position', note: '69.9 → 27.9 (H2 2025 vs Apr – Sep 2026)' },
      { value: 882, suffix: '', label: 'Client records unified in Zoho CRM', note: 'Web + LinkedIn enquiries routed in automatically' },
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
      'Designed and integrated Zoho CRM: 882 client records in one place, a multi-case pipeline, lender and introducer modules, website forms wired straight in, and a LinkedIn inbound-lead spec with a one-business-day SLA — so no enquiry leaks.',
      'Produced branded social creative, seasonal campaigns and a referral-commission campaign.',
    ],
    highlights: [
      { title: 'Search visibility', body: 'Impressions went from 2,330 to 6,140 in three months as case-study and service pages started ranking for non-brand terms. The brand query holds position 1.1 with a 48% CTR.' },
      { title: 'Quality traffic', body: 'Organic search became the highest-quality channel — a 65.9% engagement rate, more than double any other.' },
      { title: 'Zoho CRM integration', body: 'Website and LinkedIn enquiries now land in Zoho automatically, de-duplicated against 882 existing client records, with a one-business-day follow-up SLA — replacing inboxes and spreadsheets.' },
    ],
    analytics: [
      { label: '“bridging loan broker” position', value: '1.1' },
      { label: 'Organic CTR', value: '1.6% → 4%' },
      { label: 'Google Ads CTR', value: '10.4%' },
      { label: 'Deals documented as case studies', value: '£3.2m+' },
    ],
    media: [
      {
        type: 'site',
        title: 'Website & case-study pages',
        intro: 'The live site, and one of the SEO case-study pages built from my Elementor template — tags, deal snapshot, risk, solution, outcome and FAQs.',
        screens: [
          { label: 'Case study page', tag: '£260,000 commercial bridging loan · Dover (Elementor template)', url: 'a2zbridging.co.uk/commercial-bridging-loan-desktop-valuation-dover', desktop: { src: '/work/a2z-bridging/site-casestudy-desktop.webp', width: 1280, height: 3733, alt: "A2Z case study page, desktop" }, mobile: { src: '/work/a2z-bridging/site-casestudy-mobile.webp', width: 585, height: 7800, alt: "A2Z case study page, mobile" } },
          { label: 'Homepage', tag: 'Live homepage', url: 'a2zbridging.co.uk', desktop: { src: '/work/a2z-bridging/site-home-desktop.webp', width: 1280, height: 2844, alt: "A2Z homepage, desktop" }, mobile: { src: '/work/a2z-bridging/site-home-mobile.webp', width: 585, height: 4500, alt: "A2Z homepage, mobile" } },
        ],
      },
      {
        type: 'social',
        title: 'Instagram & LinkedIn content',
        intro: 'Weekly market-insight posts, case-study graphics, carousels and stories across the company page and staff accounts — all FCA-disclaimed.',
        instagram: {
          handle: 'a2zbridging',
          caption: 'The market “slowed” in Q1. The deals didn’t. Swipe for why certainty still wins in a cooler market →',
          slides: [{ src: '/work/a2z-bridging/ig-1.webp', width: 720, height: 900, alt: "" }, { src: '/work/a2z-bridging/ig-2.webp', width: 720, height: 900, alt: "" }, { src: '/work/a2z-bridging/ig-3.webp', width: 720, height: 900, alt: "" }, { src: '/work/a2z-bridging/ig-4.webp', width: 720, height: 900, alt: "" }, { src: '/work/a2z-bridging/ig-5.webp', width: 720, height: 900, alt: "" }, { src: '/work/a2z-bridging/ig-6.webp', width: 720, height: 900, alt: "" }],
        },
        stories: [{ src: '/work/a2z-bridging/story-1.webp', width: 600, height: 1067, alt: "Instagram story \u2014 Q1 market update" }, { src: '/work/a2z-bridging/story-2.webp', width: 600, height: 1067, alt: "Instagram story \u2014 market insight" }],
        linkedin: [
          { author: 'A2Z Bridging', subtitle: 'Company page · Market insight', date: 'June 2026', text: "The base rate hasn't moved. Your deadline has.\n\nThe Bank of England sits at 3.75% and the City expects it to hold again on the 18th. Inflation's still sticky. \"Cheap money is coming\" has been the line for two years now.\n\nHere's what's quietly happening while everyone waits: the UK bridging book has hit a record ~\u00a312bn. Deal flow is accelerating.\n\nBecause in property, the discount is in the timing. A motivated seller, an auction lot, a chain about to collapse \u2014 those don't wait for the MPC.\n\nSpeed isn't a nice-to-have in this market. It's the product.\n\nNo drama. Just delivery.\n\n#BridgingFinance #PropertyFinance #UKProperty #A2ZBridging", image: { src: '/work/a2z-bridging/li-2026-06-08.webp', width: 900, height: 1125, alt: "LinkedIn graphic \u2014 the base rate hasn\u2019t moved" } },
          { author: 'A2Z Bridging', subtitle: 'Company page · Market insight', date: 'August 2026', text: "Five meetings. Five holds. Anyone waiting for cheap money to come back is going to be waiting a while.\n\nThe Bank of England held at 3.75% again last Thursday \u2014 and three of the nine voted to put rates UP.\n\nMeanwhile, the auction rooms are busy. Landlords exiting under the Renters' Rights Act. Estate sales. Distressed stock. All of it on 28-day completion clocks that high-street banks can't hit.\n\nThat's the market bridging was built for \u2014 and it's why industry loan books have just pushed past \u00a313bn.\n\nSitting on an auction win, a chain break, or a purchase your bank can't move fast enough on? We'll structure it and get it done.\n\n#BridgingFinance #AuctionFinance #PropertyInvestment #A2ZBridging", image: null },
        ],
        more: [{ src: '/work/a2z-bridging/li-canary-wharf.webp', width: 1080, height: 1080, alt: "LinkedIn graphic \u2014 \u00a3502,450 auction bridging loan, Canary Wharf" }, { src: '/work/a2z-bridging/li-2026-03-16.webp', width: 1200, height: 627, alt: "LinkedIn graphic \u2014 market insight, March 2026" }, { src: '/work/a2z-bridging/li-2026-03-30.webp', width: 1200, height: 628, alt: "LinkedIn graphic \u2014 the bridging market is moving" }, { src: '/work/a2z-bridging/li-2026-03-09.webp', width: 1200, height: 627, alt: "LinkedIn featured image, March 2026" }],
      },
    ],
    gallery: [
      { src: '/work/a2z-bridging/case-study-dover.webp', width: 1080, height: 1080, alt: '£260,000 commercial bridging loan case-study graphic', frame: 'none' },
      { src: '/work/a2z-bridging/case-study-leicester.webp', width: 1080, height: 1080, alt: '£207,500 bridging loan case-study graphic', frame: 'none' },
      { src: '/work/a2z-bridging/referral-campaign.webp', width: 900, height: 1600, alt: 'Referral commission campaign graphic', frame: 'none' },
      { src: '/work/a2z-bridging/featured-warehouse.webp', width: 1536, height: 1024, alt: 'Warehouse refinance featured image', frame: 'none' },
    ],
    testimonial: null,
  },
]

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug)
