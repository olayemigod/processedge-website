import { Hotel, BedDouble, Calendar, Users, CreditCard, Package, BarChart2, Wrench, Building } from 'lucide-react'
import ProductPageLayout from '../../components/ProductPageLayout'
import type { ProductPageData } from '../../components/ProductPageLayout'

const data: ProductPageData = {
  name: 'HotelEdge',
  badge: 'Industry Product',
  badgeVariant: 'blue',
  tagline: 'Hospitality Management Solution',
  heroDesc: 'HotelEdge is a hospitality management solution for hotels, guest houses, short-let apartments, and hospitality businesses — covering rooms, reservations, guest records, billing, housekeeping, and reporting.',
  primaryCTA: 'Book a Demo',
  secondaryCTA: 'Read the Guide',
  secondaryTo: '/resources/hotel-management-system',
  icon: Hotel,
  iconColor: '#7ec5ff',
  iconBg: 'rgba(0,86,166,0.2)',

  problemHeading: 'Hotel Operations Break Down Without a Connected System',
  problemBody: [
    'A reservation book, a room status whiteboard, and a handwritten billing ledger work at very low occupancy. As occupancy rises and services expand, the coordination between front desk, housekeeping, and billing becomes impossible to manage manually.',
    'Double bookings happen because reservation confirmations are not centralised. Housekeeping does not know which rooms to turn over. Bills are wrong because restaurant and laundry charges are not posted to the room account. Management cannot see revenue or occupancy without building a report from scratch.',
  ],
  problemPoints: [
    'Reservations held in multiple places — phone records, books, WhatsApp',
    'Room status communicated verbally between front desk and housekeeping',
    'Ancillary charges not posted to guest folio before checkout',
    'No daily occupancy or revenue reporting without manual compilation',
    'Guest history not retained for returning client recognition',
  ],
  valueBody: 'HotelEdge gives hospitality businesses the operational structure to run front desk, housekeeping, billing, and management reporting from a single connected platform.',

  featuresHeading: 'What HotelEdge Covers',
  featuresSubtext: 'From the first reservation to checkout billing and management reporting — HotelEdge connects every part of the hospitality operation.',
  features: [
    { icon: BedDouble,   title: 'Room Management',            desc: 'Room types, rates, amenities, and availability. Configure seasonal pricing and minimum stay requirements.', color: 'blue' },
    { icon: Calendar,    title: 'Reservation & Booking',      desc: 'Centralised reservation management — walk-in, phone, and direct bookings. Availability calendar with real-time room status.', color: 'green' },
    { icon: Users,       title: 'Guest Records',              desc: 'Guest profiles with contact details, stay history, preferences, and special requests. Retained for returning guest recognition.', color: 'blue' },
    { icon: Building,    title: 'Check-in & Check-out',       desc: 'Streamlined front desk workflow — room assignment, folio opening at check-in, folio review and settlement at check-out.', color: 'green' },
    { icon: CreditCard,  title: 'Billing & Payment Tracking', desc: 'Consolidated guest folio — room, F&B, laundry, and extras posted as incurred. Multiple payment methods at settlement.', color: 'blue' },
    { icon: Wrench,      title: 'Housekeeping Coordination',  desc: 'Live room status for housekeeping — occupied, checkout pending, cleaning, ready. Maintenance requests logged and tracked.', color: 'green' },
    { icon: Package,     title: 'Inventory & Service Items',  desc: 'Track housekeeping supplies, food and beverage stock, and consumables with reorder alerts.', color: 'blue' },
    { icon: BarChart2,   title: 'Hospitality Reporting',      desc: 'Daily occupancy rates, revenue per room, department revenue breakdown, and arrival/departure summaries.', color: 'green' },
  ],

  modulesHeading: 'How HotelEdge Supports Hotel Operations',
  modulesNote: 'Every charge incurred during a guest stay is automatically posted to the folio — so checkout is fast, accurate, and dispute-free.',
  modules: [
    { label: 'Room Type & Rate Configuration', color: 'blue'  },
    { label: 'Availability Calendar',          color: 'blue'  },
    { label: 'Reservation Management',         color: 'green' },
    { label: 'Guest Profile & History',        color: 'green' },
    { label: 'Check-in Workflow',              color: 'blue'  },
    { label: 'Guest Folio Management',         color: 'blue'  },
    { label: 'F&B Charge Posting',             color: 'green' },
    { label: 'Laundry & Ancillary Services',   color: 'green' },
    { label: 'Housekeeping Status Board',      color: 'blue'  },
    { label: 'Maintenance Request Tracking',   color: 'blue'  },
    { label: 'Check-out & Settlement',         color: 'green' },
    { label: 'Occupancy & Revenue Reports',    color: 'green' },
    { label: 'Multi-property Readiness',       color: 'blue'  },
  ],

  forHeading: 'Who HotelEdge Is For',
  forIntro: 'Designed for hospitality businesses of all sizes.',
  forList: [
    'Boutique hotels and guesthouses',
    'Short-let and serviced apartment operators',
    'Resorts and event centre lodges',
    'Corporate guest houses',
    'Multi-property hotel groups',
  ],

  relatedResources: [
    { title: 'Hotel Management System: Structuring Reservations, Rooms, Billing, and Housekeeping', path: '/resources/hotel-management-system', category: 'Hospitality' },
    { title: 'Accounting Control for SMEs: Moving Beyond Manual Records', path: '/resources/accounting-control-for-smes', category: 'Accounting' },
    { title: 'ERP Implementation Checklist for Growing Businesses', path: '/resources/erp-implementation-checklist', category: 'ERP' },
  ],

  ctaHeadline: 'Structure Your Hotel Operations',
  ctaSubtext: 'Book a HotelEdge demo and see how reservations, housekeeping, billing, and management reporting connect in one platform.',
}

export default function HotelEdge() {
  return <ProductPageLayout d={data} />
}
