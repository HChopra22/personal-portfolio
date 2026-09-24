'use client'

import Image from 'next/image'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { reviews } from '@/data/site'

const Reviews = () => (
  <section id="reviews" className="mb-12 xl:mb-32">
    <div className="container mx-auto">
      <h2 className="section-title mb-12 text-center mx-auto">Recommendations</h2>
      <Swiper
        className="!pb-12"
        slidesPerView={1}
        breakpoints={{ 640: { slidesPerView: 2 }, 1400: { slidesPerView: 3 } }}
        spaceBetween={30}
        modules={[Pagination, A11y]}
        pagination={{ clickable: true }}
      >
        {reviews.map((person) => (
          <SwiperSlide key={person.name}>
            <Card className="bg-tertiary dark:bg-secondary/40 p-8 h-full min-h-[360px]">
              <figure>
                <CardHeader className="p-0 mb-5">
                  <figcaption className="flex items-center gap-x-4">
                    <Image src={person.avatar} width={70} height={70} alt="" className="rounded-full object-cover w-[70px] h-[70px]" />
                    <div className="flex flex-col">
                      <CardTitle>{person.name}</CardTitle>
                      <p>{person.job}</p>
                    </div>
                  </figcaption>
                </CardHeader>
                <blockquote>
                  <CardDescription className="text-lg text-muted-foreground">“{person.review}”</CardDescription>
                </blockquote>
              </figure>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
)

export default Reviews
