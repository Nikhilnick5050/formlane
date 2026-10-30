import { motion } from 'framer-motion'
import { Icon, Reveal, stagger, riseItem } from './ui.jsx'

/* =========================================================
   01 — "But… Now what?"  (dark)
   ========================================================= */
const problems = [
  {
    icon: <Icon.server />,
    lead: 'Building your own backend',
    rest: ' means you’re on the hook when something breaks.',
  },
  {
    icon: <Icon.layers />,
    lead: 'Built-in CMS forms',
    rest: ' only cover the basics and can’t be easily customized.',
  },
  {
    icon: <Icon.zap />,
    lead: 'Mailchimp or Zapier',
    rest: ' shouldn’t be the source of truth for your form data.',
  },
]

export function Problem() {
  return (
    <section className="problem" id="product">
      <div className="wrap">
        <Reveal>
          <h2 className="but">But…</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="code-card">
            <div className="code-head">
              <span className="code-dot" />
              <span className="code-dot" />
              <span className="code-dot" />
              <span className="code-name">api/submit.js</span>
            </div>
            <pre className="code-body">
              <code>
                <span className="c-com">// POST /api/submit</span>
                {'\n'}
                <span className="c-key">export async function</span>{' '}
                <span className="c-fn">onRequestPost</span>(context) {'{'}
                {'\n'}
                {'  '}
                <span className="c-key">const</span> data ={' '}
                <span className="c-key">await</span> context.request.
                <span className="c-fn">formData</span>()
                {'\n'}
                {'  '}
                <span className="c-key">await</span> db.
                <span className="c-fn">insert</span>(data)
                {'\n'}
                {'  '}
                <span className="c-key">return new</span>{' '}
                <span className="c-fn">Response</span>(
                <span className="c-str">'ok'</span>)
                {'\n'}
                {'}'}
              </code>
            </pre>
            <div className="code-todo">
              <span className="c-com">// TODO: handle spam, retries, storage, email…</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <h2 className="now-what">Now what?</h2>
        </Reveal>

        <motion.div
          className="problem-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-12%' }}
        >
          {problems.map((p, i) => (
            <motion.div className="pcard" key={i} variants={riseItem}>
              <div className="picon">{p.icon}</div>
              <p>
                <strong>{p.lead}</strong>
                {p.rest}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* =========================================================
   02 — "Just use Formlane."  (light band opener)
   ========================================================= */
export function JustUse() {
  return (
    <section className="paper dots just-use">
      <div className="rails" />
      <div className="wrap">
        <Reveal>
          <div className="ju-mark">
            <span className="brand-mark">
              <span />
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="ju-title">
            Just use Formlane.
            <br />
            <span className="ju-dim">You’ve got the frontend.</span>
            <br />
            <span className="ju-dim">We’ve got your back.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
