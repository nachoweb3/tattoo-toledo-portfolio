import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  // Parallax effects
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, 300])
  const ySubtitle = useTransform(scrollYProgress, [0, 1], [0, 200])
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  const staggerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  }

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal to-black" />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        style={{ opacity, scale }}
      >
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          className="text-silver text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-inter"
        >
          Artist & Master
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold mb-6"
          style={{ y: yTitle }}
        >
          <span className="block">Tattoo</span>
          <motion.span
            className="block italic text-platinum"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              background: 'linear-gradient(90deg, #fff, #c0c0c0, #fff)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Toledo
          </motion.span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          className="text-lg md:text-2xl text-silver/80 max-w-2xl mx-auto mb-8 font-inter font-light"
          style={{ y: ySubtitle }}
        >
          Especialista en{' '}
          <span className="text-white font-medium">Realismo</span>
          {', '}
          <span className="text-white font-medium">Surrealismo</span>
          {' y '}
          <span className="text-white font-medium">Blackwork</span>
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ y: yImage }}
        >
          <a
            href="#gallery"
            className="magnetic-btn hover-trigger px-8 py-4 bg-white text-black font-medium tracking-wider hover:bg-platinum transition-colors"
          >
            VER PORTFOLIO
          </a>
          <a
            href="#contact"
            className="magnetic-btn hover-trigger px-8 py-4 border border-white/30 text-white font-medium tracking-wider hover:border-white transition-colors"
          >
            RESERVAR CITA
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>

      {/* Decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </section>
  )
}

export default Hero
