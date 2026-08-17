import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { getTechIconUrl } from '../utils/techIcons'

const CYCLE_MS = 2200

const PARTICLES = [
  { x: -18, y: -28, delay: '0s', duration: '1.8s' },
  { x: 16, y: -34, delay: '0.25s', duration: '2s' },
  { x: -8, y: -42, delay: '0.5s', duration: '1.7s' },
  { x: 22, y: -22, delay: '0.75s', duration: '2.1s' },
  { x: 4, y: -48, delay: '0.15s', duration: '1.9s' },
  { x: -22, y: -18, delay: '0.4s', duration: '2.2s' },
]

export default function HandTechPowers({ items = [], active = true }) {
  const [index, setIndex] = useState(0)
  const tech = items[index]
  const iconUrl = tech ? getTechIconUrl(tech) : null

  useEffect(() => {
    if (!items.length || !active) return undefined
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, CYCLE_MS)
    return () => clearInterval(t)
  }, [items, active])

  if (!items.length || !active) return null

  return (
    <div
      className="hand-powers pointer-events-none absolute z-30"
      style={{
        left: '4%',
        top: '38%',
        width: '30%',
        height: '30%',
      }}
      aria-hidden
    >
      {/* Glow só na palma */}
      <div className="hand-powers__glow" />

      {/* Ícone acima da mão */}
      <div className="absolute left-1/2 top-[42%] flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.5, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: -14 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center"
          >
            <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-300/35 bg-[#030712]/80 shadow-[0_0_24px_rgba(34,211,238,0.45)] sm:h-16 sm:w-16">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/25 to-transparent" />
              {iconUrl ? (
                <img
                  src={iconUrl}
                  alt=""
                  className="relative z-10 h-8 w-8 object-contain sm:h-9 sm:w-9"
                  loading="eager"
                />
              ) : (
                <span className="relative z-10 font-mono text-base font-bold text-cyan-200">
                  {tech?.charAt(0)}
                </span>
              )}
            </div>
            <span className="mt-1.5 rounded-full border border-white/15 bg-black/55 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-cyan-100">
              {tech}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Particulas: CSS puro, mais estavel no Chrome */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="hand-powers__particle"
          style={{
            '--tx': `${p.x}px`,
            '--ty': `${p.y}px`,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  )
}
