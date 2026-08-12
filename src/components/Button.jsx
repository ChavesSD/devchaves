import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-accent-primary hover:bg-blue-500 text-white border border-accent-primary/50 shadow-lg shadow-accent-primary/20',
  secondary:
    'bg-transparent border border-accent-secondary/60 text-accent-secondary hover:bg-accent-secondary/10',
}

export default function Button({
  href,
  label,
  variant = 'primary',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]'

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {label}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} className="inline-block" {...props}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" className="inline-block" {...props}>
      {content}
    </button>
  )
}
