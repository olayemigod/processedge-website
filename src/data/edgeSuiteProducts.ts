import {
  Cpu,
  CreditCard,
  ShoppingCart,
  PawPrint,
  GraduationCap,
  Activity,
  Sprout,
  Hotel,
  Users,
  Church,
  LucideIcon
} from 'lucide-react'

export interface EdgeSuiteProduct {
  name: string
  slug: string
  category: 'Platform Foundation' | 'Payments Infrastructure' | 'Industry App'
  status: 'Platform Foundation' | 'In Development' | 'Active Development' | 'Planned' | 'Development'
  targetSector: string
  shortDescription: string
  keyFeatures: string[]
  ctaLabel: string
  ctaLink: string
  icon: LucideIcon
  color: 'blue' | 'green' | 'purple'
  badge?: string
}

export const EDGESUITE_PRODUCTS: EdgeSuiteProduct[] = [
  {
    name: 'CoreEdge',
    slug: 'core',
    category: 'Platform Foundation',
    status: 'Platform Foundation',
    targetSector: 'Ecosystem Foundation',
    shortDescription: 'CoreEdge is the platform foundation behind EdgeSuite, supporting identity, app access, branch context, subscriptions, notifications, wallet credits, and administrative control.',
    keyFeatures: [
      'Shared Authentication Foundation',
      'SMS & WhatsApp Notification Wallet',
      'API Layer & Multi-Tenant Architecture',
      'Central Subscription & Account Management'
    ],
    ctaLabel: 'Explore CoreEdge',
    ctaLink: '/products/core',
    icon: Cpu,
    color: 'blue'
  },
  {
    name: 'EdgePay',
    slug: 'edgepay',
    category: 'Payments Infrastructure',
    status: 'In Development',
    targetSector: 'Payments Orchestration',
    shortDescription: 'Standalone payment orchestration and business payment infrastructure for ProcessEdge apps and external businesses.',
    keyFeatures: [
      'Payment Gateway Orchestration',
      'Bank Transfer Matching & Reconciliation',
      'Secure Checkout Widgets',
      'Direct API Integration'
    ],
    ctaLabel: 'Contact Sales',
    ctaLink: '/products/edgepay',
    icon: CreditCard,
    color: 'purple'
  },
  {
    name: 'RetailEdge',
    slug: 'retailedge',
    category: 'Industry App',
    status: 'Active Development',
    targetSector: 'Retail & POS',
    shortDescription: 'Retail sales, POS control, payment verification, daily audit readiness, cashier expense control, and bank transaction matching.',
    keyFeatures: [
      'Multi-Branch Inventory Sync',
      'Cashier Shift & Till Auditing',
      'Instant Transfer Verification',
      'Bank Statement Matching'
    ],
    ctaLabel: 'Request Access',
    ctaLink: '/products/retailedge',
    icon: ShoppingCart,
    color: 'green'
  },
  {
    name: 'VetEdge',
    slug: 'vetedge',
    category: 'Industry App',
    status: 'Active Development',
    targetSector: 'Veterinary Clinics',
    shortDescription: 'Veterinary clinic operations, appointments, animal records, consultations, vaccination tracking, billing, and owner workflows.',
    keyFeatures: [
      'Patient & Animal Records',
      'Vaccination Planner & Reminders',
      'Consultation SOAP Logs',
      'Prescription & Billing Sync'
    ],
    ctaLabel: 'Explore VetEdge',
    ctaLink: '/products/vetedge',
    icon: PawPrint,
    color: 'green'
  },
  {
    name: 'EduEdge',
    slug: 'eduedge',
    category: 'Industry App',
    status: 'Development',
    targetSector: 'Education & CBT',
    shortDescription: 'School management, CBT, exams, academic records, analytics, and education workflow automation.',
    keyFeatures: [
      'CBT Examination Engine',
      'Question Bank Management',
      'Student & Parent Portals',
      'Fee Collection & Term Reports'
    ],
    ctaLabel: 'Register Interest',
    ctaLink: '/products/eduedge',
    icon: GraduationCap,
    color: 'green'
  },
  {
    name: 'ClinicEdge',
    slug: 'clinicedge',
    category: 'Industry App',
    status: 'Planned',
    targetSector: 'Healthcare & Clinics',
    shortDescription: 'Clinic operations, appointments, patient records, billing, and healthcare workflow automation.',
    keyFeatures: [
      'Electronic Health Records (EHR)',
      'Department Queuing & Triage',
      'Ward & Pharmacy Inventory Control',
      'Medical Referral Tracking'
    ],
    ctaLabel: 'Explore ClinicEdge',
    ctaLink: '/products/clinicedge',
    icon: Activity,
    color: 'blue'
  },
  {
    name: 'AgricEdge',
    slug: 'agricedge',
    category: 'Industry App',
    status: 'Planned',
    targetSector: 'Agribusiness',
    shortDescription: 'Farm, agribusiness, inventory, sales, production, and field activity management.',
    keyFeatures: [
      'Crop & Livestock Logs',
      'Farm Input Disbursement',
      'Farmer Profiles & Procurement',
      'Aggregation & Aggregator Ledgers'
    ],
    ctaLabel: 'Explore AgricEdge',
    ctaLink: '/products/agricedge',
    icon: Sprout,
    color: 'green'
  },
  {
    name: 'HotelEdge',
    slug: 'hoteledge',
    category: 'Industry App',
    status: 'Planned',
    targetSector: 'Hospitality',
    shortDescription: 'Hotel reservations, front desk, guest billing, housekeeping, and operations management.',
    keyFeatures: [
      'Front Desk Room Grid',
      'Online Booking & Check-in',
      'Housekeeping Scheduler',
      'Guest Folio & Restaurant POS Sync'
    ],
    ctaLabel: 'Explore HotelEdge',
    ctaLink: '/products/hoteledge',
    icon: Hotel,
    color: 'blue'
  },
  {
    name: 'CoopEdge',
    slug: 'coopedge',
    category: 'Industry App',
    status: 'Planned',
    targetSector: 'Cooperatives',
    shortDescription: 'Cooperative membership, contributions, savings, loans, dues, approvals, and reporting.',
    keyFeatures: [
      'Member Savings Registers',
      'Loan Application & Amortisation',
      'Dividend Computation',
      'Meeting Minutes & Approvals'
    ],
    ctaLabel: 'Explore CoopEdge',
    ctaLink: '/products/coopedge',
    icon: Users,
    color: 'green'
  },
  {
    name: 'ChurchEdge',
    slug: 'churchedge',
    category: 'Industry App',
    status: 'Planned',
    targetSector: 'Ministries & Churches',
    shortDescription: 'Church membership, giving, programmes, departments, follow-up, branches, and ministry operations.',
    keyFeatures: [
      'Member Directory & Groups',
      'First-Timer Follow-up Pipelines',
      'Giving, Dues & Pledges Analytics',
      'Service Attendance Loggers'
    ],
    ctaLabel: 'Explore ChurchEdge',
    ctaLink: '/products/churchedge',
    icon: Church,
    color: 'blue'
  }
]
