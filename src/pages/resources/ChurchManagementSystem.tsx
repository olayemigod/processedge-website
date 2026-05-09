import ArticleLayout from './ArticleLayout'

export default function ChurchManagementSystem() {
  return (
    <ArticleLayout
      title="Church Management System: Organizing Members, Departments, Offerings, and Follow-Up"
      category="Church & Ministry"
      categoryColor="var(--blue)"
      readTime="8 min read"
      summary="A growing church faces organizational complexity that manual systems cannot sustain. This article explains what a church management system covers — from member records and first-timer follow-up to department management, giving records, and growth analytics."
      sections={[
        {
          heading: "When a Church Outgrows Its Manual Systems",
          body: "Every church begins with a small group where everyone knows everyone. The pastor knows each member personally. Attendance is taken in a book. Offerings are counted and recorded in a ledger. Follow-up happens through personal calls.\n\nAs a church grows — multiple services, hundreds of members, branches in different locations, departments operating semi-independently — this personal knowledge cannot scale. Information that was held informally needs to be structured. Processes that worked at fifty members break at five hundred.",
        },
        {
          heading: "Member Records: The Foundation",
          body: "A church management system begins with the member database. Not just names and phone numbers, but a structured record of each person's relationship to the church.",
          bullets: [
            "Personal profile: name, date of birth, contact information, address",
            "Membership status: first-timer, regular attendee, member, worker, leader",
            "Membership class and discipleship stage",
            "Baptism, confirmation, and dedication records",
            "Family connections: spouse, children, and household grouping",
            "Department and unit assignments",
            "Attendance history per service and programme",
          ],
        },
        {
          heading: "First-Timer Management and Follow-Up",
          body: "First-timers are one of the most operationally important categories in any church. A visitor who is welcomed, followed up promptly, and connected to the community has a much higher probability of becoming a committed member.\n\nA structured first-timer workflow captures the visitor's details on their first Sunday, assigns a follow-up worker from the appropriate team or zone, and tracks the follow-up activity: when the call was made, what the response was, whether the person attended again, and whether they have since enrolled in membership class.\n\nWithout a system, first-timer cards are collected, sometimes entered into a spreadsheet, and follow-up happens inconsistently depending on the team's workload that week.",
        },
        {
          heading: "Convert Tracking and Discipleship",
          body: "The pastoral responsibility does not end at salvation. Convert management tracks every person who makes a commitment — the date, the context, the worker who prayed with them, and the subsequent discipleship journey.\n\nThis record supports the leadership's understanding of how the church is growing spiritually, which workers are most active in evangelism, and which converts have not yet been connected to a follow-up structure.",
        },
        {
          heading: "Workers, Ministers, and Department Hierarchy",
          body: "A church's operational strength lies in its workers and ministers. A management system maintains a separate, structured record for workers that goes beyond what a general member profile captures.",
          bullets: [
            "Worker profile: ministry assignment, date of commissioning, training records",
            "Minister and pastor records: ordination details, appointment history",
            "Department structure: departments, units, and their leadership assignments",
            "Branch and zone hierarchy for multi-location churches",
            "Cell group and house fellowship assignments with host details",
          ],
        },
        {
          heading: "Offerings, Tithes, and Project Finance",
          body: "Financial accountability in a church is both a spiritual obligation and a governance requirement. Members who give generously deserve to know that their contributions are properly recorded and applied.\n\nA church management system records every offering and tithe at the point of collection, tied to the service or programme at which it was received. For members who give by bank transfer, the contribution is matched to their account. Giving statements can be generated per member, per period, and per fund.\n\nProject finance — building funds, mission trips, special projects — is tracked separately from general offerings, with clear reporting on how much has been received against the project target.",
        },
        {
          heading: "Programmes, Events, and Announcements",
          body: "Church programmes and events require planning, attendance tracking, and communication. A management system maintains a calendar of services and events, allows registrations for special programmes, tracks attendance per event, and provides a channel for publishing announcements to the membership.",
        },
        {
          heading: "Growth Analytics and Pastoral Insight",
          body: "The most valuable output of a church management system for leadership is the trend data: how is attendance changing week on week, which departments are growing, what is the conversion-to-membership rate for first-timers, what is the giving trend over the past six months?\n\nThese reports give the senior leadership a clear view of the church's health — not as an impression or estimate, but as a structured picture built from actual recorded data.",
        },
      ]}
      relatedLinks={[
        { label: 'Explore ChurchEdge', to: '/products/churchedge', variant: 'primary' },
        { label: 'ERP Implementation', to: '/services/erp-implementation', variant: 'secondary' },
        { label: 'Book a Demo', to: '/contact', variant: 'green' },
      ]}
      relatedArticles={[
        { title: 'Software Training and Adoption: Why Systems Fail Without People', path: '/resources/software-training-and-adoption', category: 'Training' },
        { title: 'Business Process Optimization: How to Gain Control Before Scaling', path: '/resources/business-process-optimization', category: 'Operations' },
        { title: 'ERP Implementation Checklist for Growing Businesses', path: '/resources/erp-implementation-checklist', category: 'ERP' },
      ]}
      ctaHeadline="Bring Structure to Your Church Operations"
      ctaSubtext="ChurchEdge manages members, first-timers, departments, giving, programmes, and growth analytics — designed for the operational reality of a growing ministry."
    />
  )
}
