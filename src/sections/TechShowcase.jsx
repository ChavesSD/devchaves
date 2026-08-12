import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'
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
import { projects, sectionLabels } from '../data/siteContent'

const projectItems = projects.items
const total = projectItems.length
const SECTION_ID = 'projetos'

export default function TechShowcase() {
  const { index, direction, sections, registerNestedNav } = useFullPage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentIndexRef = useRef(0)
  const wasActiveRef = useRef(false)
  const project = projectItems[currentIndex]
  const projectTech = project.tech || []
  const isActive = sections[index]?.id === SECTION_ID

  const selectProject = useCallback((i) => {
    setCurrentIndex(i)
    currentIndexRef.current = i
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
        const i = currentIndexRef.current
        if (i >= total - 1) return false
        selectProject(i + 1)
        return true
      },
      onPrev: () => {
        const i = currentIndexRef.current
        if (i <= 0) return false
        selectProject(i - 1)
        return true
      },
    })
  }, [registerNestedNav, selectProject])

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
                {project.badge && (
                  <p className="mb-2 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-amber-300">
                    <Star className="h-3.5 w-3.5" aria-hidden />
                    {project.badge}
                  </p>
                )}

                <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {project.name}
                </h3>

                <BodyText className="mt-4">{project.description}</BodyText>

                <MetaLabel className="mt-8">Stack</MetaLabel>
                <MetaLine>{projectTech.join(', ')}</MetaLine>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent-secondary transition-colors hover:text-white"
                  >
                    Acessar projeto
                    <span aria-hidden>→</span>
                  </a>
                )}

                <p className="mt-10 font-mono text-sm tabular-nums text-slate-500">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </p>
              </motion.div>
            </AnimatePresence>
          </SectionColumn>

          {/* Destaque: lista interativa ligada ao scroll da página */}
          <SectionColumn delay={0.14}>
            <MetaLabel className="mb-5">{projects.listTitle}</MetaLabel>
            <ul className="relative space-y-1">
              <span
                className="absolute left-[7px] top-3 bottom-3 w-px bg-white/10"
                aria-hidden
              />
              {projectItems.map((item, i) => {
                const active = i === currentIndex
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => selectProject(i)}
                      className={`relative flex w-full items-center gap-3 py-2.5 text-left transition-colors ${
                        active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span
                        className={`relative z-10 flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          active
                            ? 'border-accent-secondary bg-accent-secondary shadow-[0_0_12px_rgba(34,211,238,0.45)]'
                            : 'border-white/20 bg-[#030712]'
                        }`}
                      >
                        {active && <span className="h-1 w-1 rounded-full bg-[#030712]" />}
                      </span>
                      <span
                        className={`font-mono text-[11px] ${
                          active ? 'text-accent-secondary' : 'text-slate-600'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-[15px] ${active ? 'font-medium' : ''}`}>
                        {item.name}
                      </span>
                      {item.badge && (
                        <Star className="h-3.5 w-3.5 text-amber-300" aria-hidden />
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </SectionColumn>
        </SectionGrid>
      </SectionFrame>
    </SectionShell>
  )
}
