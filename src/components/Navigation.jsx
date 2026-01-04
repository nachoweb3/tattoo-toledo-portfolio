import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 100], ['transparent', 'rgba(0,0,0,0.9)'])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Portfolio', href: '#gallery' },
    { name: 'Servicios', href: '#services' },
    { name: 'Piercing', href: '#piercing' },
    { name: 'Tienda', href: '#shop' },
    { name: 'Contacto', href: '#contact' },
  ]

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-playfair font-bold tracking-wider"
        >
          TATTOO <span className="italic text-platinum">TOLEDO</span>
        </motion.a>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden lg:flex items-center gap-8"
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="magnetic-btn hover-trigger text-sm text-white/70 hover:text-white transition-colors tracking-wider relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block magnetic-btn hover-trigger px-6 py-3 bg-white text-black text-sm font-medium tracking-wider hover:bg-platinum transition-colors"
        >
          RESERVAR
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover-trigger"
          aria-label="Menu"
        >
          <motion.span
            animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-px bg-white"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-px bg-white"
          />
          <motion.span
            animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-px bg-white"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-lg"
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-playfair text-white/80 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="px-6 py-4 bg-white text-black text-center font-medium tracking-wider"
          >
            RESERVAR CITA
          </a>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navigation
