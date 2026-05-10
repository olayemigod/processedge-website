import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Users } from 'lucide-react'
import CTASection from './CTASection'
import type { LucideIcon } from 'lucide-react'
import './ProductPageLayout.css'

// ── Types ──────────────────────────────────────────────────────────────────

export interface PPFeature {
  icon: LucideIcon
  title: string
  desc: string
  color?: 'blue' | 'green'
}

export interface PPModule {
  label: string
  color?: 'blue' | 'green'
}

export interface PPRelatedResource {
  title: string
  path: string
  category: string
}

export interface PPRelatedProduct {
  name: string
  desc: string
  path: string
}

export interface ProductPageData {
  // Hero
  name: string
  badge: string
  badgeVariant?: 'blue' | 'green' | 'platform'
  tagline: string
  heroDesc: string
  primaryCTA?: string
  secondaryCTA?: string
  secondaryTo?: string
  icon: LucideIcon
  iconColor?: string
  iconBg?: string

  // Problem
  problemHeading: string
  problemBody: string[]      // array of paragraphs
  problemPoints?: string[]   // bullet list

  // Features
  featuresHeading?: string
  featuresSubtext?: string
  features: PPFeature[]

  // Modules / workflow
  modulesHeading?: string
  modules: PPModule[]
  modulesNote?: string

  // Who it's for
  forHeading?: string
  forIntro?: string
  forList: string[]

  // ProcessEdge value
  valueHeading?: string
  valueBody?: string

  // Related resources
  relatedResources?: PPRelatedResource[]

  // Related products (sidebar — optional)
  relatedProducts?: PPRelatedProduct[]

  // CTA
  ctaHeadline?: string
  ctaSubtext?: string
}

// ── Component ──────────────────────────────────────────────────────────────

