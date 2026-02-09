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
                  className={`inline-flex flex-1 min-w-[140px] items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 ${
                    btn.primary
                      ? 'px-6 py-3.5 text-[15px] bg-emerald-500/90 hover:bg-emerald-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.45)] hover:scale-[1.02] active:scale-[0.98] animate-pulse-subtle'
                      : 'px-5 py-3.5 text-sm border border-white/20 text-white/90 hover:bg-white/10 hover:border-white/30'
                  }`}
                >
                  {btn.icon === 'whatsapp' && (
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  )}
                  {btn.icon === 'email' && (
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  )}
                  <span>{btn.label}</span>
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
