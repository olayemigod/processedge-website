import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { BRAND_EMAIL, BRAND_NAME } from '../config'

const DELETE_SUBJECT = 'SellerTray account deletion request'

export default function SellerTrayAccountDeletion() {
  const emailHref = `mailto:${BRAND_EMAIL}?subject=${encodeURIComponent(DELETE_SUBJECT)}`

  return (
    <div style={{ paddingTop: 72 }}>
      <PageMeta
        title="SellerTray Account Deletion — ProcessEdge Solutions"
        description="How to delete your SellerTray account and associated business data."
        path="/sellertray/account-deletion"
      />

      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">SellerTray</div>
          <h1>Account Deletion</h1>
          <p>
            Delete your SellerTray account from the app or request deletion directly from {BRAND_NAME}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 780, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.45rem', marginBottom: 12 }}>
              Delete your account in the app
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.8 }}>
              Sign in to SellerTray, open <strong>Business</strong>, go to <strong>Data &amp; Account</strong>,
              and choose <strong>Start account deletion</strong>. You will be asked for your current password
              and a confirmation phrase before the deletion is processed.
            </p>
          </div>

          <div style={{
            background: '#f8fafc',
            border: '1px solid var(--grey-border)',
            borderRadius: 12,
            padding: '22px 24px',
            marginBottom: 40,
          }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.25rem', marginBottom: 10 }}>
              Cannot access the app?
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 18 }}>
              Send an account-deletion request from the email address registered to your SellerTray account.
              Include your business name if you know it. <strong>Never send your password by email.</strong>
            </p>
            <a href={emailHref} className="btn btn-primary">
              Email {BRAND_EMAIL}
            </a>
          </div>

          {[
            {
              title: 'What is deleted',
              body: 'Your SellerTray authentication account is deleted. Businesses you own are deleted together with their SellerTray workspace data, including catalogue records, customers, WhatsApp order records, order items, order-status history, outbound notification records, team records and subscription workspace data. Memberships you hold in businesses owned by another user are removed.',
            },
            {
              title: 'Paid subscriptions and unsettled usage',
              body: 'If a business you own still has an active paid subscription, the subscription must be cancelled before self-service account deletion can complete. Any priced usage that has already been incurred but not yet settled must also be resolved before deletion. These safeguards prevent account deletion from bypassing valid billing obligations. Contact ProcessEdge support if you cannot complete either step.',
            },
            {
              title: 'Backups and recovery copies',
              body: 'Deleted data is removed from the live SellerTray application. Infrastructure backups may retain a temporary recovery copy until the hosting provider’s normal backup lifecycle expires. Backups are restricted to disaster recovery and are not used as ordinary application records after deletion.',
            },
            {
              title: 'Deletion support',
              body: `If the automated deletion cannot complete safely, contact ${BRAND_EMAIL}. We may need to verify account ownership before acting on a manual deletion request.`,
            },
          ].map((section) => (
            <div key={section.title} style={{ marginBottom: 30 }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>
                {section.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.78 }}>
                {section.body}
              </p>
            </div>
          ))}

          <div style={{
            marginTop: 44,
            paddingTop: 24,
            borderTop: '1px solid var(--grey-border)',
            display: 'flex',
            gap: 14,
            flexWrap: 'wrap' as const,
          }}>
            <Link to="/sellertray/privacy" className="btn btn-secondary">Privacy Policy</Link>
            <Link to="/sellertray/terms" className="btn btn-secondary">Terms of Service</Link>
            <Link to="/contact" className="btn btn-secondary">Contact ProcessEdge</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
