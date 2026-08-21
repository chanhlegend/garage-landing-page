'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import {
  Truck,
  Flame,
  Wrench,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  SlidersHorizontal,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const segments = [
  {
    id: 'xe-cau',
    categoryName: 'Xe Cẩu',
    title: 'Xe Cẩu Tự Hành',
    sub: 'Cẩu Soosan, Unic, Kanglim',
    desc: 'Giải pháp nâng hạ và vận tải hàng hóa nặng, vật liệu xây dựng, lắp dựng nhà xưởng với cần cẩu thủy lực sức nâng từ 3 tấn đến 15 tấn.',
    specs: [
      { label: 'Tải trọng xe', value: '3.5T - 15T' },
      { label: 'Sức nâng cần', value: '3T - 15 Tấn' },
      { label: 'Hãng cẩu', value: 'Soosan, Unic, Kanglim' },
      { label: 'Xe cơ sở', value: 'Hino, Isuzu, Hyundai, Chenglong' },
    ],
    image: '/cars/120.jpg',
    highlights: ['Cần cẩu Soosan nhập khẩu Hàn Quốc', 'Thùng lửng gia cố dầm chịu lực cao', 'Đăng kiểm lưu hành trọn gói'],
  },
  {
    id: 'xe-ep-rac',
    categoryName: 'Xe Ép Rác',
    title: 'Xe Cuốn Ép Rác Môi Trường',
    sub: 'Thể tích 6m³ — 14m³',
    desc: 'Dòng xe chuyên dụng thu gom, cuốn ép và vận chuyển rác thải sinh hoạt, rác đô thị với cơ cấu ép thủy lực mạnh mẽ, chống rò rỉ nước rác.',
    specs: [
      { label: 'Dung tích thùng', value: '6m³ - 14m³' },
      { label: 'Vật liệu thùng', value: 'Thép hợp kim SPA-H chống ăn mòn' },
      { label: 'Cơ cấu nạp', value: 'Máng xúc / Càng gắp thùng 240L-660L' },
      { label: 'Xe cơ sở', value: 'Isuzu, Hino, Hyundai, Thaco' },
    ],
    image: '/cars/96.jpg',
    highlights: ['Hệ thống ép kín khít không mùi', 'Xy lanh thủy lực nhập khẩu', 'Bảo dưỡng định kỳ tận nơi'],
  },
  {
    id: 'xe-hut-be-phot',
    categoryName: 'Xe Bồn Hút Bể Phốt',
    title: 'Xe Hút Bể Phốt & Chất Thải',
    sub: 'Dung tích 3m³ — 12m³',
    desc: 'Xe bồn chuyên dùng hút bùn, hút hầm cầu, nạo vét cống rãnh công nghệ hút chân không áp lực cao, không làm vương vãi chất thải.',
    specs: [
      { label: 'Dung tích bồn', value: '3m³ - 12m³' },
      { label: 'Bơm chân không', value: 'Công nghệ vòng nước / Bơm Ý' },
      { label: 'Độ chân không', value: '90% - Áp lực hút sâu' },
      { label: 'Xe cơ sở', value: 'Hyundai, Isuzu, Dongfeng, Hino' },
    ],
    image: '/cars/rftn.jpg',
    highlights: ['Bồn dày 5mm chịu áp lực lớn', 'Bơm chân không công suất cao', 'Van xả đáy thủy lực tiện lợi'],
  },
  {
    id: 'xe-cho-rac',
    categoryName: 'Xe Chở Rác',
    title: 'Xe Chở Rác Thùng Rời (Hooklift)',
    sub: 'Chở rác & Nâng hạ thùng',
    desc: 'Chuyên dụng vận chuyển rác thùng rời, thùng ép rác trung chuyển từ các điểm tập kết về khu liên hợp xử lý rác tập trung.',
    specs: [
      { label: 'Tải trọng kéo', value: '5T - 15 Tấn' },
      { label: 'Cơ cấu kéo', value: 'Hooklift tay gập / trượt' },
      { label: 'Góc nâng ben', value: '48° - 52° đổ rác nhanh' },
      { label: 'Xe cơ sở', value: 'Hino, Chenglong, Isuzu, Dongfeng' },
    ],
    image: '/cars/dz.jpg',
    highlights: ['Tiết kiệm thời gian trung chuyển', 'Phù hợp các đơn vị công ích', 'Độ bền khung gầm vượt trội'],
  },
]

