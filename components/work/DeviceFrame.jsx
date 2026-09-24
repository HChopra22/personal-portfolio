import Image from 'next/image'

// Presents a screenshot inside a browser window or phone, or plain with rounded corners.
export default function DeviceFrame({ src, width, height, alt, frame = 'browser', url, priority = false, sizes, className = '' }) {
  if (frame === 'phone') {
    return (
      <div className={`relative mx-auto w-full max-w-[280px] rounded-[2.4rem] border-[10px] border-secondary bg-secondary shadow-2xl ${className}`}>
        <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-secondary" aria-hidden="true" />
        <div className="overflow-hidden rounded-[1.7rem] bg-white aspect-[9/19.5]">
          <Image src={src} width={width} height={height} alt={alt} priority={priority} sizes={sizes || '280px'} className="h-full w-full object-cover object-top" />
        </div>
      </div>
    )
  }
  if (frame === 'browser') {
    return (
      <div className={`overflow-hidden rounded-xl border border-border bg-white shadow-2xl dark:border-white/10 ${className}`}>
        <div className="flex items-center gap-2 border-b border-black/5 bg-[#f3f3f6] px-4 py-2.5 dark:bg-secondary" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          {url && <span className="ml-3 truncate rounded-md bg-white px-3 py-0.5 text-xs text-neutral-500 dark:bg-white/10 dark:text-white/60">{url}</span>}
        </div>
        <Image src={src} width={width} height={height} alt={alt} priority={priority} sizes={sizes || '(min-width: 1024px) 900px, 100vw'} className="block h-auto w-full" />
      </div>
    )
  }
  return (
    <div className={`overflow-hidden rounded-xl shadow-2xl ${className}`}>
      <Image src={src} width={width} height={height} alt={alt} priority={priority} sizes={sizes || '(min-width: 1024px) 600px, 100vw'} className="block h-auto w-full" />
    </div>
  )
}
