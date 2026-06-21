import { Link } from 'react-router-dom'
import {
  Search, MapPin, Store, PawPrint, GraduationCap, Hotel, Sprout,
  Activity, Users, Church, CheckCircle2, ArrowRight, Clock, Shield, Eye, Star
} from 'lucide-react'
import PageMeta from '../../components/PageMeta'
import CTASection from '../../components/CTASection'
import './EdgeFinder.css'

const discoveryCategories = [
  { icon: PawPrint,     label: 'Vet Clinics',         desc: 'Veterinary care for pets and animals.' },
  { icon: Store,        label: 'Retail Stores',        desc: 'Shops and POS-powered retail outlets.' },
  { icon: GraduationCap, label: 'Schools & CBT',      desc: 'Schools, academies, and CBT centres.' },
  { icon: Activity,     label: 'Health Clinics',       desc: 'Medical clinics and healthcare providers.' },
  { icon: Hotel,        label: 'Hotels',               desc: 'Hotels, guest houses, and hospitality.' },
  { icon: Users,        label: 'Cooperatives',         desc: 'Savings, loan, and cooperative bodies.' },
  { icon: Sprout,       label: 'Farms & Agribusiness', desc: 'Farms, agro-processors, and agribusinesses.' },
  { icon: Church,       label: 'Churches & Ministries', desc: 'Ministries, churches, and faith organisations.' },
]

const customerBenefits = [
  { icon: Search,    title: 'Discover by Category',    desc: 'Browse businesses by type — vet clinics, schools, hotels, retailers, cooperatives, and more.' },
  { icon: MapPin,    title: 'Location-Aware Search',   desc: 'Find businesses near you or in your preferred location — so you spend less time searching.' },
  { icon: Star,      title: 'EdgeSuite Trust Signal',  desc: 'Every listed business is powered by EdgeSuite — meaning they run structured, software-backed operations.' },
  { icon: Eye,       title: 'Business Profile View',   desc: 'See business descriptions, categories, services offered, and how to get in contact.' },
]

const ownerBenefits = [
  { icon: Shield,     title: 'Verified Business Listing',  desc: 'Control your own profile. Ownership is verified through the EdgeSuite account your business operates on.' },
  { icon: Eye,        title: 'Customer Visibility',        desc: 'Get discovered by customers searching for businesses like yours in your industry and location.' },
  { icon: Star,       title: 'EdgeSuite Trust Layer',      desc: 'Being on EdgeFinder signals that your business is professionally managed — a competitive differentiator.' },
  { icon: Users,      title: 'Customer Connection Flow',   desc: 'Allow customers to reach you directly from your listing — through contact, booking, or inquiry flows.' },
]

const governancePoints = [
  'Listings sourced only from verified EdgeSuite business accounts',
  'Business owners control their own profile data and visibility',
  'No third-party unverified business submissions in v1',
  'Location and category data drawn from business configuration in EdgeSuite apps',
  'No ratings or reviews in v1 — discovery focus only',
]

const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Core Directory',
    desc: 'Business registration from EdgeSuite accounts. Category taxonomy, basic search concept, and profile page display.',
    status: 'In Design',
    statusColor: 'amber' as const,
  },
  {
    phase: 'Phase 2',
    title: 'Search & Discovery',
    desc: 'Location-aware search, category filtering, and customer-facing business discovery experience.',
    status: 'Planned',
    statusColor: 'grey' as const,
  },
  {
    phase: 'Phase 3',
    title: 'Connection & Engagement',
    desc: 'Customer inquiry flows, booking connections, and engagement analytics for business owners.',
    status: 'Planned',
    statusColor: 'grey' as const,
  },
]

