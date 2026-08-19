import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  ArrowLeft,
  Truck,
  Wrench,
  Layers,
  Star,
  CheckCircle,
  HelpCircle,
  Building2,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { getVehicleById, getRelatedVehicles, vehicles } from '@/lib/vehicles'
import { VehicleGallery } from '@/components/vehicle-gallery'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return vehicles.map((v) => ({ id: v.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const vehicle = getVehicleById(id)
  if (!vehicle) return { title: 'Không tìm thấy xe — Xe Chuyên Dùng Tín Phát' }

  return {
    title: `${vehicle.model} (${vehicle.brand}) — Ô TÔ TÍN PHÁT`,
    description: vehicle.description,
  }
}

export default async function VehicleDetailPage({ params }: Props) {
  const { id } = await params
  const vehicle = getVehicleById(id)

  if (!vehicle) {
    notFound()
  }

  const related = getRelatedVehicles(vehicle.id, vehicle.category, 3)

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
            <Link href="/#vehicles" className="hover:text-primary transition-colors">
              Sản phẩm xe
            </Link>
            <span>/</span>
            <span className="text-foreground font-semibold line-clamp-1">{vehicle.model}</span>
          </nav>

          {/* Back button */}
          <div className="mt-4">
            <Link
              href="/#vehicles"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="size-4" />
              Quay lại danh sách xe
            </Link>
          </div>

          {/* Main Product Layout */}
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left Column: Image Gallery Component */}
            <div className="lg:col-span-7">
              <VehicleGallery
                images={vehicle.images && vehicle.images.length > 0 ? vehicle.images : [vehicle.image]}
                title={vehicle.model}
                category={vehicle.category}
              />
            </div>

            {/* Right Column: Specifications & CTAs */}
            <div className="flex flex-col lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                    {vehicle.category}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Nhãn hiệu: <strong className="text-foreground">{vehicle.brand}</strong>
                  </span>
                </div>
                <h1 className="mt-4 font-sans text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                  {vehicle.model}
                </h1>
              </div>

              {/* Price Banner */}
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Giá
                </p>
                <p className="mt-1 font-sans text-3xl font-bold text-primary sm:text-4xl">
                  {vehicle.price}
                </p>
              </div>

              {/* Highlight Specs List if available */}
              <div className="grid grid-cols-2 gap-3 rounded-xl border border-border bg-card p-4 font-mono text-xs">
                {vehicle.payload && (
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Tải trọng</span>
                    <span className="font-bold text-foreground">{vehicle.payload}</span>
                  </div>
                )}
                {vehicle.boxSize && (
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Kích thước lòng thùng</span>
                    <span className="font-bold text-foreground">{vehicle.boxSize}</span>
                  </div>
                )}
                {vehicle.overallSize && (
                  <div className="col-span-2">
                    <span className="text-muted-foreground block text-[10px] uppercase">Kích thước tổng thể (DxRxC)</span>
                    <span className="font-bold text-foreground">{vehicle.overallSize}</span>
                  </div>
                )}
                {vehicle.curbWeight && (
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Tự trọng</span>
                    <span className="font-bold text-foreground">{vehicle.curbWeight}</span>
                  </div>
                )}
                {vehicle.grossWeight && (
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Trọng lượng toàn bộ</span>
                    <span className="font-bold text-foreground">{vehicle.grossWeight}</span>
                  </div>
                )}
                {vehicle.workingRadius && (
                  <div className="col-span-2">
                    <span className="text-muted-foreground block text-[10px] uppercase">Bán kính làm việc tối đa</span>
                    <span className="font-bold text-foreground">{vehicle.workingRadius}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href="tel:0392923792"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 font-mono text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-all hover:shadow-[0_0_25px_-3px] hover:shadow-primary"
                >
                  <Phone className="size-5" />
                  Hotline hỗ trợ: 0392 923 792
                </a>
                <a
                  href="https://zalo.me/0392923792"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 font-mono text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <MessageCircle className="size-5 text-primary" />
                  Tư vấn qua Zalo
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Product Overview Articles */}
          {vehicle.overview && (
            <div className="mt-16 space-y-8">
              <div className="border-b border-border pb-4">
                <span className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-primary">
                  THÔNG TIN SẢN PHẨM
                </span>
                <h2 className="mt-2 font-sans text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                  {vehicle.model}
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {vehicle.overview.summary && (
                  <div className="md:col-span-2 rounded-2xl border border-primary/30 bg-primary/5 p-6">
                    <p className="font-mono text-sm leading-relaxed text-foreground font-medium whitespace-pre-line">
                      {vehicle.overview.summary}
                    </p>
                  </div>
                )}
                {vehicle.overview.exterior && (
                  <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                    <h3 className="font-sans text-lg font-bold uppercase text-foreground flex items-center gap-2">
                      <Truck className="size-5 text-primary" />
                      Ngoại thất
                    </h3>
                    <p className="font-mono text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {vehicle.overview.exterior}
                    </p>
                  </div>
                )}
                {vehicle.overview.interior && (
                  <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                    <h3 className="font-sans text-lg font-bold uppercase text-foreground flex items-center gap-2">
                      <Layers className="size-5 text-primary" />
                      Nội thất
                    </h3>
                    <p className="font-mono text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {vehicle.overview.interior}
                    </p>
                  </div>
                )}
                {vehicle.overview.engineAndChassis && (
                  <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                    <h3 className="font-sans text-lg font-bold uppercase text-foreground flex items-center gap-2">
                      <Wrench className="size-5 text-primary" />
                      Động cơ & Khung gầm
                    </h3>
                    <p className="font-mono text-xs sm:text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                      {vehicle.overview.engineAndChassis}
                    </p>
                  </div>
                )}
                {vehicle.overview.craneInfo && (
                  <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                    <h3 className="font-sans text-lg font-bold uppercase text-foreground flex items-center gap-2">
                      <ShieldCheck className="size-5 text-primary" />
                      {vehicle.category === 'Xe Cẩu'
                        ? 'Cần cẩu thủy lực SOOSAN'
                        : vehicle.category === 'Xe Chở Rác' || vehicle.category === 'Xe Ép Rác'
                        ? 'Thùng chứa & Thiết bị chuyên dùng'
                        : vehicle.category === 'Xe Hút Bể Phốt'
                        ? 'Bồn chứa & Hệ thống hút chân không'
                        : 'Hệ thống chuyên dùng'}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {vehicle.overview.craneInfo}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Highlights List Section */}
          {vehicle.highlightsList && vehicle.highlightsList.length > 0 && (
            <div className="mt-16 rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4">
              <h3 className="font-sans text-xl font-bold uppercase text-foreground flex items-center gap-2">
                <Star className="size-6 text-primary" />
                ĐẶC ĐIỂM NỔI BẬT
              </h3>
              <ul className="space-y-3 font-mono text-xs sm:text-sm text-muted-foreground">
                {vehicle.highlightsList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-lg border border-border bg-background p-4">
                    <span className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Specs Tables */}
          {(vehicle.vehicleTechSpecs || vehicle.craneTechSpecs) && (
            <div className="mt-16 space-y-12">
              <div className="border-b border-border pb-4">
                <span className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-primary">
                  THÔNG SỐ KĨ THUẬT
                </span>
                <h2 className="mt-2 font-sans text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                  Thông Số Kỹ Thuật Chi Tiết
                </h2>
              </div>

              {/* Table 1: Vehicle Specs */}
              {vehicle.vehicleTechSpecs && (
                <div className="space-y-4">
                  <h3 className="font-sans text-xl font-bold uppercase text-foreground border-l-4 border-primary pl-3">
                    1. Xe cơ sở {vehicle.brand}
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-border bg-card">
                    <table className="w-full text-left font-mono text-xs">
                      <thead>
                        <tr className="border-b border-border bg-muted/60 text-primary">
                          <th className="px-5 py-3.5 font-bold uppercase w-1/2">Thông số</th>
                          <th className="px-5 py-3.5 font-bold uppercase w-1/2">Giá trị</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {vehicle.vehicleTechSpecs.map((spec, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-background/40' : ''}>
                            <td className="px-5 py-3 font-semibold text-foreground">{spec.label}</td>
                            <td className="px-5 py-3 text-muted-foreground">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Table 2: Specialized Equipment Specs */}
              {vehicle.craneTechSpecs && (
                <div className="space-y-4">
                  <h3 className="font-sans text-xl font-bold uppercase text-foreground border-l-4 border-primary pl-3">
                    2.{' '}
                    {vehicle.category === 'Xe Cẩu'
                      ? 'Cần Cẩu Thủy Lực SOOSAN'
                      : vehicle.category === 'Xe Chở Rác' || vehicle.category === 'Xe Ép Rác'
                      ? 'Thùng Chứa & Cơ Cấu Chuyên Dùng'
                      : vehicle.category === 'Xe Hút Bể Phốt'
                      ? 'Bồn Chứa & Hệ Thống Hút Chân Không'
                      : 'Hệ Thống Thiết Bị Chuyên Dùng'}
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-border bg-card">
                    <table className="w-full text-left font-mono text-xs">
                      <thead>
                        <tr className="border-b border-border bg-muted/60 text-primary">
                          <th className="px-5 py-3.5 font-bold uppercase w-1/2">Thông số</th>
                          <th className="px-5 py-3.5 font-bold uppercase w-1/2">Giá trị</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {vehicle.craneTechSpecs.map((spec, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-background/40' : ''}>
                            <td className="px-5 py-3 font-semibold text-foreground">{spec.label}</td>
                            <td className="px-5 py-3 text-muted-foreground">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Applications Section */}
          {vehicle.applications && vehicle.applications.length > 0 && (
            <div className="mt-16 rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4">
              <h3 className="font-sans text-xl font-bold uppercase text-foreground flex items-center gap-2">
                <Building2 className="size-6 text-primary" />
                ỨNG DỤNG CỦA XE
              </h3>
              <div className="grid gap-3 sm:grid-cols-3 font-mono text-xs sm:text-sm">
                {vehicle.applications.map((app, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-background p-4">
                    <CheckCircle className="size-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Section */}
          {vehicle.benefits && vehicle.benefits.length > 0 && (
            <div className="mt-16 rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4">
              <h3 className="font-sans text-xl font-bold uppercase text-foreground flex items-center gap-2">
                <CheckCircle className="size-6 text-primary" />
                LỢI ÍCH KHI SỬ DỤNG
              </h3>
              <ul className="space-y-3 font-mono text-xs sm:text-sm text-muted-foreground">
                {vehicle.benefits.map((b, i) => (
                  <li key={i} className="rounded-xl border border-border bg-background p-4 text-foreground leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQs Section */}
          {vehicle.faqs && vehicle.faqs.length > 0 && (
            <div className="mt-16 rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
              <h3 className="font-sans text-xl font-bold uppercase text-foreground flex items-center gap-2">
                <HelpCircle className="size-6 text-primary" />
                CÂU HỎI THƯỜNG GẶP
              </h3>
              <div className="space-y-4 font-mono text-xs sm:text-sm">
                {vehicle.faqs.map((faq, i) => (
                  <div key={i} className="rounded-xl border border-border bg-background p-5 space-y-2">
                    <p className="font-bold text-primary flex items-start gap-2">
                      <span>Q:</span>
                      <span>{faq.question}</span>
                    </p>
                    <p className="text-muted-foreground leading-relaxed pl-5">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Warranty Terms Section */}
          {vehicle.warrantyInfo && (
            <div className="mt-16 rounded-2xl border border-primary/40 bg-card p-6 md:p-8 space-y-4">
              <h3 className="font-sans text-xl font-bold uppercase text-primary flex items-center gap-2">
                <ShieldCheck className="size-6" />
                CHẾ ĐỘ BẢO HÀNH
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 font-mono text-xs sm:text-sm">
                <div className="rounded-xl border border-border bg-background p-5 space-y-2">
                  <p className="font-bold text-primary uppercase">Xe cơ sở:</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {vehicle.warrantyInfo.chassis}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background p-5 space-y-2">
                  <p className="font-bold text-primary uppercase">Thùng xe và thiết bị thủy lực chuyên dùng:</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {vehicle.warrantyInfo.crane}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Related Vehicles Section */}
          {related.length > 0 && (
            <div className="mt-20 space-y-8">
              <div className="border-b border-border pb-4">
                <span className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-primary">
                  Sản phẩm tương tự
                </span>
                <h2 className="mt-2 font-sans text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                  Các Mẫu Xe Cùng Danh Mục
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((relVehicle) => (
                  <Link
                    key={relVehicle.id}
                    href={`/vehicles/${relVehicle.id}`}
                    className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden bg-muted">
                      <img
                        src={relVehicle.image}
                        alt={relVehicle.model}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 rounded-md bg-background/80 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-foreground backdrop-blur">
                        {relVehicle.category}
                      </span>
                    </div>
                    <div className="p-5 space-y-2">
                      <p className="font-mono text-xs uppercase tracking-widest text-primary">
                        {relVehicle.brand}
                      </p>
                      <h3 className="font-sans text-lg font-bold uppercase text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                        {relVehicle.model}
                      </h3>
                      <p className="font-sans text-xl font-bold text-foreground pt-2">
                        {relVehicle.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  )
}
