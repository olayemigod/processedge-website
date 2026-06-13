import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BookOpen, Settings, Calculator, ShoppingCart,
  GraduationCap, PawPrint, Hotel, Users, Church,
  HeadphonesIcon, Activity, Sprout,
} from 'lucide-react'
import CTASection from '../components/CTASection'
import './Resources.css'
import PageMeta from '../components/PageMeta'

// ── Article data ──────────────────────────────────────────────────────────────

const articles = [
  {
    slug:     '/resources/erp-implementation-checklist',
    category: 'ERP',
    catColor: 'var(--blue)',
    icon:     Settings,
    title:    'ERP Implementation Checklist for Growing Businesses',
    excerpt:  'A structured checklist covering every critical phase of an ERP implementation — from discovery and scoping through data migration, training, and post-launch support.',
    readTime: '8 min read',
    type:     'Guide',
  },
  {
    slug:     '/resources/business-process-optimization',
    category: 'Operations',
    catColor: 'var(--green)',
    icon:     Settings,
    title:    'Business Process Optimization: How to Gain Control Before Scaling',
    excerpt:  'Scaling with broken processes only amplifies the problems. Learn how to document, analyse, and restructure operations before implementing a system.',
    readTime: '7 min read',
    type:     'Article',
  },
  {
    slug:     '/resources/accounting-control-for-smes',
    category: 'Accounting',
    catColor: '#7c3aed',
    icon:     Calculator,
    title:    'Accounting Control for SMEs: Moving Beyond Manual Records',
    excerpt:  "Manual bookkeeping works until it doesn't. The practical steps to move from spreadsheets to structured accounting — and what financial control looks like in practice.",
    readTime: '7 min read',
    type:     'Guide',
  },
  {
    slug:     '/resources/school-management-cbt',
    category: 'Education',
    catColor: 'var(--blue)',
    icon:     GraduationCap,
    title:    'School Management with CBT: Connecting Academic Operations and Exams',
    excerpt:  'How to connect student records, fee management, CBT exams, and result workflows into one operational system — and why disconnected tools create more work.',
    readTime: '8 min read',
    type:     'Guide',
  },
  {
    slug:     '/resources/cbt-question-bank-result-sync',
    category: 'Education',
    catColor: 'var(--blue)',
    icon:     GraduationCap,
    title:    'CBT Question Bank and Result Synchronization Explained',
    excerpt:  'A CBT system without proper question bank management and result synchronization is just a digital exam paper. How the two components work together.',
    readTime: '6 min read',
    type:     'Article',
  },
  {
    slug:     '/resources/veterinary-clinic-management',
    category: 'Veterinary',
    catColor: 'var(--green)',
    icon:     PawPrint,
    title:    'Veterinary Clinic Management: Records, Billing, Inventory, and Client Care',
    excerpt:  'Veterinary practices face specific operational challenges. How a structured management system addresses patient records, drug inventory, vaccination scheduling, and billing.',
    readTime: '7 min read',
    type:     'Guide',
  },
  {
    slug:     '/resources/clinic-management-system',
    category: 'Healthcare',
    catColor: 'var(--blue)',
    icon:     Activity,
    title:    'Clinic Management System: Patient Records, Appointments, Billing, and Operations',
    excerpt:  'What a clinic management system covers — from patient records and appointments through billing, pharmacy, diagnostics, and management reporting.',
    readTime: '8 min read',
    type:     'Guide',
  },
  {
    slug:     '/resources/hotel-management-system',
    category: 'Hospitality',
    catColor: 'var(--blue)',
    icon:     Hotel,
    title:    'Hotel Management System: Structuring Reservations, Rooms, Billing, and Housekeeping',
    excerpt:  'What a hotel management system covers across front desk, housekeeping, food and beverage, and billing — and how it changes operations for staff and management.',
    readTime: '7 min read',
    type:     'Guide',
  },
  {
    slug:     '/resources/cooperative-management-system',
    category: 'Cooperative',
    catColor: 'var(--green)',
    icon:     Users,
    title:    'Cooperative Management System: Managing Members, Savings, Loans, and Reports',
    excerpt:  'A cooperative handles money on behalf of members. The expectation of accuracy and accountability is high. What a cooperative management system covers.',
    readTime: '7 min read',
    type:     'Guide',
  },
  {
    slug:     '/resources/church-management-system',
    category: 'Church & Ministry',
    catColor: 'var(--blue)',
    icon:     Church,
    title:    'Church Management System: Organizing Members, Departments, Offerings, and Follow-Up',
    excerpt:  'What a church management system covers — from member records and first-timer follow-up to department management, giving records, and growth analytics.',
    readTime: '8 min read',
    type:     'Guide',
  },
  {
    slug:     '/resources/retail-sales-automation',
    category: 'Retail',
    catColor: 'var(--green)',
    icon:     ShoppingCart,
    title:    'Retail Sales Automation: POS, Inventory, Branches, and Business Visibility',
    excerpt:  'Manual retail operations create the conditions for errors and poor decisions. What retail sales automation covers across one or multiple locations.',
    readTime: '7 min read',
    type:     'Article',
  },
  {
    slug:     '/resources/software-training-and-adoption',
    category: 'Training',
    catColor: '#7c3aed',
    icon:     HeadphonesIcon,
    title:    'Software Training and Adoption: Why Systems Fail Without People',
    excerpt:  "The best-configured ERP will produce no value if people don't use it. Why training and adoption are not optional add-ons — they are the conditions under which the system works.",
    readTime: '6 min read',
    type:     'Article',
  },
  {
    slug:     '/resources/agriculture-management-system',
    category: 'Agriculture',
    catColor: 'var(--green)',
    icon:     Sprout,
    title:    'Agriculture Management System: Farm Records, Inputs, Procurement, and Agribusiness Visibility',
    excerpt:  'How agribusinesses gain operational control through structured farm records, input tracking, farmer management, aggregation workflows, and reporting.',
    readTime: '8 min read',
    type:     'Guide',
  },
]

