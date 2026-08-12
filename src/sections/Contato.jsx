import { useState } from 'react'
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
  NumberedList,
} from '../components/SectionLayout'
import {
  briefingOptions,
  buildWhatsAppUrl,
  contact,
  footer,
  sectionLabels,
} from '../data/siteContent'

export default function Contato() {
  const [briefingId, setBriefingId] = useState(briefingOptions[0].id)
  const selected = briefingOptions.find((o) => o.id === briefingId) || briefingOptions[0]
  const waHref = buildWhatsAppUrl(selected.message)

  return (
    <SectionShell number="05">
      <SectionFrame>
        <div>
          <SectionEyebrow>{sectionLabels.contato}</SectionEyebrow>
          <SectionHeading>{contact.headline}</SectionHeading>

          <SectionGrid>
            <SectionColumn delay={0.08}>
              <BodyText>{contact.ctaText}</BodyText>
              {contact.responseHint && (
                <p className="mt-2 text-sm text-accent-secondary">{contact.responseHint}</p>
              )}

              <MetaLabel className="mt-4 sm:mt-5">{contact.briefingTitle}</MetaLabel>
              <div className="mt-2.5 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
                {briefingOptions.map((option) => {
                  const active = option.id === briefingId
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setBriefingId(option.id)}
                      className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                        active
                          ? 'border-accent-secondary/60 bg-accent-secondary/10 text-accent-secondary'
                          : 'border-white/15 text-slate-400 hover:border-white/25 hover:text-slate-200'
                      }`}
                    >
                      {option.label}
                    </button>
                  )
                })}
              </div>

              <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-5">
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                >
                  <Button
                    href={waHref}
                    label="Abrir WhatsApp"
                    variant="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-pulse-subtle"
                  />
                </motion.div>
                <Button
                  href="mailto:deyvisonchaves@gmail.com"
                  label="E-mail"
                  variant="secondary"
                />
              </div>
            </SectionColumn>

            <SectionColumn delay={0.14}>
              <MetaLabel className="mb-2.5 sm:mb-4">{contact.channelsTitle}</MetaLabel>
              <NumberedList
                items={contact.channels}
                renderItem={(channel) => (
                  <a
                    href={channel.icon === 'whatsapp' ? waHref : channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-colors group-hover:text-white"
                  >
                    <span className="font-medium text-slate-300 group-hover:text-white">
                      {channel.label}
                    </span>
                    <span className="mt-0.5 block text-sm text-slate-500 group-hover:text-slate-400">
                      {channel.value}
                    </span>
                  </a>
                )}
              />
            </SectionColumn>
          </SectionGrid>
        </div>

        <footer className="mt-6 border-t border-white/[0.06] pt-4 sm:mt-8 sm:pt-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-500 sm:text-sm">
              © {footer.year} {footer.name}
              <span className="mx-2 text-slate-700">|</span>
              {footer.available}
            </p>
            <div className="flex flex-wrap gap-4">
              {footer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.label === 'WhatsApp' ? waHref : link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-500 transition-colors hover:text-accent-secondary sm:text-sm"
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
