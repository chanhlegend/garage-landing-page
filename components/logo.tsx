import React from 'react'

export function LogoMark({ className = 'size-9' }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(234,179,8,0.35)]"
      >
        <defs>
          <linearGradient id="logo-grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="logo-grad-accent" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#78350F" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
        </defs>

        {/* Shield Outer Hexagon */}
        <polygon
          points="50,6 90,26 90,74 50,94 10,74 10,26"
          fill="#18181B"
          stroke="url(#logo-grad-primary)"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Inner Shield Contour */}
        <polygon
          points="50,14 82,30 82,70 50,86 18,70 18,30"
          fill="#09090B"
          stroke="url(#logo-grad-accent)"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* Specialized Truck / Crane Stylized Emblem */}
        {/* Truck Cabin */}
        <rect x="30" y="52" width="26" height="20" rx="3" fill="url(#logo-grad-primary)" />
        {/* Cabin Window */}
        <path d="M34 55 H50 V62 H34 Z" fill="#09090B" opacity="0.9" />

        {/* Crane Arm / Hydraulic Boom */}
        <path
          d="M48 52 L68 34 L74 38 L54 56 Z"
          fill="url(#logo-grad-primary)"
        />

        {/* Cable & Hook */}
        <path d="M72 37 V48 L69 51" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Heavy Wheels */}
        <circle cx="36" cy="74" r="5" fill="#FBBF24" stroke="#18181B" strokeWidth="2" />
        <circle cx="58" cy="74" r="5" fill="#FBBF24" stroke="#18181B" strokeWidth="2" />
        <circle cx="70" cy="74" r="5" fill="#FBBF24" stroke="#18181B" strokeWidth="2" />

        {/* Power Accent Star/Spark */}
        <polygon points="50,22 52,27 57,29 52,31 50,36 48,31 43,29 48,27" fill="#FBBF24" />
      </svg>
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
  const markSize = size === 'sm' ? 'size-7' : size === 'lg' ? 'size-11' : 'size-9'
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
