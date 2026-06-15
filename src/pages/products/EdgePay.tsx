import { Link } from 'react-router-dom'
import { CreditCard, ShieldCheck, Cpu, Code, Activity, Key, CalendarClock, ArrowRight } from 'lucide-react'
import PageMeta from '../../components/PageMeta'
import CTASection from '../../components/CTASection'
import './EdgePay.css'

export default function EdgePay() {
  const problemPoints = [
    'Confirming bank transfers and credit transactions without manual checkouts',
    'Handling multiple merchant channels and payment providers in one place',
    'Webhook failure recovery and transaction status mismatches',
    'Lack of structured API handoffs to connect payment statuses to business logic',
    'Insecure transaction integrity verification and payload manipulation'
  ]

  const workflowSteps = [
    { title: 'Payment Request', desc: 'Your business system requests a secure checkout token from EdgePay.', icon: CreditCard },
    { title: 'Smart Routing', desc: 'EdgePay channels transaction details to the configured bank or gateway.', icon: Cpu },
    { title: 'Authorization', desc: 'Customer completes secure payment authorization (OTP, transfer, pin).', icon: Key },
    { title: 'Webhook catch & verify', desc: 'EdgePay catches incoming provider webhooks and verifies cryptographically.', icon: ShieldCheck },
    { title: 'Business Handoff', desc: 'EdgePay triggers a verified transaction callback to update the business database.', icon: Activity }
  ]

  const features = [
    {
      title: 'Unified Transaction API',
      desc: 'Integrate a single interface for payment processing. Move between gateways, card networks, and bank transfer matching methods without changing your client implementation.',
      icon: Code,
      color: 'blue' as const
    },
    {
      title: 'Cryptographic Webhook Verification',
      desc: 'Guard your app against payload manipulation. EdgePay catches provider callbacks, verifies signature headers, and schedules automatic retries for failed business endpoints.',
      icon: ShieldCheck,
      color: 'green' as const
    },
    {
      title: 'Secure Handoff Handshake',
      desc: 'Verify the integrity of transaction status handoffs. Secure mutual hash exchanges confirm that status updates received by your client systems are authentic and uncompromised.',
      icon: Key,
      color: 'blue' as const
    },
    {
      title: 'Transaction Handoff Logs',
      desc: 'Review developer-friendly API and webhook logs. Quickly debug network delays, provider timeouts, and client response errors from one central dashboard.',
      icon: Activity,
      color: 'green' as const
    }
  ]

  const roadmapItems = [
    { stage: 'Phase 1', title: 'API Core & Webhook catchers', status: 'Completed', desc: 'Central API core logic, webhook catches, secure signature hashing, and database callback loggers.', active: false },
    { stage: 'Phase 2', title: 'Smart Gateway Routing', status: 'In Active Development', desc: 'Direct integrations with Nigerian payment gateways and automated bank account routing engines.', active: true },
    { stage: 'Phase 3', title: 'Developer Sandbox & Handoff Widgets', status: 'Planned for Q4 2026', desc: 'Testing sandbox keys, dummy payment mockups, and drop-in web checkout overlays.', active: false }
  ]

  return (
    <>
      <PageMeta
        title="EdgePay — Standalone Payment Orchestration & Verification Infrastructure"
        description="EdgePay provides secure, standalone payment orchestration, webhook verification, and status handoffs for apps and external businesses."
        path="/products/edgepay"
      />
      
      <div className="edgepay-page" style={{ paddingTop: 72 }}>
        {/* Hero Section */}
        <section className="ep-hero">
          <div className="container ep-hero__inner">
            <div className="ep-hero__content">
              <div className="ep-hero__badge-row">
                <div className="ep-hero__icon">
                  <CreditCard size={24} color="#7ec5ff" />
                </div>
                <span className="ep-hero__badge">In Development</span>
              </div>
              <h1 className="ep-hero__title">EdgePay</h1>
              <p className="ep-hero__tagline">Standalone Payment Orchestration Infrastructure</p>
              <p className="ep-hero__desc">
                EdgePay is a developer-focused, standalone payment orchestration layer designed to secure and simplify 
                payment flows. Enforce signature validation on webhooks, manage bank transfer verifications, 
                and handoff transaction statuses reliably to core business systems.
              </p>
              <div className="ep-hero__actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Discuss EdgePay <ArrowRight size={15} />
                </Link>
                <a href="#features" className="btn btn-hero-ghost btn-lg">
                  Explore Infrastructure
                </a>
              </div>
            </div>
            
            <div className="ep-hero__visual">
              <div className="ep-hero__image-wrap">
                <img 
                  src="/edge_pay_hero.png" 
                  alt="Fintech developer reviewing code on screen in a modern office setup" 
                  className="ep-hero__image"
                />
                {/* Floating Developer Dashboard Overlay */}
                <div className="ep-hero__overlay-card">
                  <div className="ep-hero__overlay-header">
                    <span className="ep-hero__overlay-dot" />
                    <span>API Logs — In Dev</span>
                  </div>
                  <div className="ep-hero__overlay-logs">
                    <div className="ep-hero__log-line">
                      <span className="ep-hero__log-tag ep-hero__log-tag--get">GET</span>
                      <span className="ep-hero__log-route">/v1/checkout/session</span>
                    </div>
                    <div className="ep-hero__log-line">
                      <span className="ep-hero__log-tag ep-hero__log-tag--post">POST</span>
                      <span className="ep-hero__log-route">/v1/webhooks/verify</span>
                    </div>
                    <div className="ep-hero__log-line">
                      <span className="ep-hero__log-tag ep-hero__log-tag--status">STATUS</span>
                      <span className="ep-hero__log-route">Handoff: Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="section section-alt">
          <div className="container ep-problem">
            <div className="ep-problem__left">
              <div className="section-label section-label-green">Fintech Challenges</div>
              <h2 className="section-title">The Friction of Payment Integrations</h2>
              <p className="ep-para">
                Modern business systems need to process payments, but connecting directly to multiple gateways 
                often leads to structural complications. Webhooks fail during provider downtime, double transactions occur, 
                and verifying that a transaction status is legitimate requires complex custom code.
              </p>
              <p className="ep-para">
                Most payment verification architectures are tightly coupled with specific business applications, 
                making it difficult to repurpose them for external clients or other vertical apps. EdgePay decouples 
                payments from the business logic, acting as an independent firewall and routing layer.
              </p>
              <ul className="ep-checklist">
                {problemPoints.map((pt, i) => (
                  <li key={i}>
                    <ShieldCheck size={16} className="text-green" style={{ minWidth: '16px', marginTop: '2px' }} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ep-problem__right">
              <div className="ep-value-card">
                <div className="ep-value-card__label">Standalone &amp; Decoupled</div>
                <p className="ep-value-card__body">
                  Unlike conventional app plugins, EdgePay operates as a standalone server application. 
                  It is not dependent on CoreEdge or any industry application. It stands alone—managing transactions 
                  for any external business client, Frappe app, or legacy system with full integration readiness.
                </p>
                <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginTop: 8, alignSelf: 'flex-start' }}>
                  Explore Integration <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 52 }}>
              <div className="section-label section-label-blue">Transaction Flow</div>
              <h2 className="section-title">The Handoff Verification Lifecycle</h2>
              <p className="section-subtitle">
                EdgePay handles routing, catches payment provider calls, and secures the status handoff.
              </p>
            </div>
            
            <div className="ep-workflow">
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="ep-workflow__node">
                  <div className="ep-workflow__icon-box">
                    <step.icon size={22} />
                    <span className="ep-workflow__step-number">{idx + 1}</span>
                  </div>
                  <h3 className="ep-workflow__node-title">{step.title}</h3>
                  <p className="ep-workflow__node-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section id="features" className="section section-alt">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 48 }}>
              <div className="section-label section-label-green">Security &amp; Hashing</div>
              <h2 className="section-title">Payment Verification Capabilities</h2>
              <p className="section-subtitle">
                Core infrastructure features designed to block webhook spoofing and guarantee callback delivery.
              </p>
            </div>
            
            <div className="grid-2">
              {features.map((feat, i) => (
                <div key={i} className="ep-feat-card">
                  <div className={`ep-feat-card__icon ep-feat-card__icon--${feat.color}`}>
                    <feat.icon size={22} />
                  </div>
                  <div className="ep-feat-card__body">
                    <h3 className="ep-feat-card__title">{feat.title}</h3>
                    <p className="ep-feat-card__desc">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap & Honesty Section */}
        <section className="section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 52 }}>
              <div className="section-label section-label-blue">Honest Roadmap</div>
              <h2 className="section-title">Development Roadmap &amp; Status</h2>
              <p className="section-subtitle">
                EdgePay is under active development. Here is the current progress and timeline for integrations.
              </p>
            </div>
            
            <div className="ep-roadmap">
              {roadmapItems.map((item, idx) => (
                <div key={idx} className={`ep-roadmap__card${item.active ? ' ep-roadmap__card--active' : ''}`}>
                  <div className="ep-roadmap__card-header">
                    <span className="ep-roadmap__card-stage">{item.stage}</span>
                    <span className={`ep-roadmap__card-status ep-roadmap__card-status--${item.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item.status}
                    </span>
                  </div>
                  <h3 className="ep-roadmap__card-title">{item.title}</h3>
                  <p className="ep-roadmap__card-desc">{item.desc}</p>
                  {item.active && (
                    <div className="ep-roadmap__current-indicator">
                      <CalendarClock size={14} /> <span>Active Phase</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          headline="Interested in Secure Payments Orchestration?"
          subtext="Register your interest for a sandbox beta walkthrough or consult on integrating EdgePay with your custom software."
          primaryLabel="Register Interest"
          primaryTo="/contact"
          secondaryLabel="View All Products"
          secondaryTo="/products"
        />
      </div>
    </>
  )
}
