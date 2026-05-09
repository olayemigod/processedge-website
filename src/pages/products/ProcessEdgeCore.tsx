import { Link } from 'react-router-dom'
import { Cpu, CheckCircle2, Layers, BarChart2, Users, Settings, Database, Shield, ArrowRight } from 'lucide-react'
import CTASection from '../../components/CTASection'

const modules = [
  { icon: BarChart2, title: 'Accounting & Finance',     desc: 'Full double-entry accounting, chart of accounts, cost centres, budgets, and financial reporting.' },
  { icon: Users,     title: 'HR & Payroll',             desc: 'Employee records, leave management, payroll processing, appraisals, and org structure.' },
  { icon: Database,  title: 'Inventory & Stock',        desc: 'Multi-warehouse inventory, stock valuation (FIFO/Moving Average), reorder alerts, and transfers.' },
  { icon: Settings,  title: 'Purchasing',               desc: 'Supplier management, purchase orders, GRN, landed costs, and supplier payment tracking.' },
  { icon: Layers,    title: 'Sales & CRM',              desc: 'Customer records, quotations, sales orders, delivery notes, invoicing, and CRM pipeline.' },
  { icon: Shield,    title: 'Workflows & Permissions',  desc: 'Configurable approval workflows, role-based permissions, and audit trail across all modules.' },
  { icon: BarChart2, title: 'Reports & Dashboards',     desc: 'Built-in reports, custom report builder, and real-time dashboards for every module.' },
  { icon: Cpu,       title: 'Multi-company Support',    desc: 'Manage multiple legal entities, inter-company transactions, and consolidated reporting.' },
]

export default function ProcessEdgeCore() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 48, height: 48, background: 'rgba(0,86,166,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Cpu size={24} color="#7ec5ff" />
            </div>
            <span style={{ background: 'rgba(0,86,166,0.25)', border: '1px solid rgba(0,86,166,0.4)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#7ec5ff', fontFamily: 'Montserrat, sans-serif' }}>Platform</span>
          </div>
          <h1>ProcessEdge Core</h1>
          <p>The ERPNext/Frappe platform layer that powers all ProcessEdge products — accounting, HR, inventory, CRM, workflows, and more in one integrated system.</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' as const }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Request a Demo</Link>
            <Link to="/services/erp-implementation" className="btn btn-secondary btn-lg" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.4)' }}>ERP Implementation →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 52 }}>
            <div className="section-label section-label-blue">Platform Modules</div>
            <h2 className="section-title">Everything Your Business Needs in One System</h2>
            <p className="section-subtitle">ProcessEdge Core is the full ERPNext suite — configured, customized, and supported for Nigerian businesses.</p>
          </div>
          <div className="grid-4">
            {modules.map(m => (
              <div key={m.title} className="card">
                <div className="icon-box icon-box-blue" style={{ marginBottom: 16 }}><m.icon size={22} /></div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.98rem', fontWeight: 700, marginBottom: 8 }}>{m.title}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: 'center' }}>
            <div>
              <div className="section-label">Built on ERPNext & Frappe</div>
              <h2 className="section-title">Open-Source Foundation. Enterprise Capability.</h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 24 }}>
                ProcessEdge Core is built on ERPNext and the Frappe Framework — a battle-tested, open-source ERP platform used by thousands of businesses worldwide. We configure, customize, and support it for the Nigerian market.
              </p>
              {[
                'ERPNext 15 (latest stable) ready',
                'Frappe Framework customization',
                'Nigeria-specific tax and compliance configuration',
                'Multi-currency support (NGN, USD, GBP)',
                'Cloud and self-hosted deployment options',
                'All ProcessEdge industry apps run on this platform',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', marginBottom: 10 }}>
                  <CheckCircle2 size={16} color="var(--green)" /><span>{item}</span>
                </div>
              ))}
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 24 }}>Talk to Us <ArrowRight size={14} /></Link>
            </div>
            <div style={{ background: 'var(--white)', borderRadius: 16, border: '1px solid var(--grey-border)', padding: 32 }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--text-muted)', marginBottom: 20 }}>Industry Apps Built on Core</div>
              {[
                { name: 'EduEdge',    desc: 'School & CBT management',       path: '/products/eduedge'    },
                { name: 'VetEdge',    desc: 'Veterinary practice',           path: '/products/vetedge'    },
                { name: 'HotelEdge',  desc: 'Hospitality management',        path: '/products/hoteledge'  },
                { name: 'CoopEdge',   desc: 'Cooperative management',        path: '/products/coopedge'   },
                { name: 'ChurchEdge', desc: 'Church & ministry management',  path: '/products/churchedge' },
              ].map((app, i) => (
                <Link key={app.name} to={app.path} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 4 ? '1px solid var(--grey-border)' : 'none', textDecoration: 'none', transition: 'background 0.2s' }}>
                  <div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)' }}>{app.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{app.desc}</div>
                  </div>
                  <ArrowRight size={14} color="var(--blue)" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Ready to Deploy ProcessEdge Core?" subtext="Let's discuss your business requirements and configure the right ERPNext setup for your organisation." primaryLabel="Book a Demo" secondaryLabel="View All Products" secondaryTo="/products" />
    </div>
  )
}
