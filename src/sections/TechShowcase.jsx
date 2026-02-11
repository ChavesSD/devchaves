import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { techStackShowcase, projects } from '../data/siteContent'
import { Star } from 'lucide-react'
import { getTechIconUrl } from '../utils/techIcons'

const projectItems = projects.items
const total = projectItems.length

const AGENDAQUI_IMAGES = [1, 2, 3].map((n) => `/Agendaqui/${n}.png`)
const AUTOZAP_IMAGES = [1, 2, 3].map((n) => `/AutoZap/${n}.png`)
const CREDENCIAIS_IMAGES = [1, 2, 3].map((n) => `/Credenciais/${n}.png`)
const CAROUSEL_INTERVAL_MS = 4000

const PROJECT_CAROUSEL_IMAGES = {
  agendaqui: AGENDAQUI_IMAGES,
  autozap: AUTOZAP_IMAGES,
  'intelite-credenciais': CREDENCIAIS_IMAGES,
}

export default function TechShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [carouselImageIndex, setCarouselImageIndex] = useState(0)
  const project = projectItems[currentIndex]
  const projectTech = project.tech || []
  const carouselImages = PROJECT_CAROUSEL_IMAGES[project.id] ?? null
  const hasCarousel = !!carouselImages

  // Carrossel automático quando o projeto tem galeria
  useEffect(() => {
    if (!carouselImages) return
    const t = setInterval(() => {
      setCarouselImageIndex((i) => (i + 1) % carouselImages.length)
    }, CAROUSEL_INTERVAL_MS)
    return () => clearInterval(t)
  }, [currentIndex, carouselImages])

  // Reset do carrossel ao trocar de projeto
  useEffect(() => {
    if (hasCarousel) setCarouselImageIndex(0)
  }, [currentIndex])

  const goPrev = () => setCurrentIndex((i) => (i <= 0 ? total - 1 : i - 1))
  const goNext = () => setCurrentIndex((i) => (i >= total - 1 ? 0 : i + 1))

  return (
    <section className="relative py-12 sm:py-14 px-4 sm:px-6" id="tecnologias">
      <div className="section-bg-grid" aria-hidden />
      {/* Divider com glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px opacity-50"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.35), transparent)',
          boxShadow: '0 0 10px rgba(96, 165, 250, 0.15)',
        }}
      />
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-display font-bold text-2xl sm:text-3xl text-accent-primary mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Stack & Projetos
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-10 items-start">
          {/* Coluna esquerda: chips (no mobile fica embaixo) */}
          <div className="order-2 lg:order-1">
            <p className="text-slate-500 text-sm mb-4">
              Stack do projeto selecionado em destaque
            </p>
            <div className="flex flex-wrap gap-2">
              {techStackShowcase.allTech.map((tech) => {
                const used = projectTech.includes(tech)
                const iconUrl = getTechIconUrl(tech)
                return (
                  <span
                    key={tech}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
                      used
                        ? 'opacity-100 border-accent-primary/50 bg-accent-primary/10 text-sky-200 shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                        : 'opacity-35 border-white/10 bg-white/5 text-slate-400 hover:opacity-50'
                    }`}
                  >
                    {iconUrl ? (
                      <img src={iconUrl} alt="" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    ) : (
                      <span className="w-4 h-4 rounded bg-white/10 flex items-center justify-center text-[10px] font-bold shrink-0">
                        {tech.charAt(0)}
                      </span>
                    )}
                    {tech}
                  </span>
                )
              })}
            </div>
          </div>

          {/* Coluna direita: card do projeto + setas (no mobile fica primeiro) */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-[12px] overflow-hidden min-h-[340px] transform transition-transform duration-300 hover:scale-[1.02]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="p-0"
                >
                  {/* Área de demonstração: carrossel de imagens ou placeholder */}
                  {hasCarousel ? (
                    <div className="relative h-44 sm:h-52 w-full border-b border-white/10 overflow-hidden bg-black/30">
                      <div
                        className="flex h-full transition-transform duration-500 ease-out"
                        style={{
                          width: `${carouselImages.length * 100}%`,
                          transform: `translateX(-${carouselImageIndex * (100 / carouselImages.length)}%)`,
                        }}
                        aria-live="polite"
                        aria-label={`Imagem ${carouselImageIndex + 1} de ${carouselImages.length}`}
                      >
                        {carouselImages.map((src, i) => (
                          <div
                            key={src}
                            className="h-full shrink-0 bg-black/20"
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
                      {/* Navegação do carrossel de imagens */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setCarouselImageIndex((i) => (i - 1 + carouselImages.length) % carouselImages.length)
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white/90 hover:bg-black/70 hover:text-white transition-colors"
                        aria-label="Imagem anterior"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setCarouselImageIndex((i) => (i + 1) % carouselImages.length)
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white/90 hover:bg-black/70 hover:text-white transition-colors"
                        aria-label="Próxima imagem"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {carouselImages.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              setCarouselImageIndex(i)
                            }}
                            className={`h-1.5 rounded-full transition-all ${
                              i === carouselImageIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/70'
                            }`}
                            aria-label={`Ir para imagem ${i + 1}`}
                            aria-current={i === carouselImageIndex}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div
                      className="h-28 w-full bg-gradient-to-br from-accent-primary/15 via-white/5 to-accent-secondary/10 border-b border-white/10"
                      aria-hidden
                    />
                  )}
                  <div className="p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {project.badge && (
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300">
                          <span className="inline-flex items-center gap-1">
                            <Star className="w-3.5 h-3.5" aria-hidden />
                            <span>{project.badge}</span>
                          </span>
                        </span>
                      )}
                      <h3 className="font-display font-semibold text-2xl text-white">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>
                    {project.result && (
                      <p className="text-accent-secondary/90 text-sm font-medium mb-4">
                        Resultado: {project.result}
                      </p>
                    )}
                    <ul className="space-y-1.5 mb-4 text-sm text-white/75">
                      {project.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-accent-primary">▹</span>
                          {typeof f === 'string' ? (f.replace(/^[^\w\s]+\s*/, '').trim() || f) : f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {projectTech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-white/10 text-slate-400 text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="#tecnologias"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-accent-primary/25 border border-accent-primary/50 text-accent-secondary font-medium text-sm shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:bg-accent-primary/35 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300 scale-100 hover:scale-[1.02]"
                      >
                        Ver detalhes
                      </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-white/20 text-white/80 text-sm hover:bg-white/10 transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-white/20 text-white/80 text-sm hover:bg-white/10 transition-colors"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Setas + indicador */}
              <div className="absolute bottom-4 right-4 flex items-center gap-3">
                <span className="text-slate-500 text-sm tabular-nums">
                  {currentIndex + 1} / {total}
                </span>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="p-2 rounded-lg border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                    aria-label="Projeto anterior"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="p-2 rounded-lg border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                    aria-label="Próximo projeto"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
