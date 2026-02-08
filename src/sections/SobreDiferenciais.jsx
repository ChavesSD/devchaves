import { motion } from 'framer-motion'
import { about, diferenciais } from '../data/siteContent'

const cardLeftVariant = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0 },
}
const cardRightVariant = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0 },
}

export default function SobreDiferenciais() {
  return (
    <section className="relative py-12 sm:py-14 px-4 sm:px-6" id="sobre">
      <div className="section-bg-sobre" aria-hidden />
      {/* Divider com glow suave */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px opacity-50"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.35), transparent)',
          boxShadow: '0 0 10px rgba(96, 165, 250, 0.15)',
        }}
      />

      <div className="max-w-[1050px] mx-auto">
        {/* Badge opcional */}
        <motion.p
          className="text-center text-slate-500 text-sm font-medium mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02]">
            👤 Sobre & Diferenciais
          </span>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card esquerda: Sobre Mim */}
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 backdrop-blur-[10px] h-full flex flex-col"
            variants={cardLeftVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <h2 className="text-accent-primary font-display font-bold text-2xl sm:text-[32px] mb-4">
              ✨ {about.title}
            </h2>
            <p className="text-white/80 leading-relaxed mb-3 text-[15px]">
              {about.paragraphs[0]}
            </p>
            <p className="text-white/80 leading-relaxed mb-4 text-[15px]">
              {about.paragraphs[1]}
            </p>
            <p className="text-slate-400 text-sm font-medium mb-3">
              Atuação: <span className="text-accent-secondary">{about.atuacao}</span>
            </p>
            <div className="flex flex-wrap gap-2.5 mt-4">
              {about.chips.map((chip, i) => (
                <span
                  key={i}
                  className="text-[13px] px-3 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-white/90"
                >
                  {chip}
                </span>
              ))}
            </div>
            {/* Prova social */}
            <div className="mt-6 pt-4 border-t border-white/[0.08]">
              <p className="text-slate-500 text-xs font-medium mb-2">{about.proofCount}</p>
              <ul className="space-y-1.5 text-white/75 text-sm">
                {about.proofSocial.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-accent-primary">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card direita: Diferenciais */}
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 backdrop-blur-[10px] h-full flex flex-col"
            id="diferenciais"
            variants={cardRightVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h2 className="text-accent-primary font-display font-bold text-2xl sm:text-[32px] mb-4">
              ✔️ {diferenciais.title}
            </h2>
            <ul className="list-none pl-0 space-y-2 text-white/80 leading-relaxed text-[15px]">
              {diferenciais.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-accent-primary shrink-0 mt-0.5" aria-hidden>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Mini bloco Compromisso */}
            <div className="mt-5 pt-4 border-t border-white/[0.08]">
              <h3 className="text-white/90 font-semibold text-base mb-3">
                {diferenciais.compromissoTitle}
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {diferenciais.compromisso.map((item, i) => (
                  <span
                    key={i}
                    className="py-2.5 px-3 rounded-xl bg-black/25 border border-white/[0.08] text-white/85 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
