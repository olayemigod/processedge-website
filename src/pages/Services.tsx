import { Link } from 'react-router-dom'
import { Settings, Calculator, ShoppingCart, BookOpen, ArrowRight } from 'lucide-react'
import CTASection from '../components/CTASection'

const services = [
  {
    icon: Settings,
    title: 'ERP Implementation',
    tagline: 'From scattered operations to structured, connected systems',
    desc: 'Business process review, ERPNext configuration, module setup, data migration, roles, approvals, reports, and go-live support.',
    outcomes: ['Process mapping', 'Module configuration', 'Data migration', 'Training & go-live'],
    path: '/services/erp-implementation',
    color: 'blue' as const,
  },
  {
    icon: Calculator,
    title: 'Accounting Solutions',
    tagline: 'Structured financial records, reporting, and visibility',
    desc: 'Chart of accounts setup, sales and purchase accounting, cash and bank control, receivables, payables, and management reports.',
    outcomes: ['Chart of accounts', 'AR/AP management', 'Financial reports', 'Tax-ready records'],
    path: '/services/accounting-solutions',
    color: 'green' as const,
  },
  {
    icon: ShoppingCart,
    title: 'Retail Sales Automation',
    tagline: 'POS workflows, inventory, branches, and sales visibility',
    desc: 'POS workflow setup, item and inventory structure, branch operations, payment tracking, and sales reporting for retail businesses.',
    outcomes: ['POS setup', 'Inventory control', 'Branch management', 'Sales reporting'],
    path: '/services/retail-sales-automation',
    color: 'blue' as const,
  },
  {
    icon: BookOpen,
    title: 'Training & Support',
    tagline: 'System adoption through training, documentation, and support',
    desc: 'Role-based training, process documentation, go-live support, and post-implementation retainers that keep systems working and teams using them.',
    outcomes: ['Role-based training', 'Documentation', 'Go-live support', 'Ongoing retainer'],
    path: '/services/training-support',
    color: 'green' as const,
  },
]

export default function Services() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Professional Services</div>
          <h1>End-to-End Business Process Services</h1>
          <p>
            From ERP rollout to accounting structure, retail automation, and system adoption —
            we handle the full implementation lifecycle so you can focus on running your business.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 52 }}>
            <div className="section-label section-label-blue">Our Services</div>
            <h2 className="section-title">How We Help Your Business</h2>
            <p className="section-subtitle">
              Every service is backed by deep ERPNext and Frappe expertise and a practical
              understanding of how Nigerian businesses actually operate.
            </p>
          </div>

          <div className="svc-index-grid">
            {services.map(s => (
              <div key={s.path} className={`svc-index-card svc-index-card--${s.color}`}>
                <div className={`svc-index-card__icon svc-index-card__icon--${s.color}`}>
                  <s.icon size={24} />
                </div>
                <div className="svc-index-card__body">
                  <div className="svc-index-card__title">{s.title}</div>
                  <div className="svc-index-card__tagline">{s.tagline}</div>
                  <p className="svc-index-card__desc">{s.desc}</p>
                  <div className="svc-index-card__outcomes">
                    {s.outcomes.map(o => (
                      <span key={o} className="feature-tag">{o}</span>
                    ))}
                  </div>
                </div>
                <Link to={s.path} className={`svc-index-card__cta btn btn-${s.color === 'green' ? 'green' : 'primary'} btn-sm`}>
                  Explore Service <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <div className="section-label section-label-green">Our Commitment</div>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>
            We Don't Just Deliver Software
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.78, marginBottom: 32 }}>
            ProcessEdge helps organisations gain control of their operations with structured systems,
            automated workflows, and business-ready technology. Every service engagement includes
            process understanding, practical configuration, and the training your team needs to
            use the system confidently.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Book a Free Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <CTASection
        headline="Ready to Transform Your Operations?"
        subtext="Tell us about your business and we'll recommend the right combination of services to move you forward."
        primaryLabel="Book a Free Consultation"
        primaryTo="/contact"
        secondaryLabel="View Our Products"
        secondaryTo="/products"
      />
    </div>
  )
}
