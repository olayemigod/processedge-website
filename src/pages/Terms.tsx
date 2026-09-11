import { Link, useLocation } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import CTASection from '../components/CTASection'
import { BRAND_NAME, BRAND_DOMAIN, BRAND_EMAIL } from '../config'

const EFFECTIVE_DATE = '11 September 2026'

export default function Terms() {
  const { pathname } = useLocation()
  const sections = [
    {
      title: '1. Acceptance and Scope',
      body: `These Terms of Service govern access to ${BRAND_DOMAIN}, SellerTray, and related ProcessEdge services unless a separate written agreement applies. By creating an account, accepting these terms in SellerTray, or using the services, you agree to these Terms and our Privacy Policy on behalf of yourself and, where applicable, the business you represent.`,
    },
    {
      title: '2. About SellerTray',
      body: 'SellerTray is a merchant operations service designed to help businesses receive WhatsApp orders, convert customer messages into structured orders, manage order status and fulfilment, maintain catalogue information, communicate operational updates, and use related reporting, team and billing features. SellerTray may be expanded with additional channels or modules over time.',
    },
    {
      title: '3. Account Eligibility and Authority',
      body: 'You must provide accurate registration and business information and have authority to create or manage the relevant business account. You are responsible for safeguarding credentials, controlling team access, keeping account information current, and promptly notifying us of suspected unauthorised access.',
    },
    {
      title: '4. Merchant Responsibility for Orders',
      body: 'SellerTray provides software tools and is not the merchant of record for transactions between a SellerTray merchant and its customers. The merchant remains responsible for product descriptions, prices, stock availability, taxes, fulfilment, delivery, returns, refunds, customer service, regulatory compliance, and the accuracy of any order it accepts or completes.',
    },
    {
      title: '5. AI-Assisted Features',
      body: 'SellerTray may use AI to interpret messages, identify requested items and quantities, match catalogue entries, and assist with order handling. AI output can be incomplete or wrong and must not be treated as a guarantee. Merchants are responsible for reviewing material order details before relying on them for fulfilment, billing or customer commitments.',
    },
    {
      title: '6. WhatsApp, Messaging and Customer Data',
      body: 'Use of WhatsApp-connected features is also subject to applicable Meta and WhatsApp terms, policies and technical requirements. Merchants must have a lawful basis for processing customer data and sending messages, must honour applicable opt-out or consent requirements, and must not use SellerTray to send unlawful, deceptive, abusive or unsolicited communications.',
    },
    {
      title: '7. Acceptable Use',
      body: 'You may not use the services for unlawful activity; fraud; harassment; prohibited goods or services; malicious code; unauthorised surveillance; credential theft; attempts to bypass access controls or usage limits; interference with service operation; or access to another business\'s data without authority. We may restrict or suspend activity reasonably believed to threaten customers, third parties, our infrastructure, or legal compliance.',
    },
    {
      title: '8. Plans, Usage Charges and Payment',
      body: 'SellerTray may offer trials, paid subscriptions, usage-based charges and optional add-ons. The current standard commercial model uses a monthly base fee plus flat usage charges tied to AI-assisted order activity, with additional channels or modules priced separately when offered. Payment-processing charges may apply where disclosed. SellerTray does not currently charge merchants a percentage of their sales or gross merchandise value. Applicable prices, billing intervals, included allowances and taxes will be shown before activation or purchase. Any future pricing change applies prospectively after appropriate notice.',
    },
    {
      title: '9. Subscription Status, Failed Payments and Cancellation',
      body: 'Subscription access may move through trial, active, past-due, grace, suspended or cancelled states. We may limit write operations or paid features when an account is past due or suspended. Merchants can cancel paid service subject to the applicable billing terms. Account deletion may require cancellation of an active paid subscription and settlement of outstanding usage charges.',
    },
    {
      title: '10. Third-Party Services',
      body: 'SellerTray depends on third-party services including Supabase, Meta/WhatsApp, OpenAI and Paystack. Those providers may impose their own terms, availability limits, review requirements, messaging policies or payment rules. We are not responsible for third-party outages or policy changes outside our reasonable control, but we will use reasonable efforts to operate supported integrations reliably.',
    },
    {
      title: '11. Data, Export and Account Deletion',
      body: 'Our processing of personal data is described in the Privacy Policy. Eligible business owners may request supported exports of their SellerTray business data. SellerTray provides an account-deletion process, subject to safeguards for active subscriptions, unsettled usage, security and legal obligations. Deleting an owner account may delete the business data owned by that account, so users should export required records first.',
    },
    {
      title: '12. Intellectual Property',
      body: `The services, software, website, documentation, ProcessEdge and SellerTray branding, and related intellectual property belong to ${BRAND_NAME} or its licensors. Merchants retain ownership of their business content and grant us only the rights reasonably necessary to host, process, transmit and otherwise use that content to provide and secure the services.`,
    },
    {
      title: '13. Service Changes, Beta Features and Availability',
      body: 'We may improve, replace or discontinue features, integrations or beta functionality. We do not guarantee uninterrupted availability, delivery of every third-party message, or compatibility with every external platform. Where a material change significantly affects a paid service, we will provide reasonable notice when practicable.',
    },
    {
      title: '14. Suspension and Termination',
      body: 'We may suspend or terminate access for material breach, unlawful use, serious security risk, fraud, non-payment, repeated policy violations, or where required by law or a third-party platform on which the service depends. Users may stop using the service and may cancel or delete eligible accounts through the available account controls.',
    },
    {
      title: '15. Disclaimers and Limitation of Liability',
      body: `To the extent permitted by law, the services are provided on an "as available" basis. ${BRAND_NAME} does not warrant that AI output, third-party integrations or network-dependent communications will always be accurate, complete, uninterrupted or error-free. To the extent permitted by applicable law, ProcessEdge is not liable for indirect, incidental, special or consequential loss arising from use of the services, including loss caused by a merchant's fulfilment decision or a third-party platform failure.`,
    },
    {
      title: '16. Governing Law',
      body: 'These Terms are governed by the laws of the Federal Republic of Nigeria. Courts of competent jurisdiction in Nigeria will have jurisdiction over disputes that cannot be resolved amicably, subject to any mandatory rights under applicable law.',
    },
    {
      title: '17. Changes to These Terms',
      body: 'We may update these Terms as the services, pricing or legal requirements evolve. We will publish the revised terms with an updated effective date and, where required, notify users or request renewed acceptance before continued use.',
    },
    {
      title: '18. Contact',
      body: `For questions about these Terms or SellerTray service conditions, contact ${BRAND_NAME} at ${BRAND_EMAIL}.`,
    },
  ]

  return (
    <div style={{ paddingTop: 72 }}>
      <PageMeta
        title="Terms of Service — ProcessEdge Solutions & SellerTray"
        description="Terms governing ProcessEdge Solutions and SellerTray, including WhatsApp ordering, AI-assisted features, subscriptions, usage charges and merchant responsibilities."
        path={pathname}
      />

      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Legal</div>
          <h1>Terms of Service</h1>
          <p>
            Terms governing the ProcessEdge website, SellerTray, and related services.
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
              SellerTray legal version: 2026-09-11. These Terms should be read with our{' '}
              <Link to="/privacy">Privacy Policy</Link>.
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
            <Link to="/privacy" className="btn btn-primary">Privacy Policy</Link>
            <Link to="/sellertray/account-deletion" className="btn btn-secondary">SellerTray Account Deletion</Link>
          </div>
        </div>
      </section>

      <CTASection
        headline="Questions About Our Terms?"
        subtext="Contact ProcessEdge for clarification on SellerTray or other ProcessEdge service terms."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Privacy Policy"
        secondaryTo="/privacy"
      />
    </div>
  )
}
