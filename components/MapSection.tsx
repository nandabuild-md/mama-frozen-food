import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function MapSection() {
  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Jl.+Anggrek+No.16+Kureksari+Waru+Sidoarjo'

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#1C2B20] mb-3">
            📍 Kunjungi Toko Kami
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Datang langsung untuk pilih produk atau ambil pesanan.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Address card */}
          <div className="bg-[#FFFBF0] border border-[#C9A84C]/30 rounded-2xl p-5 mb-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="text-4xl">🏪</div>
            <div className="flex-1">
              <h3 className="font-bold text-[#1C2B20] mb-1">Mama Frozen Food</h3>
              <p className="text-gray-600 text-sm">Jl. Anggrek No.16, Kureksari, Waru, Sidoarjo</p>
              <p className="text-[#0D5C3A] text-sm font-medium mt-1">🕐 Setiap hari 07.00–21.00 WIB</p>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#0D5C3A] hover:bg-[#C9A84C] text-white font-bold px-5 py-3 rounded-xl text-sm transition-all text-center min-h-[44px] flex items-center justify-center"
            >
              🗺️ Buka di Google Maps
            </a>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <GoogleMapsEmbed
              apiKey={process.env.NEXT_PUBLIC_GMAPS_KEY ?? ''}
              height={350}
              width="100%"
              mode="place"
              q="Jl.+Anggrek+No.16+Kureksari+Waru+Sidoarjo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
