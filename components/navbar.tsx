'use client'

import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'Fonctionnalités', href: '#features' },
  { name: 'Aperçu', href: '#preview' },
  { name: 'Tarifs', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-3"
    >
      <nav
        className={`mx-auto max-w-7xl flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border border-border shadow-lg shadow-primary/5'
            : 'bg-transparent border border-transparent'
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="text-lg font-heading font-bold tracking-tight">Carveo</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-primary/10 group"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
            Démarrer gratuitement
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.98 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden mt-2 mx-auto max-w-7xl rounded-2xl border border-border bg-background/95 backdrop-blur-xl p-5 shadow-xl"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground px-4 py-2.5 rounded-lg transition-colors hover:bg-primary/10"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border">
              <Button size="sm" className="bg-primary hover:bg-primary/90 w-full">
                Démarrer gratuitement
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
