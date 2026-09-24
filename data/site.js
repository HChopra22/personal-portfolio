// Single source of truth for site content.
// Edit copy, projects, experience and links here — components read from this file.

export const SITE_URL = 'https://www.harshchopra.com'

export const site = {
  name: 'Harsh Chopra',
  legalName: 'Harshdeep Chopra',
  title: 'Harsh Chopra | Senior Product Owner, Web Developer & Photographer',
  shortTitle: 'Harsh Chopra',
  description:
    'Senior Product Owner in London building digital products, websites and analytics setups — plus UX design, SEO and photography for freelance clients.',
  jobTitle: 'Senior Product Owner',
  employer: 'Clarion Events',
  email: 'admin@harshchopra.com',
  location: 'London, UK',
  cv: '/cv/HarshChopra-CV.pdf',
  // First full-time digital role (Vodafone graduate scheme)
  careerStart: new Date('2021-09-01'),
}

export const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/harshdeep-chopra/' },
  { name: 'GitHub', url: 'https://github.com/HChopra22' },
  { name: 'Instagram', url: 'https://www.instagram.com/harshc._/' },
]

export const navLinks = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'projects' },
  { path: '/contact', name: 'contact' },
]

export const yearsOfExperience = () => {
  const ms = Date.now() - site.careerStart.getTime()
  return Math.max(1, Math.floor(ms / (365.25 * 24 * 60 * 60 * 1000)))
}

/* ---------------------------------- About --------------------------------- */

export const education = [
  { name: 'Royal Holloway, University of London', qualification: 'BSc Computer Science (First Class)', years: '2018 – 2021' },
  { name: 'Brunel University London', qualification: 'Foundation in Maths & Computing', years: '2017 – 2018' },
  { name: 'The Heathland School', qualification: 'A-Levels: Maths, ICT, History', years: '2015 – 2017' },
]

export const experience = [
  { name: 'Clarion Events – Gaming', qualification: 'Senior Product Owner – Digital (iGB & iGBA)', years: 'Feb 2025 – Present' },
  { name: 'Clarion Events – Gaming', qualification: 'Product Owner – Digital', years: 'Sept 2023 – Feb 2025' },
  { name: 'Vodafone UK – App Team', qualification: 'Product Owner – Graduate Scheme', years: 'Sept 2022 – Sept 2023' },
  { name: 'Vodafone UK – Front End (PAYM)', qualification: 'Front-End Developer – Graduate Scheme', years: 'Sept 2021 – Sept 2022' },
  { name: 'Henry Construction Projects Ltd', qualification: 'Administrative Assistant', years: 'July 2017 – Aug 2021' },
]

export const skills = [
  'Front end: HTML, CSS, JavaScript, React, Next.js, Tailwind CSS',
  'CMS: Optimizely (Episerver), WordPress, Wix',
  'Analytics: GA4, Google Tag Manager, Microsoft Clarity, Semrush',
  'UX: Figma, Adobe XD, Canva',
  'Photo & video: Photoshop, Lightroom, After Effects',
]

export const tools = [
  { src: '/about/html.svg', name: 'HTML5' },
  { src: '/about/css.svg', name: 'CSS3' },
  { src: '/about/js.svg', name: 'JavaScript' },
  { src: '/about/react.svg', name: 'React' },
  { src: '/about/java.svg', name: 'Java' },
  { src: '/about/unity.svg', name: 'Unity' },
  { src: '/about/figma.svg', name: 'Figma' },
  { src: '/about/adobecc.svg', name: 'Adobe Creative Cloud' },
  { src: '/about/photoshop.svg', name: 'Photoshop' },
  { src: '/about/optimizely.svg', name: 'Optimizely' },
]

/* -------------------------------- Services -------------------------------- */
// `icon` is a lucide-react icon name, resolved in components/Services.jsx

export const services = [
  {
    icon: 'Paintbrush2',
    title: 'UX / UI Design',
    description:
      'Using Figma, Adobe XD, Illustrator and Canva, I turn ideas into wireframes and clickable prototypes so clients can see and test their product before it is built.',
    more: 'I design user-centred interfaces that are functional and visually clean, and use interactive prototypes to get sign-off quickly and cut rework during build.',
  },
  {
    icon: 'Laptop',
    title: 'Web Development',
    description:
      'HTML, CSS, JavaScript, React, Next.js and Tailwind CSS — fast, responsive websites built for your goal, whether that is content, lead generation or eCommerce.',
    more: 'I build responsive sites with modern tooling and care about performance, accessibility and SEO from day one. I also work day-to-day in Optimizely CMS, WordPress and Wix.',
  },
  {
    icon: 'TrendingUp',
    title: 'Product & Growth',
    description:
      'As Senior Product Owner at Clarion Events (iGB and iGB Affiliate), I run full product cycles: discovery, requirements, delivery oversight, QA and release.',
    more: 'End-to-end ownership of digital products in a competitive B2B market — shaping roadmaps, writing requirements, working with engineering and design, and measuring what ships.',
  },
  {
    icon: 'Search',
    title: 'SEO & Analytics',
    description:
      'Analytics across products reaching 3M+ users. I use GA4, Google Tag Manager, Microsoft Clarity and Semrush to measure performance and find growth.',
    more: 'Technical and on-page SEO, tracking plans, GTM implementations, GA4 reporting and Clarity session analysis — so decisions are backed by data, not guesswork.',
  },
  {
    icon: 'Camera',
    title: 'Photography',
    description:
      'Landscapes from around the world, portraits and events — shot on Sony full-frame and edited in Lightroom.',
    more: 'Travel and landscape work, portraits and special occasions. My full galleries live on my photography portfolio.',
    cta: { label: 'View photography portfolio', href: 'https://photos.harshchopra.com' },
  },
  {
    icon: 'Video',
    title: 'Videography',
    description:
      'High-quality video including drone footage and B-roll, shaped around the story the client wants to tell.',
    more: 'From planning shots to aerial drone capture and edit, I produce video content tailored to the client’s vision and channel. Stills and video work sit together on my photography portfolio.',
    cta: { label: 'See my visual work', href: 'https://photos.harshchopra.com' },
  },
]

