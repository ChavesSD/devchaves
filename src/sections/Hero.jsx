import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Button from '../components/Button'
import HandTechPowers from '../components/HandTechPowers'
import SectionShell from '../components/SectionShell'
import { useFullPage } from '../components/fullPageContext'
import { hero } from '../data/siteContent'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const { next, index } = useFullPage()
  const [firstName, lastName] = hero.name.split(' ')
  const [photoOk, setPhotoOk] = useState(Boolean(hero.photo))
  const isActive = index === 0

  return (
    <SectionShell number="01">
      <div className="mx-auto flex min-h-full max-w-6xl flex-col justify-center">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          <motion.div
            className="text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={item}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              {hero.statusLabel}
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-[clamp(2.25rem,5.5vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white"
            >
              {firstName}
              <span className="block bg-gradient-to-r from-sky-300 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                {lastName}
              </span>
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-5 h-px w-24 bg-gradient-to-r from-accent-secondary to-transparent"
            />

            <motion.p
              variants={item}
              className="mt-5 text-lg font-medium text-accent-secondary sm:text-xl"
            >
              {hero.title}
            </motion.p>
            <motion.p
              variants={item}
              className="mt-3 max-w-xl text-base leading-relaxed text-slate-400"
            >
              {hero.subtitle}
            </motion.p>

            <motion.ul variants={item} className="mt-5 space-y-2 text-sm text-slate-400">
              {hero.highlights.map((line) => (
                <li key={line} className="flex items-center gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" aria-hidden />
                  {line}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <Button href={hero.ctaPrimary.href} label={hero.ctaPrimary.label} variant="primary" />
              <Button href={hero.ctaSecondary.href} label={hero.ctaSecondary.label} variant="secondary" />
            </motion.div>

            <motion.p variants={item} className="mt-4 text-xs tracking-wide text-slate-500">
              {hero.trustLine}
            </motion.p>

            <motion.div variants={item} className="mt-8 grid max-w-md grid-cols-3 gap-3">
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3"
                >
                  <div className="font-display text-lg font-bold text-white">{stat.value}</div>
                  <div className="mt-0.5 text-[11px] leading-tight text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto flex h-[min(52vh,420px)] w-full max-w-sm items-end justify-center sm:max-w-md lg:h-[min(68vh,540px)] lg:max-w-lg"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow ambiente por trás */}
            <div
              className="pointer-events-none absolute bottom-[6%] left-1/2 h-[78%] w-[82%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18)_0%,rgba(59,130,246,0.08)_40%,transparent_72%)] blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-1/2 h-20 w-56 -translate-x-1/2 rounded-[100%] bg-cyan-400/15 blur-2xl"
              aria-hidden
            />

            {photoOk ? (
              <div className="hero-photo-wrap relative z-10 h-full w-auto max-w-full">
                <img
                  src={hero.photo}
                  alt={hero.name}
                  onError={() => setPhotoOk(false)}
                  className="hero-photo h-full w-auto max-w-full object-contain object-bottom"
                />
                <HandTechPowers items={hero.techStackMarquee} active={isActive} />
              </div>
            ) : (
              <div className="relative z-10 flex h-full w-full items-end justify-center">
                <div className="mb-8 flex h-[85%] w-[70%] items-center justify-center rounded-[2rem] border border-dashed border-white/15 bg-white/[0.02] px-6 text-center">
                  <p className="text-sm leading-relaxed text-slate-500">
                    Coloque a foto sem fundo em
                    <span className="mt-1 block font-mono text-accent-secondary">public/deyvison.png</span>
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        <button
          type="button"
          onClick={next}
          className="mx-auto mt-8 hidden items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-slate-500 transition-colors hover:text-white lg:flex"
        >
          {hero.scrollHint}
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </button>
      </div>
    </SectionShell>
  )
}
