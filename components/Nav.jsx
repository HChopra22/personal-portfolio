'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { navLinks } from '@/data/site'

const Nav = ({ containerStyles, linkStyles, underlineStyles, onNavigate }) => {
  const path = usePathname()
  return (
    <nav aria-label="Main" className={containerStyles}>
      {navLinks.map((link) => {
        const active = link.path === path
        return (
          <Link
            href={link.path}
            key={link.path}
            onClick={onNavigate}
            aria-current={active ? 'page' : undefined}
            className={`capitalize ${linkStyles}`}
          >
            {active && underlineStyles && (
              <motion.span initial={{ y: '-100%' }} animate={{ y: 0 }} transition={{ type: 'tween' }} layoutId="underline" className={underlineStyles} />
            )}
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
