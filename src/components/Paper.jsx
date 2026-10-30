import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icon, Reveal, stagger, riseItem } from './ui.jsx'

/* =========================================================
   TESTIMONIAL
   ========================================================= */
const quotes = [
  {
    quote:
      'Being able to set up complex logic flows without the headache of pseudo-coding has saved us so much time. It’s intuitive in a way that other solutions just aren’t.',
    name: 'Elias Østergaard Nielsen',
    role: 'Tech Lead @ Mikkeller',
    img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=70',
  },
  {
    quote:
      'You don’t need to be a developer to build something that works. You just need tools that are easy to use and reliable. Formlane is one of those tools.',
    name: 'Benjamin Wagner',
    role: 'Founder @ Expat Savvy',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=70',
  },
  {
    quote:
      'I can drop a Formlane endpoint into any form element and know it’s going to work. It lets me focus on what I do best while still delivering exactly what my clients need.',
    name: 'Peter Lloyd',
    role: 'Founder @ Observatory',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=70',
  },
]

export function Testimonial() {
  const [i, setI] = useState(0)
  const q = quotes[i]

  return (
    <section className="paper testimonial" id="customers">
      <div className="rails" />
      <div className="wrap">
        <Reveal>
          <div className="tst">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                className="tst-bg"
                style={{ backgroundImage: `url(${q.img})` }}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
            <div className="tst-shade" />

            <div className="tst-body">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p>“{q.quote}”</p>
                  <footer>
                    <b>{q.name}</b>
                    <span>{q.role}</span>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>

              <div className="tst-dots">
                {quotes.map((_, k) => (
                  <button
                    key={k}
                    className={`tst-dot ${k === i ? 'on' : ''}`}
                    onClick={() => setI(k)}
                    aria-label={`Story ${k + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="logo-row">
            <div className="logo-cell">MIKKELLER</div>
            <div className="logo-cell">EXPAT SAVVY</div>
            <div className="logo-cell">observatory</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* =========================================================
   FEATURE GRID — "Do all the things"
   ========================================================= */
const features = [
  {
    title: 'File Uploads',
    body: 'Let people attach files to your form and keep everything with the submission.',
    art: 'file',
  },
  {
    title: 'Auto Responders',
    body: 'Send an instant confirmation email after someone hits submit.',
    art: 'mail',
  },
  {
    title: 'Custom Templates',
    body: 'Make notification and reply emails match your brand and voice.',
    art: 'template',
  },
  {
    title: 'Backend Validation',
    body: 'Validate and block bad submissions on the server, not just in the browser.',
    art: 'shield',
  },
  {
    title: 'Email Routing',
    body: 'Send submissions to the right person based on rules you set.',
    art: 'route',
  },
  {
    title: 'API Access',
    body: 'Pull submissions and manage forms with an API when you need more control.',
    art: 'code',
  },
]

function Art({ kind }) {
  if (kind === 'file')
    return (
      <div className="art art-file">
        <span className="art-doc">
          <Icon.file />
        </span>
        <span className="art-badge">+</span>
      </div>
    )
  if (kind === 'mail')
    return (
      <div className="art art-mail">
        <span className="art-line" />
        <span className="art-arrow">
          <Icon.arrow />
        </span>
      </div>
    )
  if (kind === 'template')
    return (
      <div className="art art-template">
        <span className="art-tile" />
        <span className="art-tile" />
        <span className="art-tile" />
      </div>
    )
  if (kind === 'shield')
    return (
      <div className="art art-shield">
        <span className="art-shield-ic">
          <Icon.shield />
        </span>
      </div>
    )
  if (kind === 'route')
    return (
      <div className="art art-route">
        <span className="art-node" />
        <span className="art-node" />
        <span className="art-node" />
        <span className="art-node" />
      </div>
    )
  return (
    <div className="art art-code">
      <span className="art-brace">{'{'}</span>
      <span className="art-brace">{'}'}</span>
    </div>
  )
}

export function FeatureGrid() {
  return (
    <section className="paper dots feature-grid" id="features">
      <div className="rails" />
      <div className="wrap">
        <Reveal>
          <h2 className="fg-title">
            Do all the things
            <br />
            <span className="fg-dim">with your forms</span>
          </h2>
        </Reveal>

        <motion.div
          className="fgrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-8%' }}
        >
          {features.map((f) => (
            <motion.div className="fcell" key={f.title} variants={riseItem}>
              <div className="fcell-art">
                <Art kind={f.art} />
              </div>
              <div className="fcell-copy">
                <h4>{f.title}</h4>
                <p>{f.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.06}>
          <div className="fg-cta">
            <a className="btn btn-dark" href="#features">
              Explore all features
              <span className="btn-icon">
                <Icon.arrow />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* =========================================================
   STEPS — "Three steps"
   ========================================================= */
const steps = [
  {
    n: '1',
    title: 'Form submitted',
    body: 'Point your form action at your Formlane endpoint. No SDK, no build step, no server.',
  },
  {
    n: '2',
    title: 'Saved to your inbox',
    body: 'View submissions, see daily analytics reports, and export to CSV or JSON.',
  },
  {
    n: '3',
    title: 'Email notifications and actions are triggered',
    body: 'Our email templates are fully customizable',
  },
]

export function Steps() {
  return (
    <section className="paper steps-sec" id="how">
      <div className="rails" />
      <div className="wrap">
        <Reveal>
          <h2 className="fg-title">
            Three steps.
            <br />
            <span className="fg-dim">Then never again.</span>
          </h2>
        </Reveal>

        <motion.div
          className="steps"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
        >
          {steps.map((s) => (
            <motion.div className="step" key={s.n} variants={riseItem}>
              <span className="step-num">{s.n}</span>
              <div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* =========================================================
   SECURITY
   ========================================================= */
export function Security() {
  return (
    <section className="paper dots security">
      <div className="rails" />
      <div className="wrap">
        <Reveal>
          <h2 className="sec-title">
            Yes, we’re secure.
            <br />
            <span className="sec-red">Very</span> secure.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="sec-sub">
            Every submission is encrypted in transit and at rest. Data lives in the region you
            choose, and you can export or delete it at any time.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="sec-actions">
            <a className="btn btn-light" href="#faq">
              More about security &amp; privacy
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="badges">
            <div className="badge">
              <Icon.lock /> SOC 2 Type II
            </div>
            <div className="badge">
              <Icon.shield /> GDPR
            </div>
            <div className="badge">
              <Icon.check /> CCPA
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* =========================================================
   CTA
   ========================================================= */
export function CTA() {
  return (
    <section className="paper cta-sec" id="start">
      <div className="rails" />
      <div className="wrap">
        <Reveal>
          <div className="cta">
            <div className="cta-glow" />
            <h2 className="h2">Discover a better way to build your forms.</h2>
            <p className="lead" style={{ margin: '18px auto 0', textAlign: 'center' }}>
              Start free, ship today. No credit card, no server, no maintenance.
            </p>
            <div className="cta-actions">
              <a className="btn btn-primary" href="#start">
                Get started
                <span className="btn-icon">
                  <Icon.arrow />
                </span>
              </a>
              <a className="btn btn-light" href="#faq">
                Read the docs
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* =========================================================
   FAQ
   ========================================================= */
const faqs = [
  {
    q: 'Do I need to know how to code to use Formlane?',
    a: 'Not really. AI tools can generate the form markup for you in seconds — just tell it what fields you need. Create an account, grab your endpoint, drop it in, and you’re live.',
  },
  {
    q: 'Can I use Formlane with my existing tech stack?',
    a: 'You bet. Formlane works with anything that can send an HTTP request — Next.js, Astro, Hugo, Webflow, plain HTML, whatever you’re building on.',
  },
  {
    q: 'Will Formlane work for my use case?',
    a: 'Yes. Simple contact forms, complex workflows with routing, integrations and automation — Formlane handles it all. Developers, designers, marketers and agencies rely on it daily.',
  },
  {
    q: 'What happens if my form gets spammed?',
    a: 'Spam filtering runs on every submission out of the box, and it’s tunable — with CAPTCHA options if you need an extra layer.',
  },
]

export function FAQ() {
  return (
    <section className="paper faq-sec" id="faq">
      <div className="rails" />
      <div className="wrap">
        <Reveal>
          <p className="eyebrow on-paper">FAQ</p>
          <h2 className="h2">Questions, answered</h2>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="faq">
            {faqs.map((f, i) => (
              <FaqItem key={i} {...f} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        {q}
        <span className="faq-plus" />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-a"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* =========================================================
   FOOTER
   ========================================================= */
const cols = [
  { h: 'Product', items: [{ label: 'Pricing', to: '/pricing' }, { label: 'Docs', to: '/docs' }, { label: 'Form library', to: '/docs' }, { label: 'API status', to: '/docs' }] },
  { h: 'Resources', items: [{ label: 'Docs', to: '/docs' }, { label: 'Integration guides', to: '/docs' }, { label: 'Changelog', to: '/docs' }, { label: 'Build with AI', to: '/docs' }] },
  { h: 'Company', items: [{ label: 'Blog', to: '/contact' }, { label: 'Team', to: '/contact' }, { label: 'Customer stories', to: '/contact' }, { label: 'Contact', to: '/contact' }] },
  { h: 'Legal', items: [{ label: 'Privacy policy', to: '/contact' }, { label: 'Terms of service', to: '/contact' }, { label: 'Security', to: '/contact' }, { label: 'DPA', to: '/contact' }] },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link className="brand" to="/">
              <span className="brand-mark">
                <span />
              </span>
              Formlane
            </Link>
            <p className="footer-blurb">
              The production-ready form backend. Storage, deliverability, spam protection and
              integrations — handled.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h5>{c.h}</h5>
              <ul>
                {c.items.map((i) => (
                  <li key={i.label}>
                    <Link to={i.to}>{i.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Formlane. All rights reserved.</span>
          <span className="footer-status">
            <span className="dot" /> All systems operational
          </span>
        </div>
      </div>
    </footer>
  )
}
