import { Settings, Calculator, ShoppingCart, BookOpen } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import ProcessSteps from '../components/ProcessSteps'
import CTASection from '../components/CTASection'

const services = [
  {
    title: 'ERP Implementation',
    description: 'End-to-end ERPNext and Frappe implementation — from discovery and configuration to data migration, customization, training, and go-live support.',
    outcomes: ['ERPNext/Frappe', 'Data migration', 'Custom modules', 'Go-live support'],
    path: '/services/erp-implementation',
    icon: Settings,
  },
  {
    title: 'Accounting Solutions',
    description: 'Professional bookkeeping, chart of accounts setup, financial reporting, receivables/payables management, and tax-ready management accounts.',
    outcomes: ['Bookkeeping', 'Financial reports', 'AR/AP management', 'Tax-ready records'],
    path: '/services/accounting-solutions',
    icon: Calculator,
  },
  {
    title: 'Retail Sales Automation',
    description: 'Automate your retail operations with POS, inventory control, pricing management, sales reporting, cashier workflows, and multi-branch controls.',
    outcomes: ['POS systems', 'Inventory control', 'Sales analytics', 'Barcode & branches'],
    path: '/services/retail-sales-automation',
    icon: ShoppingCart,
  },
  {
    title: 'Training & Support',
    description: 'Practical user and admin training, ERP support, system documentation, onboarding programmes, and ongoing process adoption for your team.',
    outcomes: ['User training', 'Admin training', 'Documentation', 'Ongoing support'],
    path: '/services/training-support',
    icon: BookOpen,
  },
]

export default function Services() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label page-hero-label">What We Do</div>
          <h1>End-to-End Business Process Services</h1>
          <p>
            From ERP rollout to accounting automation and retail management — we handle the full implementation lifecycle so you can focus on running your business.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 52 }}>
            <div className="section-label section-label-blue">Our Services</div>
            <h2 className="section-title">How We Help Your Business</h2>
            <p className="section-subtitle">
              Every service is backed by deep technical expertise and a practical understanding of how Nigerian businesses actually operate.
            </p>
          </div>
          <div className="grid-2" style={{ gap: 28 }}>
            {services.map(s => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />

      <CTASection
        headline="Ready to Transform Your Operations?"
        subtext="Tell us about your business and we'll recommend the right combination of services to move you forward."
        primaryLabel="Book a Free Consultation"
        secondaryLabel="View Our Products"
        secondaryTo="/products"
      />
    </div>
  )
}
