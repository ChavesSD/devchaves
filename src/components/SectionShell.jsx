export default function SectionShell({ number, children, className = '' }) {
  return (
    <section className={`relative h-full min-h-dvh w-full lg:min-h-0 ${className}`}>
      <div
        data-scrollable
        className="relative z-10 flex h-full min-h-full flex-col items-center justify-center overflow-x-hidden overflow-y-auto px-5 py-24 sm:px-8 lg:px-10 lg:py-12"
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
