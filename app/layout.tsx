import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Oswald, Inter } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'APEX MOTORS — Gara Ô Tô Cao Cấp',
  description:
    'Showroom xe cao cấp và dịch vụ chăm sóc ô tô chuyên nghiệp. Khám phá những mẫu xe được tuyển chọn kỹ lưỡng cùng dịch vụ hậu mãi đáng tin cậy.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#141414',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      className={`dark ${oswald.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background font-mono antialiased overflow-x-hidden relative max-w-full">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-primary-foreground"
        >
          Bỏ qua tới nội dung chính
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
