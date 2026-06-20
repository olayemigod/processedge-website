import { Link } from 'react-router-dom'
import { Cpu, Layers, Bell, Shield, Zap, Link2, BarChart2, Settings, ArrowRight, CheckCircle2, Lock, Users, Globe } from 'lucide-react'
import PageMeta from '../../components/PageMeta'
import CTASection from '../../components/CTASection'
import './CoreEdge.css'

const capabilities = [
  {
    title: 'Identity & Access',
    desc: 'Shared authentication, role management, and session handling across every ProcessEdge product.',
    icon: Shield,
    color: 'blue' as const
  },
  {
    title: 'Branch Context',
    desc: 'Multi-branch awareness, location-scoped data isolation, and seamless branch switching for distributed teams.',
    icon: Globe,
    color: 'green' as const
  },
  {
    title: 'Subscriptions & Billing',
    desc: 'Subscription plan management, account lifecycle handling, and usage metering infrastructure.',
    icon: Settings,
    color: 'blue' as const
  },
  {
    title: 'Notification Wallet',
    desc: 'SMS credits, WhatsApp messaging, email delivery, and wallet top-up — managed as a shared platform service.',
    icon: Bell,
    color: 'green' as const
  },
  {
    title: 'Integration Layer',
    desc: 'Payment gateways, third-party API connectors, and webhook management for external service orchestration.',
    icon: Link2,
    color: 'blue' as const
  },
  {
    title: 'Analytics & Monitoring',
    desc: 'Platform health dashboards, usage analytics, and performance metrics across the entire product suite.',
    icon: BarChart2,
    color: 'green' as const
  }
]

const industryApps = [
  { name: 'RetailEdge', path: '/products/retailedge' },
  { name: 'VetEdge', path: '/products/vetedge' },
  { name: 'EduEdge', path: '/products/eduedge' },
  { name: '+ More', path: '/products' }
]

const platformServices = ['Identity', 'Notifications', 'Subscriptions', 'Integration', 'Analytics']

const governancePoints = [
  { icon: Lock, title: 'Audit Trail', desc: 'Every platform action is logged with timestamps, user context, and change history.' },
  { icon: Shield, title: 'Role-Based Access', desc: 'Granular permissions ensure users only access what their role requires.' },
  { icon: Layers, title: 'Data Isolation', desc: 'Branch-level and tenant-level data boundaries prevent cross-contamination.' },
  { icon: Zap, title: 'Secure API Access', desc: 'Token-authenticated API layer with rate limiting and request validation.' }
]

const controlFeatures = [
  'Centralised user provisioning',
  'Branch-level permission scoping',
  'API key lifecycle management',
  'Subscription enforcement rules',
  'Platform usage quotas',
  'Notification delivery audit logs'
]

