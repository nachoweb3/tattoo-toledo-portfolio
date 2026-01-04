import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

// Productos de ejemplo - Puedes añadir tus propios productos aquí
const products = [
  {
    id: 1,
    name: 'Flash Art Collection Vol. 1',
    description: 'Colección exclusiva de diseños originales listos para tatuar.',
    price: 0,
    image: 'https://images.unsplash.com/photo-1590246814883-57c511e76a39?w=400&h=400&fit=crop',
    category: 'digital',
    downloadUrl: '#',
  },
  {
    id: 2,
    name: 'Guía de Aftercare Premium',
    description: 'PDF completo con consejos profesionales para el cuidado de tu tatuaje.',
    price: 0,
    image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=400&h=400&fit=crop',
    category: 'guide',
    downloadUrl: '#',
  },
  {
    id: 3,
    name: 'Wallpaper Collection',
    description: 'Pack de 10 wallpapers exclusivos con diseños de Blackwork.',
    price: 0,
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop',
    category: 'digital',
    downloadUrl: '#',
  },
  {
    id: 4,
    name: 'Stencil Templates Set',
    description: 'Plantillas vectoriales listas para usar en estudio.',
    price: 0,
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=400&h=400&fit=crop',
    category: 'digital',
    downloadUrl: '#',
  },
]

const categories = ['All', 'Digital', 'Guide']

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase())

  return (
    <section id="shop" className="py-24 px-6 md:px-12 bg-off-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-silver text-sm tracking-[0.3em] uppercase mb-4 font-inter">
            Free Downloads
          </p>
          <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            Tienda
          </h2>
          <p className="text-silver/70 max-w-2xl mx-auto">
            Recursos gratuitos para la comunidad. Diseños, guías y más contenido descargable.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`magnetic-btn hover-trigger px-6 py-2 text-sm tracking-wider transition-all ${
                activeCategory === category
                  ? 'bg-white text-black'
                  : 'border border-white/30 text-white/70 hover:border-white hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product) => (
              <ProductCard
                key={`${product.id}-${activeCategory}`}
                product={product}
                onSelect={() => setSelectedProduct(product)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 border border-white/20 text-center"
        >
          <h3 className="text-3xl font-playfair mb-4">¿Quieres contenido exclusivo?</h3>
          <p className="text-silver/70 mb-8">
            Suscríbete para recibir nuevos productos y ofertas especiales.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-6 py-4 bg-black border border-white/20 text-white placeholder:text-white/30 focus:border-white outline-none transition-colors"
            />
            <button
              type="submit"
              className="magnetic-btn px-8 py-4 bg-white text-black font-medium tracking-wider hover:bg-platinum transition-colors"
            >
              SUSCRIBIRSE
            </button>
          </form>
        </motion.div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

const ProductCard = ({ product, onSelect }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      onClick={onSelect}
      className="group cursor-pointer bg-charcoal border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover image-hover-zoom"
        />
        {/* Free badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-white text-black text-xs font-bold tracking-wider">
          FREE
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-medium tracking-wider">VER DETALLES</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-playfair mb-2 group-hover:text-platinum transition-colors">
          {product.name}
        </h3>
        <p className="text-silver/70 text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-white font-medium">Gratis</span>
          <svg
            className="w-5 h-5 text-silver group-hover:text-white group-hover:translate-x-1 transition-all"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

const ProductModal = ({ product, onClose }) => {
  const handleDownload = (e) => {
    e.stopPropagation()
    // Aquí puedes implementar la lógica de descarga real
    alert(`Descargando: ${product.name}`)
    onClose()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-charcoal border border-white/20 max-w-2xl w-full overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="aspect-square">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <span className="text-xs text-silver tracking-wider uppercase mb-2">
              {product.category}
            </span>
            <h3 className="text-2xl font-playfair mb-4">{product.name}</h3>
            <p className="text-silver/70 mb-6">{product.description}</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-silver/60">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                Descarga instantánea
              </div>
              <div className="flex items-center gap-3 text-sm text-silver/60">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                Uso personal y comercial
              </div>
              <div className="flex items-center gap-3 text-sm text-silver/60">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                Formato HQ
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="magnetic-btn mt-8 w-full py-4 bg-white text-black font-medium tracking-wider hover:bg-platinum transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              DESCARGAR GRATIS
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Shop
