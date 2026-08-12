import { useState } from 'react'
import { ArrowDown } from 'lucide-react'
import Button from '../components/Button'
import HandTechPowers from '../components/HandTechPowers'
import SectionShell from '../components/SectionShell'
import {
  SectionFrame,
  SectionEyebrow,
  SectionHeading,
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

  const photo = (
    <div className="relative mx-auto flex h-[min(38vh,280px)] w-full max-w-[220px] items-center justify-center sm:h-[min(42vh,320px)] sm:max-w-xs lg:h-[min(62vh,520px)] lg:max-w-none">
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
  )

  const copy = (
    <>
      <SectionEyebrow className="text-center lg:text-left">
        {sectionLabels.inicio}
      </SectionEyebrow>

      <SectionHeading as="h1" className="!mx-auto !max-w-none sm:!text-5xl lg:!mx-0">
        {firstName}{' '}
        <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
          {lastName}
        </span>
      </SectionHeading>

      <p className="mt-4 text-lg font-medium text-accent-secondary sm:mt-5 sm:text-xl">
        {hero.title}
      </p>
      <BodyText className="mx-auto mt-3 lg:mx-0 lg:mt-4">{hero.subtitle}</BodyText>

      <MetaLabel className="mt-6 lg:mt-8">Status</MetaLabel>
      <MetaLine>{hero.statusLabel}</MetaLine>

      <div className="mt-6 flex flex-wrap justify-center gap-3 lg:mt-8 lg:justify-start">
        <Button href={hero.ctaPrimary.href} label={hero.ctaPrimary.label} variant="primary" />
        <Button href={hero.ctaSecondary.href} label={hero.ctaSecondary.label} variant="secondary" />
      </div>
    </>
  )

  return (
    <SectionShell number="01">
      <SectionFrame>
        {/* Mobile: coluna com foto → texto */}
        <div className="flex flex-col items-center gap-6 text-center lg:hidden">
          <SectionColumn delay={0.08} className="w-full">
            {photo}
          </SectionColumn>
          <SectionColumn delay={0.14} className="w-full">
            {copy}
          </SectionColumn>
        </div>

        {/* Desktop: texto | foto lado a lado */}
        <div className="mt-6 hidden grid-cols-[1.15fr_0.85fr] items-center gap-10 lg:grid">
          <SectionColumn delay={0.08} className="text-left">
            {copy}
          </SectionColumn>
          <SectionColumn delay={0.14}>{photo}</SectionColumn>
        </div>

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
