'use client'

import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Counter } from '@/components/counter'

const features = [
  'Xe được kiểm tra kỹ lưỡng trước khi bàn giao',
  'Tư vấn minh bạch, không chi phí ẩn',
  'Dịch vụ hậu mãi chuyên nghiệp, tận tâm',
]

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 scroll-mt-20 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Image with reveal mask */}
        <motion.div
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-xl border border-border">
            <img
              src="/cars/z7980592847072_3bf985667d9b9f3279110d80cee35113.jpg"
              alt="Gara ô tô chuyên dùng chất lượng cao"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="glass absolute bottom-4 right-4 z-10 rounded-xl border border-border/80 bg-background/85 px-5 py-3.5 shadow-2xl backdrop-blur-md sm:bottom-6 sm:right-6 sm:px-6 sm:py-4">
            <div className="font-sans text-3xl font-bold text-primary sm:text-4xl">
              <Counter to={10} />+
            </div>
            <div className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs whitespace-nowrap">
              Năm kinh nghiệm
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div>
          <Reveal>
            <span className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.35em] text-primary">
              <span className="h-px w-10 bg-primary" aria-hidden="true" />
              Về Xe Chuyên Dùng Sài Gòn
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 pt-1 text-balance font-sans text-3xl font-bold uppercase leading-[1.25] tracking-normal text-foreground sm:mt-7 sm:text-4xl md:text-6xl">
              Chất Lượng Vượt Trội.
              <br />
              <span className="text-primary">Uy Tín Hàng Đầu Sài Gòn.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-pretty font-mono leading-relaxed text-muted-foreground">
              Xe Chuyên Dùng Sài Gòn tự hào là đơn vị uy tín hàng đầu trong lĩnh vực nhập khẩu, phân phối và đóng mới các chủng loại xe môi trường, xe cẩu, xe ép rác, xe hút bể phốt chuyên dùng.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-col gap-4">
            {features.map((f, i) => (
              <Reveal key={f} delay={0.3 + i * 0.1} direction="left">
                <div className="flex items-center gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-sm text-foreground">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
