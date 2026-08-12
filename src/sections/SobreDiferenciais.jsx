import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionShell from '../components/SectionShell'
import { about, diferenciais, sectionLabels } from '../data/siteContent'

export default function SobreDiferenciais() {
  return (
    <SectionShell number="02">
      <div className="mx-auto flex min-h-full max-w-6xl flex-col justify-center">
        <motion.p
          className="mb-3 font-mono text-[11px] tracking-[0.28em] text-accent-secondary"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {sectionLabels.sobre}
        </motion.p>
        <motion.h2
          className="mb-8 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          {about.title}
        </motion.h2>

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <motion.article
            className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            {about.paragraphs.map((p) => (
              <p key={p} className="mb-4 text-[15px] leading-relaxed text-slate-300 last:mb-0">
                {p}
              </p>
            ))}
            <p className="mt-5 text-sm text-slate-400">
              Atuação: <span className="text-accent-secondary">{about.atuacao}</span>
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {about.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-accent-primary/20 bg-accent-primary/10 px-3 py-1.5 text-[13px] text-white/90"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-6 border-t border-white/[0.08] pt-5">
              <p className="mb-2 text-xs font-medium text-slate-500">{about.proofCount}</p>
              <ul className="space-y-1.5 text-sm text-slate-300">
                {about.proofSocial.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          <motion.article
            className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
          >
            <h3 className="mb-5 font-display text-2xl font-bold text-white">{diferenciais.title}</h3>
            <ul className="space-y-3">
              {diferenciais.items.map((item, i) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-slate-300">
                  <span className="mt-0.5 font-mono text-[11px] text-accent-secondary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-white/[0.08] pt-5">
              <h4 className="mb-3 text-sm font-semibold text-white">{diferenciais.compromissoTitle}</h4>
              <div className="grid grid-cols-2 gap-2">
                {diferenciais.compromisso.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-white/[0.08] bg-black/25 px-3 py-2.5 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </SectionShell>
  )
}
