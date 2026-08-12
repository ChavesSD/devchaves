import { useState } from 'react'
import { ArrowDown } from 'lucide-react'
import Button from '../components/Button'
import HandTechPowers from '../components/HandTechPowers'
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
import { useFullPage } from '../components/fullPageContext'
import { hero, sectionLabels } from '../data/siteContent'

export default function Hero() {
  const { next, index } = useFullPage()
  const [firstName, lastName] = hero.name.split(' ')
  const [photoOk, setPhotoOk] = useState(Boolean(hero.photo))
  const isActive = index === 0

  return (
    <SectionShell number="01">
      <SectionFrame>
        <SectionEyebrow>{sectionLabels.inicio}</SectionEyebrow>

        <SectionGrid className="mt-6 items-center lg:gap-10">
          <SectionColumn delay={0.08}>
            <SectionHeading as="h1" className="!max-w-none sm:!text-5xl">
              {firstName}{' '}
              <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                {lastName}
              </span>
            </SectionHeading>

            <p className="mt-5 text-lg font-medium text-accent-secondary sm:text-xl">
              {hero.title}
            </p>
            <BodyText className="mt-4">{hero.subtitle}</BodyText>

            <MetaLabel className="mt-8">Status</MetaLabel>
            <MetaLine>{hero.statusLabel}</MetaLine>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={hero.ctaPrimary.href} label={hero.ctaPrimary.label} variant="primary" />
              <Button href={hero.ctaSecondary.href} label={hero.ctaSecondary.label} variant="secondary" />
            </div>
          </SectionColumn>

          <SectionColumn delay={0.14}>
            <div className="relative mx-auto flex h-[min(52vh,420px)] w-full max-w-md items-center justify-center lg:mx-0 lg:h-[min(62vh,520px)] lg:max-w-none">
              <div
                className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18)_0%,rgba(59,130,246,0.08)_40%,transparent_72%)] blur-3xl"
                aria-hidden
              />
              {photoOk ? (
                <div className="hero-photo-wrap relative z-10 h-full w-auto max-w-full">
                  <img
                    src={hero.photo}
                    alt={hero.name}
                    onError={() => setPhotoOk(false)}
                    className="hero-photo h-full w-auto max-w-full object-contain object-center"
                  />
                  <HandTechPowers items={hero.techStackMarquee} active={isActive} />
                </div>
              ) : (
                <p className="relative z-10 text-sm text-slate-500">
                  Foto em <span className="font-mono text-accent-secondary">public/deyvison.png</span>
                </p>
              )}
            </div>
          </SectionColumn>
        </SectionGrid>

        <button
          type="button"
          onClick={next}
          className="mt-8 hidden items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-slate-500 transition-colors hover:text-white lg:inline-flex"
        >
          {hero.scrollHint}
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </button>
      </SectionFrame>
    </SectionShell>
  )
}
