import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import { GraduationCap, PawPrint, Hotel, Users, Church, Activity, Sprout } from 'lucide-react'

const industries = [
  { icon: GraduationCap, name: 'Education',         product: 'EduEdge',    path: '/products/eduedge',    desc: 'Schools, colleges, exam prep centres, and educational institutions.',           color: 'blue'  },
  { icon: PawPrint,      name: 'Veterinary',         product: 'VetEdge',    path: '/products/vetedge',    desc: 'Veterinary clinics, pet shops, animal care centres, and mobile vet services.', color: 'green' },
  { icon: Hotel,         name: 'Hospitality',        product: 'HotelEdge',  path: '/products/hoteledge',  desc: 'Hotels, guesthouses, short-let operators, resorts, and event centres.',          color: 'blue'  },
  { icon: Users,         name: 'Cooperative Finance',product: 'CoopEdge',   path: '/products/coopedge',   desc: 'Savings & credit cooperatives, multipurpose societies, and staff cooperatives.',  color: 'green' },
  { icon: Church,    name: 'Faith-based',        product: 'ChurchEdge',  path: '/products/churchedge', desc: 'Churches, ministries, fellowships, and faith-based organizations.',    color: 'blue'  },
  { icon: Activity,  name: 'Healthcare',         product: 'ClinicEdge',  path: '/products/clinicedge', desc: 'Clinics, medical centres, diagnostic centres, and specialist practices.', color: 'blue'  },
  { icon: Sprout,    name: 'Agriculture',        product: 'AgricEdge',   path: '/products/agricedge',  desc: 'Farms, agribusinesses, farmer cooperatives, aggregators, and processors.', color: 'green' },
]

export default function Industries() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Industries</div>
          <h1>Industry-Specific Products &amp; Solutions</h1>
          <p>ProcessEdge builds purpose-built products for specific industries — not generic software with industry labels on top.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ gap: 24 }}>
            {industries.map(ind => (
              <div key={ind.name} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div className={`icon-box icon-box-${ind.color}`} style={{ width: 52, height: 52 }}>
                  <ind.icon size={24} />
                </div>
                <div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: 4 }}>{ind.name}</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.07em', color: ind.color === 'green' ? 'var(--green)' : 'var(--blue)', marginBottom: 10 }}>{ind.product}</div>
                  <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: 16 }}>{ind.desc}</p>
                </div>
                <Link to={ind.path} className={`btn btn-${ind.color === 'green' ? 'green' : 'primary'} btn-sm`} style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>
                  View {ind.product}
                </Link>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48, padding: 32, background: 'var(--grey-light)', borderRadius: 16, textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: 10 }}>Don't See Your Industry?</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 20, maxWidth: 480, margin: '0 auto 20px' }}>
              ProcessEdge Core (ERPNext) can be configured for most business types. Contact us and we'll assess your requirements.
            </p>
            <Link to="/contact" className="btn btn-primary">Discuss Your Industry</Link>
          </div>
        </div>
      </section>

      <CTASection headline="Ready to See Your Industry Solution?" subtext="Book a demo and we'll show you exactly how ProcessEdge works for your sector." primaryLabel="Book a Demo" secondaryLabel="View All Products" secondaryTo="/products" />
    </div>
  )
}
