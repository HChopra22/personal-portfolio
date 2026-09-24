'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'get-in-touch', label: 'Contact' },
]

// Floating quick-nav that follows the visitor down the homepage and highlights the current section.
export default function SectionRibbon() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  const go = (id) => (e) => {
    e.preventDefault()
    const el = id === 'top' ? document.body : document.getElementById(id)
    if (id === 'top') window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    else el?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    history.replaceState(null, '', id === 'top' ? ' ' : `#${id}`)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          aria-label="Jump to section"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4"
        >
          <ul className="pointer-events-auto flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-border bg-background/80 p-1.5 shadow-2xl backdrop-blur-md [scrollbar-width:none] dark:bg-secondary/80">
            <li className="hidden sm:block">
              <a href="#top" onClick={go('top')} aria-label="Back to top" className="flex h-9 w-8 sm:w-9 items-center justify-center rounded-full text-muted-foreground hover:text-primary">
                <ArrowUp size={16} aria-hidden="true" />
              </a>
            </li>
            {sections.map((s) => {
              const isActive = active === s.id
              return (
                <li key={s.id} className="relative">
                  {isActive && (
                    <motion.span layoutId="ribbon-pill" className="absolute inset-0 rounded-full bg-primary" transition={{ type: 'spring', stiffness: 380, damping: 32 }} aria-hidden="true" />
                  )}
                  <a
                    href={`#${s.id}`}
                    onClick={go(s.id)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative z-10 block whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors sm:px-4 sm:text-sm ${isActive ? 'text-primary-foreground' : 'text-foreground/80 hover:text-primary'}`}
                  >
                    {s.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
