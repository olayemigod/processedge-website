import { Link } from 'react-router-dom'
import { Calculator, CheckCircle2, BookOpen, TrendingUp, FileText, CreditCard, BarChart2, Shield, ArrowRight } from 'lucide-react'
import CTASection from '../../components/CTASection'

const scope = [
  { icon: BookOpen, title: 'Bookkeeping & Transaction Recording', desc: 'Accurate, consistent recording of all financial transactions — sales, purchases, receipts, and payments.' },
  { icon: TrendingUp, title: 'Chart of Accounts Setup', desc: 'A well-structured chart of accounts tailored to your business model, industry, and reporting requirements.' },
  { icon: CreditCard, title: 'Receivables & Payables Management', desc: 'Track what customers owe you and what you owe suppliers. Ageing reports and reconciliation included.' },
  { icon: FileText, title: 'Financial Reporting', desc: 'Monthly P&L statements, balance sheets, cash flow statements, and management accounts you can rely on.' },
  { icon: Shield, title: 'Tax-Ready Records', desc: 'Organized records that make VAT, WHT, and income tax filing straightforward and audit-proof.' },
  { icon: BarChart2, title: 'ERP Accounting Setup', desc: 'Configure and optimize ERPNext accounting modules — periods, cost centres, multi-currency, and bank reconciliation.' },
]

export default function AccountingSolutions() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 48, height: 48, background: 'rgba(0,86,166,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calculator size={24} color="#7ec5ff" />
            </div>
            <div className="section-label page-hero-label">Service</div>
          </div>
          <h1>Accounting Solutions</h1>
          <p>Professional bookkeeping, chart of accounts setup, financial reporting, receivables/payables management, and tax-ready records — all on ERPNext.</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
            <Link to="/contact" className="btn cta-section__secondary btn-lg" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.4)' }}>Request a Quote</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 52 }}>
            <div className="section-label section-label-blue">Scope of Work</div>
            <h2 className="section-title">What's Included</h2>
            <p className="section-subtitle">Accounting solutions designed to give you clean, reliable financial data — and reduce the stress of compliance and reporting.</p>
          </div>
          <div className="grid-3">
            {scope.map(s => (
              <div key={s.title} className="card">
                <div className="icon-box icon-box-blue" style={{ marginBottom: 16 }}><s.icon size={22} /></div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: 'center' }}>
            <div>
              <div className="section-label">Why It Matters</div>
              <h2 className="section-title">Make Confident Financial Decisions</h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 24 }}>
                Most business owners make financial decisions without reliable numbers. We fix that — giving you clean books, real-time reports, and accounts your auditors won't question.
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 28 }}>
                Our accounting setup is done on ERPNext, which means your records, reports, inventory, and sales data all live in one integrated system — not disconnected spreadsheets.
              </p>
              {['Clean, audit-ready books', 'Real-time financial dashboards', 'IFRS-aligned reporting', 'FIRS & LIRS tax compliance', 'Multi-currency support for importers/exporters'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', marginBottom: 10 }}>
                  <CheckCircle2 size={16} color="var(--green)" /><span>{item}</span>
                </div>
              ))}
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 24 }}>Talk to Us <ArrowRight size={14} /></Link>
            </div>
            <div style={{ background: 'var(--white)', borderRadius: 16, border: '1px solid var(--grey-border)', padding: 32 }}>
              <div style={{ fontFamily: 'Montserrat', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>Reports We Deliver</div>
              {[
                'Monthly Profit & Loss Statement',
                'Balance Sheet',
                'Cash Flow Statement',
                'Accounts Receivable Ageing',
                'Accounts Payable Ageing',
                'Bank Reconciliation Statement',
                'VAT Returns Summary',
                'Withholding Tax Schedule',
                'Management Accounts Pack',
                'Custom KPI Dashboards',
              ].map((r, i) => (
                <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderBottom: i < 9 ? '1px solid var(--grey-border)' : 'none', fontSize: '0.86rem', color: 'var(--text-body)' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />{r}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Get Your Books in Order" subtext="Let us set up clean, reliable accounting on ERPNext so you always know where your business stands." primaryLabel="Get Started" secondaryLabel="View All Services" secondaryTo="/services" />
    </div>
  )
}
