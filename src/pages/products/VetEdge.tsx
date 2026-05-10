import { PawPrint, FileText, Stethoscope, Package, Bell, CreditCard, Calendar, BarChart2, Scissors } from 'lucide-react'
import ProductPageLayout from '../../components/ProductPageLayout'
import type { ProductPageData } from '../../components/ProductPageLayout'

const data: ProductPageData = {
  name: 'VetEdge',
  badge: 'Industry Product',
  badgeVariant: 'green',
  tagline: 'Veterinary Business Management Solution',
  heroDesc: 'VetEdge is a veterinary business management solution for clinics, pet businesses, and animal healthcare operations — covering patient records, consultations, billing, inventory, and client communication.',
  primaryCTA: 'Book a Demo',
  secondaryCTA: 'Read the Guide',
  secondaryTo: '/resources/veterinary-clinic-management',
  icon: PawPrint,
  iconColor: '#4de8a0',
  iconBg: 'rgba(28,156,93,0.2)',

  problemHeading: 'A Veterinary Practice Runs Across Too Many Disconnected Records',
  problemBody: [
    'Vaccination records are in a book. Drug stock is counted at month end. Client billing is compiled from consultation notes written on paper. Reminders for follow-up vaccinations go out only when someone manually checks.',
    'At low volume, this is manageable. As the practice grows — more patients, more drugs to track, more clients to communicate with — the administrative load grows faster than the clinical work. And errors follow.',
  ],
  problemPoints: [
    'Patient medical history split across physical and digital records',
    'Drug dispensing not linked to stock deduction',
    'Vaccination reminders sent manually — or not at all',
    'Billing compiled from multiple sources after the appointment',
    'No visibility into clinic revenue or appointment trends',
  ],
  valueBody: 'VetEdge connects the clinical and business sides of a veterinary practice — so every consultation, prescription, and service is tracked in one place, and every client communication happens automatically.',

  featuresHeading: 'What VetEdge Covers',
  featuresSubtext: 'From the first patient registration to billing, stock management, and client reminders — VetEdge manages the full veterinary practice workflow.',
  features: [
    { icon: PawPrint,    title: 'Pet & Owner Records',           desc: 'Complete animal profiles — species, breed, age, medical history, vaccination records, allergies. Linked to owner account.', color: 'green' },
    { icon: Stethoscope, title: 'Consultation Workflow',         desc: 'Structured consultation records with clinical notes, diagnosis, treatment plan, and prescription — all in one entry.', color: 'blue' },
    { icon: FileText,    title: 'Clinical Notes',               desc: 'SOAP-format or free-text clinical notes per visit. Retrievable, auditable, and linked to patient history.', color: 'green' },
    { icon: Package,     title: 'Inventory Support',             desc: 'Drug and consumable stock tracking. Automatic deduction when a prescription is dispensed. Reorder alerts.', color: 'blue' },
    { icon: CreditCard,  title: 'Billing & Payment Tracking',    desc: 'Consolidated invoices per visit — consultation fee, drugs, procedures. Multiple payment methods supported.', color: 'green' },
    { icon: Calendar,    title: 'Vaccination Scheduling',        desc: 'Track vaccination history and due dates. Automated SMS and email reminders to clients when vaccinations are due.', color: 'blue' },
    { icon: Scissors,    title: 'Grooming Service Readiness',    desc: 'Schedule and manage grooming appointments as non-clinical service operations. Billing linked to client account.', color: 'green' },
    { icon: Bell,        title: 'Boarding Service Readiness',    desc: 'Boarding bookings, check-in/check-out, feeding and medication schedules during stay, and departure billing.', color: 'blue' },
  ],

  modulesHeading: 'How VetEdge Supports Clinic Operations',
  modulesNote: 'Every module connects back to the patient record and the client account — so the clinic always has a complete picture of each animal and each owner.',
  modules: [
    { label: 'Animal Patient Registration',   color: 'green' },
    { label: 'Owner & Contact Records',       color: 'green' },
    { label: 'Appointment Scheduling',        color: 'blue'  },
    { label: 'Consultation & Clinical Notes', color: 'blue'  },
    { label: 'Prescription Management',       color: 'green' },
    { label: 'Drug Dispensing & Stock',       color: 'green' },
    { label: 'Vaccination History & Schedule',color: 'blue'  },
    { label: 'Client Reminders (SMS/Email)',  color: 'blue'  },
    { label: 'Grooming Appointments',         color: 'green' },
    { label: 'Boarding Management',           color: 'green' },
    { label: 'Billing & Invoice Generation',  color: 'blue'  },
    { label: 'Payment Tracking',              color: 'blue'  },
    { label: 'Clinic Performance Reports',    color: 'green' },
  ],

  forHeading: 'Who VetEdge Is For',
  forIntro: 'Designed for veterinary businesses of all sizes in Nigeria.',
  forList: [
    'Veterinary clinics (single and multi-vet)',
    'Pet shops with grooming and boarding services',
    'Animal care and welfare centres',
    'Mobile veterinary service providers',
    'Multi-branch veterinary practices',
  ],

  relatedResources: [
    { title: 'Veterinary Clinic Management: Records, Billing, Inventory, and Client Care', path: '/resources/veterinary-clinic-management', category: 'Veterinary' },
    { title: 'ERP Implementation Checklist for Growing Businesses', path: '/resources/erp-implementation-checklist', category: 'ERP' },
    { title: 'Software Training and Adoption: Why Systems Fail Without People', path: '/resources/software-training-and-adoption', category: 'Training' },
  ],

  ctaHeadline: 'Manage Your Veterinary Practice Better',
  ctaSubtext: 'Book a VetEdge demo and see how it connects patient records, clinical workflows, inventory, and client communication in one platform.',
}

export default function VetEdge() {
  return <ProductPageLayout d={data} />
}
