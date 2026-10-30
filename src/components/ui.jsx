import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useState } from 'react'

/* ---------- scroll reveal ---------- */
export function Reveal({ children, delay = 0, y = 26, className = '', as = 'div', style }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px -8% 0px' })
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

/* ---------- staggered children ---------- */
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.075, delayChildren: 0.04 } },
}

export const riseItem = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
}

/* ---------- magnetic button ---------- */
export function Magnetic({ children, strength = 0.26, className = '' }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const reduce = useReducedMotion()

  function onMove(e) {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    setPos({
      x: (e.clientX - (r.left + r.width / 2)) * strength,
      y: (e.clientY - (r.top + r.height / 2)) * strength,
    })
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ display: 'inline-block' }}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, mass: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

/* ---------- infinite marquee ---------- */
export function Marquee({ children, speed = 34, reverse = false, className = '' }) {
  const reduce = useReducedMotion()

  return (
    <div className={`marquee ${className}`}>
      <motion.div
        className="marquee-track"
        animate={reduce ? {} : { x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        <div className="marquee-track" style={{ gap: 12 }}>
          {children}
        </div>
        <div className="marquee-track" style={{ gap: 12 }} aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  )
}

/* ---------- icons ---------- */
const s = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Icon = {
  arrow: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" {...s} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  server: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...s} {...p}>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </svg>
  ),
  layers: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...s} {...p}>
      <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5" />
    </svg>
  ),
  zap: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...s} {...p}>
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  ),
  upload: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...s} {...p}>
      <path d="M12 16V4M7 9l5-5 5 5M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
    </svg>
  ),
  mail: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...s} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  shield: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...s} {...p}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  route: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...s} {...p}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6H14a4 4 0 010 8h-4a4 4 0 000 8h5.5" />
    </svg>
  ),
  code: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...s} {...p}>
      <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
    </svg>
  ),
  check: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" {...s} {...p}>
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  ),
  lock: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...s} {...p}>
      <rect x="4" y="10" width="16" height="11" rx="2.5" />
      <path d="M8 10V7a4 4 0 018 0v3" />
    </svg>
  ),
  globe: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...s} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" />
    </svg>
  ),
  copy: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" {...s} {...p}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M15 5H6a2 2 0 00-2 2v9" />
    </svg>
  ),
  menu: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" {...s} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  close: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" {...s} {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
  spark: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...s} {...p}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
    </svg>
  ),
  plus: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" {...s} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  file: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...s} {...p}>
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" />
      <path d="M14 3v5h5" />
    </svg>
  ),
  chart: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...s} {...p}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  ),
  users: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...s} {...p}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M16 5.5a3 3 0 010 5.6M18 20c0-2.4-.8-4.2-2-5.2" />
    </svg>
  ),
}
