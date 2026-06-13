import {
  Settings, Database, GitMerge, BarChart2,
  Users, Layers, Shield, CheckCircle2
} from 'lucide-react'
import ServicePageLayout from '../../components/ServicePageLayout'
import type { ServicePageData } from '../../components/ServicePageLayout'

const data: ServicePageData = {
  name: 'ERP Implementation',
  badge: 'Professional Service',
  tagline: 'From Scattered Operations to Structured, Connected Systems',
  heroDesc: 'ERP Implementation helps businesses move from manual, disconnected operations to structured systems for sales, purchasing, inventory, accounting, approvals, roles, workflows, and reporting — built on ERPNext and the Frappe Framework.',
  icon: Settings,
  iconColor: '#7ec5ff',
  iconBg: 'rgba(0,86,166,0.2)',
  primaryCTA: 'Book a Consultation',
  secondaryCTA: 'Talk to ProcessEdge',

  problemHeading: 'Your Business Is Running on Disconnected Systems and Manual Processes',
  problemBody: [
    'Most growing businesses reach a point where their combination of spreadsheets, WhatsApp threads, paper records, and standalone accounting software is no longer sufficient. Sales are recorded in one place, inventory is tracked in another, purchasing happens informally, and the accounts are only reconciled at month end — if at all.',
    'Management cannot see the actual state of the business without asking several people and waiting for data to be compiled manually. Approval processes exist as verbal agreements rather than structured workflows. Stock levels are unknown until someone counts physically. The business is working harder than it should to produce information that should be available instantly.',
    'This is not a problem that grows smaller as the business grows. Without a structured system, every additional transaction, employee, and product adds to the operational complexity — and to the risk.',
  ],
  problemPoints: [
    'No single source of truth for sales, inventory, purchasing, and accounting',
    'Month-end reconciliation takes days because records are not connected',
    'Approval workflows exist informally — no audit trail or enforcement',
    'Management reports compiled manually rather than generated from live data',
    'Stock levels unknown between physical counts',
    'Different teams working from different versions of the same data',
  ],
  valueBody: "We don't just install ERPNext. We understand how your business operates, configure the system to match your real processes, train your team thoroughly, and stay through go-live and beyond — so the system actually delivers the control and visibility you need.",

  whatWeDoHeading: 'What Our ERP Implementation Covers',
  whatWeDoSub: 'Every engagement is scoped to your business. These are the areas we work through — in the order that makes sense for your operation.',
  whatWeDo: [
    { icon: Layers,       title: 'Business Process Review',           desc: 'We map how your business actually operates — sales flow, purchasing flow, inventory movement, and financial processes — before configuring anything.', color: 'blue' },
    { icon: CheckCircle2, title: 'ERP Readiness Assessment',          desc: 'We identify data quality issues, process gaps, and structural decisions that must be resolved before go-live to avoid carrying problems into the new system.', color: 'green' },
    { icon: Database,     title: 'Module Configuration',              desc: 'We configure ERPNext modules to reflect your business structure — company, chart of accounts, warehouses, price lists, item groups, and customer/supplier records.', color: 'blue' },
    { icon: GitMerge,     title: 'Sales & Purchasing Workflow Setup', desc: 'Quotations, sales orders, delivery notes, purchase orders, goods receipt — the full operational workflow configured and tested to match how your team works.', color: 'green' },
    { icon: Database,     title: 'Inventory & Stock Structure',       desc: 'Warehouses, storage locations, item variants, batch tracking, reorder levels, and valuation methods configured to give you real-time stock visibility.', color: 'blue' },
    { icon: BarChart2,    title: 'Accounting Setup',                  desc: 'Chart of accounts, cost centres, fiscal year, opening balances, bank accounts, tax configurations, and payment terms — structured for clean financial reporting.', color: 'green' },
    { icon: Shield,       title: 'Roles, Permissions & Approvals',   desc: 'User roles defined, permissions configured per role, and approval workflows set up so the right people see and control the right data.', color: 'blue' },
    { icon: BarChart2,    title: 'Reports & Dashboards',              desc: 'Key management reports configured — P&L, balance sheet, stock summary, sales analysis, purchase report, and custom dashboards for your operational KPIs.', color: 'green' },
    { icon: Users,        title: 'Training & Go-Live Support',        desc: 'Role-based training for every user group, UAT sign-off, go-live support, and a hypercare period to stabilise the system in real operational use.', color: 'blue' },
  ],

  deliveryHeading: 'How We Deliver ERP Implementation',
  deliverySteps: [
    { number: '01', title: 'Understand Current Operations',   desc: 'Discovery sessions with key users and managers to understand how the business currently works — not just how it is supposed to work.' },
    { number: '02', title: 'Map & Document Processes',        desc: 'Document every process that will be managed in the ERP — with the steps, decision points, approvals, and expected outputs clearly defined.' },
    { number: '03', title: 'Configure ERP Modules',           desc: 'Configure the system to reflect your documented processes — modules, workflows, roles, reports, and print formats.' },
    { number: '04', title: 'Prepare & Migrate Data',          desc: 'Clean existing data, resolve duplicates, prepare master records, and migrate opening balances and historical records into the live system.' },
    { number: '05', title: 'Test & Validate (UAT)',           desc: 'End users test every process against the configured system. Issues are logged, resolved, and retested before sign-off.' },
    { number: '06', title: 'Train Users by Role',             desc: 'Role-based training for every team — practical exercises, documentation, and sufficient repetition to build genuine competence.' },
    { number: '07', title: 'Support Go-Live & Stabilise',     desc: 'Active support through the go-live period and the critical first weeks — resolving issues quickly before workarounds take hold.' },
  ],

  forHeading: 'Who This Service Is For',
  forIntro: 'Businesses that have outgrown manual and disconnected systems and need operational structure.',
  forList: [
    'Growing SMEs replacing spreadsheets with a structured ERP',
    'Trading, distribution, and manufacturing businesses',
    'Businesses migrating from Sage, QuickBooks, or legacy software',
    'Companies with multiple warehouses or branch operations',
    'Organisations that need structured approval and reporting workflows',
    'Businesses deploying ProcessEdge industry products (EduEdge, VetEdge, ClinicEdge, etc.)',
  ],

  relatedResources: [
    { title: 'ERP Implementation Checklist for Growing Businesses',              path: '/resources/erp-implementation-checklist',    category: 'ERP'       },
    { title: 'Business Process Optimization: How to Gain Control Before Scaling', path: '/resources/business-process-optimization',  category: 'Operations'},
    { title: 'Software Training and Adoption: Why Systems Fail Without People',  path: '/resources/software-training-and-adoption',  category: 'Training'  },
  ],
  relatedLinks: [
    { label: 'Training & Support Service', to: '/services/training-support',     variant: 'secondary' },
    { label: 'Accounting Solutions',       to: '/services/accounting-solutions',  variant: 'secondary' },
    { label: 'View All Products',          to: '/products',                       variant: 'secondary' },
    { label: 'Book a Consultation',        to: '/contact',                        variant: 'primary'   },
  ],

  ctaHeadline: 'Ready to Implement ERP the Right Way?',
  ctaSubtext: 'We scope every implementation around how your business actually operates — then configure, train, and support your team through go-live and adoption.',
}

export default function ERPImplementation() {
  return <ServicePageLayout d={data} />
}
