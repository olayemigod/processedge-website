import { Users, PiggyBank, FileText, BarChart2, Shield, DollarSign, Layers, Bell } from 'lucide-react'
import ProductPageLayout from '../../components/ProductPageLayout'
import type { ProductPageData } from '../../components/ProductPageLayout'

const data: ProductPageData = {
  name: 'CoopEdge',
  badge: 'Industry Product',
  badgeVariant: 'green',
  tagline: 'Cooperative & Member-Based Organisation Management',
  heroDesc: 'CoopEdge helps cooperatives and member-based organisations manage members, savings, loans, contributions, repayments, approvals, and financial records in one structured system.',
  primaryCTA: 'Book a Demo',
  secondaryCTA: 'Read the Guide',
  secondaryTo: '/resources/cooperative-management-system',
  icon: Users,
  iconColor: '#4de8a0',
  iconBg: 'rgba(28,156,93,0.2)',

  problemHeading: 'Cooperative Records Need More Than a Spreadsheet',
  problemBody: [
    'A cooperative that manages member savings, loans, and contributions manually is carrying structural risk. An error in a member\'s savings balance, a loan disbursement not properly recorded, or a dividend calculation that cannot be independently verified erodes the confidence that the cooperative\'s leadership has worked to build.',
    'As membership grows, the administrative complexity grows with it. Loan applications pile up. Repayment tracking becomes a separate exercise. Financial statements take days to compile at year end. Members call to verify their balances because they do not trust the records.',
  ],
  problemPoints: [
    'Savings and loan balances maintained in separate spreadsheets',
    'Loan approval process handled informally — no clear workflow or audit trail',
    'Dividend computation done manually across hundreds of member accounts',
    'Members cannot self-serve their account statements',
    'Year-end audit preparation requires weeks of manual reconciliation',
  ],
  valueBody: 'CoopEdge gives cooperatives a structured, accountable platform for managing every member obligation — savings, loans, contributions, approvals, and financial reporting — in one system.',

  featuresHeading: 'What CoopEdge Covers',
  featuresSubtext: 'Every feature is built around the real operational needs of cooperative societies — accuracy, accountability, and member trust.',
  features: [
    { icon: Users,      title: 'Member Records & Profiles',        desc: 'Comprehensive member database — KYC documents, account status, next-of-kin records, and full transaction history.', color: 'green' },
    { icon: PiggyBank,  title: 'Savings & Contribution Tracking',  desc: 'Regular savings, special savings, share capital, and thrift contributions — all processed per member with schedule automation.', color: 'blue' },
    { icon: DollarSign, title: 'Loan Application & Approval',      desc: 'Multi-stage loan workflow — application, guarantor assignment, committee approval, disbursement, and repayment schedule.', color: 'green' },
    { icon: FileText,   title: 'Loan Repayment Tracking',          desc: 'Every instalment posted, outstanding balance updated automatically. Overdue accounts flagged for follow-up.', color: 'blue' },
    { icon: Layers,     title: 'Shares & Member Equity',           desc: 'Share capital records per member. Equity position updated with every contribution and allocated dividend.', color: 'green' },
    { icon: Shield,     title: 'Dues & Levy Management',           desc: 'Track statutory dues, levies, and special charges per member. Flag accounts with outstanding obligations.', color: 'blue' },
    { icon: BarChart2,  title: 'Financial Reports & Statements',   desc: 'Balance sheet, income and expenditure, trial balance, and member statements — generated from live data at any time.', color: 'green' },
    { icon: Bell,       title: 'Notification Wallet Readiness',    desc: 'SMS, WhatsApp, and email communication support for loan approval alerts, repayment reminders, and account statements.', color: 'blue' },
  ],

  modulesHeading: 'How CoopEdge Supports Cooperative Operations',
  modulesNote: 'Every transaction is timestamped, auditable, and linked to the member record — so every balance can be explained and every decision can be traced.',
  modules: [
    { label: 'Member Registration & KYC',       color: 'green' },
    { label: 'Share Capital Management',         color: 'green' },
    { label: 'Savings Schedule Processing',      color: 'blue'  },
    { label: 'Special Savings Accounts',         color: 'blue'  },
    { label: 'Dues & Levy Tracking',             color: 'green' },
    { label: 'Loan Application Workflow',        color: 'blue'  },
    { label: 'Guarantor Management',             color: 'blue'  },
    { label: 'Loan Disbursement',                color: 'green' },
    { label: 'Repayment Tracking',               color: 'green' },
    { label: 'Overdue Account Management',       color: 'blue'  },
    { label: 'Dividend Computation',             color: 'blue'  },
    { label: 'Member Statements',                color: 'green' },
    { label: 'Financial Reporting',              color: 'green' },
    { label: 'Audit Trail',                      color: 'blue'  },
    { label: 'Multi-branch / Multi-chapter',     color: 'blue'  },
  ],

  forHeading: 'Who CoopEdge Is For',
  forIntro: 'Built for cooperative societies and member-based financial organisations.',
  forList: [
    'Savings and credit cooperatives (SACCO)',
    'Staff cooperative societies',
    'Multipurpose cooperative unions',
    'Community savings groups',
    'Microfinance-linked cooperatives',
    'Multi-chapter cooperative organisations',
  ],

  relatedResources: [
    { title: 'Cooperative Management System: Managing Members, Savings, Loans, and Reports', path: '/resources/cooperative-management-system', category: 'Cooperative' },
    { title: 'Accounting Control for SMEs: Moving Beyond Manual Records', path: '/resources/accounting-control-for-smes', category: 'Accounting' },
    { title: 'Software Training and Adoption: Why Systems Fail Without People', path: '/resources/software-training-and-adoption', category: 'Training' },
  ],

  ctaHeadline: 'Bring Structure and Accountability to Your Cooperative',
  ctaSubtext: 'Book a CoopEdge demo and see how member records, savings, loans, and financial reporting connect in one accountable platform.',
}

export default function CoopEdge() {
  return <ProductPageLayout d={data} />
}
