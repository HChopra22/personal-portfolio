'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Briefcase, BarChart3, Code2, Camera, ArrowUpRight } from 'lucide-react'
import { RevealGroup, RevealItem } from './motion/Reveal'
import { caseStudies } from '@/data/caseStudies'

// A2Z Bridging sessions by channel, 90 days to 11 June 2026 (from the 3-month review).
const channels = [
  { label: 'Direct', value: 520 },
  { label: 'Organic', value: 305 },
  { label: 'Paid', value: 240 },
  { label: 'Social', value: 102 },
]
const max = Math.max(...channels.map((c) => c.value))

const Tile = ({ className = '', children }) => (
  <RevealItem className={`rounded-2xl border border-border bg-background p-5 dark:bg-secondary/60 ${className}`}>{children}</RevealItem>
)

export default function AboutBento() {
  const reduce = useReducedMotion()
  return (
    <RevealGroup className="grid grid-cols-2 gap-4 xl:grid-cols-6 xl:grid-rows-[auto_auto_auto]">
      {/* day job */}
      <Tile className="col-span-2 xl:col-span-4 bg-secondary text-white dark:bg-secondary">
        <Briefcase className="mb-4 text-[#fe7c58]" aria-hidden="true" />
        <p className="text-sm uppercase tracking-[3px] text-white/60">Day job</p>
        <p className="mt-1 text-2xl font-bold">Senior Product Owner</p>
        <p className="text-white/70">Clarion Events · iGB &amp; iGB Affiliate</p>
      </Tile>

      {/* photography */}
      <RevealItem className="col-span-1 xl:col-span-2">
        <a
          href="https://photos.harshchopra.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full min-h-[140px] flex-col justify-between rounded-2xl p-5 text-white"
          style={{ background: 'linear-gradient(135deg, #fe7c58, #b8336a)' }}
        >
          <Camera aria-hidden="true" />
          <span>
            <span className="block text-sm uppercase tracking-[3px] text-white/80">Photography</span>
            <span className="mt-1 flex items-center gap-1 text-lg font-bold">
              See my work <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </span>
        </a>
      </RevealItem>

      {/* analytics chart */}
      <Tile className="col-span-1 xl:col-span-3 xl:row-span-2">
        <BarChart3 className="mb-3 text-primary" aria-hidden="true" />
        <p className="text-sm font-semibold">Analytics that drive decisions</p>
        <p className="mb-4 text-xs text-muted-foreground">GA4 · GTM · Clarity · Search Console</p>
        <figure aria-label="A2Z Bridging sessions by channel, last 90 days">
          <div className="flex h-32 items-end gap-2">
            {channels.map((c, i) => (
              <div key={c.label} className="flex flex-1 flex-col items-center justify-end">
                <span className="mb-1 text-[11px] font-semibold tabular-nums">{c.value}</span>
                <motion.div
                  className="w-full rounded-t-md bg-primary"
                  initial={reduce ? false : { height: 0 }}
                  whileInView={{ height: `${(c.value / max) * 96}px` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                  style={reduce ? { height: `${(c.value / max) * 96}px` } : undefined}
                />
              </div>
            ))}
          </div>
          <div className="mt-1 flex gap-2 text-[10px] text-muted-foreground">
            {channels.map((c) => <span key={c.label} className="flex-1 text-center">{c.label}</span>)}
          </div>
          <figcaption className="mt-3 text-[11px] text-muted-foreground">A2Z Bridging · sessions by channel, 90 days</figcaption>
        </figure>
      </Tile>

      {/* build */}
      <Tile className="hidden sm:block col-span-2 xl:col-span-3 font-mono text-[13px] leading-relaxed">
        <Code2 className="mb-3 text-primary" aria-hidden="true" />
        <pre className="overflow-x-auto whitespace-pre text-muted-foreground" aria-label="Code snippet">
{`dataLayer.push({
  event: `}<span className="text-primary">&apos;generate_lead&apos;</span>{`,
  form_name: 'contact',
})`}
        </pre>
        <p className="mt-3 font-sans text-sm">Next.js · React · WordPress · WooCommerce · Optimizely</p>
      </Tile>

      {/* clients */}
      <Tile className="col-span-2 xl:col-span-3">
        <p className="mb-3 text-sm font-semibold">Recent clients</p>
        <ul className="space-y-2">
          {caseStudies.map((c) => (
            <li key={c.slug}>
              <Link href={`/work/${c.slug}`} className="group flex items-center justify-between rounded-lg px-2 py-1.5 hover:bg-tertiary dark:hover:bg-white/5">
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: c.accent }} aria-hidden="true" />
                  {c.client}
                </span>
                <ArrowUpRight size={16} className="text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </Tile>
    </RevealGroup>
  )
}
