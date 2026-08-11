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
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      {/* Background */}
      <motion.div style={{ x: imgX, y: imgY }} className="absolute inset-0 -z-10 scale-110">
        <img
          src="/cars/hero.png"
          alt="Xe thể thao cao cấp trong showroom"
          className="animate-ken-burns h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/40" />

      {/* Dust particles */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-primary/40"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animation: `float-up ${p.duration} linear infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ x: contentX }}
        className="mx-auto flex w-full max-w-7xl flex-col px-5 pt-28 md:px-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6 flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.35em] text-primary"
        >
          <span className="h-px w-10 bg-primary" />
          Gara Ô Tô Cao Cấp
        </motion.span>

        <h1 className="font-sans text-6xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
          {['Chạm tay', 'Ước mơ.'].map((line, i) => (
            <span key={line} className="block overflow-hidden">
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
          className="mt-7 max-w-md text-pretty font-mono text-base leading-relaxed text-muted-foreground"
        >
          Khám phá những mẫu xe được tuyển chọn kỹ lưỡng cùng dịch vụ chăm sóc ô tô chuyên nghiệp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#vehicles"
            className="group flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-all hover:shadow-[0_0_30px_-4px] hover:shadow-primary"
          >
            Xem sản phẩm
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border bg-background/30 px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wide text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
          >
            Liên hệ ngay
          </a>
        </motion.div>

        {/* Floating glass stats card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="glass mt-14 grid w-fit grid-cols-3 gap-8 rounded-xl border border-border px-8 py-6"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-sans text-3xl font-bold text-foreground md:text-4xl">
                <Counter to={s.value} />
                <span className="text-primary">{s.suffix}</span>
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
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
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Cuộn xuống</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="size-5 text-primary" />
        </motion.span>
      </motion.a>
    </section>
  )
}
