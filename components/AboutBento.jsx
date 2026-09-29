'use client'
import { Briefcase, BarChart3, Code2, Camera, ArrowUpRight } from 'lucide-react'
import { RevealGroup, RevealItem } from './motion/Reveal'
import { combinedStats } from '@/data/site'

const Tile = ({ className = '', children }) => (
  <RevealItem className={`rounded-2xl border border-border bg-background p-5 dark:bg-secondary/60 ${className}`}>{children}</RevealItem>
)

export default function AboutBento() {
  return (
    <RevealGroup className="grid grid-cols-2 gap-4 xl:grid-cols-6">
      {/* day job */}
      <Tile className="col-span-2 bg-secondary text-white dark:bg-secondary xl:col-span-4">
        <Briefcase className="mb-4 text-[#fe7c58]" aria-hidden="true" />
        <p className="text-sm uppercase tracking-[3px] text-white/60">Day job</p>
        <p className="mt-1 text-2xl font-bold">Senior Product Owner</p>
        <p className="text-white/70">Clarion Events · iGB &amp; iGB Affiliate</p>
      </Tile>

      {/* photography */}
      <RevealItem className="col-span-2 xl:col-span-2">
        <a
          href="https://photos.harshchopra.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full min-h-[120px] flex-col justify-between rounded-2xl p-5 text-white"
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

      {/* results: compact combined numbers */}
      <Tile className="col-span-2 xl:col-span-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <BarChart3 size={18} className="text-primary" aria-hidden="true" /> Results across client work
          </p>
          <p className="hidden text-xs text-muted-foreground sm:block">GA4 · GTM · Clarity · Search Console</p>
        </div>
        <dl className="grid grid-cols-3 divide-x divide-border">
          {combinedStats.map((s) => (
            <div key={s.label} className="px-3 first:pl-0">
              <dd className="text-2xl font-bold text-primary xl:text-3xl">{s.value}</dd>
              <dt className="text-xs leading-tight text-muted-foreground">{s.label}</dt>
            </div>
          ))}
        </dl>
      </Tile>

      {/* build */}
      <Tile className="col-span-2 hidden font-mono text-[13px] leading-relaxed sm:block xl:col-span-6">
        <div className="flex items-start gap-4">
          <Code2 className="mt-1 shrink-0 text-primary" aria-hidden="true" />
          <div className="min-w-0">
            <pre className="overflow-x-auto whitespace-pre text-muted-foreground" aria-label="Code snippet">
{`dataLayer.push({ event: `}<span className="text-primary">&apos;generate_lead&apos;</span>{` })`}
            </pre>
            <p className="mt-2 font-sans text-sm">Next.js · React · WordPress · WooCommerce · Optimizely</p>
          </div>
        </div>
      </Tile>
    </RevealGroup>
  )
}
