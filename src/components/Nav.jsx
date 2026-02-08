import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Sobre & Diferenciais', href: '#sobre', id: 'sobre' },
  { label: 'Tech & Projetos', href: '#tecnologias', id: 'tecnologias' },
  { label: 'Experiência & Contato', href: '#contato', id: 'contato' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            break
          }
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )

    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-bg-cardBorder transition-all duration-300 ${
        isScrolled ? 'bg-bg/95 backdrop-blur-xl' : 'bg-bg/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-tight group">
          <span className="font-mono font-semibold text-white text-lg tracking-tight group-hover:text-accent-secondary transition-colors">
            &lt;DC&nbsp;/&gt;
          </span>
          <span className="text-[11px] text-slate-500 font-medium">Deyvison</span>
        </a>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    activeId === link.id
                      ? 'text-accent-primary'
                      : 'text-slate-400 hover:text-accent-secondary'
                  }`}
                >
                  {link.label}
                  {activeId === link.id && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-px bg-accent-primary shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                      aria-hidden
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-accent-primary/20 border border-accent-primary/40 text-accent-secondary text-sm font-medium hover:bg-accent-primary/30 transition-colors"
          >
            Fale comigo
          </a>
        </div>
        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-slate-400 hover:text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="md:hidden border-t border-bg-cardBorder bg-bg py-4 px-6 space-y-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-slate-400 hover:text-accent-secondary py-2"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contato"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-accent-primary/20 border border-accent-primary/40 text-accent-secondary text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                Fale comigo
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
