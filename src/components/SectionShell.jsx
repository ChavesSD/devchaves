export default function SectionShell({ number, children, className = '' }) {
  return (
    <section className={`relative h-full min-h-dvh w-full lg:min-h-0 ${className}`}>
      <div
        data-scrollable
        className="relative z-10 flex h-full min-h-full flex-col items-center justify-center overflow-x-hidden overflow-y-auto px-5 pb-8 pt-16 sm:px-8 lg:px-10 lg:py-10"
      >
        {children}
      </div>
      <span
        className="pointer-events-none absolute -bottom-4 right-1 select-none font-display text-[min(36vw,14rem)] font-bold leading-none text-white/[0.045] sm:right-2 sm:text-[min(34vw,15rem)] lg:-bottom-8 lg:right-4 lg:text-[16rem]"
        aria-hidden
      >
        {number}
      </span>
    </section>
  )
}
