import { Cpu, Layers, Bell, Shield, Zap, Link2, BarChart2, Settings } from 'lucide-react'
import ProductPageLayout from '../../components/ProductPageLayout'
import type { ProductPageData } from '../../components/ProductPageLayout'

const data: ProductPageData = {
  name: 'ProcessEdge Core',
  badge: 'Platform',
  badgeVariant: 'platform',
  tagline: 'The Shared Foundation for ProcessEdge Products & Services',
  heroDesc: 'ProcessEdge Core is the shared platform foundation that powers connected ProcessEdge services, enables future SaaS products, and provides notification, integration, and automation capabilities across the ProcessEdge ecosystem.',
  primaryCTA: 'Talk to Us',
  secondaryCTA: 'View Industry Products',
  secondaryTo: '/products',
  icon: Cpu,
  iconColor: '#7ec5ff',
  iconBg: 'rgba(0,86,166,0.2)',

  problemHeading: 'Growing Businesses Need More Than Separate Apps',
  problemBody: [
    'As a business adopts more software tools — accounting here, CRM there, notifications from a third service — the connections between them become the problem. Data does not flow. Communications require manual triggers. Each system needs its own maintenance.',
    'ProcessEdge Core is the platform layer that makes the ProcessEdge product suite coherent. It provides the shared services — notifications, integrations, automation, and future SaaS readiness — that allow each product to do more than it could as a standalone application.',
  ],
  problemPoints: [
    'Disconnected tools that do not share data',
    'Notifications sent manually from separate platforms',
    'No single place to manage subscriptions and platform-level settings',
    'Integrations built point-to-point rather than through a shared layer',
    'Future SaaS capabilities not yet accessible from industry products',
  ],
  valueBody: 'ProcessEdge Core is not a product you buy separately — it is the foundation beneath every ProcessEdge product. It enables the platform-level capabilities that make connected, automated operations possible.',

  featuresHeading: 'What ProcessEdge Core Provides',
  featuresSubtext: 'The platform capabilities that power the ProcessEdge ecosystem — presented at the level of business value, not technical detail.',
  features: [
    { icon: Layers,   title: 'Shared Platform Services',          desc: 'Common services used across all ProcessEdge products — authentication foundation, shared data models, and platform configuration.', color: 'blue' },
    { icon: Bell,     title: 'Notification Wallet Readiness',     desc: 'The platform infrastructure for SMS, WhatsApp, and email communication credit management across ProcessEdge products.', color: 'green' },
    { icon: Zap,      title: 'Platform-Level Automation',        desc: 'Shared automation services that ProcessEdge products can use — event triggers, scheduled tasks, and workflow orchestration.', color: 'blue' },
    { icon: Link2,    title: 'Integration Foundation',            desc: 'The layer through which ProcessEdge products connect to external services — payment gateways, communication providers, and third-party APIs.', color: 'green' },
    { icon: Shield,   title: 'Secure API Readiness',              desc: 'Secure API infrastructure that allows ProcessEdge products to be accessed programmatically — for future customer-facing portals and integrations.', color: 'blue' },
    { icon: Settings, title: 'Future SaaS Subscription Support',  desc: 'The platform foundation for metered usage, subscription management, and customer billing as ProcessEdge products move toward SaaS delivery.', color: 'green' },
    { icon: BarChart2,title: 'Platform Analytics & Monitoring',   desc: 'System health, usage analytics, and performance monitoring across the ProcessEdge product suite.', color: 'blue' },
    { icon: Cpu,      title: 'ERPNext / Frappe Foundation',       desc: 'All ProcessEdge industry products are built on ERPNext and the Frappe Framework — an open-source, battle-tested platform with global adoption.', color: 'green' },
  ],

  modulesHeading: 'Platform Capabilities That Power Every Product',
  modulesNote: 'ProcessEdge Core capabilities are delivered through the products — not as a separate interface for end users. The value is in what it enables.',
  modules: [
    { label: 'Shared Authentication Foundation',  color: 'blue'  },
    { label: 'Notification Wallet',               color: 'green' },
    { label: 'SMS Credit Management',             color: 'green' },
    { label: 'WhatsApp Messaging Readiness',      color: 'blue'  },
    { label: 'Email Communication Layer',         color: 'blue'  },
    { label: 'Secure API Layer',                  color: 'green' },
    { label: 'Integration Connectors',            color: 'green' },
    { label: 'Automation & Event Triggers',       color: 'blue'  },
    { label: 'SaaS Subscription Infrastructure', color: 'blue'  },
    { label: 'Platform Analytics',                color: 'green' },
    { label: 'ERPNext / Frappe Core',             color: 'blue'  },
    { label: 'Multi-tenant Readiness',            color: 'green' },
  ],

  forHeading: 'Who This Is Relevant For',
  forIntro: 'ProcessEdge Core is the foundation beneath every ProcessEdge product. It is relevant to businesses that want to understand the platform they are building on.',
  forList: [
    'Businesses implementing multiple ProcessEdge products',
    'Organisations planning future integration with external systems',
    'Businesses that need notification and communication automation',
    'Teams evaluating the technical foundation of ProcessEdge solutions',
    'Businesses planning a phased migration to SaaS delivery',
  ],

  relatedResources: [
    { title: 'ERP Implementation Checklist for Growing Businesses', path: '/resources/erp-implementation-checklist', category: 'ERP' },
    { title: 'Business Process Optimization: How to Gain Control Before Scaling', path: '/resources/business-process-optimization', category: 'Operations' },
    { title: 'Software Training and Adoption: Why Systems Fail Without People', path: '/resources/software-training-and-adoption', category: 'Training' },
  ],

  ctaHeadline: 'Ready to Build on the ProcessEdge Platform?',
  ctaSubtext: "Talk to us about your business requirements and we'll recommend the right combination of ProcessEdge products and platform services.",
}

export default function ProcessEdgeCore() {
  return <ProductPageLayout d={data} />
}
