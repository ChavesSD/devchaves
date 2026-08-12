import { motion } from 'framer-motion'
import SectionShell from '../components/SectionShell'
import { experience, sectionLabels } from '../data/siteContent'

const steps = experience.steps || []

export default function ExperienciaContato() {
  return (
    <SectionShell number="04">
      <div className="mx-auto flex min-h-full max-w-5xl flex-col justify-center">
        <motion.p
          className="mb-3 font-mono text-[11px] tracking-[0.28em] text-accent-secondary"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {sectionLabels.experiencia}
        </motion.p>
        <motion.h2
          className="mb-10 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {experience.title}
        </motion.h2>

        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.ol
            className="relative space-y-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="absolute left-[15px] top-3 bottom-3 w-px bg-white/10" aria-hidden />
            {steps.map((step, i) => (
              <li key={step} className="relative flex gap-5 pb-10 last:pb-0">
                <span className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent-secondary/40 bg-[#030712] font-mono text-[11px] text-accent-secondary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{step}</h3>
                  {i === 0 && (
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
                      {experience.paragraphs[0]}
                    </p>
                  )}
                  {i === steps.length - 1 && (
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
                      {experience.paragraphs[1]}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </motion.ol>

          <motion.div
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              {experience.focusTitle}
            </p>
            <ul className="space-y-4">
              {experience.highlights.map((item, i) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/[0.08] bg-black/20 px-4 py-4 text-slate-200"
                >
                  <span className="mr-3 font-mono text-[11px] text-accent-secondary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  )
}
