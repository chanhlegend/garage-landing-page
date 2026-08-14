'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { Phone, MessageCircle, Car } from 'lucide-react'

export function MobileActionBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background/90 backdrop-blur-xl lg:hidden"
        >
          <a
            href="tel:0392923792"
            className="flex flex-col items-center gap-1 py-3 font-mono text-[11px] font-semibold uppercase tracking-wide text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Phone className="size-5 text-primary" aria-hidden="true" />
            Gọi ngay
          </a>
          <a
            href="https://zalo.me/0392923792"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 border-x border-border bg-primary py-3 font-mono text-[11px] font-semibold uppercase tracking-wide text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Zalo
          </a>
          <Link
            href="/#vehicles"
            className="flex flex-col items-center gap-1 py-3 font-mono text-[11px] font-semibold uppercase tracking-wide text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Car className="size-5 text-primary" aria-hidden="true" />
            Xem xe
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
