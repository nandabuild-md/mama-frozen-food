'use client'

import { useCartStore } from '@/lib/cartStore'
import { buildSingleWALink } from '@/lib/waPrefill'
import { ShoppingCart } from 'lucide-react'

export interface Product {
  id: number
  name: string
  category: string
  price: number | null
  priceUnit: string
  isBestSeller: boolean
  isLimitedStock: boolean
  isGrosir: boolean
  inStock: boolean
  image: string
  description: string
  waText: string
  sortOrder: number
}

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const addItem = useCartStore((s) => s.addItem)

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price })
  }

  const handleDirectWA = () => {
    window.open(buildSingleWALink(product.name), '_blank')
  }

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-gray-100 flex flex-col group">
      {/* Image placeholder */}
      <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-3 aspect-square">
        <img
          src={`/images/products/${product.image.split('/').pop() ?? 'placeholder.jpg'}`}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback to placeholder if image missing
            ;(e.target as HTMLImageElement).src = `https://placehold.co/400x400/1A7A4A/FFFFFF?text=${encodeURIComponent(product.name)}`
          }}
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isBestSeller && (
            <span className="bg-[#C9A84C] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">🔥 TERLARIS</span>
          )}
          {product.isLimitedStock && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">⚡ STOK TERBATAS</span>
          )}
          {product.isGrosir && (
            <span className="bg-[#0D5C3A] text-white text-[10px] font-medium px-2 py-0.5 rounded-full">📦 Grosir</span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="flex-1">
        <span className="text-[#C9A84C] text-xs font-medium uppercase tracking-wide">{product.category}</span>
        <h3 className="text-[#1C2B20] font-semibold text-sm mt-0.5 mb-1 leading-snug line-clamp-2">{product.name}</h3>
        <p className="text-gray-500 text-xs mb-2 line-clamp-2">{product.description}</p>
      </div>

      {/* Price */}
      <div className="mb-3">
        {product.price ? (
          <span className="text-[#0D5C3A] font-extrabold text-lg">
            Rp{product.price.toLocaleString('id-ID')}
          </span>
        ) : (
          <span className="text-[#C9A84C] font-bold text-sm">Harga — Hubungi WA</span>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={handleAddToCart}
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#C9A84C] hover:bg-[#b8973f] text-white text-sm font-bold px-3 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 min-h-[44px]"
        >
          <ShoppingCart size={14} />
          + Tambah
        </button>
        <button
          onClick={handleDirectWA}
          className="flex items-center justify-center border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10 px-3 py-2.5 rounded-xl transition-all min-h-[44px]"
          title="Pesan langsung via WhatsApp"
        >
          💬
        </button>
      </div>
    </div>
  )
}
