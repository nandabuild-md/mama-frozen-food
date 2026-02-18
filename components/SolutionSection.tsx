'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

const services = [
  { icon: '📦', title: 'Pembelian Grosir', desc: 'Harga spesial untuk pembelian jumlah banyak. Cocok untuk warung, kantin, dan usaha kuliner.' },
  { icon: '🛒', title: 'Pembelian Ecer', desc: 'Beli satuan tanpa minimum order. Sesuai kebutuhan ibu rumah tangga.' },
  { icon: '🛵', title: 'Delivery GoFood & GrabFood', desc: 'Pesan dari rumah, diantar ke depan pintu. Tersedia setiap hari 07.00–21.00.' },
  { icon: '🏪', title: 'Ambil di Toko', desc: 'Datang langsung ke Jl. Anggrek No.16 Kureksari, Waru, Sidoarjo.' },
  { icon: '💬', title: 'Order via WhatsApp', desc: 'Pilih produk di katalog, pesan otomatis terisi di WA. Tanpa form, tanpa ribet.' },
  { icon: '⭐', title: '50+ Produk Pilihan', desc: 'Nugget, sosis, bakso, kentang, cireng, siomay, dan banyak lagi — semua ada di sini.' },
]

export default function SolutionSection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-[#0D5C3A] to-[#1A7A4A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-10"
        >
          <motion.h2 variants={fadeUp} className="text-2xl lg:text-4xl font-bold text-white mb-3">
            Semua Ada di Mama Frozen Food! 🎉
          </motion.h2>
          <motion.p variants={fadeUp} className="text-green-100 max-w-xl mx-auto">
            Satu toko, semua solusi kebutuhan frozen food kamu.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-white hover:bg-white/20 transition-all"
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-bold mb-1 text-[#F0D080]">{s.title}</h3>
              <p className="text-green-100 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
