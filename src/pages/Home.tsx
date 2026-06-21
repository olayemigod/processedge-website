import { Link } from 'react-router-dom'
import {
  GraduationCap,
  Settings, Calculator, ShoppingCart, BookOpen,
  AlertCircle, Database, BarChart2, RefreshCw, FileWarning, Timer,
  CheckCircle2, Zap, Layers, TrendingUp, ShieldCheck, HeadphonesIcon,
  ArrowRight, ChevronRight, CalendarCheck,
} from 'lucide-react'
import ProcessSteps from '../components/ProcessSteps'
import CTASection from '../components/CTASection'
import PartnerLogoMarquee from '../components/PartnerLogoMarquee'
import StatsBar from '../components/StatsBar'
import TrustSection from '../components/TrustSection'
import RevealGroup from '../components/RevealGroup'
import './Home.css'
import PageMeta from '../components/PageMeta'
import { EDGESUITE_PRODUCTS } from '../data/edgeSuiteProducts'

// ── Problems ──────────────────────────────────────────────────────────────────
const problems = [
  { icon: AlertCircle, title: 'Manual Processes',  desc: 'Time-consuming manual tasks drain productivity and introduce avoidable errors.' },
  { icon: Database,    title: 'Scattered Records', desc: "Data spread across spreadsheets, notebooks, and disconnected apps you can't trust." },
  { icon: BarChart2,   title: 'Poor Visibility',   desc: 'No real-time view of your business performance, stock, finances, or team activity.' },
  { icon: RefreshCw,   title: 'Repeated Errors',   desc: 'The same mistakes repeated because nothing is tracked, monitored, or automated.' },
  { icon: FileWarning, title: 'Weak Reporting',    desc: 'Management decisions made on guesswork because reports are slow or non-existent.' },
  { icon: Timer,       title: 'Slow Operations',   desc: 'Approvals, paperwork, and coordination bottlenecks that slow your business down.' },
]

// ── Professional Services ─────────────────────────────────────────────────────
const services = [
  {
    name: 'ERP Implementation',
    desc: 'End-to-end ERPNext deployment — scoping, configuration, migration, and go-live support.',
    path: '/services/erp-implementation',
    icon: Settings,
    color: 'blue',
  },
  {
    name: 'Accounting Solutions',
    desc: 'Bookkeeping, chart of accounts, financial reporting, and tax-ready management accounts.',
    path: '/services/accounting-solutions',
    icon: Calculator,
    color: 'green',
  },
  {
    name: 'Retail Sales Automation',
    desc: 'POS, inventory control, pricing, cashier workflows, sales reports, and branch controls.',
    path: '/services/retail-sales-automation',
    icon: ShoppingCart,
    color: 'blue',
  },
  {
    name: 'Training & Support',
    desc: 'User training, documentation, onboarding, and ongoing ERP support for your team.',
    path: '/services/training-support',
    icon: BookOpen,
    color: 'green',
  },
]

// ── Why ProcessEdge ───────────────────────────────────────────────────────────
const whyItems = [
  { icon: Layers,         title: 'Business Process First',       desc: 'We start with your business challenges, not software features. Every implementation fits your real workflow.', color: 'blue'  },
  { icon: Zap,            title: 'ERPNext & Frappe Expertise',   desc: 'Deep technical expertise in ERPNext and Frappe — implementation, customization, and ongoing optimization.',     color: 'green' },
  { icon: ShieldCheck,    title: 'Industry-Specific Products',   desc: 'Purpose-built products for five industry sectors — not generic software relabelled for your industry.',          color: 'blue'  },
  { icon: BarChart2,      title: 'Automation & Reporting',       desc: 'We build workflows that run themselves and dashboards that give you real insight, not just raw data.',             color: 'green' },
  { icon: HeadphonesIcon, title: 'Practical Training & Support', desc: "Your team gets properly trained and supported. We don't deploy and disappear.",                                  color: 'blue'  },
  { icon: TrendingUp,     title: 'Scalable Architecture',        desc: 'Modular systems built to grow with your business — extensible and ready for what comes next.',                    color: 'green' },
]

