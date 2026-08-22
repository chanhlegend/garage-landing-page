'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Building2,
  Warehouse,
  Factory,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'

const facilities = [
  {
    id: 'factory',
    name: 'Nhà Máy Sản Xuất & Đóng Thùng',
    tag: 'Quy mô 5.000 m²',
    type: 'Cơ sở sản xuất',
    icon: Factory,
    address: '232 ĐT743A, P. Đông Hòa, TP. Hồ Chí Minh',
    features: [
      'Máy cắt Laser CNC & Máy chấn dập 400 tấn',
      'Phòng sơn sấy công nghiệp tiêu chuẩn cao',
      'Hệ thống cẩu trục pa lăng 10 tấn',
      'Năng lực gia công 300+ xe chuyên dùng/năm',
    ],
    image: '/cars/z7980592847072_3bf985667d9b9f3279110d80cee35113.jpg',
    hotline: '0392 923 792',
    hours: '07:30 – 17:30 (Thứ 2 – Thứ 7)',
  },
  {
    id: 'showroom',
    name: 'Showroom Trưng Bày Xe Chuyên Dùng',
    tag: 'Sẵn xe xem thực tế',
    type: 'Showroom & Bán hàng',
    icon: Warehouse,
    address: '915 Quốc Lộ 1A, P. An Phú Đông, TP. Hồ Chí Minh',
    features: [
      'Trưng bày đầy đủ các dòng xe cẩu, xe ép rác, xe chở rác',
      'Khu vực tiếp khách và tư vấn kỹ thuật chuyên sâu',
      'Hỗ trợ khách hàng lái thử xe và vận hành cẩu thực tế',
      'Kho phụ tùng cẩu Soosan, Unic chính hãng có sẵn',
    ],
    image: '/cars/z7958350577287_0f3a2ae7c592dd343f9be45d9f2b96a1.jpg',
    hotline: '0392 923 792',
    hours: '08:00 – 20:00 (Tất cả các ngày trong tuần)',
  },
  {
    id: 'office',
    name: 'Văn Phòng Giao Dịch & Pháp Lý',
    tag: 'Thủ tục trọn gói',
    type: 'Văn phòng hành chính',
    icon: Building2,
    address: '45 đường số 1, KP.11, P. Long Trường, TP. Hồ Chí Minh',
    features: [
      'Xử lý hợp đồng mua bán, hóa đơn VAT minh bạch',
      'Tư vấn hồ sơ vay trả góp ngân hàng lãi suất ưu đãi',
      'Thụ lý hồ sơ thiết kế, cải tạo và ra sổ Đăng Kiểm',
      'Phòng tiếp nhận bảo hành và chăm sóc khách hàng',
    ],
    image: '/cars/z7952467690167_cd64f008cf087371eafa7ce8b0a7e2a7.jpg',
    hotline: '0392 923 792',
    hours: '08:00 – 17:30 (Thứ 2 – Thứ 7)',
  },
]

export function FacilitiesSection() {
  const [selectedId, setSelectedId] = useState(facilities[0].id)
  const activeFacility = facilities.find((f) => f.id === selectedId) || facilities[0]

  return (
    <section className="py-20 md:py-28 bg-card/30 border-y border-border/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
              <span className="h-0.5 w-8 bg-accent" />
              Năng Lực & Cơ Sở Vật Chất
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-sans text-3xl font-bold uppercase leading-[1.3] tracking-wide text-foreground sm:text-4xl md:text-5xl">
              Hệ Thống Nhà Máy & Showroom Tín Phát
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 font-mono text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Khách hàng hoàn toàn an tâm khi hợp tác cùng Ô Tô Tín Phát — đơn vị sở hữu nhà máy sản xuất thùng xe chuyên dùng hiện đại, showroom mặt tiền QL1A và văn phòng pháp lý rõ ràng.
            </p>
          </Reveal>
        </div>

        {/* 3 Facility Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {facilities.map((fac) => {
            const Icon = fac.icon
            const isCurrent = fac.id === selectedId

            return (
              <motion.div
                key={fac.id}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={() => setSelectedId(fac.id)}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-6 sm:p-7 cursor-pointer transition-all duration-300 ${
                  isCurrent
                    ? 'border-primary bg-card shadow-2xl ring-2 ring-primary/20'
                    : 'border-border bg-card/80 hover:bg-card hover:border-primary/50 hover:shadow-xl'
                }`}
              >
                {/* Image Banner */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted border border-border">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-lg bg-card/90 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-accent backdrop-blur border border-border/80">
                    {fac.tag}
                  </span>
                </div>

                {/* Details */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-4" />
                    </span>
                    <span className="font-mono text-xs font-semibold text-muted-foreground uppercase">
                      {fac.type}
                    </span>
                  </div>

                  <h3 className="font-sans text-lg sm:text-xl font-bold uppercase text-foreground group-hover:text-primary transition-colors">
                    {fac.name}
                  </h3>

                  <p className="flex items-start gap-2 font-mono text-xs text-muted-foreground leading-relaxed">
                    <MapPin className="size-4 text-accent shrink-0 mt-0.5" />
                    <span>{fac.address}</span>
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-border/60">
                    {fac.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 font-mono text-[11px] text-foreground">
                        <CheckCircle2 className="size-3.5 text-accent shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                  <div className="font-mono text-xs">
                    <span className="text-[10px] text-muted-foreground block uppercase">Hotline cơ sở:</span>
                    <strong className="text-foreground font-bold">{fac.hotline}</strong>
                  </div>
                  <a
                    href={`tel:${fac.hotline.replace(/\s/g, '')}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 font-mono text-xs font-bold uppercase text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="size-3.5" />
                    Gọi ngay
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
