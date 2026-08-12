export default function SectionShell({ number, children, className = '' }) {
  return (
    <section className={`relative h-full min-h-dvh w-full lg:min-h-0 ${className}`}>
      <div
        data-scrollable
        className="relative z-10 h-full overflow-x-hidden overflow-y-auto px-5 pb-24 pt-20 sm:px-8 lg:px-14 lg:pb-10 lg:pt-10"
      >
        {children}
      </div>
      <span
        className="pointer-events-none absolute -bottom-6 right-2 select-none font-display text-[min(28vw,11rem)] font-bold leading-none text-white/[0.03] lg:-bottom-10 lg:right-6 lg:text-[12rem]"
        aria-hidden
      >
        {number}
      </span>
    </section>
  )
}
