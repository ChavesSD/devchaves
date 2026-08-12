import { motion } from 'framer-motion'

/** Bloco de conteúdo centralizado na viewport. */
export function SectionFrame({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-5xl shrink-0 ${className}`}>
      {children}
    </div>
  )
}

export function SectionEyebrow({ children }) {
  return (
    <motion.p
      className="mb-3 font-mono text-[11px] tracking-[0.28em] text-accent-secondary"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.p>
  )
}

export function SectionHeading({ children, as: Tag = 'h2', className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 }}
    >
      <Tag
        className={`max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  )
}

export function SectionGrid({ children, className = '' }) {
  return (
    <div className={`mt-10 grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 ${className}`}>
      {children}
    </div>
  )
}

export function SectionColumn({ children, delay = 0.08 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
    >
      {children}
    </motion.div>
  )
}

export function MetaLabel({ children, className = '' }) {
  return (
    <p className={`text-xs font-medium uppercase tracking-[0.2em] text-slate-500 ${className}`}>
      {children}
    </p>
  )
}

export function BodyText({ children, className = '' }) {
  return (
    <p className={`max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg ${className}`}>
      {children}
    </p>
  )
}

export function MetaLine({ children, className = '' }) {
  return (
    <p className={`mt-3 text-sm text-slate-400 sm:text-[15px] ${className}`}>{children}</p>
  )
}
