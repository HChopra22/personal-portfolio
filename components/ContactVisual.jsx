'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { MessageSquareText, Lightbulb, Rocket, Mail } from 'lucide-react'
import { site } from '@/data/site'

const steps = [
  { icon: MessageSquareText, title: 'Tell me about it', body: 'Your goal, timeline and what’s not working today.' },
  { icon: Lightbulb, title: 'I come back with ideas', body: 'Questions, options and an honest view of what will move the needle.' },
  { icon: Rocket, title: 'We agree a plan and start', body: 'Clear scope, milestones and how we’ll measure success.' },
]

// Contact hero visual: a "how it works" card on a dotted canvas with a floating message preview.
export default function ContactVisual() {
  const reduce = useReducedMotion()
  const float = reduce ? {} : { animate: { y: [0, -8, 0] }, transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }
  return (
    <div className="relative mx-auto h-[460px] w-full max-w-[560px]" aria-hidden="true">
      {/* canvas */}
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-border bg-background/60 dark:bg-secondary/50">
        <div className="absolute inset-0 opacity-70" style={{ backgroundImage: 'radial-gradient(hsl(var(--primary) / 0.22) 1.2px, transparent 1.2px)', backgroundSize: '22px 22px' }} />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl" style={{ background: 'hsl(var(--primary) / 0.25)' }} />
        <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full blur-3xl" style={{ background: 'rgba(254, 124, 88, 0.25)' }} />
      </div>

      {/* process card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-8 right-8 top-10 rounded-2xl bg-background p-6 shadow-2xl ring-1 ring-border md:left-12 md:right-16"
      >
        <p className="mb-5 text-xs font-semibold uppercase tracking-[3px] text-muted-foreground">How it works</p>
        <ol className="relative space-y-5">
          <span className="absolute bottom-3 left-[19px] top-3 w-px bg-border" />
          {steps.map(({ icon: Icon, title, body }, i) => (
            <motion.li
              key={title}
              className="relative flex gap-4"
              initial={reduce ? false : { opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
            >
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon size={18} />
              </span>
              <span>
                <span className="block font-semibold">{i + 1}. {title}</span>
                <span className="block text-sm text-muted-foreground">{body}</span>
              </span>
            </motion.li>
          ))}
        </ol>
      </motion.div>

      {/* message preview */}
      <motion.div className="absolute -left-2 bottom-10 w-[250px] md:-left-6" initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>
        <motion.div {...float} className="rounded-2xl rounded-bl-sm bg-secondary p-4 text-sm text-white shadow-2xl">
          “Hi Harsh — our site gets traffic but not enquiries. Can you take a look?”
        </motion.div>
      </motion.div>

      {/* email chip */}
      <motion.div className="absolute -right-2 bottom-24 md:-right-6" initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}>
        <motion.div {...float} transition={{ ...(float.transition || {}), delay: 1.4 }} className="flex items-center gap-3 rounded-2xl bg-background px-4 py-3 shadow-2xl ring-1 ring-border">
          <Mail size={20} className="text-primary" />
          <span className="text-sm font-medium">{site.email}</span>
        </motion.div>
      </motion.div>
    </div>
  )
}
