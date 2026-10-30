import { useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { Icon, Magnetic } from './ui.jsx'

const words = ['The', 'production-ready', 'form', 'backend']

export default function Hero() {
  const reduce = useReducedMotion()
  const areaRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), {
    stiffness: 120,
    damping: 18,
  })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-13, 13]), {
    stiffness: 120,
    damping: 18,
  })
  const [copied, setCopied] = useState(false)

  function onMove(e) {
    if (reduce || !areaRef.current) return
    const r = areaRef.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  function reset() {
    mx.set(0)
    my.set(0)
  }

  function copy() {
    navigator.clipboard?.writeText('fetch https://formlane.io/ai')
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="hero-grid" />

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Form backend · v4
          </motion.p>

          <h1 className="display">
            {words.map((w, i) => (
              <motion.span
                key={w}
                style={{ display: 'inline-block', marginRight: '0.22em' }}
                initial={reduce ? false : { opacity: 0, y: 36, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.95,
                  delay: 0.2 + i * 0.085,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Formlane handles submissions end-to-end with storage, deliverability, spam
            protection and integrations — so you don't have to.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <Magnetic>
              <a className="btn btn-primary" href="#start">
                Get started now
                <span className="btn-icon">
                  <Icon.arrow />
                </span>
              </a>
            </Magnetic>
            <a className="btn btn-ghost" href="#how">
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.88 }}
          >
            <p className="hero-note">or if you're building forms with AI</p>
            <div className="terminal">
              <span className="prompt">&gt;</span>
              <span>fetch https://formlane.io/ai</span>
              <button className="copy" onClick={copy} aria-label="Copy command">
                {copied ? <Icon.check /> : <Icon.copy />}
              </button>
            </div>
          </motion.div>
        </div>

        <div
          className="hero-visual"
          ref={areaRef}
          onMouseMove={onMove}
          onMouseLeave={reset}
        >
          <div className="form-card-stack" aria-hidden="true">
            <motion.i
              initial={reduce ? false : { opacity: 0, y: 30, rotate: -9 }}
              animate={{ opacity: 1, y: 26, rotate: -7 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ translateZ: -60 }}
            />
            <motion.i
              initial={reduce ? false : { opacity: 0, y: 20, rotate: -7 }}
              animate={{ opacity: 1, y: 13, rotate: -5 }}
              transition={{ duration: 1.1, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              style={{ translateZ: -30 }}
            />
          </div>

          <motion.div
            className="form-card"
            style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
            initial={reduce ? false : { opacity: 0, y: 44, rotate: -6, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, rotate: -3, scale: 1 }}
            transition={{ duration: 1.15, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={reduce ? {} : { y: [0, -9, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="fc-badge">
                <Icon.spark />
              </div>
              <p className="fc-title">Contact Acme Co</p>

              <div className="field">
                <label>Name</label>
                <input placeholder="Full name" readOnly />
              </div>
              <div className="field">
                <label>Email</label>
                <input placeholder="you@example.com" readOnly />
              </div>
              <div className="field">
                <label>Message</label>
                <textarea rows={2} placeholder="Write your message…" readOnly />
              </div>
              <button className="fc-submit">Send</button>
            </motion.div>
          </motion.div>

          <motion.div
            className="float-chip"
            style={{ top: 40, right: 0 }}
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="dot" />
            Submission stored
          </motion.div>

          <motion.div
            className="float-chip"
            style={{ bottom: 56, left: 0 }}
            initial={{ opacity: 0, x: -26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Icon.shield />
            Spam blocked · 0.4s
          </motion.div>
        </div>
      </div>
    </section>
  )
}
