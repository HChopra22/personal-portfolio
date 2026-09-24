import Link from 'next/link'
import { pageMetadata } from '@/lib/metadata'
import { MapPin, Briefcase, Clock3 } from 'lucide-react'
import Form from '@/components/Form'
import ContactVisual from '@/components/ContactVisual'
import CopyEmail from '@/components/CopyEmail'
import Reveal from '@/components/motion/Reveal'
import { site } from '@/data/site'
import { caseStudies } from '@/data/caseStudies'

export const metadata = pageMetadata({
  title: 'Contact',
  description: 'Get in touch with Harsh Chopra about websites, UX, SEO, analytics, Google Ads or photography projects.',
  path: '/contact',
})

const Contact = () => (
  <>
    {/* hero */}
    <section className="relative overflow-hidden bg-[#fef9f5] py-14 dark:bg-accent xl:py-24">
      <div className="container mx-auto grid items-center gap-14 xl:grid-cols-2">
        <div className="text-center xl:text-left">
          <div className="mb-4 flex items-center justify-center gap-x-4 text-lg text-primary xl:justify-start">
            <span className="h-[2px] w-[30px] bg-primary" aria-hidden="true" />
            Say hello
          </div>
          <h1 className="h1 mb-6">
            Let’s build something <span className="text-primary">that performs.</span>
          </h1>
          <p className="subtitle mx-auto max-w-[480px] xl:mx-0">
            A new website, better tracking, more leads from search or ads — or a shoot. Tell me where you are and where
            you want to be, and I’ll get back to you with a clear next step.
          </p>
          <div className="mb-8 flex justify-center xl:justify-start">
            <CopyEmail />
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="mr-2">Recent work:</span>
            {caseStudies.map((c, i) => (
              <span key={c.slug}>
                <Link href={`/work/${c.slug}`} className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline">
                  {c.client}
                </Link>
                {i < caseStudies.length - 1 && <span aria-hidden="true"> · </span>}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <ContactVisual />
        </div>
      </div>
    </section>

    {/* details + form */}
    <section id="form" className="container mx-auto grid gap-x-16 gap-y-12 py-20 xl:grid-cols-[2fr_3fr] xl:py-28">
      <Reveal>
        <h2 className="h3 mb-8">Start the conversation</h2>
        <ul className="flex flex-col gap-y-6 text-base xl:text-lg">
          <li className="flex items-start gap-x-5">
            <MapPin size={20} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
            <span>Based in {site.location}, working remotely with clients anywhere</span>
          </li>
          <li className="flex items-start gap-x-5">
            <Briefcase size={20} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
            <span>Websites, UX, SEO &amp; analytics, Google Ads, photography and video</span>
          </li>
          <li className="flex items-start gap-x-5">
            <Clock3 size={20} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
            <span>Freelance, alongside my role as {site.jobTitle} at {site.employer}</span>
          </li>
        </ul>
      </Reveal>
      <Form />
    </section>
  </>
)

export default Contact
