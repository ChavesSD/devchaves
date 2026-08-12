import { motion } from 'framer-motion'

/** Bloco de conteúdo centralizado na viewport. */
export function SectionFrame({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-5xl shrink-0 ${className}`}>
      {children}
    </div>
  )
}

export function SectionEyebrow({ children, className = '' }) {
  return (
    <motion.p
      className={`mb-2 font-mono text-[11px] tracking-[0.28em] text-accent-secondary ${className}`}
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
        className={`max-w-2xl font-display text-2xl font-bold tracking-tight text-white sm:text-4xl ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  )
}

export function SectionGrid({ children, className = '' }) {
  return (
    <div
      className={`mt-5 grid items-start gap-6 lg:mt-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 ${className}`}
    >
      {children}
    </div>
  )
}

export function SectionColumn({ children, delay = 0.08, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  )
}

export function MetaLabel({ children, className = '' }) {
  return (
    <p
      className={`text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500 ${className}`}
    >
      {children}
    </p>
  )
}

export function BodyText({ children, className = '' }) {
  return (
    <p className={`max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base ${className}`}>
      {children}
    </p>
  )
}

export function MetaLine({ children, className = '' }) {
  return (
    <p className={`mt-1.5 text-sm text-slate-400 sm:text-[15px] ${className}`}>{children}</p>
  )
}

/** Lista numerada compacta (padrão das seções). */
export function NumberedList({ items, renderItem, className = '' }) {
  return (
    <ul className={`space-y-2.5 sm:space-y-3 ${className}`}>
      {items.map((item, i) => (
        <li
          key={typeof item === 'string' ? item : item.id || item.label || i}
          className="group flex items-start gap-2.5 text-sm text-slate-300 sm:gap-3 sm:text-[15px]"
        >
          <span className="mt-0.5 font-mono text-[10px] text-accent-secondary sm:text-[11px]">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="min-w-0 flex-1">
            {renderItem ? renderItem(item, i) : item}
          </div>
        </li>
      ))}
    </ul>
  )
}
