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
  NumberedList,
} from '../components/SectionLayout'
import { about, diferenciais, sectionLabels } from '../data/siteContent'

export default function SobreDiferenciais() {
  return (
    <SectionShell number="02">
      <SectionFrame>
        <SectionEyebrow>{sectionLabels.sobre}</SectionEyebrow>
        <SectionHeading>{about.title}</SectionHeading>

        <SectionGrid>
          <SectionColumn delay={0.08}>
            {about.paragraphs.map((p) => (
              <BodyText key={p}>{p}</BodyText>
            ))}

            <MetaLabel className="mt-4 sm:mt-5">{about.focusTitle}</MetaLabel>
            <MetaLine>{about.focus.join(', ')}</MetaLine>

            <MetaLabel className="mt-4 sm:mt-5">{about.transformTitle}</MetaLabel>
            <div className="mt-2.5 grid gap-3 sm:mt-3 sm:grid-cols-2 sm:gap-4">
              <div>
                <p className="font-mono text-[10px] tracking-wide text-slate-500">Antes</p>
                <p className="mt-1 text-sm leading-snug text-slate-400">
                  {about.transform.before}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-wide text-accent-secondary">Depois</p>
                <p className="mt-1 text-sm leading-snug text-slate-200">
                  {about.transform.after}
                </p>
              </div>
            </div>
          </SectionColumn>

          <SectionColumn delay={0.14}>
            <MetaLabel className="mb-2.5 sm:mb-4">{diferenciais.title}</MetaLabel>
            <NumberedList
              items={diferenciais.items}
              renderItem={(item) => (
                <span className="transition-colors duration-300 group-hover:text-white">
                  {item}
                </span>
              )}
            />
          </SectionColumn>
        </SectionGrid>
      </SectionFrame>
    </SectionShell>
  )
}
