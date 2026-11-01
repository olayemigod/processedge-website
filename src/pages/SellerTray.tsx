import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  ArrowRight,
  Building2,
  MessageCircle,
  Package,
  Printer,
  Smartphone,
} from 'lucide-react'
import PageMeta from '../components/PageMeta'

const sellerTrayJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://sellertray.com/#application',
  name: 'SellerTray',
  url: 'https://sellertray.com',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Android',
  description:
    'Mobile-first sales and retail operations software for POS, orders, inventory, customers, payments, branch operations and WhatsApp commerce.',
  publisher: {
    '@type': 'Organization',
    name: 'ProcessEdge Solutions Limited',
    url: 'https://processedge.com.ng',
  },
  featureList: [
    'Mobile POS',
    'Order management',
    'Inventory and low-stock visibility',
    'Customer management',
    'Payment status and coordination',
    'Branch and cashier operations',
    'Bluetooth receipt printing',
    'WhatsApp commerce',
  ],
}

const capabilities = [
  {
    icon: Smartphone,
    title: 'Mobile POS',
    body: 'Search or scan products, build the sale and complete everyday selling from a mobile-first operational flow.',
  },
  {
    icon: Package,
    title: 'Inventory & orders',
    body: 'Keep order activity connected to branch-aware stock visibility, low-stock attention and the customer record.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp commerce',
    body: 'Keep customer conversations familiar while merchants review and progress the business action behind each order.',
  },
  {
    icon: Building2,
    title: 'Branch operations',
    body: 'Keep branch context, cashier shifts and business expenses tied to the right operating location.',
  },
  {
    icon: Printer,
    title: 'Receipts & printing',
    body: 'Print supported transaction documents through Android Bluetooth printing without making printer success part of the sale itself.',
  },
]

export default function SellerTray() {
  return (
    <>
      <PageMeta
        title="SellerTray — Mobile POS, Inventory & WhatsApp Commerce"
        description="SellerTray by ProcessEdge is a mobile-first sales and retail operations platform for POS, orders, inventory, customers, payments, branch operations and WhatsApp commerce."
        path="/sellertray"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(sellerTrayJsonLd)}
        </script>
      </Helmet>

      <div style={{ paddingTop: 72 }}>
        <section className="page-hero">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-label page-hero-label">ProcessEdge Product</div>
            <h1>SellerTray</h1>
            <p>
              A mobile-first sales and retail operations platform for POS, orders,
              inventory, customers, payments, branch operations and WhatsApp commerce.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
              <a href="https://sellertray.com" className="btn btn-primary">
                Visit SellerTray.com <ArrowRight size={14} />
              </a>
              <Link to="/contact" className="btn btn-secondary">Contact ProcessEdge</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: 1080 }}>
            <div style={{ marginBottom: 34, maxWidth: 820 }}>
              <div className="section-label" style={{ marginBottom: 12 }}>How SellerTray fits</div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', marginBottom: 12 }}>
                Mobile performs. Web manages. WhatsApp sells. AI assists.
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, margin: 0 }}>
                SellerTray uses one connected merchant operating model underneath its
                mobile, management and WhatsApp surfaces so sales, orders, inventory,
                customers and payments do not become separate business records.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 18,
              marginBottom: 36,
            }}>
              {capabilities.map(({ icon: Icon, title, body }) => (
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
              <div className="section-label" style={{ marginBottom: 12 }}>Official product website</div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', marginBottom: 10 }}>
                SellerTray.com is the primary SellerTray product website.
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 16 }}>
                ProcessEdge Solutions Limited builds and operates SellerTray. Product
                information, feature details and SellerTray-specific updates are published
                on the official SellerTray website, while this ProcessEdge page establishes
                the corporate relationship behind the product.
              </p>
              <a href="https://sellertray.com/product" className="btn btn-primary">
                Explore SellerTray <ArrowRight size={14} />
              </a>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/sellertray/privacy" className="btn btn-secondary">Privacy Policy</Link>
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