export default function CoreEdge() {
  return (
    <>
      <PageMeta
        title="CoreEdge — Platform Foundation for ProcessEdge Products"
        description="CoreEdge is the shared platform layer powering every ProcessEdge product — providing identity, branch context, subscriptions, notifications, and integration services."
        path="/products/coreedge"
      />

      <div className="core-page" style={{ paddingTop: 72 }}>
        {/* Hero Section */}
        <section className="ce-hero">
          <div className="container ce-hero__inner">
            <div className="ce-hero__content">
              <div className="ce-hero__badge-row">
                <div className="ce-hero__icon">
                  <Cpu size={24} color="#7ec5ff" />
                </div>
                <span className="ce-hero__badge">Platform Foundation</span>
              </div>
              <h1 className="ce-hero__title">CoreEdge</h1>
              <p className="ce-hero__tagline">The Foundation Behind EdgeSuite</p>
              <p className="ce-hero__desc">
                CoreEdge is the shared platform layer that powers every ProcessEdge product.
                It provides identity, branch context, subscriptions, notifications, wallet credits,
                and administrative control — so each industry app can focus on what it does best.
              </p>
              <div className="ce-hero__actions">
                <Link to="/contact" className="btn btn-white btn-lg">
                  Talk to Us <ArrowRight size={15} />
                </Link>
                <Link to="/products" className="btn ce-hero-ghost btn-lg">
                  View Industry Products
                </Link>
              </div>
            </div>

            <div className="ce-hero__visual">
              <div className="ce-hero__image-wrap">
                <img
                  src="/coreedge-platform-hero.png"
                  alt="ProcessEdge platform architecture dashboard"
                  className="ce-hero__image"
                />
                <div className="ce-hero__overlay-card">
                  <div className="ce-hero__overlay-header">
                    <span className="ce-hero__overlay-dot" />
                    <span>Platform Status</span>
                  </div>
                  <div className="ce-hero__overlay-list">
                    <div className="ce-hero__overlay-item">
                      <span className="ce-hero__overlay-label">Active Products:</span>
                      <span className="ce-hero__overlay-val">4</span>
                    </div>
                    <div className="ce-hero__overlay-item">
                      <span className="ce-hero__overlay-label">Notification Wallet:</span>
                      <span className="ce-hero__overlay-val ce-hero__overlay-val--online">Online</span>
                    </div>
                    <div className="ce-hero__overlay-item">
                      <span className="ce-hero__overlay-label">API Layer:</span>
                      <span className="ce-hero__overlay-val ce-hero__overlay-val--online">Healthy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Capabilities Section */}
        <section className="section section-alt">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 52 }}>
              <div className="section-label section-label-blue">Platform Services</div>
              <h2 className="section-title">What CoreEdge Provides</h2>
              <p className="section-subtitle">
                The shared capabilities that power the ProcessEdge ecosystem.
              </p>
            </div>

            <div className="grid-3">
              {capabilities.map((cap, i) => (
                <div key={i} className="ce-cap-card">
                  <div className={`ce-cap-card__icon ce-cap-card__icon--${cap.color}`}>
                    <cap.icon size={22} />
                  </div>
                  <h3 className="ce-cap-card__title">{cap.title}</h3>
                  <p className="ce-cap-card__desc">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 52 }}>
              <div className="section-label section-label-blue">Architecture</div>
              <h2 className="section-title">How CoreEdge Powers the EdgeSuite</h2>
            </div>

            <div className="ce-architecture">
              <div className="ce-architecture__apps">
                {industryApps.map((app, i) => (
                  <Link key={i} to={app.path} className="ce-architecture__app-card">
                    <Layers size={18} />
                    <span>{app.name}</span>
                  </Link>
                ))}
              </div>

              <div className="ce-architecture__connector">
                <div className="ce-architecture__connector-line" />
                <span className="ce-architecture__connector-label">Powered by CoreEdge</span>
                <div className="ce-architecture__connector-line" />
              </div>

              <div className="ce-architecture__platform">
                <div className="ce-architecture__platform-header">
                  <Cpu size={18} />
                  <span>CoreEdge Platform Layer</span>
                </div>
                <div className="ce-architecture__services">
                  {platformServices.map((svc, i) => (
                    <span key={i} className="ce-architecture__service-tag">
                      <CheckCircle2 size={13} />
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="ce-architecture__text">
              <p>
                Every ProcessEdge industry product — RetailEdge, VetEdge, EduEdge, and future additions — is built
                on top of CoreEdge. Rather than each product implementing its own authentication, notifications,
                or billing logic, CoreEdge provides these as shared platform services.
              </p>
              <p>
                This means new products launch faster, platform-wide improvements reach every product simultaneously,
                and businesses using multiple ProcessEdge products benefit from a unified experience with consistent
                identity, branch context, and notification management.
              </p>
            </div>
          </div>
        </section>

        {/* Governance Section */}
        <section className="section section-alt">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 52 }}>
              <div className="section-label section-label-blue">Governance</div>
              <h2 className="section-title">Built for Control &amp; Compliance</h2>
            </div>

            <div className="ce-governance">
              <div className="ce-governance__left">
                <p className="ce-para">
                  CoreEdge is designed with enterprise-grade governance from the ground up. Every action
                  is auditable, every permission is explicit, and every data boundary is enforced at the
                  platform level — not left to individual products.
                </p>
                <div className="ce-governance__points">
                  {governancePoints.map((pt, i) => (
                    <div key={i} className="ce-governance__point">
                      <div className="ce-governance__point-icon">
                        <pt.icon size={18} />
                      </div>
                      <div>
                        <h4 className="ce-governance__point-title">{pt.title}</h4>
                        <p className="ce-governance__point-desc">{pt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ce-governance__right">
                <div className="ce-governance__panel">
                  <Users size={24} className="text-blue" style={{ marginBottom: 14 }} />
                  <h3>Platform Control</h3>
                  <p>Centralised tools for managing users, permissions, and platform resources across the entire ProcessEdge ecosystem.</p>
                  <ul className="ce-governance__control-list">
                    {controlFeatures.map((feat, i) => (
                      <li key={i}>
                        <CheckCircle2 size={14} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
                    Talk to Us <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          headline="Ready to Build on the ProcessEdge Platform?"
          subtext="Talk to us about your business requirements and we'll recommend the right combination of ProcessEdge products and platform services."
          primaryLabel="Talk to Us"
          primaryTo="/contact"
          secondaryLabel="View Industry Products"
          secondaryTo="/products"
          variant="dark"
        />
      </div>
    </>
  )
}
