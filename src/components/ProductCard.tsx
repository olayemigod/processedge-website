import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import './ProductCard.css'

interface ProductCardProps {
  name: string
  tagline: string
  description: string
  features: string[]
  path: string
  icon: LucideIcon
  accentColor?: 'blue' | 'green'
  badge?: string
}

export default function ProductCard({
  name,
  tagline,
  description,
  features,
  path,
  icon: Icon,
  accentColor = 'blue',
  badge,
}: ProductCardProps) {
  return (
    <div className={`product-card product-card--${accentColor}`}>
      {badge && <div className="product-card__badge">{badge}</div>}
      <div className={`product-card__icon icon-box icon-box-${accentColor}`}>
        <Icon size={24} />
      </div>
      <div className="product-card__name">{name}</div>
      <div className="product-card__tagline">{tagline}</div>
      <p className="product-card__desc">{description}</p>
      <ul className="product-card__features">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <Link to={path} className="product-card__link">
        Learn More <ArrowRight size={14} />
      </Link>
    </div>
  )
}
