import { Link } from 'react-router-dom'
import { Users, CheckCircle2, PiggyBank, FileText, BarChart2, Shield, DollarSign, ArrowRight } from 'lucide-react'
import CTASection from '../../components/CTASection'

const features = [
  { icon: Users,      title: 'Member Records & Profiles',      desc: 'Comprehensive member database with registration, KYC documents, account status, and full transaction history.' },
  { icon: PiggyBank,  title: 'Savings & Contributions',        desc: 'Track regular savings, special savings, share capital, and thrift contributions with automatic schedule processing.' },
  { icon: DollarSign, title: 'Loan Management & Approvals',    desc: 'Multi-stage loan workflow — application, guarantor assignment, committee approval, disbursement, and repayment tracking.' },
  { icon: FileText,   title: 'Financial Statements',           desc: 'Generate balance sheets, income statements, member statements, trial balance, and management reports on demand.' },
  { icon: Shield,     title: 'Approval Workflows',             desc: 'Configurable approval chains for loan applications, withdrawals, and contribution changes with full audit trail.' },
  { icon: BarChart2,  title: 'Reports & Analytics',            desc: 'Loan portfolio analysis, delinquency tracking, member growth trends, and dividend computation tools.' },
]

export default function CoopEdge() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 48, height: 48, background: 'rgba(28,156,93,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={24} color="#4de8a0" />
            </div>
            <div className="section-label page-hero-label">Product</div>
          </div>
          <h1>CoopEdge — Cooperative Management</h1>
          <p>
            End-to-end cooperative society management — member records, savings, loans,
            contributions, approvals, financial statements, and analytics in one system.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' as const }}>
            <Link to="/contact" className="btn btn-green btn-lg">Request a Demo</Link>
            <Link to="/contact" className="btn btn-secondary btn-lg" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.4)' }}>Get a Quote</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-label">Features</div>
            <h2 className="section-title">Full Cooperative Management</h2>
            <p className="section-subtitle">Designed for the real operational needs of savings, credit, and multipurpose cooperative societies in Nigeria.</p>
          </div>
          <div className="grid-3">
            {features.map(f => (
              <div key={f.title} className="card">
                <div className="icon-box icon-box-green" style={{ marginBottom: 16 }}><f.icon size={22} /></div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: 'center' }}>
            <div>
              <div className="section-label">Who It's For</div>
              <h2 className="section-title">For Cooperative Societies of All Sizes</h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 24 }}>
                CoopEdge is built for savings and credit cooperatives, multipurpose societies,
                staff cooperatives, and community-based financial organizations operating in Nigeria.
              </p>
              {[
                'Savings & credit cooperatives (SACCO)',
                'Staff cooperative societies',
                'Multipurpose cooperative unions',
                'Community savings groups',
                'Microfinance-linked cooperatives',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', marginBottom: 10 }}>
                  <CheckCircle2 size={16} color="var(--green)" /><span>{item}</span>
                </div>
              ))}
              <Link to="/contact" className="btn btn-green" style={{ marginTop: 24 }}>
                Book a Demo <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ background: 'var(--white)', borderRadius: 16, border: '1px solid var(--grey-border)', padding: 32 }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--text-muted)', marginBottom: 20 }}>Key Modules</div>
              {[
                'Member Registration & KYC',
                'Share Capital Management',
                'Monthly Savings Processing',
                'Loan Application & Approval',
                'Loan Disbursement & Repayment',
                'Guarantor Management',
                'Dividend Computation',
                'Member Portal & Self-service',
                'Financial Statements',
                'Audit Trail & Compliance Reports',
              ].map((m, i, arr) => (
                <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--grey-border)' : 'none', fontSize: '0.86rem', color: 'var(--text-body)' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }} />{m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Manage Your Cooperative Smarter"
        subtext="CoopEdge brings transparency, efficiency, and accountability to your cooperative operations."
        primaryLabel="Request a Demo"
        secondaryLabel="View All Products"
        secondaryTo="/products"
        variant="green"
      />
    </div>
  )
}
