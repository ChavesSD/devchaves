import { motion } from 'framer-motion'
import Button from '../components/Button'
import TechMarquee from '../components/TechMarquee'
import { hero, projects } from '../data/siteContent'

const agendaqui = projects.items[0]

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
              🚀 {hero.trustLine}
            </motion.p>
            <motion.ul
              className="text-left max-w-md mx-auto lg:mx-0 mb-6 space-y-1.5 text-slate-400 text-sm"
              variants={item}
            >
              {hero.highlights.map((line, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-accent-primary">▹</span>
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
              className="block rounded-2xl border border-bg-cardBorder bg-bg-card/70 backdrop-blur-card p-6 hover:border-accent-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/10"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent-primary/20 text-accent-secondary">
                  ⭐ {agendaqui.badge}
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
            </a>
          </motion.div>
        </div>

        {/* Marquee tech stack */}
        <TechMarquee items={hero.techStackMarquee} />
      </div>
    </section>
  )
}
