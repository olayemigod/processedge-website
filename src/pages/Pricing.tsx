import { Link } from 'react-router-dom'
import {
  Users, GitBranch, Layers, Database, Zap, Link2, BookOpen,
  Headphones, MessageSquare, CheckCircle2, ArrowRight, HelpCircle
} from 'lucide-react'
import CTASection from '../components/CTASection'
import './Pricing.css'
import PageMeta from '../components/PageMeta'

const engagements = [
  {
    color: 'blue',
    icon: MessageSquare,
    title: 'Consultation & Process Review',
    tag: 'Start Here',
    desc: 'For organisations that need clarity before choosing a system. We review your current process, identify gaps, and recommend a practical implementation path.',
    includes: [
      'Business process discussion',
      'Needs and workflow assessment',
      'Current operations review',
      'Recommended implementation path',
      'No commitment required',
    ],
    cta: 'Book a Consultation',
    ctaTo: '/contact',
  },
  {
    color: 'green',
    icon: Zap,
    title: 'Implementation Project',
    tag: 'Most Common',
    desc: 'For organisations ready to deploy a structured system. Scoped to your business size, products, workflows, users, and data migration needs.',
    includes: [
      'System setup and module configuration',
      'Workflow structuring and approval flows',
      'User roles, permissions, and access control',
      'Master data preparation and migration',
      'Training and go-live support',
    ],
    cta: 'Discuss Your Project',
    ctaTo: '/contact',
  },
  {
    color: 'blue',
    icon: Layers,
    title: 'Product Subscription / SaaS Readiness',
    tag: 'Industry Products',
    desc: 'For organisations deploying ProcessEdge industry products — EduEdge, VetEdge, ClinicEdge, HotelEdge, CoopEdge, ChurchEdge, AgricEdge, and future ProcessEdge Core-enabled services.',
    includes: [
      'Product access and configuration',
      'User and module planning',
      'Deployment and rollout support',
      'Support options by tier',
      'Future subscription readiness',
    ],
    cta: 'View Products',
    ctaTo: '/products',
  },
  {
    color: 'green',
    icon: Headphones,
    title: 'Support & Training Retainer',
    tag: 'Ongoing',
    desc: 'For organisations that need continued guidance after implementation — training new staff, improving adoption, resolving issues, and keeping systems aligned with evolving workflows.',
    includes: [
      'Staff training and re-training',
      'Admin and configuration support',
      'Process documentation updates',
      'Adoption review and improvement',
      'Post-go-live assistance',
    ],
    cta: 'Discuss Support Options',
    ctaTo: '/services/training-support',
  },
]

const pricingFactors = [
  { icon: Users,     label: 'Users & Roles',          desc: 'Number of staff using the system and the roles and permissions each requires.' },
  { icon: GitBranch, label: 'Branches & Locations',   desc: 'Single-site versus multi-branch setup affects configuration scope and reporting structure.' },
  { icon: Layers,    label: 'Products & Modules',      desc: 'Which ProcessEdge products and ERPNext modules are required for your operation.' },
  { icon: Database,  label: 'Data Migration',          desc: 'Volume and complexity of existing data to be cleaned, structured, and migrated.' },
  { icon: Zap,       label: 'Workflow Complexity',     desc: 'Number of workflows, approval chains, and custom process requirements.' },
  { icon: Link2,     label: 'Integrations',            desc: 'Third-party system connections — payment gateways, communication services, external APIs.' },
  { icon: BookOpen,  label: 'Training Depth',          desc: 'Number of user groups, training sessions, and documentation requirements.' },
  { icon: Headphones,label: 'Support Level',           desc: 'Post-implementation support tier — ad hoc, monthly retainer, or priority support.' },
]

const faqs = [
  {
    q: 'Do you have fixed pricing?',
    a: 'Pricing depends on scope, users, products, modules, and support requirements. ProcessEdge provides accurate pricing after a discovery conversation where we understand the implementation need.',
  },
  {
    q: 'Can we start small?',
    a: 'Yes. ProcessEdge can help organisations start with priority workflows and the most critical modules, then expand over time as the team becomes comfortable and business needs grow.',
  },
  {
    q: 'Do you provide training?',
    a: 'Yes. Training and support are a core part of every ProcessEdge implementation. We deliver role-based training, process documentation, and post-go-live support to ensure real adoption.',
  },
  {
    q: 'Do you only sell software?',
    a: "No. ProcessEdge focuses on operational control, process structure, automation, visibility, and user adoption. Software is the tool — structured implementation and adoption are what deliver the result.",
  },
  {
    q: 'Can ProcessEdge support different industries?',
    a: 'Yes. ProcessEdge serves education, veterinary, healthcare, hospitality, cooperatives, churches, agriculture, retail, and general SMEs — with purpose-built products and implementation services for each sector.',
  },
]

