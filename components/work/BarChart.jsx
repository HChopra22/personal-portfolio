'use client'
import { motion, useReducedMotion } from 'framer-motion'

// Simple animated bar chart. Bars from `highlightFrom` onwards use the case-study accent.
export default function BarChart({ title, caption, labels, values, highlightFrom = 0 }) {
  const reduce = useReducedMotion()
  const max = Math.max(...values)
  const before = values.slice(0, highlightFrom)
  const after = values.slice(highlightFrom)
  const avg = (a) => (a.length ? Math.round(a.reduce((x, y) => x + y, 0) / a.length) : null)
  return (
    <figure className="rounded-2xl border border-border bg-background p-6 xl:p-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <h3 className="h4">{title}</h3>
        {before.length > 0 && (
          <p className="text-sm text-muted-foreground">
            Avg <span className="font-semibold text-foreground">{avg(before)}</span> before →{' '}
            <span className="font-semibold" style={{ color: 'var(--accent)' }}>{avg(after)}</span> after
          </p>
        )}
      </div>
      <div className="flex h-56 items-end gap-1.5 sm:gap-3" role="img" aria-label={`${title}: ${labels.map((l, i) => `${l} ${values[i]}`).join(', ')}`}>
        {values.map((v, i) => {
          const hi = i >= highlightFrom
          return (
            <div key={labels[i]} className="flex h-full flex-1 flex-col items-center justify-end">
              <span className="mb-1 text-[10px] font-semibold tabular-nums sm:text-xs">{v}</span>
              <motion.div
                className="w-full rounded-t-md"
                style={{ background: hi ? 'var(--accent)' : 'hsl(var(--muted-foreground) / 0.3)', height: reduce ? `${(v / max) * 85}%` : undefined }}
                initial={reduce ? false : { height: 0 }}
                whileInView={{ height: `${(v / max) * 85}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          )
        })}
      </div>
      <div className="mt-2 flex gap-1.5 sm:gap-3">
        {labels.map((l) => (
          <span key={l} className="flex-1 text-center text-[10px] text-muted-foreground sm:text-xs">{l}</span>
        ))}
      </div>
      {caption && <figcaption className="mt-4 text-sm text-muted-foreground">{caption}</figcaption>}
    </figure>
  )
}
