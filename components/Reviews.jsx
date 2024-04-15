'use client'

import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import {Pagination} from 'swiper/modules'

const reviewsData = [
  {
    avatar: '/reviews/dave.png',
    name: 'Dave Cohen',
    job: 'Computer Science Lecturer',
    review: 'Harsh showed impressive skill with his FPS Unity project. Using a variety of different game states, vector logic and animations to make his game have depth. His report goes in large depth to cover all aspects of modern games design and its progress in the world.'
  },
  {
    avatar: '/reviews/silvio.jpg',
    name: 'Silvio Monteiro',
    job: 'Senior Software Engineer',
    review: 'Harsh was responsible for developing and maintaining email direct marketing campaigns for companies such as Microsoft, McAfee, VMware and Cisco.He displayed excellent communication, organisation, reliablity and computer literacy. He is flexible and willing to work on any project that is assigned to him. I think he would be a tremendous asset for your company and has my highest recommendation.'
  },
  {
    avatar: '/reviews/priya.jpg',
    name: 'Paramjeet Kapoor',
    job: 'Accounts Manager',
    review: 'Harsh was up to any task given to him in his 4 years at Henry Construction. He showed great communication skills by befrending the staff and being able to help them at any given turn. He would be a great addition to any team or project.'
  },

]

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto"> Reviews </h2>
        {/* slider */}
        <Swiper 
        slidesPerView={1} 
        breakpoints={{
          640: {slidesPerView: 2},
          1400: {slidesPerView: 3},
        }}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                  <CardHeader className='p-0 mb-5'>
                    <div className="flex items-center gap-x-4">
                      <Image src={person.avatar} width={70} height={70} alt="" priority/>
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>{person.review}</CardDescription>
                </Card>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Reviews