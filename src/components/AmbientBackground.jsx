import { useEffect, useRef } from 'react'
import PerspectiveGridBackground from './PerspectiveGridBackground'

export default function AmbientBackground() {
  const glowRef = useRef(null)

  useEffect(() => {
    const el = glowRef.current
    if (!el) return

    let raf = 0
    let x = 50
    let y = 40
    let tx = 50
    let ty = 40
    let running = false

    const paint = () => {
      x += (tx - x) * 0.08
      y += (ty - y) * 0.08
      el.style.background = `radial-gradient(640px circle at ${x}% ${y}%, rgba(34,211,238,0.10), transparent 42%)`

      if (Math.abs(tx - x) > 0.15 || Math.abs(ty - y) > 0.15) {
        raf = requestAnimationFrame(paint)
      } else {
        running = false
        raf = 0
      }
    }

    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth) * 100
      ty = (e.clientY / window.innerHeight) * 100
      if (!running) {
        running = true
        raf = requestAnimationFrame(paint)
      }
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <PerspectiveGridBackground />
      <div ref={glowRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-transparent to-[#030712]/90" />
      <div className="noise-overlay" />
    </div>
  )
}
