'use client'

import { useState } from 'react'
import ProductCard, { type Product } from './ProductCard'
import productsData from '@/data/products.json'
import { buildWALink } from '@/lib/waPrefill'
import { useCartStore } from '@/lib/cartStore'
import { ShoppingCart, X } from 'lucide-react'
import { isRamadanTheme } from '@/lib/theme'

const { categories, products } = productsData as {
  categories: string[]
  products: Product[]
}

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const { items, totalItems, removeItem, updateQty, clearCart } = useCartStore()
  const [cartOpen, setCartOpen] = useState(false)

  const filtered =
    activeCategory === 'Semua'
      ? products
      : products.filter((p) => p.category === activeCategory)

  const handleOrder = () => {
    if (items.length === 0) return
    window.open(buildWALink(items), '_blank')
  }

  return (
    <section id="katalog" className="py-16 lg:py-24 bg-[#FFFBF0]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          {isRamadanTheme && (
            <span className="inline-block bg-[#C9A84C]/20 text-[#C9A84C] border border-[#C9A84C] text-xs font-medium px-3 py-1 rounded-full mb-3">
              🌙 Katalog Ramadhan 1447 H
            </span>
          )}
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1C2B20] mb-2">
            Katalog Produk Pilihan
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Pilih produk, tambah ke keranjang, lalu pesan sekaligus via WhatsApp — mudah!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all min-h-[44px] ${
                activeCategory === cat
                  ? 'bg-[#0D5C3A] text-white shadow-md'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-[#C9A84C] hover:text-[#C9A84C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Floating Cart Bar — shows after 1 item added */}
        {totalItems > 0 && (
          <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-safe md:hidden">
            <button
              onClick={() => setCartOpen(true)}
              className="w-full bg-[#0D5C3A] text-white font-bold py-4 px-6 rounded-t-2xl shadow-2xl flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <ShoppingCart size={20} />
                {totalItems} Produk
              </span>
              <span className="bg-[#C9A84C] px-4 py-1.5 rounded-xl text-sm">Pesan via WA →</span>
            </button>
          </div>
        )}

        {/* Desktop Cart Button */}
        {totalItems > 0 && (
          <div className="hidden md:flex justify-end mt-8">
            <button
              onClick={() => setCartOpen(true)}
              className="flex items-center gap-2 bg-[#0D5C3A] text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-[#C9A84C] transition-colors"
            >
              <ShoppingCart size={18} />
              Keranjang ({totalItems}) — Pesan via WA
            </button>
          </div>
        )}
      </div>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/50" onClick={() => setCartOpen(false)} />
          <div className="w-full max-w-sm bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-bold text-lg text-[#1C2B20]">🛒 Keranjang Saya</h3>
              <button onClick={() => setCartOpen(false)} className="p-2">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.length === 0 ? (
                <p className="text-gray-400 text-center py-8">Keranjang kosong</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                    <div className="flex-1">
                      <p className="font-medium text-sm text-[#1C2B20] line-clamp-1">{item.name}</p>
                      {item.price && (
                        <p className="text-[#0D5C3A] text-xs font-semibold">
                          Rp{item.price.toLocaleString('id-ID')}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-7 h-7 rounded-full border border-gray-300 text-sm font-bold flex items-center justify-center"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm font-bold">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-7 h-7 rounded-full bg-[#C9A84C] text-white text-sm font-bold flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-400 hover:text-red-600 p-1"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="p-4 border-t space-y-3">
              <button
                onClick={handleOrder}
                className="w-full bg-[#25D366] hover:bg-[#20b055] text-white font-bold py-4 rounded-xl text-lg shadow-lg transition-all"
              >
                💬 Pesan via WhatsApp
              </button>
              <button
                onClick={clearCart}
                className="w-full border border-gray-200 text-gray-500 py-2 rounded-xl text-sm hover:bg-gray-50"
              >
                Kosongkan Keranjang
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
