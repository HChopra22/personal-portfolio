'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import Logo from './Logo'
import ThemeToggler from './ThemeToggler'
import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const base = 'sticky top-0 z-30 transition-all'
  const state = scrolled
    ? 'py-4 bg-white shadow-lg dark:bg-accent'
    : `py-6 ${pathname === '/' ? 'bg-[#fef9f5] dark:bg-accent' : 'bg-background'}`

  return (
    <header className={`${base} ${state}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
