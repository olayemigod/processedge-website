import { Link } from 'react-router-dom'
import { ShoppingCart, CheckCircle2, ShieldAlert, Landmark, Layers, Users, ArrowRight, ClipboardCheck } from 'lucide-react'
import PageMeta from '../../components/PageMeta'
import CTASection from '../../components/CTASection'
import './RetailEdge.css'

export default function RetailEdge() {
  const problemPoints = [
    'Fake alerts and manual cashier payment verification errors',
    'Cash drawer imbalances and undocumented till adjustments',
    'Reconciliation delays due to manual cashier log reviews',
    'Multi-branch price discrepancies and inventory mismatch',
    'Lack of real-time visibility into actual bank-credited cash sales'
  ]

  const workflowSteps = [
    { title: 'POS Transaction', desc: 'Cashier rings up products and generates checkout invoices.', icon: ShoppingCart },
    { title: 'Payment Verification', desc: 'Instant confirmation of incoming bank transfers to block fraud.', icon: ShieldAlert },
    { title: 'Shift Till Auditing', desc: 'Cashier closes shift; system logs cash counts against POS logs.', icon: ClipboardCheck },
    { title: 'Bank Matching', desc: 'Automatic matching of POS bank receipts to live statement ledger.', icon: Landmark },
    { title: 'Executive Insight', desc: 'Management reviews verified margins and audited branch performance.', icon: Layers }
  ]

  const features = [
    {
      title: 'Branch-Aware POS Workflows',
      desc: 'Optimised checkout workflows that run smoothly on standard computers. Managers can configure prices, discounts, and item profiles across multiple stores from one central dashboard.',
      icon: ShoppingCart,
      color: 'blue' as const
    },
    {
      title: 'Cashier Till & Shift Audits',
      desc: 'Eliminate till leakage with structured cashier open-and-close sequences. Every cash count, drawer drop, and till adjustment requires manager authorization and creates an audit trail.',
      icon: ClipboardCheck,
      color: 'green' as const
    },
    {
      title: 'Instant Bank Transfer Matching',
      desc: 'Enable secure, cashier-level bank transfer verification. System catches alerts and matches them directly to receipts, reducing check-out friction and ending cashier "fake alert" fraud.',
      icon: Landmark,
      color: 'blue' as const
    },
    {
      title: 'Auditable Cashier Expenses',
      desc: 'Manage store expenses from POS tills without scrambling accounts. Allow cashiers to pay for local logistics or minor store repairs from the drawer, with required photo receipt uploads.',
      icon: ClipboardCheck,
      color: 'green' as const
    }
  ]

  const implementationStages = [
    { number: '01', title: 'Operational Process Audit', desc: 'We review your check-out sequences, cash-handling processes, and bank reconciliation loops to map control gaps.' },
    { number: '02', title: 'System Configuration & Sync', desc: 'Configure RetailEdge with store structures, item warehouses, chart of accounts, cashier accounts, and pricing matrices.' },
    { number: '03', title: 'Manager & Cashier Training', desc: 'Hands-on practice sessions for cashiers on checkout workflows and managers on shift close, cash counts, and auditing.' },
    { number: '04', title: 'Go-Live & On-Site Hypercare', desc: 'We deploy to your branches and remain on-site during initial cashier shifts to ensure system adoption and operational stability.' }
  ]

  return (
    <>
      <PageMeta
        title="RetailEdge — Retail POS Control, Audit Readiness & Transfer Verification"
        description="RetailEdge provides retail operations and POS till control for Nigerian businesses needing payment verification, cashier expense auditing, and statement matching."
        path="/products/retailedge"
      />
      
      <div className="retail-page" style={{ paddingTop: 72 }}>
        {/* Hero Section */}
        <section className="rt-hero">
          <div className="container rt-hero__inner">
            <div className="rt-hero__content">
              <div className="rt-hero__badge-row">
                <div className="rt-hero__icon">
                  <ShoppingCart size={24} color="#4de8a0" />
                </div>
                <span className="rt-hero__badge">Active Development</span>
              </div>
              <h1 className="rt-hero__title">RetailEdge</h1>
              <p className="rt-hero__tagline">Retail POS Control &amp; Sales Audit Integrity</p>
              <p className="rt-hero__desc">
                RetailEdge helps retail businesses gain absolute control over store operations. 
                Configure secure cashier checkout workflows, verify bank transfers instantly to block fraud, 
                enforce till audit sequences, and reconcile POS invoices directly to bank statement deposits.
              </p>
              <div className="rt-hero__actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Request Access <ArrowRight size={15} />
                </Link>
                <a href="#features" className="btn btn-hero-ghost btn-lg">
                  Explore Features
                </a>
              </div>
            </div>
            
            <div className="rt-hero__visual">
              <div className="rt-hero__image-wrap">
                <img 
                  src="/retail_edge_hero.png" 
                  alt="Modern retail manager smiling at checkout counter with POS terminal" 
                  className="rt-hero__image"
                />
                {/* Floating Operations Indicator */}
                <div className="rt-hero__overlay-card">
                  <div className="rt-hero__overlay-header">
                    <span className="rt-hero__overlay-dot" />
                    <span>Store Audit Status</span>
                  </div>
                  <div className="rt-hero__overlay-list">
                    <div className="rt-hero__overlay-item">
                      <span className="rt-hero__overlay-label">Lagos Branch:</span>
                      <span className="rt-hero__overlay-val rt-hero__overlay-val--success">Audited &amp; Reconciled</span>
                    </div>
                    <div className="rt-hero__overlay-item">
                      <span className="rt-hero__overlay-label">Abuja Branch:</span>
                      <span className="rt-hero__overlay-val rt-hero__overlay-val--success">Audited &amp; Reconciled</span>
                    </div>
                    <div className="rt-hero__overlay-item">
                      <span className="rt-hero__overlay-label">POS Gateway:</span>
                      <span className="rt-hero__overlay-val">Online</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="section section-alt">
          <div className="container rt-problem">
            <div className="rt-problem__left">
              <div className="section-label section-label-green">The Retail Challenge</div>
              <h2 className="section-title">Why Store Operations Slip Out of Control</h2>
              <p className="rt-para">
                For most retailers, the check-out counter is the point of highest operational risk. 
                Cashiers are pressured to process queues quickly, making it easy to accept unverified bank 
                transfers, misplace cash receipts, or document minor store expenses informally.
              </p>
              <p className="rt-para">
                Without a branch-aware system, management only spots till discrepancies or missing revenue 
                weeks later during manual account reviews. When audit records do not match physical bank statement deposits, 
                identifying which cashier or branch is responsible becomes a guessing game.
              </p>
              <ul className="rt-checklist">
                {problemPoints.map((pt, i) => (
                  <li key={i}>
                    <ShieldAlert size={16} className="text-green" style={{ minWidth: '16px', marginTop: '2px' }} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rt-problem__right">
              <div className="rt-value-card">
                <div className="rt-value-card__label">The RetailEdge Approach</div>
                <p className="rt-value-card__body">
                  We believe store teams shouldn't be slowed down by complex controls. RetailEdge provides cashiers 
                  with a fast, simple checkout layout, while locking down background controls—such as till balance counts, 
                  receipt matching, and branch price management—so store owners have real-time integrity checks.
                </p>
                <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginTop: 8, alignSelf: 'flex-start' }}>
                  Discuss RetailEdge <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 52 }}>
              <div className="section-label section-label-blue">Sales Integrity Loop</div>
              <h2 className="section-title">The RetailEdge Sales-to-Audit Workflow</h2>
              <p className="section-subtitle">
                Every sale follows a secure path from the barcode scan to verified bank statement reconciliation.
              </p>
            </div>
            
            <div className="rt-workflow">
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="rt-workflow__node">
                  <div className="rt-workflow__icon-box">
                    <step.icon size={22} />
                    <span className="rt-workflow__step-number">{idx + 1}</span>
                  </div>
                  <h3 className="rt-workflow__node-title">{step.title}</h3>
                  <p className="rt-workflow__node-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section id="features" className="section section-alt">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 48 }}>
              <div className="section-label section-label-green">Capabilities</div>
              <h2 className="section-title">Built for Real Store Operations</h2>
              <p className="section-subtitle">
                Key modules configured to enforce cashier accountability without breaking transaction speed.
              </p>
            </div>
            
            <div className="grid-2">
              {features.map((feat, i) => (
                <div key={i} className="rt-feat-card">
                  <div className={`rt-feat-card__icon rt-feat-card__icon--${feat.color}`}>
                    <feat.icon size={22} />
                  </div>
                  <div className="rt-feat-card__body">
                    <h3 className="rt-feat-card__title">{feat.title}</h3>
                    <p className="rt-feat-card__desc">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It Is For Section */}
        <section className="section">
          <div className="container rt-for__inner">
            <div className="rt-for__text">
              <div className="section-label section-label-blue">Audience</div>
              <h2 className="section-title">Designed for Growing Retailers</h2>
              <p className="rt-para">
                RetailEdge scales with businesses migrating from standalone paper receipts or basic bookkeeping spreadsheets 
                to structured, multi-branch operations.
              </p>
              <div className="rt-for__grid">
                {[
                  { label: 'Supermarkets & Grocery Stores', desc: 'Enforce cashier shift auditing and till close balances.' },
                  { label: 'Pharmacies & Chemist Shops', desc: 'Track batches, expirations, and POS prescription billing.' },
                  { label: 'Boutiques & Retail Outlets', desc: 'Manage central pricing and branch stock distributions.' },
                  { label: 'Multi-Branch Retail Chains', desc: 'Consolidate multiple store ledger balances and audit records.' }
                ].map((item, idx) => (
                  <div key={idx} className="rt-for__item">
                    <CheckCircle2 size={16} className="text-blue" style={{ minWidth: '16px', marginTop: '2px' }} />
                    <div>
                      <div className="rt-for__item-label">{item.label}</div>
                      <div className="rt-for__item-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rt-for__panel">
              <div className="rt-for__panel-card">
                <Users size={24} className="text-green" style={{ marginBottom: 14 }} />
                <h3>Structured Cashier Control</h3>
                <p>
                  Ensure cashiers only perform checkout actions, while managers approve adjustments, refunds, and till closures.
                </p>
                <Link to="/contact" className="btn btn-green btn-sm" style={{ marginTop: 12, width: '100%', justifyContent: 'center' }}>
                  Register Interest
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="section section-alt">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 52 }}>
              <div className="section-label section-label-green">Delivery Method</div>
              <h2 className="section-title">How We Set Up RetailEdge</h2>
              <p className="section-subtitle">
                We manage the full rollout lifecycle to ensure your store managers and cashiers are comfortable.
              </p>
            </div>
            
            <div className="rt-stages">
              {implementationStages.map((stage, idx) => (
                <div key={idx} className="rt-stage-card">
                  <div className="rt-stage-card__num">{stage.number}</div>
                  <h3 className="rt-stage-card__title">{stage.title}</h3>
                  <p className="rt-stage-card__desc">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          headline="Ready to Secure Your Retail Operations?"
          subtext="Request access to the RetailEdge active development rollout program and see how we can bring control to your branches."
          primaryLabel="Discuss RetailEdge"
          primaryTo="/contact"
          secondaryLabel="View All Products"
          secondaryTo="/products"
        />
      </div>
    </>
  )
}
