import { Link, useLocation } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import CTASection from '../components/CTASection'
import { BRAND_NAME, BRAND_EMAIL, SITE_URL } from '../config'

const EFFECTIVE_DATE = '11 September 2026'

export default function Privacy() {
  const { pathname } = useLocation()
  const sections = [
    {
      title: '1. Who We Are and Scope',
      body: `${BRAND_NAME} operates ${SITE_URL} and software products including SellerTray. This Privacy Policy explains how ProcessEdge Solutions Limited collects, uses, stores, shares, and protects personal data when you use our website, SellerTray mobile application, WhatsApp-connected order workflows, support channels, and related services.`,
    },
    {
      title: '2. Information We Collect',
      body: 'Depending on how you use our services, we may process account and authentication information; business profile and team information; catalogue and pricing information; customer names, WhatsApp identifiers and phone numbers; inbound WhatsApp messages and order details; order status history and outbound customer notifications; subscription and usage records; billing email and payment-provider references; AI parsing telemetry such as model, outcome and token counts; and limited technical, security and diagnostic logs. Passwords are handled through our authentication provider and are not stored by ProcessEdge in readable form.',
    },
    {
      title: '3. Where the Information Comes From',
      body: 'We receive information directly from merchants and team members, from customers who message a merchant through WhatsApp, from connected service providers such as Meta/WhatsApp and payment providers, and automatically from the operation and security of SellerTray and our website.',
    },
    {
      title: '4. How We Use Information',
      body: 'We use personal data to create and secure accounts; provision businesses and team access; receive and interpret customer order messages; create, review and manage orders; send order-status notifications; provide catalogue, reporting and operational features; measure chargeable AI-assisted order activity; administer subscriptions and billing; provide support; prevent abuse and fraud; monitor reliability and security; comply with legal obligations; and improve our services.',
    },
    {
      title: '5. AI-Assisted Order Processing',
      body: 'SellerTray may use artificial intelligence to interpret customer order messages and match requested items to a merchant catalogue. When AI parsing is used, relevant message text and catalogue context may be processed by OpenAI as a service provider. AI results are assistive and may be incomplete or incorrect; SellerTray is designed so merchants can review and correct order details before fulfilment. We record limited AI-processing telemetry for reliability, cost control and usage billing.',
    },
    {
      title: '6. WhatsApp and Meta Data',
      body: 'When a merchant connects WhatsApp to SellerTray, we process messages and related identifiers needed to receive orders and send operational replies or order-status notifications. Merchants are responsible for using WhatsApp and customer data lawfully, including obtaining any consent required for their communications. Meta and WhatsApp also process information under their own terms and privacy policies.',
    },
    {
      title: '7. Payments and Billing',
      body: 'SellerTray uses Paystack for subscription checkout and supported billing operations. Paystack processes payment-card and bank-payment details on its systems. ProcessEdge may retain billing email, plan information, checkout references, transaction or subscription references, payment status, and protected payment-authorization references needed to administer the service. We do not intentionally store full payment-card numbers or card security codes.',
    },
    {
      title: '8. Service Providers and International Processing',
      body: 'We use service providers to operate SellerTray and ProcessEdge services, including Supabase for authentication, database and backend infrastructure; Meta/WhatsApp for messaging; OpenAI for AI-assisted order parsing; Paystack for payments; and Vercel for hosting our public website. These providers may process data in countries outside Nigeria subject to their contractual, security and legal safeguards. We do not sell personal data or share it with advertisers for behavioural advertising.',
    },
    {
      title: '9. Data Retention',
      body: 'We retain personal data for as long as reasonably necessary to provide the service, maintain account and transaction integrity, resolve disputes, enforce agreements, meet security needs and comply with applicable legal obligations. Retention periods vary by data type and account status. Where deletion is requested, we remove eligible account and business data subject to outstanding billing, active subscriptions, security, legal or audit obligations that may require limited information to be retained.',
    },
    {
      title: '10. Data Export and Account Deletion',
      body: 'Eligible SellerTray business owners can request an export of their business dataset from the app. SellerTray also provides an in-app account-deletion flow. Account deletion may require cancellation of an active paid subscription and settlement of outstanding usage charges before owned business data and the authentication account can be removed. Users who cannot access the app may contact ProcessEdge for assistance.',
    },
    {
      title: '11. Security',
      body: 'We use measures designed to protect personal data, including HTTPS in transit, authenticated access, tenant-level access controls, row-level database security, restricted server credentials, protected billing references, request logging with sensitive-value redaction, and access controls for administrative operations. No system can guarantee absolute security, and users should protect their devices and credentials.',
    },
    {
      title: '12. Legal Bases and Your Rights',
      body: 'We process personal data as necessary to provide contracted services, with consent where required, for legitimate operational and security interests, and to comply with law. Subject to the Nigeria Data Protection Act 2023 and other applicable law, you may have rights to request access, correction, deletion, restriction, objection, portability, or information about how your data is processed. You may also lodge a complaint with the appropriate data-protection authority.',
    },
    {
      title: '13. Children',
      body: 'SellerTray is intended for businesses and authorised business users, not for children. We do not knowingly offer SellerTray accounts to persons who cannot lawfully enter into the applicable service agreement.',
    },
    {
      title: '14. Changes to This Policy',
      body: 'We may update this Privacy Policy as SellerTray and other ProcessEdge services evolve. We will publish the updated policy with a revised effective date and, where required, provide additional notice or request renewed acceptance.',
    },
    {
      title: '15. Contact Us',
      body: `For privacy questions, data-rights requests or SellerTray support relating to personal data, contact ${BRAND_NAME} at ${BRAND_EMAIL}.`,
    },
  ]

  return (
    <div style={{ paddingTop: 72 }}>
      <PageMeta
        title="Privacy Policy — ProcessEdge Solutions & SellerTray"
        description="Privacy policy for ProcessEdge Solutions and SellerTray, including WhatsApp order processing, AI-assisted order parsing, billing, data rights and account deletion."
        path={pathname}
      />

      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Legal</div>
          <h1>Privacy Policy</h1>
          <p>
            How ProcessEdge Solutions Limited handles personal data across our website,
            SellerTray, WhatsApp-connected workflows, and related services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 780, margin: '0 auto' }}>
          <div style={{
            background: '#f8fafc',
            border: '1px solid var(--grey-border)',
            borderLeft: '4px solid #0056A6',
            borderRadius: 8,
            padding: '16px 20px',
            marginBottom: 40,
          }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', marginBottom: 6 }}>
              Effective date: {EFFECTIVE_DATE}
            </p>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-body)', lineHeight: 1.65, margin: 0 }}>
              SellerTray legal version: 2026-09-11. For SellerTray account deletion instructions, see{' '}
              <Link to="/sellertray/account-deletion">SellerTray Account Deletion</Link>.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title} style={{ marginBottom: 36 }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: 10 }}>
                {section.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.78 }}>
                {section.body}
              </p>
            </div>
          ))}

          <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--grey-border)', display: 'flex', gap: 14, flexWrap: 'wrap' as const }}>
            <Link to="/sellertray/account-deletion" className="btn btn-primary">SellerTray Account Deletion</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      <CTASection
        headline="Questions About Your Data?"
        subtext="Contact ProcessEdge for privacy, access, export, correction, or deletion enquiries."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Terms of Service"
        secondaryTo="/terms"
      />
    </div>
  )
}
