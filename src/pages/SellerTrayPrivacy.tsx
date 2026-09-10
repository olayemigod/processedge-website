import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { BRAND_EMAIL } from '../config'

const sections = [
  {
    title: '1. Who this policy covers',
    body: 'SellerTray is provided by ProcessEdge Solutions Limited. This policy covers the SellerTray mobile application and SellerTray-specific web resources. For merchant workspace data, ProcessEdge determines the service and security processing needed to operate SellerTray. For customer order data that a merchant receives through WhatsApp and manages in SellerTray, the merchant ordinarily determines the business purpose and ProcessEdge processes that data to provide the service.',
  },
  {
    title: '2. Data SellerTray processes',
    body: 'SellerTray may process account data such as email address and authentication identifiers; merchant business profile, catalogue, team and invitation data; customer names, phone numbers, WhatsApp messages and order details; order status and notification history; subscription and payment-reference metadata; and technical security, audit and service logs. SellerTray does not need advertising identifiers and does not sell personal data for advertising.',
  },
  {
    title: '3. Why we process data',
    body: 'We process data to create and secure accounts, provision merchant workspaces, receive and organise WhatsApp orders, assist with order interpretation, apply merchant catalogue pricing, support fulfilment and customer notifications, manage teams and subscriptions, provide support, prevent abuse, investigate incidents, meet legal obligations and improve service reliability.',
  },
  {
    title: '4. AI-assisted order interpretation',
    body: 'Where the AI parser is enabled, SellerTray may send the minimum order text and relevant catalogue context needed to an AI service to suggest structured order data. AI output is assistive and may be inaccurate. Merchant users are expected to review orders that require attention before accepting them. SellerTray does not treat AI parsing alone as a final customer decision.',
  },
  {
    title: '5. Service providers',
    body: 'SellerTray uses service providers to operate the product. These may include Supabase for authentication, database, storage and server functions; Meta/WhatsApp for messaging; Paystack for subscription payment processing when billing is enabled; OpenAI for AI-assisted parsing when enabled; and Vercel for ProcessEdge public web resources. Each provider processes data under its own service terms and security controls.',
  },
  {
    title: '6. Sharing and disclosure',
    body: 'We disclose data only as needed to provide SellerTray, to service providers acting for the service, to a merchant and its authorised team members, to protect users or the service, or when required by law. We do not sell or rent SellerTray user or customer data to advertisers.',
  },
  {
    title: '7. International processing',
    body: 'Some cloud and messaging providers may process data outside Nigeria. Where cross-border processing occurs, ProcessEdge will use applicable contractual, technical and organisational safeguards required by law and will assess provider protections appropriate to the data and service.',
  },
  {
    title: '8. Security',
    body: 'SellerTray uses tenant isolation, row-level database security, controlled server functions, access roles, bounded request handling, audit trails and structured operational logging. Passwords, customer message bodies, authorization headers and server secrets are not intended to be written to SellerTray operational logs. No system can guarantee absolute security.',
  },
  {
    title: '9. Retention and deletion',
    body: 'Active merchant operational data is retained while the workspace exists and as needed to provide the service. A user can request account deletion inside SellerTray or through the public deletion resource. Owned SellerTray workspaces and associated operational data are deleted through the governed deletion flow, subject to legitimate retention required for security, fraud prevention, legal obligations or unresolved payment matters. Infrastructure backups may temporarily contain deleted data until the hosting provider backup lifecycle expires and are restricted to disaster recovery.',
  },
  {
    title: '10. Your rights',
    body: 'Subject to applicable law, you may have rights to be informed, access personal data, request correction, object to or restrict certain processing, request data portability or erasure, withdraw consent where consent is the basis, request human intervention regarding automated decisions, and lodge a complaint with the Nigeria Data Protection Commission. SellerTray also provides a business-data export for workspace Owners.',
  },
  {
    title: '11. Merchant responsibilities for customer data',
    body: 'Merchants are responsible for having an appropriate lawful basis and customer-facing notice for the customer data they choose to process through SellerTray, and for configuring authorised team access appropriately. Merchants must not use SellerTray to collect or process unlawful content or data they are not entitled to handle.',
  },
  {
    title: '12. Contact and complaints',
    body: `For privacy requests or questions, contact ${BRAND_EMAIL}. You may also lodge a complaint with the Nigeria Data Protection Commission where applicable.`,
  },
]

export default function SellerTrayPrivacy() {
  return (
    <div style={{ paddingTop: 72 }}>
      <PageMeta
        title="SellerTray Privacy Policy — ProcessEdge Solutions"
        description="Privacy policy for the SellerTray merchant order-management service."
        path="/sellertray/privacy"
      />

      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">SellerTray · Legal</div>
          <h1>Privacy Policy</h1>
          <p>How SellerTray collects, uses, protects and deletes merchant and customer order data.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ background: '#fff8e1', border: '1px solid #ffe082', borderLeft: '4px solid #f59e0b', borderRadius: 8, padding: '16px 20px', marginBottom: 36 }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#78350f', marginBottom: 6 }}>
              Release candidate — pending legal approval
            </p>
            <p style={{ fontSize: '0.86rem', color: '#92400e', lineHeight: 1.65 }}>
              Prepared for SellerTray production readiness. Do not publish this draft as the final binding policy until ProcessEdge legal review is complete.
            </p>
          </div>

          <p style={{ color: 'var(--text-body)', marginBottom: 36 }}><strong>Proposed effective date:</strong> 10 September 2026</p>

          {sections.map((section) => (
            <div key={section.title} style={{ marginBottom: 30 }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.05rem', fontWeight: 700, marginBottom: 9 }}>
                {section.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.8 }}>{section.body}</p>
            </div>
          ))}

          <div style={{ marginTop: 42, paddingTop: 22, borderTop: '1px solid var(--grey-border)', display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
            <Link to="/sellertray/account-deletion" className="btn btn-primary">Account Deletion</Link>
            <Link to="/sellertray/terms" className="btn btn-secondary">SellerTray Terms</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
