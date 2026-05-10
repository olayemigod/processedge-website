import {
  Sprout, Users, Package, BarChart2, DollarSign,
  Truck, ClipboardList, Bell, Layers, MapPin, Scale, Warehouse
} from 'lucide-react'
import ProductPageLayout from '../../components/ProductPageLayout'
import type { ProductPageData } from '../../components/ProductPageLayout'

const data: ProductPageData = {
  name: 'AgricEdge',
  badge: 'Industry Product',
  badgeVariant: 'green',
  tagline: 'Operational Control for Agriculture and Agribusiness',
  heroDesc: 'Manage farm records, crop and livestock operations, inputs, production, aggregation, sales, payments, and reports in one structured system — built for farms, cooperatives, processors, aggregators, and agro-allied businesses.',
  primaryCTA: 'Book a Demo',
  secondaryCTA: 'Talk to ProcessEdge',
  secondaryTo: '/contact',
  icon: Sprout,
  iconColor: '#4de8a0',
  iconBg: 'rgba(28,156,93,0.2)',

  problemHeading: 'Agribusinesses Are Running on Scattered Records and Weak Visibility',
  problemBody: [
    'A farm or agribusiness that manages production records, farmer payments, input distribution, and sales across handwritten books, separate spreadsheets, and verbal agreements is carrying operational risk at every level of its operation.',
    'Input costs are not tracked against yields, so there is no way to know whether a season was profitable until weeks after it closes. Farmer payments cannot be reconciled against the produce received because the two records are maintained separately. Stock levels at warehouses and aggregation points are unknown until someone physically counts. When management asks for a report, someone spends days compiling it from multiple sources.',
    'These are not minor inconveniences. They represent a structural gap between the work being done and the visibility needed to manage it well.',
  ],
  problemPoints: [
    'Input distribution not tracked — no record of what was given to which farmer or field',
    'Produce received at aggregation points and farmer payment records maintained separately',
    'No real-time visibility into warehouse and storage stock levels',
    'Production cycle data not linked to input costs — profitability invisible until season end',
    'Farmer and outgrower payment disputes with no clear audit trail',
    'Management reporting requires manual compilation from multiple disconnected sources',
    'No traceability from farm input to final sale or processing output',
  ],
  valueBody: 'AgricEdge gives agribusinesses the operational structure to track every input, every farmer transaction, every stock movement, and every sale — so management always has a current picture of where the business stands, not last month\'s guess.',

  featuresHeading: 'What AgricEdge Covers',
  featuresSubtext: 'Every module connects to a single operational record — from farm registration and input distribution through to sales, payments, and season-end reporting.',
  features: [
    {
      icon: MapPin,
      title: 'Farm & Field Records',
      desc: 'Register farms and fields with location, land area, crop or livestock type, ownership, and farmer linkage. The foundation for all production and input tracking.',
      color: 'green',
    },
    {
      icon: Sprout,
      title: 'Crop Operation Tracking',
      desc: 'Track every stage of the crop cycle per field — land preparation, planting, agronomic activities, disease and pest incidents, and harvest. Full production history per season.',
      color: 'blue',
    },
    {
      icon: Sprout,
      title: 'Livestock Operation Tracking',
      desc: 'Record livestock types, herd or flock counts, feeding schedules, health events, mortality, and off-take. Operational visibility across livestock holdings.',
      color: 'green',
    },
    {
      icon: Package,
      title: 'Input & Inventory Management',
      desc: 'Track seeds, fertilisers, agrochemicals, feeds, and farm equipment. Every input item distributed to a farmer or field is recorded and deducted from stock automatically.',
      color: 'blue',
    },
    {
      icon: ClipboardList,
      title: 'Production Tracking',
      desc: 'Record production outputs per field and per cycle — volumes harvested, graded quality, weight losses, and transfers to storage or processing. Season-on-season comparison ready.',
      color: 'green',
    },
    {
      icon: Users,
      title: 'Farmer & Outgrower Records',
      desc: 'Structured profiles for every farmer and outgrower — contact details, land holdings, group membership, input history, produce delivered, and payment records in one account.',
      color: 'blue',
    },
    {
      icon: Truck,
      title: 'Aggregation & Procurement Workflow',
      desc: 'Manage produce intake at aggregation centres — vehicle records, weight measurements, moisture or quality grading, and automatic linkage to the farmer account for payment.',
      color: 'green',
    },
    {
      icon: Scale,
      title: 'Grading & Quality Records',
      desc: 'Record grade assignments per intake — grade A, B, or reject quantities. Quality data feeds into pricing, payment computation, and buyer reporting.',
      color: 'blue',
    },
    {
      icon: Warehouse,
      title: 'Warehouse & Storage Management',
      desc: 'Track stock levels per warehouse or storage point in real time. Record stock-in from aggregation, stock-out to buyers or processors, and generate stock position reports.',
      color: 'green',
    },
    {
      icon: DollarSign,
      title: 'Sales & Payment Tracking',
      desc: 'Record sales to buyers, processors, or export markets. Track farmer payments against produce received, apply input cost deductions, and generate farmer payment statements.',
      color: 'blue',
    },
    {
      icon: Layers,
      title: 'Cooperative & Agro-Group Readiness',
      desc: 'Manage farmer groups, cooperative members, group-level input allocations, group produce pooling, and group-level financial summaries.',
      color: 'green',
    },
    {
      icon: Bell,
      title: 'Notification Readiness',
      desc: 'SMS and WhatsApp communication for farmer payment alerts, input collection notices, aggregation schedules, and seasonal updates.',
      color: 'blue',
    },
    {
      icon: BarChart2,
      title: 'Reports & Operational Dashboards',
      desc: 'Input-to-yield analysis, procurement volumes by period, farmer payment summaries, warehouse stock reports, sales performance, and season-on-season operational comparisons.',
      color: 'green',
    },
  ],

  modulesHeading: 'How AgricEdge Supports Agribusiness Operations',
  modulesNote: 'Every transaction is linked back to the farmer record, the field record, and the seasonal operation — giving management full traceability from input to output.',
  modules: [
    { label: 'Farm & Field Registration',           color: 'green' },
    { label: 'Farmer / Outgrower Profiles',         color: 'green' },
    { label: 'Crop Cycle & Activity Tracking',      color: 'blue'  },
    { label: 'Livestock Operation Records',         color: 'blue'  },
    { label: 'Input Type & Stock Setup',            color: 'green' },
    { label: 'Input Distribution to Farmers',       color: 'green' },
    { label: 'Input Inventory & Reorder',           color: 'blue'  },
    { label: 'Harvest & Yield Recording',           color: 'blue'  },
    { label: 'Aggregation Centre Intake',           color: 'green' },
    { label: 'Grading & Quality Assignment',        color: 'green' },
    { label: 'Warehouse Stock Management',          color: 'blue'  },
    { label: 'Farmer Payment Processing',           color: 'blue'  },
    { label: 'Input Cost Deduction',                color: 'green' },
    { label: 'Sales & Buyer Management',            color: 'green' },
    { label: 'Cooperative / Group Management',      color: 'blue'  },
    { label: 'Season & Period Reporting',           color: 'blue'  },
    { label: 'Operational Dashboards',              color: 'green' },
    { label: 'Notification Wallet Readiness',       color: 'green' },
  ],

  forHeading: 'Who AgricEdge Is For',
  forIntro: 'Built for agribusinesses managing structured production, procurement, and farmer relationships across seasons.',
  forList: [
    'Commercial farms and agro-estates',
    'Agribusiness companies and processors',
    'Farmer cooperatives and outgrower schemes',
    'Produce aggregators and commodity traders',
    'Agro-processors and value chain operators',
    'Agro-allied businesses and input suppliers',
    'NGO-backed agricultural programmes with farmer management needs',
  ],

  relatedResources: [
    { title: 'Agriculture Management System: Farm Records, Inputs, Procurement, and Agribusiness Visibility', path: '/resources/agriculture-management-system', category: 'Agriculture' },
    { title: 'ERP Implementation Checklist for Growing Businesses',                                          path: '/resources/erp-implementation-checklist',     category: 'ERP'         },
    { title: 'Accounting Control for SMEs: Moving Beyond Manual Records',                                    path: '/resources/accounting-control-for-smes',       category: 'Accounting'  },
  ],

  ctaHeadline: 'Bring Operational Control to Your Agribusiness',
  ctaSubtext: 'Book an AgricEdge demo and see how farm records, inputs, procurement, farmer payments, and reporting connect in one structured platform.',
}

export default function AgricEdge() {
  return <ProductPageLayout d={data} />
}
