import { useState } from 'react'
import { Mail, Globe, MessageSquare, Send, CheckCircle2, MapPin, ExternalLink } from 'lucide-react'
import './Contact.css'

import { PORTAL_URL } from '../config'

const interests = [
  'ERP Implementation', 'Accounting Solutions', 'Retail Sales Automation',
  'Training & Support', 'EduEdge', 'VetEdge', 'HotelEdge', 'CoopEdge', 'ChurchEdge', 'Other',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', interest: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    // TODO: Connect to backend / Formspree / email service before production
    console.log('Form submission:', formData)
    setSubmitted(true)
  }

  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Get in Touch</div>
          <h1>Let's Talk About Your Business</h1>
          <p>Tell us about your challenge and we'll recommend the right system, service, or product to move you forward.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Left: Info */}
            <div className="contact-info">
              <div className="section-label section-label-blue">Contact Information</div>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '1.6rem', fontWeight: 700, marginBottom: 16 }}>How to Reach Us</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 32 }}>
                Whether you're ready to start a project or just exploring your options — reach out and we'll get back to you within one business day.
              </p>

              <div className="contact-channels">
                <a href="mailto:hello@processedge.com.ng" className="contact-channel">
                  <div className="contact-channel__icon"><Mail size={20} /></div>
                  <div>
                    <div className="contact-channel__label">Email</div>
                    <div className="contact-channel__value">hello@processedge.com.ng</div>
                  </div>
                </a>
                <a href="https://wa.me/2348096086857" target="_blank" rel="noopener noreferrer" className="contact-channel">
                  <div className="contact-channel__icon contact-channel__icon--green"><MessageSquare size={20} /></div>
                  <div>
                    <div className="contact-channel__label">WhatsApp</div>
                    <div className="contact-channel__value">+234 809 608 6857</div>
                  </div>
                </a>
                <a href="https://www.processedge.com.ng" target="_blank" rel="noopener noreferrer" className="contact-channel">
                  <div className="contact-channel__icon"><Globe size={20} /></div>
                  <div>
                    <div className="contact-channel__label">Website</div>
                    <div className="contact-channel__value">www.processedge.com.ng</div>
                  </div>
                </a>
                <div className="contact-channel">
                  <div className="contact-channel__icon"><MapPin size={20} /></div>
                  <div>
                    <div className="contact-channel__label">Location</div>
                    <div className="contact-channel__value">Nigeria (Remote-first, serving all states)</div>
                  </div>
                </div>
                <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer" className="contact-channel">
                  <div className="contact-channel__icon"><ExternalLink size={20} /></div>
                  <div>
                    <div className="contact-channel__label">Customer Portal</div>
                    <div className="contact-channel__value">portal.processedge.com.ng</div>
                  </div>
                </a>
              </div>

              <div className="contact-social-label">Follow us</div>
              <div className="contact-social">
                {['Twitter / X', 'LinkedIn', 'Facebook'].map(s => (
                  <span key={s} className="contact-social-chip">@processedgeng · {s}</span>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact-form-wrap">
              {submitted ? (
                <div className="contact-success">
                  <CheckCircle2 size={48} color="var(--green)" />
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. We'll review your message and get back to you within one business day.</p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
                </div>
              ) : (
                <div className="contact-form">
                  <h3>Book a Consultation</h3>
                  <p>Fill in the form below and we'll be in touch shortly.</p>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone / WhatsApp</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234 800 000 0000" />
                    </div>
                    <div className="form-group">
                      <label>Company / Organisation</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>I'm Interested In</label>
                    <select name="interest" value={formData.interest} onChange={handleChange}>
                      <option value="">Select a service or product…</option>
                      {interests.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your business and what you need…" rows={5} required />
                  </div>
                  <button className="btn btn-primary btn-lg" onClick={handleSubmit} style={{ width: '100%', justifyContent: 'center' }}>
                    <Send size={16} /> Send Message
                  </button>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 12, textAlign: 'center' }}>
                    We respect your privacy. Your information will not be shared with third parties.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
