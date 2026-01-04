import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' ||
          e.target.tagName === 'BUTTON' ||
          e.target.closest('a') ||
          e.target.closest('button') ||
          e.target.classList.contains('hover-trigger')) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e) => {
      if (e.target.tagName === 'A' ||
          e.target.tagName === 'BUTTON' ||
          e.target.closest('a') ||
          e.target.closest('button') ||
          e.target.classList.contains('hover-trigger')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    document.querySelectorAll('a, button, .hover-trigger').forEach(el => {
      el.addEventListener('mouseenter', () => setIsHovering(true))
      el.addEventListener('mouseleave', () => setIsHovering(false))
    })

    document.body.classList.add('hide-cursor')

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.classList.remove('hide-cursor')
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="custom-cursor fixed w-12 h-12 rounded-full border border-white/30 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isClicked ? 0.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Inner dot */}
      <motion.div
        className="custom-cursor fixed w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          left: cursorX,
          top: cursorY,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}

export default CustomCursor
