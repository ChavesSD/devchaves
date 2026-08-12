import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import { useFullPage } from './fullPageContext'
import { footer, whatsappUrl } from '../data/siteContent'

const socials = [
  { label: 'WhatsApp', href: whatsappUrl, icon: MessageCircle },
  { label: 'GitHub', href: footer.links.find((l) => l.label === 'GitHub')?.href, icon: Github },
  { label: 'LinkedIn', href: footer.links.find((l) => l.label === 'LinkedIn')?.href, icon: Linkedin },
  { label: 'E-mail', href: footer.links.find((l) => l.label === 'E-mail')?.href, icon: Mail },
]

export default function SideNav() {
  const { index, sections, goTo, total } = useFullPage()
  const current = sections[index]
  const listRef = useRef(null)
  const itemRefs = useRef([])
  const [progress, setProgress] = useState({ top: 0, height: 0, trackBottom: 0 })

  const syncProgress = useCallback(() => {
    const list = listRef.current
    const first = itemRefs.current[0]
    const active = itemRefs.current[index]
    const last = itemRefs.current[total - 1]
    if (!list || !first || !active || !last) return

    const listTop = list.getBoundingClientRect().top
    const firstDot = first.querySelector('[data-nav-dot]') || first
    const activeDot = active.querySelector('[data-nav-dot]') || active
    const lastDot = last.querySelector('[data-nav-dot]') || last

    const firstCenter = firstDot.getBoundingClientRect().top + firstDot.getBoundingClientRect().height / 2 - listTop
    const activeCenter = activeDot.getBoundingClientRect().top + activeDot.getBoundingClientRect().height / 2 - listTop
    const lastCenter = lastDot.getBoundingClientRect().top + lastDot.getBoundingClientRect().height / 2 - listTop

    setProgress({
      top: firstCenter,
      height: Math.max(0, activeCenter - firstCenter),
      trackBottom: Math.max(0, lastCenter - firstCenter),
    })
  }, [index, total])

  useEffect(() => {
    syncProgress()
    window.addEventListener('resize', syncProgress)
    return () => window.removeEventListener('resize', syncProgress)
  }, [syncProgress])

  return (
    <>
      <aside className="fixed left-0 top-0 z-50 hidden h-dvh w-56 flex-col border-r border-white/[0.06] bg-[#030712]/80 px-6 py-8 backdrop-blur-xl lg:flex">
        <a href="#inicio" className="group mb-12 block">
          <span className="font-mono text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-accent-secondary">
            &lt;DC&nbsp;/&gt;
          </span>
          <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">
            Deyvison
          </span>
        </a>

        <nav className="relative flex-1" aria-label="Seções">
          <div ref={listRef} className="relative">
            <div
              className="absolute left-[11px] w-px bg-white/10"
              style={{ top: progress.top, height: progress.trackBottom }}
              aria-hidden
            />
            <motion.div
              className="absolute left-[11px] w-px origin-top bg-gradient-to-b from-accent-secondary to-accent-primary"
              style={{ top: progress.top }}
              animate={{ height: progress.height }}
              transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
              aria-hidden
            />

            <ul className="relative space-y-1">
              {sections.map((section, i) => {
                const active = i === index
                return (
                  <li
                    key={section.id}
                    ref={(el) => {
                      itemRefs.current[i] = el
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      className="group relative flex w-full items-center gap-3 py-2.5 text-left"
                      aria-current={active ? 'page' : undefined}
                    >
                      <span
                        data-nav-dot
                        className={`relative z-10 flex aspect-square h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          active
                            ? 'border-accent-secondary bg-accent-secondary shadow-[0_0_16px_rgba(34,211,238,0.55)]'
                            : 'border-white/20 bg-[#030712] group-hover:border-accent-secondary/60'
                        }`}
                      >
                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#030712]" />
                        )}
                      </span>
                      <span className="flex flex-col">
                        <span
                          className={`font-mono text-[10px] tracking-[0.18em] transition-colors ${
                            active ? 'text-accent-secondary' : 'text-slate-600'
                          }`}
                        >
                          {section.number}
                        </span>
                        <span
                          className={`text-[13px] font-medium transition-colors ${
                            active ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'
                          }`}
                        >
                          {section.label}
                        </span>
                      </span>
                      {active && (
                        <motion.span
                          layoutId="nav-active-glow"
                          className="absolute inset-y-1 right-0 left-8 rounded-lg bg-white/[0.04]"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>

        <div className="mt-8 space-y-5">
          <div className="flex items-center gap-3">
            {socials.map((item) => {
              if (!item.href) return null
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 transition-colors hover:text-accent-secondary"
                  aria-label={item.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
          <p className="font-mono text-[11px] tracking-widest text-slate-600">
            <span className="text-accent-secondary">{current.number}</span>
            <span className="mx-1">/</span>
            <span>{String(total).padStart(2, '0')}</span>
          </p>
        </div>
      </aside>

      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/[0.06] bg-[#030712]/80 px-5 py-3 backdrop-blur-xl lg:hidden">
        <a href="#inicio" className="font-mono text-base font-semibold text-white">
          &lt;DC&nbsp;/&gt;
        </a>
        <p className="font-mono text-[11px] tracking-widest text-slate-400">
          {current.number} / {String(total).padStart(2, '0')}
        </p>
      </header>
    </>
  )
}
