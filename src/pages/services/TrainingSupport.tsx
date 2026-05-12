import {
  BookOpen, Users, FileText, Headphones,
  RefreshCw, CheckCircle2, Monitor, BarChart2, Layers
} from 'lucide-react'
import ServicePageLayout from '../../components/ServicePageLayout'
import type { ServicePageData } from '../../components/ServicePageLayout'

const data: ServicePageData = {
  name: 'Training & Support',
  badge: 'Professional Service',
  tagline: 'Proper System Adoption Through Role-Based Training, Documentation, and Ongoing Support',
  heroDesc: 'Training & Support helps teams properly adopt business systems after implementation — through role-based training, practical documentation, post-go-live guidance, and ongoing support that keeps systems working as the business evolves.',
  icon: BookOpen,
  iconColor: '#7ec5ff',
  iconBg: 'rgba(0,86,166,0.2)',
  primaryCTA: 'Book a Consultation',
  secondaryCTA: 'Talk to ProcessEdge',

  problemHeading: 'Systems That Are Implemented But Not Adopted Deliver No Value',
  problemBody: [
    'The most common reason an ERP or business system fails to deliver its expected value is not a technical failure — it is an adoption failure. The system is configured, the go-live happens, the implementation team leaves, and three months later staff are back to using spreadsheets for half their work.',
    'This happens because training was treated as a single event — a half-day session at go-live — rather than as a structured programme designed to change how people work. Staff leave training with an understanding of how the system works. That understanding does not automatically translate into changed daily behaviour, especially when the old approach is still available and feels faster in the short term.',
    'Without proper adoption, the investment in implementation is only partially realised. Data quality degrades. Workarounds multiply. The system becomes a compliance exercise rather than an operational tool.',
  ],
  problemPoints: [
    'Training delivered once at go-live — not reinforced through practice',
    'Training not role-based — everyone trained on everything regardless of relevance',
    'No documentation — staff have nowhere to turn when they forget a process',
    'New joiners after go-live have no structured onboarding for the system',
    'Post-go-live issues resolved slowly — staff revert to workarounds in the meantime',
    'No mechanism for identifying and improving weak adoption over time',
  ],
  valueBody: "Training and support are not optional additions to an implementation — they are the conditions under which the system actually works. We stay with your team through go-live and beyond, because adoption is where the value is created.",

  whatWeDoHeading: 'What Our Training & Support Covers',
  whatWeDoSub: 'Every engagement is designed around the people who will use the system — their roles, their workflows, and the level of confidence they need to operate independently.',
  whatWeDo: [
    { icon: Users,       title: 'User Onboarding',               desc: 'Structured onboarding for every user — covering the specific workflows, screens, and decisions relevant to their role, not a generic system overview.', color: 'blue'  },
    { icon: Monitor,     title: 'Admin Training',                desc: 'In-depth training for system administrators covering user management, configuration changes, workflow adjustments, and basic troubleshooting.', color: 'green' },
    { icon: Layers,      title: 'Role-Based Training',           desc: 'Separate training tracks for each user role — cashiers, accountants, store managers, procurement officers, HR staff — covering only what each role needs.', color: 'blue'  },
    { icon: BarChart2,   title: 'Accounting Workflow Training',  desc: 'Specific training for finance and accounting teams on transaction recording, period-end close, bank reconciliation, and management report generation.', color: 'green' },
    { icon: BookOpen,    title: 'ERP User Training',             desc: 'Training for operational users on sales, purchasing, inventory, and HR workflows — covering both the system steps and the process logic behind them.', color: 'blue'  },
    { icon: CheckCircle2,title: 'POS & Cashier Training',        desc: 'Practical POS training for cashiers and retail staff — opening sessions, processing sales, handling returns, applying discounts, and closing shifts correctly.', color: 'green' },
    { icon: FileText,    title: 'Process Documentation',         desc: 'Written process guides, step-by-step workflow instructions, and quick reference cards produced for each role — written for your specific system configuration, not generic manuals.', color: 'blue'  },
    { icon: Headphones,  title: 'Support Retainers',             desc: 'Post-implementation support retainers covering bug fixes, configuration questions, user support, and minor workflow adjustments — available via email, WhatsApp, or call.', color: 'green' },
    { icon: RefreshCw,   title: 'Adoption Improvement',          desc: 'Regular review of system usage patterns to identify where adoption is weak, where workarounds have developed, and what training or configuration changes will improve outcomes.', color: 'blue'  },
  ],

  deliveryHeading: 'How We Deliver Training & Support',
  deliverySteps: [
    { number: '01', title: 'Identify User Roles',             desc: 'We map every user group — their responsibilities, the system workflows they will use, and the level of access and accountability they carry.' },
    { number: '02', title: 'Create Training Flow',            desc: 'We build a training plan per role — what will be covered, in what order, over how many sessions, and with what practical exercises.' },
    { number: '03', title: 'Train Users by Responsibility',   desc: 'We deliver training in small, role-specific groups — using real data from the system, not generic demo scenarios — so learning is immediately applicable.' },
    { number: '04', title: 'Provide Usage Documentation',     desc: 'We produce written guides and reference materials for each workflow, written for your specific configuration and accessible to any user who needs a reminder.' },
    { number: '05', title: 'Support Go-Live',                 desc: 'We are available during the go-live period to answer questions, resolve issues, and prevent workarounds from taking hold in the critical first weeks.' },
    { number: '06', title: 'Improve Adoption Over Time',      desc: 'We review usage after the first 30 and 90 days, identify weak points, and provide targeted retraining or configuration adjustments to close adoption gaps.' },
  ],

  forHeading: 'Who This Service Is For',
  forIntro: 'Any organisation that has implemented — or is about to implement — a business system and needs its team to use it properly.',
  forList: [
    'Businesses going live on ERPNext or any ProcessEdge product',
    'Organisations whose staff were not adequately trained at initial go-live',
    'Businesses that have taken over a system implemented by someone else',
    'Companies onboarding new staff into an existing ERP setup',
    'Retail businesses training cashiers on POS workflows',
    'Finance teams needing structured accounting workflow training',
  ],

  relatedResources: [
    { title: 'Software Training and Adoption: Why Systems Fail Without People',    path: '/resources/software-training-and-adoption',  category: 'Training'  },
    { title: 'ERP Implementation Checklist for Growing Businesses',               path: '/resources/erp-implementation-checklist',    category: 'ERP'       },
    { title: 'Business Process Optimization: How to Gain Control Before Scaling', path: '/resources/business-process-optimization',   category: 'Operations'},
  ],
  relatedLinks: [
    { label: 'ERP Implementation Service', to: '/services/erp-implementation',   variant: 'secondary' },
    { label: 'Accounting Solutions',       to: '/services/accounting-solutions',  variant: 'secondary' },
    { label: 'Retail Sales Automation',    to: '/services/retail-sales-automation', variant: 'secondary' },
    { label: 'Book a Consultation',        to: '/contact',                        variant: 'primary'   },
  ],

  ctaHeadline: 'Make Sure Your Team Actually Uses the System',
  ctaSubtext: "We deliver role-based training, practical documentation, and ongoing support — so adoption happens, not just installation.",
}

export default function TrainingSupport() {
  return <ServicePageLayout d={data} />
}
