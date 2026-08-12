import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { motion } from 'framer-motion'
import SideNav from './SideNav'
import { FullPageContext } from './fullPageContext'

const TRANSITION_MS = 480
const COOLDOWN_MS = 520
const WHEEL_THRESHOLD = 55
const SWIPE_THRESHOLD = 48

const slideTransition = {
  type: 'tween',
  duration: TRANSITION_MS / 1000,
  ease: [0.22, 1, 0.36, 1],
}

function getScrollableAncestor(node) {
  let el = node
  while (el && el !== document.body) {
    if (el instanceof HTMLElement && el.hasAttribute('data-scrollable')) {
      const { scrollHeight, clientHeight } = el
      if (scrollHeight > clientHeight + 2) return el
    }
    el = el.parentElement
  }
  return null
}

function canInnerScroll(el, deltaY) {
  const { scrollTop, scrollHeight, clientHeight } = el
  const atTop = scrollTop <= 1
  const atBottom = scrollTop + clientHeight >= scrollHeight - 1
  if (deltaY > 0 && !atBottom) return true
  if (deltaY < 0 && !atTop) return true
  return false
}

export default function FullPage({ sections }) {
  const [index, setIndex] = useState(() => {
    if (typeof window === 'undefined') return 0
    const hash = window.location.hash.replace('#', '')
    const aliases = { tecnologias: 'projetos' }
    const target = aliases[hash] || hash
    const i = sections.findIndex((s) => s.id === target)
    return i >= 0 ? i : 0
  })
  const [direction, setDirection] = useState(1)
  const [reducedMotion, setReducedMotion] = useState(false)

  const indexRef = useRef(index)
  const animatingRef = useRef(false)
  const wheelAccRef = useRef(0)
  const touchStartY = useRef(0)
  const cooldownTimer = useRef(null)
  const reducedRef = useRef(false)
  const nestedNavRef = useRef(null)
  const sectionsRef = useRef(sections)

  useEffect(() => {
    reducedRef.current = reducedMotion
  }, [reducedMotion])

  useEffect(() => {
    sectionsRef.current = sections
  }, [sections])

  const total = sections.length

  const startCooldown = useCallback(() => {
    animatingRef.current = true
    wheelAccRef.current = 0
    window.clearTimeout(cooldownTimer.current)
    cooldownTimer.current = window.setTimeout(() => {
      animatingRef.current = false
    }, COOLDOWN_MS)
  }, [])

  const registerNestedNav = useCallback((handlers) => {
    nestedNavRef.current = handlers
    return () => {
      if (nestedNavRef.current === handlers) nestedNavRef.current = null
    }
  }, [])

  const tryNestedStep = useCallback(
    (dir) => {
      const sectionId = sectionsRef.current[indexRef.current]?.id
      const handlers = nestedNavRef.current
      if (!handlers || handlers.sectionId !== sectionId) return false
      const consumed = dir > 0 ? handlers.onNext?.() : handlers.onPrev?.()
      if (!consumed) return false
      startCooldown()
      return true
    },
    [startCooldown]
  )

  const goTo = useCallback(
    (nextIndex, dir) => {
      const clamped = Math.max(0, Math.min(total - 1, nextIndex))
      if (clamped === indexRef.current) return

      if (reducedRef.current) {
        indexRef.current = clamped
        setIndex(clamped)
        document.getElementById(sections[clamped]?.id)?.scrollIntoView({ behavior: 'smooth' })
        return
      }

      if (animatingRef.current) return

      const nextDir = dir ?? (clamped > indexRef.current ? 1 : -1)
      startCooldown()
      indexRef.current = clamped
      setDirection(nextDir)
      setIndex(clamped)
    },
    [sections, startCooldown, total]
  )

  const goToId = useCallback(
    (id) => {
      const nextIndex = sections.findIndex((s) => s.id === id)
      if (nextIndex >= 0) goTo(nextIndex)
    },
    [goTo, sections]
  )

  const next = useCallback(() => {
    if (tryNestedStep(1)) return
    goTo(indexRef.current + 1, 1)
  }, [goTo, tryNestedStep])

  const prev = useCallback(() => {
    if (tryNestedStep(-1)) return
    goTo(indexRef.current - 1, -1)
  }, [goTo, tryNestedStep])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReducedMotion(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    indexRef.current = index
    const id = sections[index]?.id
    if (!id) return
    const url = `${window.location.pathname}${window.location.search}#${id}`
    window.history.replaceState(null, '', url)
  }, [index, sections])

  useEffect(() => {
    if (!reducedMotion) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const i = sections.findIndex((s) => s.id === entry.target.id)
          if (i >= 0) {
            indexRef.current = i
            setIndex(i)
          }
        }
      },
      { threshold: 0.45 }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [reducedMotion, sections])

  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.('a[href^="#"]')
      if (!link) return
      const raw = link.getAttribute('href')?.slice(1)
      const aliases = { tecnologias: 'projetos' }
      const id = aliases[raw] || raw
      if (!sections.some((s) => s.id === id)) return
      e.preventDefault()
      goToId(id)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [goToId, sections])

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.remove('fullpage-lock')
      return undefined
    }
    document.documentElement.classList.add('fullpage-lock')
    return () => document.documentElement.classList.remove('fullpage-lock')
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion) return undefined

    const onWheel = (e) => {
      const scrollable = getScrollableAncestor(e.target)
      if (scrollable && canInnerScroll(scrollable, e.deltaY)) return

      e.preventDefault()
      if (animatingRef.current) {
        wheelAccRef.current = 0
        return
      }

      wheelAccRef.current += e.deltaY
      if (Math.abs(wheelAccRef.current) < WHEEL_THRESHOLD) return

      const goingDown = wheelAccRef.current > 0
      wheelAccRef.current = 0
      if (goingDown) next()
      else prev()
    }

    const onTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY
    }

    const onTouchMove = (e) => {
      const deltaY = touchStartY.current - e.touches[0].clientY
      const scrollable = getScrollableAncestor(e.target)
      if (scrollable && canInnerScroll(scrollable, deltaY)) return
      if (Math.abs(deltaY) > 8) e.preventDefault()
    }

    const onTouchEnd = (e) => {
      const deltaY = touchStartY.current - e.changedTouches[0].clientY
      const scrollable = getScrollableAncestor(e.target)
      if (scrollable && canInnerScroll(scrollable, deltaY)) return
      if (Math.abs(deltaY) < SWIPE_THRESHOLD) return
      if (deltaY > 0) next()
      else prev()
    }

    const onKey = (e) => {
      const tag = e.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target?.isContentEditable) return
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault()
        next()
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault()
        prev()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goTo(0, -1)
      } else if (e.key === 'End') {
        e.preventDefault()
        goTo(total - 1, 1)
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('keydown', onKey)
      window.clearTimeout(cooldownTimer.current)
    }
  }, [goTo, next, prev, reducedMotion, total])

  const value = useMemo(
    () => ({
      index,
      direction,
      total,
      sections: sections.map(({ id, label, number }) => ({ id, label, number })),
      goTo,
      goToId,
      next,
      prev,
      registerNestedNav,
      reducedMotion,
    }),
    [direction, goTo, goToId, index, next, prev, reducedMotion, registerNestedNav, sections, total]
  )

  if (reducedMotion) {
    return (
      <FullPageContext.Provider value={value}>
        <SideNav />
        <div className="lg:pl-56">
          {sections.map((section) => (
            <div key={section.id} id={section.id}>
              {section.content}
            </div>
          ))}
        </div>
      </FullPageContext.Provider>
    )
  }

  return (
    <FullPageContext.Provider value={value}>
      <SideNav />
      <div className="relative h-dvh w-full overflow-hidden lg:pl-56">
        <div className="relative h-full w-full overflow-hidden">
          <motion.div
            className="fullpage-track w-full"
            animate={{ y: `${-index * 100}dvh` }}
            transition={slideTransition}
            onAnimationComplete={() => {
              animatingRef.current = false
            }}
          >
            {sections.map((section, i) => (
              <div
                key={section.id}
                id={section.id}
                className="fullpage-panel h-dvh w-full"
                aria-hidden={i !== index}
              >
                {section.content}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </FullPageContext.Provider>
  )
}
