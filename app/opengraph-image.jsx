import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Harsh Chopra — Senior Product Owner, Web Developer & Photographer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const shot = await readFile(join(process.cwd(), 'public/og/collage.png'))
  const src = `data:image/png;base64,${shot.toString('base64')}`

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', background: '#22233a', color: '#fff', padding: '0 0 0 80px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: 560 }}>
          <div style={{ fontSize: 24, letterSpacing: 6, textTransform: 'uppercase', color: '#fe7c58', marginBottom: 24 }}>harshchopra.com</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, marginBottom: 24 }}>Harsh Chopra</div>
          <div style={{ fontSize: 34, color: '#c9c9e0', lineHeight: 1.3 }}>Product · Web · SEO &amp; analytics · Photography</div>
          <div style={{ display: 'flex', marginTop: 36, fontSize: 24, color: '#fe7c58' }}>540K+ Google impressions · 15K+ clicks driven</div>
        </div>
        <div style={{ display: 'flex', marginLeft: 40, transform: 'rotate(-3deg)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,.5)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={600} height={458} alt="" />
        </div>
      </div>
    ),
    size
  )
}
