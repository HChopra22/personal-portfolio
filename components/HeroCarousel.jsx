'use client'
import { useEffect, useState, useCallback } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import MemojiVisual from './MemojiVisual'
import HeroVisual from './HeroVisual'

const slides = [
  { id: 'me', label: 'About me', Component: MemojiVisual },
  { id: 'work', label: 'My work', Component: HeroVisual },
]
const INTERVAL = 6500

// Rotates between the memoji illustration and the work collage. Pauses on hover/focus,
// and doesn't auto-advance when the visitor prefers reduced motion.
export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [])

  useEffect(() => {
    if (paused || reduce) return
    const t = setTimeout(next, INTERVAL)
    return () => clearTimeout(t)
  }, [index, paused, reduce, next])

  const { Component } = slides[index]

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero illustrations"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative h-[520px] w-[600px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slides[index].id}
            className="absolute inset-0"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}: ${slides[index].label}`}
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: 60, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: -60, scale: 0.97 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Component />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* controls */}
      <div className="mt-4 flex items-center justify-center gap-3" role="tablist" aria-label="Choose illustration">
        {slides.map((s, i) => {
          const active = i === index
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setIndex(i)}
              className={`group flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${active ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-primary'}`}
            >
              <span className={`relative block h-1.5 w-8 overflow-hidden rounded-full ${active ? 'bg-white/30' : 'bg-muted-foreground/30'}`} aria-hidden="true">
                {active && (
                  <motion.span
                    key={`${index}-${paused}`}
                    className="absolute inset-y-0 left-0 bg-white"
                    initial={{ width: paused || reduce ? '100%' : '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: paused || reduce ? 0 : INTERVAL / 1000, ease: 'linear' }}
                  />
                )}
              </span>
              {s.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
