import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: 'Mama Frozen Food – Grosir & Ecer Frozen Food Sidoarjo | GoFood GrabFood',
  description:
    'Agen frozen food lengkap di Waru Sidoarjo. Nugget, sosis, bakso, kentang 50+ produk. Grosir & ecer. Buka 07.00–21.00 setiap hari. Pesan via WA!',
  keywords: [
    'frozen food sidoarjo',
    'grosir frozen food waru',
    'bakso toniyam',
    'agen nugget sosis sidoarjo',
    'mama frozen food',
  ],
  openGraph: {
    title: 'Mama Frozen Food – Grosir & Ecer Frozen Food Sidoarjo',
    description: 'Agen frozen food lengkap di Waru Sidoarjo. 50+ produk, harga di bawah pasaran.',
    images: ['/og-image.jpg'],
    locale: 'id_ID',
    type: 'website',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mama Frozen Food',
  description: 'Agen grosir & ecer frozen food di Waru, Sidoarjo',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Anggrek No.16, Kureksari',
    addressLocality: 'Waru',
    addressRegion: 'Sidoarjo',
    addressCountry: 'ID',
  },
  telephone: '+6282260836663',
  openingHours: 'Mo-Su 07:00-21:00',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '4',
  },
  hasMap: 'https://maps.google.com/?q=Jl.+Anggrek+No.16+Kureksari+Waru+Sidoarjo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${plusJakartaSans.className} bg-cream antialiased`}>
        {children}
      </body>
    </html>
  )
}
