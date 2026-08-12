import { motion } from 'framer-motion'
import { footer } from '../data/siteContent'

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-bg-cardBorder bg-bg-card/30">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent-secondary text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-slate-500 text-sm font-medium text-white/80 mb-2">
          {footer.available}
        </p>
        <p className="font-medium text-slate-400 text-sm">
          © {footer.year} {footer.name}
        </p>
        <p className="mt-1 text-slate-500 text-sm">{footer.tagline}</p>
        <p className="mt-2 text-slate-600 text-xs">{footer.rights}</p>
      </motion.div>
    </footer>
  )
}
