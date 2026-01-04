# TATTOO TOLEDO | Portfolio Ultra-High End

Portfolio de ultra alta gama para @tattoo.toledo, artista especializado en Realismo, Surrealismo y Blackwork.

## Características Premium

- **Cursor personalizado** dinámico que reacciona al hover
- **Hero con Parallax** - efecto de profundidad al hacer scroll
- **Galería Masonry** con animaciones de reveal (60fps)
- **Animaciones Framer Motion** para transiciones fluidas
- **Dark Mode nativo** - Negro absoluto con tipografía premium
- **Sección About** con línea de tiempo visual
- **Sección Servicios** con tarjetas interactivas
- **Sección Piercing** minimalista y elegante
- **Tienda Online** gratuita con productos descargables
- **Formulario con WhatsApp** integración directa
- **Botón flotante WhatsApp** con efecto pulso
- **Micro-interacciones** efecto "imán" en botones
- **Mobile-first** responsive completo

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Configuración Personalizada

### WhatsApp Number

Reemplaza en estos archivos el número de WhatsApp:
- `src/components/Contact.jsx` - línea 4: `const WHATSAPP_NUMBER = '34XXXXXXXXX'`
- `src/components/WhatsAppButton.jsx` - línea 4: `const WHATSAPP_NUMBER = '34XXXXXXXXX'`

### Imágenes de la Galería

Edita `src/components/Gallery.jsx` y reemplaza las URLs de `galleryItems` con tus propias imágenes.

### Productos de la Tienda

Edita `src/components/Shop.jsx` y añade tus productos en el array `products`.

### Foto de Perfil

En `src/components/About.jsx`, reemplaza el placeholder de la imagen con tu foto real.

## Estructura del Proyecto

```
src/
├── components/
│   ├── About.jsx           # Sección Sobre Mí con timeline
│   ├── Contact.jsx         # Formulario con WhatsApp
│   ├── CustomCursor.jsx    # Cursor personalizado dinámico
│   ├── Footer.jsx          # Footer minimalista
│   ├── Gallery.jsx         # Galería Masonry con filtros
│   ├── Hero.jsx            # Hero con efecto Parallax
│   ├── Navigation.jsx      # Menú premium responsive
│   ├── Piercing.jsx        # Sección de servicios de piercing
│   ├── Services.jsx        # Tarjetas de servicios
│   ├── Shop.jsx            # Tienda online con productos free
│   └── WhatsAppButton.jsx  # Botón flotante con pulso
├── App.jsx                 # Componente principal
├── main.jsx                # Punto de entrada
└── index.css               # Estilos globales + Tailwind
```

## Stack Tecnológico

- **React 18** - UI Library
- **Vite** - Build tool ultrarrápido
- **Framer Motion** - Animaciones a 60fps
- **Tailwind CSS** - Estilos utility-first
- **React Intersection Observer** - Detectar elementos en viewport

## Deploy

El proyecto está optimizado para desplegar en:

- **Vercel** - `npm run build` y conectar repo
- **Netlify** - Conectar repo y usar comando `npm run build`
- **GitHub Pages** - Build y deploy desde rama gh-pages

---

Diseñado con pasión para @tattoo.toledo
