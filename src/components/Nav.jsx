import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { Icon } from './ui.jsx'

const links = [
  { label: 'Product', href: '/#product' },
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`nav ${stuck ? 'stuck' : ''}`}
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <div className="wrap nav-inner">
          <Link className="brand" to="/">
            <span className="brand-mark">
              <span />
            </span>
            Formlane
          </Link>

          <nav className="nav-links">
            {links.map((l) =>
              l.href.startsWith('/#') ? (
                <Link key={l.label} className="nav-link" to={l.href}>
                  {l.label}
                </Link>
              ) : (
                <NavLink
                  key={l.label}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  to={l.href}
                >
                  {l.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="nav-right">
            <Link className="nav-link" to="/contact">
              Sign in
            </Link>
            <Link className="btn btn-primary" to="/pricing">
              Get started
            </Link>
            <button
              className="menu-btn"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <Icon.close /> : <Icon.menu />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-sheet"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((l) => (
              <Link key={l.label} to={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link to="/pricing" onClick={() => setOpen(false)}>
              Get started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
