import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { VehicleCatalog } from '@/components/vehicle-catalog'
import { ShieldCheck, Truck, Award, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Danh Sách Xe Chuyên Dùng — XE CHUYÊN DÙNG TÍN PHÁT',
  description:
    'Tổng hợp đầy đủ các dòng xe chuyên dùng chính hãng: Xe cẩu, xe chở rác, xe ép rác, xe hút bể phốt từ các thương hiệu hàng đầu Hyundai, Hino, Isuzu, Chenglong, Dongfeng, Thaco.',
}

const stats = [
  { icon: Truck, label: 'Dòng xe', sub: 'Đa dạng chủng loại' },
  { icon: ShieldCheck, label: '100% Chính hãng', sub: 'Đạt chuẩn Đăng Kiểm' },
  { icon: Award, label: 'Bảo hành 3 năm', sub: 'Hậu mãi tận tâm' },
  { icon: Clock, label: 'Giao xe nhanh', sub: 'Hỗ trợ thủ tục trọn gói' },
]

export default function VehiclesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-28 pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-foreground font-semibold">Danh sách xe chuyên dùng</span>
          </nav>

          {/* Hero Header for Catalog */}
          <div className="mt-8 mb-10 space-y-6">
            <div className="flex flex-col items-start gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="size-2 rounded-full bg-primary animate-pulse" />
                DANH MỤC SẢN PHẨM CHUYÊN DÙNG
              </span>
              <h1 className="font-sans text-3xl font-extrabold uppercase leading-normal tracking-normal text-foreground sm:text-4xl md:text-5xl pt-1">
                Tất Cả Mẫu Xe Chuyên Dùng
              </h1>
              <p className="max-w-3xl font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Khám phá đầy đủ các mẫu xe cẩu tự hành, xe chở rác, xe ép rác môi trường và xe hút bể phốt chuyên dùng chính hãng được thiết kế, gia công thùng và phân phối bởi Ô Tô Tín Phát.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-2">
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card/60 p-3.5 sm:p-4 backdrop-blur"
                  >
                    <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-sans text-xs sm:text-sm font-bold uppercase text-foreground truncate">
                        {stat.label}
                      </p>
                      <p className="font-mono text-[11px] text-muted-foreground truncate">
                        {stat.sub}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Interactive Catalog Component */}
          <VehicleCatalog />
        </div>
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  )
}
