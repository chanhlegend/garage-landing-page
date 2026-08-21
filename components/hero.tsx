'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Award,
  Truck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import { Counter } from '@/components/counter'

const stats = [
  { value: 100, suffix: '+', label: 'Xe đã bàn giao' },
  { value: 10, suffix: '+', label: 'Năm kinh nghiệm' },
  { value: 500, suffix: '+', label: 'Khách hàng' },
]

export function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })
  const imgX = useTransform(sx, [-0.5, 0.5], [20, -20])
  const imgY = useTransform(sy, [-0.5, 0.5], [12, -12])
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
      className="relative flex min-h-svh scroll-mt-20 items-center overflow-hidden py-24 md:py-32"
    >
      {/* Background cinematic overlay */}
      <motion.div style={{ x: imgX, y: imgY }} className="absolute inset-0 -z-10 scale-110">
        <img
          src="/cars/z7958350577287_0f3a2ae7c592dd343f9be45d9f2b96a1.jpg"
          alt="Xe chuyên dùng cao cấp"
          className="animate-ken-burns h-full w-full object-cover opacity-35"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Headlines & CTA */}
          <div className="flex flex-col lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-card/60 px-4 py-1.5 backdrop-blur-md w-fit"
            >
              <span className="size-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                Xe Chuyên Dùng Tín Phát — Uy Tín Hàng Đầu
              </span>
            </motion.div>

            <h1 className="font-sans text-4xl font-bold uppercase leading-[1.12] tracking-normal text-foreground xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              {['Xe Chuyên Dùng', 'Hàng Đầu.'].map((line, i) => (
                <span key={line} className="block overflow-hidden py-0.5">
                  <motion.span
                    className="block"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {i === 1 ? <span className="text-primary">{line}</span> : line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-5 max-w-xl text-pretty font-mono text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base"
            >
              Đơn vị chuyên nhập khẩu, phân phối và đóng mới các chủng loại xe cẩu tự hành, xe chở rác, xe ép rác, xe hút bể phốt đạt chuẩn Đăng Kiểm với chính sách bảo hành 3 năm và hỗ trợ trả góp đến 85%.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="mt-7 flex flex-col gap-3.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <Link
                href="/vehicles"
                className="group flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Xem danh mục xe
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-foreground shadow-sm transition-all hover:border-primary hover:text-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Tư vấn báo giá
              </a>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-10 grid grid-cols-3 gap-3 rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-xl w-full max-w-xl"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <div className="font-sans text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                    <Counter to={s.value} />
                    <span className="text-accent ml-0.5">{s.suffix}</span>
                  </div>
                  <div className="mt-1 font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Flagship Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            {/* Ambient Back Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/10 blur-xl opacity-60 pointer-events-none" />

            {/* Main Showcase Card */}
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-2xl space-y-5">
              {/* Header Badge Row */}
              <div className="flex items-center justify-between gap-3 border-b border-border/80 pb-4">
                <div className="flex items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-lg bg-accent/15 text-accent">
                    <Sparkles className="size-4" />
                  </span>
                  <div>
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                      Mẫu Xe Chủ Lực
                    </span>
                    <span className="block font-sans text-sm font-bold uppercase text-foreground">
                      Dòng Cẩu & Môi Trường
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-700 border border-emerald-500/20">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Sẵn xe giao ngay
                </span>
              </div>

              {/* Showcase Image with Badge */}
              <div className="group relative aspect-[16/11] overflow-hidden rounded-2xl bg-muted border border-border">
                <img
                  src="/cars/120.jpg"
                  alt="Xe cẩu chuyên dùng Tín Phát"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Tag over Image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-card/90 px-3.5 py-2 backdrop-blur-md border border-border/80">
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Hãng xe cơ sở:
                    </p>
                    <p className="font-sans text-xs font-bold uppercase text-foreground">
                      HINO • ISUZU • HYUNDAI
                    </p>
                  </div>
                  <span className="rounded-lg bg-primary px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-primary-foreground">
                    Cẩu Soosan
                  </span>
                </div>
              </div>

              {/* Specs Matrix */}
              <div className="grid grid-cols-3 gap-2 rounded-xl bg-secondary/60 p-3 text-center font-mono text-xs">
                <div className="space-y-0.5 border-r border-border/60">
                  <span className="text-[10px] text-muted-foreground">Tải trọng</span>
                  <p className="font-bold text-foreground">5 - 15 Tấn</p>
                </div>
                <div className="space-y-0.5 border-r border-border/60">
                  <span className="text-[10px] text-muted-foreground">Cần cẩu</span>
                  <p className="font-bold text-accent">Soosan Korea</p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] text-muted-foreground">Hỗ trợ vay</span>
                  <p className="font-bold text-foreground">Đến 85%</p>
                </div>
              </div>

              {/* Value Props */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 text-xs font-mono text-foreground/90">
                  <CheckCircle2 className="size-4 text-accent shrink-0" />
                  <span>Hồ sơ bản vẽ Đăng Kiểm trọn gói 100%</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-foreground/90">
                  <CheckCircle2 className="size-4 text-accent shrink-0" />
                  <span>Xưởng sản xuất 5000m² gia công trực tiếp không qua trung gian</span>
                </div>
              </div>

              {/* Card Action */}
              <Link
                href="/vehicles"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-secondary py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <span>Xem chi tiết danh sách xe</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Floating Trust Badge Top Right */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 shadow-xl backdrop-blur"
            >
              <Award className="size-4 text-accent" />
              <span className="font-mono text-xs font-bold text-foreground">
                Bảo hành 36 Tháng
              </span>
            </motion.div>

            {/* Floating Trust Badge Bottom Left */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 shadow-xl backdrop-blur"
            >
              <ShieldCheck className="size-4 text-emerald-600" />
              <span className="font-mono text-xs font-bold text-foreground">
                100% Chuẩn Đăng Kiểm
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Cuộn xuống"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Cuộn xuống</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="size-5 text-accent" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  )
}
