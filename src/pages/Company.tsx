import { Link } from 'react-router-dom'
import {
  Target, Zap, Users, Globe, Layers, Calculator,
  ShoppingCart, BookOpen, GraduationCap, PawPrint,
  Activity, Hotel, Church, Sprout, Cpu, CheckCircle2,
  ArrowRight, Search, GitMerge, Database, Monitor, TrendingUp, RefreshCw
} from 'lucide-react'
import CTASection from '../components/CTASection'
import './Company.css'
import PageMeta from '../components/PageMeta'

const whatWeDo = [
  { icon: Layers,      title: 'Business Process Optimization', desc: 'We help organisations map, document, and restructure their workflows before implementing any system — so technology fits the business, not the other way around.', color: 'blue'  },
  { icon: Zap,         title: 'ERP Implementation',            desc: 'End-to-end ERPNext and Frappe implementation — from discovery and configuration to data migration, user roles, approvals, reporting, and go-live support.', color: 'green' },
  { icon: Calculator,  title: 'Accounting Solutions',          desc: 'Chart of accounts setup, sales and purchase accounting, cash and bank control, receivables, payables, financial reports, and connected accounting workflows.', color: 'blue'  },
  { icon: ShoppingCart,title: 'Retail Sales Automation',       desc: 'POS workflow setup, inventory control, branch operations, payment tracking, and sales reporting for retail businesses across one or multiple locations.', color: 'green' },
  { icon: Globe,       title: 'Industry-Focused Products',     desc: 'Purpose-built products for education, veterinary, healthcare, hospitality, cooperatives, churches, and agriculture — each designed for its sector\'s real operations.', color: 'blue'  },
  { icon: BookOpen,    title: 'Training & Support',            desc: 'Role-based training, process documentation, go-live support, and ongoing post-implementation retainers — because adoption is where the value is created.', color: 'green' },
]

const products = [
  { name: 'EduEdge',          icon: GraduationCap, path: '/products/eduedge',    color: 'blue'  },
  { name: 'VetEdge',          icon: PawPrint,      path: '/products/vetedge',    color: 'green' },
  { name: 'ClinicEdge',       icon: Activity,      path: '/products/clinicedge', color: 'blue'  },
  { name: 'HotelEdge',        icon: Hotel,         path: '/products/hoteledge',  color: 'green' },
  { name: 'CoopEdge',         icon: Users,         path: '/products/coopedge',   color: 'blue'  },
  { name: 'ChurchEdge',       icon: Church,        path: '/products/churchedge', color: 'green' },
  { name: 'AgricEdge',        icon: Sprout,        path: '/products/agricedge',  color: 'blue'  },
  { name: 'ProcessEdge Core', icon: Cpu,           path: '/products/core',       color: 'green' },
]

const approach = [
  { icon: Search,     num: '01', title: 'Understand Current Process',  desc: 'Every engagement begins with discovery — understanding how the business or organisation actually operates today.' },
  { icon: Target,     num: '02', title: 'Identify Gaps',               desc: 'We identify where processes break down, where visibility is missing, and what structural changes are needed before any system is configured.' },
  { icon: GitMerge,   num: '03', title: 'Design the Workflow',         desc: 'We document the future-state workflow — the steps, approvals, roles, and data flows that the system will support.' },
  { icon: Database,   num: '04', title: 'Configure the System',        desc: 'The system is configured to reflect the documented workflow — not a default installation that forces the business to change how it works.' },
  { icon: Monitor,    num: '05', title: 'Train Users',                  desc: 'Role-based training, practical documentation, and sufficient repetition to build genuine competence across every team.' },
  { icon: Users,      num: '06', title: 'Support Adoption',            desc: 'Active support through go-live and the first 90 days — resolving issues before workarounds become embedded habits.' },
  { icon: TrendingUp, num: '07', title: 'Improve Continuously',        desc: 'Post-implementation reviews to identify adoption gaps, workflow improvements, and system enhancements as the organisation evolves.' },
]

