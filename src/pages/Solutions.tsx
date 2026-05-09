import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import { CheckCircle2, Layers, BarChart2, Zap, ShieldCheck } from 'lucide-react'

const solutions = [
  {
    title: 'ERP for Growing Businesses',
    desc: 'Replace spreadsheets and manual tracking with a fully integrated ERPNext system — accounting, inventory, sales, HR, and reporting in one place.',
    icon: Layers,
    bullets: ['Unified business data', 'Real-time dashboards', 'Automated workflows', 'Multi-user, role-based access'],
  },
  {
    title: 'School & Education Management',
    desc: 'From admissions to CBT exams and result management — EduEdge brings order to every academic operation.',
    icon: BarChart2,
    bullets: ['CBT exam delivery', 'Academic records', 'Fee management', 'Parent and student portals'],
  },
  {
    title: 'Retail & POS Automation',
    desc: 'Automate your point-of-sale, inventory, and sales reporting so your retail operation runs without manual intervention.',
    icon: Zap,
    bullets: ['POS system setup', 'Inventory control', 'Branch management', 'Sales analytics'],
  },
  {
    title: 'Finance & Accounting Clarity',
    desc: 'Get clean books, reliable financial reports, and tax-ready records — without the chaos of disconnected spreadsheets.',
    icon: ShieldCheck,
    bullets: ['Chart of accounts setup', 'Monthly P&L and balance sheet', 'Receivables & payables tracking', 'VAT and WHT compliance'],
  },
]

export default function Solutions() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Solutions</div>
          <h1>Solutions for Every Business Challenge</h1>
          <p>Whether you need a full ERP deployment, education management, retail automation, or financial clarity — ProcessEdge has a structured solution for your specific need.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 28 }}>
            {solutions.map(s => (
              <div key={s.title} className="card">
                <div className="icon-box icon-box-blue" style={{ marginBottom: 16 }}><s.icon size={22} /></div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: 16 }}>{s.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {s.bullets.map(b => (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: 'var(--text-body)' }}>
                      <CheckCircle2 size={14} color="var(--green)" />{b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 24 }}>
              More solution guides are being added. Explore our products and services for detailed information.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' as const }}>
              <Link to="/products"  className="btn btn-primary">View Products</Link>
              <Link to="/services"  className="btn btn-secondary">View Services</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Not Sure Where to Start?"
        subtext="Book a free consultation and we'll map the right solution to your business challenge."
        primaryLabel="Book a Consultation"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </div>
  )
}
