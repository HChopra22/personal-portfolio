import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, ArrowRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Reveal, { RevealGroup, RevealItem } from '@/components/motion/Reveal'
import ParallaxCover from '@/components/work/ParallaxCover'
import DeviceFrame from '@/components/work/DeviceFrame'
import StatCounter from '@/components/work/StatCounter'
import BarChart from '@/components/work/BarChart'
import SitePreview from '@/components/work/SitePreview'
import EmailShowcase from '@/components/work/EmailShowcase'
import { InstagramCarousel, Stories, LinkedInPost } from '@/components/work/SocialShowcase'
import { caseStudies, getCaseStudy } from '@/data/caseStudies'
import { SITE_URL, site } from '@/data/site'
import { pageMetadata } from '@/lib/metadata'

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }) {
  const cs = getCaseStudy(params.slug)
  if (!cs) return {}
  return pageMetadata({
    title: `${cs.client} case study`,
    description: cs.summary,
    path: `/work/${cs.slug}`,
    image: { url: cs.cover.src, width: cs.cover.width, height: cs.cover.height, alt: cs.cover.alt },
  })
}

const SectionLabel = ({ children }) => (
  <p className="mb-4 flex items-center gap-x-3 text-sm font-semibold uppercase tracking-[4px] text-primary">
    <span className="h-[2px] w-8 bg-primary" aria-hidden="true" />
    {children}
  </p>
)

