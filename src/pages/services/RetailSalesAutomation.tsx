import {
  ShoppingCart, Monitor, Package, Tag,
  BarChart2, Users, GitBranch, CreditCard, Layers, Settings
} from 'lucide-react'
import ServicePageLayout from '../../components/ServicePageLayout'
import type { ServicePageData } from '../../components/ServicePageLayout'

const data: ServicePageData = {
  name: 'Retail Sales Automation',
  badge: 'Professional Service',
  tagline: 'POS Workflows, Inventory, Branch Operations, and Sales Visibility',
  heroDesc: 'Retail Sales Automation helps retail businesses structure POS workflows, inventory movement, branch operations, payment tracking, and sales visibility — so every transaction is recorded, every stock movement is tracked, and management always knows how the business is performing.',
  icon: ShoppingCart,
  iconColor: '#4de8a0',
  iconBg: 'rgba(28,156,93,0.2)',
  primaryCTA: 'Book a Consultation',
  secondaryCTA: 'Talk to ProcessEdge',

  problemHeading: 'Retail Businesses Lose Control as Volume and Complexity Grow',
  problemBody: [
    'A retail business that operates without a connected POS and inventory system is managing its most critical information — sales, stock, and cash — through a combination of till records, physical counts, and bank statements that are never fully reconciled.',
    'At one location, a disciplined owner can manage the gaps through daily presence. At two or three locations, the gaps multiply. Stock discrepancies are discovered weeks after they occur. Cash variances cannot be traced to a specific cashier or shift. The most-selling and least-selling products are unknown without spending hours on a spreadsheet. Promotions are communicated verbally, applied inconsistently, and never measured.',
    'As the business grows, these problems do not resolve themselves. They become embedded in the operation and increasingly expensive to correct.',
  ],
  problemPoints: [
    'Sales recorded at POS not connected to stock deduction — inventory drifts from reality',
    'End-of-day cash counts not reconciled against system sales records',
    'Stock levels unknown between physical counts — stockouts discovered after the fact',
    'No visibility into which products, categories, or branches are performing',
    'Promotions and discounts applied inconsistently across cashiers or locations',
    'Branch performance visible only through manual report compilation',
  ],
  valueBody: 'Retail automation is not about replacing staff with technology — it is about giving management the real-time visibility to know what is happening in the business and respond before problems become losses.',

  whatWeDoHeading: 'What Our Retail Sales Automation Covers',
  whatWeDoSub: 'We structure the full retail workflow — from how products are set up through how sales are recorded, how stock moves, and how performance is reported.',
  whatWeDo: [
    { icon: Settings,   title: 'POS Workflow Planning',            desc: 'We define the POS workflow for your operation — how sales are opened, how items are added, how discounts apply, how payment is taken, and how the session is closed.', color: 'green' },
    { icon: Monitor,    title: 'Sales Process Setup',              desc: 'POS or sales order workflow configured, receipt format set up, payment methods defined, and the end-of-day reconciliation process established.', color: 'blue' },
    { icon: Layers,     title: 'Item & Product Grouping',          desc: 'Product catalogue structured with item groups, units of measure, variants, price lists, and reorder levels — the foundation for accurate sales and stock reporting.', color: 'green' },
    { icon: Package,    title: 'Inventory & Stock Movement',       desc: 'Stock receipt, transfer, and adjustment workflows configured. Every sale deducts from stock automatically. Real-time stock positions per location.', color: 'blue' },
    { icon: GitBranch,  title: 'Branch & Warehouse Structure',    desc: 'Multiple locations configured with separate stock accounts, individual cashier access, inter-branch transfer workflow, and consolidated management view.', color: 'green' },
    { icon: Users,      title: 'Customer Records',                 desc: 'Customer profiles, credit limits, purchase history, and loyalty tracking — so repeat customers are recognised and outstanding balances are managed.', color: 'blue' },
    { icon: CreditCard, title: 'Payment Method Tracking',          desc: 'Cash, card, bank transfer, mobile payment, and credit sales tracked separately per session and per branch — with reconciliation against bank records.', color: 'green' },
    { icon: Tag,        title: 'Pricing & Promotions',             desc: 'Price lists, customer group pricing, time-bound promotions, and discount controls configured centrally and enforced at POS without requiring cashier judgement.', color: 'blue' },
    { icon: BarChart2,  title: 'Sales Reports & Dashboards',       desc: 'Daily sales summary, product performance, cashier reports, branch comparison, stock movement, and custom KPI dashboards for management visibility.', color: 'green' },
  ],

  deliveryHeading: 'How We Deliver Retail Sales Automation',
  deliverySteps: [
    { number: '01', title: 'Review Retail Sales Process',         desc: 'We map the current retail workflow — how sales are recorded, how stock is managed, how cash is handled, and where the gaps are between what is recorded and what is real.' },
    { number: '02', title: 'Map Branch & POS Workflow',           desc: 'We document the POS workflow for each location and cashier role, including how promotions, discounts, and credit sales are handled.' },
    { number: '03', title: 'Structure Items & Inventory Records', desc: 'We set up the product catalogue, item groups, units of measure, price lists, and warehouse structure before any transactions are configured.' },
    { number: '04', title: 'Configure Sales & Payment Flow',      desc: 'We configure the POS or sales order workflow, payment methods, end-of-day reconciliation, and any custom print formats for receipts or invoices.' },
    { number: '05', title: 'Set Up Reports & Dashboards',         desc: 'We configure the management report suite — sales by product, sales by cashier, stock movement, and branch performance — and test against real transaction data.' },
    { number: '06', title: 'Train Cashiers, Managers & Owners',  desc: 'We train each user group for their specific role — cashiers on the POS workflow, managers on daily reconciliation and stock management, and owners on performance dashboards.' },
  ],

  forHeading: 'Who This Service Is For',
  forIntro: 'Retail businesses that need operational visibility and control across one or more locations.',
  forList: [
    'Supermarkets, grocery stores, and general merchandise retailers',
    'Pharmacies and medical supplies outlets',
    'Electronics, accessories, and specialty retailers',
    'Fashion and clothing stores',
    'Stationery and office supplies businesses',
    'Any retail operation with multiple branches or cashiers',
  ],

  relatedResources: [
    { title: 'Retail Sales Automation: POS, Inventory, Branches, and Business Visibility', path: '/resources/retail-sales-automation',         category: 'Retail'      },
    { title: 'Accounting Control for SMEs: Moving Beyond Manual Records',                  path: '/resources/accounting-control-for-smes',       category: 'Accounting' },
    { title: 'ERP Implementation Checklist for Growing Businesses',                        path: '/resources/erp-implementation-checklist',       category: 'ERP'        },
  ],
  relatedLinks: [
    { label: 'Accounting Solutions',       to: '/services/accounting-solutions',   variant: 'secondary' },
    { label: 'Training & Support',         to: '/services/training-support',        variant: 'secondary' },
    { label: 'ERP Implementation',         to: '/services/erp-implementation',      variant: 'secondary' },
    { label: 'Book a Consultation',        to: '/contact',                          variant: 'primary'   },
  ],

  ctaHeadline: 'Automate Your Retail Operations',
  ctaSubtext: 'We configure POS, inventory, branch controls, and management reporting so your retail business runs with visibility — not guesswork.',
}

export default function RetailSalesAutomation() {
  return <ServicePageLayout d={data} />
}
