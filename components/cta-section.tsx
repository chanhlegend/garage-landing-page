"use client";

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ClipboardCheck,
  CreditCard,
  FileCheck2,
  Truck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Tư Vấn Đúng Nhu Cầu",
    desc: "Phân tích tải trọng, địa hình hoạt động và tư vấn cấu hình xe chassis cùng trang thiết bị chuyên dùng tối ưu chi phí.",
  },
  {
    step: "02",
    icon: CreditCard,
    title: "Hỗ Trợ Tài Chính 80%",
    desc: "Liên kết hệ thống ngân hàng lớn, thủ tục trả góp đơn giản, thẩm định và phê duyệt hồ sơ nhanh gọn trong 24 – 48 giờ.",
  },
  {
    step: "03",
    icon: FileCheck2,
    title: "Gia Công & Đăng Kiểm Trọn Gói",
    desc: "Đóng thùng tại xưởng cơ khí hiện đại, hoàn tất toàn bộ hồ sơ bản vẽ và giấy chứng nhận xuất xưởng của Cục Đăng Kiểm.",
  },
  {
    step: "04",
    icon: Truck,
    title: "Bàn Giao & Hướng Dẫn Tận Nơi",
    desc: "Giao xe tận tay khách hàng trên 63 tỉnh thành, chuyển giao công nghệ vận hành và kích hoạt chính sách bảo dưỡng định kỳ.",
  },
];

export function CtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-border/70 bg-gradient-to-b from-background via-card/40 to-background py-20 md:py-28">
      {/* Background ambient light aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 size-[500px] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 size-[400px] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Process & Customer Journey */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                <Sparkles className="size-3.5 text-accent animate-pulse" />
                <span>Quy Trình Tinh Gọn • Bàn Giao Trọn Gói</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-sans text-3xl font-extrabold uppercase leading-[1.25] tracking-wide text-foreground sm:text-4xl md:text-5xl">
                Sẵn Sàng Tìm
                <span className="block mt-1 bg-gradient-to-r from-red-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  Chiếc Xe Kế Tiếp?
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="font-mono text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground max-w-2xl">
                Dù bạn đang mở rộng đội xe vận tải hay đầu tư mới xe môi trường công ích,
                Ô Tô Tín Phát đồng hành trọn gói từ thiết kế bản vẽ đến khi xe lăn bánh
                hoàn tất trên đường.
              </p>
            </Reveal>

            {/* 4-Step Customer Process Grid */}
            <Reveal delay={0.18}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {steps.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card/70 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="size-4.5" />
                        </div>
                        <span className="font-mono text-xs font-bold text-muted-foreground/60 group-hover:text-accent transition-colors">
                          BƯỚC {item.step}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-sans text-xs sm:text-sm font-bold uppercase text-foreground">
                          {item.title}
                        </h4>
                        <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* Action Buttons & Hotline Info */}
            <Reveal delay={0.24}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all"
                >
                  <span>Nhận Tư Vấn & Báo Giá Ngay</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/vehicles"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <span>Khám Phá 24+ Dòng Xe</span>
                </Link>
              </div>

              {/* Direct Hotline Pill */}
              <div className="flex items-center gap-2 pt-2 text-xs font-mono text-muted-foreground">
                <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Trực ban tư vấn kỹ thuật:</span>
                <a
                  href="tel:0392923792"
                  className="font-bold text-foreground hover:text-accent transition-colors underline decoration-accent/50 underline-offset-2"
                >
                  0392 923 792 (Hotline & Zalo 24/7)
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Prominent Showroom & Delivery Visual Showcase */}
          <div className="lg:col-span-5">
            <Reveal delay={0.18}>
              <div className="group relative rounded-3xl border border-primary/30 bg-card/90 p-3 sm:p-4 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-primary/60">
                {/* Image Container with Crisp Contrast */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-2xl bg-muted border border-border/70">
                  <img
                    src="/cars/z7958350577287_0f3a2ae7c592dd343f9be45d9f2b96a1.jpg"
                    alt="Showroom và Trung Tâm Bàn Giao Xe Chuyên Dùng Ô Tô Tín Phát"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-106"
                  />

                  {/* Gentle gradient shadow for text legibility at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Top Floating Tag */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/15">
                      <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                      Sẵn Xe Giao Ngay
                    </span>
                    <span className="rounded-full bg-primary px-3 py-1 font-mono text-[10px] font-bold uppercase text-white shadow-md">
                      Showroom Tín Phát
                    </span>
                  </div>

                  {/* Bottom Floating Info Card */}
                  <div className="absolute bottom-3 left-3 right-3 space-y-1 rounded-xl bg-black/75 p-3.5 backdrop-blur-md border border-white/15">
                    <div className="flex items-center justify-between">
                      <p className="font-sans text-xs sm:text-sm font-bold uppercase text-white">
                        Trung Tâm Bàn Giao Xe Toàn Quốc
                      </p>
                      <span className="font-mono text-[10px] font-bold text-accent uppercase">
                        63 Tỉnh Thành
                      </span>
                    </div>
                    <p className="font-mono text-[11px] text-zinc-300">
                      Đầy đủ các dòng xe cẩu, xe ép rác, xe hút bể phốt và xe chở rác
                    </p>
                  </div>
                </div>

                {/* Bottom Trust Chips */}
                <div className="mt-3.5 grid grid-cols-3 gap-2 text-center font-mono text-[11px]">
                  <div className="rounded-xl border border-border/80 bg-secondary/50 p-2 text-foreground font-semibold">
                    <span className="text-accent font-bold block text-xs">100%</span>
                    Hồ Sơ Hợp Chuẩn
                  </div>
                  <div className="rounded-xl border border-border/80 bg-secondary/50 p-2 text-foreground font-semibold">
                    <span className="text-accent font-bold block text-xs">24/7</span>
                    Hỗ Trợ Kỹ Thuật
                  </div>
                  <div className="rounded-xl border border-border/80 bg-secondary/50 p-2 text-foreground font-semibold">
                    <span className="text-accent font-bold block text-xs">Trọn Gói</span>
                    Thủ Tục Lăn Bánh
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
