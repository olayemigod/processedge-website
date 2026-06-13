import {
  ShoppingCart,
  GraduationCap,
  Stethoscope,
  Calculator,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import './TrustSection.css'
import RevealGroup from './RevealGroup'

/**
 * TrustSection — Sector-based operational credibility signals.
 *
 * No fake testimonials, client names, logos, or numbers.
 * Each card describes real operational outcomes achievable with
 * ProcessEdge products — grounded in actual product capabilities.
 */

const trustCards = [
  {
    icon: GraduationCap,
    sector: 'Education & CBT',
    headline: 'Purpose-built for how Nigerian schools actually operate',
    body: 'EduEdge brings CBT exam delivery, question bank management, student records, fee administration, and academic reporting into one coordinated platform — designed around real school workflows, not adapted from generic ERP.',
    link: '/products/eduedge',
    color: 'blue' as const,
  },
  {
    icon: ShoppingCart,
    sector: 'Retail & Branch Operations',
    headline: 'Designed around how retail and branch businesses manage inventory and sales',
    body: 'Retail Sales Automation via ERPNext gives growing retail businesses full POS workflow, multi-branch stock visibility, pricing control, cashier management, and sales reporting — structured to replace disconnected tracking methods.',
    link: '/services/retail-sales-automation',
    color: 'green' as const,
  },
  {
    icon: Stethoscope,
    sector: 'Healthcare & Veterinary',
    headline: 'Clinical and veterinary workflows without the paperwork overhead',
    body: 'ClinicEdge and VetEdge structure consultations, patient and animal records, billing, pharmacy management, and diagnostic workflows into one coordinated system — so practitioners spend time on care, not administration.',
    link: '/products/clinicedge',
    color: 'blue' as const,
  },
  {
    icon: Calculator,
    sector: 'ERP & Business Accounting',
    headline: 'Financial structure and reporting that management can actually rely on',
    body: 'ProcessEdge Accounting Solutions deliver chart of accounts, systematic bookkeeping, management accounts, and tax-ready financial reporting — built on ERPNext\'s proven accounting engine and configured for Nigerian business needs.',
    link: '/services/accounting-solutions',
    color: 'green' as const,
  },
]

export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="text-center trust-section__header">
          <div className="section-label section-label-blue">Industry Focus</div>
          <h2 className="section-title">Built Around How Each Sector Actually Operates</h2>
          <p className="section-subtitle">
            ProcessEdge doesn't offer a single ERP platform with renamed modules.
            Each product is designed around the specific workflows, terminology, and
            operational structure of its industry.
          </p>
        </div>

        <RevealGroup className="trust-grid">
          {trustCards.map((card) => (
            <div key={card.sector} className={`trust-card trust-card--${card.color} reveal-card`}>
              <div className={`trust-card__icon trust-card__icon--${card.color}`}>
                <card.icon size={20} />
              </div>
              <div className={`trust-card__sector trust-card__sector--${card.color}`}>
                {card.sector}
              </div>
              <h3 className="trust-card__headline">{card.headline}</h3>
              <p className="trust-card__body">{card.body}</p>
              <Link to={card.link} className={`trust-card__cta trust-card__cta--${card.color}`}>
                Learn more <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
