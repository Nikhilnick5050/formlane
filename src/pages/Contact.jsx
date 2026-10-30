import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon, Reveal } from '../components/ui.jsx'

const initial = { name: '', email: '', company: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function set(field) {
    return (e) => {
      setForm((f) => ({ ...f, [field]: e.target.value }))
      setErrors((er) => ({ ...er, [field]: undefined }))
    }
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'That email doesn’t look right.'
    if (!form.message.trim()) next.message = 'Please write a short message.'
    return next
  }

  function submit(e) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) setSent(true)
  }

  function reset() {
    setForm(initial)
    setErrors({})
    setSent(false)
  }

  return (
    <div className="page">
      <section className="page-hero contact-hero">
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="wrap page-hero-inner">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="display">
              Say hello.
              <br />
              <span className="serif">We’re listening.</span>
            </h1>
            <p className="hero-sub">
              Questions about plans, security or a tricky integration? Send us a note and we’ll get
              back to you within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="paper contact-body">
        <div className="rails" />
        <div className="wrap contact-layout">
          <Reveal className="contact-form-wrap">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  className="contact-success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="success-mark">
                    <Icon.check />
                  </span>
                  <h3 className="h3">Message sent</h3>
                  <p>
                    Thanks, {form.name.split(' ')[0] || 'there'}. We’ve received your message and
                    will reply to {form.email} shortly.
                  </p>
                  <button className="btn btn-dark" onClick={reset}>
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="contact-form"
                  onSubmit={submit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="field-row">
                    <Field
                      label="Name"
                      value={form.name}
                      onChange={set('name')}
                      error={errors.name}
                      placeholder="Ada Lovelace"
                    />
                    <Field
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      error={errors.email}
                      placeholder="ada@company.com"
                    />
                  </div>
                  <Field
                    label="Company"
                    value={form.company}
                    onChange={set('company')}
                    error={errors.company}
                    placeholder="Acme Inc. (optional)"
                  />
                  <Field
                    label="Message"
                    textarea
                    value={form.message}
                    onChange={set('message')}
                    error={errors.message}
                    placeholder="Tell us what you’re building…"
                  />
                  <button className="btn btn-primary" type="submit">
                    Send message
                    <span className="btn-icon">
                      <Icon.arrow />
                    </span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          <Reveal delay={0.08} className="contact-info">
            <div className="ci-card">
              <span className="ci-icon">
                <Icon.mail />
              </span>
              <h4>Support</h4>
              <p>
                <a href="mailto:support@formlane.com">support@formlane.com</a>
              </p>
              <p>Replies within one business day.</p>
            </div>
            <div className="ci-card">
              <span className="ci-icon">
                <Icon.globe />
              </span>
              <h4>Office</h4>
              <p>Formlane Inc.</p>
              <p>100 Market Street, Suite 400</p>
              <p>San Francisco, CA 94105</p>
            </div>
            <div className="ci-card">
              <span className="ci-icon">
                <Icon.zap />
              </span>
              <h4>Response time</h4>
              <p>Mon–Fri, 9am–6pm PT</p>
              <p>Priority support on Pro &amp; Business.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

function Field({ label, textarea, error, ...props }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <label className={`field ${error ? 'has-error' : ''}`}>
      <span className="field-label">{label}</span>
      <Tag {...props} />
      {error && <span className="field-error">{error}</span>}
    </label>
  )
}