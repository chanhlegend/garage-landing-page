import React from 'react'

export function LogoMark({ className = 'size-10' }: { className?: string }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 overflow-hidden rounded-lg bg-white p-0.5 shadow-md ring-1 ring-border/50 ${className}`}
    >
      <img
        src="/cars/logo.jpg"
        alt="Tín Phát Auto"
        className="h-full w-full object-contain"
      />
    </div>
  )
}

export function Logo({
  showText = true,
  size = 'md',
  className = '',
}: {
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const markSize = size === 'sm' ? 'size-8' : size === 'lg' ? 'size-12' : 'size-10'
  const titleSize =
    size === 'sm'
      ? 'text-sm'
      : size === 'lg'
        ? 'text-2xl'
        : 'text-lg sm:text-xl'

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markSize} />
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-sans font-extrabold uppercase tracking-tight text-foreground ${titleSize}`}
          >
            XE CHUYÊN DỤNG
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-primary sm:text-xs">
            SÀI GÒN
          </span>
        </div>
      )}
    </div>
  )
}

