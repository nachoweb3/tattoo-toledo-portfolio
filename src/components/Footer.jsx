import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 bg-off-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="text-2xl font-playfair font-bold tracking-wider">
              TATTOO <span className="italic text-platinum">TOLEDO</span>
            </a>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-silver/50 text-sm"
          >
            Arte en piel. Historias en tinta.
          </motion.p>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-end gap-4"
          >
            <a
              href="https://instagram.com/tattoo.toledo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver/50 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver/50 hover:text-white transition-colors"
            >
              TikTok
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-silver/30 text-sm">
            © {currentYear} Tattoo Toledo. Todos los derechos reservados.
          </p>
          <p className="text-silver/30 text-sm">
            Diseñado con pasión
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
