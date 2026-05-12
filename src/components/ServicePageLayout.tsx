import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Users, ChevronRight } from 'lucide-react'
import CTASection from './CTASection'
import type { LucideIcon } from 'lucide-react'
import './ServicePageLayout.css'

// ── Types ──────────────────────────────────────────────────────────────────

export interface SPWhatWeDoItem {
  icon: LucideIcon
  title: string
  desc: string
  color?: 'blue' | 'green'
}

export interface SPDeliveryStep {
  number: string
  title: string
  desc: string
}

export interface SPRelatedResource {
  title: string
  path: string
  category: string
}

export interface SPRelatedLink {
  label: string
  to: string
  variant?: 'primary' | 'secondary' | 'green'
}

export interface ServicePageData {
  // Hero
  name: string
  badge: string
  tagline: string
  heroDesc: string
  icon: LucideIcon
  iconColor?: string
  iconBg?: string
  primaryCTA?: string
  secondaryCTA?: string

  // Problem
  problemHeading: string
  problemBody: string[]
  problemPoints?: string[]

  // What we do
  whatWeDoHeading?: string
  whatWeDoSub?: string
  whatWeDo: SPWhatWeDoItem[]

  // Delivery
  deliveryHeading?: string
  deliverySteps: SPDeliveryStep[]

  // Who it's for
  forHeading?: string
  forIntro?: string
  forList: string[]

  // Value
  valueBody?: string

  // Related
  relatedResources: SPRelatedResource[]
  relatedLinks: SPRelatedLink[]

  // CTA
  ctaHeadline?: string
  ctaSubtext?: string
}

// ── Layout ─────────────────────────────────────────────────────────────────

