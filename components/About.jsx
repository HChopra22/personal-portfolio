'use client'

import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User2, MailIcon, HomeIcon, GraduationCap, Briefcase } from 'lucide-react'
import { site, education, experience, skills, tools } from '@/data/site'

import AboutBento from './AboutBento'
import Reveal from './motion/Reveal'

const infoData = [
  { icon: <User2 size={20} />, text: site.name },
  { icon: <MailIcon size={20} />, text: <a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a> },
  { icon: <GraduationCap size={20} />, text: 'BSc Computer Science, First Class' },
  { icon: <HomeIcon size={20} />, text: site.location },
]

const Timeline = ({ icon, title, items }) => (
  <div className="flex flex-col gap-y-6">
    <div className="flex gap-x-4 items-center text-[22px] text-primary">
      {icon}
      <h4 className="capitalize font-medium">{title}</h4>
    </div>
    <ol className="flex flex-col gap-y-8">
      {items.map(({ name, qualification, years }) => (
        <li className="flex gap-x-8 group" key={`${name}-${years}`}>
          <div className="h-[84px] w-[1px] bg-border relative ml-2 shrink-0" aria-hidden="true">
            <div className="w-[11px] h-[11px] -left-[5px] rounded-full bg-primary absolute group-hover:translate-y-[84px] transition-all duration-500" />
          </div>
          <div>
            <div className="font-semibold text-xl leading-tight mb-2">{name}</div>
            <div className="text-lg leading-tight text-muted-foreground mb-3">{qualification}</div>
            <div className="text-base font-medium">{years}</div>
          </div>
        </li>
      ))}
    </ol>
  </div>
)

const About = () => {
  return (
    <section id="about" className="py-12 xl:py-24">
      <div className="container mx-auto">
        <Reveal><h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2></Reveal>
        <div className="flex flex-col xl:flex-row">
          <div className="mb-12 xl:mb-0 xl:mr-16 xl:w-[520px] xl:shrink-0">
            <AboutBento />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal info</TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Experience</TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Product-minded, hands-on</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I’m a Computer Science graduate with full-time experience in front-end development, web management
                      and product ownership. Today I lead digital products for iGB and iGB Affiliate at Clarion Events,
                      working across Optimizely CMS, GA4, GTM and Clarity — and I take on freelance web, SEO and
                      photography work alongside it.
                    </p>
                    <ul className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <li className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                          <span className="text-primary" aria-hidden="true">{item.icon}</span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <h3 className="h3 mb-8 text-center xl:text-left">Work &amp; studies</h3>
                  <div className="grid md:grid-cols-2 gap-y-8 gap-x-8">
                    <Timeline icon={<Briefcase aria-hidden="true" />} title="experience" items={experience} />
                    <Timeline icon={<GraduationCap size={28} aria-hidden="true" />} title="education" items={education} />
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I work with</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4" />
                      <ul>
                        {skills.map((name) => (
                          <li className="p-2 font-medium" key={name}>{name}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Tools</h4>
                      <div className="border-b border-border mb-4" />
                      <ul className="flex flex-wrap items-center gap-y-4 gap-x-8 justify-center xl:justify-start">
                        {tools.map(({ src, name }) => (
                          <li key={name} className="transition-transform duration-300 hover:scale-110" title={name}>
                            <Image src={src} width={60} height={60} alt={name} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
