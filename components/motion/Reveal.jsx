'use client'
import { motion, useReducedMotion } from 'framer-motion'

const offsets = { up: { y: 32 }, down: { y: -32 }, left: { x: 40 }, right: { x: -40 }, none: {} }

// Fades/slides children in when they scroll into view. Honours prefers-reduced-motion.
export default function Reveal({ children, as = 'div', direction = 'up', delay = 0, duration = 0.7, amount = 0.2, className, ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div
  if (reduce) {
    const Plain = as
    return <Plain className={className} {...rest}>{children}</Plain>
  }
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Staggers direct children (wrap each child in <RevealItem>).
export function RevealGroup({ children, className, stagger = 0.08, as = 'div', amount = 0.15 }) {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </Tag>
  )
}

export function RevealItem({ children, className, as = 'div' }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </Tag>
  )
}
