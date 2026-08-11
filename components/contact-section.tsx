'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Share2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const info = [
  { icon: MapPin, label: 'Địa chỉ', value: '128 Nguyễn Văn Linh, Q.7, TP.HCM' },
  { icon: Phone, label: 'Hotline', value: '0909 888 666' },
  { icon: Mail, label: 'Email', value: 'sales@apexmotors.vn' },
  { icon: Clock, label: 'Giờ làm việc', value: '08:00 – 20:00 (T2 – CN)' },
]

export function ContactSection() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="contact" className="py-24 scroll-mt-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.35em] text-primary">
              <span className="h-px w-10 bg-primary" aria-hidden="true" />
              Liên hệ
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-balance font-sans text-3xl font-bold uppercase tracking-tight text-foreground sm:mt-5 sm:text-4xl md:text-6xl">
              Hãy Nói Chuyện Về Chiếc Xe Kế Tiếp Của Bạn.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {info.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.08} direction="left">
                  <div className="flex h-full items-start gap-4 rounded-xl border border-border bg-card p-5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
                      <item.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-1 font-mono text-sm text-foreground">{item.value}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Liên hệ nhanh
              </p>
              <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                <a
                  href="https://zalo.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-[colors,box-shadow] hover:shadow-[0_0_24px_-4px] hover:shadow-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Zalo
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Share2 className="size-4" aria-hidden="true" />
                  Facebook
                </a>
                <a
                  href="tel:0909888666"
                  className="flex flex-1 items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Gọi ngay
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal direction="right">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-card p-6 md:p-8"
            >
              <div className="grid gap-5">
                <Field label="Họ và tên" name="name" autocomplete="name" placeholder="Nguyễn Văn A" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Số điện thoại" name="phone" type="tel" inputMode="tel" autocomplete="tel" placeholder="0909 …" />
                  <Field label="Email" name="email" type="email" autocomplete="email" spellCheck={false} placeholder="ban@email.com" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
                  >
                    Nội dung
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tôi quan tâm đến mẫu xe…"
                    className="mt-2 w-full resize-none rounded-md border border-input bg-background px-4 py-3 font-mono text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={sent}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-[colors,box-shadow] hover:shadow-[0_0_30px_-4px] hover:shadow-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-75"
                >
                  {sent ? 'Đã gửi. Cảm ơn bạn!' : 'Gửi yêu cầu'}
                  {!sent && (
                    <Send className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  )}
                </motion.button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  autocomplete,
  inputMode,
  spellCheck,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  autocomplete?: string
  inputMode?: 'search' | 'text' | 'email' | 'tel' | 'url' | 'none' | 'numeric' | 'decimal'
  spellCheck?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autocomplete}
        inputMode={inputMode}
        spellCheck={spellCheck}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 font-mono text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      />
    </div>
  )
}
