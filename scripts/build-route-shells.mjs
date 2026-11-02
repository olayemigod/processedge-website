import { readFile, writeFile } from 'node:fs/promises'

const sourcePath = new URL('../dist/index.html', import.meta.url)
const targetPath = new URL('../dist/sellertray.html', import.meta.url)

let html = await readFile(sourcePath, 'utf8')

const replaceTag = (pattern, replacement, label) => {
  if (!pattern.test(html)) {
    throw new Error(`Unable to generate SellerTray route shell: missing ${label}`)
  }

  html = html.replace(pattern, replacement)
}

replaceTag(
  /<title>[\s\S]*?<\/title>/i,
  '<title>SellerTray — Mobile POS, Inventory & WhatsApp Commerce | ProcessEdge Solutions</title>',
  'document title',
)
replaceTag(
  /<meta\s+name=["']description["'][^>]*>/i,
  '<meta name="description" content="SellerTray by ProcessEdge is a mobile-first sales and retail operations platform for POS, orders, inventory, customers, payments, branch operations and WhatsApp commerce." />',
  'description meta tag',
)
replaceTag(
  /<meta\s+property=["']og:title["'][^>]*>/i,
  '<meta property="og:title" content="SellerTray — Mobile POS, Inventory & WhatsApp Commerce | ProcessEdge Solutions" />',
  'Open Graph title',
)
replaceTag(
  /<meta\s+property=["']og:description["'][^>]*>/i,
  '<meta property="og:description" content="SellerTray by ProcessEdge is a mobile-first sales and retail operations platform for POS, orders, inventory, customers, payments, branch operations and WhatsApp commerce." />',
  'Open Graph description',
)
replaceTag(
  /<meta\s+property=["']og:image:alt["'][^>]*>/i,
  '<meta property="og:image:alt" content="SellerTray by ProcessEdge" />',
  'Open Graph image alt text',
)
replaceTag(
  /<meta\s+name=["']twitter:title["'][^>]*>/i,
  '<meta name="twitter:title" content="SellerTray — Mobile POS, Inventory & WhatsApp Commerce | ProcessEdge Solutions" />',
  'Twitter title',
)
replaceTag(
  /<meta\s+name=["']twitter:description["'][^>]*>/i,
  '<meta name="twitter:description" content="SellerTray by ProcessEdge is a mobile-first sales and retail operations platform for POS, orders, inventory, customers, payments, branch operations and WhatsApp commerce." />',
  'Twitter description',
)
replaceTag(
  /<meta\s+name=["']twitter:image:alt["'][^>]*>/i,
  '<meta name="twitter:image:alt" content="SellerTray by ProcessEdge" />',
  'Twitter image alt text',
)

const routeSignals = `
    <!-- SellerTray route signals served before React hydration -->
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://processedge.com.ng/sellertray" />
    <meta property="og:url" content="https://processedge.com.ng/sellertray" />
    <script type="application/ld+json">
      ${JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        '@id': 'https://sellertray.com/#application',
        name: 'SellerTray',
        url: 'https://sellertray.com',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Android',
        description:
          'Mobile-first sales and retail operations software for POS, orders, inventory, customers, payments, branch operations and WhatsApp commerce.',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://processedge.com.ng/#organization',
          name: 'ProcessEdge Solutions Limited',
          url: 'https://processedge.com.ng',
        },
      })}
    </script>`

if (!html.includes('</head>')) {
  throw new Error('Unable to generate SellerTray route shell: missing closing head tag')
}

html = html.replace('</head>', `${routeSignals}\n  </head>`)

await writeFile(targetPath, html)