const whyItems = [
  { icon: Target,      title: 'Process-First Thinking',           desc: 'We start with your operations, not with software features. The right system is the one that fits your actual workflow.', color: 'blue'  },
  { icon: Zap,         title: 'Practical Implementation',         desc: 'We build systems that work in the real environment of the business — not theoretical best practices that fail in practice.', color: 'green' },
  { icon: Globe,       title: 'Industry-Focused Solutions',       desc: 'Purpose-built products for specific sectors mean your system reflects how your industry operates — not a generic ERP relabelled.', color: 'blue'  },
  { icon: BookOpen,    title: 'Training & Adoption',              desc: "We don't install and leave. Training, documentation, and adoption support are built into every engagement.", color: 'green' },
  { icon: Calculator,  title: 'Accounting & Operational Visibility', desc: 'Financial records and operational data are connected — so management always has a current, reliable picture of the business.', color: 'blue'  },
  { icon: RefreshCw,   title: 'Long-Term Support Mindset',        desc: 'Our relationship with clients does not end at go-live. We provide ongoing support, improvement, and guidance as systems and businesses grow.', color: 'green' },
]

export default function Company() {
  return (
    <>
        <PageMeta
        title="Company — About ProcessEdge Solutions"
        description="ProcessEdge Solutions is a business process and technology company helping organisations improve operational control, visibility, and performance through structured systems and training."
        path="/company"
      />
      <div style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Company</div>
          <h1>We Help Organizations Build Better Systems for Better Results</h1>
          <p>
            ProcessEdge Solutions helps businesses, schools, clinics, churches, cooperatives,
            agribusinesses, retailers, and service organisations structure their operations with
            practical systems, automation, reporting, and training.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' as const }}>
            <Link to="/contact"   className="btn btn-primary btn-lg">Talk to ProcessEdge <ArrowRight size={15} /></Link>
            <Link to="/solutions" className="btn btn-hero-ghost btn-lg">Explore Our Solutions</Link>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="section">
        <div className="container co-who">
          <div className="co-who__text">
            <div className="section-label section-label-blue">Who We Are</div>
            <h2 className="section-title">A Business Process and Technology Solutions Company</h2>
            <p className="co-para">
              ProcessEdge Solutions is a business process and technology solutions company focused
              on helping organisations improve control, visibility, structure, and performance
              through business-ready systems.
            </p>
            <p className="co-para">
              We are based in Nigeria and serve organisations across West Africa — from growing
              SMEs and retail chains to schools, clinics, churches, cooperatives, and agribusinesses
              that need structured systems to manage their operations reliably.
            </p>
            <p className="co-para">
              Our work combines deep ERPNext and Frappe Framework expertise with a practical
              understanding of how Nigerian organisations operate — including their compliance
              requirements, payment systems, and operational realities.
            </p>
            <div className="co-checks">
              {[
                'Based in Nigeria, serving organisations across West Africa',
                'ERPNext and Frappe Framework implementation specialists',
                '8 purpose-built industry products across multiple sectors',
                'End-to-end: process design, implementation, training, and support',
              ].map(item => (
                <div key={item} className="co-check">
                  <CheckCircle2 size={16} color="var(--green)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="co-who__belief">
            <div className="co-belief-card">
              <div className="co-belief-card__label">What We Believe</div>
              <h3 className="co-belief-card__heading">
                Software alone is not enough.
              </h3>
              <p className="co-belief-card__body">
                A business needs clear processes, structured data, trained users, and reliable
                workflows to get real results from any system. Technology is the tool. Operational
                control is the outcome.
              </p>
              <p className="co-belief-card__body" style={{ marginTop: 12 }}>
                We don't just deliver software. We help organisations gain control of their
                operations with structured systems, automated workflows, and business-ready
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-label section-label-green">What We Do</div>
            <h2 className="section-title">Our Services and Solutions</h2>
            <p className="section-subtitle">
              Every service and product is designed to improve operational control, visibility,
              and adoption — not just to deliver working software.
            </p>
          </div>
          <div className="grid-3">
            {whatWeDo.map(w => (
              <div key={w.title} className="card">
                <div className={`icon-box icon-box-${w.color}`} style={{ marginBottom: 14 }}>
                  <w.icon size={21} />
                </div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.97rem', fontWeight: 700, marginBottom: 7 }}>{w.title}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{w.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link to="/services" className="btn btn-secondary">View all services <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* Product ecosystem */}
      <section className="section">
        <div className="container">
          <div className="co-products-section">
            <div>
              <div className="section-label section-label-blue">Product Ecosystem</div>
              <h2 className="section-title">Industry-Focused Products</h2>
              <p className="co-para" style={{ marginBottom: 28 }}>
                ProcessEdge is building a suite of industry-focused solutions — each one designed
                around the specific operational workflow of its sector and built on the ERPNext and
                Frappe platform foundation.
              </p>
              <div className="co-products-grid">
                {products.map(p => (
                  <Link key={p.name} to={p.path} className={`co-product-chip co-product-chip--${p.color}`}>
                    <p.icon size={14} />
                    {p.name}
                  </Link>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <Link to="/products" className="btn btn-primary">
                  View all products <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="co-tech-card">
              <div className="co-tech-card__label">Technology & Implementation Ecosystem</div>
              <p className="co-tech-card__body">
                ProcessEdge works with trusted technology ecosystems and implementation tools
                to help organisations adopt practical, business-ready systems.
              </p>
              <div className="co-tech-items">
                {[
                  { name: 'ERPNext',          role: 'Implementation Ecosystem' },
                  { name: 'Frappe Framework', role: 'Technology Foundation'    },
                  { name: 'Zoho',             role: 'Partner Brand'            },
                  { name: 'Zoho Books',       role: 'Partner Brand'            },
                  { name: 'Prokip',           role: 'Partner Brand'            },
                ].map(t => (
                  <div key={t.name} className="co-tech-item">
                    <span className="co-tech-item__name">{t.name}</span>
                    <span className="co-tech-item__role">{t.role}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 16, lineHeight: 1.6 }}>
                Partner and technology relationships are noted where they reflect actual working arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 52 }}>
            <div className="section-label section-label-green">Our Approach</div>
            <h2 className="section-title">How We Work With Every Organisation</h2>
            <p className="section-subtitle">
              A structured, repeatable approach that delivers results across every industry and
              engagement type — from initial discovery to continuous improvement.
            </p>
          </div>
          <div className="co-approach-grid">
            {approach.map((step, _i) => (
              <div key={step.num} className="co-approach-step">
                <div className="co-approach-step__icon">
                  <step.icon size={19} />
                </div>
                <div className="co-approach-step__num">{step.num}</div>
                <h3 className="co-approach-step__title">{step.title}</h3>
                <p className="co-approach-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ProcessEdge */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-label section-label-blue">Why ProcessEdge</div>
            <h2 className="section-title">What Makes ProcessEdge Different</h2>
          </div>
          <div className="grid-3">
            {whyItems.map(w => (
              <div key={w.title} className={`card co-why-card co-why-card--${w.color}`}>
                <div className={`icon-box icon-box-${w.color}`} style={{ marginBottom: 14 }}>
                  <w.icon size={21} />
                </div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.97rem', fontWeight: 700, marginBottom: 7 }}>{w.title}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Bring Structure and Control to Your Operations?"
        subtext="Talk to ProcessEdge about your organisation's challenges and we'll recommend a practical path toward better systems, visibility, and results."
        primaryLabel="Contact ProcessEdge"
        primaryTo="/contact"
        secondaryLabel="Explore Solutions"
        secondaryTo="/solutions"
      />
    </div>
    </>
  )
}
