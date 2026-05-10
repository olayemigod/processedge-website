import { Church, Users, DollarSign, Calendar, MapPin, BookOpen, BarChart2, Bell, Award } from 'lucide-react'
import ProductPageLayout from '../../components/ProductPageLayout'
import type { ProductPageData } from '../../components/ProductPageLayout'

const data: ProductPageData = {
  name: 'ChurchEdge',
  badge: 'Industry Product',
  badgeVariant: 'blue',
  tagline: 'Church & Ministry Management Platform',
  heroDesc: 'ChurchEdge is a flexible church management solution for churches, ministries, fellowships, and faith-based organisations that need structured member management, finance, programmes, departments, trainings, and reporting.',
  primaryCTA: 'Book a Demo',
  secondaryCTA: 'Read the Guide',
  secondaryTo: '/resources/church-management-system',
  icon: Church,
  iconColor: '#7ec5ff',
  iconBg: 'rgba(0,86,166,0.2)',

  problemHeading: 'A Growing Church Outgrows Informal Management',
  problemBody: [
    'Every church begins small — where the pastor knows each member personally, attendance is recorded in a book, and offerings are counted in a ledger. This works. Until the church grows.',
    'At multiple services, hundreds of members, departments operating independently, and branches in different locations, the informal systems that worked at fifty members break down at five hundred. First-timers are not followed up consistently. Giving records cannot be traced. Department heads operate without visibility into each other\'s activities. Leadership cannot see a clear picture of how the church is growing.',
  ],
  problemPoints: [
    'First-timer details collected but follow-up inconsistent or untracked',
    'Member records split across paper, spreadsheets, and memory',
    'Giving and offering records not linked to individual members',
    'No visibility into which departments are active or growing',
    'No structured pathway from first visit to committed membership',
  ],
  valueBody: 'ChurchEdge gives church leadership a structured platform for managing people, programmes, finance, and growth — so the operational side of ministry supports the spiritual mission, not hinders it.',

  featuresHeading: 'What ChurchEdge Covers',
  featuresSubtext: 'ChurchEdge covers the complete ministry management lifecycle — from first-timer capture through discipleship, giving, and multi-branch reporting.',
  features: [
    { icon: Users,      title: 'Member Records & Profiles',         desc: 'Complete member database — contact details, membership class, baptism records, family connections, and attendance history.', color: 'blue' },
    { icon: Bell,       title: 'First-timer & Convert Management',  desc: 'Capture first-time visitors, assign follow-up workers, track conversion status and discipleship progress from one screen.', color: 'green' },
    { icon: Award,      title: 'Workers, Ministers & Pastors',      desc: 'Separate records for workers and ministers — ministry assignments, commissioning dates, ordination status, and training history.', color: 'blue' },
    { icon: MapPin,     title: 'Department & Branch Hierarchy',     desc: 'Create departments, units, zones, and branches with structured leadership and membership assignments at each level.', color: 'green' },
    { icon: BookOpen,   title: 'Programmes, Training & Seminars',   desc: 'Plan services, programmes, and special events. Manage training sessions and seminars with registration and attendance tracking.', color: 'blue' },
    { icon: DollarSign, title: 'Offerings, Pledges & Projects',     desc: 'Track offerings, tithes, pledges, and project contributions per member. Generate individual giving statements and finance reports.', color: 'green' },
    { icon: Calendar,   title: 'Cell Groups & House Fellowships',   desc: 'Manage cell group rosters, host assignments, meeting records, and attendance per group for structured pastoral care.', color: 'blue' },
    { icon: BarChart2,  title: 'Reports, Dashboards & Analytics',   desc: 'Membership growth trends, attendance analysis, giving patterns, first-timer conversion rates, and department performance.', color: 'green' },
  ],

  modulesHeading: 'How ChurchEdge Supports Ministry Operations',
  modulesNote: 'Every module connects back to the member record — so every pastor, department head, and administrator has the information they need for their specific area of responsibility.',
  modules: [
    { label: 'Member Registration & Profiles',    color: 'blue'  },
    { label: 'Attendance Tracking',               color: 'blue'  },
    { label: 'First-timer Capture',               color: 'green' },
    { label: 'Follow-up Assignment & Tracking',   color: 'green' },
    { label: 'Convert & Discipleship Records',    color: 'blue'  },
    { label: 'Worker & Minister Registry',        color: 'blue'  },
    { label: 'Ordination Records',                color: 'green' },
    { label: 'Department & Unit Management',      color: 'green' },
    { label: 'Branch & Zone Administration',      color: 'blue'  },
    { label: 'Children, Teens & Youth Groups',    color: 'blue'  },
    { label: 'Cell Group / House Fellowship',     color: 'green' },
    { label: 'Programme & Events Calendar',       color: 'green' },
    { label: 'Training & Seminar Management',     color: 'blue'  },
    { label: 'Offerings & Tithes',                color: 'blue'  },
    { label: 'Pledges & Project Finance',         color: 'green' },
    { label: 'Finance & Account Mapping',         color: 'green' },
    { label: 'Member Portal',                     color: 'blue'  },
    { label: 'Growth Analytics Dashboard',        color: 'blue'  },
  ],

  forHeading: 'Who ChurchEdge Is For',
  forIntro: 'Designed for churches and faith-based organisations of every size.',
  forList: [
    'Single-campus growing churches',
    'Multi-branch ministries and denominations',
    'Mission organisations and parachurch ministries',
    'Campus fellowship groups',
    'Cell-based church networks',
    'Faith-based community organisations',
  ],

  relatedResources: [
    { title: 'Church Management System: Organizing Members, Departments, Offerings, and Follow-Up', path: '/resources/church-management-system', category: 'Church & Ministry' },
    { title: 'Business Process Optimization: How to Gain Control Before Scaling', path: '/resources/business-process-optimization', category: 'Operations' },
    { title: 'Software Training and Adoption: Why Systems Fail Without People', path: '/resources/software-training-and-adoption', category: 'Training' },
  ],

  ctaHeadline: 'Grow Your Church With Better Systems',
  ctaSubtext: 'Book a ChurchEdge demo and see how member management, giving, departments, and growth analytics connect in one ministry platform.',
}

export default function ChurchEdge() {
  return <ProductPageLayout d={data} />
}
