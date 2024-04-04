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
    name: 'Photography Website',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam eveniet nulla illum, ab quibusdam possimus magni impedit perspiciatis voluptate. Cupiditate aspernatur nihil maiores ratione ut tempore facere distinctio at.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'react js',
    name: 'Photography Website',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam eveniet nulla illum, ab quibusdam possimus magni impedit perspiciatis voluptate. Cupiditate aspernatur nihil maiores ratione ut tempore facere distinctio at.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'react js',
    name: 'Photography Website',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam eveniet nulla illum, ab quibusdam possimus magni impedit perspiciatis voluptate. Cupiditate aspernatur nihil maiores ratione ut tempore facere distinctio at.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'react js',
    name: 'Photography Website',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam eveniet nulla illum, ab quibusdam possimus magni impedit perspiciatis voluptate. Cupiditate aspernatur nihil maiores ratione ut tempore facere distinctio at.',
    link: '/',
    github: '/',
  },
]


const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/*text*/}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, maiores labore laudantium ratione nostrum nam accusantium mollitia aliquam neque, incidunt inventore ipsum! Recusandae enim possimus, placeat deserunt quis vitae pariatur?</p>
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