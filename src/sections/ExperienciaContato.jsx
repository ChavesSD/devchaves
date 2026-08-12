import { motion } from 'framer-motion'
import SectionShell from '../components/SectionShell'
import {
  SectionFrame,
  SectionEyebrow,
  SectionHeading,
  SectionGrid,
  SectionColumn,
  MetaLabel,
  BodyText,
  MetaLine,
} from '../components/SectionLayout'
import { experience, sectionLabels } from '../data/siteContent'

const steps = experience.steps || []

export default function ExperienciaContato() {
  return (
    <SectionShell number="04">
      <SectionFrame>
        <SectionEyebrow>{sectionLabels.experiencia}</SectionEyebrow>
        <SectionHeading>{experience.title}</SectionHeading>

        <SectionGrid>
          <SectionColumn delay={0.08}>
            <BodyText>{experience.summary}</BodyText>
            <MetaLabel className="mt-8">{experience.pathTitle}</MetaLabel>
            <MetaLine>{steps.join(', ')}</MetaLine>
          </SectionColumn>

          {/* Destaque: trajetória com linha viva */}
          <SectionColumn delay={0.14}>
            <MetaLabel className="mb-5">{experience.stepsTitle}</MetaLabel>
            <ol className="relative">
              <span
                className="absolute left-[11px] top-3 bottom-3 w-px bg-white/10"
                aria-hidden
              />
              <motion.span
                className="absolute left-[11px] top-3 w-px origin-top bg-gradient-to-b from-accent-secondary to-accent-primary"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                style={{ height: 'calc(100% - 1.5rem)', transformOrigin: 'top' }}
                aria-hidden
              />
              {steps.map((step, i) => (
                <li key={step} className="relative flex gap-4 pb-8 last:pb-0">
                  <span className="relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent-secondary/50 bg-[#030712] font-mono text-[10px] text-accent-secondary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                      {step}
                    </h3>
                    {experience.stepNotes[i] && (
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                        {experience.stepNotes[i]}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </SectionColumn>
        </SectionGrid>
      </SectionFrame>
    </SectionShell>
  )
}
