import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import { MessageSquare } from 'lucide-react'

export default function Pricing() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">Pricing</div>
          <h1>Transparent, Project-Based Pricing</h1>
          <p>ProcessEdge pricing is based on the scope of your project — the product, modules, number of users, customization requirements, and support level. Every engagement is quoted after a free discovery session.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ background: '#fff8e1', border: '1px solid #ffe082', borderLeft: '4px solid #f59e0b', borderRadius: 8, padding: '16px 20px', marginBottom: 48 }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#78350f', marginBottom: 6 }}>📋 Pricing Page Coming Soon</p>
            <p style={{ fontSize: '0.85rem', color: '#92400e', lineHeight: 1.65 }}>
              Detailed pricing tiers are being finalised. In the meantime, book a free consultation and we'll provide a tailored quote based on your specific requirements.
            </p>
          </div>

          <div className="grid-2" style={{ gap: 24, marginBottom: 48 }}>
            {[
              { title: 'Implementation Projects', items: ['Scoped per project', 'Includes configuration, migration, customization', 'Training included', 'Go-live support included'] },
              { title: 'Monthly Support Retainers', items: ['Post-launch system support', 'Bug fixes and configuration changes', 'User support and training sessions', 'Tiered by hours and response time'] },
              { title: 'Product Licencing', items: ['Annual subscription per product', 'Priced per organization / branch', 'Includes updates and patches', 'Self-hosted or cloud options'] },
              { title: 'Training Packages', items: ['Standalone training sessions', 'Role-based (user / admin)', 'Remote or on-site delivery', 'Documentation package available'] },
            ].map(tier => (
              <div key={tier.title} className="card">
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', fontWeight: 700, marginBottom: 14 }}>{tier.title}</h3>
                {tier.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.86rem', color: 'var(--text-body)', marginBottom: 8 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }} />{item}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', padding: 40, background: 'var(--grey-light)', borderRadius: 16 }}>
            <div style={{ width: 52, height: 52, background: 'var(--blue-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <MessageSquare size={22} color="var(--blue)" />
            </div>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.15rem', marginBottom: 10 }}>Get a Custom Quote</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: 440, margin: '0 auto 24px', lineHeight: 1.7 }}>
              Every business is different. Tell us about your organization and we'll prepare a detailed, no-obligation proposal.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">Request a Quote</Link>
          </div>
        </div>
      </section>

      <CTASection headline="Let's Discuss Your Budget & Requirements" subtext="We work with businesses of all sizes. Book a free discovery session and we'll find the right scope for your budget." primaryLabel="Book a Free Discovery Session" secondaryLabel="Contact Us" secondaryTo="/contact" />
    </div>
  )
}
