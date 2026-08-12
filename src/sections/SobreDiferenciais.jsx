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
            <MetaLabel className="mt-8">{about.focusTitle}</MetaLabel>
            <MetaLine>{about.focus.join(', ')}</MetaLine>
          </SectionColumn>

          {/* Destaque: princípios numerados com ênfase tipográfica */}
          <SectionColumn delay={0.14}>
            <MetaLabel className="mb-5">{diferenciais.title}</MetaLabel>
            <ul className="space-y-4">
              {diferenciais.items.map((item, i) => (
                <li key={item} className="group flex items-start gap-3 text-[15px] text-slate-300">
                  <span className="mt-0.5 font-mono text-[11px] text-accent-secondary transition-transform duration-300 group-hover:translate-x-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="transition-colors duration-300 group-hover:text-white">{item}</span>
                </li>
              ))}
            </ul>
          </SectionColumn>
        </SectionGrid>
      </SectionFrame>
    </SectionShell>
  )
}
