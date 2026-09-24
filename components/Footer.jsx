import Link from 'next/link'
import Socials from './Socials'
import { site } from '@/data/site'

const Footer = () => (
  <footer className="bg-secondary py-12">
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-y-4 text-center">
        <Socials containerStyles="flex gap-x-6" iconStyles="text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all duration-200" />
        <a href={`mailto:${site.email}`} className="text-white/70 hover:text-white transition-colors">{site.email}</a>
        <div className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} {site.name} · <Link href="/contact" className="hover:text-white">Work with me</Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
