import { Share2, MessageCircle, Music2 } from 'lucide-react'

const nav = [
  { label: 'Trang chủ', href: '#home' },
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Sản phẩm', href: '#vehicles' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Liên hệ', href: '#contact' },
]

const socials = [
  { icon: Share2, label: 'Facebook', href: 'https://facebook.com' },
  { icon: MessageCircle, label: 'Zalo', href: 'https://zalo.me' },
  { icon: Music2, label: 'TikTok', href: 'https://tiktok.com' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <span className="font-sans text-2xl font-bold uppercase tracking-widest text-foreground">
              APEX<span className="text-primary">.</span>MOTORS
            </span>
            <p className="mt-4 font-mono text-sm leading-relaxed text-muted-foreground">
              Showroom xe cao cấp và dịch vụ chăm sóc ô tô chuyên nghiệp — nơi mỗi hành trình bắt
              đầu từ sự tin cậy.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Điều hướng
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-mono text-sm text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Liên hệ
            </h3>
            <ul className="mt-4 flex flex-col gap-3 font-mono text-sm text-foreground">
              <li>Hotline: 0909 888 666</li>
              <li>Email: sales@apexmotors.vn</li>
              <li>128 Nguyễn Văn Linh, Q.7, TP.HCM</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 APEX MOTORS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
