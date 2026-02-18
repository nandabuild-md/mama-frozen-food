import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ProblemStatement from '@/components/ProblemStatement'
import SolutionSection from '@/components/SolutionSection'
import BestSeller from '@/components/BestSeller'
import ProductCatalog from '@/components/ProductCatalog'
import HowToOrder from '@/components/HowToOrder'
import Testimonials from '@/components/Testimonials'
import MapSection from '@/components/MapSection'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import FloatingWA from '@/components/FloatingWA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <ProblemStatement />
      <SolutionSection />
      <BestSeller />
      <ProductCatalog />
      <HowToOrder />
      <Testimonials />
      <MapSection />
      <FAQ />
      <FinalCTA />
      <FloatingWA />
    </main>
  )
}
