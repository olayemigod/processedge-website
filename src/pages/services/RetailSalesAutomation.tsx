import { Link } from 'react-router-dom'
import { ShoppingCart, CheckCircle2, Monitor, Package, Tag, BarChart2, Users, GitBranch, ArrowRight } from 'lucide-react'
import CTASection from '../../components/CTASection'

const scope = [
  { icon: Monitor, title: 'POS System Setup', desc: 'Configure and deploy POSNext or ERPNext POS for fast, reliable checkout with barcode scanning and receipt printing.' },
  { icon: Package, title: 'Inventory Management', desc: 'Real-time stock tracking across all locations, reorder alerts, batch management, and stock valuation.' },
  { icon: Tag, title: 'Pricing & Promotions', desc: 'Price lists, customer-specific pricing, discount rules, and promotion campaigns managed centrally.' },
  { icon: BarChart2, title: 'Sales Reports & Analytics', desc: 'Daily sales summaries, product performance, cashier reports, and custom retail KPI dashboards.' },
  { icon: Users, title: 'Customer Records', desc: 'Customer profiles, purchase history, loyalty tracking, and credit limit management per customer.' },
  { icon: GitBranch, title: 'Branch & Cashier Controls', desc: 'Multi-branch stock visibility, cashier-level access controls, shift management, and inter-branch transfers.' },
]

export default function RetailSalesAutomation() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 48, height: 48, background: 'rgba(0,86,166,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShoppingCart size={24} color="#7ec5ff" />
            </div>
            <div className="section-label page-hero-label">Service</div>
          </div>
          <h1>Retail Sales Automation</h1>
          <p>Automate your retail operations — POS, inventory, pricing, cashier controls, sales reports, and multi-branch management on a unified ERPNext platform.</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Automate My Retail</Link>
            <Link to="/contact" className="btn cta-section__secondary btn-lg" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.4)' }}>Request a Quote</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 52 }}>
            <div className="section-label section-label-blue">Scope of Work</div>
            <h2 className="section-title">End-to-End Retail Automation</h2>
            <p className="section-subtitle">From the point of sale to the back office — we automate every layer of your retail operation.</p>
          </div>
          <div className="grid-3">
            {scope.map(s => (
              <div key={s.title} className="card">
                <div className="icon-box icon-box-blue" style={{ marginBottom: 16 }}><s.icon size={22} /></div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: 'center' }}>
            <div>
              <div className="section-label">Who It's For</div>
              <h2 className="section-title">Built for Nigerian Retailers</h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 24 }}>
                Whether you run a single-location pharmacy, a multi-branch supermarket, or a specialty retail outlet — we configure a POS and inventory system that fits your exact operation.
              </p>
              {['Supermarkets & grocery stores', 'Pharmacies & medical supplies', 'Electronics & accessories retail', 'Fashion & clothing stores', 'Stationery & office supplies', 'Multi-branch retail chains'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', marginBottom: 10 }}>
                  <CheckCircle2 size={16} color="var(--green)" /><span>{item}</span>
                </div>
              ))}
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 24 }}>Start a Conversation <ArrowRight size={14} /></Link>
            </div>
            <div style={{ background: 'var(--white)', borderRadius: 16, border: '1px solid var(--grey-border)', padding: 32 }}>
              <div style={{ fontFamily: 'Montserrat', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>Retail System Capabilities</div>
              {['Barcode & QR code scanning', 'Multi-mode payment (cash, card, transfer)', 'Offline POS mode', 'Thermal receipt printing', 'Stock alerts & reorder automation', 'Inter-branch stock transfers', 'Supplier purchase order integration', 'Customer loyalty & credit limits', 'Cashier shift reports', 'Inventory valuation (FIFO/Moving Average)'].map((c, i) => (
                <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderBottom: i < 9 ? '1px solid var(--grey-border)' : 'none', fontSize: '0.86rem', color: 'var(--text-body)' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />{c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Stop Managing Retail Manually" subtext="Automate your POS, inventory, and sales reporting with a system built for your business." primaryLabel="Automate My Retail" secondaryLabel="View All Services" secondaryTo="/services" />
    </div>
  )
}
