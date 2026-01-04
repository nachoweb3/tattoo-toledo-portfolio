import { motion } from 'framer-motion'
import { useState } from 'react'

const WHATSAPP_NUMBER = '34640943669'

const styles = [
  { value: 'realism', label: 'Realismo' },
  { value: 'surrealism', label: 'Surrealismo' },
  { value: 'blackwork', label: 'Blackwork' },
  { value: 'geometric', label: 'Geométrico' },
  { value: 'coverup', label: 'Cover-Up' },
  { value: 'other', label: 'Otro' },
]

const sizes = [
  { value: 'small', label: 'Pequeño (5-10cm)' },
  { value: 'medium', label: 'Mediano (10-20cm)' },
  { value: 'large', label: 'Grande (20-30cm)' },
  { value: 'extra', label: 'Extra grande (+30cm)' },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    style: '',
    size: '',
    description: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Crear mensaje de WhatsApp
    const message = `¡Hola! Soy *${formData.name}*%0A%0A` +
      `📱 Teléfono: ${formData.phone}%0A` +
      `🎨 Estilo: ${formData.style}%0A` +
      `📐 Tamaño: ${formData.size}%0A` +
      `📝 Descripción: ${formData.description}`

    // Abrir WhatsApp con el mensaje
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-silver text-sm tracking-[0.3em] uppercase mb-4 font-inter">
              Get in Touch
            </p>
            <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-8">
              Contacto
            </h2>
            <p className="text-silver/70 text-lg mb-12 font-light leading-relaxed">
              ¿Tienes una idea en mente? Cuéntame sobre ella y trabajaremos juntos
              para crear algo único y especial.
            </p>

            {/* Contact info */}
            <div className="space-y-6 mb-12">
              <ContactItem
                icon="📍"
                title="Ubicación"
                value="[Tu ciudad], España"
              />
              <ContactItem
                icon="📱"
                title="WhatsApp"
                value="+34 XXX XXX XXX"
              />
              <ContactItem
                icon="✉️"
                title="Email"
                value="contact@tattootoledo.com"
              />
              <ContactItem
                icon="🕐"
                title="Horario"
                value="Lun - Vie: 10:00 - 20:00"
              />
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <SocialLink href="https://instagram.com/tattoo.toledo" label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </SocialLink>
              <SocialLink href="#" label="TikTok">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </SocialLink>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-charcoal/50 border border-white/10 p-8 md:p-12">
              <h3 className="text-2xl font-playfair mb-8 pb-4 border-b border-white/20">
                Solicitar Presupuesto
              </h3>

              <div className="space-y-6">
                <FormInput
                  label="Nombre"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <FormInput
                  label="Teléfono (WhatsApp)"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <div>
                  <label className="block text-sm text-silver/70 mb-2">Estilo deseado</label>
                  <select
                    name="style"
                    value={formData.style}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white focus:border-white outline-none transition-colors"
                  >
                    <option value="">Seleccionar estilo</option>
                    {styles.map(style => (
                      <option key={style.value} value={style.value}>{style.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-silver/70 mb-2">Tamaño aproximado</label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white focus:border-white outline-none transition-colors"
                  >
                    <option value="">Seleccionar tamaño</option>
                    {sizes.map(size => (
                      <option key={size.value} value={size.value}>{size.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-silver/70 mb-2">Descripción</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe tu idea, ubicación del cuerpo, etc."
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white placeholder:text-white/30 focus:border-white outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="magnetic-btn w-full py-4 bg-white text-black font-medium tracking-wider hover:bg-platinum transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      Enviar por WhatsApp
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const FormInput = ({ label, ...props }) => (
  <div>
    <label className="block text-sm text-silver/70 mb-2">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-3 bg-black border border-white/20 text-white placeholder:text-white/30 focus:border-white outline-none transition-colors"
    />
  </div>
)

const ContactItem = ({ icon, title, value }) => (
  <div className="flex items-center gap-4">
    <span className="text-2xl">{icon}</span>
    <div>
      <p className="text-xs text-silver/50 uppercase tracking-wider">{title}</p>
      <p className="text-white">{value}</p>
    </div>
  </div>
)

const SocialLink = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="magnetic-btn hover-trigger w-12 h-12 flex items-center justify-center border border-white/20 text-white/70 hover:text-white hover:border-white transition-all"
  >
    {children}
  </a>
)

export default Contact
