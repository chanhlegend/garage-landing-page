'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CtaSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section ref={ref} className="relative flex min-h-[80svh] items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10 scale-125">
        <img
          src="/cars/cta.png"
          alt="Xe cao cấp chạy trên đường lúc hoàng hôn"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/75 to-background/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Sẵn Sàng Khi Bạn Cần
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-balance font-sans text-5xl font-bold uppercase leading-[0.95] tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Sẵn Sàng Tìm
            <br />
            <span className="text-primary">Chiếc Xe Kế Tiếp?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-md text-pretty font-mono leading-relaxed text-muted-foreground">
            Liên hệ với chúng tôi để được tư vấn mẫu xe phù hợp với nhu cầu và ngân sách của bạn.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#vehicles"
              className="group flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-all hover:shadow-[0_0_30px_-4px] hover:shadow-primary"
            >
              Xem xe ngay
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-md border border-border bg-background/30 px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wide text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="size-4" />
              Liên hệ
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
