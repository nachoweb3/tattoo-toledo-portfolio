import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const services = [
  {
    id: 1,
    title: 'Tatuaje Personalizado',
    description: 'Diseños únicos creados exclusivamente para ti. Desde conceptos originales hasta adaptaciones de tu idea.',
    price: 'Desde 150€',
    duration: '2-4 horas',
    icon: '✦'
  },
  {
    id: 2,
    title: 'Realismo / Retratos',
    description: 'Capturamos la esencia y detalle de fotografías reales. Requiere consulta previa para evaluar viabilidad.',
    price: 'Desde 250€',
    duration: '3-6 horas',
    icon: '◈'
  },
  {
    id: 3,
    title: 'Blackwork & Geométrico',
    description: 'Estilos minimalistas con líneas precisas y contrastes marcados. Negro intenso, atemporal y elegante.',
    price: 'Desde 120€',
    duration: '1-3 horas',
    icon: '◇'
  },
  {
    id: 4,
    title: 'Cover-Up / Reparación',
    description: 'Transformamos tatuajes anteriores en obras nuevas. Evaluación gratuita para determinar el mejor enfoque.',
    price: 'Consultar',
    duration: 'Variable',
    icon: '◎'
  },
  {
    id: 5,
    title: 'Sesión Completa (Día)',
    description: 'Dedicación exclusiva por todo un día. Ideal para piezas grandes o proyectos completos.',
    price: '500€',
    duration: '6-8 horas',
    icon: '❖'
  },
  {
    id: 6,
    title: 'Consulta Diseño',
    description: 'Sesión de diseño donde creamos juntos tu tatuaje perfecto. Incluye boceto digital.',
    price: '50€',
    duration: '1 hora',
    icon: '✧'
  }
]

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    margin: '-100px'
  })

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-off-black">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-silver text-sm tracking-[0.3em] uppercase mb-4 font-inter">
            What I Offer
          </p>
          <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            Servicios
          </h2>
          <p className="text-silver/70 max-w-2xl mx-auto">
            Cada tatuaje es una obra de arte única. Trabajo contigo para crear algo
            que trascienda el papel y se convierta en parte de tu historia.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="magnetic-btn hover-trigger inline-block px-10 py-5 bg-white text-black font-medium tracking-wider hover:bg-platinum transition-colors"
          >
            SOLICITAR PRESUPUESTO
          </a>
        </motion.div>
      </div>
    </section>
  )
}

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-charcoal border border-white/10 p-8 hover:border-white/30 transition-colors duration-500"
    >
      {/* Icon */}
      <motion.div
        animate={{
          rotate: isHovered ? 180 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="text-4xl mb-6 text-platinum"
      >
        {service.icon}
      </motion.div>

      {/* Content */}
      <h3 className="text-2xl font-playfair mb-3">{service.title}</h3>
      <p className="text-silver/70 mb-6 font-light leading-relaxed">{service.description}</p>

      {/* Details */}
      <div className="flex items-center gap-6 pt-6 border-t border-white/10">
        <div>
          <p className="text-xs text-silver/50 uppercase tracking-wider mb-1">Precio</p>
          <p className="text-white font-medium">{service.price}</p>
        </div>
        <div>
          <p className="text-xs text-silver/50 uppercase tracking-wider mb-1">Duración</p>
          <p className="text-white font-medium">{service.duration}</p>
        </div>
      </div>

      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />
    </motion.div>
  )
}

export default Services
