import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { testimonial } from '../data/siteContent'

export default function Testimonial() {
  if (!testimonial.enabled) return null

  return (
    <section className="py-20 px-6 bg-bg-card/30 border-y border-bg-cardBorder" id="depoimento">
      <div className="max-w-2xl mx-auto text-center">
        <SectionTitle title={testimonial.title} />
        <motion.blockquote
          className="text-slate-300 text-lg italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </motion.blockquote>
        <motion.cite
          className="block mt-4 text-accent-muted text-sm not-italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {testimonial.author}
        </motion.cite>
      </div>
    </section>
  )
}
