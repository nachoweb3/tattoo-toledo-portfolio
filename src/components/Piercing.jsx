import { motion } from 'framer-motion'

const piercingTypes = [
  { name: 'Lóbulo', price: '25€', healing: '6-8 semanas' },
  { name: 'Helix', price: '35€', healing: '6-12 meses' },
  { name: 'Tragus', price: '35€', healing: '6-12 meses' },
  { name: 'Conch', price: '40€', healing: '6-12 meses' },
  { name: 'Daith', price: '40€', healing: '6-12 meses' },
  { name: 'Rook', price: '40€', healing: '6-12 meses' },
  { name: 'Industrial', price: '50€', healing: '6-12 meses' },
  { name: 'Septum', price: '45€', healing: '6-8 semanas' },
  { name: 'Labret', price: '40€', healing: '6-8 semanas' },
  { name: 'Eyebrow', price: '35€', healing: '6-8 semanas' },
  { name: 'Naval', price: '45€', healing: '6-12 meses' },
  { name: 'Nostril', price: '35€', healing: '4-6 meses' },
]

const Piercing = () => {
  return (
    <section id="piercing" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
      {/* Background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-charcoal to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-silver text-sm tracking-[0.3em] uppercase mb-4 font-inter">
              Body Piercing
            </p>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-8">
              Piercing
              <span className="block italic text-platinum mt-2">Experience</span>
            </h2>

            <p className="text-silver/70 text-lg mb-8 font-light leading-relaxed">
              Servicio profesional de piercing con los más altos estándares de higiene y seguridad.
              Utilizamos únicamente materiales de implantación certificados (Titanio G23 y Oro 18k).
            </p>

            {/* Safety badges */}
            <div className="flex flex-wrap gap-6 mb-10">
              <SafetyBadge icon="✓" text="Material Estéril" />
              <SafetyBadge icon="✓" text="Aguja Nueva" />
              <SafetyBadge icon="✓" text="Ambiente Seguro" />
              <SafetyBadge icon="✓" text="Postventa Incluida" />
            </div>

            <p className="text-white/50 text-sm mb-8">
              * La joya está incluida en el precio. Posibilidad de elegir entre diferentes diseños y calibres.
            </p>

            <a
              href="#contact"
              className="magnetic-btn hover-trigger inline-block px-8 py-4 border border-white text-white font-medium tracking-wider hover:bg-white hover:text-black transition-all"
            >
              RESERVAR PIERCING
            </a>
          </motion.div>

          {/* Right column - Price list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-charcoal/50 border border-white/10 p-8 md:p-12 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-playfair mb-8 pb-4 border-b border-white/20">
              Tarifas
            </h3>

            <div className="space-y-4">
              {piercingTypes.map((piercing, index) => (
                <motion.div
                  key={piercing.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="flex items-center justify-between py-3 border-b border-white/5 hover:border-white/20 transition-colors group"
                >
                  <div>
                    <p className="text-white group-hover:text-platinum transition-colors">{piercing.name}</p>
                    <p className="text-xs text-silver/50">Tiempo cicatrización: {piercing.healing}</p>
                  </div>
                  <span className="text-silver font-light">{piercing.price}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 p-4 bg-white/5 border border-white/10"
            >
              <p className="text-sm text-silver/70">
                <strong className="text-white">Nota:</strong> Los precios pueden variar según la complejidad
                y la joya elegida. Consulta sin compromiso.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const SafetyBadge = ({ icon, text }) => (
  <div className="flex items-center gap-2">
    <span className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-xs">
      {icon}
    </span>
    <span className="text-sm text-silver/70">{text}</span>
  </div>
)

export default Piercing
