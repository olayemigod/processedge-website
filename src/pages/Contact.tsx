import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Globe, MessageSquare, CheckCircle2, ArrowRight, Send
} from 'lucide-react'
import { BRAND_DOMAIN, BRAND_HANDLE, PORTAL_URL } from '../config'
import './Contact.css'

const industries = [
  'Education',
  'Veterinary / Pet Business',
  'Clinic / Healthcare',
  'Hospitality',
  'Cooperative',
  'Church / Ministry',
  'Agriculture / Agribusiness',
  'Retail / SME',
  'Other',
]

const needOptions = [
  'ERP Implementation',
  'Accounting Solutions',
  'Retail Sales Automation',
  'EduEdge',
  'VetEdge',
  'ClinicEdge',
  'HotelEdge',
  'CoopEdge',
  'ChurchEdge',
  'AgricEdge',
  'Training & Support',
  'General Consultation',
]

const whatYouCanAsk = [
  'ERP implementation for your business',
  'Business process optimization',
  'Accounting structure and financial visibility',
  'Retail POS and inventory automation',
  'Product demos for any ProcessEdge product',
  'Training and support for existing systems',
  'Industry-specific system enquiries',
  'Pricing and project scoping',
]

const nextSteps = [
  { num: '01', title: 'Share Your Need',                desc: 'Tell us about your organisation, your current process, and the challenge you need to solve.' },
  { num: '02', title: 'ProcessEdge Reviews',            desc: 'We review your inquiry and prepare for a productive conversation about your specific situation.' },
  { num: '03', title: 'We Discuss Your Workflow',       desc: 'A short discovery conversation to understand your current operations, pain points, and desired outcomes.' },
  { num: '04', title: 'We Recommend a Path Forward',   desc: 'We recommend the right product, service, or combination — with a realistic scope and pricing approach.' },
]