export default function CaseStudyPage({ params }) {
  const cs = getCaseStudy(params.slug)
  if (!cs) notFound()
  const index = caseStudies.findIndex((c) => c.slug === cs.slug)
  const next = caseStudies[(index + 1) % caseStudies.length]
  const phones = cs.gallery.filter((g) => g.frame === 'phone')
  const wide = cs.gallery.filter((g) => g.frame !== 'phone')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${cs.client}: ${cs.title}`,
    description: cs.summary,
    url: `${SITE_URL}/work/${cs.slug}`,
    image: `${SITE_URL}${cs.cover.src}`,
    creator: { '@type': 'Person', name: site.name, url: SITE_URL },
    about: { '@type': 'Organization', name: cs.client, url: cs.url },
    keywords: cs.services.join(', '),
  }

  return (
    <article data-accent style={{ '--accent-base': cs.accent, '--accent-dark': cs.accentOnDark }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* hero */}
      <header className="relative overflow-hidden bg-[#fef9f5] pb-16 pt-10 dark:bg-accent xl:pb-24">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl" style={{ background: 'var(--accent)' }} aria-hidden="true" />
        <div className="container relative mx-auto">
          <Link href="/projects" className="mb-10 inline-flex items-center gap-x-2 text-sm font-medium text-muted-foreground hover:text-primary">
            <ArrowLeft size={16} aria-hidden="true" /> All projects
          </Link>
          <Reveal>
            <p className="mb-4 flex items-center gap-x-3 text-sm font-semibold uppercase tracking-[4px]">
              <span className="h-3 w-3 rounded-full" style={{ background: 'var(--accent)' }} aria-hidden="true" />
              {cs.client} · {cs.sector}
            </p>
            <h1 className="h1 mb-6 max-w-4xl">{cs.title}</h1>
            <p className="subtitle max-w-2xl text-xl">{cs.summary}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <dl className="mt-4 grid gap-6 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="text-sm uppercase tracking-[2px] text-muted-foreground">Role</dt>
                <dd className="mt-1 font-medium">{cs.role}</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[2px] text-muted-foreground">When</dt>
                <dd className="mt-1 font-medium">{cs.year}</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[2px] text-muted-foreground">Services</dt>
                <dd className="mt-1 font-medium">{cs.services.join(' · ')}</dd>
              </div>
              <div className="flex items-end">
                <Button asChild className="gap-x-2">
                  <a href={cs.url} target="_blank" rel="noopener noreferrer">
                    Visit {cs.urlLabel} <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </dl>
          </Reveal>
        </div>
      </header>

      {/* cover */}
      <div className="container mx-auto -mt-2 xl:-mt-8">
        <ParallaxCover cover={cs.cover} url={cs.urlLabel} />
      </div>

      {/* stats */}
      <section aria-label="Key results" className="mt-20 bg-secondary py-16 text-white xl:mt-28">
        <RevealGroup className="container mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {cs.stats.map((s) => (
            <RevealItem key={s.label}>
              <div className="text-5xl font-bold tracking-tight text-white">
                <span style={{ color: cs.accentOnDark }}>
                  <StatCounter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                </span>
              </div>
              <p className="mt-3 text-lg font-medium">{s.label}</p>
              {s.note && <p className="mt-1 text-sm text-white/60">{s.note}</p>}
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* chart */}
      {cs.chart && (
        <section aria-label={cs.chart.title} className="container mx-auto pt-20 xl:pt-28">
          <Reveal>
            <SectionLabel>The results</SectionLabel>
            <BarChart {...cs.chart} />
          </Reveal>
        </section>
      )}

      {/* challenge */}
      <section className="container mx-auto grid gap-10 py-20 xl:grid-cols-[1fr_2fr] xl:py-28">
        <Reveal className="xl:sticky xl:top-32 xl:self-start">
          <SectionLabel>The challenge</SectionLabel>
          <h2 className="h2">What needed solving</h2>
        </Reveal>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          {cs.challenge.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}><p>{p}</p></Reveal>
          ))}
        </div>
      </section>

      {/* approach */}
      <section className="bg-tertiary py-20 dark:bg-secondary/40 xl:py-28">
        <div className="container mx-auto grid gap-10 xl:grid-cols-[1fr_2fr]">
          <Reveal className="xl:sticky xl:top-32 xl:self-start">
            <SectionLabel>What I did</SectionLabel>
            <h2 className="h2">The approach</h2>
          </Reveal>
          <RevealGroup as="ol" className="space-y-4">
            {cs.approach.map((step, i) => (
              <RevealItem as="li" key={i} className="flex gap-x-6 rounded-xl border border-border bg-background p-6">
                <span className="text-2xl font-bold tabular-nums" style={{ color: 'var(--accent)' }}>{String(i + 1).padStart(2, '0')}</span>
                <p className="text-lg leading-relaxed">{step}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* media showcases */}
      {(cs.media || []).map((m, mi) => (
        <section key={m.title} aria-label={m.title} className={`py-20 xl:py-28 ${mi % 2 ? 'bg-tertiary dark:bg-secondary/40' : ''}`}>
          <div className="container mx-auto">
            <Reveal className="mb-10 max-w-2xl">
              <SectionLabel>{m.type === 'site' ? 'The website' : m.type === 'emails' ? 'Email marketing' : 'Social content'}</SectionLabel>
              <h2 className="h2 mb-4">{m.title}</h2>
              {m.intro && <p className="text-lg text-muted-foreground">{m.intro}</p>}
            </Reveal>
            <Reveal>
              {m.type === 'site' && <SitePreview screens={m.screens} />}
              {m.type === 'emails' && <EmailShowcase items={m.items} from={m.from} />}
              {m.type === 'social' && (
                <div className="space-y-16">
                  <div className="grid items-start gap-12 lg:grid-cols-2">
                    <div>
                      <h3 className="h4 mb-6 text-center lg:text-left">Instagram carousel</h3>
                      <InstagramCarousel {...m.instagram} />
                    </div>
                    <div>
                      <h3 className="h4 mb-6 text-center lg:text-left">Instagram stories</h3>
                      <Stories items={m.stories} />
                    </div>
                  </div>
                  <div>
                    <h3 className="h4 mb-6 text-center lg:text-left">LinkedIn company posts</h3>
                    <div className="grid items-start gap-8 lg:grid-cols-2">
                      {m.linkedin.map((post) => <LinkedInPost key={post.date} {...post} />)}
                    </div>
                  </div>
                  {m.more?.length > 0 && (
                    <div>
                      <h3 className="h4 mb-6 text-center lg:text-left">More LinkedIn creative</h3>
                      <div className="grid gap-6 sm:grid-cols-2">
                        {m.more.map((g) => <DeviceFrame key={g.src} {...g} frame="none" sizes="(min-width: 640px) 33vw, 100vw" />)}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Reveal>
          </div>
        </section>
      ))}

      {/* gallery */}
      <section aria-label="Project visuals" className="container mx-auto py-20 xl:py-28">
        <Reveal><SectionLabel>More from the project</SectionLabel></Reveal>
        <div className={`grid items-start gap-10 ${wide.length > 1 ? 'lg:grid-cols-[2fr_1fr]' : ''}`}>
          <div className="space-y-10">
            {wide.filter((g) => g.frame === 'browser' || g.full).map((g, i) => (
              <Reveal key={g.src} direction={i % 2 ? 'left' : 'right'}>
                <figure>
                  <DeviceFrame {...g} url={g.frame === 'browser' ? cs.urlLabel : undefined} />
                  <figcaption className="mt-3 text-sm text-muted-foreground">{g.alt}</figcaption>
                </figure>
              </Reveal>
            ))}
            {wide.some((g) => g.frame === 'none' && !g.full) && (
              <div className="columns-1 gap-8 sm:columns-2 [&>*]:mb-8">
                {wide.filter((g) => g.frame === 'none' && !g.full).map((g, i) => (
                  <Reveal key={g.src} delay={i * 0.08} className="break-inside-avoid">
                    <figure>
                      <DeviceFrame {...g} sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw" />
                      <figcaption className="mt-3 text-sm text-muted-foreground">{g.alt}</figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
          <div className={`grid gap-10 sm:grid-cols-2 ${wide.length > 1 ? 'lg:sticky lg:top-28 lg:grid-cols-1' : 'lg:mx-auto lg:max-w-3xl lg:grid-cols-2'}`}>
            {phones.map((g, i) => (
              <Reveal key={g.src} delay={i * 0.1}>
                <figure>
                  <DeviceFrame {...g} />
                  <figcaption className="mt-3 text-center text-sm text-muted-foreground">{g.alt}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* highlights */}
      <section className="container mx-auto pb-20 xl:pb-28">
        <Reveal><SectionLabel>Highlights</SectionLabel></Reveal>
        <RevealGroup className="grid gap-6 md:grid-cols-3">
          {cs.highlights.map((h) => (
            <RevealItem key={h.title} className="rounded-xl border border-border p-8">
              <span className="mb-6 block h-1 w-12 rounded-full" style={{ background: 'var(--accent)' }} aria-hidden="true" />
              <h3 className="h4 mb-3">{h.title}</h3>
              <p className="text-muted-foreground">{h.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* analytics + stack */}
      <section className="bg-tertiary py-20 dark:bg-secondary/40 xl:py-28">
        <div className="container mx-auto grid gap-12 lg:grid-cols-2">
          {cs.analytics.length > 0 && (
            <Reveal>
              <SectionLabel>Analytics</SectionLabel>
              <dl className="grid grid-cols-2 gap-4">
                {cs.analytics.map((a) => (
                  <div key={a.label} className="rounded-xl bg-background p-6">
                    <dd className="text-2xl font-bold xl:text-3xl">{a.value}</dd>
                    <dt className="mt-2 text-sm text-muted-foreground">{a.label}</dt>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-muted-foreground">Figures from GA4, Google Ads and Search Console, as reported to the client.</p>
            </Reveal>
          )}
          <Reveal delay={0.1} className={cs.analytics.length ? '' : 'lg:col-span-2'}>
            <SectionLabel>Tools &amp; stack</SectionLabel>
            <ul className="flex flex-wrap gap-3">
              {cs.stack.map((t) => (
                <li key={t} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium">{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* testimonial */}
      {cs.testimonial && (
        <section className="container mx-auto py-20 xl:py-28">
          <Reveal>
            <figure className="mx-auto max-w-3xl text-center">
              <Quote className="mx-auto mb-6 text-primary" size={40} aria-hidden="true" />
              <blockquote className="text-2xl font-medium leading-relaxed xl:text-3xl">“{cs.testimonial.quote}”</blockquote>
              <figcaption className="mt-6 text-muted-foreground">
                <span className="font-semibold text-foreground">{cs.testimonial.name}</span> · {cs.testimonial.role}
              </figcaption>
            </figure>
          </Reveal>
        </section>
      )}

      {/* next */}
      <section className="container mx-auto py-20 xl:py-28">
        <Reveal>
          <Link href={`/work/${next.slug}`} className="group grid items-center gap-8 overflow-hidden rounded-2xl bg-secondary p-8 text-white md:grid-cols-2 xl:p-12">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[4px] text-white/60">Next project</p>
              <h2 className="h2 mb-4">{next.client}</h2>
              <p className="mb-6 text-white/70">{next.title}</p>
              <span className="inline-flex items-center gap-x-2 font-medium">
                Read the case study <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
            <div className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]">
              <DeviceFrame {...next.cover} frame="browser" url={next.urlLabel} sizes="(min-width: 768px) 560px, 100vw" />
            </div>
          </Link>
        </Reveal>
        <div className="mt-16 text-center">
          <h2 className="h3 mb-4">Want results like these?</h2>
          <Button asChild><Link href="/contact">Start a project</Link></Button>
        </div>
      </section>
    </article>
  )
}
