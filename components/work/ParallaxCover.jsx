'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import DeviceFrame from './DeviceFrame'

// Cover screenshot that drifts up and scales slightly as the page scrolls.
export default function ParallaxCover({ cover, url }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -60])
  const scale = useTransform(scrollYProgress, [0, 0.5], reduce ? [1, 1] : [0.94, 1])
  return (
    <div ref={ref} className="relative">
      <motion.div style={{ y, scale }}>
        <DeviceFrame {...cover} frame="browser" url={url} priority sizes="(min-width: 1400px) 1200px, 100vw" />
      </motion.div>
    </div>
  )
}
