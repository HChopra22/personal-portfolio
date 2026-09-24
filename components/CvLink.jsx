'use client'
import { forwardRef } from 'react'
import { site } from '@/data/site'
import { track } from '@/lib/analytics'

const CvLink = forwardRef(({ children, ...props }, ref) => (
  <a
    ref={ref}
    href={site.cv}
    download="HarshChopra-CV.pdf"
    onClick={() => track('file_download', { file_name: 'HarshChopra-CV.pdf', link_url: site.cv })}
    {...props}
  >
    {children}
  </a>
))
CvLink.displayName = 'CvLink'

export default CvLink