interface FormState {
  name: string
  org: string
  email: string
  phone: string
  industry: string
  need: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '', org: '', email: '', phone: '', industry: '', need: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  /**
   * Front-end only handler.
   * TODO before production: connect to Formspree, EmailJS, or ERPNext CRM Lead API.
   * Do not add backend credentials or secrets to this file.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Contact</div>
          <h1>Let's Discuss the Right System for Your Organisation</h1>
          <p>
            Tell us about your business, process challenges, or implementation needs.
            ProcessEdge will help you identify the right path toward structure, visibility,
            automation, and operational control.
          </p>
        </div>
      </section>

      {/* Main: form + sidebar */}
      <section className="section">
        <div className="container ct-layout">

          {/* ── Form ── */}
          <div className="ct-form-wrap">
            {submitted ? (
              <div className="ct-success">
                <CheckCircle2 size={52} color="var(--green)" />
                <h3>Inquiry Prepared</h3>
                <p>
                  Thank you. Your inquiry has been prepared. Please contact ProcessEdge
                  directly or connect this form to your preferred backend/email service
                  before production use.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, justifyContent: 'center' }}>
                  <a href={`https://wa.me/2348096086857`} target="_blank" rel="noopener noreferrer"
                    className="btn btn-green">
                    <MessageSquare size={15} /> WhatsApp Us
                  </a>
                  <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="ct-form" onSubmit={handleSubmit}>
                <h2 className="ct-form__heading">Send an Inquiry</h2>
                <p className="ct-form__sub">
                  Fill in the details below and ProcessEdge will be in touch.
                </p>

                <div className="ct-row">
                  <div className="ct-field">
                    <label htmlFor="ct-name">Full Name *</label>
                    <input id="ct-name" type="text" name="name" value={form.name}
                      onChange={handleChange} placeholder="Your full name"
                      required autoComplete="name" />
                  </div>
                  <div className="ct-field">
                    <label htmlFor="ct-org">Organisation Name *</label>
                    <input id="ct-org" type="text" name="org" value={form.org}
                      onChange={handleChange} placeholder="Your organisation"
                      required autoComplete="organization" />
                  </div>
                </div>

                <div className="ct-row">
                  <div className="ct-field">
                    <label htmlFor="ct-email">Email Address *</label>
                    <input id="ct-email" type="email" name="email" value={form.email}
                      onChange={handleChange} placeholder="your@email.com"
                      required autoComplete="email" />
                  </div>
                  <div className="ct-field">
                    <label htmlFor="ct-phone">Phone Number</label>
                    <input id="ct-phone" type="tel" name="phone" value={form.phone}
                      onChange={handleChange} placeholder="+234 800 000 0000"
                      autoComplete="tel" />
                  </div>
                </div>

                <div className="ct-row">
                  <div className="ct-field">
                    <label htmlFor="ct-industry">Industry</label>
                    <select id="ct-industry" name="industry" value={form.industry} onChange={handleChange}>
                      <option value="">Select your industry…</option>
                      {industries.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                  <div className="ct-field">
                    <label htmlFor="ct-need">What do you need help with?</label>
                    <select id="ct-need" name="need" value={form.need} onChange={handleChange}>
                      <option value="">Select an option…</option>
                      {needOptions.map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>

                <div className="ct-field">
                  <label htmlFor="ct-message">Message *</label>
                  <textarea id="ct-message" name="message" value={form.message}
                    onChange={handleChange} rows={5} required
                    placeholder="Tell us about your current process, challenges, or what you're trying to achieve…" />
                </div>

                <button type="submit" className="btn btn-primary btn-lg ct-submit">
                  <Send size={15} /> Send Inquiry
                </button>

                <p className="ct-form__note">
                  Your information will not be shared with third parties.
                  {' '}
                  <strong>Note:</strong> this form requires a backend connection before
                  production use — see TODO in Contact.tsx.
                </p>
              </form>
            )}
          </div>

          {/* ── Sidebar ── */}
          <aside className="ct-sidebar">

            {/* Contact details */}
            <div className="ct-sidebar__card">
              <div className="ct-sidebar__label">Contact Details</div>
              <div className="ct-contact-items">
                <a href={`https://${BRAND_DOMAIN}`} target="_blank" rel="noopener noreferrer"
                  className="ct-contact-item">
                  <Globe size={16} />
                  <div>
                    <div className="ct-contact-item__label">Website</div>
                    <div className="ct-contact-item__value">{BRAND_DOMAIN}</div>
                  </div>
                </a>
                <a href="https://wa.me/2348096086857" target="_blank" rel="noopener noreferrer"
                  className="ct-contact-item">
                  <MessageSquare size={16} />
                  <div>
                    <div className="ct-contact-item__label">WhatsApp</div>
                    <div className="ct-contact-item__value">+234 809 608 6857</div>
                  </div>
                </a>
                <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer"
                  className="ct-contact-item">
                  <Globe size={16} />
                  <div>
                    <div className="ct-contact-item__label">Customer Portal</div>
                    <div className="ct-contact-item__value">portal.processedge.com.ng</div>
                  </div>
                </a>
                <div className="ct-contact-item">
                  <MessageSquare size={16} />
                  <div>
                    <div className="ct-contact-item__label">Social</div>
                    <div className="ct-contact-item__value">{BRAND_HANDLE}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="ct-sidebar__card">
              <div className="ct-sidebar__label">Quick Actions</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { label: 'Request Pricing',  to: '/pricing'   },
                  { label: 'View Products',    to: '/products'  },
                  { label: 'View Services',    to: '/services'  },
                  { label: 'See Solutions',    to: '/solutions' },
                ].map(l => (
                  <Link key={l.to} to={l.to}
                    className="btn btn-secondary btn-sm"
                    style={{ justifyContent: 'space-between' }}>
                    {l.label} <ArrowRight size={13} />
                  </Link>
                ))}
              </div>
            </div>

            {/* What you can ask */}
            <div className="ct-sidebar__card">
              <div className="ct-sidebar__label">What You Can Ask About</div>
              <ul className="ct-ask-list">
                {whatYouCanAsk.map(item => (
                  <li key={item}>
                    <CheckCircle2 size={13} color="var(--green)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* What happens next */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 44 }}>
            <div className="section-label section-label-green">What Happens Next</div>
            <h2 className="section-title">After You Get in Touch</h2>
          </div>
          <div className="ct-steps">
            {nextSteps.map((s, i) => (
              <div key={s.num} className="ct-step">
                <div className="ct-step__num">{s.num}</div>
                <h3 className="ct-step__title">{s.title}</h3>
                <p className="ct-step__desc">{s.desc}</p>
                {i < nextSteps.length - 1 && <div className="ct-step__line" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section ct-final-cta">
        <div className="container" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <div className="section-label section-label-blue">Start Here</div>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>
            Start with a conversation. Build toward better control.
          </h2>
          <p style={{ fontSize: '0.97rem', color: 'var(--text-body)', lineHeight: 1.78, marginBottom: 28 }}>
            Every implementation begins with understanding your current process.
            The conversation costs nothing — and it gives both sides a clear picture
            of what the right path forward looks like.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <a href="https://wa.me/2348096086857" target="_blank" rel="noopener noreferrer"
              className="btn btn-green btn-lg">
              <MessageSquare size={15} /> WhatsApp ProcessEdge
            </a>
            <Link to="/pricing" className="btn btn-secondary btn-lg">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
