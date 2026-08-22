'use client'

import { motion } from 'motion/react'
import { ShieldCheck, Tag, Wrench, Headset } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'

const reasons = [
  {
    no: '01',
    icon: ShieldCheck,
    title: 'Kiểm tra chất lượng',
    desc: 'Mỗi chiếc xe đều được kiểm tra kỹ lưỡng trên 200 hạng mục.',
  },
  {
    no: '02',
    icon: Tag,
    title: 'Giá minh bạch',
    desc: 'Giá minh bạch, rõ ràng, không phát sinh chi phí ẩn.',
  },
  {
    no: '03',
    icon: Wrench,
    title: 'Dịch vụ chuyên nghiệp',
    desc: 'Đội ngũ kỹ thuật viên giàu kinh nghiệm, tận tâm.',
  },
  {
    no: '04',
    icon: Headset,
    title: 'Hỗ trợ hậu mãi',
    desc: 'Đồng hành cùng bạn ngay cả sau khi nhận xe.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="border-y border-border bg-card/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            Vì Sao Chọn Chúng Tôi
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 pt-1 max-w-2xl text-balance font-sans text-3xl font-bold uppercase leading-[1.3] tracking-wide text-foreground sm:mt-7 sm:text-4xl md:text-5xl lg:text-6xl">
            Lý do khách hàng tin chọn chúng tôi
          </h2>
        </Reveal>

        <Stagger className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {reasons.map((r) => (
            <StaggerItem key={r.no}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-xl border border-border bg-background p-5 transition-colors duration-500 hover:border-primary/60 sm:p-7"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="font-sans text-5xl font-bold text-border transition-colors duration-500 group-hover:text-primary/30" aria-hidden="true">
                  {r.no}
                </span>
                <r.icon className="mt-6 size-7 text-primary transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                <h3 className="mt-5 font-sans text-xl font-bold uppercase tracking-wide text-foreground">
                  {r.title}
                </h3>
                <p className="mt-3 font-mono text-sm leading-relaxed text-muted-foreground">
                  {r.desc}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
