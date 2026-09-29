'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { TrendingUp, MousePointerClick, Activity } from 'lucide-react'
import { yearsOfExperience, combinedStats, impressionMix } from '@/data/site'

// Layered hero collage: real client screenshots in device frames + floating result cards
// (figures from the A2Z Bridging and Epsom Smiles reports). Layers drift at different speeds on scroll.
export default function HeroVisual() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const r = (a, b) => (reduce ? [0, 0] : [a, b])
  const yBrowser = useTransform(scrollYProgress, [0, 1], r(0, -40))
  const yPhone = useTransform(scrollYProgress, [0, 1], r(0, -120))
  const yCard = useTransform(scrollYProgress, [0, 1], r(0, -200))
  const float = reduce ? {} : { animate: { y: [0, -8, 0] }, transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }

  return (
    <div ref={ref} className="relative h-[520px] w-[600px]" aria-hidden="true">
      {/* backdrop: a dotted "canvas" panel with soft brand glow */}
      <div className="absolute inset-x-6 inset-y-4 overflow-hidden rounded-[2rem] border border-border bg-background/60 dark:bg-secondary/50">
        <div
          className="absolute inset-0 opacity-70"
          style={{ backgroundImage: 'radial-gradient(hsl(var(--primary) / 0.22) 1.2px, transparent 1.2px)', backgroundSize: '22px 22px' }}
        />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl" style={{ background: 'hsl(var(--primary) / 0.25)' }} />
        <div className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full blur-3xl" style={{ background: 'rgba(254, 124, 88, 0.25)' }} />
        {/* faint chart gridlines */}
        <div className="absolute inset-x-8 bottom-10 top-10 flex flex-col justify-between">
          {[0, 1, 2, 3].map((i) => <span key={i} className="h-px w-full bg-border" />)}
        </div>
      </div>

      {/* browser */}
      <motion.div style={{ y: yBrowser }} className="absolute left-6 top-12 w-[470px] -rotate-2">
        <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-2xl">
          <div className="flex items-center gap-1.5 bg-[#f3f3f6] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" /><span className="h-2 w-2 rounded-full bg-[#febc2e]" /><span className="h-2 w-2 rounded-full bg-[#28c840]" />
            <span className="ml-2 rounded bg-white px-2 text-[10px] text-neutral-500">greenliondistro.com</span>
          </div>
          <Image src="/work/green-lion-distro/product-page-redesign.webp" width={1440} height={1100} alt="" priority sizes="470px" className="h-[290px] w-full object-cover object-top" />
        </div>
      </motion.div>

      {/* phone */}
      <motion.div style={{ y: yPhone }} className="absolute bottom-0 right-6 w-[150px] rotate-3">
        <div className="rounded-[1.6rem] border-[6px] border-secondary bg-secondary shadow-2xl">
          <div className="overflow-hidden rounded-[1.2rem] bg-white">
            <Image src="/work/epsom-smiles/emergency-mobile.webp" width={780} height={1688} alt="" sizes="150px" className="h-[300px] w-full object-cover object-top" />
          </div>
        </div>
      </motion.div>

      {/* result card: combined impressions */}
      <motion.div style={{ y: yCard }} className="absolute -left-6 bottom-16 w-[240px]">
        <motion.div {...float} className="rounded-2xl bg-background p-4 shadow-2xl ring-1 ring-border">
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <TrendingUp size={14} className="text-primary" /> Google impressions
          </div>
          <div className="mb-3 text-3xl font-bold text-primary">{combinedStats[0].value}</div>
          <div className="flex h-3 overflow-hidden rounded-full">
            {impressionMix.map((m, i) => (
              <span key={m.label} className={i ? 'bg-[#fe7c58]' : 'bg-primary'} style={{ width: `${(m.value / 540) * 100}%` }} />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
            {impressionMix.map((m, i) => (
              <span key={m.label} className="flex items-center gap-1">
                <span className={`h-2 w-2 rounded-full ${i ? 'bg-[#fe7c58]' : 'bg-primary'}`} />{m.label} {m.value}K
              </span>
            ))}
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">Across client sites &amp; ads</p>
        </motion.div>
      </motion.div>

      {/* chip: clicks */}
      <motion.div style={{ y: yCard }} className="absolute right-0 top-0">
        <motion.div {...float} transition={{ ...(float.transition || {}), delay: 1.2 }} className="flex items-center gap-3 rounded-2xl bg-background px-4 py-3 shadow-2xl ring-1 ring-border">
          <MousePointerClick size={22} className="text-primary" />
          <div>
            <div className="text-lg font-bold leading-none">{combinedStats[1].value}</div>
            <div className="text-[11px] text-muted-foreground">clicks from Google to client sites</div>
          </div>
        </motion.div>
      </motion.div>

      {/* chip: experience + tracking */}
      <motion.div style={{ y: yPhone }} className="absolute left-24 top-0">
        <div className="flex items-center gap-3 rounded-2xl bg-secondary px-4 py-3 text-white shadow-2xl">
          <Activity size={20} className="text-[#fe7c58]" />
          <div className="text-sm"><span className="font-bold">{yearsOfExperience()}+ yrs</span> · GA4 · GTM · Clarity</div>
        </div>
      </motion.div>
    </div>
  )
}
