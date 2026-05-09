import { Link } from 'react-router-dom'
import { Settings, CheckCircle2, Database, GitMerge, Code2, Users, Headphones, BarChart2, ArrowRight } from 'lucide-react'
import ProcessSteps from '../../components/ProcessSteps'
import CTASection from '../../components/CTASection'

const scope = [
  { icon: Database, title: 'System Configuration', desc: 'Full ERPNext setup — company structure, chart of accounts, warehouses, cost centres, and master data.' },
  { icon: GitMerge, title: 'Data Migration', desc: 'Structured migration of your existing data — customers, suppliers, items, opening balances, and historical records.' },
  { icon: Code2, title: 'Customization & Development', desc: 'Custom fields, DocTypes, workflows, print formats, and integrations tailored to your unique business requirements.' },
  { icon: Users, title: 'User Setup & Roles', desc: 'User accounts, permission levels, role assignments, and security configurations for every team member.' },
  { icon: Headphones, title: 'Training & Go-Live', desc: 'Comprehensive training for end-users and administrators, followed by a structured go-live with hands-on support.' },
  { icon: BarChart2, title: 'Post-Launch Support', desc: 'Ongoing technical support, performance monitoring, and iterative improvements after your system is live.' },
]

const modules = [
  'Accounts & Finance', 'Inventory & Stock', 'Purchase', 'Sales', 'HR & Payroll',
  'Manufacturing', 'CRM', 'Projects', 'Assets', 'Healthcare', 'Education', 'Custom Modules',
]

export default function ERPImplementation() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 48, height: 48, background: 'rgba(0,86,166,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Settings size={24} color="#7ec5ff" />
            </div>
            <div className="section-label page-hero-label">Service</div>
          </div>
          <h1>ERP Implementation</h1>
          <p>End-to-end ERPNext and Frappe implementation — from discovery and scoping to configuration, migration, customization, training, and go-live support.</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
            <Link to="/contact" className="btn cta-section__secondary btn-lg" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.4)' }}>Request a Quote</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 52 }}>
            <div className="section-label section-label-blue">Scope of Work</div>
            <h2 className="section-title">What's Included in Our ERP Implementation</h2>
            <p className="section-subtitle">A structured, phased approach that gets your ERPNext system live — and gets your team using it effectively.</p>
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
              <div className="section-label">ERPNext Modules</div>
              <h2 className="section-title">Modules We Implement</h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 28 }}>
                We implement the full range of ERPNext modules — from core accounting and inventory to industry-specific Healthcare, Education, and our custom ProcessEdge products. Every implementation is scoped to exactly what your business needs.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                {modules.map(m => (
                  <span key={m} style={{ padding: '6px 14px', background: 'var(--blue-light)', color: 'var(--blue)', borderRadius: 100, fontFamily: 'Montserrat', fontSize: '0.78rem', fontWeight: 600 }}>{m}</span>
                ))}
              </div>
              {['ERPNext 14 & 15 certified', 'Frappe Framework expertise', 'Custom app development', 'Cloud & self-hosted deployments', 'Nigeria-specific configurations (tax, currency, compliance)'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', marginBottom: 10 }}>
                  <CheckCircle2 size={16} color="var(--green)" /><span>{item}</span>
                </div>
              ))}
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 24 }}>Start a Project <ArrowRight size={14} /></Link>
            </div>
            <div style={{ background: 'var(--white)', borderRadius: 16, border: '1px solid var(--grey-border)', padding: 32 }}>
              <div style={{ fontFamily: 'Montserrat', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>Typical Engagement Timeline</div>
              {[
                { phase: 'Discovery & Scoping', duration: '1–2 weeks' },
                { phase: 'System Design & Configuration', duration: '2–4 weeks' },
                { phase: 'Data Migration', duration: '1–2 weeks' },
                { phase: 'Customization & Integration', duration: '2–6 weeks' },
                { phase: 'Testing & UAT', duration: '1–2 weeks' },
                { phase: 'Training', duration: '1–2 weeks' },
                { phase: 'Go-Live & Hypercare', duration: '2–4 weeks' },
                { phase: 'Ongoing Support', duration: 'Retainer' },
              ].map((row, i) => (
                <div key={row.phase} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < 7 ? '1px solid var(--grey-border)' : 'none', fontSize: '0.86rem' }}>
                  <span style={{ color: 'var(--text-body)', fontWeight: 500 }}>{row.phase}</span>
                  <span style={{ color: 'var(--blue)', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.8rem' }}>{row.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CTASection headline="Ready to Implement ERPNext?" subtext="Let's scope your project and build a system that fits your business perfectly." primaryLabel="Start a Project" secondaryLabel="View All Services" secondaryTo="/services" />
    </div>
  )
}
