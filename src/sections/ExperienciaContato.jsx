import { motion } from 'framer-motion'
import { experience, contact } from '../data/siteContent'

const cardVariant = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0 },
}

const cardRightVariant = {
  hidden: { opacity: 0, x: 24, scale: 0.98 },
  show: { opacity: 1, x: 0, scale: 1 },
}

export default function ExperienciaContato() {
  return (
    <section className="relative py-12 sm:py-14 px-4 sm:px-6 overflow-hidden" id="contato">
      <div className="aurora-bg-soft" aria-hidden />
      {/* Divider com glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px opacity-50"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.35), transparent)',
          boxShadow: '0 0 10px rgba(96, 165, 250, 0.15)',
        }}
      />
      <div className="max-w-[1050px] mx-auto">
        <motion.h2
          className="font-display font-bold text-3xl sm:text-[36px] text-accent-primary mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Experiência & Contato
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-stretch">
          {/* Card Esquerda — Experiência */}
          <motion.div
            className="rounded-[18px] border border-white/10 bg-white/[0.03] p-6 sm:p-7 backdrop-blur-[12px]"
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="text-sky-200 font-display font-semibold text-xl mb-3">
              {experience.title}
            </h3>
            <span className="inline-block mb-4 px-3 py-1.5 rounded-full bg-accent-primary/10 text-sky-200 text-[13px] font-medium">
              {experience.path}
            </span>
            {experience.paragraphs.map((p, i) => (
              <p key={i} className="text-white/80 leading-relaxed mb-3 text-[15px] last:mb-4">
                {p}
              </p>
            ))}
            <ul className="list-none pl-0 space-y-1.5 text-white/75 text-sm">
              {experience.highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-accent-primary">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card Direita — Contato / CTA (highlight + hover glow) */}
          <motion.div
            className="rounded-[18px] border-2 border-cyan-500/40 bg-white/[0.03] p-6 sm:p-7 backdrop-blur-[12px] shadow-[0_0_25px_rgba(56,189,248,0.08)] transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(56,189,248,0.12)] hover:border-cyan-400/50"
            variants={cardRightVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <h3 className="text-sky-200 font-display font-semibold text-xl mb-3">
              {contact.ctaHeadline}
            </h3>
            <p className="text-white/90 text-base leading-relaxed mb-5">
              {contact.ctaText}
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {contact.primaryButtons.map((btn, i) => (
                <a
                  key={i}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 ${
                    btn.primary
                      ? 'px-6 py-3.5 text-[15px] bg-emerald-500/90 hover:bg-emerald-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.45)] hover:scale-[1.02] active:scale-[0.98] animate-pulse-subtle'
                      : 'px-5 py-3 text-sm border border-white/20 text-white/90 hover:bg-white/10 hover:border-white/30'
                  }`}
                >
                  {btn.label}
                </a>
              ))}
            </div>
            <ul className="space-y-1.5 mb-4 text-sm text-white/70">
              {contact.guaranteePhrase.map((phrase, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-emerald-400">✔</span>
                  {phrase}
                </li>
              ))}
            </ul>
            <p className="text-[13px] text-white/60">
              {contact.conversionPhrase}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