export default function ProductPageLayout({ d }: { d: ProductPageData }) {
  const Icon = d.icon

  const badgeBg: Record<string, string> = {
    blue:     'rgba(0,86,166,0.2)',
    green:    'rgba(28,156,93,0.18)',
    platform: 'rgba(0,86,166,0.2)',
  }
  const badgeColor: Record<string, string> = {
    blue:     '#7ec5ff',
    green:    '#4de8a0',
    platform: '#7ec5ff',
  }
  const bv = d.badgeVariant ?? 'blue'

  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── Hero ── */}
      <section className="pp-hero">
        <div className="container pp-hero__inner">
          <div className="pp-hero__left">
            <div className="pp-hero__badge-row">
              <div className="pp-hero__icon" style={{ background: d.iconBg ?? badgeBg[bv] }}>
                <Icon size={26} color={d.iconColor ?? badgeColor[bv]} />
              </div>
              <span className="pp-hero__badge" style={{ color: badgeColor[bv], borderColor: badgeColor[bv].replace('ff','40') }}>
                {d.badge}
              </span>
            </div>
            <h1 className="pp-hero__title">{d.name}</h1>
            <p className="pp-hero__tagline">{d.tagline}</p>
            <p className="pp-hero__desc">{d.heroDesc}</p>
            <div className="pp-hero__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                {d.primaryCTA ?? 'Book a Demo'} <ArrowRight size={15} />
              </Link>
              <Link
                to={d.secondaryTo ?? '/contact'}
                className="btn btn-hero-ghost btn-lg"
              >
                {d.secondaryCTA ?? 'Contact Us'}
              </Link>
            </div>
          </div>
          <div className="pp-hero__right">
            <div className="pp-hero__card">
              <div className="pp-hero__card-header">
                <div className="pp-hero__card-icon" style={{ background: 'rgba(255,255,255,0.12)' }}>
                  <Icon size={22} color="white" />
                </div>
                <div>
                  <div className="pp-hero__card-name">{d.name}</div>
                  <div className="pp-hero__card-sub">{d.tagline}</div>
                </div>
              </div>
              <div className="pp-hero__modules-preview">
                {d.modules.slice(0, 8).map((m, i) => (
                  <div key={i} className={`pp-hero__mod pp-hero__mod--${m.color ?? 'blue'}`}>
                    <span className="pp-hero__mod-dot" />
                    {m.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="section section-alt">
        <div className="container pp-problem">
          <div className="pp-problem__text">
            <div className="section-label section-label-green">The Problem</div>
            <h2 className="section-title">{d.problemHeading}</h2>
            {d.problemBody.map((p, i) => (
              <p key={i} className="pp-para">{p}</p>
            ))}
            {d.problemPoints && (
              <ul className="pp-checklist">
                {d.problemPoints.map((pt, i) => (
                  <li key={i}><CheckCircle2 size={15} color="var(--green)" />{pt}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="pp-problem__value">
            <div className="pp-value-card">
              <div className="pp-value-card__label">ProcessEdge Approach</div>
              <p className="pp-value-card__body">
                {d.valueBody ?? "We don't just deliver software. We help businesses gain control of their operations with structured systems, automated workflows, and business-ready technology."}
              </p>
              <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginTop: 8, alignSelf: 'flex-start' }}>
                Talk to Us <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-label section-label-blue">Features</div>
            <h2 className="section-title">{d.featuresHeading ?? `What ${d.name} Covers`}</h2>
            {d.featuresSubtext && <p className="section-subtitle">{d.featuresSubtext}</p>}
          </div>
          <div className="grid-3">
            {d.features.map(f => (
              <div key={f.title} className="card">
                <div className={`icon-box icon-box-${f.color ?? 'blue'}`} style={{ marginBottom: 14 }}>
                  <f.icon size={21} />
                </div>
                <h3 className="pp-feature-title">{f.title}</h3>
                <p className="pp-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workflow / Modules ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="pp-modules-section">
            <div className="pp-modules-text">
              <div className="section-label">Module Coverage</div>
              <h2 className="section-title">{d.modulesHeading ?? 'How It Supports Your Operations'}</h2>
              {d.modulesNote && <p className="pp-para" style={{ marginBottom: 24 }}>{d.modulesNote}</p>}
              <div className="pp-modules-grid">
                {d.modules.map((m, i) => (
                  <div key={i} className={`pp-module-chip pp-module-chip--${m.color ?? 'blue'}`}>
                    <span className="pp-module-chip__dot" />
                    {m.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Who it's for */}
            <div className="pp-for-card">
              <div className="pp-for-card__header">
                <Users size={18} />
                <span>{d.forHeading ?? 'Who This Is For'}</span>
              </div>
              {d.forIntro && <p className="pp-for-card__intro">{d.forIntro}</p>}
              <ul className="pp-for-list">
                {d.forList.map((item, i) => (
                  <li key={i}><CheckCircle2 size={14} color="var(--green)" />{item}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-green btn-sm" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Resources ── */}
      {d.relatedResources && d.relatedResources.length > 0 && (
        <section className="section">
          <div className="container">
            <div style={{ marginBottom: 32 }}>
              <div className="section-label section-label-green">Further Reading</div>
              <h2 className="section-title" style={{ maxWidth: 480 }}>Related Guides &amp; Articles</h2>
            </div>
            <div className="pp-resources-grid">
              {d.relatedResources.map(r => (
                <Link key={r.path} to={r.path} className="pp-resource-card">
                  <span className="pp-resource-card__cat">{r.category}</span>
                  <span className="pp-resource-card__title">{r.title}</span>
                  <span className="pp-resource-card__arrow"><ArrowRight size={15} /></span>
                </Link>
              ))}
              <Link to="/resources" className="pp-resource-card pp-resource-card--all">
                <span className="pp-resource-card__title">Browse all resources</span>
                <span className="pp-resource-card__arrow"><ArrowRight size={15} /></span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <CTASection
        headline={d.ctaHeadline ?? `Ready to See ${d.name} in Action?`}
        subtext={d.ctaSubtext ?? `Book a personalised demo and see how ${d.name} can bring structure, visibility, and operational control to your business.`}
        primaryLabel="Book a Demo"
        primaryTo="/contact"
        secondaryLabel="View All Products"
        secondaryTo="/products"
      />
    </div>
  )
}
