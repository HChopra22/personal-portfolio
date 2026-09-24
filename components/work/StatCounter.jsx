'use client'
import CountUp from 'react-countup'
import { useReducedMotion } from 'framer-motion'

export default function StatCounter({ value, prefix = '', suffix = '', decimals = 0 }) {
  const reduce = useReducedMotion()
  const fmt = (n) => n.toLocaleString('en-GB', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
  if (reduce) return <span>{prefix}{fmt(value)}{suffix}</span>
  return (
    <CountUp end={value} decimals={decimals} duration={2.2} enableScrollSpy scrollSpyOnce prefix={prefix} suffix={suffix} separator=",">
      {({ countUpRef }) => <span ref={countUpRef}>{prefix}{fmt(value)}{suffix}</span>}
    </CountUp>
  )
}
