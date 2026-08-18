'use client'

import { useRef, useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  ArrowLeft,
  ArrowRight,
  Fuel,
  Gauge,
  Calendar,
  X,
  Phone,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Eye,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import Link from 'next/link'
import { categories, vehicles, type Vehicle } from '@/lib/vehicles'

export function FeaturedVehicles() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('Tất cả')
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const filtered =
    activeCategory === 'Tất cả'
      ? vehicles
      : vehicles.filter((v) => v.category === activeCategory)

  // Smooth scroll reset when switching category
  function handleCategoryChange(cat: (typeof categories)[number]) {
    setActiveCategory(cat)
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }

  function scroll(dir: 'left' | 'right') {
    if (!trackRef.current) return
    const scrollAmount = trackRef.current.clientWidth * 0.75
    trackRef.current.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section id="vehicles" className="py-24 scroll-mt-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.35em] text-primary">
                <span className="h-px w-10 bg-primary" aria-hidden="true" />
                Danh Mục Xe Chuyên Dùng
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 pt-1 font-sans text-3xl font-bold uppercase leading-[1.25] tracking-normal text-foreground sm:mt-7 sm:text-4xl md:text-6xl">
                Những mẫu xe nổi bật
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="hidden gap-3 md:flex">
              <button
                type="button"
                aria-label="Xe trước"
                onClick={() => scroll('left')}
                className="grid size-11 place-items-center rounded-md border border-border text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Xe tiếp theo"
                onClick={() => scroll('right')}
                className="grid size-11 place-items-center rounded-md border border-border text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Category Filters */}
        <Reveal delay={0.2}>
          <div className="mt-7 flex overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex-nowrap sm:flex-wrap sm:pb-0 gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className="relative shrink-0 rounded-md px-4 py-2.5 font-mono text-xs font-medium uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:px-5 sm:text-sm"
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-md bg-primary"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span
                  className={
                    activeCategory === cat
                      ? 'relative text-primary-foreground font-semibold'
                      : 'relative text-muted-foreground hover:text-foreground'
                  }
                >
                  {cat}
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Vehicles Carousel Container */}
      <motion.div
        layout="position"
        className="relative mt-8 sm:mt-10"
      >
        <motion.div
          ref={trackRef}
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-6 sm:gap-6 sm:px-6 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filtered.map((v, i) => (
            <VehicleCard
              key={v.id}
              vehicle={v}
              index={i}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* CTA to Full Catalog */}
      <div className="mx-auto mt-8 max-w-7xl px-5 md:px-8 text-center sm:text-right">
        <Link
          href="/vehicles"
          className="group inline-flex items-center gap-3 rounded-xl border border-primary/40 bg-card/80 px-6 py-3.5 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground backdrop-blur transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
        >
          <span>Xem tất cả xe chuyên dùng</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Vehicle Details Modal (kept for legacy fallback) */}
      <AnimatePresence>
        {selectedVehicle && (
          <VehicleDetailModal
            vehicle={selectedVehicle}
            onClose={() => setSelectedVehicle(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function VehicleCard({
  vehicle,
  index,
}: {
  vehicle: Vehicle
  index: number
}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const images = vehicle.images && vehicle.images.length > 0 ? vehicle.images : [vehicle.image]

  // Reset img index when vehicle changes
  useEffect(() => {
    setCurrentImgIndex(0)
  }, [vehicle.id])

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: Math.min(index * 0.03, 0.2),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative w-[290px] shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-lg sm:w-[330px] md:w-[360px]"
    >
      <Link href={`/vehicles/${vehicle.id}`} className="block h-full cursor-pointer">
        {/* Image Showcase with 3-image switcher */}
        <div className="relative aspect-[16/11] overflow-hidden bg-muted">
          <motion.img
            key={currentImgIndex}
            initial={{ opacity: 0.85 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            src={images[currentImgIndex]}
            alt={`${vehicle.brand} ${vehicle.model} - Ảnh ${currentImgIndex + 1}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent pointer-events-none" />

          {/* Category badge */}
          <span className="absolute left-4 top-4 rounded-md bg-background/80 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-foreground backdrop-blur">
            {vehicle.category}
          </span>

          {/* 3 Images Indicator Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-background/65 px-2.5 py-1 backdrop-blur-md">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setCurrentImgIndex(idx)
                  }}
                  aria-label={`Xem ảnh ${idx + 1} của xe ${vehicle.model}`}
                  className={`size-2 rounded-full transition-all duration-300 ${
                    idx === currentImgIndex
                      ? 'w-4 bg-primary'
                      : 'bg-foreground/40 hover:bg-foreground/80'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{vehicle.brand}</p>
          <h3 className="mt-1 font-sans text-xl font-bold uppercase tracking-tight text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {vehicle.model}
          </h3>

          {/* Specs grid */}
          <div className="mt-4 flex items-center justify-between border-y border-border py-3 font-mono text-xs text-muted-foreground">
            <span>{vehicle.payload ? `Tải trọng: ${vehicle.payload}` : vehicle.category}</span>
            <span className="text-primary font-medium">Ô Tô Tín Phát</span>
          </div>

          {/* Price & Action */}
          <div className="mt-5 flex items-end justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Giá tham khảo
              </p>
              <p className="font-sans text-xl font-bold text-foreground sm:text-2xl">
                {vehicle.price}
              </p>
            </div>
            <span className="group/btn inline-flex items-center gap-1.5 rounded-md bg-secondary px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wide text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              Xem chi tiết
              <Eye className="size-3.5 transition-transform group-hover/btn:scale-110" aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

function Spec({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <span className="text-primary">{icon}</span>
      <span className="font-mono text-xs text-muted-foreground line-clamp-1">{value}</span>
    </div>
  )
}

function VehicleDetailModal({
  vehicle,
  onClose,
}: {
  vehicle: Vehicle
  onClose: () => void
}) {
  const images = vehicle.images && vehicle.images.length > 0 ? vehicle.images : [vehicle.image]
  const [activeImgIdx, setActiveImgIdx] = useState(0)

  function prevImage() {
    setActiveImgIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  function nextImage() {
    setActiveImgIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 28, stiffness: 350 }}
        className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng bảng chi tiết"
          className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none"
        >
          <X className="size-5" />
        </button>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Main Image Slider with 3 Images */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden rounded-xl bg-muted border border-border">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImgIdx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  src={images[activeImgIdx]}
                  alt={`${vehicle.model} - Photo ${activeImgIdx + 1}`}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Slider Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    aria-label="Ảnh trước"
                    className="absolute left-3 top-1/2 -translate-y-1/2 grid size-9 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Ảnh tiếp theo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 grid size-9 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </>
              )}

              <span className="absolute bottom-3 left-3 rounded-md bg-background/80 px-2.5 py-1 font-mono text-xs font-semibold text-foreground backdrop-blur">
                Ảnh {activeImgIdx + 1} / {images.length}
              </span>
            </div>

            {/* 3 Thumbnails selector */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImgIdx(idx)}
                  className={`relative aspect-[16/11] overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                    idx === activeImgIdx
                      ? 'border-primary ring-2 ring-primary/40'
                      : 'border-border opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle Info & Specifications */}
          <div className="flex flex-col lg:col-span-5">
            <div>
              <span className="rounded-md bg-primary/15 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                {vehicle.category}
              </span>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Hãng xe: <strong className="text-foreground">{vehicle.brand}</strong>
              </p>
              <h2 className="mt-1 font-sans text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                {vehicle.model}
              </h2>
            </div>

            <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">
              {vehicle.description}
            </p>

            {/* Specs Table */}
            <div className="mt-6 divide-y divide-border rounded-xl border border-border bg-background/50 p-4 font-mono text-xs">
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Năm sản xuất</span>
                <span className="font-semibold text-foreground">{vehicle.year}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Tình trạng</span>
                <span className="font-semibold text-foreground">{vehicle.mileage}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Hộp số</span>
                <span className="font-semibold text-foreground">{vehicle.transmission}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Nhiên liệu</span>
                <span className="font-semibold text-foreground">{vehicle.fuel}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Bảo hành</span>
                <span className="font-semibold text-primary">Chính hãng / 36 Tháng</span>
              </div>
            </div>

            {/* Price & Contact buttons */}
            <div className="mt-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Giá bán dự kiến
              </p>
              <p className="font-sans text-3xl font-bold text-foreground">{vehicle.price}</p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wide text-primary-foreground transition-shadow hover:shadow-[0_0_20px_-2px] hover:shadow-primary"
              >
                <Phone className="size-4" />
                Tư vấn & Nhận báo giá ngay
              </a>
              <div className="flex items-center justify-center gap-2 text-center font-mono text-[11px] text-muted-foreground">
                <ShieldCheck className="size-4 text-primary" />
                Cam kết xe nguyên bản, giấy tờ đầy đủ
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
