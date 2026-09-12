import { Link, useLocation } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import CTASection from '../components/CTASection'
import { BRAND_NAME, BRAND_EMAIL, SITE_URL } from '../config'

const EFFECTIVE_DATE = '12 September 2026'

export default function Privacy() {
  const { pathname } = useLocation()
  const sections = [
    {
      title: '1. Who We Are and Scope',
      body: `${BRAND_NAME} operates ${SITE_URL} and software products including SellerTray. This Privacy Policy explains how ProcessEdge Solutions Limited collects, uses, stores, shares, and protects personal data when you use our website, SellerTray mobile application, WhatsApp-connected order workflows, support channels, and related services.`,
    },
    {
      title: '2. Information We Collect',
      body: 'Depending on how you use our services, we may process account and authentication information; business profile and team information; catalogue and pricing information; customer names, WhatsApp identifiers and phone numbers; inbound WhatsApp message content, message metadata and supported product images delivered to the connected business through Meta webhooks; order and payment-assistance details; order status history and outbound customer notifications; subscription and usage records; billing email and payment-provider references; AI parsing telemetry such as model, outcome and token counts; and limited technical, security and diagnostic logs. Passwords are handled through our authentication provider and are not stored by ProcessEdge in readable form.',
    },
    {
      title: '3. Where the Information Comes From',
      body: 'We receive information directly from merchants and team members; from customers who message a merchant through WhatsApp; from Meta/WhatsApp when message content, identifiers, metadata or supported media are delivered to the merchant\'s connected WhatsApp Business account through an authorised webhook; from payment and other connected providers; and automatically from the operation and security of SellerTray and our website.',
    },
    {
      title: '4. How We Use Information',
      body: 'We use personal data to create and secure accounts; provision businesses and team access; receive and interpret customer order messages; detect, create, review and fulfil orders; maintain customer and order records; assist with supported payment conversations and order-status requests; send merchant-approved operational notifications; allow merchants to review supported product images and deliberately create catalogue items from them; provide reporting and operational features; measure chargeable AI-assisted order activity; administer subscriptions and billing; provide support; prevent abuse and fraud; monitor reliability and security; comply with legal obligations; and improve our services. We do not use connected WhatsApp conversation content for unrelated behavioural advertising.',
    },
    {
      title: '5. AI-Assisted Order Processing',
      body: 'SellerTray may use artificial intelligence to interpret customer order messages and match requested items to a merchant catalogue. When AI parsing is used, relevant message text and catalogue context may be processed by OpenAI as a service provider. AI results are assistive and may be incomplete or incorrect; SellerTray is designed so merchants can review and correct order details before fulfilment. We record limited AI-processing telemetry for reliability, cost control and usage billing.',
    },
    {
      title: '6. WhatsApp and Meta Data',
      body: 'SellerTray does not treat technical connection of a WhatsApp number alone as permission to read and process customer conversations. The business Owner must activate the current WhatsApp data-processing authorisation in SellerTray. While that authorisation is active, Meta may deliver supported customer messages, identifiers and message metadata to SellerTray through the connected business webhook. SellerTray processes that data only for the authorised service purposes: order detection and fulfilment, customer and order records, supported payment and status assistance, merchant-approved operational notifications, and merchant-initiated catalogue capture from supported chat images. If the Owner revokes the authorisation or the applicable policy version changes, SellerTray stops new webhook conversation processing until the current authorisation is accepted again. Merchants remain responsible for using WhatsApp and customer data lawfully, including any notice, consent or opt-out duties that apply to their customer relationships. Meta and WhatsApp also process information under their own terms and privacy policies.',
    },
    {
      title: '7. WhatsApp Product Images and Catalogue Capture',
      body: 'When a supported product image is received through an authorised WhatsApp conversation, SellerTray may record media metadata so an Owner or Manager can decide whether to review it for catalogue use. An image is not automatically published as a product. A merchant must explicitly open the review flow and deliberately create the catalogue item. Where preview is requested, SellerTray may temporarily copy the supported image into protected storage and provide a short-lived private preview link. If the merchant approves the product, the approved image may be copied into the merchant catalogue; rejected, expired or temporary review media is handled under our retention and security controls.',
    },
    {
      title: '8. Payments and Billing',
      body: 'SellerTray uses Paystack for subscription checkout and supported billing operations. Paystack processes payment-card and bank-payment details on its systems. ProcessEdge may retain billing email, plan information, checkout references, transaction or subscription references, payment status, and protected payment-authorization references needed to administer the service. We do not intentionally store full payment-card numbers or card security codes.',
    },
    {
      title: '9. Service Providers and International Processing',
      body: 'We use service providers to operate SellerTray and ProcessEdge services, including Supabase for authentication, database and backend infrastructure; Meta/WhatsApp for messaging; OpenAI for AI-assisted order parsing; Paystack for payments; and Vercel for hosting our public website. These providers may process data in countries outside Nigeria subject to their contractual, security and legal safeguards. We do not sell personal data or share it with advertisers for behavioural advertising.',
    },
    {
      title: '10. Data Retention',
      body: 'We retain personal data for as long as reasonably necessary to provide the service, maintain account and transaction integrity, resolve disputes, enforce agreements, meet security needs and comply with applicable legal obligations. Retention periods vary by data type and account status. Temporary WhatsApp image-review media is intended to be short-lived and is not treated as a live catalogue asset unless a merchant explicitly creates the product. Where deletion is requested, we remove eligible account and business data subject to outstanding billing, active subscriptions, security, legal or audit obligations that may require limited information to be retained.',
    },
    {
      title: '11. Data Export and Account Deletion',
      body: 'Eligible SellerTray business owners can request an export of their business dataset from the app. SellerTray also provides an in-app account-deletion flow. Account deletion may require cancellation of an active paid subscription and settlement of outstanding usage charges before owned business data and the authentication account can be removed. Users who cannot access the app may contact ProcessEdge for assistance.',
    },
    {
      title: '12. Security',
      body: 'We use measures designed to protect personal data, including HTTPS in transit, authenticated access, tenant-level access controls, row-level database security, restricted server credentials, protected billing references, private temporary media storage with short-lived signed preview links, request logging with sensitive-value redaction, and access controls for administrative operations. No system can guarantee absolute security, and users should protect their devices and credentials.',
    },
    {
      title: '13. Legal Bases and Your Rights',
      body: 'We process personal data as necessary to provide contracted services, with consent where required, for legitimate operational and security interests, and to comply with law. Subject to the Nigeria Data Protection Act 2023 and other applicable law, you may have rights to request access, correction, deletion, restriction, objection, portability, or information about how your data is processed. You may also lodge a complaint with the appropriate data-protection authority.',
    },
    {
      title: '14. Children',
      body: 'SellerTray is intended for businesses and authorised business users, not for children. We do not knowingly offer SellerTray accounts to persons who cannot lawfully enter into the applicable service agreement.',
    },
    {
      title: '15. Changes to This Policy',
      body: 'We may update this Privacy Policy as SellerTray and other ProcessEdge services evolve. We will publish the updated policy with a revised effective date and, where required, provide additional notice or request renewed acceptance.',
    },
    {
      title: '16. Contact Us',
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
              SellerTray legal version: 2026-09-12. For SellerTray account deletion instructions, see{' '}
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
        secondaryTo="/sellertray/terms"
      />
    </div>
  )
}
