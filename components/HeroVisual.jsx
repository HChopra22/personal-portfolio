'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { TrendingUp, MousePointerClick, Activity } from 'lucide-react'
import { yearsOfExperience } from '@/data/site'

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
      {/* backdrop */}
      <div className="absolute right-4 top-6 h-[440px] w-[440px] rounded-[42%_58%_60%_40%/45%_40%_60%_55%] bg-primary/90 dark:bg-primary" />
      <div className="absolute right-16 top-16 h-[380px] w-[380px] rounded-full border border-white/30" />

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

      {/* result card: A2Z search impressions */}
      <motion.div style={{ y: yCard }} className="absolute -left-6 bottom-16 w-[230px]">
        <motion.div {...float} className="rounded-2xl bg-background p-4 shadow-2xl ring-1 ring-border">
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <TrendingUp size={14} className="text-primary" /> Search impressions
          </div>
          <div className="mb-3 text-3xl font-bold text-primary">+164%</div>
          <div className="flex h-14 items-end gap-2">
            <div className="flex-1 rounded-t bg-muted-foreground/25" style={{ height: '38%' }} />
            <div className="flex-1 rounded-t bg-primary" style={{ height: '100%' }} />
          </div>
          <div className="mt-1 flex justify-between text-[10px] text-muted-foreground"><span>2,330</span><span>6,140</span></div>
          <p className="mt-2 text-[11px] text-muted-foreground">A2Z Bridging · 3 months vs previous</p>
        </motion.div>
      </motion.div>

      {/* chip: ads */}
      <motion.div style={{ y: yCard }} className="absolute right-0 top-0">
        <motion.div {...float} transition={{ ...(float.transition || {}), delay: 1.2 }} className="flex items-center gap-3 rounded-2xl bg-background px-4 py-3 shadow-2xl ring-1 ring-border">
          <MousePointerClick size={22} className="text-primary" />
          <div>
            <div className="text-lg font-bold leading-none">277</div>
            <div className="text-[11px] text-muted-foreground">calls from Google Ads · Epsom Smiles</div>
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
