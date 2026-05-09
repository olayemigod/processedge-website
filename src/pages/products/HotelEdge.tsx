import { Link } from 'react-router-dom'
import { Hotel, CheckCircle2, Bed, Users, CreditCard, Package, BarChart2, Calendar, ArrowRight } from 'lucide-react'
import CTASection from '../../components/CTASection'

const features = [
  { icon: Bed, title: 'Room Booking & Reservations', desc: 'Full reservation management with room type configuration, availability calendar, and group booking support.' },
  { icon: Calendar, title: 'Check-in / Check-out', desc: 'Streamlined guest check-in and check-out with profile creation, room assignment, and key tracking.' },
  { icon: Users, title: 'Guest Profiles & Services', desc: 'Maintain guest history, preferences, special requests, and service records for returning clients.' },
  { icon: CreditCard, title: 'Billing & Invoicing', desc: 'Consolidated billing for rooms, meals, laundry, and extras. Multiple payment options supported.' },
  { icon: Package, title: 'Inventory Management', desc: 'Track housekeeping supplies, food & beverage stock, and consumables with reorder alerts.' },
  { icon: BarChart2, title: 'Revenue & Operations Reports', desc: 'Occupancy rates, revenue per room, expense reports, and daily management summaries.' },
]

export default function HotelEdge() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 48, height: 48, background: 'rgba(0,86,166,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Hotel size={24} color="#7ec5ff" />
            </div>
            <div className="section-label page-hero-label">Product</div>
          </div>
          <h1>HotelEdge — Hospitality Management</h1>
          <p>Full-featured hotel management — reservations, room management, guest services, inventory, billing, and operational reporting from one integrated system.</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Request a Demo</Link>
            <Link to="/contact" className="btn cta-section__secondary btn-lg" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.4)' }}>Get a Quote</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-label">Features</div>
            <h2 className="section-title">Complete Hotel Management</h2>
            <p className="section-subtitle">Everything a hotel needs — from the front desk to the back office — in one unified platform.</p>
          </div>
          <div className="grid-3">
            {features.map(f => (
              <div key={f.title} className="card">
                <div className="icon-box icon-box-blue" style={{ marginBottom: 16 }}><f.icon size={22} /></div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{f.desc}</p>
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
              <h2 className="section-title">For Hotels, Guesthouses &amp; Resorts</h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 24 }}>HotelEdge is designed for boutique hotels, guesthouses, short-let operators, and resort facilities in Nigeria and West Africa.</p>
              {['Boutique hotels & guesthouses', 'Short-let & serviced apartments', 'Resorts & event centres', 'Corporate lodges', 'Multi-property hotel groups'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', marginBottom: 10 }}>
                  <CheckCircle2 size={16} color="var(--green)" /><span>{item}</span>
                </div>
              ))}
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 24 }}>Book a Demo <ArrowRight size={14} /></Link>
            </div>
            <div style={{ background: 'var(--white)', borderRadius: 16, border: '1px solid var(--grey-border)', padding: 32 }}>
              <div style={{ fontFamily: 'Montserrat', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>Key Modules</div>
              {['Room Type & Rate Configuration', 'Online & Walk-in Reservations', 'Guest Check-in & Check-out', 'Housekeeping Management', 'Food & Beverage Orders', 'Laundry & Extra Services', 'Consolidated Guest Billing', 'Payment & POS Integration', 'Occupancy & Revenue Reports', 'Multi-property Management'].map((m, i) => (
                <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderBottom: i < 9 ? '1px solid var(--grey-border)' : 'none', fontSize: '0.86rem', color: 'var(--text-body)' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />{m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection headline="Modernize Your Hotel Operations" subtext="See HotelEdge in action — a live demo tailored to your property type and size." primaryLabel="Request a Demo" secondaryLabel="View All Products" secondaryTo="/products" />
    </div>
  )
}
