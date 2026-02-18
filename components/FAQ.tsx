'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Apakah ada minimum order untuk grosir?',
    a: 'Tidak ada minimum order. Semua produk bisa dibeli secara ecer maupun grosir. Untuk harga grosir khusus, silakan chat WhatsApp kami.',
  },
  {
    q: 'Bagaimana cara memesan?',
    a: 'Cukup pilih produk dari katalog, klik tombol “+ Tambah”, lalu klik “Pesan via WA”. Pesan akan terisi otomatis di WhatsApp — tinggal kirim!',
  },
  {
    q: 'Apakah bisa diantar ke rumah?',
    a: 'Ya! Kami tersedia di GoFood dan GrabFood untuk pengiriman ke area terdekat. Bisa juga langsung ambil di toko.',
  },
  {
    q: 'Jam buka toko?',
    a: 'Kami buka setiap hari (Senin–Minggu) pukul 07.00–21.00 WIB. Tidak ada hari libur!',
  },
  {
    q: 'Apakah Mama Frozen Food ada di Shopee?',
    a: 'Ya, kami ada di Shopee! Cari “Mama Frozen” atau klik tombol Shopee di bagian bawah halaman ini.',
  },
  {
    q: 'Produk apa yang paling laris?',
    a: 'Produk terlaris kami adalah Bakso Toniyam, Champ Nugget 500gr, dan Kentang Crinkle 1kg. Ketiganya selalu ada stok setiap hari.',
  },
  {
    q: 'Apakah harga grosir berbeda dengan ecer?',
    a: 'Ya, ada perbedaan harga untuk pembelian jumlah banyak. Silakan chat WhatsApp kami untuk informasi harga grosir khusus.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 lg:py-20 bg-[#FFFBF0]">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10"
        >
          <motion.h2 variants={fadeUp} className="text-2xl lg:text-4xl font-bold text-[#1C2B20] mb-3">
            Pertanyaan yang Sering Ditanya
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500">
            Tidak menemukan jawaban? Chat kami langsung via WhatsApp.
          </motion.p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left min-h-[56px]"
              >
                <span className="font-semibold text-[#1C2B20] text-sm lg:text-base pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-[#C9A84C]"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* FAQ bottom CTA */}
        <div className="text-center mt-8">
          <a
            href="https://wa.me/6282260836663?text=Halo+Mama+Frozen+Food%2C+saya+mau+tanya+tentang+produk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b055] text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95"
          >
            💬 Masih ada pertanyaan? Chat WA
          </a>
        </div>
      </div>
    </section>
  )
}
