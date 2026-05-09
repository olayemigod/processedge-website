import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'

export default function Privacy() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Legal</div>
          <h1>Privacy Policy</h1>
          <p>How ProcessEdge Solutions collects, uses, and protects your personal information when you use our website and services.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{ background: '#fff8e1', border: '1px solid #ffe082', borderLeft: '4px solid #f59e0b', borderRadius: 8, padding: '16px 20px', marginBottom: 48 }}>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#78350f', marginBottom: 6 }}>📋 Placeholder — Pending Legal Review</p>
              <p style={{ fontSize: '0.85rem', color: '#92400e', lineHeight: 1.65 }}>This privacy policy is a working draft pending formal review. It should not be treated as a binding legal document until officially published. Last reviewed: {new Date().getFullYear()}.</p>
            </div>
            {[
              { title: '1. Who We Are', body: 'ProcessEdge Solutions is a Nigerian business software consultancy providing ERP implementation, automation, and industry-specific software. Our website is at www.processedge.com.ng and our portal at portal.processedge.com.ng.' },
              { title: '2. Information We Collect', body: 'We collect your name, email, phone, and company name when you submit the contact form. We do not collect payment information or sensitive personal data through this website.' },
              { title: '3. How We Use Your Information', body: "Information submitted through the contact form is used solely to respond to your enquiry. We do not sell or share your personal information with third parties for marketing purposes." },
              { title: '4. Data Storage and Security', body: 'Contact form data is handled through a secure form service. Our website is hosted on Vercel with HTTPS enforced. Our portal operates on a secured Hetzner server.' },
              { title: '5. Your Rights (NDPR)', body: 'Under the Nigeria Data Protection Regulation (NDPR) and the Nigeria Data Protection Act (NDPA), you have the right to access, correct, or request deletion of your personal data. Contact us at hello@processedge.com.ng.' },
              { title: '6. Contact Us', body: 'For privacy-related enquiries, contact ProcessEdge Solutions at hello@processedge.com.ng or use the contact form on our website.' },
            ].map(s => (
              <div key={s.title} style={{ marginBottom: 36 }}>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.75 }}>{s.body}</p>
              </div>
            ))}
            <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--grey-border)', display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/" className="btn btn-secondary">Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection headline="Questions About Your Data?" subtext="Reach out and we'll address any privacy-related enquiry promptly." primaryLabel="Contact Us" primaryTo="/contact" secondaryLabel="Back to Home" secondaryTo="/" />
    </div>
  )
}
