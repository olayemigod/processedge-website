import { GraduationCap, PawPrint, Hotel, Users, Church, Cpu, Activity, Sprout } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import { ArrowRight } from 'lucide-react'

const apps = [
  { name: 'EduEdge',    tagline: 'School & CBT Management',       desc: 'CBT, question banks, result sync, student portals, academic records, and school analytics.', path: '/products/eduedge',    icon: GraduationCap, color: 'blue',  badge: 'Featured' },
  { name: 'VetEdge',    tagline: 'Veterinary Practice',           desc: 'Consultations, vaccinations, billing, stock, boarding, grooming, and client reminders.',    path: '/products/vetedge',    icon: PawPrint,     color: 'green', badge: null },
  { name: 'ClinicEdge',  tagline: 'Healthcare Operations',         desc: 'Patient records, appointments, consultation workflows, billing, pharmacy, diagnostics, and clinic reporting.', path: '/products/clinicedge', icon: Activity, color: 'blue',  badge: null },
  { name: 'HotelEdge',  tagline: 'Hospitality Management',        desc: 'Reservations, room management, guest services, billing, and operations reporting.',         path: '/products/hoteledge',  icon: Hotel,        color: 'blue',  badge: null },
  { name: 'CoopEdge',   tagline: 'Cooperative Management',        desc: 'Member records, savings, loans, contributions, approvals, and financial statements.',       path: '/products/coopedge',   icon: Users,        color: 'green', badge: null },
  { name: 'ChurchEdge',  tagline: 'Church & Ministry',             desc: 'Members, first-timers, departments, giving, programmes, cell groups, and growth analytics.', path: '/products/churchedge', icon: Church,    color: 'blue',  badge: null },
  { name: 'AgricEdge',   tagline: 'Agriculture & Agribusiness',    desc: 'Farm records, input management, farmer profiles, procurement, aggregation, payments, and agribusiness reporting.', path: '/products/agricedge', icon: Sprout,  color: 'green', badge: null },
]
const badgeStyle = (badge: string | null) => {
  if (!badge) return {}
  return {
    background: badge === 'Featured' ? '#fef3c7' : 'var(--green-light)',
    color: badge === 'Featured' ? '#92400e' : 'var(--green-dark)',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.65rem',
    fontWeight: 700,
    letterSpacing: '0.07em',
    padding: '3px 10px',
    borderRadius: '100px',
    display: 'inline-block',
    marginBottom: 8,
  }
}

export default function Products() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Product Suite</div>
          <h1>ProcessEdge Products</h1>
          <p>Eight purpose-built products covering five industries and the core ERPNext/Frappe platform layer — each one configurable, scalable, and ready to deploy.</p>
        </div>
      </section>

      {/* Industry Apps */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <div className="section-label">Industry Apps</div>
            <h2 className="section-title">Purpose-Built for Your Industry</h2>
            <p className="section-subtitle">Each app is designed around the real operational workflow of its sector — not a generic ERP fitted with a new label.</p>
          </div>
          <div className="grid-3" style={{ gap: 24 }}>
            {apps.map(app => (
              <div key={app.name} style={{ background: 'var(--white)', border: '1px solid var(--grey-border)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column', gap: 10, transition: 'all 0.22s', position: 'relative', overflow: 'hidden' }}
                className="card">
                {app.badge && <span style={badgeStyle(app.badge) as React.CSSProperties}>{app.badge}</span>}
                <div className={`icon-box icon-box-${app.color}`} style={{ width: 48, height: 48, marginBottom: 4 }}>
                  <app.icon size={22} />
                </div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>{app.name}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.73rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.07em', color: app.color === 'green' ? 'var(--green)' : 'var(--blue)', marginTop: -4 }}>{app.tagline}</div>
                <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.65, flex: 1 }}>{app.desc}</p>
                <Link to={app.path} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'Montserrat, sans-serif', fontSize: '0.82rem', fontWeight: 700, color: app.color === 'green' ? 'var(--green)' : 'var(--blue)', textDecoration: 'none', marginTop: 4 }}>
                  Learn More <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ marginBottom: 32 }}>
            <div className="section-label section-label-blue">Platform</div>
            <h2 className="section-title">The Foundation</h2>
            <p className="section-subtitle">All ProcessEdge industry apps run on ProcessEdge Core — the ERPNext/Frappe platform layer.</p>
          </div>
          <div style={{ background: 'var(--white)', border: '1px solid var(--grey-border)', borderRadius: 16, padding: 36, display: 'flex', alignItems: 'flex-start', gap: 28, flexWrap: 'wrap' as const }}>
            <div style={{ width: 56, height: 56, background: 'var(--blue)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Cpu size={28} color="white" />
            </div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: 4 }}>ProcessEdge Core</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.73rem', fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase' as const, letterSpacing: '0.07em', marginBottom: 10 }}>The ERPNext Platform Layer</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.7, maxWidth: 520, marginBottom: 20 }}>
                Accounting, HR, inventory, CRM, purchasing, projects, workflows, and multi-company support — the full ERPNext suite, configured and supported for Nigerian businesses.
              </p>
              <Link to="/products/core" className="btn btn-primary">
                Learn About Core <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8, alignSelf: 'center' }}>
              {['Accounting','HR','Inventory','CRM','Projects','Payroll','Assets','Reports'].map(m => (
                <span key={m} style={{ padding: '5px 12px', background: 'var(--blue-light)', border: '1px solid rgba(0,86,166,0.15)', borderRadius: 100, fontSize: '0.75rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: 'var(--blue)' }}>{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Not Sure Which Product Fits?"
        subtext="Book a free consultation and we'll recommend the right solution for your business, industry, and goals."
        primaryLabel="Book a Free Consultation"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </div>
  )
}
