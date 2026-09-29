'use client'
import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Monitor, Smartphone, MousePointer2 } from 'lucide-react'

// Interactive site preview: pick a screen (e.g. Before / After, Homepage / Case study) and
// switch between desktop and mobile. Full-length captures scroll inside the device frame.
export default function SitePreview({ screens, defaultDevice = 'desktop' }) {
  const [index, setIndex] = useState(0)
  const [device, setDevice] = useState(defaultDevice)
  const reduce = useReducedMotion()
  const screen = screens[index]
  const hasMobile = Boolean(screen.mobile)
  const active = device === 'mobile' && hasMobile ? 'mobile' : 'desktop'
  const shot = screen[active]

  const pill = (on) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
      on ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
    }`

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {screens.length > 1 ? (
          <div role="tablist" aria-label="Choose page" className="inline-flex flex-wrap gap-1 rounded-full border border-border bg-background p-1">
            {screens.map((s, i) => (
              <button key={s.label} type="button" role="tab" aria-selected={i === index} onClick={() => setIndex(i)} className={pill(i === index)}>
                {s.label}
              </button>
            ))}
          </div>
        ) : (
          <span />
        )}
        <div role="group" aria-label="Device" className="inline-flex gap-1 self-start rounded-full border border-border bg-background p-1 sm:self-auto">
          <button type="button" aria-pressed={active === 'desktop'} onClick={() => setDevice('desktop')} className={`${pill(active === 'desktop')} inline-flex items-center gap-2`}>
            <Monitor size={16} aria-hidden="true" /> Desktop
          </button>
          <button
            type="button"
            aria-pressed={active === 'mobile'}
            disabled={!hasMobile}
            title={hasMobile ? undefined : 'No mobile capture for this version'}
            onClick={() => setDevice('mobile')}
            className={`${pill(active === 'mobile')} inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-40`}
          >
            <Smartphone size={16} aria-hidden="true" /> Mobile
          </button>
        </div>
      </div>

      {screen.tag && <p className="mb-4 text-sm text-muted-foreground">{screen.tag}</p>}

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${index}-${active}`}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {active === 'desktop' ? (
            <div className="overflow-hidden rounded-xl border border-border bg-white shadow-2xl dark:border-white/10">
              <div className="flex items-center gap-2 border-b border-black/5 bg-[#f3f3f6] px-4 py-2.5 dark:bg-secondary" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                {screen.url && <span className="ml-3 truncate rounded-md bg-white px-3 py-0.5 text-xs text-neutral-500 dark:bg-white/10 dark:text-white/60">{screen.url}</span>}
              </div>
              <div className="max-h-[70vh] overflow-y-auto overscroll-contain" tabIndex={0} aria-label={`${screen.label} — scrollable desktop preview`}>
                <Image src={shot.src} width={shot.width} height={shot.height} alt={shot.alt || `${screen.label} on desktop`} sizes="(min-width: 1400px) 1200px, 100vw" loading="eager" className="block h-auto w-full" />
              </div>
            </div>
          ) : (
            <div className="mx-auto w-[300px] rounded-[2.6rem] border-[10px] border-secondary bg-secondary shadow-2xl">
              <div className="relative overflow-hidden rounded-[1.9rem] bg-white">
                <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-secondary" aria-hidden="true" />
                <div className="h-[600px] overflow-y-auto overscroll-contain [scrollbar-width:none]" tabIndex={0} aria-label={`${screen.label} — scrollable mobile preview`}>
                  <Image src={shot.src} width={shot.width} height={shot.height} alt={shot.alt || `${screen.label} on mobile`} sizes="280px" loading="eager" className="block h-auto w-full" />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <MousePointer2 size={14} aria-hidden="true" /> Scroll inside the frame to explore the full page
      </p>
    </div>
  )
}
