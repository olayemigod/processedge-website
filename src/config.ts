/**
 * ProcessEdge Solutions — Site Configuration
 * Single source of truth for all public URLs and brand constants.
 * No secrets, no API keys. Safe in Vite frontend bundles.
 */

// ── Public URLs ──────────────────────────────────────────────────────────────
export const SITE_URL     = 'https://www.processedge.com.ng'
export const PORTAL_URL   = 'https://portal.processedge.com.ng'
export const API_BASE_URL = 'https://portal.processedge.com.ng'
// API_BASE_URL points to ERPNext/Frappe.
// All authenticated / CRM operations go through this domain only.
// Do NOT implement auth or privileged ERP operations in this frontend.

// ── Brand ────────────────────────────────────────────────────────────────────
export const BRAND_NAME    = 'ProcessEdge Solutions'
export const BRAND_TAGLINE = 'Smart Processes. Better Results.'
export const BRAND_EMAIL   = 'hello@processedge.com.ng'
export const BRAND_HANDLE  = '@processedgeng'
export const BRAND_DOMAIN  = 'www.processedge.com.ng'

// ── Logo asset paths (/public/brand/) ────────────────────────────────────────
// IMPORTANT: filenames are case-sensitive on Linux/Vercel.
// Match the exact casing of files in /public/brand/ on disk.
export const LOGO_FULL  = '/brand/processedge-logo.png'        // 1400×764 — colour, light backgrounds
export const LOGO_WHITE = '/brand/Processedge-logo-white.png'  // 1400×764 — white, dark backgrounds (capital P)
export const LOGO_ICON  = '/brand/processedge-icon.png'        // 1024×1024 — square icon/mark
export const LOGO_OG    = '/brand/og-image.png'                // OG social preview

// Backwards-compat object used by Logo.tsx
export const LOGO = {
  full:  LOGO_FULL,
  white: LOGO_WHITE,
  icon:  LOGO_ICON,
  og:    LOGO_OG,
} as const

// Natural aspect ratio of the full wordmark source file (1400 ÷ 764)
export const LOGO_ASPECT_FULL = 1400 / 764  // ≈ 1.832

// ── Partner / technology asset paths (/public/partners/) ────────────────────
// Exact filenames as they exist on disk — case-sensitive.
export const PARTNERS = {
  zoho:      '/partners/zoho-logo.png',
  zohoBooks: '/partners/zoho-books-logo.png',
  prokip:    '/partners/prokip_logo.jpg',
  frappe:    '/partners/frappe-logo.png',
  erpnext:   '/partners/erpnext-logo.png',
} as const

// ── Social ───────────────────────────────────────────────────────────────────
export const SOCIAL = {
  twitter:  'https://twitter.com/processedgeng',
  linkedin: 'https://linkedin.com/company/processedge',
  facebook: 'https://facebook.com/processedgeng',
} as const
