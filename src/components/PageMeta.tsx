import { Helmet } from 'react-helmet-async'
import { SITE_URL, LOGO_OG, BRAND_NAME, BRAND_EMAIL, SOCIAL } from '../config'

interface PageMetaProps {
  title: string
  description: string
  path?: string
  ogImage?: string
}

// ── JSON-LD structured data ───────────────────────────────────────────────────
// Injected on every page — only the homepage will match the WebSite type exactly,
// but Organization is valid site-wide.
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/processedge-icon.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    email: BRAND_EMAIL,
    contactType: 'customer support',
    areaServed: 'NG',
    availableLanguage: 'English',
  },
  sameAs: [SOCIAL.twitter, SOCIAL.linkedin, SOCIAL.facebook],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND_NAME,
  url: SITE_URL,
  description:
    'ProcessEdge Solutions helps businesses streamline workflows, automate operations, and achieve better results with ERP, automation, accounting, and industry-focused software solutions.',
  publisher: {
    '@type': 'Organization',
    name: BRAND_NAME,
    url: SITE_URL,
  },
}

export default function PageMeta({
  title,
  description,
  path = '',
  ogImage = LOGO_OG,
}: PageMetaProps) {
  const fullTitle = title.includes('ProcessEdge')
    ? title
    : `${title} | ProcessEdge Solutions`
  const url = `${SITE_URL}${path}`
  const isHome = path === '/' || path === ''

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={url} />
      <meta property="og:image"       content={`${SITE_URL}${ogImage}`} />
      <meta property="og:site_name"   content={BRAND_NAME} />
      <meta property="og:type"        content="website" />

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={`${SITE_URL}${ogImage}`} />

      {/* JSON-LD — Organization (site-wide) */}
      <script type="application/ld+json">
        {JSON.stringify(orgJsonLd)}
      </script>

      {/* JSON-LD — WebSite (homepage only) */}
      {isHome && (
        <script type="application/ld+json">
          {JSON.stringify(websiteJsonLd)}
        </script>
      )}
    </Helmet>
  )
}
