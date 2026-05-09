import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import './ServiceCard.css'

interface ServiceCardProps {
  title: string
  description: string
  outcomes: string[]
  path: string
  icon: LucideIcon
}

export default function ServiceCard({ title, description, outcomes, path, icon: Icon }: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="service-card__icon">
        <Icon size={26} />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
      <div className="service-card__outcomes">
        {outcomes.map((o, i) => (
          <span key={i} className="feature-tag">{o}</span>
        ))}
      </div>
      <Link to={path} className="service-card__link">
        Explore Service <ArrowRight size={14} />
      </Link>
    </div>
  )
}