export function QuickVehicleFinder() {
  const [activeTab, setActiveTab] = useState(segments[0].id)
  const current = segments.find((s) => s.id === activeTab) || segments[0]

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Reveal>
              <span className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                <span className="h-0.5 w-8 bg-accent" />
                Phân Loại Xe Chuyên Dùng
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-sans text-3xl font-bold uppercase leading-tight tracking-normal text-foreground sm:text-4xl md:text-5xl">
                Chọn Xe Theo Nhu Cầu Kinh Doanh
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link
              href="/vehicles"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-primary hover:text-accent transition-colors"
            >
              <span>Xem toàn bộ 24+ mẫu xe</span>
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        {/* 4 Segment Navigation Pills */}
        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {segments.map((seg) => {
            const isSelected = seg.id === activeTab
            return (
              <button
                key={seg.id}
                type="button"
                onClick={() => setActiveTab(seg.id)}
                className={`relative flex flex-col items-start p-4 rounded-2xl border text-left transition-all duration-300 ${
                  isSelected
                    ? 'border-primary bg-card shadow-xl ring-2 ring-primary/20'
                    : 'border-border/80 bg-card/60 hover:bg-card hover:border-primary/40'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`font-mono text-[10px] font-bold uppercase tracking-wider ${
                      isSelected ? 'text-accent' : 'text-muted-foreground'
                    }`}
                  >
                    {seg.sub}
                  </span>
                  {isSelected && (
                    <span className="size-2 rounded-full bg-accent animate-pulse" />
                  )}
                </div>
                <h3 className="mt-2 font-sans text-base sm:text-lg font-bold uppercase text-foreground">
                  {seg.title}
                </h3>
              </button>
            )
          })}
        </div>

        {/* Selected Segment Interactive Content Box */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-card shadow-2xl p-6 sm:p-8 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-8 lg:grid-cols-12 lg:items-center"
            >
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-accent/15 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-accent">
                      Phân khúc chuyên dụng
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      Chính hãng Tín Phát
                    </span>
                  </div>
                  <h3 className="mt-3 font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-foreground">
                    {current.title}
                  </h3>
                  <p className="mt-3 font-mono text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {current.desc}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 rounded-2xl bg-secondary/50 p-4 font-mono text-xs">
                  {current.specs.map((spec, i) => (
                    <div key={i} className="space-y-1">
                      <span className="text-[11px] text-muted-foreground">{spec.label}:</span>
                      <p className="font-bold text-foreground">{spec.value}</p>
                    </div>
                  ))}
                </div>

                {/* Highlights list */}
                <div className="space-y-2">
                  {current.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 font-mono text-xs text-foreground">
                      <CheckCircle2 className="size-4 text-accent shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Action Row */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href={`/vehicles?category=${encodeURIComponent(current.categoryName)}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Xem các mẫu {current.title}</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground hover:border-accent hover:text-accent transition-colors"
                  >
                    <PhoneCall className="size-4 text-accent" />
                    <span>Nhận báo giá quy cách riêng</span>
                  </a>
                </div>
              </div>

              {/* Right Image Showcase */}
              <div className="lg:col-span-5">
                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted border border-border">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-card/90 p-3.5 backdrop-blur-md border border-border/80 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[10px] font-semibold text-muted-foreground uppercase">
                        Thời gian giao xe
                      </p>
                      <p className="font-sans text-xs font-bold text-foreground uppercase">
                        Có sẵn / Đóng mới 15-20 ngày
                      </p>
                    </div>
                    <span className="rounded-lg bg-accent px-3 py-1 font-mono text-xs font-bold text-white uppercase">
                      Hỗ trợ vay 80%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
