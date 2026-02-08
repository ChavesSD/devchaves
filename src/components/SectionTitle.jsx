import { motion } from 'framer-motion'

export default function SectionTitle({ title, id, className = '' }) {
  return (
    <motion.h2
      id={id}
      className={`font-display text-2xl md:text-3xl font-bold text-white mb-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-accent-primary">{title}</span>
    </motion.h2>
  )
}
