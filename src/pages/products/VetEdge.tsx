import { Link } from 'react-router-dom'
import { PawPrint, CheckCircle2, Syringe, FileText, Package, MessageCircle, Calendar, BarChart2, ArrowRight } from 'lucide-react'
import CTASection from '../../components/CTASection'

const features = [
  { icon: PawPrint, title: 'Animal Patient Records', desc: 'Complete patient profiles for each animal — species, breed, age, owner details, medical history, and attached documents.' },
  { icon: Calendar, title: 'Appointments & Consultations', desc: 'Schedule and manage consultations, track diagnosis, prescriptions, treatment plans, and follow-up dates.' },
  { icon: Syringe, title: 'Vaccination Tracking', desc: 'Full vaccination record per animal with due-date reminders and automated client notifications.' },
  { icon: FileText, title: 'Billing & Invoicing', desc: 'Generate and manage invoices for consultations, procedures, drugs, and boarding. Integrate with payment gateways.' },
  { icon: Package, title: 'Stock & Pharmacy Management', desc: 'Track veterinary drugs, consumables, and supplies with reorder alerts and batch management.' },
  { icon: MessageCircle, title: 'Client Communication', desc: 'Send appointment reminders, vaccination alerts, and health updates to clients via SMS and email.' },
  { icon: BarChart2, title: 'Reports & Analytics', desc: 'Revenue reports, patient trends, vaccination compliance rates, and clinic performance dashboards.' },
  { icon: PawPrint, title: 'Boarding & Grooming', desc: 'Manage boarding bookings, grooming appointments, kennel capacity, and associated billing seamlessly.' },
]

export default function VetEdge() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 48, height: 48, background: 'rgba(28,156,93,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PawPrint size={24} color="#4de8a0" />
            </div>
            <span style={{ background: 'rgba(28,156,93,0.2)', border: '1px solid rgba(28,156,93,0.4)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4de8a0', fontFamily: 'Montserrat' }}>New Product</span>
          </div>
          <h1>VetEdge — Veterinary Practice Management</h1>
          <p>Complete practice management for veterinary clinics and pet shops — from consultations and vaccinations to billing, stock, boarding, and client communication.</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-green btn-lg">Request a Demo</Link>
            <Link to="/contact" className="btn cta-section__secondary btn-lg" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.4)' }}>Get a Quote</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 52 }}>
            <div className="section-label">Features</div>
            <h2 className="section-title">Built for Veterinary Clinics</h2>
            <p className="section-subtitle">Every module designed around the real workflow of a veterinary practice — from first visit to follow-up.</p>
          </div>
          <div className="grid-4">
            {features.map(f => (
              <div key={f.title} className="card">
                <div className="icon-box icon-box-green" style={{ marginBottom: 16 }}>
                  <f.icon size={22} />
                </div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '0.95rem', fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{f.desc}</p>
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
              <h2 className="section-title">For Every Veterinary Business</h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 24 }}>
                VetEdge is designed for small and mid-sized veterinary clinics, pet shops, and animal care centres across Nigeria. It meets VCN practice documentation requirements and supports Flutterwave/Paystack payment integration.
              </p>
              {['Single-vet and multi-vet clinics', 'Pet shops with grooming & boarding', 'Animal welfare organizations', 'Mobile veterinary services', 'Multi-branch vet practices'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', marginBottom: 10 }}>
                  <CheckCircle2 size={16} color="var(--green)" />
                  <span>{item}</span>
                </div>
              ))}
              <Link to="/contact" className="btn btn-green" style={{ marginTop: 24 }}>
                Book a Demo <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ background: 'var(--white)', borderRadius: 16, border: '1px solid var(--grey-border)', padding: 32 }}>
              <div style={{ fontFamily: 'Montserrat', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>Key Modules</div>
              {['Animal Patient Registration', 'Consultation & SOAP Notes', 'Vaccination Schedule & History', 'Drug Prescription & Pharmacy', 'Boarding & Kennel Management', 'Grooming Appointments', 'Billing & Payment Integration', 'Client Portal & Communication', 'Reminder Automation (SMS/Email)', 'Clinic Performance Dashboard'].map((m, i) => (
                <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderBottom: i < 9 ? '1px solid var(--grey-border)' : 'none', fontSize: '0.86rem', color: 'var(--text-body)' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }} />
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Transform Your Veterinary Practice" subtext="See how VetEdge can streamline your clinic operations, reduce paperwork, and improve client retention." primaryLabel="Request a Demo" secondaryLabel="View All Products" secondaryTo="/products" variant="green" />
    </div>
  )
}
