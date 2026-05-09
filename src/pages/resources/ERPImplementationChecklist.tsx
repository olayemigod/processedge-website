import ArticleLayout from './ArticleLayout'

export default function ERPImplementationChecklist() {
  return (
    <ArticleLayout
      title="ERP Implementation Checklist for Growing Businesses"
      category="ERP"
      categoryColor="var(--blue)"
      readTime="8 min read"
      summary="A structured checklist covering every critical phase of an ERP implementation — from discovery and scoping through data migration, user training, and post-launch support."
      sections={[
        {
          heading: "Why Most ERP Implementations Fail",
          body: "ERP systems fail far more often than they should — not because the software is wrong, but because the implementation is rushed, under-resourced, or disconnected from how the business actually operates.\n\nThe pattern is familiar: a business purchases a system, expects it to be configured in weeks, skips proper data preparation, gives staff minimal training, and then wonders why adoption is low and errors are multiplying. Operational control is the goal of ERP. It is only achieved when the implementation is treated as a structured business project, not a technical installation.",
        },
        {
          heading: "Phase 1: Discovery and Scoping",
          body: "Before any system is configured, every business needs to document what it actually does. This means mapping current processes — from how a purchase order is raised to how a sales invoice is reconciled — and identifying where the gaps, delays, and errors occur.",
          bullets: [
            "Document all business processes that will be managed in the ERP",
            "Identify which departments and teams will be using the system",
            "Define the modules required: accounting, inventory, HR, sales, purchasing",
            "Agree on reporting requirements before configuration begins",
            "Set realistic timelines — most implementations take 6 to 16 weeks depending on scope",
            "Assign an internal project lead who understands both the business and the IT side",
          ],
        },
        {
          heading: "Phase 2: Data Preparation and Migration",
          body: "One of the most underestimated parts of an ERP implementation is data. Moving data from spreadsheets, legacy systems, or manual records into a structured ERP requires cleaning, standardising, and validating before import.\n\nDirty data in an ERP produces dirty reports. The time spent on data preparation before go-live is always less than the time spent correcting errors after it.",
          bullets: [
            "Export and audit all existing data: customers, suppliers, items, stock levels, account balances",
            "Remove duplicates and standardise formats before import",
            "Agree on opening balances with the finance team before go-live",
            "Test data imports in a staging environment before the live migration",
            "Keep a rollback plan — know what you will do if the migration has issues",
          ],
        },
        {
          heading: "Phase 3: System Configuration",
          body: "Configuration is where the ERP is shaped to fit your business. This includes setting up the company structure, chart of accounts, warehouses, price lists, approval workflows, user roles, and print formats.\n\nThe goal is to configure the system to support how the business should operate — not to force the business to operate the way the software was built out of the box. This is why the discovery phase matters. You cannot configure well what you do not yet understand.",
        },
        {
          heading: "Phase 4: User Acceptance Testing (UAT)",
          body: "Before go-live, every critical workflow must be tested by the people who will use it. UAT is not a developer test — it is a business test. Staff should process real transactions, generate reports they will rely on, and confirm that what the system produces matches what the business expects.",
          bullets: [
            "Create a UAT checklist for every business process in scope",
            "Involve end users — not just managers — in testing",
            "Document issues clearly and resolve them before signing off",
            "Re-test after fixes are applied",
            "Get formal sign-off from the business before go-live",
          ],
        },
        {
          heading: "Phase 5: Training",
          body: "Training is not a half-day session at go-live. Effective ERP training is role-based, practical, and repeated. Cashiers need different training from accountants. Warehouse staff need different training from managers.\n\nAdoption — the degree to which staff actually use the system correctly — is the single biggest predictor of whether an ERP delivers value. Undertrained teams produce workarounds, which produce bad data, which produces unreliable reports.",
        },
        {
          heading: "Phase 6: Go-Live and Hypercare",
          body: "The first two to four weeks after go-live are the most critical. Staff are operating under new workflows, errors will occur, and questions will arise that training did not anticipate. This period — hypercare — requires active, available support.\n\nPlan for a go-live week where the implementation team or consultant is immediately available. Do not go live at month-end, financial year-end, or during a peak operational period.",
        },
        {
          heading: "Post-Launch: Ongoing Improvement",
          body: "An ERP is not finished when it goes live. Business processes change, new staff join, reporting requirements evolve. A post-launch support arrangement — whether internal or through a support retainer — ensures the system keeps pace with the business.\n\nReview reports after the first month. Identify where data quality is weak. Identify where workflows are being bypassed. These are the signals that guide the next round of system improvement.",
        },
      ]}
      relatedLinks={[
        { label: 'ERP Implementation Service', to: '/services/erp-implementation', variant: 'primary' },
        { label: 'Training & Support', to: '/services/training-support', variant: 'secondary' },
        { label: 'Book a Consultation', to: '/contact', variant: 'green' },
      ]}
      relatedArticles={[
        { title: 'Business Process Optimization: How to Gain Control Before Scaling', path: '/resources/business-process-optimization', category: 'Operations' },
        { title: 'Software Training and Adoption: Why Systems Fail Without People', path: '/resources/software-training-and-adoption', category: 'Training' },
        { title: 'Accounting Control for SMEs: Moving Beyond Manual Records', path: '/resources/accounting-control-for-smes', category: 'Accounting' },
      ]}
      ctaHeadline="Ready to Implement ERP the Right Way?"
      ctaSubtext="ProcessEdge handles the full implementation lifecycle — from discovery and configuration to training, go-live, and post-launch support."
    />
  )
}
