'use client'

import { useStoreStatus } from '@/lib/useStoreStatus'

const badges = [
  { icon: '⭐', text: '4.9/5 Rating Google' },
  { icon: '🛵', text: 'Tersedia di GoFood & GrabFood' },
  { icon: '🛒', text: 'Ada di Shopee' },
  { icon: '📦', text: '50+ Produk Tersedia' },
  { icon: '💰', text: 'Harga Di Bawah Pasaran' },
  { icon: '🏪', text: 'Grosir & Ecer' },
]

export default function TrustBar() {
  const { label, colorClass } = useStoreStatus()

  return (
    <section className="bg-[#1A7A4A] py-3 overflow-hidden border-y border-[#C9A84C]/30">
      {/* Desktop: static row */}
      <div className="hidden md:flex justify-center flex-wrap gap-6 px-6">
        <span className={`flex items-center gap-1.5 text-sm font-medium ${colorClass}`}>
          🕐 {label}
        </span>
        {badges.map((b) => (
          <span key={b.text} className="flex items-center gap-1.5 text-white text-sm font-medium">
            <span className="text-[#C9A84C]">{b.icon}</span> {b.text}
          </span>
        ))}
      </div>

      {/* Mobile: marquee ticker */}
      <div className="md:hidden flex">
        <div className="flex animate-marquee whitespace-nowrap gap-8 pr-8">
          {[...badges, ...badges].map((b, i) => (
            <span key={i} className="flex items-center gap-1.5 text-white text-sm font-medium">
              <span className="text-[#C9A84C]">{b.icon}</span> {b.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
