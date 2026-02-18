'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { isRamadanTheme } from '@/lib/theme'

const channels = [
  {
    name: 'GoFood',
    icon: '🛵',
    href: 'https://gofood.co.id/',
    bg: 'bg-red-500 hover:bg-red-600',
    desc: 'Pesan di GoFood',
  },
  {
    name: 'GrabFood',
    icon: '💚',
    href: 'https://food.grab.com/',
    bg: 'bg-green-600 hover:bg-green-700',
    desc: 'Pesan di GrabFood',
  },
  {
    name: 'Shopee',
    icon: '🛒',
    href: 'https://shopee.co.id/',
    bg: 'bg-orange-500 hover:bg-orange-600',
    desc: 'Beli di Shopee',
  },
]

export default function FinalCTA() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#0D5C3A] overflow-hidden">
      {/* Ramadan ornament */}
      {isRamadanTheme && (
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url('/ornament-arabesque.svg')`, backgroundSize: '300px' }} />
      )}

      {/* Decorative stars */}
      <div className="absolute top-8 left-8 text-[#C9A84C] text-3xl opacity-40 select-none">✨</div>
      <div className="absolute top-12 right-12 text-[#C9A84C] text-2xl opacity-30 select-none">⭐</div>
      <div className="absolute bottom-8 left-16 text-[#C9A84C] text-xl opacity-20 select-none">✨</div>
      {isRamadanTheme && (
        <>
          <div className="absolute top-6 right-24 text-4xl opacity-30 select-none">🏮</div>
          <div className="absolute bottom-6 left-6 text-4xl opacity-30 select-none">🏮</div>
        </>
      )}

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {isRamadanTheme && (
            <motion.div variants={fadeUp} className="inline-block text-4xl mb-4 select-none">
              🌙
            </motion.div>
          )}

          <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-extrabold text-white mb-4">
            Stok Lengkap Menanti —{' '}
            <span className="text-[#F0D080]">Pesan Sekarang!</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-green-100 text-lg mb-10 max-w-xl mx-auto">
            Jangan sampai kehabisan stok frozen food favorit kamu. Pesan sekarang via WhatsApp atau marketplace pilihanmu.
          </motion.p>

          {/* Primary WA CTA */}
          <motion.div variants={fadeUp} className="mb-8">
            <a
              href="https://wa.me/6282260836663?text=Halo+Mama+Frozen+Food%2C+saya+mau+pesan+frozen+food+%F0%9F%9B%92"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20b055] text-white font-extrabold px-10 py-5 rounded-2xl shadow-2xl text-xl transition-all hover:scale-105 active:scale-95"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat WhatsApp Sekarang
            </a>
          </motion.div>

          {/* Marketplace links */}
          <motion.p variants={fadeUp} className="text-green-200 text-sm mb-4">Atau pesan lewat marketplace:</motion.p>
          <motion.div variants={staggerContainer} className="flex flex-wrap justify-center gap-3">
            {channels.map((ch) => (
              <motion.a
                key={ch.name}
                variants={fadeUp}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ch.bg} text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2 min-h-[44px]`}
              >
                {ch.icon} {ch.desc}
              </motion.a>
            ))}
          </motion.div>

          {/* Store info */}
          <motion.p variants={fadeUp} className="text-green-300 text-sm mt-8">
            📍 Jl. Anggrek No.16, Kureksari, Waru, Sidoarjo &nbsp;&bull;&nbsp; 🕐 Buka setiap hari 07.00–21.00 WIB
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
