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
            <MetaLabel className="mt-4 sm:mt-5">{experience.pathTitle}</MetaLabel>
            <MetaLine>{steps.join(', ')}</MetaLine>
          </SectionColumn>

          <SectionColumn delay={0.14}>
            <MetaLabel className="mb-2.5 sm:mb-4">{experience.stepsTitle}</MetaLabel>
            <ol className="relative">
              <span
                className="absolute left-[9px] top-2 bottom-2 w-px bg-white/10 sm:left-[11px]"
                aria-hidden
              />
              <motion.span
                className="absolute left-[9px] top-2 w-px origin-top bg-gradient-to-b from-accent-secondary to-accent-primary sm:left-[11px]"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                style={{ height: 'calc(100% - 1rem)', transformOrigin: 'top' }}
                aria-hidden
              />
              {steps.map((step, i) => (
                <li key={step} className="relative flex gap-3 pb-5 last:pb-0 sm:gap-4 sm:pb-6">
                  <span className="relative z-10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent-secondary/50 bg-[#030712] font-mono text-[9px] text-accent-secondary sm:h-6 sm:w-6 sm:text-[10px]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white sm:text-lg">
                      {step}
                    </h3>
                    {experience.stepNotes[i] && (
                      <p className="mt-1 text-sm leading-snug text-slate-400">
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
