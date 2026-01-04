import { lazy, Suspense } from 'react'
import CustomCursor from './components/CustomCursor'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Piercing from './components/Piercing'
import Shop from './components/Shop'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'

// Loading fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="text-center">
      <div className="w-16 h-16 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
      <p className="text-silver/50 text-sm tracking-wider">CARGANDO...</p>
    </div>
  </div>
)

function App() {
  return (
    <div className="relative">
      {/* Custom Cursor - Desktop only */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <About />

      {/* Gallery Section */}
      <Gallery />

      {/* Services Section */}
      <Services />

      {/* Piercing Section */}
      <Piercing />

      {/* Shop Section */}
      <Shop />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

export default App
