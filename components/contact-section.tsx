'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Share2,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  AlertCircle,
  RotateCcw,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const info = [
  { icon: MapPin, label: 'Địa chỉ Văn phòng', value: '45 đường số 1, KP.11, P. Long Trường, TP. Hồ Chí Minh' },
  { icon: MapPin, label: 'Địa chỉ Showroom', value: '915, Quốc Lộ 1A, P.An Phú Đông, TP. Hồ Chí Minh' },
  { icon: MapPin, label: 'Xưởng sản xuất, Nhà máy', value: '232 ĐT743A, P. Đông Hòa, TP. Hồ Chí Minh' },
  { icon: Phone, label: 'Hotline', value: '0392 923 792' },
  { icon: Mail, label: 'Email', value: 'hongnhung.xechuyendungtinphat@gmail.com' },
  { icon: Clock, label: 'Giờ làm việc', value: '08:00 – 20:00 (T2 – CN)' },
]

const ZALO_NUMBER = '0392923792'
const ZALO_URL = `https://zalo.me/${ZALO_NUMBER}`
const VIETNAMESE_PHONE_REGEX = /^(0)(3|5|7|8|9)[0-9]{8}$/

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [copied, setCopied] = useState(false)
  const [generatedMessage, setGeneratedMessage] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (status === 'error') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  async function copyToClipboard(text: string) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text)
        setCopied(true)
      } else {
        const textArea = document.createElement('textarea')
        textArea.value = text
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        setCopied(true)
      }
    } catch {
      // Bỏ qua lỗi clipboard nếu bị trình duyệt hạn chế
    }
    setTimeout(() => setCopied(false), 2500)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrorMessage('')

    const name = formData.name.trim()
    const cleanPhone = formData.phone.replace(/[\s.-]/g, '')
    const email = formData.email.trim()
    const message = formData.message.trim()

    if (!name) {
      setStatus('error')
      setErrorMessage('Vui lòng nhập họ và tên của bạn.')
      return
    }

    if (!cleanPhone || !VIETNAMESE_PHONE_REGEX.test(cleanPhone)) {
      setStatus('error')
      setErrorMessage('Vui lòng nhập số điện thoại hợp lệ (10 chữ số, ví dụ: 0392 923 792).')
      return
    }

    if (!message) {
      setStatus('error')
      setErrorMessage('Vui lòng nhập nội dung hoặc mẫu xe bạn đang quan tâm.')
      return
    }

    const compiledText = [
      'Xin chào Tín Phát, tôi cần tư vấn về xe chuyên dùng:',
      `- Họ và tên: ${name}`,
      `- Số điện thoại: ${cleanPhone}`,
      email ? `- Email: ${email}` : null,
      `- Nội dung yêu cầu: ${message}`,
      '---',
      '(Gửi từ website Xe Chuyên Dùng Tín Phát)',
    ]
      .filter(Boolean)
      .join('\n')

    setGeneratedMessage(compiledText)
    copyToClipboard(compiledText)

    // Mở Zalo trong tab mới
    window.open(ZALO_URL, '_blank', 'noopener,noreferrer')
    setStatus('success')
  }

  function handleReset() {
    setFormData({ name: '', phone: '', email: '', message: '' })
    setStatus('idle')
    setErrorMessage('')
    setCopied(false)
    setGeneratedMessage('')
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
            <h2 className="mt-6 pt-1 text-balance font-sans text-3xl font-bold uppercase leading-[1.25] tracking-normal text-foreground sm:mt-7 sm:text-4xl md:text-6xl">
              Hãy Nói Chuyện Về Chiếc Xe Kế Tiếp Của Bạn.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <div>
            <div className="grid gap-3.5 grid-cols-1">
              {info.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.06} direction="left">
                  <div className="flex h-full items-start gap-4 rounded-xl border border-border bg-card p-3.5 sm:px-4 sm:py-3.5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-md bg-primary/15 text-primary mt-0.5">
                      <item.icon className="size-4" aria-hidden="true" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-0.5 font-mono text-xs sm:text-sm font-semibold text-foreground break-words">
                        {item.value}
                      </p>
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
                  href={ZALO_URL}
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
                  href={`tel:${ZALO_NUMBER}`}
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
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="flex items-start gap-4 rounded-xl border border-primary/30 bg-primary/10 p-5">
                      <div className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                        <CheckCircle2 className="size-6" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-sans text-lg font-bold uppercase text-foreground">
                          Đã Mở Zalo & Sao Chép Nội Dung!
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          Yêu cầu của bạn đã được sao chép vào bộ nhớ tạm. Hãy{' '}
                          <strong className="text-foreground">Dán (Ctrl + V / Giữ &amp; Dán)</strong> vào khung chat Zalo để gửi cho tư vấn viên Tín Phát.
                        </p>
                      </div>
                    </div>

                    {generatedMessage && (
                      <div className="rounded-xl border border-border/80 bg-background/60 p-4">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/60">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                            Nội dung yêu cầu đã chuẩn hóa:
                          </span>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(generatedMessage)}
                            className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
                          >
                            {copied ? (
                              <>
                                <Check className="size-3.5 text-green-500" />
                                <span className="text-green-500 font-semibold">Đã chép</span>
                              </>
                            ) : (
                              <>
                                <Copy className="size-3.5" />
                                <span>Chép lại</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground/90 select-all">
                          {generatedMessage}
                        </pre>
                      </div>
                    )}

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a
                        href={ZALO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 font-mono text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-[colors,box-shadow] hover:shadow-[0_0_24px_-4px] hover:shadow-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <MessageCircle className="size-4" aria-hidden="true" />
                        Mở Lại Zalo Chat
                        <ExternalLink className="size-3.5 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3.5 font-mono text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:border-primary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <RotateCcw className="size-4" aria-hidden="true" />
                        Gửi yêu cầu khác
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="grid gap-5"
                  >
                    {status === 'error' && errorMessage && (
                      <div className="flex items-center gap-3 rounded-lg border border-destructive/40 bg-destructive/10 p-3.5 text-xs text-destructive">
                        <AlertCircle className="size-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <Field
                      label="Họ và tên *"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      placeholder="Nguyễn Văn A"
                      required
                    />

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Số điện thoại *"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        placeholder="0392 923 792"
                        required
                      />
                      <Field
                        label="Email (Tùy chọn)"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        spellCheck={false}
                        placeholder="ban@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
                      >
                        Nội dung cần tư vấn *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tôi quan tâm đến dòng xe tải chuyên dùng, thùng đông lạnh, xe ben…"
                        className="mt-2 w-full resize-none rounded-md border border-input bg-background px-4 py-3 font-mono text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      />
                    </div>

                    <div className="pt-1">
                      <motion.button
                        type="submit"
                        whileTap={{ scale: 0.98 }}
                        className="group flex w-full items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-[colors,box-shadow] hover:shadow-[0_0_30px_-4px] hover:shadow-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <MessageCircle className="size-4" aria-hidden="true" />
                        Gửi &amp; Chat Ngay Qua Zalo
                        <Send className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </motion.button>
                      <p className="mt-2 text-center font-mono text-[11px] text-muted-foreground/80">
                        ⚡ Thông tin sẽ được tự động sao chép và chuyển tiếp tới Zalo Hotline tư vấn 24/7.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
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
  value,
  onChange,
  placeholder,
  autoComplete,
  inputMode,
  spellCheck,
  required,
}: {
  label: string
  name: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  autoComplete?: string
  inputMode?: 'search' | 'text' | 'email' | 'tel' | 'url' | 'none' | 'numeric' | 'decimal'
  spellCheck?: boolean
  required?: boolean
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
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        inputMode={inputMode}
        spellCheck={spellCheck}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 font-mono text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      />
    </div>
  )
}
