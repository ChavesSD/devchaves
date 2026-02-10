import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Button from '../components/Button'
import TechMarquee from '../components/TechMarquee'
import { hero, projects } from '../data/siteContent'

const agendaqui = projects.items[0]
const AGENDAQUI_IMAGES = [1, 2, 3, 4, 5, 6].map((n) => `/Agendaqui/${n}.png`)
const CAROUSEL_INTERVAL_MS = 4000

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Hero() {
  const [carouselIndex, setCarouselIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCarouselIndex((i) => (i + 1) % AGENDAQUI_IMAGES.length)
    }, CAROUSEL_INTERVAL_MS)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col px-4 sm:px-6 pt-24 pb-8 overflow-hidden">
      <div className="aurora-bg" aria-hidden />

      <div className="relative max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna esquerda: nome + texto + CTAs + stats */}
          <motion.div
            className="text-center lg:text-left order-1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div className="inline-block">
              <motion.h1 className="neon-text" variants={item}>
                {hero.name.toUpperCase()}
              </motion.h1>
              <motion.div className="neon-line" variants={item} />
            </div>
            <motion.p
              className="text-accent-secondary text-xl sm:text-2xl font-medium mt-4 mb-3"
              variants={item}
            >
              {hero.title}
            </motion.p>
            <motion.p
              className="text-slate-300 text-base md:text-lg leading-relaxed mb-2"
              variants={item}
            >
              {hero.subtitle}
            </motion.p>
            <motion.p
              className="text-slate-500 text-sm mb-6"
              variants={item}
            >
              {hero.trustLine}
            </motion.p>
            <motion.ul
              className="text-left max-w-md mx-auto lg:mx-0 mb-6 space-y-1.5 text-slate-400 text-sm"
              variants={item}
            >
              {hero.highlights.map((line, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center shrink-0 w-5 h-5 text-accent-primary" aria-hidden>
                    <svg className="asterisco-spin w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" />
                    </svg>
                  </span>
                  {line}
                </li>
              ))}
            </motion.ul>
            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              variants={item}
            >
              <Button href={hero.ctaPrimary.href} label={hero.ctaPrimary.label} variant="primary" />
              <Button href={hero.ctaSecondary.href} label={hero.ctaSecondary.label} variant="secondary" />
            </motion.div>

            {/* 3 stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0"
              variants={item}
            >
              {hero.stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center lg:text-left py-3 px-2 rounded-lg border border-white/5 bg-white/[0.02]"
                >
                  <div className="text-accent-secondary font-bold text-lg">{stat.value}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Coluna direita: card Agendaqui */}
          <motion.div
            className="order-2"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a
              href="#tecnologias"
              className="block rounded-2xl border border-bg-cardBorder bg-bg-card/70 backdrop-blur-card overflow-hidden hover:border-accent-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/10"
            >
              {/* Carrossel de imagens do Agendaqui */}
              <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-black/30">
                <div
                  className="flex h-full transition-transform duration-500 ease-out"
                  style={{
                    width: `${AGENDAQUI_IMAGES.length * 100}%`,
                    transform: `translateX(-${carouselIndex * (100 / AGENDAQUI_IMAGES.length)}%)`,
                  }}
                  aria-live="polite"
                >
                  {AGENDAQUI_IMAGES.map((src, i) => (
                    <div
                      key={src}
                      className="h-full shrink-0 bg-black/20"
                      style={{ width: `${100 / AGENDAQUI_IMAGES.length}%` }}
                    >
                      <img
                        src={src}
                        alt={`${agendaqui.name} - demonstração ${i + 1}`}
                        className="h-full w-full object-cover object-top"
                        loading={i === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1">
                  {AGENDAQUI_IMAGES.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1 rounded-full transition-all ${
                        i === carouselIndex ? 'w-4 bg-white' : 'w-1 bg-white/50'
                      }`}
                      aria-hidden
                    />
                  ))}
                </div>
              </div>
              <div className="p-6 pt-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent-primary/20 text-accent-secondary">
                  <span className="inline-flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" aria-hidden />
                    <span>{agendaqui.badge}</span>
                  </span>
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">
                {agendaqui.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {agendaqui.description}
              </p>
              <ul className="space-y-1.5 text-slate-500 text-xs">
                {agendaqui.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-accent-primary">•</span>
                    {f.replace(/^[^\w\s]+\s*/, '').trim() || f}
                  </li>
                ))}
              </ul>
              <p className="text-accent-secondary text-sm font-medium mt-4">
                Ver projeto →
              </p>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Marquee tech stack */}
        <TechMarquee items={hero.techStackMarquee} />
      </div>
    </section>
  )
}
