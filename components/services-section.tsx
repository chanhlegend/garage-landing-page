'use client'

import { motion } from 'motion/react'
import { Search, Wrench, Sparkles, Cog, MessageSquare, Repeat } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'

const services = [
  {
    icon: Search,
    title: 'Kiểm tra xe',
    desc: 'Kiểm tra tình trạng xe toàn diện trên hơn 200 hạng mục kỹ thuật.',
    span: 'sm:col-span-2 lg:col-span-2 lg:row-span-2',
    image: '/cars/rftn.jpg',
  },
  {
    icon: Wrench,
    title: 'Bảo dưỡng',
    desc: 'Bảo dưỡng và chăm sóc xe định kỳ.',
    span: '',
  },
  {
    icon: Sparkles,
    title: 'Chăm sóc chi tiết',
    desc: 'Vệ sinh và chăm sóc ngoại thất, nội thất.',
    span: '',
  },
  {
    icon: Cog,
    title: 'Sửa chữa',
    desc: 'Sửa chữa và xử lý các vấn đề kỹ thuật.',
    span: '',
  },
  {
    icon: MessageSquare,
    title: 'Tư vấn',
    desc: 'Tư vấn lựa chọn mẫu xe phù hợp.',
    span: '',
  },
  {
    icon: Repeat,
    title: 'Thu mua – đổi xe',
    desc: 'Hỗ trợ thu mua và đổi xe nhanh chóng, giá tốt.',
    span: 'sm:col-span-2 lg:col-span-2',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 scroll-mt-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.35em] text-primary">
              <span className="h-px w-10 bg-primary" aria-hidden="true" />
              Dịch vụ của chúng tôi
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 pt-1 font-sans text-3xl font-bold uppercase leading-[1.25] tracking-normal text-foreground sm:mt-7 sm:text-4xl md:text-6xl">
              Dịch vụ của chúng tôi
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-pretty font-mono text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
              Không chỉ bán xe, chúng tôi đồng hành cùng bạn trong suốt quá trình sử dụng.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-10 grid auto-rows-[minmax(190px,auto)] grid-cols-1 gap-4 sm:mt-14 sm:auto-rows-[200px] sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {services.map((s) => (
            <StaggerItem key={s.title} className={s.span}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative flex h-full flex-col justify-end overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors duration-500 hover:border-primary/60"
              >
                {s.image && (
                  <>
                    <img
                      src={s.image || '/placeholder.svg'}
                      alt={s.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-30 transition-all duration-700 group-hover:scale-105 group-hover:opacity-45"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-card/30" />
                  </>
                )}
                <div className="relative">
                  <span className="grid size-11 place-items-center rounded-md bg-primary/15 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-sans text-xl font-bold uppercase tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 font-mono text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
