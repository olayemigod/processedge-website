import { Link } from 'react-router-dom'
import { GraduationCap, CheckCircle2, BookOpen, BarChart2, Bell, Users, Monitor, ArrowRight } from 'lucide-react'
import CTASection from '../../components/CTASection'

const features = [
  { icon: Monitor, title: 'Computer-Based Testing (CBT)', desc: 'Full CBT platform with timed exams, randomized questions, auto-grading, and instant result generation.' },
  { icon: BookOpen, title: 'Question Bank Management', desc: 'Organize questions by subject, class, difficulty, and topic. Import via spreadsheet or build inline.' },
  { icon: BarChart2, title: 'School Analytics & Dashboards', desc: 'Performance analytics per student, class, subject, and term. Management dashboards for instant visibility.' },
  { icon: Users, title: 'Student & Staff Portals', desc: 'Self-service portals for students to view results, timetables, and fees. Staff portals for attendance and marks.' },
  { icon: Bell, title: 'Notifications & Alerts', desc: 'SMS and email notifications to parents for results, fees, attendance, and school communications.' },
  { icon: GraduationCap, title: 'Result Sync & Reports', desc: 'Sync results from CBT to the main ERP automatically. Generate broadsheets, transcripts, and report cards.' },
]

export default function EduEdge() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 48, height: 48, background: 'rgba(0,86,166,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <GraduationCap size={24} color="#7ec5ff" />
            </div>
            <div className="section-label page-hero-label">Product</div>
          </div>
          <h1>EduEdge — School &amp; CBT Management</h1>
          <p>A comprehensive school intelligence platform built on ERPNext Education — with full CBT, question banks, portals, analytics, and dashboards.</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Request a Demo</Link>
            <Link to="/contact" className="btn cta-section__secondary btn-lg" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.4)' }}>Get a Quote</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 52 }}>
            <div className="section-label">Features</div>
            <h2 className="section-title">Everything Your School Needs</h2>
            <p className="section-subtitle">From CBT and result management to analytics and parent communication — EduEdge covers the full school management lifecycle.</p>
          </div>
          <div className="grid-3">
            {features.map(f => (
              <div key={f.title} className="card">
                <div className="icon-box icon-box-blue" style={{ marginBottom: 16 }}>
                  <f.icon size={22} />
                </div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
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
              <h2 className="section-title">Built for Nigerian Schools</h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 24 }}>
                EduEdge is designed for primary schools, secondary schools, and tertiary institutions operating in Nigeria. It handles the full academic cycle — from admission to graduation.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Primary and secondary schools', 'Exam prep and coaching centres', 'Tertiary institutions', 'Multi-branch school networks', 'Schools with existing ERPNext or Frappe setups'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color="var(--green)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 28 }}>
                Book a Demo <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ background: 'var(--white)', borderRadius: 16, border: '1px solid var(--grey-border)', padding: 32 }}>
              <div style={{ fontFamily: 'Montserrat', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>Module Overview</div>
              {['Academic Session & Term Setup', 'CBT Exam Engine', 'Question Bank (by subject/class)', 'Result Computation & Broadsheet', 'Student Portal & Parent Portal', 'SMS/Email Notification System', 'Attendance Tracking', 'Fee Collection & Billing', 'Timetable Management', 'School Analytics Dashboard'].map((m, i) => (
                <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderBottom: i < 9 ? '1px solid var(--grey-border)' : 'none', fontSize: '0.86rem', color: 'var(--text-body)' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Ready to Modernize Your School Operations?" subtext="Let's show you EduEdge in action with a personalized demo for your school." primaryLabel="Request a Demo" secondaryLabel="View All Products" secondaryTo="/products" />
    </div>
  )
}
