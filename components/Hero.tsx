'use client'

import Image from 'next/image'
import { useStoreStatus } from '@/lib/useStoreStatus'
import { isRamadanTheme } from '@/lib/theme'

export default function Hero() {
  const { label: storeLabel, colorClass } = useStoreStatus()

  const handleOrderClick = () => {
    const catalog = document.getElementById('katalog')
    catalog?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: isRamadanTheme
          ? 'linear-gradient(135deg, #0D5C3A 0%, #1A7A4A 60%, #C9A84C 100%)'
          : 'linear-gradient(135deg, #0D5C3A 0%, #1A7A4A 100%)',
      }}
    >
      {/* Arabesque overlay — Ramadan only */}
      {isRamadanTheme && (
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('/ornament-arabesque.svg')`,
            backgroundRepeat: 'repeat',
            backgroundSize: '300px',
          }}
        />
      )}

      <div className="container mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-8 items-center min-h-screen">
        {/* Left: Copy */}
        <div className="text-white z-10 text-center lg:text-left">
          {isRamadanTheme && (
            <div className="inline-flex items-center bg-[#C9A84C]/20 border border-[#C9A84C] rounded-full px-4 py-1.5 text-[#C9A84C] text-sm mb-5 font-medium">
              🌙 Spesial Ramadhan 1447 H
            </div>
          )}

          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
            Frozen Food Lengkap,{' '}
            <span className="text-[#F0D080]">Harga Terjangkau</span>
          </h1>

          <p className="text-lg lg:text-xl text-green-100 mb-6 leading-relaxed">
            Grosir &amp; ecer nugget, sosis, bakso, dan <strong>50+ produk pilihan</strong>.
            Tersedia GoFood, GrabFood &amp; Shopee. Pesan cepat via WhatsApp!
          </p>

          {/* Badge row */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-7">
            {[
              { icon: '🕐', text: storeLabel, extra: colorClass },
              { icon: '🛵', text: 'GoFood & GrabFood', extra: '' },
              { icon: '🛒', text: 'Shopee', extra: '' },
              { icon: '📍', text: 'Waru, Sidoarjo', extra: '' },
            ].map((b) => (
              <span
                key={b.text}
                className="bg-white/10 border border-white/30 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1"
              >
                <span>{b.icon}</span>
                <span className={b.extra}>{b.text}</span>
              </span>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={handleOrderClick}
            className="bg-[#C9A84C] hover:bg-[#b8973f] active:scale-95 text-white font-bold px-8 py-4 rounded-xl shadow-xl text-lg transition-all hover:scale-105 w-full sm:w-auto"
          >
            🛒 Pesan Sekarang
          </button>
        </div>

        {/* Right: Product image */}
        <div className="relative flex justify-center lg:justify-end z-10">
          <div className="relative w-full max-w-md">
            <Image
              src="/images/hero-products.png"
              alt="Koleksi produk Mama Frozen Food — nugget, sosis, bakso"
              width={600}
              height={500}
              className="object-contain drop-shadow-2xl"
              priority
            />
            {isRamadanTheme && (
              <>
                {/* Decorative lantern SVGs — positioned top corners */}
                <div className="absolute -top-4 -left-4 opacity-60 text-5xl select-none">
                  🏮
                </div>
                <div className="absolute -top-4 -right-4 opacity-60 text-5xl select-none">
                  🏮
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
