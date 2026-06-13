import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import CTASection from '../components/CTASection'
import { BRAND_NAME, BRAND_DOMAIN, BRAND_EMAIL } from '../config'

export default function Terms() {
  return (
    <div style={{ paddingTop: 72 }}>
      <PageMeta
        title="Terms of Service — ProcessEdge Solutions"
        description="Terms of service for ProcessEdge Solutions. The terms governing use of our website, products, and services."
        path="/terms"
      />

      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Legal</div>
          <h1>Terms of Service</h1>
          <p>
            The terms and conditions governing your use of the {BRAND_NAME} website and services.
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
              These terms of service are a working draft. They should not be treated as
              binding until reviewed and approved by the {BRAND_NAME} legal team and
              formally published. Last reviewed: {new Date().getFullYear()}.
            </p>
          </div>

          {[
            {
              title: '1. Acceptance of Terms',
              body: `By accessing or using the ${BRAND_NAME} website at ${BRAND_DOMAIN}, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use this website. Use of the ProcessEdge portal at portal.processedge.com.ng is governed by separate terms for registered users and clients.`,
            },
            {
              title: '2. Use of the Website',
              body: 'This website is intended for business enquiries, information about ProcessEdge products and services, and consultation booking. You agree not to use this website for any unlawful purpose, to distribute spam, to attempt unauthorised access to any part of our systems, or to misrepresent your identity or organisation.',
            },
            {
              title: '3. Intellectual Property',
              body: `All content on this website — including text, design, product names, logos, graphics, and code — is the property of ${BRAND_NAME} or its licensors. The ProcessEdge logo and brand assets are proprietary and may not be reproduced, modified, or used without prior written consent. Product names including EduEdge, VetEdge, ClinicEdge, HotelEdge, CoopEdge, ChurchEdge, and AgricEdge are trademarks of ${BRAND_NAME}.`,
            },
            {
              title: '4. Service Descriptions',
              body: 'Product and service descriptions on this website are provided for informational purposes only. Actual service scope, pricing, timelines, and deliverables are defined in individual client agreements and statements of work. ProcessEdge Solutions reserves the right to modify its products and services at any time.',
            },
            {
              title: '5. User Responsibilities',
              body: 'Any information submitted through the contact form must be accurate and truthful. You are responsible for maintaining the confidentiality of any portal credentials issued to you. You agree not to share, transfer, or misuse access credentials provided by ProcessEdge Solutions for any system or portal.',
            },
            {
              title: '6. No Backend Submissions via Website',
              body: 'The public website does not currently process payments, submit data to live backend systems, or create accounts. All authenticated operations, client data management, and ERP functions are handled exclusively through the ProcessEdge portal at portal.processedge.com.ng.',
            },
            {
              title: '7. Limitation of Liability',
              body: `${BRAND_NAME} makes reasonable efforts to ensure the accuracy and availability of this website but provides it on an "as is" basis without warranty of any kind. To the extent permitted by Nigerian law, ${BRAND_NAME} shall not be liable for any indirect, incidental, or consequential damages arising from use of this website or reliance on its content.`,
            },
            {
              title: '8. Third-Party Links',
              body: 'This website may contain links to third-party websites including our portal, social media profiles, and partner platforms. These links are provided for convenience only. ProcessEdge Solutions is not responsible for the content, privacy practices, or availability of third-party sites.',
            },
            {
              title: '9. Governing Law',
              body: 'These Terms of Service are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from or related to these terms shall be subject to the jurisdiction of Nigerian courts.',
            },
            {
              title: '10. Changes to These Terms',
              body: 'We may update these terms from time to time. Changes will be posted on this page with a revised date. Continued use of the website following any changes constitutes acceptance of the revised terms.',
            },
            {
              title: '11. Contact',
              body: `For questions about these Terms of Service, contact ${BRAND_NAME} at ${BRAND_EMAIL} or use the contact form on our website.`,
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
        headline="Questions About Our Terms?"
        subtext="Get in touch for any clarification on terms or service agreements."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Back to Home"
        secondaryTo="/"
      />
    </div>
  )
}
