import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = { title: 'Page not found' }

export default function NotFound() {
  return (
    <section className="container mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center py-24">
      <p className="text-primary font-semibold tracking-[4px] uppercase mb-4">404</p>
      <h1 className="h2 mb-4">This page doesn’t exist</h1>
      <p className="subtitle max-w-md">It may have moved. Head back home or take a look at my projects.</p>
      <div className="flex gap-3">
        <Button asChild><Link href="/">Home</Link></Button>
        <Button asChild variant="secondary"><Link href="/projects">Projects</Link></Button>
      </div>
    </section>
  )
}