export default function Pricing() {
  return (
    <>
        <PageMeta
        title="Pricing — Flexible Business System Pricing"
        description="Flexible ProcessEdge pricing for ERP implementation, business automation, industry solutions, training, support, and operational control. Contact us for a scoped quote."
        path="/pricing"
      />
      <div style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Pricing</div>
          <h1>Flexible Pricing for Business Systems That Fit Your Operations</h1>
          <p>
            ProcessEdge pricing depends on your organisation's needs, product selection,
            implementation scope, users, training, support, integrations, and rollout plan.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' as const }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Request Pricing <ArrowRight size={15} />
            </Link>
            <Link to="/contact" className="btn btn-hero-ghost btn-lg">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing approach */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label section-label-blue">How Pricing Works</div>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>
            Priced to Fit Your Organisation — Not a Generic Tier
          </h2>
          <p style={{ fontSize: '0.97rem', color: 'var(--text-body)', lineHeight: 1.78, marginBottom: 16 }}>
            ProcessEdge does not publish fixed price lists because no two implementations are the same.
            A school deploying EduEdge for 200 students has different needs from a multi-branch cooperative
            deploying CoopEdge with loan management, or a clinic deploying ClinicEdge with pharmacy and
            lab workflows.
          </p>
          <p style={{ fontSize: '0.97rem', color: 'var(--text-body)', lineHeight: 1.78 }}>
            Every engagement is scoped after a discovery conversation where we understand your organisation's
            current process, the system outcomes you need, and the constraints that matter to you.
          </p>
        </div>
      </section>

      {/* Engagement options */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-label section-label-green">Engagement Types</div>
            <h2 className="section-title">How You Can Work With ProcessEdge</h2>
            <p className="section-subtitle">
              From an initial consultation to a full implementation and ongoing support — choose the
              engagement that fits your current stage.
            </p>
          </div>
          <div className="pricing-grid">
            {engagements.map(e => (
              <div key={e.title} className={`pricing-card pricing-card--${e.color}`}>
                <div className="pricing-card__top">
                  <div className={`pricing-card__icon pricing-card__icon--${e.color}`}>
                    <e.icon size={22} />
                  </div>
                  <span className={`pricing-card__tag pricing-card__tag--${e.color}`}>{e.tag}</span>
                </div>
                <h3 className="pricing-card__title">{e.title}</h3>
                <p className="pricing-card__desc">{e.desc}</p>
                <ul className="pricing-card__list">
                  {e.includes.map(item => (
                    <li key={item}>
                      <CheckCircle2 size={14} color="var(--green)" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to={e.ctaTo}
                  className={`btn btn-sm ${e.color === 'green' ? 'btn-green' : 'btn-primary'}`}
                  style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                  {e.cta} <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What affects pricing */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-label section-label-blue">Pricing Factors</div>
            <h2 className="section-title">What Influences the Cost of an Engagement</h2>
            <p className="section-subtitle">
              Understanding these factors helps us scope an engagement that fits your budget
              and delivers the outcomes your organisation actually needs.
            </p>
          </div>
          <div className="grid-4">
            {pricingFactors.map(f => (
              <div key={f.label} className="card">
                <div className="icon-box icon-box-blue" style={{ marginBottom: 14 }}>
                  <f.icon size={20} />
                </div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.92rem', fontWeight: 700, marginBottom: 6 }}>{f.label}</h3>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.62 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended next step */}
      <section className="section">
        <div className="container">
          <div className="pricing-nextstep">
            <div className="pricing-nextstep__text">
              <div className="section-label section-label-green">Recommended Next Step</div>
              <h2 className="section-title">The Best Way to Get Accurate Pricing</h2>
              <p style={{ fontSize: '0.97rem', color: 'var(--text-body)', lineHeight: 1.78, marginBottom: 20 }}>
                The most accurate pricing comes from a short discovery conversation. We ask about your
                organisation's current process, the pain points you need to solve, the users involved,
                and the outcomes you are aiming for.
              </p>
              <p style={{ fontSize: '0.97rem', color: 'var(--text-body)', lineHeight: 1.78, marginBottom: 28 }}>
                From that conversation, we can recommend the right product or service combination,
                give you a realistic scope, and provide pricing that reflects what your engagement
                actually requires — not a generic estimate.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
                <Link to="/contact" className="btn btn-primary btn-lg">Request Pricing <ArrowRight size={15} /></Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">Contact ProcessEdge</Link>
              </div>
            </div>
            <div className="pricing-nextstep__links">
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--text-muted)', marginBottom: 14 }}>
                Explore Before Deciding
              </div>
              {[
                { label: 'View All Products',         to: '/products'                     },
                { label: 'View All Services',         to: '/services'                     },
                { label: 'See Solutions by Problem',  to: '/solutions'                    },
                { label: 'ERP Implementation',        to: '/services/erp-implementation'  },
                { label: 'Training & Support',        to: '/services/training-support'    },
              ].map(l => (
                <Link key={l.to} to={l.to} className="pricing-explore-link">
                  {l.label} <ArrowRight size={13} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 780, margin: '0 auto' }}>
          <div className="text-center" style={{ marginBottom: 40 }}>
            <div className="section-label section-label-blue">FAQ</div>
            <h2 className="section-title">Common Pricing Questions</h2>
          </div>
          <div className="pricing-faqs">
            {faqs.map(faq => (
              <div key={faq.q} className="pricing-faq">
                <div className="pricing-faq__q">
                  <HelpCircle size={16} color="var(--blue)" />
                  <span>{faq.q}</span>
                </div>
                <p className="pricing-faq__a">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Let's Discuss Your Requirements"
        subtext="Every business is different. A short conversation helps us recommend the right system, scope a realistic implementation, and provide pricing that actually fits your situation."
        primaryLabel="Request Pricing"
        primaryTo="/contact"
        secondaryLabel="Book a Consultation"
        secondaryTo="/contact"
      />
    </div>
    </>
  )
}
