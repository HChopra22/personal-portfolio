import Link from 'next/link'
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'
import { RiBriefcase4Fill, RiTodoFill, RiArrowDownSLine, RiArtboard2Fill } from 'react-icons/ri'

import DevImg from './DevImg'
import Badge from './Badge'
import Socials from './Socials'
import CvLink from './CvLink'
import { site, yearsOfExperience } from '@/data/site'

const Hero = () => {
  return (
    <section className="overflow-x-clip py-12 xl:py-24 min-h-[calc(100vh-102px)] xl:pt-28 bg-[#fef9f5] dark:bg-accent relative">
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
          </div>
          {/* image */}
          <div className="hidden xl:flex relative w-[500px] h-[500px] shrink-0" aria-hidden="true">
            <Badge containerStyles="absolute top-[2%] -right-4" icon={<RiBriefcase4Fill />} endCountNum={yearsOfExperience()} endCountText="+" badgeText="Years of experience" />
            <Badge containerStyles="absolute top-[24%] -left-[6rem]" icon={<RiTodoFill />} endCountNum={10} endCountText="+" badgeText="Projects completed" />
            <Badge containerStyles="absolute top-[65%] -right-8" icon={<RiArtboard2Fill />} endCountNum={10} endCountText="+" badgeText="UX designs created" />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <DevImg containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom" imgSrc="/hero/harsh-hero-memoji-1.png" alt="" />
            </div>
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
