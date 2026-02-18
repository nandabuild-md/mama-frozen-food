'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

const problems = [
  {
    icon: '💸',
    title: 'Harga Supermarket Mahal',
    desc: 'Frozen food di supermarket dijual jauh di atas harga normal, menguras budget belanja harian.',
    color: 'bg-red-50 border-red-200',
    iconBg: 'bg-red-100',
  },
  {
    icon: '📦',
    title: 'Stok Sering Habis',
    desc: 'Menjelang Ramadhan, stok frozen food cepat habis dan susah diprediksi ketersediaannya.',
    color: 'bg-amber-50 border-amber-200',
    iconBg: 'bg-amber-100',
  },
  {
    icon: '🤷',
    title: 'Susah Pilih Merek',
    desc: 'Terlalu banyak pilihan merek, tidak tahu mana yang enak dan berkualitas.',
    color: 'bg-orange-50 border-orange-200',
    iconBg: 'bg-orange-100',
  },
  {
    icon: '📱',
    title: 'Order Ribet & Lama',
    desc: 'Proses pemesanan yang panjang dan tidak praktis menghabiskan waktu yang seharusnya untuk keluarga.',
    color: 'bg-red-50 border-red-200',
    iconBg: 'bg-red-100',
  },
]

export default function ProblemStatement() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-10"
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl lg:text-4xl font-bold text-[#1C2B20] mb-3"
          >
            Repot Cari Frozen Food Lengkap Menjelang Ramadhan?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 max-w-xl mx-auto text-base lg:text-lg">
            Banyak pembeli menghadapi masalah yang sama setiap bulan puasa tiba.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className={`rounded-2xl border p-5 ${p.color}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${p.iconBg}`}>
                {p.icon}
              </div>
              <h3 className="font-bold text-[#1C2B20] mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
