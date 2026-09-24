import Link from 'next/link'
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'
import { RiArrowDownSLine } from 'react-icons/ri'

import HeroVisual from './HeroVisual'
import Socials from './Socials'
import CvLink from './CvLink'
import { site } from '@/data/site'

const Hero = () => {
  return (
    <section id="top" className="overflow-x-clip py-12 xl:py-24 min-h-[calc(100vh-102px)] xl:pt-28 bg-[#fef9f5] dark:bg-accent relative">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <p className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Senior Product Owner · London
            </p>
            <h1 className="h1 mb-4">
              Harsh Chopra <span className="block text-primary">Product Owner &amp; Web Developer</span>
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              {site.jobTitle} at {site.employer} with a first-class Computer Science degree. I help businesses with
              websites, UX, SEO and analytics — and I shoot photography and video on the side.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Button asChild className="gap-x-2">
                <Link href="/contact">
                  Contact me <Send size={18} aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="secondary" className="gap-x-2">
                <CvLink>
                  Download CV <Download size={18} aria-hidden="true" />
                </CvLink>
              </Button>
            </div>
            <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0" iconStyles="text-foreground text-[22px] hover:text-primary transition-all" />
            {/* compact proof strip for smaller screens (the collage is desktop-only) */}
            <ul className="xl:hidden mt-10 grid grid-cols-3 gap-3 text-left">
              {[
                ['+164%', 'search impressions', 'A2Z Bridging'],
                ['277', 'calls from ads', 'Epsom Smiles'],
                ['3', 'case studies', 'with the numbers'],
              ].map(([v, l, c]) => (
                <li key={l} className="rounded-xl bg-background/70 p-3 ring-1 ring-border dark:bg-secondary/60">
                  <div className="text-xl font-bold text-primary">{v}</div>
                  <div className="text-xs leading-tight">{l}</div>
                  <div className="mt-1 text-[10px] text-muted-foreground">{c}</div>
                </li>
              ))}
            </ul>
          </div>
          {/* visual */}
          <div className="hidden xl:flex shrink-0 items-center">
            <HeroVisual />
          </div>
        </div>
        <a href="#about" aria-label="Scroll to About" className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-8 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </a>
      </div>
    </section>
  )
}

export default Hero
