'use client'

import { useState, useMemo, useEffect, useRef, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronLeft,
  ChevronRight,
  Truck,
  Fuel,
  Gauge,
  Phone,
  MessageCircle,
  ArrowRight,
  RotateCcw,
  LayoutGrid,
  List,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'
import { vehicles, categories, type Vehicle } from '@/lib/vehicles'
import { cn } from '@/lib/utils'

const ITEMS_PER_PAGE = 12

function VehicleCatalogInner() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const initialCategory = searchParams.get('category') || 'Tất cả'
  const initialBrand = searchParams.get('brand') || 'Tất cả'
  const initialSearch = searchParams.get('search') || ''
  const initialSort = searchParams.get('sort') || 'name-asc'
  const initialPage = parseInt(searchParams.get('page') || '1', 10)

  const [searchQuery, setSearchQuery] = useState(initialSearch)
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory)
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrand)
  const [sortBy, setSortBy] = useState<string>(initialSort)
  const [currentPage, setCurrentPage] = useState<number>(initialPage)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const topRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  // Ensure window starts at top when loading the catalog page
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  // Extract unique brands (excluding generic 'Chuyên Dùng')
  const brands = useMemo(() => {
    const set = new Set<string>()
    vehicles.forEach((v) => {
      if (v.brand && v.brand.trim().toLowerCase() !== 'chuyên dùng') {
        set.add(v.brand.trim())
      }
    })
    return ['Tất cả', ...Array.from(set).sort()]
  }, [])

  // Sync state with URL only when user changes filters/search/page
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const params = new URLSearchParams()
    if (selectedCategory && selectedCategory !== 'Tất cả') params.set('category', selectedCategory)
    if (selectedBrand && selectedBrand !== 'Tất cả') params.set('brand', selectedBrand)
    if (searchQuery.trim()) params.set('search', searchQuery.trim())
    if (sortBy && sortBy !== 'name-asc') params.set('sort', sortBy)
    if (currentPage > 1) params.set('page', currentPage.toString())

    const queryStr = params.toString()
    const url = queryStr ? `/vehicles?${queryStr}` : '/vehicles'
    router.replace(url, { scroll: false })
  }, [selectedCategory, selectedBrand, searchQuery, sortBy, currentPage, router])

  // Category counts dynamically calculated based on active brand and search filters
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'Tất cả': 0 }
    categories.forEach((c) => {
      counts[c] = 0
    })

    const matchingVehicles = vehicles.filter((v) => {
      // Brand Filter
      if (selectedBrand !== 'Tất cả' && v.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false
      }
      // Search Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim()
        const matchModel = v.model.toLowerCase().includes(q)
        const matchBrand = v.brand.toLowerCase().includes(q)
        const matchDesc = v.description.toLowerCase().includes(q)
        const matchCat = v.category.toLowerCase().includes(q)
        const matchPayload = v.payload?.toLowerCase().includes(q) || false
        if (!matchModel && !matchBrand && !matchDesc && !matchCat && !matchPayload) {
          return false
        }
      }
      return true
    })

    matchingVehicles.forEach((v) => {
      counts['Tất cả']++
      if (counts[v.category] !== undefined) {
        counts[v.category]++
      }
    })

    return counts
  }, [selectedBrand, searchQuery])

  // Filtered and Sorted Vehicles
  const filteredVehicles = useMemo(() => {
    return vehicles
      .filter((v) => {
        // Category Filter
        if (selectedCategory !== 'Tất cả' && v.category !== selectedCategory) {
          return false
        }
        // Brand Filter
        if (selectedBrand !== 'Tất cả' && v.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
          return false
        }
        // Search Filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim()
          const matchModel = v.model.toLowerCase().includes(q)
          const matchBrand = v.brand.toLowerCase().includes(q)
          const matchDesc = v.description.toLowerCase().includes(q)
          const matchCat = v.category.toLowerCase().includes(q)
          const matchPayload = v.payload?.toLowerCase().includes(q) || false
          if (!matchModel && !matchBrand && !matchDesc && !matchCat && !matchPayload) {
            return false
          }
        }
        return true
      })
      .sort((a, b) => {
        if (sortBy === 'name-desc') return b.model.localeCompare(a.model, 'vi')
        return a.model.localeCompare(b.model, 'vi')
      })
  }, [selectedCategory, selectedBrand, searchQuery, sortBy])

  // Pagination calculation
  const totalPages = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE) || 1
  const paginatedVehicles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredVehicles.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredVehicles, currentPage])

  // Reset page to 1 when filters change
  function handleCategorySelect(cat: string) {
    setSelectedCategory(cat)
    setCurrentPage(1)
  }

  function handleBrandSelect(brand: string) {
    setSelectedBrand(brand)
    setCurrentPage(1)
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  function handleResetFilters() {
    setSearchQuery('')
    setSelectedCategory('Tất cả')
    setSelectedBrand('Tất cả')
    setSortBy('name-asc')
    setCurrentPage(1)
  }

  function handlePageChange(page: number) {
    setCurrentPage(page)
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const isFiltered =
    selectedCategory !== 'Tất cả' ||
    selectedBrand !== 'Tất cả' ||
    searchQuery.trim() !== '' ||
    sortBy !== 'name-asc'

  return (
    <div ref={topRef} className="space-y-8">
      {/* Search & Filter Toolbar */}
      <div className="rounded-2xl border border-border bg-card/60 p-5 md:p-6 backdrop-blur-xl shadow-xl space-y-5">
        {/* Top bar: Search + Brand + Sort + View */}
        <div className="grid gap-4 md:grid-cols-12 md:items-center">
          {/* Search Box */}
          <div className="relative md:col-span-6 lg:col-span-6">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Tìm theo tên xe, tải trọng, quy cách (VD: H150, 5 khối, Soosan)..."
              className="w-full rounded-xl border border-border bg-background/80 py-2.5 pl-10 pr-10 font-mono text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Xóa tìm kiếm"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          {/* Brand Filter */}
          <div className="md:col-span-3 lg:col-span-3">
            <select
              value={selectedBrand}
              onChange={(e) => handleBrandSelect(e.target.value)}
              className="w-full rounded-xl border border-border bg-background/80 px-3.5 py-2.5 font-mono text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all cursor-pointer"
            >
              <option value="Tất cả">Tất cả hãng xe</option>
              {brands
                .filter((b) => b !== 'Tất cả' && b.trim().toLowerCase() !== 'chuyên dùng')
                .map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="md:col-span-3 lg:col-span-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full rounded-xl border border-border bg-background/80 px-3.5 py-2.5 font-mono text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all cursor-pointer"
            >
              <option value="name-asc">Sắp xếp: A → Z</option>
              <option value="name-desc">Sắp xếp: Z → A</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="hidden lg:col-span-1 lg:flex justify-end gap-1">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              aria-label="Dạng lưới"
              className={cn(
                'grid size-10 place-items-center rounded-lg border transition-colors',
                viewMode === 'grid'
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-muted-foreground hover:text-foreground'
              )}
            >
              <LayoutGrid className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              aria-label="Dạng danh sách"
              className={cn(
                'grid size-10 place-items-center rounded-lg border transition-colors',
                viewMode === 'list'
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-muted-foreground hover:text-foreground'
              )}
            >
              <List className="size-4" />
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-t border-border/80 pt-4">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mr-1 hidden sm:inline-block">
            Danh mục:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat
            const count = categoryCounts[cat] || 0
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategorySelect(cat)}
                className={cn(
                  'group flex items-center gap-2 rounded-lg px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all',
                  isSelected
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : 'border border-border bg-background/50 text-muted-foreground hover:border-primary/50 hover:text-foreground'
                )}
              >
                <span>{cat}</span>
                <span
                  className={cn(
                    'rounded-full px-1.5 py-0.2 text-[10px] font-bold',
                    isSelected
                      ? 'bg-primary-foreground/20 text-primary-foreground'
                      : 'bg-muted text-muted-foreground group-hover:text-foreground'
                  )}
                >
                  {count}
                </span>
              </button>
            )
          })}

          {/* Reset Filters button if any active filter */}
          {isFiltered && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="ml-auto flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 font-mono text-xs text-red-400 hover:bg-red-500/20 transition-colors"
            >
              <RotateCcw className="size-3" />
              <span>Đặt lại bộ lọc</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Header: Count & Active Info */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span>Tìm thấy</span>
          <strong className="text-foreground text-sm font-bold">{filteredVehicles.length}</strong>
          <span>mẫu xe chuyên dùng</span>
        </div>

        {totalPages > 1 && (
          <div className="font-mono text-xs text-muted-foreground">
            Trang <strong className="text-foreground">{currentPage}</strong> / {totalPages} (Hiển thị{' '}
            {(currentPage - 1) * ITEMS_PER_PAGE + 1} -{' '}
            {Math.min(currentPage * ITEMS_PER_PAGE, filteredVehicles.length)})
          </div>
        )}
      </div>

      {/* Vehicle Grid / List View */}
      {paginatedVehicles.length > 0 ? (
        <div
          className={cn(
            'grid gap-6',
            viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1'
          )}
        >
          {paginatedVehicles.map((vehicle, index) => (
            <CatalogVehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              viewMode={viewMode}
              priority={index < 3}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-2xl border border-dashed border-border bg-card/40 p-12 text-center space-y-4">
          <div className="mx-auto grid size-16 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary">
            <Truck className="size-8" />
          </div>
          <h3 className="font-sans text-xl font-bold uppercase text-foreground">
            Không tìm thấy xe phù hợp
          </h3>
          <p className="mx-auto max-w-md font-mono text-xs sm:text-sm text-muted-foreground">
            Không có kết quả nào khớp với từ khóa{' '}
            {searchQuery && <strong className="text-foreground">"{searchQuery}"</strong>} hoặc bộ lọc hiện tại.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
            >
              <RotateCcw className="size-4" />
              Xem tất cả xe
            </button>
            <a
              href="tel:0392923792"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Phone className="size-4 text-primary" />
              Liên hệ đặt xe theo yêu cầu
            </a>
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          <button
            type="button"
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            aria-label="Trang trước"
            className="flex items-center gap-1 rounded-lg border border-border bg-card px-3 py-2 font-mono text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft className="size-4" />
            <span className="hidden sm:inline">Trước</span>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            // Show first, last, current, and surrounding pages
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => handlePageChange(page)}
                  className={cn(
                    'grid size-10 place-items-center rounded-lg border font-mono text-xs font-bold transition-all',
                    currentPage === page
                      ? 'border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20'
                      : 'border-border bg-card text-muted-foreground hover:border-primary/60 hover:text-foreground'
                  )}
                >
                  {page}
                </button>
              )
            } else if (
              (page === currentPage - 2 && page > 1) ||
              (page === currentPage + 2 && page < totalPages)
            ) {
              return (
                <span key={page} className="px-1 text-muted-foreground font-mono text-xs">
                  ...
                </span>
              )
            }
            return null
          })}

          <button
            type="button"
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            aria-label="Trang tiếp theo"
            className="flex items-center gap-1 rounded-lg border border-border bg-card px-3 py-2 font-mono text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-30 disabled:pointer-events-none"
          >
            <span className="hidden sm:inline">Sau</span>
            <ChevronRight className="size-4" />
          </button>
        </div>
      )}

      {/* Bottom Consultation Banner */}
      <div className="mt-16 rounded-2xl border border-primary/40 bg-gradient-to-r from-primary/10 via-card to-background p-8 md:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 -mr-16 -mt-16 size-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 grid gap-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-primary flex items-center gap-2">
              <ShieldCheck className="size-4" />
              ĐÓNG MỚI THEO YÊU CẦU
            </span>
            <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-wide text-foreground">
              Không tìm thấy mẫu xe hoặc quy cách bạn cần?
            </h3>
            <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Ô Tô Tín Phát nhận tư vấn, thiết kế bản vẽ và thi công đóng mới thùng xe chuyên dùng (Xe cẩu, Xe chở rác, Xe ép rác, Xe hút bể phốt) trên mọi nền xe tải (Hino, Isuzu, Hyundai, Chenglong, Dongfeng, Thaco...) theo đúng quy chuẩn Cục Đăng Kiểm Việt Nam.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
            <a
              href="tel:0392923792"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg hover:shadow-primary/30 transition-all"
            >
              <Phone className="size-4" />
              Gọi Hotline: 0392 923 792
            </a>
            <a
              href="https://zalo.me/0392923792"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background/80 px-6 py-3.5 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <MessageCircle className="size-4 text-primary" />
              Nhắn tin Zalo tư vấn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function CatalogVehicleCard({
  vehicle,
  viewMode,
  priority,
}: {
  vehicle: Vehicle
  viewMode: 'grid' | 'list'
  priority?: boolean
}) {
  if (viewMode === 'list') {
    return (
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 transition-all duration-300 hover:border-primary/60 hover:shadow-xl">
        <div className="grid gap-6 md:grid-cols-12 md:items-center p-5 md:p-6">
          {/* Image */}
          <Link
            href={`/vehicles/${vehicle.id}`}
            className="relative aspect-[16/10] md:col-span-4 overflow-hidden rounded-xl bg-muted shrink-0"
          >
            <img
              src={vehicle.image}
              alt={vehicle.model}
              loading={priority ? 'eager' : 'lazy'}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute left-3 top-3 rounded-md bg-background/90 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur">
              {vehicle.category}
            </span>
          </Link>

          {/* Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                {vehicle.brand}
              </span>
              <span className="text-muted-foreground text-xs">•</span>
              <span className="font-mono text-xs text-muted-foreground">Đời {vehicle.year}</span>
            </div>
            <Link href={`/vehicles/${vehicle.id}`}>
              <h3 className="font-sans text-lg md:text-xl font-bold uppercase text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {vehicle.model}
              </h3>
            </Link>
            <p className="font-mono text-xs text-muted-foreground line-clamp-2 leading-relaxed">
              {vehicle.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px] text-muted-foreground">
              {vehicle.payload && (
                <span className="rounded-md border border-border bg-background/50 px-2.5 py-1 text-foreground">
                  Tải: {vehicle.payload}
                </span>
              )}
              {vehicle.boxSize && (
                <span className="rounded-md border border-border bg-background/50 px-2.5 py-1">
                  Kích thước: {vehicle.boxSize}
                </span>
              )}
              <span className="rounded-md border border-border bg-background/50 px-2.5 py-1">
                {vehicle.fuel}
              </span>
            </div>
          </div>

          {/* Price & Actions */}
          <div className="md:col-span-3 flex flex-col justify-between gap-4 md:border-l md:border-border md:pl-6">
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Giá niêm yết:
              </span>
              <span className="font-sans text-xl md:text-2xl font-bold text-primary">
                {vehicle.price}
              </span>
            </div>
            <div className="space-y-2">
              <Link
                href={`/vehicles/${vehicle.id}`}
                className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-primary-foreground hover:shadow-md hover:shadow-primary/30 transition-all"
              >
                Xem chi tiết
                <ArrowRight className="size-3.5" />
              </Link>
              <a
                href="tel:0392923792"
                className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <Phone className="size-3.5 text-primary" />
                Tư vấn nhanh
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/80 transition-all duration-300 hover:border-primary/60 hover:shadow-2xl">
      {/* Image Container */}
      <Link
        href={`/vehicles/${vehicle.id}`}
        className="relative aspect-[16/11] overflow-hidden bg-muted block"
      >
        <img
          src={vehicle.image}
          alt={vehicle.model}
          loading={priority ? 'eager' : 'lazy'}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
        <span className="absolute left-3.5 top-3.5 rounded-md bg-background/90 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur border border-border/50">
          {vehicle.category}
        </span>
        <span className="absolute right-3.5 top-3.5 rounded-md bg-black/60 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
          {vehicle.brand}
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between font-mono text-[11px] text-muted-foreground">
            <span>Năm sx: {vehicle.year}</span>
            <span>{vehicle.mileage}</span>
          </div>

          <Link href={`/vehicles/${vehicle.id}`} className="block">
            <h3 className="font-sans text-base font-bold uppercase text-foreground group-hover:text-primary transition-colors line-clamp-2 min-h-[3rem]">
              {vehicle.model}
            </h3>
          </Link>

          <p className="font-mono text-xs text-muted-foreground line-clamp-2 leading-relaxed">
            {vehicle.description}
          </p>
        </div>

        {/* Specs Pill List */}
        <div className="grid grid-cols-2 gap-2 border-y border-border/60 py-3 font-mono text-[11px]">
          <div className="flex items-center gap-1.5 text-muted-foreground truncate">
            <Gauge className="size-3.5 text-primary shrink-0" />
            <span className="truncate">{vehicle.transmission}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground truncate">
            <Fuel className="size-3.5 text-primary shrink-0" />
            <span className="truncate">{vehicle.fuel}</span>
          </div>
          {vehicle.payload && (
            <div className="col-span-2 flex items-center gap-1.5 text-foreground truncate font-medium">
              <Truck className="size-3.5 text-primary shrink-0" />
              <span className="truncate">{vehicle.payload}</span>
            </div>
          )}
        </div>

        {/* Price & Button */}
        <div className="pt-1 flex items-center justify-between gap-3">
          <div>
            <span className="block font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
              Giá:
            </span>
            <span className="font-sans text-lg font-bold text-primary">
              {vehicle.price}
            </span>
          </div>

          <Link
            href={`/vehicles/${vehicle.id}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-sm hover:shadow-md hover:shadow-primary/30 transition-all"
          >
            Chi tiết
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export function VehicleCatalog() {
  return (
    <Suspense
      fallback={
        <div className="grid place-items-center py-20">
          <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      }
    >
      <VehicleCatalogInner />
    </Suspense>
  )
}
