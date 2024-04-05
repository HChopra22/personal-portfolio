import Link from 'next/link'
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiArtboard2Fill,
} from 'react-icons/ri'

import DevImg from './DevImg'
import Badge from './Badge'
import Socials from './Socials'

const Hero = () => {
  return (
      <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 dark:bg-accent bg-no-repeat bg-bottom bg-cover'>
        <div className="container mx-auto">
          <div className='flex justify-between gap-x-8'>
            {/*text */}
            <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
              <div className='text-sm uppercase font-semibold mb-4 dark:text-primary tracking-[4px]'>Web Developer | Project Manager | Photographer </div>
              <h1 className='h1 mb-4 dark:text-primary'>Hello, My name is Harsh Chopra <span className='text-5xl'>👋🏾</span></h1>
              <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
                I am a product owner with a computer science degree and a passion for all things tech. This is my portfolio which displays My works and links to other services i provide. <br/> Do not hesitate if you would like to get in touch!
              </p>
              {/*buttons */}
              <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                <Link href='/contact'>
                  <Button className='gap-x-2'>
                    Contact Me <Send size={18} />
                  </Button>
                </Link>
                <a href='/HarshChopraCV-july.pdf'  download='/HarshChopraCV-july.pdf'>
                  <Button variant='secondary' className='gap-x-2'>
                    Download CV <Download size={18} />
                  </Button>
                </a>
              </div>
              {/*socials */}
              <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles='text-foreground text-[22px] hover:text-primary transition-all'/>
            </div>
            {/*image */}
            <div className='hidden xl:flex relative'>
              {/*badge1 */}
              <Badge containerStyles='absolute top-[24%] -right-[-23rem]' icon={<RiBriefcase4Fill/>} endCountNum={5} badgeText='Years of experience' />
              {/*badge2 */}
              <Badge containerStyles='absolute top-[24%] -left-[6rem]' icon={<RiTodoFill/>} endCountNum={10} endCountText='+' badgeText='Projects Completed' />
              {/*badge3 */}
              <Badge containerStyles='absolute top-[65%] -right-8' icon={<RiArtboard2Fill/>} endCountNum={10} endCountText='+' badgeText='UX Designs created' />
              <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'>
                <DevImg containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/harsh-hero-memoji-1.png'/>
              </div>
            </div>
          </div>
          {/*icon */}
          <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
            <RiArrowDownSLine className='text-3xl text-primary' />
          </div>
        </div>
    </section>
  )
}

export default Hero