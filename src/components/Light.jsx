import { motion } from 'framer-motion'
import { Icon, Reveal, stagger, riseItem } from './ui.jsx'

/* =========================================================
   LOGO WALL
   ========================================================= */
const logos = [
  { name: 'northwind', cls: 'lg-serif' },
  { name: 'readly', cls: 'lg-bold' },
  { name: 'market+', cls: 'lg-wide' },
  { name: 'T·Wireless', cls: 'lg-serif' },
  { name: 'NOVA', cls: 'lg-mono' },
  { name: 'LUMEN', cls: 'lg-thin' },
]

export function LogoWall() {
  return (
    <section className="paper logo-wall">
      <div className="rails" />
      <div className="wrap">
        <motion.div
          className="logo-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
        >
          {logos.map((l) => (
            <motion.div className="logo-cell" key={l.name} variants={riseItem}>
              <span className={l.cls}>{l.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* =========================================================
   FEATURE ROW 01 — Bring your own form
   ========================================================= */
function LightForm() {
  return (
    <div className="lf-wrap">
      <div className="lf">
        <div className="lf-label">Name</div>
        <div className="lf-input">Jane Smith</div>
        <div className="lf-label">Email</div>
        <div className="lf-input">jane@studio.co</div>
        <div className="lf-label">Message</div>
        <div className="lf-area">Tell us about your project…</div>
        <div className="lf-row">
          <div className="lf-file">
            <Icon.upload /> Upload file
          </div>
          <div className="lf-submit">Submit</div>
        </div>
      </div>
      <motion.div
        className="lf-chip"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <span className="dot" /> Any markup. Any styles.
      </motion.div>
    </div>
  )
}

/* =========================================================
   FEATURE ROW 02 — Build your own workflow
   ========================================================= */
const integrations = [
  { label: 'Gmail', bg: '#fff', fg: '#d93025', text: 'M' },
  { label: 'Outlook', bg: '#fff', fg: '#0f6cbd', text: 'O' },
  { label: 'Sheets', bg: '#fff', fg: '#188038', text: 'S' },
  { label: 'Slack', bg: '#fff', fg: '#611f69', text: '#' },
  { label: 'Notion', bg: '#fff', fg: '#111', text: 'N' },
  { label: 'Zapier', bg: '#fff', fg: '#ff4a00', text: 'Z' },
  { label: 'HubSpot', bg: '#fff', fg: '#ff7a59', text: 'H' },
  { label: 'GitHub', bg: '#fff', fg: '#111', text: 'G' },
]

function WorkflowVisual() {
  return (
    <div className="wf">
      <div className="wf-form">
        <div className="lf-label">Name</div>
        <div className="lf-input">John Doe</div>
        <div className="lf-label">Email</div>
        <div className="lf-input">john@acme.co</div>
        <div className="wf-send">Send</div>
      </div>

      <div className="wf-link" aria-hidden="true">
        <motion.span
          className="wf-pulse"
          animate={{ x: ['0%', '100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="wf-hub">
        <span className="brand-mark">
          <span />
        </span>
      </div>

      <div className="wf-link" aria-hidden="true">
        <motion.span
          className="wf-pulse"
          animate={{ x: ['0%', '100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />
      </div>

      <div className="wf-apps">
        {integrations.map((a, i) => (
          <motion.div
            className="wf-app"
            key={a.label}
            title={a.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.05 }}
            style={{ color: a.fg }}
          >
            {a.text}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* =========================================================
   FEATURE ROW 03 — Break the internet
   ========================================================= */
function SubmissionsVisual() {
  const rows = [
    { t: 'Now', o: 1 },
    { t: '1 min ago', o: 0.85 },
    { t: '2 min ago', o: 0.6 },
    { t: '3 min ago', o: 0.4 },
    { t: '4 min ago', o: 0.26 },
    { t: '5 min ago', o: 0.16 },
    { t: '6 min ago', o: 0.09 },
  ]
  return (
    <div className="subs">
      {rows.map((r, i) => (
        <motion.div
          className="sub-row"
          key={i}
          style={{ opacity: r.o }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: r.o, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: i * 0.07 }}
        >
          <span className="sub-title">New Form Submission</span>
          <span className="sub-time">{r.t}</span>
        </motion.div>
      ))}
    </div>
  )
}

/* =========================================================
   THE THREE ROWS
   ========================================================= */
const rows = [
  {
    eyebrow: '01 — Bring your own form',
    title: 'Bring your own form',
    body: 'Use any markup, styles, or scripts. Get the experience you want without fighting a built-in form editor.',
    visual: <LightForm />,
  },
  {
    eyebrow: '02 — Build your own workflow',
    title: 'Build your own workflow',
    body: 'You control what happens after submit. Send notifications, autoresponses, redirects, and route submissions to your CRM or other tools.',
    visual: <WorkflowVisual />,
    rev: true,
  },
  {
    eyebrow: '03 — Break the internet',
    title: 'Break the internet (we can handle it)',
    body: 'Formlane processed 5 million submissions just last month. You can trust it to keep working, no matter how viral you go.',
    visual: <SubmissionsVisual />,
  },
]

export function FeatureRows() {
  return (
    <section className="paper feature-rows">
      <div className="rails" />
      <div className="wrap">
        {rows.map((r) => (
          <div className={`frow ${r.rev ? 'rev' : ''}`} key={r.title}>
            <Reveal className="frow-copy">
              <p className="eyebrow on-paper">{r.eyebrow}</p>
              <h2 className="h2">{r.title}</h2>
              <p className="lead">{r.body}</p>
            </Reveal>
            <Reveal className="frow-visual" delay={0.1}>
              {r.visual}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}