/* -------------------------------- Projects -------------------------------- */
// Projects with a `slug` have a full case study at /work/[slug] (content in data/caseStudies.js).

export const projects = [
  {
    image: '/work/epsom-smiles/home-desktop.webp',
    category: 'Client Work',
    name: 'Epsom Smiles Dental Practice',
    description: 'Website, local SEO, Google Ads, GA4 tracking and patient comms for an independent dental practice in Surrey.',
    slug: 'epsom-smiles',
    link: 'https://www.epsomsmilesdental.co.uk',
    github: null,
    featured: true,
  },
  {
    image: '/work/green-lion-distro/product-page-redesign.webp',
    category: 'Client Work',
    name: 'Green Lion Distro',
    description: 'A custom B2B WooCommerce trade store with approval-gated accounts, role-based pricing and a variation-first ordering UI.',
    slug: 'green-lion-distro',
    link: 'https://greenliondistro.com',
    github: null,
    featured: true,
  },
  {
    image: '/work/a2z-bridging/case-study-dover.webp',
    category: 'Client Work',
    name: 'A2Z Bridging',
    description: 'SEO, case-study content, LinkedIn, Google Ads, tracking and CRM for an FCA-regulated bridging finance broker.',
    slug: 'a2z-bridging',
    link: 'https://a2zbridging.co.uk',
    github: null,
    featured: true,
  },
  {
    image: '/work/portfoliopic.png',
    category: 'Web Development',
    name: 'Portfolio Website',
    description: 'This site — built to showcase my work and services. Stack: React, Next.js, Tailwind CSS, shadcn/ui.',
    link: null,
    github: 'https://github.com/HChopra22/personal-portfolio',
  },
  {
    image: '/work/Photogpic.png',
    category: 'Web Development',
    name: 'Photography Website',
    description: 'A gallery for my landscape and portrait photography from around the world. Stack: React, Tailwind CSS, Framer Motion.',
    link: 'https://photos.harshchopra.com',
    github: 'https://github.com/HChopra22/photog-portfolio',
  },
  {
    image: '/work/sidhu.png',
    category: 'Client Work',
    name: 'Personal Trainer Website',
    description: 'A personal trainer site built on Wix with custom JavaScript, designed to showcase services and attract new clients.',
    link: 'https://www.sidhufitness.co.uk',
    github: null,
  },
  {
    image: '/work/vapecoco.png',
    category: 'Client Work',
    name: 'eCommerce Vape Store',
    description: 'An eCommerce store built for a client on WordPress with custom JavaScript.',
    link: 'https://www.vapecoco.com',
    github: null,
  },
  {
    image: '/work/occsite.png',
    category: 'Client Work',
    name: 'Indian Restaurant Website',
    description: 'A restaurant website built on Wix. I handled the roadmap, build and photography, and set up and ran the Google Business Profile.',
    link: null,
    github: null,
  },
  {
    image: '/work/FPSShooter.png',
    category: 'Games & Research',
    name: 'FPS Zombie Survival + Dissertation',
    description: 'A round-based zombie survival game built in Unity (C#) for my final-year project, with a 15,000-word dissertation on the key frameworks of games design.',
    link: null,
    github: 'https://github.com/HChopra22/dissertation-text-final',
  },
]

/* --------------------------------- Reviews -------------------------------- */

export const reviews = [
  {
    avatar: '/reviews/dave.png',
    name: 'Dave Cohen',
    job: 'Computer Science Lecturer',
    review:
      'Harsh showed impressive skill with his FPS Unity project, using a variety of game states, vector logic and animations to give his game depth. His report covers all aspects of modern games design and its progress in great depth.',
  },
  {
    avatar: '/reviews/silvio.jpg',
    name: 'Silvio Monteiro',
    job: 'Senior Software Engineer',
    review:
      'Harsh was responsible for developing and maintaining email direct marketing campaigns for companies such as Microsoft, McAfee, VMware and Cisco. He displayed excellent communication, organisation, reliability and computer literacy. He is flexible and willing to work on any project assigned to him, and has my highest recommendation.',
  },
  {
    avatar: '/reviews/priya.jpg',
    name: 'Paramjeet Kapoor',
    job: 'Accounts Manager',
    review:
      'Harsh was up to any task given to him in his four years at Henry Construction. He showed great communication skills, befriending the staff and helping them at every turn. He would be a great addition to any team or project.',
  },
]
