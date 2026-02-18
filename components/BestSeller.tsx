'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { useCartStore } from '@/lib/cartStore'
import { buildSingleWALink } from '@/lib/waPrefill'

const bestSellers = [
  {
    id: 1,
    name: 'Bakso Toniyam',
    desc: 'Terlaris grosir & ecer. Bakso premium dengan cita rasa autentik.',
    price: null,
    emoji: '🍜',
    badge: 'TERLARIS #1',
    isLimited: true,
  },
  {
    id: 2,
    name: 'Champ Nugget 500gr',
    desc: 'Nugget ayam crispy favorit keluarga. Cocok untuk sahur dan berbuka.',
    price: 35000,
    emoji: '🍗',
    badge: 'FAVORIT KELUARGA',
    isLimited: false,
  },
  {
    id: 3,
    name: 'Kentang Crinkle 1kg',
    desc: 'Kentang crinkle cut renyah. Cemilan buka puasa paling praktis.',
    price: 25000,
    emoji: '🍟',
    badge: 'BEST VALUE',
    isLimited: false,
  },
  {
    id: 4,
    name: 'Sosis Kamil Sapi',
    desc: 'Sosis sapi halal premium. Mudah diolah jadi berbagai menu.',
    price: 30000,
    emoji: '🌭',
    badge: 'HALAL PREMIUM',
    isLimited: false,
  },
]

export default function BestSeller() {
  const addItem = useCartStore((s) => s.addItem)

  return (
    <section className="py-16 lg:py-20 bg-[#FFFBF0]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-10"
        >
          <motion.h2 variants={fadeUp} className="text-2xl lg:text-4xl font-bold text-[#1C2B20] mb-3">
            Favorit Pelanggan Kami 🔥
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 max-w-xl mx-auto">
            Produk terlaris yang paling banyak dipesan setiap harinya.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {bestSellers.map((p) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
              className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 flex flex-col"
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#C9A84C] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {p.badge}
                </span>
                {p.isLimited && (
                  <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    STOK TERBATAS
                  </span>
                )}
              </div>

              {/* Emoji placeholder */}
              <div className="text-6xl text-center my-4 select-none">{p.emoji}</div>

              <h3 className="font-bold text-[#1C2B20] mb-1">{p.name}</h3>
              <p className="text-gray-500 text-sm mb-4 flex-1 leading-relaxed">{p.desc}</p>

              {/* Price */}
              <div className="mb-4">
                {p.price ? (
                  <span className="text-[#0D5C3A] font-extrabold text-xl">
                    Rp{p.price.toLocaleString('id-ID')}
                  </span>
                ) : (
                  <span className="text-[#C9A84C] font-bold text-sm">Hubungi WA untuk harga</span>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => addItem({ id: p.id, name: p.name, price: p.price })}
                  className="flex-1 bg-[#C9A84C] hover:bg-[#b8973f] text-white font-bold px-3 py-2.5 rounded-xl text-sm transition-all hover:scale-105 active:scale-95 min-h-[44px]"
                >
                  + Tambah
                </button>
                <a
                  href={buildSingleWALink(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10 px-3 py-2.5 rounded-xl transition-all min-h-[44px]"
                >
                  💬
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
