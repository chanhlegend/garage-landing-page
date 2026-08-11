'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight, Fuel, Gauge, Calendar } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { categories, vehicles, type Vehicle } from '@/lib/vehicles'

export function FeaturedVehicles() {
  const [active, setActive] = useState<(typeof categories)[number]>('Tất cả')
  const trackRef = useRef<HTMLDivElement>(null)

  const filtered =
    active === 'Tất cả' ? vehicles : vehicles.filter((v) => v.category === active)

  function scroll(dir: 'left' | 'right') {
    trackRef.current?.scrollBy({ left: dir === 'left' ? -380 : 380, behavior: 'smooth' })
  }

  return (
    <section id="vehicles" className="py-24 scroll-mt-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.35em] text-primary">
                <span className="h-px w-10 bg-primary" aria-hidden="true" />
                Xe Nổi Bật
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-sans text-3xl font-bold uppercase tracking-tight text-foreground sm:mt-5 sm:text-4xl md:text-6xl">
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

        {/* Filters */}
        <Reveal delay={0.2}>
          <div className="mt-7 flex overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex-nowrap sm:flex-wrap sm:pb-0 gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className="relative shrink-0 rounded-md px-4 py-2 font-mono text-xs font-medium uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:px-5 sm:text-sm"
              >
                {active === cat && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-md bg-primary"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  className={
                    active === cat
                      ? 'relative text-primary-foreground'
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

      {/* Carousel */}
      <div
        ref={trackRef}
        className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-6 sm:mt-10 sm:gap-6 sm:px-6 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((v, i) => (
            <VehicleCard key={v.id} vehicle={v} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

function VehicleCard({ vehicle, index }: { vehicle: Vehicle; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-[280px] shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-card transition-colors duration-500 hover:border-primary/60 sm:w-[320px] md:w-[360px]"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={vehicle.image || '/placeholder.svg'}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent opacity-80" />
        <span className="absolute left-4 top-4 rounded-md bg-background/70 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-foreground backdrop-blur">
          {vehicle.category}
        </span>
      </div>

      <div className="p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">{vehicle.brand}</p>
        <h3 className="mt-1 font-sans text-2xl font-bold uppercase tracking-tight text-foreground">
          {vehicle.model}
        </h3>

        <div className="mt-5 grid grid-cols-3 gap-2 border-y border-border py-4">
          <Spec icon={<Calendar className="size-4" aria-hidden="true" />} value={String(vehicle.year)} />
          <Spec icon={<Gauge className="size-4" aria-hidden="true" />} value={vehicle.mileage} />
          <Spec icon={<Fuel className="size-4" aria-hidden="true" />} value={vehicle.fuel} />
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Giá bán
            </p>
            <p className="font-sans text-2xl font-bold text-foreground">
              {vehicle.price} <span className="text-sm text-muted-foreground">VNĐ</span>
            </p>
          </div>
          <a
            href="#contact"
            className="group/btn flex items-center gap-1.5 rounded-md bg-secondary px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Xem xe
            <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

function Spec({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <span className="text-primary">{icon}</span>
      <span className="font-mono text-xs text-muted-foreground">{value}</span>
    </div>
  )
}
