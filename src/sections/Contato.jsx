import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionShell from '../components/SectionShell'
import { contact, footer, sectionLabels } from '../data/siteContent'

export default function Contato() {
  return (
    <SectionShell number="05">
      <div className="mx-auto flex min-h-full max-w-5xl flex-col justify-between">
        <div className="flex flex-1 flex-col justify-center">
          <motion.p
            className="mb-3 font-mono text-[11px] tracking-[0.28em] text-accent-secondary"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {sectionLabels.contato}
          </motion.p>
          <motion.h2
            className="max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {contact.headline}
          </motion.h2>
          <motion.p
            className="mt-4 max-w-xl text-base leading-relaxed text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {contact.ctaText}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
          >
            {contact.primaryButtons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-w-[160px] items-center justify-center gap-2 rounded-2xl font-medium transition-all duration-300 ${
                  btn.primary
                    ? 'bg-emerald-500/90 px-6 py-3.5 text-[15px] text-white shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:scale-[1.02] hover:bg-emerald-400 animate-pulse-subtle'
                    : 'border border-white/20 px-5 py-3.5 text-sm text-white/90 hover:bg-white/10'
                }`}
              >
                {btn.icon === 'whatsapp' && (
                  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                )}
                {btn.icon === 'email' && (
                  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                )}
                <span>{btn.label}</span>
              </a>
            ))}
          </motion.div>

          <ul className="mt-6 space-y-1.5 text-sm text-slate-400">
            {contact.guaranteePhrase.map((phrase) => (
              <li key={phrase} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                {phrase}
              </li>
            ))}
          </ul>
        </div>

        <footer className="mt-10 border-t border-white/[0.06] pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {footer.year} {footer.name}
              <span className="mx-2 text-slate-700">|</span>
              {footer.available}
            </p>
            <div className="flex flex-wrap gap-5">
              {footer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 transition-colors hover:text-accent-secondary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </SectionShell>
  )
}
