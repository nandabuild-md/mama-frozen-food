import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ProductCatalog from '@/components/ProductCatalog'
import FloatingWA from '@/components/FloatingWA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <ProductCatalog />
      <FloatingWA />
    </main>
  )
}
