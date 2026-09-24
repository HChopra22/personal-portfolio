import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Harsh Chopra — Senior Product Owner, Web Developer & Photographer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const memoji = await readFile(join(process.cwd(), 'public/hero/harsh-hero-memoji-1.png'))
  const src = `data:image/png;base64,${memoji.toString('base64')}`

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#22233a', color: '#fff', padding: '0 80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 700 }}>
          <div style={{ fontSize: 26, letterSpacing: 6, textTransform: 'uppercase', color: '#fe7c58', marginBottom: 24 }}>harshchopra.com</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, marginBottom: 28 }}>Harsh Chopra</div>
          <div style={{ fontSize: 36, color: '#c9c9e0', lineHeight: 1.3 }}>Senior Product Owner · Web Developer · Photographer</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={380} height={356} alt="" style={{ objectFit: 'contain' }} />
      </div>
    ),
    size
  )
}
