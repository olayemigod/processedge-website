import {
  Calculator, BarChart2, CreditCard, FileText,
  Shield, TrendingUp, Layers, DollarSign, BookOpen
} from 'lucide-react'
import ServicePageLayout from '../../components/ServicePageLayout'
import type { ServicePageData } from '../../components/ServicePageLayout'

const data: ServicePageData = {
  name: 'Accounting Solutions',
  badge: 'Professional Service',
  tagline: 'Structured Financial Records, Reporting, and Operational Visibility',
  heroDesc: 'Accounting Solutions helps businesses structure financial records, improve reporting, control cash and bank movement, and connect accounting with daily sales, purchasing, and inventory operations.',
  icon: Calculator,
  iconColor: '#7ec5ff',
  iconBg: 'rgba(0,86,166,0.2)',
  primaryCTA: 'Book a Consultation',
  secondaryCTA: 'Talk to ProcessEdge',

  problemHeading: 'Most Businesses Do Not Have Reliable Financial Information When They Need It',
  problemBody: [
    'A business that manages its finances in spreadsheets or a standalone accounting package that is not connected to its sales, purchasing, and inventory systems is making decisions with incomplete and often outdated information.',
    'The profit and loss statement is only available two weeks after month end — after the accountant has manually gathered and reconciled data from multiple sources. Cash flow is managed by checking the bank balance rather than monitoring receivables and payables. VAT filing is an exercise in reconstruction rather than a report generated from clean records.',
    'These are not just inconveniences. They are structural risks that grow with the business. As transaction volumes increase and the number of accounts, staff, and locations grows, the gap between what is happening and what the financial records show widens.',
  ],
  problemPoints: [
    'No reliable month-end P&L without significant manual effort',
    'Cash flow managed reactively — no visibility into receivables aging',
    'VAT and WHT records reconstructed at filing time rather than maintained continuously',
    'Accounting not connected to sales and purchasing — reconciliation is manual',
    'Opening balances incorrect or not properly structured in the accounting system',
    'Staff entering transactions inconsistently — chart of accounts not fit for purpose',
  ],
  valueBody: 'Good accounting is not just about compliance — it is about visibility. When financial records are accurate, current, and connected to operations, management can see exactly where the business stands and make decisions with confidence.',

  whatWeDoHeading: 'What Our Accounting Solutions Cover',
  whatWeDoSub: 'We structure your accounting from the foundation up — so every transaction is recorded correctly and every report reflects the actual state of the business.',
  whatWeDo: [
    { icon: Layers,      title: 'Chart of Accounts Setup',           desc: 'We design or restructure the chart of accounts for your business type — with the right account groupings for your industry, reporting needs, and tax obligations.', color: 'blue' },
    { icon: DollarSign,  title: 'Sales & Purchase Accounting',       desc: 'Sales invoices, purchase bills, credit notes, and returns — all coded correctly and connected to customer and supplier accounts.', color: 'green' },
    { icon: FileText,    title: 'Expense Tracking',                  desc: 'Expense categories, department-level cost centres, staff expense claims, and petty cash records structured for accurate management reporting.', color: 'blue' },
    { icon: CreditCard,  title: 'Cash & Bank Control',               desc: 'Bank accounts configured, bank reconciliation workflow established, and cash management controls set up for each business location.', color: 'green' },
    { icon: TrendingUp,  title: 'Receivables & Payables',            desc: 'Customer payment terms, supplier credit terms, aging reports, and dunning workflows — so outstanding balances are visible and managed proactively.', color: 'blue' },
    { icon: Shield,      title: 'Payment Tracking',                  desc: 'Every customer receipt and supplier payment recorded against the correct invoice, with bank reconciliation to confirm cleared funds.', color: 'green' },
    { icon: Layers,      title: 'Inventory/Accounting Connection',   desc: 'Stock movements connected to accounting entries — so the balance sheet reflects actual inventory value and cost of goods flows correctly into the P&L.', color: 'blue' },
    { icon: BarChart2,   title: 'Financial Reports',                 desc: 'Monthly P&L, balance sheet, cash flow statement, AR/AP aging, bank reconciliation statement, and management accounts configured and ready.', color: 'green' },
    { icon: BookOpen,    title: 'Accounting Workflow Support',       desc: 'Month-end close process defined, journal entry workflows established, and accounting staff trained on consistent transaction recording.', color: 'blue' },
  ],

  deliveryHeading: 'How We Deliver Accounting Solutions',
  deliverySteps: [
    { number: '01', title: 'Review Current Accounting Process',  desc: 'We assess the current state — chart of accounts, existing records, reconciliation status, and how accounting connects (or does not connect) to operations.' },
    { number: '02', title: 'Clean & Structure Accounts',         desc: 'We restructure the chart of accounts, correct coding errors, resolve duplicate accounts, and establish a clean foundation for accurate reporting.' },
    { number: '03', title: 'Configure Sales, Purchases & Expenses', desc: 'We connect sales and purchasing workflows to accounting — so every invoice, bill, and payment posts to the correct account automatically.' },
    { number: '04', title: 'Connect Accounting with Operations', desc: 'We link inventory, HR, and other operational modules to accounting so that stock movements, payroll, and asset acquisitions all flow into the accounts without manual journals.' },
    { number: '05', title: 'Set Up Reports & Dashboards',        desc: 'We configure the standard management report suite and any custom reports needed — tested against actual data to confirm accuracy.' },
    { number: '06', title: 'Train Users & Finance Team',         desc: 'We train the accounting team on correct transaction recording, the month-end close process, and how to use reports to monitor the business.' },
  ],

  forHeading: 'Who This Service Is For',
  forIntro: 'Businesses that need accurate, current financial information to manage and grow.',
  forList: [
    'SMEs replacing spreadsheet-based bookkeeping',
    'Growing businesses whose accounting has not kept pace with operations',
    'Companies preparing for audit, investment, or external financing',
    'Businesses migrating from QuickBooks or Sage to ERPNext',
    'Organisations that need management accounts more than once a year',
    'Any business where accounting is not yet connected to sales and inventory',
  ],

  relatedResources: [
    { title: 'Accounting Control for SMEs: Moving Beyond Manual Records',       path: '/resources/accounting-control-for-smes',       category: 'Accounting' },
    { title: 'ERP Implementation Checklist for Growing Businesses',             path: '/resources/erp-implementation-checklist',       category: 'ERP'        },
    { title: 'Business Process Optimization: How to Gain Control Before Scaling', path: '/resources/business-process-optimization',   category: 'Operations' },
  ],
  relatedLinks: [
    { label: 'ERP Implementation Service', to: '/services/erp-implementation',  variant: 'secondary' },
    { label: 'Training & Support',         to: '/services/training-support',     variant: 'secondary' },
    { label: 'Retail Sales Automation',    to: '/services/retail-sales-automation', variant: 'secondary' },
    { label: 'Book a Consultation',        to: '/contact',                       variant: 'primary'   },
  ],

  ctaHeadline: 'Get Your Books in Order',
  ctaSubtext: 'We structure accounting from the foundation up — chart of accounts, connected workflows, clean records, and management reports that reflect the actual state of your business.',
}

export default function AccountingSolutions() {
  return <ServicePageLayout d={data} />
}
