'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Counter } from '@/components/counter'

const stats = [
  { value: 100, suffix: '+', label: 'Xe đã bàn giao' },
  { value: 10, suffix: '+', label: 'Năm kinh nghiệm' },
  { value: 500, suffix: '+', label: 'Khách hàng' },
]

const particles = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  delay: `${(i % 7) * 1.4}s`,
  duration: `${8 + (i % 5) * 2}s`,
  size: i % 3 === 0 ? 3 : 2,
}))

export function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })
  const imgX = useTransform(sx, [-0.5, 0.5], [20, -20])
  const imgY = useTransform(sy, [-0.5, 0.5], [12, -12])
  const contentX = useTransform(sx, [-0.5, 0.5], [-14, 14])
  const ref = useRef<HTMLDivElement>(null)

  function onMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex min-h-svh scroll-mt-20 items-center overflow-hidden"
    >
      {/* Background */}
      <motion.div style={{ x: imgX, y: imgY }} className="absolute inset-0 -z-10 scale-110">
        <img
          src="/cars/z7958350577287_0f3a2ae7c592dd343f9be45d9f2b96a1.jpg"
          alt="Xe chuyên dùng cao cấp"
          className="animate-ken-burns h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

      <motion.div
        style={{ x: contentX }}
        className="mx-auto flex w-full max-w-7xl flex-col px-4 pt-24 sm:px-6 md:px-8 md:pt-28"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4 flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-primary sm:mb-6 sm:gap-3 sm:text-xs sm:tracking-[0.35em]"
        >
          <span className="h-px w-8 bg-primary sm:w-10" aria-hidden="true" />
          Xe Chuyên Dùng Sài Gòn
        </motion.span>

        <h1 className="font-sans text-4xl font-bold uppercase leading-[1.18] tracking-normal text-foreground xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
          {['Xe Chuyên Dùng', 'Hàng Đầu.'].map((line, i) => (
            <span key={line} className="block overflow-hidden py-1">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {i === 1 ? <span className="text-primary">{line}</span> : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-5 max-w-md text-pretty font-mono text-sm leading-relaxed text-muted-foreground sm:mt-7 sm:text-base"
        >
          Khám phá giải pháp xe cẩu, xe chở rác, xe ép rác, xe hút bể phốt chất lượng cao cùng dịch vụ bảo hành, đóng mới chuyên nghiệp tại Sài Gòn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="mt-7 flex flex-col gap-3.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
        >
          <a
            href="#vehicles"
            className="group flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-[colors,box-shadow] hover:shadow-[0_0_30px_-4px] hover:shadow-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Xem sản phẩm
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center rounded-md border border-border bg-background/30 px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wide text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Liên hệ ngay
          </a>
        </motion.div>

        {/* Floating glass stats card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="glass mt-10 grid w-full grid-cols-3 gap-2.5 rounded-xl border border-border px-4 py-4 sm:mt-14 sm:w-fit sm:gap-8 sm:px-8 sm:py-6"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="font-sans text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                <Counter to={s.value} />
                <span className="text-primary">{s.suffix}</span>
              </div>
              <div className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:mt-1 sm:text-xs sm:tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Cuộn xuống"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Cuộn xuống</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="size-5 text-primary" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  )
}
