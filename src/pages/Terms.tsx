import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'

export default function Terms() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Legal</div>
          <h1>Terms of Service</h1>
          <p>The terms and conditions governing your use of the ProcessEdge Solutions website and services.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{ background: '#fff8e1', border: '1px solid #ffe082', borderLeft: '4px solid #f59e0b', borderRadius: 8, padding: '16px 20px', marginBottom: 48 }}>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#78350f', marginBottom: 6 }}>📋 Placeholder — Pending Legal Review</p>
              <p style={{ fontSize: '0.85rem', color: '#92400e', lineHeight: 1.65 }}>These terms of service are a working draft pending formal review. They should not be treated as binding until officially published. Last reviewed: {new Date().getFullYear()}.</p>
            </div>
            {[
              { title: '1. Acceptance of Terms', body: 'By accessing www.processedge.com.ng you agree to these Terms of Service. Use of the portal at portal.processedge.com.ng is governed by separate terms for registered users.' },
              { title: '2. Use of the Website', body: 'This website is for business enquiries and information about ProcessEdge products and services. You agree not to use it for unlawful purposes or to misrepresent your identity.' },
              { title: '3. Intellectual Property', body: 'All content — text, design, product names, logos, and code — is the property of ProcessEdge Solutions. The ProcessEdge logo and product names (EduEdge, VetEdge, HotelEdge, CoopEdge, ChurchEdge) are proprietary marks.' },
              { title: '4. Service Descriptions', body: 'Product descriptions are for information only. Actual scope, pricing, and timelines are defined in individual client agreements. ProcessEdge Solutions reserves the right to modify its products and services.' },
              { title: '5. Governing Law', body: 'These Terms are governed by the laws of the Federal Republic of Nigeria. Disputes are subject to Nigerian court jurisdiction.' },
              { title: '6. Contact', body: 'For questions about these Terms, contact ProcessEdge Solutions at hello@processedge.com.ng.' },
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
      <CTASection headline="Questions About Our Terms?" subtext="Get in touch for any clarification on terms or service agreements." primaryLabel="Contact Us" primaryTo="/contact" secondaryLabel="Back to Home" secondaryTo="/" />
    </div>
  )
}
