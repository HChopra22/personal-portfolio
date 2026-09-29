'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useReducedMotion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay, A11y, Keyboard } from 'swiper/modules'
import { Quote, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import Reveal from './motion/Reveal'
import { visibleTestimonials } from '@/data/site'
import { caseStudies } from '@/data/caseStudies'

const csBySlug = Object.fromEntries(caseStudies.map((c) => [c.slug, c]))

const Testimonials = () => {
  const reduce = useReducedMotion()
  const items = visibleTestimonials()

  return (
    <section id="testimonials" className="mb-12 overflow-hidden py-12 xl:mb-24 xl:py-16" aria-labelledby="testimonials-title">
      <div className="container mx-auto">
        <Reveal className="mb-12 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 id="testimonials-title" className="section-title mx-auto mb-3 md:mx-0">Testimonials</h2>
            <p className="subtitle mb-0">What clients and colleagues say about working with me.</p>
          </div>
          <div className="flex gap-3">
            <button type="button" aria-label="Previous testimonial" className="testimonials-prev flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary">
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <button type="button" aria-label="Next testimonial" className="testimonials-next flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90">
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
        </Reveal>

        <Swiper
          className="!overflow-visible !pb-14"
          modules={[Pagination, Navigation, Autoplay, A11y, Keyboard]}
          slidesPerView={1.05}
          spaceBetween={24}
          breakpoints={{ 768: { slidesPerView: 2 }, 1400: { slidesPerView: 3 } }}
          navigation={{ prevEl: '.testimonials-prev', nextEl: '.testimonials-next' }}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          loop={items.length > 3}
          autoplay={reduce ? false : { delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        >
          {items.map((t) => {
            const cs = t.caseStudy ? csBySlug[t.caseStudy] : null
            return (
              <SwiperSlide key={t.name} className="!h-auto">
                <figure
                  data-accent
                  style={cs ? { '--accent-base': cs.accent, '--accent-dark': cs.accentOnDark } : undefined}
                  className="relative flex h-full flex-col rounded-2xl border border-border bg-tertiary p-8 dark:bg-secondary/40"
                >
                  {!t.approved && (
                    <span className="absolute right-4 top-4 rounded-full bg-amber-400 px-2.5 py-0.5 text-xs font-semibold text-black">Draft — not live</span>
                  )}
                  <Quote size={32} className={cs ? '' : 'text-primary'} style={cs ? { color: 'var(--accent)' } : undefined} aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 text-lg leading-relaxed">“{t.review}”</blockquote>
                  <figcaption className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-6">
                    <span className="flex items-center gap-4">
                      {t.avatar ? (
                        <Image src={t.avatar} width={56} height={56} alt="" className="h-14 w-14 rounded-full object-cover" />
                      ) : (
                        <span className="flex h-14 w-14 items-center justify-center rounded-full font-semibold text-white" style={{ background: cs ? cs.accent : 'hsl(var(--primary))' }} aria-hidden="true">
                          {t.avatarInitials}
                        </span>
                      )}
                      <span>
                        <span className="block font-semibold">{t.name}</span>
                        <span className="block text-sm text-muted-foreground">{t.job}</span>
                      </span>
                    </span>
                    {cs && (
                      <Link href={`/work/${cs.slug}`} className="inline-flex shrink-0 items-center gap-1 text-sm font-medium hover:underline" style={{ color: 'var(--accent)' }}>
                        Case study <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    )}
                  </figcaption>
                </figure>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
