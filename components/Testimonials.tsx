'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

const reviews = [
  {
    name: 'Aditya F.',
    initial: 'A',
    color: 'bg-blue-500',
    rating: 5,
    text: '"Langgan, super lengkap, brand biasa sampe premium ada, hargae dibawah pasaran."',
    time: '2 minggu lalu',
  },
  {
    name: 'Nunuk M.',
    initial: 'N',
    color: 'bg-purple-500',
    rating: 5,
    text: '"Komplit murah rekomendasi buat temen-temen!"',
    time: '1 bulan lalu',
  },
  {
    name: 'Fitrah C.',
    initial: 'F',
    color: 'bg-green-500',
    rating: 5,
    text: '"Saking lengkapnya sampai bingung mau belanja apa aja 😭"',
    time: '3 minggu lalu',
  },
  {
    name: 'Sheilla R.',
    initial: 'S',
    color: 'bg-pink-500',
    rating: 5,
    text: '"Ga perlu bingung buat persiapan BBQ tahun baruan!"',
    time: '2 bulan lalu',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#C9A84C] text-sm">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
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
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C] rounded-full px-4 py-1.5 text-[#C9A84C] text-sm font-medium mb-4">
            ⭐ 4.9/5 dari Google Maps
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-2xl lg:text-4xl font-bold text-[#1C2B20] mb-3">
            Kata Mereka yang Sudah Belanja
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 max-w-xl mx-auto">
            Review nyata dari pelanggan di Google Maps.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {reviews.map((r) => (
            <motion.div
              key={r.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl shadow-md p-5 border border-gray-100"
            >
              {/* Google Maps style header */}
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {r.initial}
                </div>
                <div>
                  <p className="font-semibold text-[#1C2B20] text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.time}</p>
                </div>
              </div>
              <StarRating count={r.rating} />
              <p className="text-gray-600 text-sm mt-2 leading-relaxed italic">{r.text}</p>
              {/* Google logo */}
              <div className="mt-3 flex items-center gap-1">
                <span className="text-xs text-gray-400">via</span>
                <span className="text-xs font-bold">
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-500">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
