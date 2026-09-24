'use client'
import Link from 'next/link'
import { Button } from './ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/site'

const featured = projects.filter((p) => p.featured).slice(0, 4)

const Work = () => (
  <section id="work" className="relative mb-12 xl:mb-48">
    <div className="container mx-auto">
      <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
        <h2 className="section-title mb-4">Latest projects</h2>
        <p className="subtitle mb-8">A selection of recent builds — with live links and GitHub repositories where available.</p>
        <Button asChild>
          <Link href="/projects">All projects</Link>
        </Button>
      </div>
      <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
        <Swiper
          className="!pb-12"
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 } }}
          spaceBetween={30}
          modules={[Pagination, A11y]}
          pagination={{ clickable: true }}
        >
          {featured.map((project) => (
            <SwiperSlide key={project.name}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </section>
)

export default Work
