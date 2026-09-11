import { Link } from 'react-router-dom'
import { MessageCircle, ShoppingBag, ShieldCheck, ArrowRight } from 'lucide-react'
import PageMeta from '../components/PageMeta'

export default function SellerTray() {
  return (
    <>
      <PageMeta
        title="SellerTray — WhatsApp Order Management for Merchants"
        description="SellerTray helps merchants turn WhatsApp customer messages into organised, reviewable orders from a mobile app."
        path="/sellertray"
      />

      <div style={{ paddingTop: 72 }}>
        <section className="page-hero">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-label page-hero-label">ProcessEdge Product</div>
            <h1>SellerTray</h1>
            <p>
              A WhatsApp-first order management platform that helps merchants turn customer
              messages into organised, reviewable orders from a mobile app.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: 920 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 18,
              marginBottom: 36,
            }}>
              {[
                {
                  icon: MessageCircle,
                  title: 'WhatsApp-first',
                  body: 'Customers continue ordering through WhatsApp while merchants manage orders in SellerTray.',
                },
                {
                  icon: ShoppingBag,
                  title: 'Merchant operations',
                  body: 'Review, correct, accept and progress incoming orders through a structured workflow.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Built for SaaS',
                  body: 'SellerTray is being prepared as a secure multi-tenant service for independent merchants.',
                },
              ].map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  style={{
                    border: '1px solid var(--grey-border)',
                    borderRadius: 14,
                    padding: 22,
                    background: '#fff',
                  }}
                >
                  <Icon size={24} color="#0056A6" style={{ marginBottom: 14 }} />
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', marginBottom: 8 }}>{title}</h3>
                  <p style={{ color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>

            <div style={{
              background: '#f8fafc',
              border: '1px solid var(--grey-border)',
              borderLeft: '4px solid #0056A6',
              borderRadius: 12,
              padding: '24px 26px',
              marginBottom: 34,
            }}>
              <div className="section-label" style={{ marginBottom: 12 }}>Website Status</div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', marginBottom: 10 }}>
                Full SellerTray website coming later
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 0 }}>
                This page establishes SellerTray's official ProcessEdge web address and legal
                references while the full product website, screenshots, pricing and launch content
                are being developed.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/sellertray/privacy" className="btn btn-primary">
                Privacy Policy <ArrowRight size={14} />
              </Link>
              <Link to="/sellertray/terms" className="btn btn-secondary">Terms of Service</Link>
              <Link to="/sellertray/account-deletion" className="btn btn-secondary">Account Deletion</Link>
              <Link to="/contact" className="btn btn-secondary">Contact ProcessEdge</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
