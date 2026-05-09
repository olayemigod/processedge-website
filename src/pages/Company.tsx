import { Link } from 'react-router-dom'
import { CheckCircle2, Target, Users, Zap, Globe } from 'lucide-react'
import CTASection from '../components/CTASection'

const values = [
  { icon: Target, title: 'Business-First Thinking',  desc: 'We start with your business challenges, not with software features. The best system is the one that fits your real workflow.' },
  { icon: Zap,    title: 'Practical Over Perfect',   desc: 'We build working solutions that your team will actually use — not over-engineered systems that get abandoned after go-live.' },
  { icon: Users,  title: 'Client Partnership',       desc: "We work alongside our clients, not just for them. Long-term relationships and outcomes matter more than one-off projects." },
  { icon: Globe,  title: 'Nigerian Market Focus',    desc: 'We understand the Nigerian business environment — its compliance requirements, payment systems, and operational realities.' },
]

export default function Company() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Company</div>
          <h1>Smart Processes. Better Results.</h1>
          <p>ProcessEdge Solutions is a Nigerian business software consultancy helping organizations implement systems, automate operations, and achieve better results through ERP, process design, and industry-specific software.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: 'start' }}>
            <div>
              <div className="section-label">Our Story</div>
              <h2 className="section-title">Built to Solve Real Business Problems</h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 20 }}>ProcessEdge Solutions was founded with a single mission: to help Nigerian businesses stop managing operations manually and start running on systems that actually work.</p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 20 }}>We combine deep ERPNext and Frappe expertise with a genuine understanding of the Nigerian market to deliver implementations that are practical, affordable, and built for long-term adoption.</p>
              {['Based in Nigeria, serving businesses across West Africa', 'ERPNext & Frappe Framework specialists', 'Six products across five industry verticals', 'End-to-end: process design to go-live and support'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', marginBottom: 10 }}>
                  <CheckCircle2 size={16} color="var(--green)" /><span>{item}</span>
                </div>
              ))}
            </div>
            <div className="grid-2" style={{ gap: 16 }}>
              {[
                { value: '50+', label: 'Clients Served',      desc: 'Businesses transformed' },
                { value: '6',   label: 'Products',            desc: 'Across five industries' },
                { value: '100%', label: 'ERPNext Focused',    desc: 'Frappe ecosystem experts' },
                { value: '5+',  label: 'Industries Served',   desc: 'Sector-specific solutions' },
              ].map(stat => (
                <div key={stat.label} style={{ background: 'var(--white)', border: '1px solid var(--grey-border)', borderRadius: 16, padding: 24, textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '2rem', fontWeight: 800, color: 'var(--blue)', letterSpacing: '-0.03em', marginBottom: 4 }}>{stat.value}</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: 4 }}>{stat.label}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="grid-2" style={{ gap: 28 }}>
            <div style={{ background: 'var(--blue)', borderRadius: 16, padding: 40, color: 'var(--white)' }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.6)', marginBottom: 14 }}>Our Mission</div>
              <h3 style={{ color: 'var(--white)', fontSize: '1.4rem', marginBottom: 16, fontFamily: 'Montserrat, sans-serif' }}>Helping businesses operate smarter</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, fontSize: '0.95rem' }}>To help businesses across Nigeria and West Africa implement the right systems — ERP, automation, and industry-specific software — that reduce manual work, improve visibility, and drive better business outcomes.</p>
            </div>
            <div style={{ background: 'var(--green)', borderRadius: 16, padding: 40, color: 'var(--white)' }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.6)', marginBottom: 14 }}>Our Vision</div>
              <h3 style={{ color: 'var(--white)', fontSize: '1.4rem', marginBottom: 16, fontFamily: 'Montserrat, sans-serif' }}>Africa's most practical ERP partner</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, fontSize: '0.95rem' }}>To become the most trusted business process and ERP implementation partner for growing organizations across Africa — known for practical delivery, deep expertise, and genuine client outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 52 }}>
            <div className="section-label">Our Values</div>
            <h2 className="section-title">How We Work</h2>
          </div>
          <div className="grid-4">
            {values.map(v => (
              <div key={v.title} className="card">
                <div className="icon-box icon-box-blue" style={{ marginBottom: 16 }}><v.icon size={22} /></div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.98rem', fontWeight: 700, marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Ready to Work With ProcessEdge?" subtext="Let's talk about your business, your challenges, and how we can help you build better systems." primaryLabel="Start a Conversation" secondaryLabel="View Our Services" secondaryTo="/services" />
    </div>
  )
}
