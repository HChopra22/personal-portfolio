'use client'
import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail } from 'lucide-react'

// Newsletter viewer: list of campaigns on the left, rendered email in an inbox-style frame.
export default function EmailShowcase({ items, from }) {
  const [i, setI] = useState(0)
  const email = items[i]
  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <ul role="tablist" aria-label="Newsletters" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {items.map((e, n) => (
          <li key={e.src} className="shrink-0">
            <button
              type="button"
              role="tab"
              aria-selected={n === i}
              onClick={() => setI(n)}
              className={`w-full rounded-xl border p-4 text-left transition-colors ${n === i ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
            >
              <span className="block text-sm font-semibold">{e.subject}</span>
              <span className="mt-1 block text-xs text-muted-foreground">{e.note}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="overflow-hidden rounded-xl border border-border bg-background shadow-2xl">
        <div className="flex items-center gap-3 border-b border-border px-5 py-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground"><Mail size={16} aria-hidden="true" /></span>
          <div className="min-w-0 text-sm">
            <p className="truncate font-semibold">{email.subject}</p>
            <p className="truncate text-xs text-muted-foreground">From: {from}</p>
          </div>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={email.src} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="max-h-[70vh] overflow-y-auto overscroll-contain bg-[#f3eef6]" tabIndex={0} aria-label={`${email.subject} — scrollable email preview`}>
            <Image src={email.src} width={email.width} height={email.height} alt={`${email.subject} email`} sizes="(min-width: 1024px) 640px, 100vw" loading="eager" className="mx-auto block h-auto w-full max-w-[640px]" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
