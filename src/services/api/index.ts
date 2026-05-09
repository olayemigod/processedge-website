/**
 * ProcessEdge Solutions — API Service Layer
 *
 * This file is a placeholder for future API integrations.
 * All backend operations (ERPNext, portal, auth) should be handled
 * via the portal domain (portal.processedge.com.ng), not this frontend.
 *
 * IMPORTANT: Never expose API keys, secrets, or credentials in this file.
 * Use environment variables and server-side proxies for sensitive operations.
 */

// ---- Contact Form ----
// TODO: Replace with your preferred form service (Formspree, EmailJS, custom backend)
// Example Formspree endpoint: https://formspree.io/f/YOUR_FORM_ID
// Example: POST { name, email, phone, company, interest, message }

export const FORM_ENDPOINT = ((import.meta as any).env?.VITE_CONTACT_FORM_ENDPOINT) || ''

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  interest?: string
  message: string
}

export async function submitContactForm(data: ContactFormData): Promise<boolean> {
  if (!FORM_ENDPOINT) {
    console.warn('Contact form endpoint not configured. Set VITE_CONTACT_FORM_ENDPOINT in .env')
    return false
  }
  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    return response.ok
  } catch (err) {
    console.error('Form submission error:', err)
    return false
  }
}

// ---- Portal Links ----
// All authentication and business operations should redirect to the portal.
// Do NOT implement authentication logic on this frontend.

export const PORTAL_LINKS = {
  staffLogin: 'https://portal.processedge.com.ng',
  customerPortal: 'https://portal.processedge.com.ng',
  demoRequest: 'https://portal.processedge.com.ng',
} as const
