import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { BRAND_EMAIL } from '../config'

const sections = [
  {
    title: '1. Service',
    body: 'SellerTray is a merchant order-workflow SaaS provided by ProcessEdge Solutions Limited. It is designed to help merchants receive, review and progress orders originating from supported messaging channels, initially WhatsApp. SellerTray is not an accounting system, ERP, inventory valuation system, payment wallet or general CRM unless a feature is expressly added and described.',
  },
  {
    title: '2. Eligibility and authority',
    body: 'You must be legally able to enter into this agreement and authorised to act for any business workspace you create or manage. You are responsible for accurate account and business information and for keeping access credentials secure.',
  },
  {
    title: '3. Merchant accounts and teams',
    body: 'A business Owner controls the workspace and may grant Manager or Staff access according to available roles. You are responsible for removing access that is no longer appropriate. ProcessEdge may restrict or suspend access where necessary to protect the service, investigate abuse, comply with law or enforce subscription status.',
  },
  {
    title: '4. WhatsApp and other channels',
    body: 'SellerTray depends on third-party messaging platforms. Merchants must comply with the applicable WhatsApp/Meta rules, obtain permissions required to message customers and avoid spam or prohibited content. Third-party platform changes, verification decisions or outages may affect SellerTray messaging features.',
  },
  {
    title: '5. AI-assisted features',
    body: 'SellerTray may use AI to interpret customer order text and suggest structured items, quantities or review flags. AI output can be incomplete or wrong and must not be treated as guaranteed. The merchant remains responsible for checking order details, catalogue pricing and fulfilment decisions before relying on AI-generated suggestions.',
  },
  {
    title: '6. Merchant data and customer data',
    body: 'As between ProcessEdge and the merchant, the merchant retains its rights in business and customer content submitted to SellerTray. The merchant grants ProcessEdge the limited rights needed to host, transmit, secure, process and back up that content to provide SellerTray. For customer order data where the merchant determines the business purpose, the merchant is ordinarily responsible for the lawful basis and customer notice, while ProcessEdge processes the data to provide SellerTray subject to the Privacy Policy and applicable law.',
  },
  {
    title: '7. Acceptable use',
    body: 'You must not use SellerTray for unlawful activity, fraud, harassment, spam, unauthorised access, malware, infringement, prohibited goods or services, or attempts to bypass security, rate limits, subscription controls or tenant isolation. You must not upload data you are not authorised to process.',
  },
  {
    title: '8. Plans, billing and suspension',
    body: 'Available plans, trial periods, usage charges and channel add-ons are shown in the applicable SellerTray commercial offer or checkout. SellerTray may combine a recurring base subscription with a flat charge for specified successful AI-assisted order activity; SellerTray does not charge a percentage of the merchant\'s sales or gross merchandise value unless a future service is separately offered and expressly agreed. Where the payment provider supplies a reusable payment authorisation, the merchant authorises SellerTray to use it for disclosed recurring subscription amounts and properly metered usage settlements. Usage events retain the applicable unit price and billing-period context when recorded so later price changes do not retroactively reprice earlier activity. Failed or ambiguous variable-usage charges are not blindly retried and may remain outstanding until provider status is reconciled. Failed or overdue payment may place a workspace into a grace, read-only, suspended or cancelled state according to the product rules disclosed at the time. Payment processing may be handled by a third-party provider.',
  },
  {
    title: '9. Service changes and availability',
    body: 'ProcessEdge may improve, modify or retire features while taking reasonable steps to avoid material disruption. SellerTray relies on cloud, messaging, payment and AI providers and cannot promise uninterrupted availability. Planned maintenance and material service incidents will be handled according to the operational procedures applicable to the service.',
  },
  {
    title: '10. Account closure and deletion',
    body: 'You may close your SellerTray account through the in-app deletion process or the public account-deletion resource. Active paid subscriptions may need to be cancelled first. Deletion is governed by the SellerTray Privacy Policy and may be subject to limited lawful retention for security, fraud prevention, unresolved payment matters or legal obligations.',
  },
  {
    title: '11. Intellectual property',
    body: 'SellerTray software, branding, documentation and platform technology are owned by ProcessEdge or its licensors. These Terms grant you a limited, non-exclusive, non-transferable right to use SellerTray for your business while your account is authorised and compliant.',
  },
  {
    title: '12. Warranties and liability',
    body: 'SellerTray is provided with reasonable professional care but automated interpretation, third-party integrations and network services can fail. To the extent permitted by applicable law, ProcessEdge is not responsible for indirect or consequential losses arising solely from merchant input errors, third-party outages or unreviewed AI suggestions. Nothing in these Terms excludes liability that cannot lawfully be excluded.',
  },
  {
    title: '13. Governing law and disputes',
    body: 'These Terms are governed by the laws of the Federal Republic of Nigeria. The parties should first attempt to resolve disputes in good faith before pursuing any court or other remedy available under applicable law.',
  },
  {
    title: '14. Changes and contact',
    body: `Material changes to these Terms will be communicated through the service or published legal pages as appropriate. Questions may be sent to ${BRAND_EMAIL}.`,
  },
]

export default function SellerTrayTerms() {
  return (
    <div style={{ paddingTop: 72 }}>
      <PageMeta
        title="SellerTray Terms of Service — ProcessEdge Solutions"
        description="Terms governing use of the SellerTray merchant order-management service."
        path="/sellertray/terms"
      />

      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">SellerTray · Legal</div>
          <h1>Terms of Service</h1>
          <p>The proposed terms governing merchant use of SellerTray.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ background: '#fff8e1', border: '1px solid #ffe082', borderLeft: '4px solid #f59e0b', borderRadius: 8, padding: '16px 20px', marginBottom: 36 }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#78350f', marginBottom: 6 }}>
              Release candidate — pending legal approval
            </p>
            <p style={{ fontSize: '0.86rem', color: '#92400e', lineHeight: 1.65 }}>
              Prepared for SellerTray production readiness. Do not publish this draft as binding terms until ProcessEdge legal review is complete.
            </p>
          </div>

          <p style={{ color: 'var(--text-body)', marginBottom: 36 }}><strong>Proposed effective date:</strong> 11 September 2026</p>

          {sections.map((section) => (
            <div key={section.title} style={{ marginBottom: 30 }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.05rem', fontWeight: 700, marginBottom: 9 }}>
                {section.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.8 }}>{section.body}</p>
            </div>
          ))}

          <div style={{ marginTop: 42, paddingTop: 22, borderTop: '1px solid var(--grey-border)', display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
            <Link to="/sellertray/privacy" className="btn btn-primary">SellerTray Privacy</Link>
            <Link to="/sellertray/account-deletion" className="btn btn-secondary">Account Deletion</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