const eduFeatures = [
  'Student, guardian, and academic records',
  'Courses, programmes, classes, and sessions',
  'CBT question bank management',
  'CBT exam delivery and scheduling',
  'CBT result synchronization',
  'Assessment and grading workflow support',
  'Education operations automation',
]

// ── Scrolling services / sectors strip (below stats bar) ─────────────────────
const scrollItems = [
  { label: 'ERP Implementation',      type: 'service'  },
  { label: 'ERPNext',                 type: 'platform' },
  { label: 'Frappe Framework',        type: 'platform' },
  { label: 'Accounting Solutions',    type: 'service'  },
  { label: 'Education',               type: 'sector'   },
  { label: 'Retail & POS',            type: 'service'  },
  { label: 'Veterinary',              type: 'sector'   },
  { label: 'Hospitality',             type: 'sector'   },
  { label: 'Training & Support',      type: 'service'  },
  { label: 'Cooperative Finance',     type: 'sector'   },
  { label: 'Church & Ministry',       type: 'sector'   },
  { label: 'Retail Sales Automation', type: 'service'  },
  { label: 'CoreEdge Platform',       type: 'platform' },
  { label: 'Nigeria-Ready ERP',       type: 'platform' },
]

// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <PageMeta
        title="ProcessEdge Solutions — Nigeria's Trusted ERP & Business Automation Partner"
        description="ProcessEdge helps schools, clinics, retailers, cooperatives, hotels, farms, and service businesses streamline operations using purpose-built software, ERPNext implementation, and smarter business processes."
        path="/"
      />
      <div className="home">

        {/* ── Hero ── */}
        <section className="hero" aria-label="ProcessEdge hero section">
          <div className="hero__bg-pattern" />
          <div className="container hero__inner">
            <div className="hero__content">
              <div className="hero__badge">
                <CheckCircle2 size={13} />
                Nigeria's Trusted ERP Partner
              </div>
              <h1 className="hero__headline">
                Nigeria's Trusted ERP &amp;{' '}
                <span className="hero__highlight">Business Automation</span>{' '}
                Partner
              </h1>
              <p className="hero__subtext">
                ProcessEdge helps schools, clinics, retailers, cooperatives,
                hotels, farms, and service businesses streamline operations —
                through purpose-built software, ERPNext implementation, and
                smarter business processes.
              </p>
              <div className="hero__actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <CalendarCheck size={16} /> Book a Consultation
                </Link>
                <Link to="/products" className="btn btn-hero-ghost btn-lg">
                  Explore EdgeSuite
                </Link>
              </div>
              <div className="hero__trust">
                <div className="hero__trust-item"><CheckCircle2 size={14} /> Nigeria-ready solutions</div>
                <div className="hero__trust-item"><CheckCircle2 size={14} /> ERPNext / Frappe based</div>
                <div className="hero__trust-item"><CheckCircle2 size={14} /> 8+ industry products</div>
              </div>
            </div>

            {/* ── Hero visual — professional image + floating workspace card ── */}
            <div className="hero__visual" aria-hidden="true">
              <div className="hero__photo-frame hero__dashboard--float">
                {/* Human image */}
                <img
                  src="/hero-consultant.png"
                  alt=""
                  className="hero__consultant-img"
                  loading="eager"
                  decoding="async"
                />

                {/* Floating implementation workspace overlay */}
                <div className="hero__overlay-card">
                  {/* Overlay header */}
                  <div className="hero__overlay-header">
                    <span className="hero__overlay-dot hero__overlay-dot--blue" />
                    <span className="hero__overlay-title">Implementation Workspace</span>
                    <span className="hero__app-status" style={{ marginLeft: 'auto' }}>
                      <span className="hero__status-dot" />Active
                    </span>
                  </div>

                  {/* Stage rows */}
                  <div className="hero__overlay-stages">
                    {[
                      { step: 'Process Review',    status: 'done',    badge: 'Done'        },
                      { step: 'ERP Configuration', status: 'done',    badge: 'Done'        },
                      { step: 'Team Training',     status: 'active',  badge: 'In Progress' },
                      { step: 'Go-Live Support',   status: 'pending', badge: 'Pending'     },
                    ].map(s => (
                      <div key={s.step} className={`hero__stage hero__stage--${s.status}`}>
                        <span className={`hero__stage-dot hero__stage-dot--${s.status}`} />
                        <span className="hero__stage-name">{s.step}</span>
                        <span className={`hero__stage-badge hero__stage-badge--${s.status}`}>{s.badge}</span>
                      </div>
                    ))}
                  </div>

                  {/* EdgeSuite chip row */}
                  <div className="hero__overlay-chips">
                    {['CoreEdge','EduEdge','ClinicEdge','HotelEdge','CoopEdge'].map(m => (
                      <span key={m} className={`hero__chip hero__chip--${['EduEdge','ClinicEdge','HotelEdge'].includes(m) ? 'blue' : 'green'}`}>{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Stats bar — animated count-up ── */}
        <StatsBar />

        {/* ── Scrolling services strip ── */}
        <div className="scroll-strip" aria-label="Services and sectors we cover">
          <div className="scroll-strip__track">
            {[...scrollItems, ...scrollItems, ...scrollItems].map((item, i) => (
              <span key={i} className={`scroll-strip__item scroll-strip__item--${item.type}`}>
                <span className="scroll-strip__dot" />
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Problems — dark background for visual contrast ── */}
        <section className="section section-problems">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 52 }}>
              <div className="section-label section-label-problem">Common Challenges</div>
              <h2 className="section-title section-title--light">Operational Problems That Hold Businesses Back</h2>
              <p className="section-subtitle section-subtitle--light">
                These are the most common operational gaps that slow growth, reduce accuracy,
                and make it hard to make confident business decisions.
              </p>
            </div>
            <RevealGroup className="grid-3">
              {problems.map(p => (
                <div key={p.title} className="problem-card reveal-card">
                  <div className="problem-card__icon"><p.icon size={20} /></div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ── Solution ── */}
        <section className="section">
          <div className="container solution-section">
            <div className="solution-section__text reveal-block" data-revealed="true">
              <div className="section-label section-label-green">The Solution</div>
              <h2 className="section-title">Process Clarity. Automation. Better Results.</h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 24 }}>
                ProcessEdge Solutions brings order to operational chaos. We implement
                ERP systems that actually fit your business, automate repetitive work,
                and give you the visibility to make confident decisions.
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 32 }}>
                Whether you need a full ERPNext deployment, accounting automation,
                retail POS, or an industry-specific platform for your school, clinic,
                hotel, cooperative, or church — we build systems that scale with you.
              </p>
              <div className="solution-checks">
                {[
                  'Process documentation & redesign',
                  'ERPNext & Frappe implementation',
                  'Custom modules & integrations',
                  'Real-time dashboards & reporting',
                  'Staff training & change management',
                ].map(item => (
                  <div key={item} className="solution-check">
                    <CheckCircle2 size={16} color="var(--green)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/services" className="btn btn-green btn-lg">Our Services</Link>
                <Link to="/company"  className="btn btn-secondary btn-lg">About Us</Link>
              </div>
            </div>
            <div className="solution-section__visual">
              <RevealGroup className="solution-card-stack">
                {[
                  { label: 'ERP System Live',   sub: 'Inventory, Sales, Accounting synced', color: 'var(--blue)'   },
                  { label: 'Automated Reports', sub: 'Daily P&L, stock alerts, AR aging',   color: 'var(--green)'  },
                  { label: 'Staff Trained',     sub: '100% adoption across departments',    color: '#7c3aed'       },
                ].map((c) => (
                  <div key={c.label} className="solution-mini-card reveal-card"
                    style={{ '--card-accent': c.color } as React.CSSProperties}>
                    <div className="solution-mini-dot" style={{ background: c.color }} />
                    <div>
                      <div className="solution-mini-label">{c.label}</div>
                      <div className="solution-mini-sub">{c.sub}</div>
                    </div>
                    <CheckCircle2 size={18} color={c.color} />
                  </div>
                ))}
              </RevealGroup>
            </div>
          </div>
        </section>

        {/* ── Trust Signals ── */}
        <TrustSection />

        {/* ── Why ProcessEdge ── */}
        <section className="section section-alt why-us-section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 0 }}>
              <div className="section-label section-label-green">Why Choose Us</div>
              <h2 className="section-title">Why Businesses Choose ProcessEdge</h2>
              <p className="section-subtitle">
                We combine technical depth with business understanding to deliver systems
                that actually get used — and actually deliver results.
              </p>
            </div>
            <div style={{ marginTop: 36 }}>
              <RevealGroup className="grid-3">
                {whyItems.map(w => (
                  <div key={w.title} className={`why-card why-card--${w.color} reveal-card`}>
                    <div className={`why-card__icon why-card__icon--${w.color}`}>
                      <w.icon size={22} />
                    </div>
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                  </div>
                ))}
              </RevealGroup>
            </div>
          </div>
        </section>


        {/* ── EduEdge Featured ── */}
        <section className="section featured-product">
          <div className="container">
            <div className="featured-product__inner">
              <div className="featured-product__content reveal-block" data-revealed="true">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <div className="section-label section-label-green" style={{ marginBottom: 0 }}>Product In Planning</div>
                  <div className="featured-badge">🛠️ Under Development — EduEdge</div>
                </div>
                <h2 className="section-title" style={{ marginBottom: 16 }}>
                  Next-Gen Education Management &amp; CBT Planning
                </h2>
                <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 28, fontSize: '1rem' }}>
                  EduEdge is an education-focused solution currently in the development stage. It is planned to combine
                  ERPNext/Frappe Education capabilities with CBT exam management,
                  question banks, result synchronization, and academic workflow
                  automation — being designed specifically for Nigerian schools and institutions.
                </p>
                <ul className="featured-product__list">
                  {eduFeatures.map(f => (
                    <li key={f}>
                      <CheckCircle2 size={15} color="var(--green)" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                  <Link to="/products/eduedge" className="btn btn-primary btn-lg">
                    Explore EduEdge Planning <ArrowRight size={15} />
                  </Link>
                  <Link to="/contact" className="btn btn-green btn-lg">
                    <CalendarCheck size={15} /> Register Interest
                  </Link>
                </div>
              </div>
              <div className="featured-product__visual">
                <div className="featured-product__card-wrap reveal-card" data-revealed="true">
                  <div className="featured-product__header">
                    <div className="featured-product__icon">
                      <GraduationCap size={28} />
                    </div>
                    <div>
                      <div className="featured-product__title">EduEdge</div>
                      <div className="featured-product__sub">Education Management (In Development)</div>
                    </div>
                  </div>
                  <div className="featured-product__modules">
                    {[
                      { label: 'CBT Engine',     status: 'soon' },
                      { label: 'Question Bank',  status: 'soon' },
                      { label: 'Student Portal', status: 'soon' },
                      { label: 'Result Sync',    status: 'soon' },
                      { label: 'Fee Management', status: 'soon' },
                      { label: 'Analytics',      status: 'soon' },
                      { label: 'Parent Portal',  status: 'soon' },
                      { label: 'Mobile App',     status: 'soon' },
                    ].map(m => (
                      <div key={m.label} className="featured-product__module">
                        <div className={`featured-product__module-dot ${m.status}`} />
                        <span>{m.label}</span>
                        {m.status === 'soon' && (
                          <span className="featured-product__module-soon">Soon</span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="featured-product__stat-row">
                    {[
                      { val: 'CBT',    label: 'Exam Engine'    },
                      { val: 'Q-Bank', label: 'Question Mgmt'  },
                      { val: 'Auto',   label: 'Result Sync'    },
                    ].map(s => (
                      <div key={s.label} className="featured-product__stat">
                        <div className="featured-product__stat-val" style={{ color: '#9ca3af' }}>{s.val}</div>
                        <div className="featured-product__stat-label">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Products & Services — Grouped ── */}
        <section className="section section-alt" id="products">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 56 }}>
              <div className="section-label section-label-blue">What We Offer</div>
              <h2 className="section-title">ProcessEdge Products &amp; Services</h2>
              <p className="section-subtitle">
                Industry apps built on ERPNext/Frappe, a powerful platform layer, and
                professional services — all from one partner.
              </p>
            </div>

            {/* Group A — Platform & Payments Infrastructure */}
            <div className="ps-group">
              <div className="ps-group__header">
                <div className="ps-group__badge ps-group__badge--foundation" style={{ background: 'var(--blue-light)', color: 'var(--blue)' }}>Platform &amp; Payments</div>
                <h3 className="ps-group__title">EdgeSuite Foundations</h3>
                <p className="ps-group__desc">
                  The infrastructure powering EdgeSuite applications and standalone business operations.
                </p>
              </div>
              <RevealGroup className="grid-2" style={{ gap: 28, marginBottom: 48 }}>
                {[
                  EDGESUITE_PRODUCTS.find(p => p.slug === 'core'),
                  EDGESUITE_PRODUCTS.find(p => p.slug === 'edgepay')
                ].map(prod => {
                  if (!prod) return null;
                  const Icon = prod.icon;
                  return (
                    <Link
                      key={prod.name}
                      to={prod.ctaLink}
                      className={`ps-card ps-card--${prod.color} reveal-card`}
                      style={{ padding: '32px 28px' }}
                    >
                      <div className={`ps-card__badge ps-card__badge--${prod.status.toLowerCase().replace(' ', '-')}`}>
                        {prod.status}
                      </div>
                      <div className={`ps-card__icon ps-card__icon--${prod.color}`}>
                        <Icon size={24} />
                      </div>
                      <div className="ps-card__name" style={{ fontSize: '1.25rem', marginTop: 8 }}>{prod.name}</div>
                      <div className="ps-card__tagline">{prod.targetSector}</div>
                      <p className="ps-card__desc" style={{ fontSize: '0.88rem', margin: '12px 0 20px', lineHeight: 1.6 }}>{prod.shortDescription}</p>
                      
                      <div style={{ marginBottom: 20 }}>
                        <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-muted)', marginBottom: 8 }}>Key Capabilities</div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                          {prod.keyFeatures.map(f => (
                            <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8rem', color: 'var(--text-body)' }}>
                              <CheckCircle2 size={13} color="var(--green)" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="ps-card__link" style={{ marginTop: 'auto' }}>
                        {prod.ctaLabel} <ArrowRight size={13} />
                      </div>
                    </Link>
                  );
                })}
              </RevealGroup>
            </div>

            {/* EdgeFinder Discovery Strip */}
            {(() => {
              const ef = EDGESUITE_PRODUCTS.find(p => p.slug === 'edgefinder');
              if (!ef) return null;
              const EFIcon = ef.icon;
              return (
                <div className="ps-group" style={{ paddingBottom: 8 }}>
                  <div className="ps-group__header" style={{ marginBottom: 16 }}>
                    <div className="ps-group__badge ps-group__badge--app" style={{ background: 'rgba(0,86,166,0.08)', color: 'var(--blue)', border: '1px solid rgba(0,86,166,0.15)' }}>Discovery Layer</div>
                    <h3 className="ps-group__title">EdgeFinder</h3>
                    <p className="ps-group__desc">Business discovery layer built on CoreEdge — helping customers find EdgeSuite-powered businesses by industry, service, and location.</p>
                  </div>
                  <Link to={ef.ctaLink} className={`ps-card ps-card--${ef.color} reveal-card`} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20, padding: '20px 24px', marginBottom: 32 }}>
                    <div className={`ps-card__icon ps-card__icon--${ef.color}`} style={{ flexShrink: 0 }}>
                      <EFIcon size={22} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 4 }}>
                        <div className="ps-card__name" style={{ margin: 0 }}>{ef.name}</div>
                        <div className={`ps-card__badge ps-card__badge--${ef.status.toLowerCase().replace(' ', '-')}`}>{ef.status}</div>
                      </div>
                      <p className="ps-card__desc" style={{ margin: 0, fontSize: '0.86rem' }}>{ef.shortDescription}</p>
                    </div>
                    <div className="ps-card__link" style={{ flexShrink: 0, whiteSpace: 'nowrap' }}>
                      {ef.ctaLabel} <ArrowRight size={13} />
                    </div>
                  </Link>
                </div>
              );
            })()}

            {/* Group B — Industry Applications */}
            <div className="ps-group">
              <div className="ps-group__header">
                <div className="ps-group__badge ps-group__badge--app">Industry Apps</div>
                <h3 className="ps-group__title">Featured EdgeSuite Applications</h3>
                <p className="ps-group__desc">
                  Operational suites built to automate workflows for specific industries.
                </p>
              </div>
              <RevealGroup className="grid-2" style={{ gap: 24 }}>
                {EDGESUITE_PRODUCTS.filter(p => ['retailedge', 'vetedge'].includes(p.slug)).map(prod => {
                  const Icon = prod.icon;
                  return (
                    <Link
                      key={prod.name}
                      to={prod.ctaLink}
                      className={`ps-card ps-card--${prod.color} reveal-card`}
                    >
                      <div className={`ps-card__badge ps-card__badge--${prod.status.toLowerCase().replace(' ', '-')}`}>
                        {prod.status}
                      </div>
                      <div className={`ps-card__icon ps-card__icon--${prod.color}`}>
                        <Icon size={22} />
                      </div>
                      <div className="ps-card__name">{prod.name}</div>
                      <div className="ps-card__tagline">{prod.targetSector}</div>
                      <p className="ps-card__desc" style={{ margin: '8px 0 16px' }}>{prod.shortDescription}</p>
                      
                      <div className="ps-card__link" style={{ marginTop: 'auto' }}>
                        {prod.ctaLabel} <ArrowRight size={13} />
                      </div>
                    </Link>
                  );
                })}
              </RevealGroup>
              <div style={{ textAlign: 'center', marginTop: 32 }}>
                <Link to="/products" className="btn btn-secondary">
                  View all products <ChevronRight size={15} />
                </Link>
              </div>
            </div>

            {/* Group B — Professional Services */}
            <div className="ps-group">
              <div className="ps-group__header">
                <div className="ps-group__badge ps-group__badge--service">Professional Services</div>
                <h3 className="ps-group__title">We Handle the Full Implementation Lifecycle</h3>
                <p className="ps-group__desc">
                  From initial scoping and ERP deployment to accounting setup and ongoing support — end-to-end.
                </p>
              </div>
              <RevealGroup className="ps-grid ps-grid--services">
                {services.map(svc => (
                  <Link key={svc.name} to={svc.path} className={`ps-service-card ps-service-card--${svc.color} reveal-card`}>
                    <div className={`ps-service-card__icon ps-service-card__icon--${svc.color}`}>
                      <svc.icon size={22} />
                    </div>
                    <div className="ps-service-card__name">{svc.name}</div>
                    <p className="ps-service-card__desc">{svc.desc}</p>
                    <div className="ps-service-card__link">
                      Explore Service <ArrowRight size={13} />
                    </div>
                  </Link>
                ))}
              </RevealGroup>
              <div style={{ textAlign: 'center', marginTop: 32 }}>
                <Link to="/services" className="btn btn-secondary">
                  View all services <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Partner Logo Marquee ── */}
        <PartnerLogoMarquee />

        {/* ── Process Steps ── */}
        <ProcessSteps />

        {/* ── CTA ── */}
        <CTASection
          headline="Ready to streamline your operations with a system built for your business?"
          subtext="Book a consultation and let's review your current processes, identify automation opportunities, and recommend the right ProcessEdge solution."
          primaryLabel="Book a Consultation"
          primaryTo="/contact"
          secondaryLabel="Explore EdgeSuite"
          secondaryTo="/products"
          variant="blue"
        />
      </div>
    </>
  )
}
