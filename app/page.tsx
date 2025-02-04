import BinLookup from "./bin-lookup"
import WaveBackground from "./wave-background"
import TextureOverlay from "./texture-overlay"
import Header from "./components/header"
import Footer from "./components/footer"
import About from "./components/about"
import Features from "./components/features"
import FAQ from "./components/faq"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      <WaveBackground />
      <TextureOverlay />
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-5xl font-bold text-gray-900 drop-shadow-sm">CardScope: The BIN List, Open-sourced</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Access CardScope's comprehensive database of 343,063 BIN numbers and 13,348 banks. Get detailed information
            about issuing banks, card schemes, types, and more.
          </p>
        </div>

        <BinLookup />

        <About />
        <Features />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

