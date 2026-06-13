import { Link } from 'react-router-dom'
import {
  Layers, Cpu, Calculator, ShoppingCart, GraduationCap,
  Activity, Sprout, BookOpen, CheckCircle2, ArrowRight,
  Search, GitMerge, Database, Users, Monitor, TrendingUp
} from 'lucide-react'
import CTASection from '../components/CTASection'
import './Solutions.css'
import PageMeta from '../components/PageMeta'

// ── Solution categories ──────────────────────────────────────────────────────

const solutions = [
  {
    id: 'operational-control',
    color: 'blue',
    icon: Layers,
    label: 'Operational Control',
    heading: 'Bring Structure, Accountability, and Visibility to Your Operations',
    body: 'Many growing businesses reach a point where the combination of informal processes, verbal approvals, and disconnected tools is no longer sufficient. Work is being done — but there is no clear record of who approved what, what the current state of an order or request is, or where a branch or team stands at any given moment.\n\nOperational control means having defined processes, structured workflows, clear roles, and the visibility to see what is happening across your organisation without having to ask several people and wait for a compiled report.',
    bullets: [
      'Defined, documented business processes for every critical workflow',
      'Approval chains that are enforced by the system, not managed informally',
      'Role-based access so every team member sees what they need to',
      'Branch and department visibility from a single management view',
      'Audit trail on every transaction — who did what, and when',
    ],
    links: [
      { label: 'Business Process Optimization Guide', to: '/resources/business-process-optimization', variant: 'secondary' },
      { label: 'ERP Implementation Service',          to: '/services/erp-implementation',              variant: 'primary'   },
    ],
  },
  {
    id: 'erp-systems',
    color: 'green',
    icon: Cpu,
    label: 'ERP & Business Systems',
    heading: 'Move From Spreadsheets to a Connected, Structured ERP System',
    body: 'An ERP system connects the parts of a business that are currently managed separately — sales, purchasing, inventory, accounting, HR, and reporting — into a single platform where every transaction flows from one module to the next without manual re-entry.\n\nFor a growing business, the value of ERP is not complexity — it is clarity. Every transaction is recorded once. Every report is generated from the same data. Every approval follows the same workflow. Management visibility is available in real time, not two weeks after month end.',
    bullets: [
      'Sales orders, delivery, and invoicing in a connected workflow',
      'Purchase orders, goods receipt, and supplier payment tracking',
      'Real-time inventory levels across all warehouses and locations',
      'Accounting entries generated automatically from operational transactions',
      'Management dashboards and reports available from live data',
    ],
    links: [
      { label: 'ERP Implementation Checklist',  to: '/resources/erp-implementation-checklist', variant: 'secondary' },
      { label: 'ERP Implementation Service',    to: '/services/erp-implementation',             variant: 'primary'   },
    ],
  },
  {
    id: 'accounting',
    color: 'blue',
    icon: Calculator,
    label: 'Accounting & Financial Visibility',
    heading: 'Structured Financial Records, Reporting, and Cash Control',
    body: 'Most businesses do not have reliable financial information when they need it. The profit and loss is only available after the accountant spends a week compiling data. Cash flow is managed by checking the bank balance. VAT filing is a reconstruction exercise.\n\nStructured accounting means financial records that are accurate, current, and connected to daily operations — so management can see exactly where the business stands, not where it was last month.',
    bullets: [
      'Chart of accounts designed for your business type and reporting needs',
      'Sales and purchase accounting connected to operational transactions',
      'Cash and bank control with bank reconciliation workflow',
      'Receivables and payables aging — visible and managed proactively',
      'Monthly P&L, balance sheet, and management reports from live data',
    ],
    links: [
      { label: 'Accounting Control Guide',    to: '/resources/accounting-control-for-smes', variant: 'secondary' },
      { label: 'Accounting Solutions Service',to: '/services/accounting-solutions',          variant: 'primary'   },
    ],
  },
  {
    id: 'retail',
    color: 'green',
    icon: ShoppingCart,
    label: 'Retail & Sales Automation',
    heading: 'POS Workflows, Inventory Control, and Sales Visibility Across Branches',
    body: 'A retail business that does not connect its POS to its stock records and reporting is managing its most critical information — sales, inventory, and cash — through systems that are never fully reconciled. The most-selling products are unknown without a spreadsheet. Stock variances are discovered weeks after they occur. Branch performance requires manual compilation.\n\nRetail automation connects every sale to a stock deduction, every payment to a reconciliation record, and every branch to a single management view.',
    bullets: [
      'POS workflow configured for your specific retail operation',
      'Real-time stock levels — deducted automatically at point of sale',
      'Multi-branch visibility with branch-level and consolidated reports',
      'Payment method tracking: cash, card, transfer — reconciled per session',
      'Pricing and promotions enforced centrally across all cashiers and branches',
    ],
    links: [
      { label: 'Retail Sales Automation Guide',   to: '/resources/retail-sales-automation',       variant: 'secondary' },
      { label: 'Retail Sales Automation Service', to: '/services/retail-sales-automation',         variant: 'primary'   },
    ],
  },
  {
    id: 'education',
    color: 'blue',
    icon: GraduationCap,
    label: 'Education & CBT Systems',
    heading: 'Connected Academic Records, CBT Exams, and School Operations',
    body: 'A school that manages student records, fee payments, exam schedules, and results in separate systems is carrying administrative overhead that grows with every academic session. Results contain transcription errors. Fee clearance and exam access are not automatically linked. Management has no visibility into academic performance without manual compilation.\n\nEduEdge connects every part of the academic workflow — from student registration to CBT exam delivery, result synchronization, and school reporting — in a single connected platform.',
    bullets: [
      'Student, guardian, and academic records in one retrievable profile',
      'CBT question bank management with randomisation and auto-grading',
      'Exam delivery, marking, and result synchronization without manual re-entry',
      'Fee management linked to exam clearance workflow',
      'School analytics and performance dashboards for management',
    ],
    links: [
      { label: 'School Management & CBT Guide', to: '/resources/school-management-cbt', variant: 'secondary' },
      { label: 'Explore EduEdge',               to: '/products/eduedge',                variant: 'primary'   },
    ],
  },
  {
    id: 'healthcare',
    color: 'green',
    icon: Activity,
    label: 'Healthcare & Clinic Operations',
    heading: 'Patient Records, Appointments, Billing, and Clinical Workflows',
    body: 'A clinic managing patient history in paper folders, appointments in a diary, and billing from handwritten notes is operating with information gaps that affect both the quality of care and the financial health of the facility. Patient records are not retrievable quickly. Charges are missed at billing. Drug stock is unknown between manual counts.\n\nClinicEdge connects every part of the clinical and administrative workflow — from patient registration and appointment scheduling through consultation, pharmacy, billing, and management reporting.',
    bullets: [
      'Patient profiles with full medical history, allergies, and visit records',
      'Appointment scheduling with attendance tracking and reminders',
      'Consultation records — clinical notes, diagnosis, and treatment plans',
      'Billing consolidated from consultation, pharmacy, and diagnostics',
      'Drug inventory linked to prescription — stock always current',
    ],
    links: [
      { label: 'Clinic Management System Guide', to: '/resources/clinic-management-system', variant: 'secondary' },
      { label: 'Explore ClinicEdge',             to: '/products/clinicedge',                variant: 'primary'   },
    ],
  },
  {
    id: 'agriculture',
    color: 'blue',
    icon: Sprout,
    label: 'Agriculture & Agribusiness Operations',
    heading: 'Farm Records, Inputs, Production, Procurement, and Payments',
    body: 'An agribusiness that manages input distribution, farmer payments, production records, and aggregation across handwritten books and separate spreadsheets is carrying operational risk at every level. Input costs are not tracked against yields. Farmer payments cannot be reconciled against produce received. Management cannot see whether the season is profitable until weeks after it closes.\n\nAgricEdge connects farm records, input distribution, production tracking, aggregation, and farmer payment processing in a single platform — so management always has a current operational picture.',
    bullets: [
      'Farm and field records linked to farmer profiles and seasonal operations',
      'Input distribution tracked per farmer with automatic stock deduction',
      'Produce intake at aggregation points linked to farmer payment accounts',
      'Farmer payment computation after input cost deductions — auditable and clear',
      'Season-end reports: input vs yield, procurement volumes, payment summaries',
    ],
    links: [
      { label: 'Agriculture Management Guide', to: '/resources/agriculture-management-system', variant: 'secondary' },
      { label: 'Explore AgricEdge',            to: '/products/agricedge',                      variant: 'primary'   },
    ],
  },
  {
    id: 'training',
    color: 'green',
    icon: BookOpen,
    label: 'Training & System Adoption',
    heading: 'Systems That Get Used — Through Role-Based Training and Ongoing Support',
    body: 'The most common reason a business system fails to deliver its expected value is not a technical failure — it is an adoption failure. The system is configured, go-live happens, and three months later staff are back to spreadsheets for half their work. Training was treated as a single event rather than a structured programme designed to change how people work.\n\nProcessEdge delivers role-based training, practical process documentation, and post-go-live support that keeps the system working as the business evolves.',
    bullets: [
      'Role-based training tracks — each user trained on what their role requires',
      'Process documentation written for your specific system configuration',
      'Go-live support through the critical first weeks',
      'Post-implementation support retainers for ongoing questions and changes',
      'Adoption review at 30 and 90 days to identify and close gaps',
    ],
    links: [
      { label: 'Training & Adoption Guide',   to: '/resources/software-training-and-adoption', variant: 'secondary' },
      { label: 'Training & Support Service',  to: '/services/training-support',                variant: 'primary'   },
    ],
  },
]

