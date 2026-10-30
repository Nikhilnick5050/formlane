import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon, Reveal } from '../components/ui.jsx'

const topics = [
  { id: 'getting-started', label: 'Getting started' },
  { id: 'create-a-form', label: 'Create a form' },
  { id: 'spam-protection', label: 'Spam protection' },
  { id: 'webhooks', label: 'Webhooks' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'api', label: 'API' },
]

const sections = [
  {
    id: 'getting-started',
    title: 'Getting started',
    intro:
      'Formlane is a form backend: you build the form, we handle the submission. Point any HTML form at your endpoint and we store, filter and deliver every entry.',
    blocks: [
      {
        h: '1. Create an account',
        p: 'Sign up for free. You get a workspace and your first form endpoint immediately — no server, no setup.',
      },
      {
        h: '2. Grab your endpoint',
        p: 'Every form gets a unique endpoint URL. Paste it into your form’s action attribute and you’re done.',
      },
      {
        h: '3. Submit and verify',
        p: 'Send a test submission, then check your dashboard. It appears instantly, with spam filtering already applied.',
      },
    ],
    code: `<form action="https://formlane.com/f/abc123xyz" method="POST">
  <input type="text" name="name" />
  <input type="email" name="email" />
  <button type="submit">Send</button>
</form>`,
  },
  {
    id: 'create-a-form',
    title: 'Create a form',
    intro:
      'Any static form works. Use plain HTML, React, Next.js, Astro, Webflow — anything that can POST to a URL.',
    blocks: [
      {
        h: 'Field names become keys',
        p: 'Each input’s name attribute becomes a key in your submission data. Keep them short and consistent.',
      },
      {
        h: 'Add a redirect',
        p: 'Use a hidden _redirect field to send users to a thank-you page after they submit.',
      },
      {
        h: 'Validate on the client',
        p: 'Add required and type attributes for a smoother experience. Server-side spam filtering still runs regardless.',
      },
    ],
    code: `<form action="https://formlane.com/f/abc123xyz" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <input type="hidden" name="_redirect" value="/thanks" />
  <button type="submit">Send</button>
</form>`,
  },
  {
    id: 'spam-protection',
    title: 'Spam protection',
    intro:
      'Every submission is scored automatically. Obvious spam is blocked before it reaches your inbox; the rest is flagged for review.',
    blocks: [
      {
        h: 'Automatic filtering',
        p: 'Honeypot fields and heuristics run on every request, with no extra configuration needed.',
      },
      {
        h: 'Add a honeypot',
        p: 'A hidden field that humans never fill in is a simple, effective trap for bots.',
      },
      {
        h: 'Require a CAPTCHA',
        p: 'For high-traffic or public forms, enable CAPTCHA from the form settings for an extra layer.',
      },
    ],
    code: `<form action="https://formlane.com/f/abc123xyz" method="POST">
  <input type="text" name="_gotcha" style="display:none" />
  <input type="email" name="email" required />
  <button type="submit">Send</button>
</form>`,
  },
  {
    id: 'webhooks',
    title: 'Webhooks',
    intro:
      'Forward submissions to your own server in real time. Webhooks fire on every accepted submission with a signed payload.',
    blocks: [
      {
        h: 'Add an endpoint',
        p: 'Set a URL in your form settings. We POST a JSON payload there the moment a submission is accepted.',
      },
      {
        h: 'Verify the signature',
        p: 'Every request includes a signature header so you can confirm it really came from Formlane.',
      },
      {
        h: 'Retries on failure',
        p: 'If your endpoint is down, we retry with exponential backoff for up to 24 hours.',
      },
    ],
    code: `app.post('/formlane', (req, res) => {
  const sig = req.headers['x-formlane-signature']
  if (!verify(req.body, sig)) return res.status(401).end()
  console.log(req.body)
  res.status(200).end()
})`,
  },
  {
    id: 'integrations',
    title: 'Integrations',
    intro:
      'Pipe submissions into the tools you already use — no code required. Connect once and every entry flows through.',
    blocks: [
      {
        h: 'Email & Slack',
        p: 'Get a notification in your inbox or a Slack channel the moment a form is submitted.',
      },
      {
        h: 'Sheets & Notion',
        p: 'Append each submission as a new row or page, so your data stays in sync automatically.',
      },
      {
        h: 'Zapier & Make',
        p: 'Connect to thousands of apps through Zapier or Make for custom automations.',
      },
    ],
    code: `# formlane.toml
[integrations]
slack = { webhook = "https://hooks.slack.com/..." }
notion = { database = "abc123" }`,
  },
  {
    id: 'api',
    title: 'API',
    intro:
      'Everything in the dashboard is available through a REST API. Read submissions, manage forms and export data programmatically.',
    blocks: [
      {
        h: 'Authentication',
        p: 'Authenticate with a bearer token scoped to your workspace. Keep it server-side only.',
      },
      {
        h: 'List submissions',
        p: 'Fetch submissions with pagination and filters for status, date and form.',
      },
      {
        h: 'Rate limits',
        p: 'The API allows 120 requests per minute per workspace. Higher limits are available on Business.',
      },
    ],
    code: `curl https://api.formlane.com/v1/forms/abc123xyz/submissions \\
  -H "Authorization: Bearer $FORMLANE_TOKEN"`,
  },
]

export default function Docs() {
  const [active, setActive] = useState('getting-started')
  const section = sections.find((s) => s.id === active)

  return (
    <div className="page">
      <section className="page-hero docs-hero">
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="wrap page-hero-inner">
          <Reveal>
            <p className="eyebrow">Documentation</p>
            <h1 className="display">
              Everything you need
              <br />
              <span className="serif">to ship forms.</span>
            </h1>
            <p className="hero-sub">
              Short, practical guides for setting up forms, stopping spam and wiring up your stack.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="paper docs-body">
        <div className="rails" />
        <div className="wrap docs-layout">
          <aside className="docs-side">
            <nav className="docs-nav">
              {topics.map((t) => (
                <button
                  key={t.id}
                  className={active === t.id ? 'on' : ''}
                  onClick={() => setActive(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </nav>
          </aside>

          <div className="docs-content">
            <AnimatePresence mode="wait">
              <motion.article
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="h2 docs-title">{section.title}</h2>
                <p className="docs-intro">{section.intro}</p>

                {section.blocks.map((b) => (
                  <div key={b.h} className="docs-block">
                    <h3 className="h3">{b.h}</h3>
                    <p>{b.p}</p>
                  </div>
                ))}

                <div className="code-block">
                  <div className="code-head">
                    <span className="code-dots">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className="code-lang">example</span>
                  </div>
                  <pre>
                    <code>{section.code}</code>
                  </pre>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  )
}