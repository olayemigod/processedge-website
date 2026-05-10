import {
  Activity, Users, Calendar, FileText, CreditCard,
  Package, BarChart2, Bell, FlaskConical, ArrowUpRight,
  ClipboardList, Stethoscope
} from 'lucide-react'
import ProductPageLayout from '../../components/ProductPageLayout'
import type { ProductPageData } from '../../components/ProductPageLayout'

const data: ProductPageData = {
  name: 'ClinicEdge',
  badge: 'Industry Product',
  badgeVariant: 'blue',
  tagline: 'Operational Control for Clinics and Healthcare Facilities',
  heroDesc: 'Manage patient records, appointments, consultations, billing, pharmacy, diagnostics, referrals, and clinic reporting in one structured platform — built for clinics, medical centres, diagnostic centres, and healthcare service providers.',
  primaryCTA: 'Book a Demo',
  secondaryCTA: 'Talk to ProcessEdge',
  secondaryTo: '/contact',
  icon: Activity,
  iconColor: '#7ec5ff',
  iconBg: 'rgba(0,86,166,0.2)',

  problemHeading: 'Healthcare Facilities Are Carrying Operational Risk With Disconnected Systems',
  problemBody: [
    'A clinic managing patient records on paper folders, appointment bookings in a diary, and billing on a spreadsheet is not simply inefficient — it is operating with gaps in information that affect both the quality of care and the financial health of the facility.',
    'A doctor seeing a returning patient without access to their previous consultation notes, allergies, or treatment history is working with incomplete information. A front desk that cannot confirm whether a patient has a pending balance before the consultation creates billing disputes that are difficult to resolve afterwards. A pharmacy that dispenses drugs without deducting from stock produces a count that is wrong before month-end.',
    'These problems are not unique to under-resourced facilities. They occur in any healthcare organisation that has grown beyond the capacity of informal systems to manage — and they compound as patient volumes increase.',
  ],
  problemPoints: [
    'Patient medical history held in paper folders — not retrievable quickly or reliably',
    'Appointment scheduling informal — conflicts, no-shows, and waitlist not tracked',
    'Billing compiled after consultation from handwritten notes — charges missed',
    'Drug and consumable stock not linked to prescription — counts unreliable',
    'Lab requests and results managed outside the patient record',
    'No visibility into clinic revenue, patient volumes, or service utilisation trends',
    'Referral outcomes not tracked — no follow-up visibility for referred patients',
  ],
  valueBody: 'ClinicEdge gives healthcare facilities the operational structure to manage every patient interaction — from registration through billing — with accuracy, visibility, and the ability to retrieve any record at any time.',

  featuresHeading: 'What ClinicEdge Covers',
  featuresSubtext: 'Every module connects to the patient record — so the front desk, consulting doctor, pharmacy, laboratory, and billing team all work from a single source of truth.',
  features: [
    {
      icon: Users,
      title: 'Patient Records & Profiles',
      desc: 'Complete patient profiles — demographics, contact details, emergency contacts, medical history, allergies, chronic conditions, insurance details, and attached documents. Fully retrievable per visit.',
      color: 'blue',
    },
    {
      icon: Calendar,
      title: 'Appointment Management',
      desc: 'Schedule and manage appointments by doctor, department, or service type. Track attendance, cancellations, reschedules, and no-shows. Appointment history per patient.',
      color: 'green',
    },
    {
      icon: Stethoscope,
      title: 'Consultation Workflow',
      desc: 'Structured consultation records — presenting complaint, vital signs, clinical assessment, diagnosis, management plan, and follow-up instructions. Every visit logged against the patient profile.',
      color: 'blue',
    },
    {
      icon: ClipboardList,
      title: 'Clinical Notes',
      desc: 'SOAP-format or free-text clinical notes per visit. Auditable, retrievable, and linked permanently to the patient\'s medical history. Accessible to authorised staff only.',
      color: 'green',
    },
    {
      icon: FileText,
      title: 'Billing & Payment Tracking',
      desc: 'Consolidated invoicing per visit — consultation fees, procedures, drugs dispensed, and diagnostic charges. Multiple payment methods. Outstanding balance visible at every visit.',
      color: 'blue',
    },
    {
      icon: Package,
      title: 'Pharmacy & Inventory Readiness',
      desc: 'Drug and consumable stock tracking. Automatic stock deduction when a prescription is dispensed. Batch and expiry date management. Reorder alerts when stock falls below threshold.',
      color: 'green',
    },
    {
      icon: FlaskConical,
      title: 'Diagnostics & Lab Workflow Readiness',
      desc: 'Lab test request from within the consultation record. Result entry linked back to the patient profile. Doctor notified when results are available. Full request-to-result traceability.',
      color: 'blue',
    },
    {
      icon: ArrowUpRight,
      title: 'Referral Tracking',
      desc: 'Record and track patient referrals — the reason for referral, the receiving facility or specialist, and the outcome when the patient returns. Referral history per patient.',
      color: 'green',
    },
    {
      icon: Bell,
      title: 'Notifications & Follow-up Readiness',
      desc: 'Appointment reminders to patients via SMS or email. Follow-up alerts for chronic condition reviews, post-procedure checks, and pending lab results.',
      color: 'blue',
    },
    {
      icon: CreditCard,
      title: 'Service & Treatment Items',
      desc: 'Configurable catalogue of consultation types, procedures, diagnostic panels, and drug items — each with defined pricing. Ensures billing consistency across staff and shifts.',
      color: 'green',
    },
    {
      icon: BarChart2,
      title: 'Reports & Dashboards',
      desc: 'Patient volumes by period, revenue by service type, appointment utilisation, drug consumption, outstanding balances, and clinic performance dashboards for management.',
      color: 'blue',
    },
  ],

  modulesHeading: 'How ClinicEdge Supports Healthcare Operations',
  modulesNote: 'Every clinical and administrative action flows through the same platform — so no information is lost between departments, and every record is complete.',
  modules: [
    { label: 'Patient Registration',                color: 'blue'  },
    { label: 'Patient Profile & Medical History',   color: 'blue'  },
    { label: 'Appointment Scheduling',              color: 'green' },
    { label: 'Queue & Triage Management',           color: 'green' },
    { label: 'Consultation Records',                color: 'blue'  },
    { label: 'Clinical Notes (SOAP)',               color: 'blue'  },
    { label: 'Diagnosis & Management Plans',        color: 'green' },
    { label: 'Prescription Management',             color: 'green' },
    { label: 'Pharmacy / Dispensary',               color: 'blue'  },
    { label: 'Drug & Consumable Inventory',         color: 'blue'  },
    { label: 'Lab Test Requests',                   color: 'green' },
    { label: 'Lab Results & Linkage',               color: 'green' },
    { label: 'Referral Tracking',                   color: 'blue'  },
    { label: 'Service & Treatment Catalogue',       color: 'blue'  },
    { label: 'Billing & Invoice Generation',        color: 'green' },
    { label: 'Payment Tracking & Balances',         color: 'green' },
    { label: 'Appointment Reminders',               color: 'blue'  },
    { label: 'Clinic Revenue Reports',              color: 'blue'  },
    { label: 'Patient Volume Analytics',            color: 'green' },
  ],

  forHeading: 'Who ClinicEdge Is For',
  forIntro: 'Designed for healthcare facilities managing structured patient services.',
  forList: [
    'Primary healthcare clinics and health centres',
    'Medical centres and polyclinics',
    'Diagnostic and imaging centres',
    'Specialist practices and outpatient facilities',
    'Dental, optical, and allied health clinics',
    'Healthcare service chains and group practices',
  ],

  relatedResources: [
    { title: 'Clinic Management System: Patient Records, Appointments, Billing, and Operations', path: '/resources/clinic-management-system',    category: 'Healthcare'  },
    { title: 'ERP Implementation Checklist for Growing Businesses',                              path: '/resources/erp-implementation-checklist', category: 'ERP'         },
    { title: 'Software Training and Adoption: Why Systems Fail Without People',                  path: '/resources/software-training-and-adoption',category: 'Training'   },
  ],

  ctaHeadline: 'Structure Your Clinic Operations With ClinicEdge',
  ctaSubtext: 'Book a ClinicEdge demo and see how patient records, appointments, billing, pharmacy, and clinical workflows connect in one platform.',
}

export default function ClinicEdge() {
  return <ProductPageLayout d={data} />
}
