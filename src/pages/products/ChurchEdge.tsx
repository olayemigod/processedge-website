import { Link } from 'react-router-dom'
import { Church, CheckCircle2, Users, Calendar, DollarSign, MapPin, BarChart2, Bell, BookOpen, ArrowRight } from 'lucide-react'
import CTASection from '../../components/CTASection'

const features = [
  { icon: Users,     title: 'Member Records',                 desc: 'Complete member database — profiles, contact details, membership class, baptism records, and family links.' },
  { icon: Bell,      title: 'First-timer Management',         desc: 'Capture first-time visitors, log their details, assign follow-up workers, and track conversion status.' },
  { icon: Users,     title: 'Convert & Follow-up Management', desc: 'Track new converts from commitment through discipleship — assigned workers, follow-up logs, and progress status.' },
  { icon: BookOpen,  title: 'Workers, Ministers & Pastors',   desc: 'Manage worker records, ministry assignments, ordination details, and pastor/minister profiles separately.' },
  { icon: MapPin,    title: 'Department Hierarchy',           desc: 'Create and manage departments, units, zones, and branches with structured leadership and membership lists.' },
  { icon: Calendar,  title: 'Programmes & Announcements',     desc: 'Plan church programmes, services, special events, and outreaches. Publish announcements to members.' },
  { icon: DollarSign,title: 'Offerings, Tithes & Projects',  desc: 'Track offerings, tithes, pledges, and project contributions per member. Generate giving statements and finance reports.' },
  { icon: Users,     title: 'Cell Groups / House Fellowships',desc: 'Manage cell groups and house fellowship rosters, host assignments, meeting records, and group attendance.' },
  { icon: BarChart2, title: 'Growth Analytics & Reports',     desc: 'Track membership growth, attendance trends, giving patterns, conversion rates, and department performance.' },
  { icon: Bell,      title: 'Member Portal & Communication',  desc: 'Member self-service portal for profiles and giving history. SMS and email communication for announcements.' },
]

export default function ChurchEdge() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 48, height: 48, background: 'rgba(0,86,166,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Church size={24} color="#7ec5ff" />
            </div>
            <div className="section-label page-hero-label">Product</div>
          </div>
          <h1>ChurchEdge — Church &amp; Ministry Management</h1>
          <p>
            A flexible church management solution for churches, ministries, fellowships,
            and faith-based organizations that need structured member management, finance,
            programmes, departments, trainings, and reporting.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' as const }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Request a Demo</Link>
            <Link to="/contact" className="btn btn-secondary btn-lg" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.4)' }}>Get a Quote</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 52 }}>
            <div className="section-label">Features</div>
            <h2 className="section-title">Built for the Modern Church</h2>
            <p className="section-subtitle">
              ChurchEdge covers the complete lifecycle of church ministry — from first-timer
              capture through discipleship, giving, and multi-branch growth analytics.
            </p>
          </div>
          <div className="grid-3">
            {features.map(f => (
              <div key={f.title} className="card">
                <div className="icon-box icon-box-blue" style={{ marginBottom: 16 }}>
                  <f.icon size={22} />
                </div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.98rem', fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{f.desc}</p>
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
              <h2 className="section-title">For Churches &amp; Ministries of Every Size</h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 24 }}>
                ChurchEdge is designed for growing local churches, mega-churches with multiple
                branches, ministry organizations, and faith-based groups that want to manage
                people, giving, and programmes with clarity and accountability.
              </p>
              {[
                'Single-campus and multi-branch churches',
                'Denominational headquarters and zonal offices',
                'Mission organizations and parachurch ministries',
                'Campus fellowship groups',
                'Cell-based church networks',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', marginBottom: 10 }}>
                  <CheckCircle2 size={16} color="var(--green)" />
                  <span>{item}</span>
                </div>
              ))}
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 24 }}>
                Book a Demo <ArrowRight size={14} />
              </Link>
            </div>

            <div style={{ background: 'var(--white)', borderRadius: 16, border: '1px solid var(--grey-border)', padding: 32 }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--text-muted)', marginBottom: 20 }}>Key Modules</div>
              {[
                'Member Registration & Profiles',
                'Attendance Tracking',
                'First-timer Capture & Follow-up',
                'Convert & Discipleship Tracking',
                'Workers, Ministers & Pastors Registry',
                'Department & Unit Hierarchy',
                'Branch & Zone Administration',
                'Cell Group / House Fellowship',
                'Offerings, Tithes & Project Finance',
                'Events & Programme Calendar',
                'Announcements & Communication',
                'Growth Analytics Dashboard',
                'Finance Reports & Audit Trail',
              ].map((m, i, arr) => (
                <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--grey-border)' : 'none', fontSize: '0.85rem', color: 'var(--text-body)' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Grow Your Church With Better Systems"
        subtext="ChurchEdge gives your leadership team clarity on membership, giving, and ministry impact — so you can focus on what matters."
        primaryLabel="Request a Demo"
        secondaryLabel="View All Products"
        secondaryTo="/products"
      />
    </div>
  )
}