// ── Approach steps ────────────────────────────────────────────────────────────

const steps = [
  { icon: Search,    num: '01', title: 'Understand Current Operations',  desc: 'We begin with discovery — understanding how your business actually works before recommending or configuring anything.' },
  { icon: GitMerge,  num: '02', title: 'Map Workflows & Processes',      desc: 'Every critical workflow is documented — with the steps, approvals, decisions, and expected outputs clearly defined.' },
  { icon: Database,  num: '03', title: 'Structure Data & Roles',         desc: 'Master data is cleaned and structured. User roles, permissions, and access levels are defined before configuration begins.' },
  { icon: Monitor,   num: '04', title: 'Configure Systems',              desc: 'The system is configured to reflect your documented processes — modules, workflows, reports, and print formats.' },
  { icon: Users,     num: '05', title: 'Train Users',                    desc: 'Role-based training is delivered with practical exercises, process guides, and sufficient repetition to build genuine competence.' },
  { icon: TrendingUp,num: '06', title: 'Support Adoption',               desc: 'We stay with your team through go-live and the first 90 days — resolving issues before workarounds take hold.' },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Solutions() {
  return (
    <>
        <PageMeta
        title="Solutions — Operational Control, ERP, Accounting, Retail, Education & More"
        description="ProcessEdge solutions for operational control, ERP implementation, accounting, retail automation, education, healthcare, agriculture, and training across Nigerian businesses."
        path="/solutions"
      />
      <div style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Solutions</div>
          <h1>Solutions for Operational Control, Automation, and Business Visibility</h1>
          <p>
            ProcessEdge helps organizations move from scattered tools, manual records, and unclear
            workflows to structured systems that improve control, accountability, reporting, and growth.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' as const }}>
            <Link to="/contact"  className="btn btn-primary btn-lg">Book a Consultation <ArrowRight size={15} /></Link>
            <Link to="/products" className="btn btn-hero-ghost btn-lg">Explore Products</Link>
          </div>
        </div>
      </section>

      {/* Solution categories */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="section-label section-label-blue">What We Solve</div>
            <h2 className="section-title">The Business Challenges ProcessEdge Addresses</h2>
            <p className="section-subtitle">
              Each solution area covers a specific set of operational problems — with the
              products, services, and resources that address them.
            </p>
          </div>

          <div className="sol-grid">
            {solutions.map(s => (
              <div key={s.id} className={`sol-card sol-card--${s.color}`}>
                {/* Header */}
                <div className="sol-card__header">
                  <div className={`sol-card__icon sol-card__icon--${s.color}`}>
                    <s.icon size={22} />
                  </div>
                  <div>
                    <div className={`sol-card__label sol-card__label--${s.color}`}>{s.label}</div>
                    <h3 className="sol-card__heading">{s.heading}</h3>
                  </div>
                </div>

                {/* Body */}
                <div className="sol-card__body">
                  {s.body.split('\n\n').map((para, i) => (
                    <p key={i} className="sol-card__para">{para}</p>
                  ))}
                  <ul className="sol-card__bullets">
                    {s.bullets.map(b => (
                      <li key={b}>
                        <CheckCircle2 size={14} color="var(--green)" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="sol-card__links">
                  {s.links.map(l => (
                    <Link key={l.to} to={l.to}
                      className={`btn btn-${l.variant === 'primary' ? (s.color === 'green' ? 'green' : 'primary') : 'secondary'} btn-sm`}>
                      {l.label} <ArrowRight size={13} />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 52 }}>
            <div className="section-label section-label-green">Our Approach</div>
            <h2 className="section-title">How ProcessEdge Delivers Solutions</h2>
            <p className="section-subtitle">
              Every engagement follows the same structured path — from understanding your operation
              to supporting adoption after go-live.
            </p>
          </div>
          <div className="sol-steps">
            {steps.map((step, i) => (
              <div key={step.num} className="sol-step">
                <div className="sol-step__icon">
                  <step.icon size={20} />
                </div>
                <div className="sol-step__num">{step.num}</div>
                <div className="sol-step__title">{step.title}</div>
                <p className="sol-step__desc">{step.desc}</p>
                {i < steps.length - 1 && <div className="sol-step__line" />}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Book a Free Consultation <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        headline="Not Sure Which Solution Fits?"
        subtext="Book a free consultation and we'll map the right combination of systems and services to your specific business challenge."
        primaryLabel="Book a Consultation"
        primaryTo="/contact"
        secondaryLabel="View All Products"
        secondaryTo="/products"
      />
    </div>
    </>
  )
}
