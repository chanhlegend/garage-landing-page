import Link from 'next/link'
import { Share2, MessageCircle, Music2 } from 'lucide-react'
import { Logo } from '@/components/logo'

const nav = [
  { label: 'Trang chủ', href: '/#home' },
  { label: 'Giới thiệu', href: '/#about' },
  { label: 'Tất cả xe', href: '/vehicles' },
  { label: 'Dịch vụ hậu mãi', href: '/#services' },
  { label: 'Liên hệ', href: '/#contact' },
]

const socials = [
  { icon: Share2, label: 'Facebook', href: 'https://facebook.com' },
  { icon: MessageCircle, label: 'Zalo', href: 'https://zalo.me/0392923792' },
  { icon: Music2, label: 'TikTok', href: 'https://tiktok.com' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-16 md:px-8 lg:pb-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <Link href="/#home">
              <Logo size="lg" />
            </Link>
            <p className="mt-4 font-mono text-sm leading-relaxed text-muted-foreground">
              Đơn vị hàng đầu chuyên phân phối, đóng mới và tư vấn các dòng xe chuyên dùng: Xe cẩu, xe chở rác, xe ép rác, xe hút bể phốt — Ô Tô Tín Phát.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <s.icon className="size-4" aria-hidden="true" />
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
                  <Link
                    href={item.href}
                    className="font-mono text-sm text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Thông tin liên hệ
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 font-mono text-xs text-foreground">
              <li><strong className="text-primary">Hotline:</strong> 0392 923 792</li>
              <li><strong className="text-primary">Email:</strong> hongnhung.xechuyendungtinphat@gmail.com</li>
              <li><strong className="text-primary">Văn phòng:</strong> 45 đường số 1, KP.11, P. Long Trường, TP. Hồ Chí Minh</li>
              <li><strong className="text-primary">Showroom:</strong> 915, Quốc Lộ 1A, P.An Phú Đông, TP. Hồ Chí Minh</li>
              <li><strong className="text-primary">Nhà máy SX:</strong> 232 ĐT743A, P. Đông Hòa, TP. Hồ Chí Minh</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 XE CHUYÊN DÙNG TÍN PHÁT. Bảo lưu mọi quyền.
          </p>
        </div>
      </div>
    </footer>
  )
}
