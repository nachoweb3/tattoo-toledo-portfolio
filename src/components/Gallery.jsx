import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

// Data de ejemplo - reemplazar con imágenes reales
const galleryItems = [
  { id: 1, category: 'realism', title: 'Portrait', size: 'large', image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop' },
  { id: 2, category: 'blackwork', title: 'Geometric', size: 'small', image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=500&fit=crop' },
  { id: 3, category: 'surrealism', title: 'Dreamscape', size: 'medium', image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=500&h=600&fit=crop' },
  { id: 4, category: 'realism', title: 'Wildlife', size: 'tall', image: 'https://images.unsplash.com/photo-1590246814883-57c511e76a39?w=400&h=700&fit=crop' },
  { id: 5, category: 'blackwork', title: 'Fine Line', size: 'small', image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=400&h=400&fit=crop' },
  { id: 6, category: 'surrealism', title: 'Abstract', size: 'wide', image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=700&h=400&fit=crop' },
  { id: 7, category: 'realism', title: 'Portrait II', size: 'medium', image: 'https://images.unsplash.com/photo-1590246814883-57c511e76a39?w=500&h=500&fit=crop' },
  { id: 8, category: 'blackwork', title: 'Dotwork', size: 'small', image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=500&fit=crop' },
]

const sizeClasses = {
  large: 'md:col-span-2 md:row-span-2',
  medium: 'md:col-span-1 md:row-span-1',
  small: 'md:col-span-1 md:row-span-1',
  tall: 'md:col-span-1 md:row-span-2',
  wide: 'md:col-span-2 md:row-span-1',
}

const categories = ['All', 'Realism', 'Blackwork', 'Surrealism']

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [filter, setFilter] = useState('')

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase())

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-black">
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
            Selected Works
          </p>
          <h2 className="text-5xl md:text-7xl font-playfair font-bold">
            Portfolio
          </h2>
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

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <GalleryItem key={`${item.id}-${activeCategory}`} item={item} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://instagram.com/tattoo.toledo"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn hover-trigger inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
          >
            <span className="text-sm tracking-wider">VER MÁS EN INSTAGRAM</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

const GalleryItem = ({ item, index }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    margin: '-50px'
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const variants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={`${sizeClasses[item.size]} relative overflow-hidden group bg-charcoal`}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover image-hover-zoom"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500" />

      {/* Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
      >
        <p className="text-xs text-silver tracking-wider uppercase mb-1">{item.category}</p>
        <h3 className="text-xl font-playfair">{item.title}</h3>
      </motion.div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/30 transition-colors duration-300" />
    </motion.div>
  )
}

export default Gallery
