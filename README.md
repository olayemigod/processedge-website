# ProcessEdge Solutions — Marketing Website

**Smart Processes. Better Results.**

A modern, conversion-focused marketing website for ProcessEdge Solutions built with React, TypeScript, and Vite. Designed to be deployed on Vercel from a GitHub repository.

---

## 📁 Folder Structure

```
processedge-website/
├── public/
│   └── favicon.svg                  # Replace with actual favicon
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── Navbar.tsx / .css        # Top navigation with dropdowns & mobile menu
│   │   ├── Footer.tsx / .css        # Site footer
│   │   ├── ProductCard.tsx / .css   # Product suite card
│   │   ├── ServiceCard.tsx / .css   # Service listing card
│   │   ├── CTASection.tsx / .css    # Reusable call-to-action banner
│   │   └── ProcessSteps.tsx / .css  # 5-step implementation journey
│   │
│   ├── pages/                       # Page-level components
│   │   ├── Home.tsx / .css          # Homepage (all sections)
│   │   ├── Products.tsx             # Products listing
│   │   ├── Services.tsx             # Services listing
│   │   ├── About.tsx / .css         # About page
│   │   ├── Contact.tsx / .css       # Contact form page
│   │   ├── Resources.tsx / .css     # Blog/resources page
│   │   │
│   │   ├── products/                # Individual product pages
│   │   │   ├── EduEdge.tsx
│   │   │   ├── VetEdge.tsx
│   │   │   ├── HotelEdge.tsx
│   │   │   ├── CoopEdge.tsx
│   │   │   └── ChurchEdge.tsx
│   │   │
│   │   └── services/                # Individual service pages
│   │       ├── ERPImplementation.tsx
│   │       ├── AccountingSolutions.tsx
│   │       ├── RetailSalesAutomation.tsx
│   │       └── TrainingSupport.tsx
│   │
│   ├── services/
│   │   └── api/
│   │       └── index.ts             # API placeholder (form submission, portal links)
│   │
│   ├── App.tsx                      # Router + layout wrapper
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Global styles, CSS variables, utilities
│
├── .env.example                     # Environment variable template
├── .gitignore
├── index.html                       # HTML shell (loads Google Fonts)
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json                      # SPA routing config for Vercel
└── README.md
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env.local
# Edit .env.local with your actual values

# 3. Run development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 🌐 Pages & Routes

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/products` | Products listing |
| `/products/eduedge` | EduEdge product |
| `/products/vetedge` | VetEdge product |
| `/products/hoteledge` | HotelEdge product |
| `/products/coopedge` | CoopEdge product |
| `/products/churchedge` | ChurchEdge product |
| `/services` | Services listing |
| `/services/erp-implementation` | ERP Implementation |
| `/services/accounting-solutions` | Accounting Solutions |
| `/services/retail-sales-automation` | Retail Sales Automation |
| `/services/training-support` | Training & Support |
| `/about` | About Us |
| `/contact` | Contact / Book a Consultation |
| `/resources` | Resources & Blog |

---

## 🔐 Authentication & Portal

This frontend does **not** implement authentication. All login buttons redirect to:

```
https://portal.processedge.com.ng
```

Staff Login and Customer Portal both point to this URL. To update this, change the `PORTAL_URL` constant in:
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/pages/Contact.tsx`

Or add a `VITE_PORTAL_URL` env variable and reference it from `src/services/api/index.ts`.

---

## 📋 Before Production Deployment

Replace the following before going live:

### 1. Content
- [ ] Company phone number (WhatsApp link in `Contact.tsx`)
- [ ] Actual email address (`hello@processedge.com.ng`)
- [ ] Social media profile URLs in `Footer.tsx`
- [ ] Add real team bios/photos to `About.tsx`
- [ ] Replace placeholder article content in `Resources.tsx` with real blog posts

### 2. Forms
- [ ] Set up a form service (Formspree, EmailJS, or custom backend endpoint)
- [ ] Add `VITE_CONTACT_FORM_ENDPOINT` to `.env.local` and production env vars
- [ ] Wire `submitContactForm()` from `src/services/api/index.ts` into `Contact.tsx`

### 3. SEO & Analytics
- [ ] Add `<meta>` tags per page (title, description, OG tags) — consider `react-helmet-async`
- [ ] Add `VITE_GA_MEASUREMENT_ID` for Google Analytics
- [ ] Add `sitemap.xml` (use `vite-plugin-sitemap`)
- [ ] Replace `favicon.svg` with actual ProcessEdge logo favicon

### 4. Assets
- [ ] Add real logo SVG/PNG to replace the text-based `PE` mark in Navbar/Footer
- [ ] Add product screenshot/mockup images where indicated (optional enhancement)

### 5. Domain
- [ ] Point `www.processedge.com.ng` DNS to Vercel
- [ ] Set custom domain in Vercel dashboard

---

## ☁️ Deploying to Vercel

```bash
# Option A: Push to GitHub first, then connect in Vercel dashboard
git init
git add .
git commit -m "Initial commit — ProcessEdge website"
git remote add origin https://github.com/YOUR_ORG/processedge-website.git
git push -u origin main

# Then: vercel.com → New Project → Import GitHub repo
# Build command: npm run build
# Output directory: dist
# Install command: npm install
```

The `vercel.json` file already handles SPA routing rewrites — no extra config needed.

---

## 🎨 Brand Reference

| Token | Value | Usage |
|-------|-------|-------|
| `--blue` | `#0056A6` | Primary CTA, links, nav active |
| `--green` | `#1C9C5D` | Success, highlights, growth accents |
| `--grey` | `#6C757D` | Supporting text |
| `--white` | `#FFFFFF` | Backgrounds |
| `--black` / `--text-main` | `#111111` / `#1a1a2e` | Strong text |

Fonts: **Montserrat** (headings) · **Open Sans** (body) via Google Fonts.

---

## 🛠️ Tech Stack

- **React 18** + **TypeScript** — component framework
- **React Router v6** — client-side routing
- **Vite 5** — bundler and dev server
- **Lucide React** — icons
- **CSS Modules (file-scoped)** — styling (no Tailwind dependency)
- **Vercel** — deployment target

---

## 📞 Support

For technical questions about this codebase: contact the ProcessEdge development team.

Website: [www.processedge.com.ng](https://www.processedge.com.ng)  
Social: @processedgeng
