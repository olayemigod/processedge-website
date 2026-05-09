import { Link } from 'react-router-dom'
import { BookOpen, CheckCircle2, Users, Monitor, FileText, Headphones, RefreshCw, Video, ArrowRight } from 'lucide-react'
import CTASection from '../../components/CTASection'

const scope = [
  { icon: Users, title: 'End-User Training', desc: 'Role-based training for day-to-day users — sales staff, cashiers, store keepers, accountants, and operations teams.' },
  { icon: Monitor, title: 'Administrator Training', desc: 'In-depth admin training covering system configuration, user management, customization, and maintenance.' },
  { icon: FileText, title: 'System Documentation', desc: 'Process guides, user manuals, admin reference materials, and SOP documentation tailored to your setup.' },
  { icon: Video, title: 'Onboarding Programmes', desc: 'Structured onboarding programmes that get new hires productive in your ERP system quickly and confidently.' },
  { icon: Headphones, title: 'Ongoing ERP Support', desc: 'Post-launch support via ticket, WhatsApp, or retainer — for bug fixes, queries, configuration changes, and user help.' },
  { icon: RefreshCw, title: 'Process Adoption', desc: 'Change management and process reinforcement activities to ensure your team actually adopts the new system.' },
]

export default function TrainingSupport() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 48, height: 48, background: 'rgba(0,86,166,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookOpen size={24} color="#7ec5ff" />
            </div>
            <div className="section-label page-hero-label">Service</div>
          </div>
          <h1>Training &amp; Support</h1>
          <p>Practical user and admin training, system documentation, onboarding programmes, and ongoing ERP support — so your team is confident and your system keeps running.</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Get Support</Link>
            <Link to="/contact" className="btn cta-section__secondary btn-lg" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.4)' }}>Request Training</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 52 }}>
            <div className="section-label section-label-blue">What We Deliver</div>
            <h2 className="section-title">Training That Drives Real Adoption</h2>
            <p className="section-subtitle">We don't just install and leave. Every implementation includes a training plan, and we offer standalone support for systems already in use.</p>
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
              <div className="section-label">Support Options</div>
              <h2 className="section-title">Flexible Support for Every Business</h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 28 }}>
                Whether you need a one-time training session, a documentation pack, or ongoing monthly support — we offer arrangements that match your budget and business needs.
              </p>
              {['One-time training sessions', 'Retainer-based monthly support', 'On-demand help desk access', 'Remote support via screen share', 'WhatsApp support for quick queries', 'Annual support contracts'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', marginBottom: 10 }}>
                  <CheckCircle2 size={16} color="var(--green)" /><span>{item}</span>
                </div>
              ))}
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 24 }}>Discuss Support Options <ArrowRight size={14} /></Link>
            </div>
            <div>
              {[
                { q: 'What systems do you support?', a: 'We support ERPNext (all versions), Frappe Framework apps, POSNext, and all ProcessEdge products — EduEdge, VetEdge, HotelEdge, CoopEdge, and ChurchEdge.' },
                { q: 'Do you offer remote training?', a: 'Yes. We deliver training via Zoom, Google Meet, or screen share — and can also conduct in-person sessions for teams in Lagos and nearby locations.' },
                { q: 'Can you support a system someone else implemented?', a: 'Yes. We can take over support for any ERPNext or Frappe-based system, perform a system audit, and get it running optimally.' },
                { q: 'How quickly do you respond to issues?', a: 'Support plan response times range from same-day to 48 hours depending on issue severity and your support tier.' },
              ].map((faq, i) => (
                <div key={i} style={{ marginBottom: 20, padding: 20, background: 'var(--white)', borderRadius: 10, border: '1px solid var(--grey-border)' }}>
                  <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: 8 }}>{faq.q}</div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Need ERP Support or Training?" subtext="Whether you're just getting started or need help with an existing system — we're here." primaryLabel="Get in Touch" secondaryLabel="View All Services" secondaryTo="/services" />
    </div>
  )
}
