'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import Reveal from './motion/Reveal'
import DeviceFrame from './work/DeviceFrame'
import { caseStudies } from '@/data/caseStudies'

// One card in the sticky stack. As the following card scrolls over it, it scales back slightly.
const StackCard = ({ cs, i, total, progress }) => {
  const reduce = useReducedMotion()
  const start = i / total
  const scale = useTransform(progress, [start, 1], [1, reduce ? 1 : 1 - (total - i) * 0.04])
  const stat = cs.stats[0]
  const stat2 = cs.stats[1]
  return (
    <div className="lg:sticky" style={{ top: `calc(110px + ${i * 28}px)` }}>
      <motion.div
        style={{ scale, transformOrigin: 'top center', '--accent-base': cs.accent, '--accent-dark': cs.accentOnDark }}
        data-accent
        className="relative mb-10 overflow-hidden rounded-3xl border border-border bg-background shadow-xl"
      >
        <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: 'var(--accent)' }} aria-hidden="true" />
        <div className="grid items-center gap-8 p-6 md:p-10 lg:grid-cols-[5fr_7fr] lg:gap-12">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[3px]" style={{ color: 'var(--accent)' }}>
              {String(i + 1).padStart(2, '0')} · {cs.sector}
            </p>
            <h3 className="mb-3 text-3xl font-bold xl:text-4xl">{cs.client}</h3>
            <p className="mb-6 text-lg text-muted-foreground">{cs.title}</p>
            <dl className="mb-8 grid grid-cols-2 gap-4">
              {[stat, stat2].map((s) => (
                <div key={s.label} className="rounded-xl bg-tertiary p-4 dark:bg-secondary/60">
                  <dd className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>
                    {s.prefix}{s.value.toLocaleString('en-GB', { minimumFractionDigits: s.decimals || 0 })}{s.suffix}
                  </dd>
                  <dt className="mt-1 text-sm text-muted-foreground">{s.label}</dt>
                </div>
              ))}
            </dl>
            <Link href={`/work/${cs.slug}`} className="inline-flex items-center gap-x-2 font-semibold text-primary after:absolute after:inset-0 after:content-['']">
              Read the case study <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <DeviceFrame {...cs.cover} frame="browser" url={cs.urlLabel} sizes="(min-width: 1024px) 700px, 100vw" />
        </div>
      </motion.div>
    </div>
  )
}

const Work = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  return (
    <section id="work" className="relative py-12 xl:py-24" aria-labelledby="work-title">
      <div className="container mx-auto">
        <Reveal className="mb-12 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="max-w-xl">
            <h2 id="work-title" className="section-title mb-4 mx-auto md:mx-0">Selected work</h2>
            <p className="subtitle mb-0">Recent client work across web, SEO, ads and analytics — each with the numbers behind it.</p>
          </div>
          <Button asChild variant="secondary">
            <Link href="/projects">All projects</Link>
          </Button>
        </Reveal>
        <div ref={ref}>
          {caseStudies.map((cs, i) => (
            <StackCard key={cs.slug} cs={cs} i={i} total={caseStudies.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
