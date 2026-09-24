import { pageMetadata } from '@/lib/metadata'
import { MailIcon, MapPin, Briefcase } from 'lucide-react'
import Form from '@/components/Form'
import { site } from '@/data/site'

export const metadata = pageMetadata({
  title: 'Contact',
  description: 'Get in touch with Harsh Chopra about websites, UX, SEO, analytics or photography projects.',
  path: '/contact',
})

const Contact = () => (
  <section>
    <div className="container mx-auto">
      <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-primary" aria-hidden="true" />
            Say hello
          </div>
          <h1 className="h1 max-w-md mb-8">Let’s work together</h1>
          <p className="subtitle max-w-[440px]">
            Got a digital project in mind? Tell me about your current pain points, your timeline and what a great
            outcome looks like — I’ll get back to you.
          </p>
        </div>
        <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat" aria-hidden="true" />
      </div>
      <div className="grid xl:grid-cols-2 gap-x-16 mb-24 xl:mb-32">
        <ul className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
          <li className="flex items-center gap-x-8">
            <MailIcon size={20} className="text-primary shrink-0" aria-hidden="true" />
            <a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a>
          </li>
          <li className="flex items-center gap-x-8">
            <MapPin size={20} className="text-primary shrink-0" aria-hidden="true" />
            <span>Based in {site.location} — working remotely with clients anywhere</span>
          </li>
          <li className="flex items-center gap-x-8">
            <Briefcase size={20} className="text-primary shrink-0" aria-hidden="true" />
            <span>Websites, UX, SEO &amp; analytics, photography and video</span>
          </li>
        </ul>
        <Form />
      </div>
    </div>
  </section>
)

export default Contact
