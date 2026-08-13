'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  Wrench,
  ShieldCheck,
  Truck,
  Settings,
  Flame,
  ArrowRight,
  Phone,
  MessageCircle,
  X,
  CheckCircle2,
  MapPin,
  Clock,
  Quote,
} from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'
import { AFTER_SALES_SERVICES, type AfterSalesService, type ServiceBlock } from '@/lib/after-sales-services'

const serviceIcons: Record<string, React.ElementType> = {
  'bao-hanh-bao-duong': ShieldCheck,
  'nhap-khau-can-cau-soosan': Truck,
  'sua-chua-cai-tao-thung-xe': Wrench,
  'sua-chua-thung-xe-ep-rac': Flame,
  'bao-duong-xe-cuu-ho-cho-may': Settings,
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<AfterSalesService | null>(null)

  return (
    <section id="services" className="py-24 scroll-mt-20 md:py-32 bg-card/20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <span className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.35em] text-primary">
              <span className="h-px w-10 bg-primary" aria-hidden="true" />
              Chăm sóc & Hậu mãi
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 pt-1 font-sans text-3xl font-bold uppercase leading-[1.25] tracking-normal text-foreground sm:mt-7 sm:text-4xl md:text-6xl">
              Dịch Vụ Hậu Mãi Toàn Diện
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-pretty font-mono text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
              Ô TÔ TÍN PHÁT đồng hành cùng bạn trên mọi hành trình — từ nhập khẩu cẩu chính hãng, đóng mới thùng xe đến dịch vụ bảo hành, sửa chữa chuyên nghiệp toàn quốc.
            </p>
          </Reveal>
        </div>

        {/* 5 Service Cards Grid */}
        <Stagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AFTER_SALES_SERVICES.map((item, idx) => {
            const Icon = serviceIcons[item.id] || Wrench

            return (
              <StaggerItem
                key={item.id}
                className={idx === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  onClick={() => setSelectedService(item)}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8 cursor-pointer transition-colors duration-500 hover:border-primary/70 hover:shadow-[0_0_30px_-5px] hover:shadow-primary/20"
                >
                  {/* Background Image & Gradient */}
                  <div className="absolute inset-0 -z-10 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover opacity-20 transition-all duration-700 group-hover:scale-105 group-hover:opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/60" />
                  </div>

                  <div>
                    {/* Badge & Icon */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-primary">
                        Dịch vụ hậu mãi
                      </span>
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                    </div>

                    {/* Title & Summary */}
                    <h3 className="mt-6 font-sans text-xl font-bold uppercase tracking-tight text-foreground md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-mono text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {item.summary}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="mt-8 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary transition-all group-hover:gap-3">
                    <span>Xem nội dung chi tiết</span>
                    <ArrowRight className="size-4" />
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>

      {/* Modal / Dialog for Detailed Service View */}
      <AnimatePresence>
        {selectedService && (
          <ServiceDetailModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function ServiceDetailModal({
  service,
  onClose,
}: {
  service: AfterSalesService
  onClose: () => void
}) {
  const Icon = serviceIcons[service.id] || Wrench
  const [activeImg, setActiveImg] = useState(service.image)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-background/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl max-h-[90vh] flex flex-col"
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-card/95 px-6 py-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-primary/15 text-primary">
              <Icon className="size-5" />
            </span>
            <div>
              <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-primary">
                Chi tiết dịch vụ
              </span>
              <h3 className="font-sans text-lg font-bold uppercase tracking-tight text-foreground sm:text-xl line-clamp-1">
                {service.title}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng"
            className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Main Visual Banner & Gallery */}
          <div className="space-y-4">
            <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-xl border border-border">
              <img
                src={activeImg}
                alt={service.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-sans text-lg font-bold uppercase tracking-wide text-foreground sm:text-2xl drop-shadow-md">
                  {service.title}
                </p>
              </div>
            </div>

            {/* Thumbnails if gallery exists */}
            {service.gallery && service.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {service.gallery.map((imgUrl, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(imgUrl)}
                    className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition-all ${
                      activeImg === imgUrl
                        ? 'border-primary ring-2 ring-primary/40'
                        : 'border-border opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt="Hình ảnh dịch vụ" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Render Blocks dynamically according to user's provided document layout */}
          <div className="space-y-6">
            {service.blocks.map((block, idx) => (
              <BlockRenderer key={idx} block={block} />
            ))}
          </div>
        </div>

        {/* Footer Contact Bar */}
        <div className="sticky bottom-0 z-20 flex flex-col gap-3 border-t border-border bg-card/95 px-6 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Hotline tư vấn & hỗ trợ kỹ thuật:
            </p>
            <p className="font-mono text-lg font-bold text-primary">
              {service.hotline}
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://zalo.me/0392923792"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wide text-primary-foreground transition-all hover:shadow-[0_0_20px_-3px] hover:shadow-primary sm:flex-initial"
            >
              <MessageCircle className="size-4" />
              Chat Zalo
            </a>
            <a
              href={`tel:${service.hotline.replace(/\s/g, '')}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary sm:flex-initial"
            >
              <Phone className="size-4 text-primary" />
              Gọi Ngay
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function BlockRenderer({ block }: { block: ServiceBlock }) {
  switch (block.type) {
    case 'heading':
      return (
        <h4 className="flex items-center gap-2 font-sans text-base font-bold uppercase tracking-wider text-foreground border-l-2 border-primary pl-3 pt-2">
          {block.title}
        </h4>
      )
    case 'paragraph':
      return (
        <p className="font-mono text-sm leading-relaxed text-muted-foreground">
          {block.text}
        </p>
      )
    case 'key_value':
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          {block.items.map((kv, i) => (
            <div key={i} className="rounded-xl border border-border bg-background/60 p-4">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-primary">
                {kv.label}
              </span>
              <p className="mt-1 font-mono text-sm font-bold text-foreground">
                {kv.value}
              </p>
            </div>
          ))}
        </div>
      )
    case 'bullet_list':
      return (
        <div className="space-y-2">
          {block.title && (
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              {block.title}
            </p>
          )}
          <ul className="space-y-2 font-mono text-xs sm:text-sm text-foreground/90">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-background/40 p-3">
                <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    case 'nested_group':
      return (
        <div className="space-y-3 rounded-xl border border-border bg-card p-5">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
            {block.title}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {block.groups.map((group, gIdx) => (
              <div key={gIdx} className="rounded-lg border border-border/80 bg-background p-3.5 space-y-1">
                <p className="font-mono text-xs font-bold text-foreground flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-primary" />
                  {group.name}
                </p>
                {group.items.map((it, iIdx) => (
                  <p key={iIdx} className="font-mono text-xs text-muted-foreground pl-3">
                    {it}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )
    case 'warranty':
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                1. Bảo hành xe cơ sở
              </span>
              <Clock className="size-4 text-muted-foreground" />
            </div>
            <p className="font-mono text-sm font-semibold text-foreground">
              Thời gian: {block.chassis.time}
            </p>
            <p className="font-mono text-xs text-muted-foreground flex items-start gap-1.5 pt-1">
              <MapPin className="size-3.5 shrink-0 text-primary mt-0.5" />
              <span>{block.chassis.location}</span>
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                2. Bảo hành thùng xe & gia công
              </span>
              <Clock className="size-4 text-muted-foreground" />
            </div>
            <p className="font-mono text-sm font-semibold text-foreground">
              Thời gian: {block.body.time}
            </p>
            <p className="font-mono text-xs text-muted-foreground flex items-start gap-1.5 pt-1">
              <MapPin className="size-3.5 shrink-0 text-primary mt-0.5" />
              <span>{block.body.location}</span>
            </p>
          </div>
        </div>
      )
    case 'quote':
      return (
        <div className="flex items-start gap-3 rounded-xl border border-primary/40 bg-primary/10 p-5 text-primary">
          <Quote className="size-6 shrink-0 mt-0.5" />
          <p className="font-mono text-sm font-bold uppercase tracking-wide">
            {block.text}
          </p>
        </div>
      )
    case 'contact_callout':
      return (
        <div className="rounded-xl border border-border bg-card p-6 space-y-3">
          <h5 className="font-sans text-base font-bold uppercase text-foreground">
            {block.title}
          </h5>
          <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {block.text}
          </p>
          <div className="pt-2 flex items-center justify-between">
            <span className="font-mono text-xs font-semibold text-primary">
              Hotline hỗ trợ: {block.hotline}
            </span>
          </div>
        </div>
      )
    default:
      return null
  }
}
