'use client'
import Link from "next/link"
import { Button } from "./ui/button"

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import {Pagination} from 'swiper/modules'

import ProjectCard from '@/components/ProjectCard'

const projectData = [
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Portfolio Website',
    description: 'The current website you are on. Developed with the purpose of networking myself out to future clients. Stack used: ReactJS, Next.JS, TailwindCSS, ShadCn',
    link: '/',
    github: 'https://github.com/HChopra22/personal-portfolio',
  },
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Photography Website',
    description: 'A Photography Website to display all my photos. Landscapes from around the world as well as portraits. Stack used: ReactJS, Tailwind CSS, Framer Motion',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'Unity 3D',
    name: 'FPS 3D Zombie survival',
    description: 'A round based Zombie survival game. Developed for my final year dissertation. The game is accompanied by a 15,000 word document highlighting the key frameworks of games design using C#. Stack used: Unity',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Business Development',
    name: 'Indian Resteraunt Website',
    description: 'An Indian resteraunt developed using the Wix.com CMS. Project roadmap and development was handled by me as well as the photography. The google business page was also created and ran by me.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'Business Development',
    name: 'Games Development Dissertation',
    description: 'A 15,000 Word dissertation that covers the key concepts of games development with C# and Unity3D. The dissertation also covers the rise of games development and the dangers alongside it.',
    link: '/',
    github: 'https://github.com/HChopra22/dissertation-text-final',
  },
]


const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/*text*/}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Take a look at some of my recent projects. There are links to the Github Repository if applicable as well as links for you to take a look for yourself!</p>
          <Link href='/projects'>
            <Button>All Projects</Button>
          </Link>
        </div>
        {/*Slider */}
                {/*padding on the top side is too high*/}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper className='h-[575px]'
          slidesPerView={1} 
          breakpoints={{
            640: {
              slidesPerView: 2,
          },
          }}
          spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
            {/* show first 4 projects for slider*/}
            {projectData.slice(0.4).map((project, index)=> {
              return <SwiperSlide key={index}>
                <ProjectCard project={project}></ProjectCard>
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work