export default function EdgeFinder() {
  return (
    <>
      <PageMeta
        title="EdgeFinder — Business Discovery Powered by CoreEdge (In Development)"
        description="EdgeFinder is a discovery layer powered by CoreEdge that helps customers find EdgeSuite-powered businesses by industry, service, and location — currently in development."
        path="/products/edgefinder"
      />

      <div className="edgefinder-page" style={{ paddingTop: 72 }}>

        {/* ── Hero ── */}
        <section className="ef-hero">
          <div className="container ef-hero__inner">
            <div className="ef-hero__content">
              <div className="ef-hero__badge-row">
                <div className="ef-hero__icon">
                  <Search size={24} color="#7ec5ff" />
                </div>
                <span className="ef-hero__badge">In Development</span>
                <span className="ef-hero__badge ef-hero__badge--layer">Discovery Layer</span>
              </div>
              <h1 className="ef-hero__title">EdgeFinder</h1>
              <p className="ef-hero__tagline">Help customers find EdgeSuite-powered businesses near them.</p>
              <p className="ef-hero__desc">
                EdgeFinder is a discovery layer powered by CoreEdge, designed to help customers discover
                businesses using EdgeSuite — across veterinary care, retail, education, hospitality,
                cooperatives, agriculture, clinics, churches, and more.
              </p>

              <div className="ef-hero__notice">
                <Clock size={14} />
                EdgeFinder is currently in development. No live directory is available yet. Feature descriptions represent our planned capabilities.
              </div>

              <div className="ef-hero__actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Register Interest <ArrowRight size={15} />
                </Link>
                <a href="#how-it-works" className="btn btn-hero-ghost btn-lg">
                  How It Works
                </a>
              </div>
            </div>

            {/* Hero visual — dynamic image & overlay */}
            <div className="ef-hero__visual">
              <div className="ef-hero__image-wrap">
                <img 
                  src="/edgefinder-discovery-hero.png" 
                  alt="Professional using EdgeFinder to locate a verified school in Lagos" 
                  className="ef-hero__image"
                />
                <div className="ef-hero__overlay-card">
                  <div className="ef-hero__overlay-header">
                    <span className="ef-hero__overlay-dot" />
                    <span>Discovery Status</span>
                  </div>
                  <div className="ef-hero__overlay-items">
                    <div className="ef-hero__overlay-item">
                      <span className="ef-hero__overlay-item-badge ef-hero__overlay-item-badge--amber">In Design</span>
                      <span>Directory Core</span>
                    </div>
                    <div className="ef-hero__overlay-item">
                      <span className="ef-hero__overlay-item-badge ef-hero__overlay-item-badge--grey">Planned</span>
                      <span>Search &amp; Map</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What EdgeFinder Does ── */}
        <section className="section section-alt" id="how-it-works">
          <div className="container ef-what__inner">
            <div className="ef-what__text">
              <div className="ef-section-label">About EdgeFinder</div>
              <h2 className="section-title">A Discovery Layer Built on CoreEdge</h2>
              <p className="ef-para">
                EdgeFinder sits inside CoreEdge — the shared platform layer that powers every ProcessEdge product.
                It uses the business data already configured in EdgeSuite apps (category, location, services) to
                create a structured, trust-backed directory of EdgeSuite-powered businesses.
              </p>
              <p className="ef-para">
                Unlike generic business directories, EdgeFinder only lists businesses that actively use EdgeSuite
                software. This means every listing reflects a real, software-managed operation — not a manually
                submitted, unverified entry.
              </p>
              <ul className="ef-gov-list">
                {governancePoints.map(pt => (
                  <li key={pt}>
                    <CheckCircle2 size={15} color="var(--blue)" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ef-what__aside">
              <div className="ef-value-card">
                <div className="ef-value-card__label">CoreEdge-Powered</div>
                <h3 className="ef-value-card__title">Why EdgeFinder is Different</h3>
                <p className="ef-value-card__desc">
                  Every business on EdgeFinder is verified through their EdgeSuite account —
                  not submitted manually. Discovery is built on operational data, not unverified claims.
                </p>
                <Link to="/products/core" className="btn btn-secondary btn-sm" style={{ marginTop: 20 }}>
                  Learn About CoreEdge <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── For Customers ── */}
        <section className="section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 52 }}>
              <div className="ef-section-label">For Customers</div>
              <h2 className="section-title">Find Businesses with Confidence</h2>
              <p className="section-subtitle">
                EdgeFinder is designed to make it easy for customers to discover and connect with
                professionally managed businesses across every EdgeSuite-powered category.
              </p>
            </div>
            <div className="ef-benefits-grid">
              {customerBenefits.map(b => (
                <div key={b.title} className="ef-benefit-card">
                  <div className="ef-benefit-card__icon ef-benefit-card__icon--blue">
                    <b.icon size={20} />
                  </div>
                  <h3 className="ef-benefit-card__title">{b.title}</h3>
                  <p className="ef-benefit-card__desc">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── For Business Owners ── */}
        <section className="section section-alt">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 52 }}>
              <div className="ef-section-label ef-section-label--green">For Business Owners</div>
              <h2 className="section-title">Get Discovered. Stay in Control.</h2>
              <p className="section-subtitle">
                If your business uses an EdgeSuite app, EdgeFinder gives you a verified presence
                customers can find — with you in full control of your profile data.
              </p>
            </div>
            <div className="ef-benefits-grid">
              {ownerBenefits.map(b => (
                <div key={b.title} className="ef-benefit-card ef-benefit-card--green">
                  <div className="ef-benefit-card__icon ef-benefit-card__icon--green">
                    <b.icon size={20} />
                  </div>
                  <h3 className="ef-benefit-card__title">{b.title}</h3>
                  <p className="ef-benefit-card__desc">{b.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link to="/contact" className="btn btn-primary">
                List Your Business <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Discovery Categories ── */}
        <section className="section" id="categories">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 52 }}>
              <div className="ef-section-label">Categories</div>
              <h2 className="section-title">Industry Categories in EdgeFinder</h2>
              <p className="section-subtitle">
                These are the planned discovery categories, aligned with the industries served by EdgeSuite apps.
                No live listings exist yet — categories shown reflect the planned structure.
              </p>
            </div>
            <div className="ef-cat-grid">
              {discoveryCategories.map(cat => (
                <div key={cat.label} className="ef-cat-card">
                  <div className="ef-cat-card__icon">
                    <cat.icon size={22} />
                  </div>
                  <div className="ef-cat-card__label">{cat.label}</div>
                  <p className="ef-cat-card__desc">{cat.desc}</p>
                  <span className="ef-cat-card__coming">Planned</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Development Timeline ── */}
        <section className="section section-alt">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 52 }}>
              <div className="ef-section-label">Roadmap</div>
              <h2 className="section-title">Development Progress</h2>
              <p className="section-subtitle">
                EdgeFinder is being built in phases. No dates are committed — phases represent design and development stages.
              </p>
            </div>
            <div className="ef-timeline">
              {roadmapPhases.map(ph => (
                <div key={ph.phase} className="ef-timeline__card">
                  <div className="ef-timeline__phase-label">{ph.phase}</div>
                  <h3 className="ef-timeline__title">{ph.title}</h3>
                  <p className="ef-timeline__desc">{ph.desc}</p>
                  <div className={`ef-timeline__status ef-timeline__status--${ph.statusColor}`}>
                    <span className="ef-timeline__dot" />
                    {ph.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          headline="Interested in Being Part of EdgeFinder?"
          subtext="Whether you're a customer looking forward to finding local businesses, or a business owner wanting to be discoverable — register your interest and we'll keep you updated."
          primaryLabel="Register Interest"
          primaryTo="/contact"
          secondaryLabel="Talk to Us"
          secondaryTo="/contact"
          variant="blue"
        />
      </div>
    </>
  )
}
