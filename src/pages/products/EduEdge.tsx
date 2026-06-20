import { Link } from 'react-router-dom'
import { GraduationCap, Monitor, BookOpen, BarChart2, Bell, Users, CheckCircle2, ArrowRight, Clock, Calendar } from 'lucide-react'
import PageMeta from '../../components/PageMeta'
import CTASection from '../../components/CTASection'
import './EduEdge.css'

export default function EduEdge() {
  const problemPoints = [
    'No single source of student and academic records',
    'Exam management disconnected from academic records',
    'Results manually re-entered multiple times',
    'Fee clearance and exam access not automatically linked',
    'No real-time visibility into academic performance trends'
  ]

  const features = [
    {
      title: 'Student & Guardian Records',
      desc: 'Complete student profiles with academic history, guardian contacts, medical notes, and uploaded documents — all planned to live in one connected system.',
      icon: Users,
      color: 'blue' as const
    },
    {
      title: 'CBT Exam Delivery',
      desc: 'Timed, randomised CBT exams delivered in the browser with auto-grading on submission. Being designed for objective and theory-based assessments.',
      icon: Monitor,
      color: 'amber' as const
    },
    {
      title: 'Academic Grading & Reports',
      desc: 'Configurable grading scales, cumulative averages, broadsheet generation, transcripts, and report card printing — planned for full academic workflow coverage.',
      icon: BarChart2,
      color: 'blue' as const
    },
    {
      title: 'School Communication',
      desc: 'SMS and email notifications to parents for results, fee reminders, attendance alerts, and school-wide communications — in development.',
      icon: Bell,
      color: 'amber' as const
    }
  ]

  const audienceItems = [
    { label: 'Primary & Secondary Schools', desc: 'Structured academic record management and result processing.' },
    { label: 'CBT Centres & Coaching', desc: 'Exam delivery, question bank management, and result tracking.' },
    { label: 'Vocational Institutions', desc: 'Course management, assessment tracking, and certification.' },
    { label: 'Multi-Branch School Networks', desc: 'Centralised academic oversight across multiple campuses.' },
    { label: 'Schools Using ERPNext/Frappe', desc: 'Familiar platform with education-specific extensions.' }
  ]

  const timelinePhases = [
    {
      title: 'Phase 1: Foundation',
      desc: 'Student records, class management, and fee tracking modules.',
      status: 'In Progress',
      statusColor: 'amber' as const
    },
    {
      title: 'Phase 2: CBT Engine',
      desc: 'Question bank, exam engine, auto-grading, and result synchronisation.',
      status: 'Design',
      statusColor: 'grey' as const
    },
    {
      title: 'Phase 3: Portal & Analytics',
      desc: 'Student portal, parent portal, and school analytics dashboard.',
      status: 'Planned',
      statusColor: 'grey' as const
    }
  ]

  return (
    <>
      <PageMeta
        title="EduEdge — Education Management & CBT Platform (Under Development)"
        description="EduEdge is a development-stage education solution combining school management, CBT exam delivery, question banks, result synchronisation, and academic workflow automation."
        path="/products/eduedge"
      />

      <div className="edu-page" style={{ paddingTop: 72 }}>
        {/* Hero Section */}
        <section className="ee-hero">
          <div className="container ee-hero__inner">
            <div className="ee-hero__content">
              <div className="ee-hero__badge-row">
                <div className="ee-hero__icon">
                  <GraduationCap size={24} color="#e8a84d" />
                </div>
                <span className="ee-hero__badge">Under Development</span>
              </div>
              <h1 className="ee-hero__title">EduEdge</h1>
              <p className="ee-hero__tagline">Education Management &amp; CBT Platform</p>
              <p className="ee-hero__desc">
                EduEdge is a development-stage education solution that will combine school management,
                CBT exam delivery, question banks, result synchronisation, and academic workflow
                automation — built on the ProcessEdge platform.
              </p>
              <div className="ee-hero__actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Register Interest <ArrowRight size={15} />
                </Link>
                <a href="#capabilities" className="btn btn-hero-ghost btn-lg">
                  Explore Capabilities
                </a>
              </div>
            </div>

            <div className="ee-hero__visual">
              <div className="ee-hero__image-wrap">
                <img
                  src="/eduedge-school-hero.png"
                  alt="Modern school management platform concept"
                  className="ee-hero__image"
                />
                <div className="ee-hero__overlay-card">
                  <div className="ee-hero__overlay-header">
                    <span className="ee-hero__overlay-dot" />
                    <span>Development Roadmap</span>
                  </div>
                  <div className="ee-hero__overlay-list">
                    <div className="ee-hero__overlay-item">
                      <span className="ee-hero__overlay-label">Student Records:</span>
                      <span className="ee-hero__overlay-val ee-hero__overlay-val--progress">In Design</span>
                    </div>
                    <div className="ee-hero__overlay-item">
                      <span className="ee-hero__overlay-label">CBT Engine:</span>
                      <span className="ee-hero__overlay-val ee-hero__overlay-val--progress">Prototyping</span>
                    </div>
                    <div className="ee-hero__overlay-item">
                      <span className="ee-hero__overlay-label">Fee Module:</span>
                      <span className="ee-hero__overlay-val ee-hero__overlay-val--planned">Planned</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="ee-hero__notice">
              <Calendar size={15} />
              <span>EduEdge is currently in development. Features shown represent our planned capabilities.</span>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="section section-alt">
          <div className="container ee-problem">
            <div className="ee-problem__left">
              <div className="section-label ee-section-label-amber">The Education Challenge</div>
              <h2 className="section-title">Why Schools Are Running Disconnected Systems</h2>
              <p className="ee-para">
                Student records live in one spreadsheet. Fee payments are tracked in another. Exam
                timetables are printed and distributed manually. Results are compiled in Excel after
                every sitting — then manually entered into report cards.
              </p>
              <p className="ee-para">
                This fragmentation means the bursar's fee clearance list is different from the academic
                office's exam access list. Results contain transcription errors. Management cannot see
                how the school is performing without spending hours pulling data together.
              </p>
              <ul className="ee-checklist">
                {problemPoints.map((pt, i) => (
                  <li key={i}>
                    <BookOpen size={16} className="ee-check-icon" style={{ minWidth: '16px', marginTop: '2px' }} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ee-problem__right">
              <div className="ee-value-card">
                <div className="ee-value-card__label">The EduEdge Vision</div>
                <p className="ee-value-card__body">
                  EduEdge aims to give schools operational control — from admission to result
                  publication — in a single connected platform. We are designing it for Nigerian
                  academic structures, with built-in CBT capabilities and automatic result
                  synchronisation to eliminate manual re-entry.
                </p>
                <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginTop: 8, alignSelf: 'flex-start' }}>
                  Register Interest <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Planned Capabilities */}
        <section id="capabilities" className="section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 48 }}>
              <div className="section-label ee-section-label-amber">Planned Capabilities</div>
              <h2 className="section-title">What EduEdge Will Cover</h2>
              <p className="section-subtitle">
                These capabilities are currently being designed and developed.
              </p>
            </div>

            <div className="grid-2">
              {features.map((feat, i) => (
                <div key={i} className="ee-feat-card">
                  <div className={`ee-feat-card__icon ee-feat-card__icon--${feat.color}`}>
                    <feat.icon size={22} />
                  </div>
                  <div className="ee-feat-card__body">
                    <div className="ee-feat-card__header">
                      <h3 className="ee-feat-card__title">{feat.title}</h3>
                      <span className="ee-feat-card__planned">Planned</span>
                    </div>
                    <p className="ee-feat-card__desc">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built For Section */}
        <section className="section section-alt">
          <div className="container ee-for__inner">
            <div className="ee-for__text">
              <div className="section-label ee-section-label-amber">Target Audience</div>
              <h2 className="section-title">Who EduEdge Is Being Built For</h2>
              <p className="ee-para">
                EduEdge is being designed for schools and educational institutions operating in Nigeria
                that need a connected academic management platform.
              </p>
              <div className="ee-for__grid">
                {audienceItems.map((item, idx) => (
                  <div key={idx} className="ee-for__item">
                    <CheckCircle2 size={16} className="ee-check-icon" style={{ minWidth: '16px', marginTop: '2px' }} />
                    <div>
                      <div className="ee-for__item-label">{item.label}</div>
                      <div className="ee-for__item-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ee-for__panel">
              <div className="ee-for__panel-card">
                <Clock size={24} className="ee-amber-icon" style={{ marginBottom: 14 }} />
                <h3>Early Access Program</h3>
                <p>
                  Register your interest now to be among the first schools invited to preview
                  EduEdge when early access becomes available. We will notify you as development
                  milestones are reached.
                </p>
                <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginTop: 12, width: '100%', justifyContent: 'center' }}>
                  Register Interest
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Development Timeline */}
        <section className="section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 52 }}>
              <div className="section-label ee-section-label-amber">Timeline</div>
              <h2 className="section-title">Development Progress</h2>
              <p className="section-subtitle">
                EduEdge is being built in phases. No specific dates are committed — we will share
                updates as each phase progresses.
              </p>
            </div>

            <div className="ee-timeline">
              {timelinePhases.map((phase, idx) => (
                <div key={idx} className="ee-timeline__card">
                  <div className="ee-timeline__status-row">
                    <span className={`ee-timeline__dot ee-timeline__dot--${phase.statusColor}`} />
                    <span className={`ee-timeline__status ee-timeline__status--${phase.statusColor}`}>{phase.status}</span>
                  </div>
                  <h3 className="ee-timeline__title">{phase.title}</h3>
                  <p className="ee-timeline__desc">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          headline="Interested in Modernising Your School Operations?"
          subtext="Register your interest to be notified when EduEdge reaches early access. We are building a connected academic management platform for Nigerian schools."
          primaryLabel="Register Interest"
          primaryTo="/contact"
          secondaryLabel="View All Products"
          secondaryTo="/products"
          variant="green"
        />
      </div>
    </>
  )
}
