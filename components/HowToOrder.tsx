'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

const steps = [
  {
    number: '1',
    icon: '👀',
    title: 'Pilih Produk',
    desc: 'Jelajahi katalog 50+ produk frozen food. Filter berdasarkan kategori sesuai kebutuhan.',
  },
  {
    number: '2',
    icon: '🛒',
    title: 'Masukkan ke Keranjang',
    desc: 'Klik tombol “+ Tambah” pada setiap produk yang kamu inginkan. Atur jumlah dengan mudah.',
  },
  {
    number: '3',
    icon: '💬',
    title: 'Chat WA Otomatis',
    desc: 'Klik “Pesan via WA” — pesan sudah terisi otomatis dengan daftar produk pilihanmu. Tinggal kirim!',
  },
]

export default function HowToOrder() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeUp} className="text-2xl lg:text-4xl font-bold text-[#1C2B20] mb-3">
            Pesan Semudah 3 Langkah
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 max-w-xl mx-auto">
            Dari pilih produk sampai pesan, butuh kurang dari 30 detik.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#C9A84C] opacity-30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="flex flex-col items-center text-center relative"
            >
              {/* Step number circle */}
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#0D5C3A] to-[#1A7A4A] flex flex-col items-center justify-center shadow-xl mb-5 z-10">
                <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Step</span>
                <span className="text-white text-3xl font-black leading-none">{step.number}</span>
              </div>
              <div className="text-4xl mb-3">{step.icon}</div>
              <h3 className="font-bold text-[#1C2B20] text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mt-10"
        >
          <a
            href="#katalog"
            className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8973f] text-white font-bold px-8 py-4 rounded-xl shadow-lg text-lg transition-all hover:scale-105 active:scale-95"
          >
            🛒 Mulai Pilih Produk
          </a>
        </motion.div>
      </div>
    </section>
  )
}
