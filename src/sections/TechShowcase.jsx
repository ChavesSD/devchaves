import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, X } from 'lucide-react'
import SectionShell from '../components/SectionShell'
import {
  SectionFrame,
  SectionEyebrow,
  SectionHeading,
  SectionGrid,
  SectionColumn,
  MetaLabel,
  MetaLine,
} from '../components/SectionLayout'
import { useFullPage } from '../components/fullPageContext'
import { projects, sectionLabels, buildWhatsAppUrl } from '../data/siteContent'

const projectItems = projects.items
const total = projectItems.length
const SECTION_ID = 'projetos'

const CASE_ROWS = [
  { key: 'problem', label: 'Problema' },
  { key: 'action', label: 'O que fiz' },
  { key: 'result', label: 'Resultado' },
]

export default function TechShowcase() {
  const { index, direction, sections, registerNestedNav } = useFullPage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const currentIndexRef = useRef(0)
  const wasActiveRef = useRef(false)
  const project = projectItems[currentIndex]
  const projectTech = project.tech || []
  const isActive = sections[index]?.id === SECTION_ID

  const selectProject = useCallback((i) => {
    setCurrentIndex(i)
    currentIndexRef.current = i
    setLightboxOpen(false)
  }, [])

  useEffect(() => {
    currentIndexRef.current = currentIndex
  }, [currentIndex])

  useEffect(() => {
    if (isActive && !wasActiveRef.current) {
      selectProject(direction < 0 ? total - 1 : 0)
    }
    wasActiveRef.current = isActive
  }, [direction, isActive, selectProject])

  useEffect(() => {
    return registerNestedNav({
      sectionId: SECTION_ID,
      onNext: () => {
        if (lightboxOpen) return true
        const i = currentIndexRef.current
        if (i >= total - 1) return false
        selectProject(i + 1)
        return true
      },
      onPrev: () => {
        if (lightboxOpen) return true
        const i = currentIndexRef.current
        if (i <= 0) return false
        selectProject(i - 1)
        return true
      },
    })
  }, [registerNestedNav, selectProject, lightboxOpen])

  useEffect(() => {
    if (!lightboxOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen])

  return (
    <SectionShell number="03">
      <SectionFrame>
        <SectionEyebrow>{sectionLabels.projetos}</SectionEyebrow>
        <SectionHeading>{projects.title}</SectionHeading>

        <SectionGrid>
          <SectionColumn delay={0.08}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {project.preview && (
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="group relative mb-3 block w-full overflow-hidden rounded-lg border border-white/10 bg-black/30 text-left transition-opacity hover:opacity-95 sm:mb-4"
                    aria-label={`Ampliar preview de ${project.name}`}
                  >
                    <img
                      src={project.preview}
                      alt={`Preview de ${project.name}`}
                      className="h-20 w-full object-cover object-top sm:h-24 lg:h-28"
                      loading="lazy"
                    />
                    <span className="absolute bottom-1.5 right-2 rounded bg-black/55 px-2 py-0.5 font-mono text-[10px] tracking-wide text-white/80 opacity-80 transition-opacity group-hover:opacity-100">
                      Ampliar
                    </span>
                  </button>
                )}

                <div className="mb-1 flex flex-wrap items-center gap-2">
                  {project.badge && (
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] tracking-wide text-amber-300">
                      <Star className="h-3 w-3" aria-hidden />
                      {project.badge}
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                    {project.name}
                  </h3>
                </div>

                <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-300 lg:line-clamp-none lg:text-base">
                  {project.description}
                </p>

                {project.case && (
                  <dl className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
                    {CASE_ROWS.map(({ key, label }) => (
                      <div key={key} className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                        <dt className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                          {label}
                        </dt>
                        <dd
                          className={`text-sm leading-snug ${
                            key === 'result' ? 'text-accent-secondary' : 'text-slate-300'
                          }`}
                        >
                          {project.case[key]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                <MetaLabel className="mt-3 sm:mt-4">Stack</MetaLabel>
                <MetaLine className="!mt-1.5 line-clamp-1 sm:line-clamp-none">
                  {projectTech.join(', ')}
                </MetaLine>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mt-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-secondary transition-colors hover:text-white"
                    >
                      {project.demoLabel || 'Ver online'}
                      <span aria-hidden>→</span>
                    </a>
                  )}
                  <a
                    href={buildWhatsAppUrl(
                      `Olá Deyvison, vi o projeto ${project.name} no seu portfólio e quero algo nessa linha. Podemos conversar?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-white"
                  >
                    Quero algo assim
                    <span aria-hidden>→</span>
                  </a>
                </div>

                <p className="mt-3 font-mono text-xs tabular-nums text-slate-500 sm:mt-4 sm:text-sm">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </p>
              </motion.div>
            </AnimatePresence>
          </SectionColumn>

          <SectionColumn delay={0.14}>
            <MetaLabel className="mb-2 sm:mb-4">{projects.listTitle}</MetaLabel>
            <ul className="relative space-y-0 sm:space-y-1">
              <span
                className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10"
                aria-hidden
              />
              {projectItems.map((item, i) => {
                const active = i === currentIndex
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => selectProject(i)}
                      className={`relative flex w-full items-center gap-2.5 py-1.5 text-left transition-colors sm:gap-3 sm:py-2 ${
                        active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span
                        className={`relative z-10 flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-[15px] sm:w-[15px] ${
                          active
                            ? 'border-accent-secondary bg-accent-secondary shadow-[0_0_12px_rgba(34,211,238,0.45)]'
                            : 'border-white/20 bg-[#030712]'
                        }`}
                      >
                        {active && <span className="h-1 w-1 rounded-full bg-[#030712]" />}
                      </span>
                      <span
                        className={`font-mono text-[10px] sm:text-[11px] ${
                          active ? 'text-accent-secondary' : 'text-slate-600'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-sm sm:text-[15px] ${active ? 'font-medium' : ''}`}>
                        {item.name}
                      </span>
                      {item.badge && (
                        <Star className="h-3 w-3 text-amber-300 sm:h-3.5 sm:w-3.5" aria-hidden />
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </SectionColumn>
        </SectionGrid>
      </SectionFrame>

      <AnimatePresence>
        {lightboxOpen && project.preview && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`Preview ampliado de ${project.name}`}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 p-2 text-white/80 transition-colors hover:text-white"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              src={project.preview}
              alt={`Preview ampliado de ${project.name}`}
              className="max-h-[88dvh] max-w-full object-contain"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  )
}
