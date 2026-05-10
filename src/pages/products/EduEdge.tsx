import { GraduationCap, Monitor, BookOpen, BarChart2, Bell, Users, FileText, Cpu, CheckCircle2 } from 'lucide-react'
import ProductPageLayout from '../../components/ProductPageLayout'
import type { ProductPageData } from '../../components/ProductPageLayout'

const data: ProductPageData = {
  name: 'EduEdge',
  badge: 'Featured Product',
  badgeVariant: 'green',
  tagline: 'Education Management & CBT Platform',
  heroDesc: 'EduEdge is an education-focused ProcessEdge solution that combines ERPNext/Frappe Education capabilities with CBT exam management, question banks, result synchronization, and academic workflow automation.',
  primaryCTA: 'Book a Demo',
  secondaryCTA: 'Explore Resources',
  secondaryTo: '/resources/school-management-cbt',
  icon: GraduationCap,
  iconColor: '#4de8a0',
  iconBg: 'rgba(28,156,93,0.2)',

  problemHeading: 'Schools Are Running Multiple Disconnected Systems',
  problemBody: [
    'Student records are in one spreadsheet. Fee payments are tracked in another. Exam timetables are printed and distributed manually. Results are compiled in Excel after every sitting — then manually entered into report cards.',
    'This fragmentation means the bursar\'s fee clearance list is different from the academic office\'s exam access list. Results contain transcription errors. Management cannot see how the school is performing without spending hours pulling data together.',
    'The result is a school that works harder than it should — and still produces unreliable information.',
  ],
  problemPoints: [
    'No single source of student and academic records',
    'Exam management disconnected from academic records',
    'Results manually re-entered multiple times',
    'Fee clearance and exam access not automatically linked',
    'No real-time visibility into academic performance trends',
  ],
  valueBody: 'EduEdge gives schools operational control — from admission to result publication — in a single connected platform. We configure it for your academic structure, train your team, and support you through adoption.',

  featuresHeading: 'Everything Your School Needs',
  featuresSubtext: 'EduEdge covers the full academic management lifecycle — from student records and fee management to CBT exams, result synchronization, and school analytics.',
  features: [
    { icon: Users,       title: 'Student & Guardian Records',       desc: 'Complete student profiles — academic history, guardian contacts, medical notes, and documents. All in one place.', color: 'blue' },
    { icon: BookOpen,    title: 'Courses, Classes & Sessions',       desc: 'Configure academic sessions, terms, classes, streams, and subject assignments. Flexible for any school structure.', color: 'green' },
    { icon: Monitor,     title: 'CBT Exam Delivery',                 desc: 'Timed, randomised CBT exams delivered directly in the browser. Auto-grading on submission for objective questions.', color: 'blue' },
    { icon: CheckCircle2,title: 'Question Bank Management',          desc: 'Build and organise questions by subject, class, topic, and difficulty. Shuffle and reuse across exam sittings.', color: 'green' },
    { icon: FileText,    title: 'CBT Result Synchronization',        desc: 'Exam results flow automatically into the academic record — no re-entry, no broadsheet errors, no manual transfer.', color: 'blue' },
    { icon: BarChart2,   title: 'Assessment & Grading Workflows',    desc: 'Configure grading scales, compute cumulative averages, generate broadsheets, transcripts, and report cards.', color: 'green' },
    { icon: Bell,        title: 'Notifications & Communication',     desc: 'SMS and email notifications to parents for results, fees, attendance, and school communications.', color: 'blue' },
    { icon: Cpu,         title: 'Education Operations Automation',   desc: 'Automate repetitive academic admin — term rollover, attendance reminders, fee schedules, and result publication.', color: 'green' },
  ],

  modulesHeading: 'How EduEdge Supports Your School Operations',
  modulesNote: 'Every module is connected. A student registered in the system is visible to the academic office, the bursar, and the exam team — from a single record.',
  modules: [
    { label: 'Academic Session & Term Setup',     color: 'blue'  },
    { label: 'Student Registration',              color: 'blue'  },
    { label: 'Guardian & Contact Records',        color: 'green' },
    { label: 'Class & Subject Assignment',        color: 'blue'  },
    { label: 'Attendance Tracking',               color: 'green' },
    { label: 'Fee Schedule & Payment Tracking',   color: 'blue'  },
    { label: 'Exam Timetable Management',         color: 'green' },
    { label: 'CBT Question Bank',                 color: 'blue'  },
    { label: 'CBT Exam Engine',                   color: 'blue'  },
    { label: 'Auto-Grading & Result Computation', color: 'green' },
    { label: 'Broadsheet Generation',             color: 'blue'  },
    { label: 'Report Card Printing',              color: 'green' },
    { label: 'Student Portal',                    color: 'blue'  },
    { label: 'Parent Portal',                     color: 'green' },
    { label: 'SMS/Email Notifications',           color: 'blue'  },
    { label: 'School Analytics Dashboard',        color: 'green' },
  ],

  forHeading: 'Who EduEdge Is For',
  forIntro: 'Built for schools and educational institutions operating in Nigeria.',
  forList: [
    'Primary and secondary schools',
    'Exam preparation and coaching centres',
    'Tertiary and vocational institutions',
    'Multi-branch school networks',
    'Schools with existing ERPNext or Frappe setups',
  ],

  relatedResources: [
    { title: 'School Management with CBT: Connecting Academic Operations and Exams', path: '/resources/school-management-cbt', category: 'Education' },
    { title: 'CBT Question Bank and Result Synchronization Explained', path: '/resources/cbt-question-bank-result-sync', category: 'Education' },
    { title: 'Software Training and Adoption: Why Systems Fail Without People', path: '/resources/software-training-and-adoption', category: 'Training' },
  ],

  ctaHeadline: 'Ready to Modernise Your School Operations?',
  ctaSubtext: 'Book a personalised EduEdge demo and see how it connects your student records, CBT exams, fee management, and academic reporting in one platform.',
}

export default function EduEdge() {
  return <ProductPageLayout d={data} />
}
