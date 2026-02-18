export interface CartItem {
  id: number
  name: string
  qty: number
  price: number | null
}

/**
 * Builds a WhatsApp deep-link with a pre-filled order message.
 * Uses a single encodeURIComponent() on the full text to avoid double-encoding.
 */
export function buildWALink(items: CartItem[]): string {
  const header = 'Halo Mama Frozen Food, saya mau pesan:\n'
  const lines = items.map((i) => `• ${i.name} x${i.qty}\n`).join('')
  const footer = '\nMohon info total harga dan ketersediaan. Terima kasih!'
  const fullText = header + lines + footer
  return `https://wa.me/6282260836663?text=${encodeURIComponent(fullText)}`
}

/**
 * Builds a single-product direct WA link (for quick order without cart).
 */
export function buildSingleWALink(productName: string): string {
  const text = `Halo Mama Frozen Food, saya mau pesan:\n• ${productName} x1\n\nMohon info total harga dan ketersediaan. Terima kasih!`
  return `https://wa.me/6282260836663?text=${encodeURIComponent(text)}`
}
