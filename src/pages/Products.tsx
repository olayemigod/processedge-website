import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import CTASection from '../components/CTASection'
import PageMeta from '../components/PageMeta'
import { EDGESUITE_PRODUCTS } from '../data/edgeSuiteProducts'
import './Products.css'

export default function Products() {
  const coreEdge = EDGESUITE_PRODUCTS.find(p => p.slug === 'core')
  const edgePay = EDGESUITE_PRODUCTS.find(p => p.slug === 'edgepay')
  const industryApps = EDGESUITE_PRODUCTS.filter(p => p.category === 'Industry App')

  return (
    <>
      <PageMeta
        title="EdgeSuite Product Catalog — Business Operations & Payments Ecosystem"
        description="Explore the ProcessEdge EdgeSuite: CoreEdge platform foundation, EdgePay infrastructure, and purpose-built industry applications for schools, clinics, retail, cooperatives, and hotels."
        path="/products"
      />
      <div className="products-page">
        {/* --- Hero --- */}
        <section className="products-hero" aria-label="EdgeSuite Hero">
          <div className="container">
            <div className="products-hero__content">
              <div className="section-label page-hero-label" style={{ background: 'rgba(255, 255, 255, 0.15)', color: 'var(--white)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                EdgeSuite Product Suite
              </div>
              <h1>Our Product Ecosystem</h1>
              <p>
                ProcessEdge products are integrated under the EdgeSuite ecosystem. From our robust platform layer to modular payment infrastructure and vertical apps, we provide end-to-end operational software tailored for African businesses.
              </p>
            </div>
          </div>
        </section>

        {/* --- Platform Foundation Section --- */}
        {coreEdge && (
          <section className="products-section" aria-labelledby="platform-heading">
            <div className="container">
              <div className="products-section__header">
                <div className="section-label">Platform Foundation</div>
                <h2 id="platform-heading" className="products-section__title">The Core EdgeSuite Foundation</h2>
                <p className="products-section__subtitle">
                  CoreEdge serves as the unified platform engine behind the entire EdgeSuite, handling fundamental services and administration.
                </p>
              </div>

              <div className="platform-hero-card">
                <div className="platform-hero-card__info">
                  <div className="platform-hero-card__icon-box">
                    <coreEdge.icon size={28} />
                  </div>
                  <h3 className="platform-hero-card__title">{coreEdge.name}</h3>
                  <div className="platform-hero-card__tagline">{coreEdge.targetSector}</div>
                  <p className="platform-hero-card__desc">{coreEdge.shortDescription}</p>
                  
                  <Link to={coreEdge.ctaLink} className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>
                    {coreEdge.ctaLabel} <ArrowRight size={14} style={{ marginLeft: 6 }} />
                  </Link>
                </div>

                <div className="platform-hero-card__features">
                  <div className="platform-hero-card__features-title">Core Administration Capabilities</div>
                  <ul className="platform-hero-card__features-list">
                    {coreEdge.keyFeatures.map(feat => (
                      <li key={feat}>
                        <CheckCircle2 size={16} color="var(--blue)" style={{ marginTop: 2 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- Payments Infrastructure Section --- */}
        {edgePay && (
          <section className="products-section products-section--alt" aria-labelledby="payments-heading">
            <div className="container">
              <div className="products-section__header">
                <div className="section-label" style={{ background: '#f5f3ff', color: '#7c3aed', border: '1px solid rgba(124, 58, 237, 0.15)' }}>Payments Infrastructure</div>
                <h2 id="payments-heading" className="products-section__title">Standalone Payments Infrastructure</h2>
                <p className="products-section__subtitle">
                  EdgePay is a standalone payments orchestration engine providing secure transaction clearing, bank transfers matching, and external API widgets.
                </p>
              </div>

              <div className="payments-hero-card">
                <div className="payments-hero-card__info">
                  <div className="payments-hero-card__icon-box">
                    <edgePay.icon size={28} />
                  </div>
                  <h3 className="payments-hero-card__title">{edgePay.name}</h3>
                  <div className="payments-hero-card__tagline">{edgePay.targetSector}</div>
                  <p className="payments-hero-card__desc">{edgePay.shortDescription}</p>
                  
                  <Link to={edgePay.ctaLink} className="btn" style={{ background: '#7c3aed', color: 'var(--white)', alignSelf: 'flex-start', marginTop: 'auto' }}>
                    {edgePay.ctaLabel} <ArrowRight size={14} style={{ marginLeft: 6 }} />
                  </Link>
                </div>

                <div className="payments-hero-card__features">
                  <div className="payments-hero-card__features-title">Transaction Capabilities</div>
                  <ul className="payments-hero-card__features-list">
                    {edgePay.keyFeatures.map(feat => (
                      <li key={feat}>
                        <CheckCircle2 size={16} color="#7c3aed" style={{ marginTop: 2 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- Industry Applications Grid --- */}
        <section className="products-section" aria-labelledby="industry-heading">
          <div className="container">
            <div className="products-section__header">
              <div className="section-label">Industry Applications</div>
              <h2 id="industry-heading" className="products-section__title">Industry-Specific Applications</h2>
              <p className="products-section__subtitle">
                Vertical operational suites built specifically for the workflows of key industries, running on our unified platform.
              </p>
            </div>

            <div className="catalog-grid">
              {industryApps.map(prod => {
                const IconComponent = prod.icon
                const statusClass = prod.status.toLowerCase().replace(' ', '-')
                
                return (
                  <div key={prod.name} className={`catalog-card catalog-card--${prod.color}`}>
                    <div className="catalog-card__header-row">
                      <div className={`catalog-card__icon-box catalog-card__icon-box--${prod.color}`}>
                        <IconComponent size={22} />
                      </div>
                      <span className={`catalog-badge catalog-badge--${statusClass}`}>
                        {prod.status}
                      </span>
                    </div>

                    <h3 className="catalog-card__title">{prod.name}</h3>
                    <div className="catalog-card__tagline">{prod.targetSector}</div>
                    <p className="catalog-card__desc">{prod.shortDescription}</p>

                    <div className="catalog-card__features-title">Key Modules</div>
                    <ul className="catalog-card__features">
                      {prod.keyFeatures.map(feat => (
                        <li key={feat}>
                          <CheckCircle2 size={13} color={prod.color === 'green' ? 'var(--green)' : prod.color === 'purple' ? '#7c3aed' : 'var(--blue)'} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <Link 
                      to={prod.ctaLink} 
                      className="catalog-card__cta"
                    >
                      {prod.ctaLabel} <ArrowRight size={13} />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* --- Footer CTA --- */}
        <CTASection
          headline="Looking for a Tailored Implementation?"
          subtext="Book a discovery consultation and let's review your operational processes, scoping details, and integration requirements."
          primaryLabel="Book a Free Consultation"
          primaryTo="/contact"
          secondaryLabel="Contact Sales"
          secondaryTo="/contact"
          variant="blue"
        />
      </div>
    </>
  )
}
