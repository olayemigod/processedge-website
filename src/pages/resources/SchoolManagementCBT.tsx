import ArticleLayout from './ArticleLayout'

export default function SchoolManagementCBT() {
  return (
    <ArticleLayout
      title="School Management with CBT: Connecting Academic Operations and Exams"
      category="Education"
      categoryColor="var(--blue)"
      readTime="8 min read"
      summary="Running a school involves far more than teaching. This article explains how to connect academic records, fee management, CBT exams, and result workflows into a single operational system — and why disconnected tools create more work, not less."
      sections={[
        {
          heading: "The Fragmented School Management Problem",
          body: "Most schools in Nigeria manage their operations across a combination of tools that do not speak to each other. Student records are in one spreadsheet. Fee payments are tracked in another. Exam timetables are printed and distributed manually. Results are computed in Excel after every sitting.\n\nThis fragmentation means that when a parent calls to ask whether their child's fees are up to date, the bursar checks a different record than the one the academic office uses for exam clearance. When results are published, they are compiled from multiple sources and errors are common. When management wants to know how the school is performing academically, someone spends hours pulling data together.\n\nThe alternative is not a more sophisticated spreadsheet. It is a connected academic management system.",
        },
        {
          heading: "What an Integrated School System Covers",
          body: "A properly configured school management platform connects academic operations from enrolment to result publication — with fee management, attendance, and communication sitting in the same system.",
          bullets: [
            "Student and guardian records — profiles, contact information, emergency contacts",
            "Academic session and term configuration — class structures, subject assignments",
            "Course and programme management for schools with multiple levels or tracks",
            "Fee schedule setup and payment tracking per student",
            "Attendance recording per class and per subject",
            "Exam scheduling, invigilation assignments, and clearance workflows",
            "Result entry, computation, and broadsheet generation",
            "Report card generation per student and per term",
          ],
        },
        {
          heading: "Where CBT Fits in the Academic Workflow",
          body: "Computer-Based Testing is not simply moving a paper exam to a screen. A well-implemented CBT system changes the entire exam management workflow — from how questions are prepared and organised, to how exams are delivered, to how results flow back into the academic record.\n\nWhen CBT is integrated with the main school management system, a student who sits an exam has their result automatically linked to their academic profile. The result appears in the broadsheet. It feeds the report card computation. The subject teacher does not need to manually enter anything — the data flows.\n\nThis is the operational benefit of integration: one input produces multiple outputs without duplication.",
        },
        {
          heading: "Managing the Question Bank",
          body: "The question bank is the foundation of any repeatable CBT system. Rather than building new exams from scratch each term, a well-managed question bank allows teachers to author questions, tag them by subject, class, topic, difficulty level, and exam type, and reuse or shuffle them across sittings.\n\nThis reduces exam preparation time, allows for randomisation that reduces impersonation and cheating, and enables analysis of which questions are performing poorly across student cohorts.",
          bullets: [
            "Questions tagged by subject, class, topic, and difficulty",
            "Multiple question types: multiple choice, true/false, fill-in",
            "Randomisation per student sitting to reduce answer sharing",
            "Passage-based and structured questions for subjects like English and comprehension",
            "Bank review and retirement workflow to keep content current",
          ],
        },
        {
          heading: "Fee Management and Exam Clearance",
          body: "One of the most administratively intensive tasks in any school is managing exam clearance — confirming which students have paid the required fees before granting access to the examination hall or the CBT portal.\n\nIn a connected system, fee payment status is linked directly to the student's exam access. A student with outstanding fees is flagged automatically. The bursar does not need to produce a clearance list that the academic office then manually checks. The system produces it.",
        },
        {
          heading: "Communication and Portals",
          body: "Parents and guardians expect to be informed. A school management system with SMS and email notification capability allows the school to communicate results, fee reminders, attendance issues, and announcements directly — without the administrative overhead of manual calls or printed circulars.\n\nStudent and parent portals allow self-service access to results, fee statements, timetables, and school communications — reducing the volume of routine enquiries to the school office.",
        },
      ]}
      relatedLinks={[
        { label: 'Explore EduEdge', to: '/products/eduedge', variant: 'primary' },
        { label: 'CBT Question Bank & Result Sync', to: '/resources/cbt-question-bank-result-sync', variant: 'secondary' },
        { label: 'Book a Demo', to: '/contact', variant: 'green' },
      ]}
      relatedArticles={[
        { title: 'CBT Question Bank and Result Synchronization Explained', path: '/resources/cbt-question-bank-result-sync', category: 'Education' },
        { title: 'Software Training and Adoption: Why Systems Fail Without People', path: '/resources/software-training-and-adoption', category: 'Training' },
        { title: 'ERP Implementation Checklist for Growing Businesses', path: '/resources/erp-implementation-checklist', category: 'ERP' },
      ]}
      ctaHeadline="Modernise Your School's Operations"
      ctaSubtext="EduEdge connects student records, CBT exams, fee management, and academic reporting into a single platform built for Nigerian schools."
    />
  )
}
