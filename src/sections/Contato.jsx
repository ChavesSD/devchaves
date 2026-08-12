import { motion } from 'framer-motion'
import Button from '../components/Button'
import SectionShell from '../components/SectionShell'
import {
  SectionFrame,
  SectionEyebrow,
  SectionHeading,
  SectionGrid,
  SectionColumn,
  MetaLabel,
  BodyText,
} from '../components/SectionLayout'
import { contact, footer, sectionLabels } from '../data/siteContent'

export default function Contato() {
  return (
    <SectionShell number="05">
      <SectionFrame>
        <div>
          <SectionEyebrow>{sectionLabels.contato}</SectionEyebrow>
          <SectionHeading>{contact.headline}</SectionHeading>

          <SectionGrid>
            <SectionColumn delay={0.08}>
              <BodyText>{contact.ctaText}</BodyText>

              {/* Destaque: CTAs de conversão */}
              <MetaLabel className="mt-8">Começar</MetaLabel>
              <div className="mt-4 flex flex-wrap gap-3">
                {contact.primaryButtons.map((btn) => (
                  <motion.div
                    key={btn.label}
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                  >
                    <Button
                      href={btn.href}
                      label={btn.label}
                      variant={btn.primary ? 'primary' : 'secondary'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={btn.primary ? 'animate-pulse-subtle' : ''}
                    />
                  </motion.div>
                ))}
              </div>
            </SectionColumn>

            <SectionColumn delay={0.14}>
              <MetaLabel className="mb-5">{contact.channelsTitle}</MetaLabel>
              <ul className="space-y-4">
                {contact.channels.map((channel, i) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 transition-colors"
                    >
                      <span className="mt-0.5 font-mono text-[11px] text-accent-secondary">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[15px] font-medium text-slate-300 transition-colors group-hover:text-white">
                          {channel.label}
                        </span>
                        <span className="mt-0.5 block text-sm text-slate-500 transition-colors group-hover:text-slate-400">
                          {channel.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </SectionColumn>
          </SectionGrid>
        </div>

        <footer className="mt-12 border-t border-white/[0.06] pt-6">
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
      </SectionFrame>
    </SectionShell>
  )
}
