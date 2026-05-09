import { Link } from 'react-router-dom'
import './CTASection.css'

interface CTASectionProps {
  headline?: string
  subtext?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
  variant?: 'blue' | 'dark' | 'green'
}

export default function CTASection({
  headline = 'Ready to Build Better Business Processes?',
  subtext = "Join businesses already transforming their operations with ProcessEdge Solutions. Let's build something that works.",
  primaryLabel = 'Start Your Transformation',
  primaryTo = '/contact',
  secondaryLabel = 'Explore Our Products',
  secondaryTo = '/products',
  variant = 'blue',
}: CTASectionProps) {
  return (
    <section className={`cta-section cta-section--${variant}`}>
      <div className="container cta-section__inner">
        <div className="cta-section__badge">Get Started</div>
        <h2 className="cta-section__headline">{headline}</h2>
        <p className="cta-section__subtext">{subtext}</p>
        <div className="cta-section__actions">
          <Link to={primaryTo} className="btn btn-white btn-lg">{primaryLabel}</Link>
          {secondaryLabel && (
            <Link to={secondaryTo} className="btn cta-section__secondary btn-lg">{secondaryLabel}</Link>
          )}
        </div>
      </div>
    </section>
  )
}