export default function ServicePageLayout({ d }: { d: ServicePageData }) {
  const Icon = d.icon
  const iconBg    = d.iconBg    ?? 'rgba(0,86,166,0.2)'
  const iconColor = d.iconColor ?? '#7ec5ff'

  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── Hero ── */}
      <section className="sp-hero">
        <div className="container sp-hero__inner">
          <div className="sp-hero__left">
            <div className="sp-hero__badge-row">
              <div className="sp-hero__icon" style={{ background: iconBg }}>
                <Icon size={26} color={iconColor} />
              </div>
              <span className="sp-hero__badge">Professional Service</span>
            </div>
            <h1 className="sp-hero__title">{d.name}</h1>
            <p className="sp-hero__tagline">{d.tagline}</p>
            <p className="sp-hero__desc">{d.heroDesc}</p>
            <div className="sp-hero__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                {d.primaryCTA ?? 'Book a Consultation'} <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="btn btn-hero-ghost btn-lg">
                {d.secondaryCTA ?? 'Talk to ProcessEdge'}
              </Link>
            </div>
          </div>
          {/* Delivery steps preview card */}
          <div className="sp-hero__right">
            <div className="sp-hero__card">
              <div className="sp-hero__card-header">
                <div className="sp-hero__card-icon" style={{ background: 'rgba(255,255,255,0.12)' }}>
                  <Icon size={20} color="white" />
                </div>
                <div>
                  <div className="sp-hero__card-name">{d.name}</div>
                  <div className="sp-hero__card-sub">How we deliver it</div>
                </div>
              </div>
              <div className="sp-hero__steps-preview">
                {d.deliverySteps.map((step, i) => (
                  <div key={i} className="sp-hero__step">
                    <div className="sp-hero__step-num">{step.number}</div>
                    <div className="sp-hero__step-title">{step.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="section section-alt">
        <div className="container sp-problem">
          <div className="sp-problem__text">
            <div className="section-label section-label-green">The Problem</div>
            <h2 className="section-title">{d.problemHeading}</h2>
            {d.problemBody.map((p, i) => (
              <p key={i} className="sp-para">{p}</p>
            ))}
            {d.problemPoints && (
              <ul className="sp-checklist">
                {d.problemPoints.map((pt, i) => (
                  <li key={i}><CheckCircle2 size={15} color="var(--green)" /><span>{pt}</span></li>
                ))}
              </ul>
            )}
          </div>
          <div className="sp-value-card">
            <div className="sp-value-card__label">ProcessEdge Approach</div>
            <p className="sp-value-card__body">
              {d.valueBody ?? "We don't just deliver software. We help businesses gain control of their operations with structured systems, automated workflows, and business-ready technology."}
            </p>
            <Link to="/contact" className="btn btn-white btn-sm" style={{ marginTop: 8, alignSelf: 'flex-start' }}>
              Talk to Us <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-label section-label-blue">What We Do</div>
            <h2 className="section-title">{d.whatWeDoHeading ?? `What ${d.name} Covers`}</h2>
            {d.whatWeDoSub && <p className="section-subtitle">{d.whatWeDoSub}</p>}
          </div>
          <div className="grid-3">
            {d.whatWeDo.map(w => (
              <div key={w.title} className="card">
                <div className={`icon-box icon-box-${w.color ?? 'blue'}`} style={{ marginBottom: 14 }}>
                  <w.icon size={21} />
                </div>
                <h3 className="sp-card-title">{w.title}</h3>
                <p className="sp-card-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Delivery approach + Who it's for ── */}
      <section className="section section-alt">
        <div className="container sp-delivery-section">
          {/* Delivery steps */}
          <div>
            <div className="section-label section-label-green">How We Deliver</div>
            <h2 className="section-title">{d.deliveryHeading ?? 'Our Delivery Approach'}</h2>
            <div className="sp-steps">
              {d.deliverySteps.map((step, i) => (
                <div key={i} className="sp-step">
                  <div className="sp-step__num">{step.number}</div>
                  <div className="sp-step__body">
                    <div className="sp-step__title">{step.title}</div>
                    <div className="sp-step__desc">{step.desc}</div>
                  </div>
                  {i < d.deliverySteps.length - 1 && (
                    <div className="sp-step__connector" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Who it's for */}
          <div className="sp-for-card">
            <div className="sp-for-card__header">
              <Users size={17} />
              <span>{d.forHeading ?? 'Who This Is For'}</span>
            </div>
            {d.forIntro && <p className="sp-for-card__intro">{d.forIntro}</p>}
            <ul className="sp-for-list">
              {d.forList.map((item, i) => (
                <li key={i}>
                  <CheckCircle2 size={14} color="var(--green)" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-green btn-sm"
              style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related Resources & Links ── */}
      <section className="section">
        <div className="container">
          <div className="sp-related">
            <div className="sp-related__resources">
              <div className="section-label section-label-blue">Further Reading</div>
              <h2 className="section-title" style={{ maxWidth: 420, fontSize: '1.4rem' }}>
                Related Guides &amp; Articles
              </h2>
              <div className="sp-resource-list">
                {d.relatedResources.map(r => (
                  <Link key={r.path} to={r.path} className="sp-resource-item">
                    <div>
                      <div className="sp-resource-item__cat">{r.category}</div>
                      <div className="sp-resource-item__title">{r.title}</div>
                    </div>
                    <ChevronRight size={16} />
                  </Link>
                ))}
              </div>
            </div>
            <div className="sp-related__links">
              <div className="section-label">Related Services &amp; Pages</div>
              <div className="sp-link-list">
                {d.relatedLinks.map(l => (
                  <Link key={l.to} to={l.to}
                    className={`btn btn-${l.variant ?? 'secondary'}`}
                    style={{ width: '100%', justifyContent: 'space-between' }}>
                    {l.label} <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        headline={d.ctaHeadline ?? `Ready to Get Started With ${d.name}?`}
        subtext={d.ctaSubtext ?? "Book a free consultation and we'll discuss exactly what your business needs."}
        primaryLabel="Book a Consultation"
        primaryTo="/contact"
        secondaryLabel="View All Services"
        secondaryTo="/services"
      />
    </div>
  )
}
