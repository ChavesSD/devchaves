/**
 * Marquee infinito com tech stack: ícones + nomes (DevIcon + Simple Icons).
 */
import { getTechIconUrl } from '../utils/techIcons'

export default function TechMarquee({ items, compact = false }) {
  const duplicated = [...items, ...items]

  return (
    <div className={`relative w-full overflow-hidden border-y border-white/5 ${compact ? 'py-3' : 'mt-16 py-5'}`}>
      <div className="flex animate-marquee w-max gap-12 shrink-0 items-center">
        {duplicated.map((tech, i) => {
          const iconUrl = getTechIconUrl(tech)
          return (
            <span
              key={`${tech}-${i}`}
              className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors whitespace-nowrap"
            >
              {iconUrl ? (
                <img
                  src={iconUrl}
                  alt=""
                  className="w-7 h-7 object-contain shrink-0"
                  loading="lazy"
                />
              ) : (
                <span className="w-7 h-7 rounded bg-white/10 flex items-center justify-center text-xs font-bold text-slate-500 shrink-0">
                  {tech.charAt(0)}
                </span>
              )}
              <span className="text-sm font-medium">{tech}</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
