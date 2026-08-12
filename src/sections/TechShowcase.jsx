import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'
import SectionShell from '../components/SectionShell'
import { useFullPage } from '../components/fullPageContext'
import { techStackShowcase, projects, sectionLabels } from '../data/siteContent'
import { getTechIconUrl } from '../utils/techIcons'

const projectItems = projects.items
const total = projectItems.length
const SECTION_ID = 'projetos'

const PROJECT_CAROUSEL_IMAGES = {
  agendaqui: [1, 2, 3].map((n) => `/Agendaqui/${n}.png`),
  intelitehub: [1].map((n) => `/InteliteHub/${n}.png`),
}

const CAROUSEL_INTERVAL_MS = 4000

export default function TechShowcase() {
  const { index, direction, sections, registerNestedNav } = useFullPage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [carouselImageIndex, setCarouselImageIndex] = useState(0)
  const currentIndexRef = useRef(0)
  const wasActiveRef = useRef(false)
  const project = projectItems[currentIndex]
  const projectTech = project.tech || []
  const carouselImages = PROJECT_CAROUSEL_IMAGES[project.id] ?? null
  const hasCarousel = !!carouselImages
  const isActive = sections[index]?.id === SECTION_ID

  const selectProject = useCallback((i) => {
    setCurrentIndex(i)
    currentIndexRef.current = i
    setCarouselImageIndex(0)
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

  useEffect(() => {
    if (!carouselImages) return undefined
    const t = setInterval(() => {
      setCarouselImageIndex((i) => (i + 1) % carouselImages.length)
    }, CAROUSEL_INTERVAL_MS)
    return () => clearInterval(t)
  }, [currentIndex, carouselImages])

  const goPrev = () => selectProject(currentIndex <= 0 ? total - 1 : currentIndex - 1)
  const goNext = () => selectProject(currentIndex >= total - 1 ? 0 : currentIndex + 1)

  return (
    <SectionShell number="03">
      <div className="mx-auto flex min-h-full max-w-6xl flex-col justify-center">
        <motion.p
          className="mb-3 font-mono text-[11px] tracking-[0.28em] text-accent-secondary"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {sectionLabels.projetos}
        </motion.p>
        <motion.h2
          className="mb-8 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Stack e projetos
        </motion.h2>

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {/* Painel esquerdo: stack + lista de projetos */}
          <motion.article
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-7"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h3 className="mb-2 font-display text-xl font-semibold text-white">Stack</h3>
            <p className="mb-4 text-sm text-slate-500">
              As tecnologias do projeto selecionado aparecem em destaque
            </p>

            <div className="flex flex-wrap gap-2">
              {techStackShowcase.allTech.map((tech) => {
                const used = projectTech.includes(tech)
                const iconUrl = getTechIconUrl(tech)
                return (
                  <span
                    key={tech}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      used
                        ? 'border-accent-primary/50 bg-accent-primary/10 text-sky-200 shadow-[0_0_15px_rgba(59,130,246,0.2)] opacity-100'
                        : 'border-white/10 bg-white/5 text-slate-400 opacity-35 hover:opacity-50'
                    }`}
                  >
                    {iconUrl ? (
                      <img src={iconUrl} alt="" className="h-4 w-4 shrink-0 object-contain" loading="lazy" />
                    ) : (
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-white/10 text-[10px] font-bold">
                        {tech.charAt(0)}
                      </span>
                    )}
                    {tech}
                  </span>
                )
              })}
            </div>

            <div className="mt-auto border-t border-white/[0.08] pt-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Projetos
              </p>
              <ul className="space-y-2">
                {projectItems.map((item, i) => {
                  const active = i === currentIndex
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => selectProject(i)}
                        className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all ${
                          active
                            ? 'border-accent-primary/40 bg-accent-primary/10 text-white'
                            : 'border-white/[0.06] bg-black/20 text-slate-400 hover:border-white/15 hover:text-slate-200'
                        }`}
                      >
                        <span
                          className={`font-mono text-[11px] tracking-wider ${
                            active ? 'text-accent-secondary' : 'text-slate-600'
                          }`}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-sm font-medium">{item.name}</span>
                        {item.badge && (
                          <Star className="h-3.5 w-3.5 shrink-0 text-amber-300" aria-hidden />
                        )}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </motion.article>

          {/* Painel direito: detalhe do projeto */}
          <motion.article
            className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="flex h-full flex-col"
              >
                {hasCarousel ? (
                  <div className="relative h-40 w-full shrink-0 overflow-hidden border-b border-white/10 bg-black/30 sm:h-44">
                    <div
                      className="flex h-full transition-transform duration-500 ease-out"
                      style={{
                        width: `${carouselImages.length * 100}%`,
                        transform: `translateX(-${carouselImageIndex * (100 / carouselImages.length)}%)`,
                      }}
                    >
                      {carouselImages.map((src, i) => (
                        <div
                          key={src}
                          className="h-full shrink-0"
                          style={{ width: `${100 / carouselImages.length}%` }}
                        >
                          <img
                            src={src}
                            alt={`${project.name} - demonstração ${i + 1}`}
                            className="h-full w-full object-cover object-top"
                            loading={i === 0 ? 'eager' : 'lazy'}
                          />
                        </div>
                      ))}
                    </div>
                    {carouselImages.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setCarouselImageIndex(
                              (i) => (i - 1 + carouselImages.length) % carouselImages.length
                            )
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white/90 hover:bg-black/70"
                          aria-label="Imagem anterior"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setCarouselImageIndex((i) => (i + 1) % carouselImages.length)
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white/90 hover:bg-black/70"
                          aria-label="Próxima imagem"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="h-28 w-full shrink-0 border-b border-white/10 bg-gradient-to-br from-accent-primary/15 via-white/5 to-accent-secondary/10" />
                )}

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    {project.badge && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-semibold text-amber-300">
                        <Star className="h-3.5 w-3.5" />
                        {project.badge}
                      </span>
                    )}
                    <h3 className="font-display text-2xl font-semibold text-white">{project.name}</h3>
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
                  {project.result && (
                    <p className="mb-4 text-sm font-medium text-accent-secondary">
                      Resultado: {project.result}
                    </p>
                  )}
                  <ul className="mb-4 space-y-1.5 text-sm text-slate-400">
                    {project.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-primary" />
                        {typeof f === 'string' ? f.replace(/^[^\w\s]+\s*/, '').trim() || f : f}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {projectTech.map((t) => (
                      <span key={t} className="rounded bg-white/10 px-2 py-0.5 text-xs text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-accent-primary/50 bg-accent-primary/20 px-4 py-2 text-sm font-medium text-accent-secondary transition-colors hover:bg-accent-primary/30"
                      >
                        Acessar projeto
                        <span aria-hidden>→</span>
                      </a>
                    ) : (
                      <span />
                    )}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm tabular-nums text-slate-500">
                        {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                      </span>
                      <div className="flex gap-1">
                        <button
                          type="button"
                          onClick={goPrev}
                          className="rounded-lg border border-white/15 bg-white/5 p-2 text-white/80 hover:bg-white/10"
                          aria-label="Projeto anterior"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={goNext}
                          className="rounded-lg border border-white/15 bg-white/5 p-2 text-white/80 hover:bg-white/10"
                          aria-label="Próximo projeto"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.article>
        </div>
      </div>
    </SectionShell>
  )
}
