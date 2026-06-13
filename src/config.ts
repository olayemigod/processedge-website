/**
 * ProcessEdge Solutions — Site Configuration
 * Single source of truth for all public URLs, contact data, and brand constants.
 * No secrets, no API keys. Safe to include in Vite frontend bundles.
 *
 * TODO before production:
 * - Confirm BRAND_EMAIL if different from the placeholder below
 * - Update WHATSAPP_NUMBER if the number changes
 */

// ── Public URLs ───────────────────────────────────────────────────────────────
export const SITE_URL     = 'https://www.processedge.com.ng'
export const PORTAL_URL   = 'https://portal.processedge.com.ng'
export const API_BASE_URL = 'https://portal.processedge.com.ng'
// API_BASE_URL → ERPNext/Frappe portal.
// All authenticated / CRM operations must go through this domain only.
// Do NOT implement auth or backend logic in this Vite frontend.

// ── Contact & Business Data ───────────────────────────────────────────────────
export const BRAND_NAME     = 'ProcessEdge Solutions'
export const BRAND_TAGLINE  = 'Smart Processes. Better Results.'
export const BRAND_DOMAIN   = 'www.processedge.com.ng'
export const BRAND_HANDLE   = '@processedgeng'

// Email: shown publicly — update if a confirmed public address differs
export const BRAND_EMAIL    = 'hello@processedge.com.ng'

// WhatsApp: confirmed number +234 809 608 6857
export const WHATSAPP_NUMBER = '2348096086857'
export const WHATSAPP_URL    = `https://wa.me/${WHATSAPP_NUMBER}`
export const WHATSAPP_DISPLAY = '+234 809 608 6857'

// ── Logo asset paths (/public/brand/) ────────────────────────────────────────
// IMPORTANT: filenames are case-sensitive on Linux/Vercel.
export const LOGO_FULL  = '/brand/processedge-logo.png'        // 1400×764 colour
export const LOGO_WHITE = '/brand/Processedge-logo-white.png'  // 1400×764 white (capital P)
export const LOGO_ICON  = '/brand/processedge-icon.png'        // 1024×1024 square
export const LOGO_OG    = '/brand/og-image.png'                // OG social preview

export const LOGO = {
  full:  LOGO_FULL,
  white: LOGO_WHITE,
  icon:  LOGO_ICON,
  og:    LOGO_OG,
} as const

export const LOGO_ASPECT_FULL = 1400 / 764  // ≈ 1.832

// ── Partner / technology asset paths (/public/partners/) ─────────────────────
export const PARTNERS = {
  zoho:      '/partners/zoho-logo.png',
  zohoBooks: '/partners/zoho-books-logo.png',
  prokip:    '/partners/prokip_logo.jpg',
  frappe:    '/partners/frappe-logo.png',
  erpnext:   '/partners/erpnext-logo.png',
} as const

// ── Social links ──────────────────────────────────────────────────────────────
export const SOCIAL = {
  twitter:  'https://twitter.com/processedgeng',
  linkedin: 'https://linkedin.com/company/processedge',
  facebook: 'https://facebook.com/processedgeng',
} as const
