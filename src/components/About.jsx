import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const timeline = [
    {
      year: '1996',
      title: 'Nacimiento',
      description: 'Nací en Madrid, España. Desde la más temprana infancia mostré un interés innato por el dibujo.',
    },
    {
      year: 'Infancia',
      title: 'Primeros Trazos',
      description: 'Comencé explorando el dibujo de anime, cartoon y el arte clásico, desarrollando una base visual que luego definiría mi estilo.',
    },
    {
      year: 'Adolescencia',
      title: 'Arte en Expansión',
      description: 'Mi amor por el anime, manga y videojuegos me llevó a adentrarme en el diseño de comics. Realicé cursos de ilustración perfeccionando mi técnica.',
    },
    {
      year: '2013',
      title: 'Bachillerato de Artes',
      description: 'Estudié Bachillerato Artístico, lo que me permitió explorar y dominar múltiples técnicas de expresión artística.',
    },
    {
      year: '2013',
      title: 'El Descubrimiento',
      description: 'Con solo 17 años, aún en el instituto, descubrí el tatuaje. Vi en él no solo un arte, sino un modo de vida que me llamaba poderosamente la atención.',
    },
    {
      year: '2014-2017',
      title: 'Primeros Pasos',
      description: 'Comencé a trabajar por mi cuenta, desarrollando mi estilo entre sesiones privadas y en Ink Shine, un estudio en Majadahonda.',
    },
    {
      year: '2017',
      title: 'Propio Estudio',
      description: 'A los 21 años logré abrir mi propio estudio en el Burgocentro de Las Rozas. Un sueño hecho realidad.',
    },
    {
      year: '2020',
      title: 'El Reto',
      description: 'Tras 7 meses, el estudio cerró debido a la pandemia del COVID-19. Un momento difícil que me fortaleció como artista y persona.',
    },
    {
      year: 'Actualidad',
      title: 'Amor de Madre',
      description: 'Hoy tatuaje en "Amor de Madre", ubicado en el Centro Comercial Gran Plaza 2. Donde cada tatuaje cuenta una historia.',
    },
  ]

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto relative">
        <motion.div
          style={{ y, opacity }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left - Main Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-silver text-sm tracking-[0.3em] uppercase mb-4 font-inter">
              The Artist
            </p>
            <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-8">
              Sobre <span className="italic text-platinum">Mí</span>
            </h2>

            {/* Profile image placeholder */}
            <div className="relative aspect-[4/5] mb-8 overflow-hidden bg-charcoal">
              <div className="absolute inset-0 flex items-center justify-center text-white/20">
                <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-3xl font-playfair font-bold">Nacho Dacal</p>
                <p className="text-silver/70">Tattoo Artist</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Philosophy & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {/* Philosophy */}
            <div className="mb-12 p-8 border border-white/10 bg-charcoal/30">
              <h3 className="text-2xl font-playfair mb-4 text-platinum">Filosofía</h3>
              <p className="text-silver/80 leading-relaxed mb-4">
                Soy consciente de la responsabilidad que implica marcar a una persona de por vida.
                Cada tatuaje que creo es una decisión importante, tanto para mí como para quien lo lleva.
              </p>
              <p className="text-silver/80 leading-relaxed">
                Mi meta con mi arte es lograr que las personas encuentren en él una <span className="text-white font-medium">metáfora para sus vidas</span>,
                algo que quieran plasmar para siempre. Tus ideas siempre son bienvenidas — trabajemos juntos
                para crear algo significativo.
              </p>
            </div>

            {/* Timeline */}
            <h3 className="text-xl font-playfair mb-6 text-silver">Mi Trayectoria</h3>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex gap-4 group"
                >
                  {/* Year */}
                  <div className="flex-shrink-0 w-16 pt-1">
                    <span className="text-sm text-platinum font-medium">{item.year}</span>
                  </div>

                  {/* Divider */}
                  <div className="flex-shrink-0 w-px bg-white/20 group-hover:bg-white/40 transition-colors" />

                  {/* Content */}
                  <div className="pb-6">
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-silver/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10"
        >
          <StatItem number="10+" label="Años de Experiencia" />
          <StatItem number="1000+" label="Tatuajes Realizados" />
          <StatItem number="3" label="Estudios" />
          <StatItem number="∞" label="Historias por Contar" />
        </motion.div>
      </div>
    </section>
  )
}

const StatItem = ({ number, label }) => (
  <div className="text-center">
    <p className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2">{number}</p>
    <p className="text-silver/50 text-sm tracking-wider uppercase">{label}</p>
  </div>
)

export default About