// Derive categories dynamically from articles so the list stays in sync
const ALL_CATEGORIES = [
  'All',
  ...Array.from(new Set(articles.map(a => a.category))),
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function Resources() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? articles
    : articles.filter(a => a.category === active)

  return (
    <>
        <PageMeta
        title="Resources — Guides & Articles on ERP, Accounting, and Business Systems"
        description="Practical guides and articles on ERP implementation, business process optimization, accounting, retail automation, and industry-specific systems for Nigerian organisations."
        path="/resources"
      />
      <div style={{ paddingTop: 72 }}>

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Resources</div>
          <h1>Guides &amp; Articles</h1>
          <p>
            Practical content on ERP implementation, business process management, accounting,
            and industry-specific operations — written for businesses that want to understand
            systems before they adopt them.
          </p>
        </div>
      </section>

      {/* ── Filter strip ── */}
      {/* mt-resources-filter gives the gap from hero to filter */}
      <div className="resources-filter-wrap">
        <div className="container">
          <div className="resources-cats__inner">
            {ALL_CATEGORIES.map(cat => {
              const count = cat === 'All'
                ? articles.length
                : articles.filter(a => a.category === cat).length
              const isActive = cat === active

              return (
                <button
                  key={cat}
                  className={`resources-cat${isActive ? ' resources-cat--active' : ''}`}
                  onClick={() => setActive(cat)}
                  aria-pressed={isActive}
                >
                  {cat}
                  <span className="resources-cat__count">{count}</span>
                </button>
              )
            })}
          </div>

          {/* Result count line */}
          <p className="resources-filter-result">
            {active === 'All'
              ? `Showing all ${articles.length} articles`
              : `${filtered.length} article${filtered.length !== 1 ? 's' : ''} in ${active}`}
          </p>
        </div>
      </div>

      {/* ── Article grid ── */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          {filtered.length > 0 ? (
            <div className="grid-3" style={{ gap: 24, alignItems: 'stretch' }}>
              {filtered.map(a => {
                const Icon = a.icon
                return (
                  <Link key={a.slug} to={a.slug} className="resource-card resource-card--link">
                    <div className="resource-card__meta">
                      <span className="resource-card__category" style={{ color: a.catColor }}>
                        <Icon size={11} /> {a.category}
                      </span>
                      <span className="resource-card__type">📖 {a.type}</span>
                    </div>
                    <h3 className="resource-card__title">{a.title}</h3>
                    <p className="resource-card__excerpt">{a.excerpt}</p>
                    <div className="resource-card__footer">
                      <span className="resource-card__time">{a.readTime}</span>
                      <span className="resource-card__link">
                        Read Article <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="resources-empty">
              <p>No articles in this category yet.</p>
              <button className="btn btn-secondary btn-sm" onClick={() => setActive('All')}>
                View all articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── More resources ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid-3" style={{ gap: 24 }}>
            {[
              { icon: BookOpen,   title: 'Implementation Guides',  desc: 'Step-by-step guides for ERPNext modules, workflow configuration, and go-live planning.',              soon: false },
              { icon: Settings,   title: 'Video Walkthroughs',     desc: 'Screen recordings and demo videos showing how our products and ERPNext modules work in practice.',  soon: true  },
              { icon: Calculator, title: 'Templates & Checklists', desc: 'Ready-to-use templates for ERP scoping, data migration, UAT, and go-live planning.',                soon: true  },
            ].map(r => (
              <div key={r.title} className="card" style={{ position: 'relative' }}>
                {r.soon && (
                  <div style={{ position: 'absolute', top: 16, right: 16, padding: '3px 10px', background: 'var(--grey-light)', borderRadius: 100, fontSize: '0.7rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: 'var(--text-muted)' }}>
                    Coming Soon
                  </div>
                )}
                <div className="icon-box icon-box-blue" style={{ marginBottom: 16 }}>
                  <r.icon size={22} />
                </div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>{r.title}</h3>
                <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Want Personalised Guidance?"
        subtext="Book a free consultation and get expert advice specific to your business, industry, and operational goals."
        primaryLabel="Book a Consultation"
        primaryTo="/contact"
        secondaryLabel="View Our Products"
        secondaryTo="/products"
      />
    </div>
    </>
  )
}
