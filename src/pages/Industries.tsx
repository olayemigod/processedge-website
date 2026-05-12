import { Link } from 'react-router-dom'
import {
  GraduationCap, PawPrint, Activity, Hotel,
  Users, Church, Sprout, ShoppingCart,
  ArrowRight, BookOpen
} from 'lucide-react'
import CTASection from '../components/CTASection'
import './Industries.css'

// ── Industry data ─────────────────────────────────────────────────────────────

const industries = [
  {
    id: 'education',
    color: 'blue',
    icon: GraduationCap,
    name: 'Education',
    product: 'EduEdge',
    productPath: '/products/eduedge',
    badge: 'Featured Product',
    description: 'For schools, colleges, CBT centres, and education providers that need academic records, CBT exam delivery, result synchronization, fee management, and school operations visibility.',
    features: [
      'Student, guardian, and academic records',
      'CBT question bank and exam delivery',
      'Result synchronization — no manual re-entry',
      'Fee management linked to exam clearance',
      'School analytics and performance dashboards',
    ],
    links: [
      { label: 'Explore EduEdge',              to: '/products/eduedge',               primary: true  },
      { label: 'School Management & CBT Guide', to: '/resources/school-management-cbt', primary: false },
    ],
  },
  {
    id: 'veterinary',
    color: 'green',
    icon: PawPrint,
    name: 'Veterinary & Pet Businesses',
    product: 'VetEdge',
    productPath: '/products/vetedge',
    badge: null,
    description: 'For veterinary clinics, pet businesses, and animal healthcare providers that need pet records, consultations, billing, drug inventory, vaccination scheduling, grooming, and boarding service workflows.',
    features: [
      'Pet and owner records with full medical history',
      'Consultation workflow and clinical notes',
      'Vaccination scheduling and automated client reminders',
      'Drug inventory linked to prescription',
      'Grooming and boarding as non-clinical services',
    ],
    links: [
      { label: 'Explore VetEdge',             to: '/products/vetedge',                          primary: true  },
      { label: 'Veterinary Management Guide', to: '/resources/veterinary-clinic-management',     primary: false },
    ],
  },
  {
    id: 'healthcare',
    color: 'blue',
    icon: Activity,
    name: 'Clinics & Healthcare Providers',
    product: 'ClinicEdge',
    productPath: '/products/clinicedge',
    badge: null,
    description: 'For outpatient clinics, diagnostic centres, medical centres, and healthcare service providers that need patient records, appointments, consultations, billing, pharmacy, diagnostics, and operational reports.',
    features: [
      'Patient profiles with medical history and allergies',
      'Appointment scheduling and queue management',
      'Consultation records, clinical notes, and treatment plans',
      'Billing consolidated from consultation, pharmacy, and lab',
      'Drug and consumable inventory — linked to prescription',
    ],
    links: [
      { label: 'Explore ClinicEdge',          to: '/products/clinicedge',                primary: true  },
      { label: 'Clinic Management Guide',     to: '/resources/clinic-management-system', primary: false },
    ],
  },
  {
    id: 'hospitality',
    color: 'green',
    icon: Hotel,
    name: 'Hospitality',
    product: 'HotelEdge',
    productPath: '/products/hoteledge',
    badge: null,
    description: 'For hotels, guest houses, short-let apartments, and hospitality businesses that need reservations, room operations, guest records, billing, housekeeping coordination, and management reports.',
    features: [
      'Room management with rates, availability, and booking calendar',
      'Guest profiles retained for returning client recognition',
      'Guest folio — every charge posted from consultation to checkout',
      'Housekeeping coordination with live room status',
      'Occupancy, revenue, and operations reports',
    ],
    links: [
      { label: 'Explore HotelEdge',         to: '/products/hoteledge',              primary: true  },
      { label: 'Hotel Management Guide',    to: '/resources/hotel-management-system', primary: false },
    ],
  },
  {
    id: 'cooperative',
    color: 'blue',
    icon: Users,
    name: 'Cooperatives',
    product: 'CoopEdge',
    productPath: '/products/coopedge',
    badge: null,
    description: 'For cooperatives and member-based organisations that need member records, savings, loans, repayments, dues, contributions, financial statements, and member account visibility.',
    features: [
      'Member records with KYC, account status, and transaction history',
      'Savings and contribution processing per member',
      'Loan application, approval, disbursement, and repayment tracking',
      'Dividend computation from member savings balances',
      'Financial statements and audit-ready records',
    ],
    links: [
      { label: 'Explore CoopEdge',              to: '/products/coopedge',                        primary: true  },
      { label: 'Cooperative Management Guide',  to: '/resources/cooperative-management-system',  primary: false },
    ],
  },
  {
    id: 'church',
    color: 'green',
    icon: Church,
    name: 'Churches & Ministries',
    product: 'ChurchEdge',
    productPath: '/products/churchedge',
    badge: null,
    description: 'For churches, ministries, and faith-based organisations that need member records, first-timer and convert follow-up, department hierarchy, offerings, projects, training management, and growth analytics.',
    features: [
      'Member profiles, attendance, and membership class tracking',
      'First-timer capture and structured follow-up workflow',
      'Department, branch, and cell group management',
      'Offerings, tithes, pledges, and project finance tracking',
      'Growth analytics — attendance, giving, and conversion trends',
    ],
    links: [
      { label: 'Explore ChurchEdge',        to: '/products/churchedge',               primary: true  },
      { label: 'Church Management Guide',   to: '/resources/church-management-system', primary: false },
    ],
  },
  {
    id: 'agriculture',
    color: 'blue',
    icon: Sprout,
    name: 'Agriculture & Agribusiness',
    product: 'AgricEdge',
    productPath: '/products/agricedge',
    badge: null,
    description: 'For farms, farmer cooperatives, agro-processors, produce aggregators, and agro-allied businesses that need production control, input tracking, outgrower management, procurement, farmer payments, and reporting.',
    features: [
      'Farm and field records linked to farmer profiles',
      'Input distribution per farmer — tracked against stock',
      'Crop and livestock production activity tracking',
      'Produce intake at aggregation points linked to farmer account',
      'Farmer payment computation after input deductions',
    ],
    links: [
      { label: 'Explore AgricEdge',              to: '/products/agricedge',                      primary: true  },
      { label: 'Agriculture Management Guide',   to: '/resources/agriculture-management-system', primary: false },
    ],
  },
  {
    id: 'retail',
    color: 'green',
    icon: ShoppingCart,
    name: 'Retail & SMEs',
    product: null,
    productPath: null,
    badge: 'Services',
    description: 'For retail businesses and SMEs that need POS workflow, inventory control, branch visibility, accounting structure, payment tracking, and business reports — through our Retail Sales Automation, Accounting Solutions, and ERP Implementation services.',
    features: [
      'POS workflow and real-time inventory per location',
      'Multi-branch visibility with consolidated management view',
      'Chart of accounts and connected accounting workflows',
      'Cash, bank, receivables, and payables tracking',
      'Sales, stock, and financial reports from live data',
    ],
    links: [
      { label: 'Retail Sales Automation',  to: '/services/retail-sales-automation', primary: true  },
      { label: 'Accounting Solutions',     to: '/services/accounting-solutions',     primary: false },
      { label: 'Retail Sales Guide',       to: '/resources/retail-sales-automation', primary: false },
    ],
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Industries() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Industries</div>
          <h1>Industry-Focused Systems for Growing Organisations</h1>
          <p>
            ProcessEdge builds and implements structured systems for organisations that need
            better control over operations, people, finance, records, workflows, and reporting.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' as const }}>
            <Link to="/products" className="btn btn-primary btn-lg">
              Explore Products <ArrowRight size={15} />
            </Link>
            <Link to="/contact" className="btn btn-hero-ghost btn-lg">
              Talk to ProcessEdge
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <div className="section-label section-label-green">Our Approach</div>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>
            Purpose-Built, Not Relabelled
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.78 }}>
            Each ProcessEdge product is designed around the real operational workflow of its sector —
            not a generic ERP system with a new label on top. We don't just deliver software.
            We help organisations gain control of their operations with structured systems,
            automated workflows, and business-ready technology.
          </p>
        </div>
      </section>

      {/* Industry cards grid */}
      <section className="section">
        <div className="container">
          <div className="ind-grid">
            {industries.map(ind => (
              <div key={ind.id} className={`ind-card ind-card--${ind.color}`}>

                {/* Card top */}
                <div className="ind-card__top">
                  <div className="ind-card__icon-wrap">
                    <div className={`ind-card__icon ind-card__icon--${ind.color}`}>
                      <ind.icon size={22} />
                    </div>
                    {ind.badge && (
                      <span className={`ind-card__badge ind-card__badge--${ind.badge === 'Services' ? 'service' : 'featured'}`}>
                        {ind.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="ind-card__name">{ind.name}</h3>
                    {ind.product && (
                      <Link to={ind.productPath!} className={`ind-card__product-tag ind-card__product-tag--${ind.color}`}>
                        {ind.product}
                      </Link>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="ind-card__desc">{ind.description}</p>

                {/* Features */}
                <ul className="ind-card__features">
                  {ind.features.map(f => (
                    <li key={f}>
                      <span className={`ind-card__dot ind-card__dot--${ind.color}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="ind-card__links">
                  {ind.links.map(l => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className={`btn btn-sm ${l.primary
                        ? (ind.color === 'green' ? 'btn-green' : 'btn-primary')
                        : 'btn-secondary'}`}
                    >
                      {l.label} <ArrowRight size={13} />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources strip */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <div className="section-label section-label-blue">Further Reading</div>
            <h2 className="section-title">Industry Guides &amp; Articles</h2>
            <p className="section-subtitle">
              Practical articles on how each industry system works — written for business owners
              and operations managers, not software developers.
            </p>
          </div>
          <div className="ind-resources-grid">
            {[
              { label: 'School Management & CBT',       path: '/resources/school-management-cbt',             cat: 'Education'       },
              { label: 'Veterinary Clinic Management',  path: '/resources/veterinary-clinic-management',     cat: 'Veterinary'      },
              { label: 'Clinic Management System',      path: '/resources/clinic-management-system',         cat: 'Healthcare'      },
              { label: 'Hotel Management System',       path: '/resources/hotel-management-system',          cat: 'Hospitality'     },
              { label: 'Cooperative Management System', path: '/resources/cooperative-management-system',    cat: 'Cooperative'     },
              { label: 'Church Management System',      path: '/resources/church-management-system',         cat: 'Church'          },
              { label: 'Agriculture Management System', path: '/resources/agriculture-management-system',    cat: 'Agriculture'     },
              { label: 'Retail Sales Automation',       path: '/resources/retail-sales-automation',          cat: 'Retail'          },
            ].map(r => (
              <Link key={r.path} to={r.path} className="ind-resource-link">
                <BookOpen size={14} />
                <div>
                  <div className="ind-resource-link__cat">{r.cat}</div>
                  <div className="ind-resource-link__label">{r.label}</div>
                </div>
                <ArrowRight size={13} className="ind-resource-link__arrow" />
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <Link to="/resources" className="btn btn-secondary">
              View all resources <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section ind-cta-section">
        <div className="container ind-cta-inner">
          <div>
            <h2 className="ind-cta-heading">Need a Structured System for Your Industry?</h2>
            <p className="ind-cta-body">
              ProcessEdge can help you assess your current process, identify system gaps,
              and design a practical implementation path — specific to your organisation and sector.
            </p>
          </div>
          <div className="ind-cta-actions">
            <Link to="/contact"  className="btn btn-primary btn-lg">Book a Consultation <ArrowRight size={15} /></Link>
            <Link to="/contact"  className="btn btn-secondary btn-lg">Contact ProcessEdge</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
