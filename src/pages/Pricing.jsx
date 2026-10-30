import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon, Reveal, stagger, riseItem } from '../components/ui.jsx'

const plans = [
  {
    name: 'Free',
    tag: 'For side projects',
    monthly: 0,
    yearly: 0,
    blurb: 'Everything you need to ship a simple form and start collecting submissions.',
    cta: 'Start for free',
    popular: false,
    features: [
      '50 submissions / month',
      '1 form',
      'Spam protection',
      'Email notifications',
      'CSV export',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    tag: 'For professionals',
    monthly: 19,
    yearly: 15,
    blurb: 'More volume, more forms, and the automation you need to grow.',
    cta: 'Start 14-day trial',
    popular: true,
    features: [
      '2,000 submissions / month',
      'Unlimited forms',
      'Advanced spam protection',
      'Webhooks & integrations',
      'File uploads (100 MB)',
      'Priority support',
    ],
  },
  {
    name: 'Business',
    tag: 'For teams & agencies',
    monthly: 49,
    yearly: 39,
    blurb: 'Team workflows, higher limits and the controls serious products demand.',
    cta: 'Contact sales',
    popular: false,
    features: [
      '10,000 submissions / month',
      'Unlimited forms & teammates',
      'Custom domains & branding',
      'SSO / SAML',
      'Audit log & roles',
      'Dedicated support',
    ],
  },
]

const compare = [
  { f: 'Submissions / month', free: '50', pro: '2,000', biz: '10,000' },
  { f: 'Forms', free: '1', pro: 'Unlimited', biz: 'Unlimited' },
  { f: 'Spam protection', free: true, pro: true, biz: true },
  { f: 'Email notifications', free: true, pro: true, biz: true },
  { f: 'CSV export', free: true, pro: true, biz: true },
  { f: 'Webhooks', free: false, pro: true, biz: true },
  { f: 'Integrations', free: false, pro: true, biz: true },
  { f: 'File uploads', free: false, pro: '100 MB', biz: '1 GB' },
  { f: 'Custom domain', free: false, pro: false, biz: true },
  { f: 'SSO / SAML', free: false, pro: false, biz: true },
  { f: 'Support', free: 'Community', pro: 'Priority', biz: 'Dedicated' },
]

const faqs = [
  {
    q: 'Can I switch plans later?',
    a: 'Yes. Upgrade, downgrade or cancel at any time from your dashboard. Changes apply at the start of your next billing cycle.',
  },
  {
    q: 'What counts as a submission?',
    a: 'A submission is one successful form entry. Spam that is filtered out before it reaches your inbox does not count toward your limit.',
  },
  {
    q: 'Do you offer a free trial?',
    a: 'The Pro plan includes a 14-day free trial. No credit card is required to start, and you can cancel before it ends.',
  },
  {
    q: 'Do you offer discounts?',
    a: 'Yearly billing saves about 20%. Non-profits, students and open-source projects can contact us for further discounts.',
  },
]

function Cell({ v }) {
  if (v === true) return <span className="cmp-yes"><Icon.check /></span>
  if (v === false) return <span className="cmp-no">—</span>
  return <span className="cmp-txt">{v}</span>
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <div className="page">
      <section className="page-hero">
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="wrap page-hero-inner">
          <Reveal>
            <p className="eyebrow">Pricing</p>
            <h1 className="display">
              Simple pricing,
              <br />
              <span className="serif">no surprises.</span>
            </h1>
            <p className="hero-sub">
              Start free and scale as you grow. Every plan includes spam protection, storage and
              deliverability out of the box.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="billing-toggle">
              <button
                className={!yearly ? 'on' : ''}
                onClick={() => setYearly(false)}
              >
                Monthly
              </button>
              <button className={yearly ? 'on' : ''} onClick={() => setYearly(true)}>
                Yearly
                <span className="save-badge">−20%</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="paper plans-sec">
        <div className="rails" />
        <div className="wrap">
          <motion.div
            className="plans"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
          >
            {plans.map((p) => (
              <motion.div
                key={p.name}
                variants={riseItem}
                className={`plan ${p.popular ? 'popular' : ''}`}
              >
                {p.popular && <span className="plan-flag">Most popular</span>}
                <h3 className="plan-name">{p.name}</h3>
                <p className="plan-tag">{p.tag}</p>

                <div className="plan-price">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={yearly ? 'y' : 'm'}
                      className="plan-amount"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      ${yearly ? p.yearly : p.monthly}
                    </motion.span>
                  </AnimatePresence>
                  <span className="plan-per">/ month</span>
                </div>
                <p className="plan-note">
                  {p.monthly === 0 ? 'Free forever' : yearly ? 'Billed yearly' : 'Billed monthly'}
                </p>

                <p className="plan-blurb">{p.blurb}</p>

                <a className={`btn ${p.popular ? 'btn-primary' : 'btn-dark'}`} href="#compare">
                  {p.cta}
                  <span className="btn-icon">
                    <Icon.arrow />
                  </span>
                </a>

                <ul className="plan-features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <span className="pf-check">
                        <Icon.check />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="paper compare-sec" id="compare">
        <div className="rails" />
        <div className="wrap">
          <Reveal>
            <p className="eyebrow on-paper">Compare</p>
            <h2 className="h2">Every feature, side by side</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="compare-scroll">
              <table className="compare">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Free</th>
                    <th className="cmp-pro">Pro</th>
                    <th>Business</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((r) => (
                    <tr key={r.f}>
                      <td>{r.f}</td>
                      <td><Cell v={r.free} /></td>
                      <td className="cmp-pro"><Cell v={r.pro} /></td>
                      <td><Cell v={r.biz} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="paper faq-sec">
        <div className="rails" />
        <div className="wrap">
          <Reveal>
            <p className="eyebrow on-paper">FAQ</p>
            <h2 className="h2">Pricing questions</h2>
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
    </div>
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