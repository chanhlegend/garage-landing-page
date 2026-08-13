'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function VehicleGallery({
  images,
  title,
  category,
}: {
  images: string[]
  title: string
  category: string
}) {
  const [activeIdx, setActiveIdx] = useState(0)

  function prevImage() {
    setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  function nextImage() {
    setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-4">
      {/* Main Image Showcase */}
      <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-border bg-muted">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIdx}
            initial={{ opacity: 0.85, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.85, scale: 1.01 }}
            transition={{ duration: 0.2 }}
            src={images[activeIdx]}
            alt={`${title} - Ảnh ${activeIdx + 1}`}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

        {/* Category Badge overlay */}
        <span className="absolute top-4 left-4 rounded-md bg-background/80 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-foreground backdrop-blur">
          {category}
        </span>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              aria-label="Ảnh trước"
              className="absolute left-3 top-1/2 -translate-y-1/2 grid size-10 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={nextImage}
              aria-label="Ảnh tiếp theo"
              className="absolute right-3 top-1/2 -translate-y-1/2 grid size-10 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}

        <span className="absolute bottom-4 left-4 rounded-md bg-background/80 px-3 py-1 font-mono text-xs font-semibold text-foreground backdrop-blur">
          Ảnh {activeIdx + 1} / {images.length}
        </span>
      </div>

      {/* Thumbnails strip */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`relative aspect-[16/11] overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                idx === activeIdx
                  ? 'border-primary ring-2 ring-primary/40'
                  : 'border-border opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`${title} thumbnail ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
