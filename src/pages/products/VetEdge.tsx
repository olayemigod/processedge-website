import { Link } from 'react-router-dom'
import { PawPrint, Stethoscope, CheckCircle2, Calendar, Package, CreditCard, Bell, ArrowRight, FileText, Users } from 'lucide-react'
import PageMeta from '../../components/PageMeta'
import CTASection from '../../components/CTASection'
import './VetEdge.css'

export default function VetEdge() {
  const problemPoints = [
    'Patient medical history split across physical and digital records',
    'Drug dispensing not linked to stock deduction',
    'Vaccination reminders sent manually — or not at all',
    'Billing compiled from multiple sources after the appointment',
    'No visibility into clinic revenue or appointment trends'
  ]

  const workflowSteps = [
    { title: 'Patient Check-In', desc: 'Owner arrives, animal record is pulled or created.', icon: PawPrint },
    { title: 'Consultation', desc: 'Vet examines patient, records clinical notes and diagnosis.', icon: Stethoscope },
    { title: 'Prescription', desc: 'Drugs prescribed and dispensed, stock auto-deducted.', icon: FileText },
    { title: 'Billing', desc: 'Invoice generated from consultation, drugs, and services.', icon: CreditCard },
    { title: 'Follow-Up', desc: 'Vaccination and revisit reminders sent automatically.', icon: Calendar }
  ]

  const features = [
    {
      title: 'Pet & Owner Records',
      desc: 'Complete animal profiles — species, breed, age, medical history, and vaccination records. Every pet is linked to an owner account for unified communication and billing.',
      icon: PawPrint,
      color: 'green' as const
    },
    {
      title: 'Consultation & Clinical Notes',
      desc: 'Structured SOAP-format or free-text clinical notes per visit. Record diagnosis, treatment plans, and prescriptions in one auditable entry linked to patient history.',
      icon: Stethoscope,
      color: 'blue' as const
    },
    {
      title: 'Inventory & Dispensing',
      desc: 'Drug and consumable stock tracking with automatic deduction when prescriptions are dispensed. Reorder alerts ensure critical supplies never run out unexpectedly.',
      icon: Package,
      color: 'green' as const
    },
    {
      title: 'Vaccination Scheduling',
      desc: 'Track vaccination history and due dates for every patient. Automated SMS and email reminders notify pet owners when vaccinations are upcoming or overdue.',
      icon: Calendar,
      color: 'blue' as const
    }
  ]

  const implementationStages = [
    { number: '01', title: 'Practice Audit', desc: 'We review your clinical workflows, record-keeping methods, and billing processes to map operational gaps and priorities.' },
    { number: '02', title: 'System Configuration', desc: 'Configure VetEdge with your practice structure, service catalogue, drug inventory, vaccination schedules, and fee matrices.' },
    { number: '03', title: 'Team Training', desc: 'Hands-on training sessions for veterinarians, receptionists, and practice managers on clinical and administrative workflows.' },
    { number: '04', title: 'Go-Live & Support', desc: 'We deploy to your practice and provide on-site support during initial days to ensure confident adoption and smooth operations.' }
  ]

  return (
    <>
      <PageMeta
        title="VetEdge — Veterinary Practice Management & Clinical Operations"
        description="VetEdge helps veterinary clinics manage patient records, consultations, billing, vaccination scheduling, and client communication in one integrated platform."
        path="/products/vetedge"
      />
      
      <div className="vet-page" style={{ paddingTop: 72 }}>
        {/* Hero Section */}
        <section className="ve-hero">
          <div className="container ve-hero__inner">
            <div className="ve-hero__content">
              <div className="ve-hero__badge-row">
                <div className="ve-hero__icon">
                  <PawPrint size={24} color="#4de8a0" />
                </div>
                <span className="ve-hero__badge">Industry Product</span>
              </div>
              <h1 className="ve-hero__title">VetEdge</h1>
              <p className="ve-hero__tagline">Veterinary Practice Management &amp; Clinical Operations</p>
              <p className="ve-hero__desc">
                VetEdge helps veterinary clinics gain control over patient records, consultations, billing, 
                vaccination scheduling, and client communication — from the first appointment to the follow-up reminder.
              </p>
              <div className="ve-hero__actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Book a Consultation <ArrowRight size={15} />
                </Link>
                <a href="#features" className="btn btn-hero-ghost btn-lg">
                  Explore EdgeSuite
                </a>
              </div>
            </div>
            
            <div className="ve-hero__visual">
              <div className="ve-hero__image-wrap">
                <img 
                  src="/vetedge-clinic-hero.png" 
                  alt="Veterinary professional with pet patient in modern clinic" 
                  className="ve-hero__image"
                />
                {/* Floating Clinic Dashboard Indicator */}
                <div className="ve-hero__overlay-card">
                  <div className="ve-hero__overlay-header">
                    <span className="ve-hero__overlay-dot" />
                    <span>Clinic Dashboard</span>
                  </div>
                  <div className="ve-hero__overlay-list">
                    <div className="ve-hero__overlay-item">
                      <span className="ve-hero__overlay-label">Vaccinations Due:</span>
                      <span className="ve-hero__overlay-val ve-hero__overlay-val--highlight">12</span>
                    </div>
                    <div className="ve-hero__overlay-item">
                      <span className="ve-hero__overlay-label">Today's Appointments:</span>
                      <span className="ve-hero__overlay-val ve-hero__overlay-val--highlight">8</span>
                    </div>
                    <div className="ve-hero__overlay-item">
                      <span className="ve-hero__overlay-label">Pending Invoices:</span>
                      <span className="ve-hero__overlay-val">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="section section-alt">
          <div className="container ve-problem">
            <div className="ve-problem__left">
              <div className="section-label section-label-green">The Veterinary Challenge</div>
              <h2 className="section-title">Why Clinic Administration Outgrows Manual Records</h2>
              <p className="ve-para">
                At low volume, a veterinary practice can manage patient records in notebooks, track drug 
                stock with spreadsheets, and rely on memory for vaccination reminders. But as patient 
                numbers grow, these manual systems break down — records get lost, reminders go unsent, 
                and billing errors become routine.
              </p>
              <p className="ve-para">
                Without a unified system, clinical and administrative work pulls in different directions. 
                Vets spend time searching for patient history instead of treating animals. Receptionists 
                compile invoices from handwritten notes. And practice owners have no clear view of revenue, 
                appointment trends, or stock levels.
              </p>
              <ul className="ve-checklist">
                {problemPoints.map((pt, i) => (
                  <li key={i}>
                    <Bell size={16} className="text-green" style={{ minWidth: '16px', marginTop: '2px' }} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ve-problem__right">
              <div className="ve-value-card">
                <div className="ve-value-card__label">The VetEdge Approach</div>
                <p className="ve-value-card__body">
                  VetEdge connects the clinical and business sides of a veterinary practice. Every 
                  consultation, prescription, and service is tracked in one place — so patient records 
                  are always complete, stock is always accurate, and client communication happens automatically.
                </p>
                <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginTop: 8, alignSelf: 'flex-start' }}>
                  Discuss VetEdge <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 52 }}>
              <div className="section-label section-label-blue">Clinical Workflow</div>
              <h2 className="section-title">The VetEdge Consultation-to-Care Pipeline</h2>
              <p className="section-subtitle">
                Every patient visit follows a structured path from check-in through treatment to automated follow-up.
              </p>
            </div>
            
            <div className="ve-workflow">
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="ve-workflow__node">
                  <div className="ve-workflow__icon-box">
                    <step.icon size={22} />
                    <span className="ve-workflow__step-number">{idx + 1}</span>
                  </div>
                  <h3 className="ve-workflow__node-title">{step.title}</h3>
                  <p className="ve-workflow__node-desc">{step.desc}</p>
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
              <h2 className="section-title">Built for Real Veterinary Operations</h2>
              <p className="section-subtitle">
                Core modules designed to support the clinical and administrative needs of a modern veterinary practice.
              </p>
            </div>
            
            <div className="grid-2">
              {features.map((feat, i) => (
                <div key={i} className="ve-feat-card">
                  <div className={`ve-feat-card__icon ve-feat-card__icon--${feat.color}`}>
                    <feat.icon size={22} />
                  </div>
                  <div className="ve-feat-card__body">
                    <h3 className="ve-feat-card__title">{feat.title}</h3>
                    <p className="ve-feat-card__desc">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It Is For Section */}
        <section className="section">
          <div className="container ve-for__inner">
            <div className="ve-for__text">
              <div className="section-label section-label-blue">Audience</div>
              <h2 className="section-title">Designed for Growing Veterinary Practices</h2>
              <p className="ve-para">
                VetEdge scales with veterinary businesses transitioning from paper-based records and 
                standalone spreadsheets to structured, unified practice management.
              </p>
              <div className="ve-for__grid">
                {[
                  { label: 'Veterinary Clinics', desc: 'Single-vet or multi-vet practices needing structured patient records.' },
                  { label: 'Pet Shops & Grooming', desc: 'Pet businesses with grooming, boarding, and retail services.' },
                  { label: 'Animal Care Centres', desc: 'Welfare organisations tracking animal intake, treatment, and adoption.' },
                  { label: 'Mobile Vet Providers', desc: 'Field vets needing portable access to patient records and billing.' }
                ].map((item, idx) => (
                  <div key={idx} className="ve-for__item">
                    <CheckCircle2 size={16} className="text-blue" style={{ minWidth: '16px', marginTop: '2px' }} />
                    <div>
                      <div className="ve-for__item-label">{item.label}</div>
                      <div className="ve-for__item-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="ve-for__panel">
              <div className="ve-for__panel-card">
                <Users size={24} className="text-green" style={{ marginBottom: 14 }} />
                <h3>Structured Practice Control</h3>
                <p>
                  Give veterinarians, receptionists, and practice managers the right tools and access levels 
                  to keep clinical and administrative workflows running smoothly.
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
              <h2 className="section-title">How We Set Up VetEdge</h2>
              <p className="section-subtitle">
                We manage the full setup lifecycle to ensure your veterinary team is confident and productive from day one.
              </p>
            </div>
            
            <div className="ve-stages">
              {implementationStages.map((stage, idx) => (
                <div key={idx} className="ve-stage-card">
                  <div className="ve-stage-card__num">{stage.number}</div>
                  <h3 className="ve-stage-card__title">{stage.title}</h3>
                  <p className="ve-stage-card__desc">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          headline="Ready to Modernise Your Veterinary Practice?"
          subtext="Book a consultation to see how VetEdge can bring structure to your patient records, clinical workflows, and practice administration."
          primaryLabel="Discuss VetEdge"
          primaryTo="/contact"
          secondaryLabel="View All Products"
          secondaryTo="/products"
        />
      </div>
    </>
  )
}
