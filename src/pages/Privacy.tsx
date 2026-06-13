import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import CTASection from '../components/CTASection'
import { BRAND_NAME, BRAND_DOMAIN, BRAND_EMAIL, SITE_URL } from '../config'

export default function Privacy() {
  return (
    <div style={{ paddingTop: 72 }}>
      <PageMeta
        title="Privacy Policy — ProcessEdge Solutions"
        description="Privacy policy for ProcessEdge Solutions. How we collect, use, and protect personal information when you use our website and services."
        path="/privacy"
      />

      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Legal</div>
          <h1>Privacy Policy</h1>
          <p>
            How {BRAND_NAME} collects, uses, and protects your personal information
            when you use our website and services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 780, margin: '0 auto' }}>

          {/* Placeholder notice */}
          <div style={{
            background: '#fff8e1', border: '1px solid #ffe082',
            borderLeft: '4px solid #f59e0b', borderRadius: 8,
            padding: '16px 20px', marginBottom: 48,
          }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.88rem', color: '#78350f', marginBottom: 6 }}>
              📋 Working Draft — Pending Legal Review
            </p>
            <p style={{ fontSize: '0.85rem', color: '#92400e', lineHeight: 1.65 }}>
              This privacy policy is a working draft. It should not be treated as a
              binding legal document until it has been reviewed and approved by the
              {BRAND_NAME} legal team and formally published.
              Last reviewed: {new Date().getFullYear()}.
            </p>
          </div>

          {[
            {
              title: '1. Who We Are',
              body: `${BRAND_NAME} is a business process and technology solutions company providing ERP implementation, accounting solutions, retail automation, training, and industry-focused software products. Our website is at ${SITE_URL}. Our internal business portal operates at portal.processedge.com.ng.`,
            },
            {
              title: '2. Information We Collect',
              body: 'We may collect the following information when you interact with our website: your name, organisation name, email address, phone number, industry, and the nature of your enquiry — submitted through our contact form. We do not collect payment information, passwords, or sensitive personal data through this website.',
            },
            {
              title: '3. How We Use Your Information',
              body: "Information submitted through the contact form is used to respond to your enquiry and communicate relevant ProcessEdge services. We do not sell, rent, or share your personal information with third parties for marketing purposes.",
            },
            {
              title: '4. Data Storage and Security',
              body: 'Contact form submissions are handled through a secure form service (to be specified before production launch). Our website is hosted on Vercel with HTTPS enforced. Our portal operates on a secured server with appropriate security configurations.',
            },
            {
              title: '5. Cookies and Tracking',
              body: 'This website may use essential cookies for performance and analytics. No advertising or tracking cookies are used without explicit user consent. A full cookie policy will be added before formal launch.',
            },
            {
              title: '6. Your Rights (NDPR / NDPA)',
              body: 'Under the Nigeria Data Protection Regulation (NDPR) and the Nigeria Data Protection Act (NDPA), you have the right to access, correct, or request deletion of personal data we hold about you. To exercise these rights, contact us at ' + BRAND_EMAIL + '. We will respond within a reasonable timeframe as required by applicable law.',
            },
            {
              title: '7. Third-Party Services',
              body: `Our website links to third-party platforms including our portal, WhatsApp, and social media profiles. This privacy policy applies only to ${BRAND_DOMAIN}. Third-party services are subject to their own privacy policies.`,
            },
            {
              title: '8. Changes to This Policy',
              body: 'We may update this policy from time to time. Material changes will be communicated on this page with a revised effective date. Continued use of the website after changes constitutes acceptance of the updated policy.',
            },
            {
              title: '9. Contact Us',
              body: `For privacy-related enquiries, contact ${BRAND_NAME} at ${BRAND_EMAIL} or use the contact form on our website.`,
            },
          ].map(s => (
            <div key={s.title} style={{ marginBottom: 36 }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: 10 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.78 }}>
                {s.body}
              </p>
            </div>
          ))}

          <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--grey-border)', display: 'flex', gap: 14, flexWrap: 'wrap' as const }}>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            <Link to="/" className="btn btn-secondary">Back to Home</Link>
          </div>
        </div>
      </section>

      <CTASection
        headline="Questions About Your Data?"
        subtext="Reach out and we'll address any privacy-related enquiry promptly."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Back to Home"
        secondaryTo="/"
      />
    </div>
  )
}
