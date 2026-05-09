import ArticleLayout from './ArticleLayout'

export default function VeterinaryClinicManagement() {
  return (
    <ArticleLayout
      title="Veterinary Clinic Management: Records, Billing, Inventory, and Client Care"
      category="Veterinary"
      categoryColor="var(--green)"
      readTime="7 min read"
      summary="Veterinary practices face a specific set of operational challenges — patient records tied to owners, drug inventory that must be tracked precisely, and client communication that drives return visits. This article explains how a structured management system addresses each of these areas."
      sections={[
        {
          heading: "The Operational Reality of a Veterinary Practice",
          body: "A veterinary clinic is not a single-function business. In the same working day, a vet may conduct consultations, prescribe and dispense drugs, manage boarding animals, process grooming appointments, and follow up with clients whose pets have upcoming vaccinations.\n\nWithout a system that connects these activities, each one is tracked separately — or not tracked at all. Vaccination reminders are sent manually, or not sent. Drug stock is counted at the end of the month rather than in real time. Client billing is compiled from handwritten consultation notes. The result is a practice that is busier than it needs to be and less visible than it should be.",
        },
        {
          heading: "Patient Records: Animal and Owner Profiles",
          body: "The foundation of any veterinary management system is the patient record — and in veterinary practice, this means both the animal's medical profile and the owner's contact and payment record.",
          bullets: [
            "Animal profile: species, breed, age, sex, weight, colour, microchip or tag number",
            "Medical history: previous diagnoses, treatments, prescriptions, surgical history",
            "Vaccination history: vaccines administered, dates, batch numbers, next due dates",
            "Allergies and contraindications: recorded and visible at every consultation",
            "Owner profile: contact details, multiple pets under one account, payment preferences",
            "Document attachments: lab reports, X-rays, referral letters",
          ],
        },
        {
          heading: "Consultation and Clinical Workflow",
          body: "A structured consultation workflow records what happened at each visit in a format that is retrievable and auditable. SOAP notes — Subjective, Objective, Assessment, Plan — are a widely used clinical format that structures the consultation record.\n\nThe consultation record connects to the prescription, which connects to the dispensary, which deducts the prescribed drugs from stock. This chain — from diagnosis to prescription to dispensing to stock adjustment — should happen automatically within the system, not across three separate records.",
        },
        {
          heading: "Vaccination Scheduling and Client Reminders",
          body: "Vaccination compliance is one of the highest-value services a veterinary practice provides, and one of the easiest to lose if reminders are not timely and reliable.\n\nA practice management system tracks each animal's vaccination schedule based on the vaccines administered and the manufacturer's recommended intervals. When a vaccination is due, the system can trigger an automated SMS or email reminder to the owner — without requiring the receptionist to manually check every patient record.\n\nThis automation does more than reduce staff workload. It directly increases the volume of return visits and builds client trust in the practice's attentiveness.",
        },
        {
          heading: "Drug and Consumable Inventory",
          body: "Veterinary inventory management is more demanding than general retail because of controlled substance tracking, batch and expiry date management, and the direct link between prescription and stock deduction.\n\nA connected inventory system means that every drug dispensed through a consultation is automatically deducted from stock. Reorder alerts fire when stock falls below defined thresholds. Batch numbers are recorded at receipt and traceable through to dispensing. Expired items are flagged before they reach the dispensary.",
          bullets: [
            "Real-time stock levels per drug and consumable",
            "Batch and expiry date tracking",
            "Automatic stock deduction on prescription",
            "Reorder level alerts and purchase order generation",
            "Supplier management and purchase history",
          ],
        },
        {
          heading: "Billing, Invoicing, and Payment",
          body: "A veterinary invoice consolidates multiple charges: consultation fee, drugs dispensed, procedures performed, and any boarding or grooming services. Building this invoice manually from separate records is time-consuming and error-prone.\n\nA connected system assembles the invoice automatically from the consultation record. The vet's treatment decisions flow directly into the bill. The client receives a clear, itemised invoice, and the practice has an accurate revenue record without additional data entry.",
        },
        {
          heading: "Boarding and Grooming Management",
          body: "For practices that offer boarding or grooming, these services need to be managed alongside clinical work — without creating a separate booking and billing system.\n\nBoarding management covers kennel or cage availability, check-in and check-out dates, feeding and medication schedules during the stay, and billing on departure. Grooming appointments require scheduling, service selection, and post-service billing. Both feed into the same client account and the same revenue record.",
        },
      ]}
      relatedLinks={[
        { label: 'Explore VetEdge', to: '/products/vetedge', variant: 'primary' },
        { label: 'ERP Implementation', to: '/services/erp-implementation', variant: 'secondary' },
        { label: 'Book a Demo', to: '/contact', variant: 'green' },
      ]}
      relatedArticles={[
        { title: 'ERP Implementation Checklist for Growing Businesses', path: '/resources/erp-implementation-checklist', category: 'ERP' },
        { title: 'Accounting Control for SMEs: Moving Beyond Manual Records', path: '/resources/accounting-control-for-smes', category: 'Accounting' },
        { title: 'Software Training and Adoption: Why Systems Fail Without People', path: '/resources/software-training-and-adoption', category: 'Training' },
      ]}
      ctaHeadline="Manage Your Veterinary Practice Better"
      ctaSubtext="VetEdge covers the full practice workflow — patient records, vaccinations, drug inventory, billing, boarding, and client communication."
    />
  )
}
