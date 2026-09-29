'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Send, ThumbsUp, Repeat2 } from 'lucide-react'

// Instagram carousel mock with swipe/arrows
export function InstagramCarousel({ handle, slides, caption }) {
  const ref = useRef(null)
  const [i, setI] = useState(0)
  const go = (d) => {
    const el = ref.current
    const n = Math.max(0, Math.min(slides.length - 1, i + d))
    el?.scrollTo({ left: n * el.clientWidth, behavior: 'smooth' })
    setI(n)
  }
  return (
    <figure className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border border-border bg-background shadow-xl">
      <figcaption className="flex items-center gap-3 px-4 py-3 text-sm">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0d1e3d] text-[10px] font-bold text-white ring-2 ring-[#c8191f]">A2Z</span>
        <span className="font-semibold">{handle}</span>
      </figcaption>
      <div className="relative">
        <div
          ref={ref}
          onScroll={(e) => setI(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
          className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none]"
          tabIndex={0}
          aria-label="Instagram carousel slides"
        >
          {slides.map((s, n) => (
            <Image key={s.src} src={s.src} width={s.width} height={s.height} alt={`Carousel slide ${n + 1} of ${slides.length}`} sizes="420px" className="w-full shrink-0 snap-center" />
          ))}
        </div>
        {i > 0 && (
          <button type="button" onClick={() => go(-1)} aria-label="Previous slide" className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow"><ChevronLeft size={18} /></button>
        )}
        {i < slides.length - 1 && (
          <button type="button" onClick={() => go(1)} aria-label="Next slide" className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow"><ChevronRight size={18} /></button>
        )}
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex gap-4" aria-hidden="true"><Heart size={22} /><MessageCircle size={22} /><Send size={22} /></div>
        <div className="flex gap-1" aria-hidden="true">
          {slides.map((s, n) => <span key={s.src} className={`h-1.5 w-1.5 rounded-full ${n === i ? 'bg-[#0095f6]' : 'bg-muted-foreground/30'}`} />)}
        </div>
        <span className="w-[74px]" />
      </div>
      {caption && <p className="px-4 pb-4 text-sm"><span className="font-semibold">{handle}</span> {caption}</p>}
    </figure>
  )
}

// Instagram / phone story frames
export function Stories({ items }) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {items.map((s) => (
        <figure key={s.src} className="w-[200px]">
          <div className="overflow-hidden rounded-[1.6rem] border-[6px] border-secondary bg-secondary shadow-xl">
            <Image src={s.src} width={s.width} height={s.height} alt={s.alt} sizes="200px" className="block h-auto w-full rounded-[1.1rem]" />
          </div>
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">{s.alt}</figcaption>
        </figure>
      ))}
    </div>
  )
}

// LinkedIn company-post mock
export function LinkedInPost({ author, subtitle, text, image, date }) {
  const [open, setOpen] = useState(false)
  const short = text.length > 260 && !open
  return (
    <article className="mx-auto w-full max-w-[540px] overflow-hidden rounded-xl border border-border bg-background shadow-xl">
      <header className="flex items-center gap-3 px-4 pt-4">
        <span className="flex h-12 w-12 items-center justify-center rounded bg-[#0d1e3d] text-xs font-bold text-white">A2Z</span>
        <div className="text-sm">
          <p className="font-semibold">{author}</p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
          {date && <p className="text-xs text-muted-foreground">{date}</p>}
        </div>
      </header>
      <div className="whitespace-pre-line px-4 py-3 text-sm leading-relaxed">
        {short ? `${text.slice(0, 260).trim()}…` : text}
        {text.length > 260 && (
          <button type="button" onClick={() => setOpen((o) => !o)} className="ml-1 font-medium text-muted-foreground hover:underline">
            {open ? 'show less' : 'see more'}
          </button>
        )}
      </div>
      {image && <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes="540px" className="block h-auto w-full" />}
      <footer className="flex justify-around border-t border-border py-2 text-xs text-muted-foreground" aria-hidden="true">
        <span className="flex items-center gap-1"><ThumbsUp size={16} /> Like</span>
        <span className="flex items-center gap-1"><MessageCircle size={16} /> Comment</span>
        <span className="flex items-center gap-1"><Repeat2 size={16} /> Repost</span>
        <span className="flex items-center gap-1"><Send size={16} /> Send</span>
      </footer>
    </article>
  )
}
