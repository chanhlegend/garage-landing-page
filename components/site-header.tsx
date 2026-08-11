'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, Phone, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Trang chủ', href: '#home' },
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Sản phẩm', href: '#vehicles' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Liên hệ', href: '#contact' },
]

const HOTLINE = '0909 888 666'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled
          ? 'border-b border-border bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#home"
          className="font-sans text-2xl font-bold uppercase tracking-widest text-foreground"
        >
          APEX<span className="text-primary">.</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative font-mono text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${HOTLINE.replace(/\s/g, '')}`}
            className="hidden items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground md:flex"
          >
            <Phone className="size-4 text-primary" />
            {HOTLINE}
          </a>
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-all hover:shadow-[0_0_24px_-4px] hover:shadow-primary sm:flex"
          >
            Liên hệ ngay
          </a>
          <button
            type="button"
            aria-label="Mở menu"
            onClick={() => setOpen(true)}
            className="grid size-10 place-items-center rounded-md border border-border text-foreground lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-18 items-center justify-between px-5 py-4">
              <span className="font-sans text-2xl font-bold uppercase tracking-widest">
                APEX<span className="text-primary">.</span>
              </span>
              <button
                type="button"
                aria-label="Đóng menu"
                onClick={() => setOpen(false)}
                className="grid size-10 place-items-center rounded-md border border-border"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="border-b border-border py-4 font-sans text-3xl font-semibold uppercase tracking-wide text-foreground"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={`tel:${HOTLINE.replace(/\s/g, '')}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex items-center justify-center gap-2 rounded-md bg-primary py-4 font-mono text-base font-semibold uppercase tracking-wide text-primary-foreground"
              >
                <Phone className="size-4" />
                {HOTLINE}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
