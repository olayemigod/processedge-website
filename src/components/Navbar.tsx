import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, LogIn, CalendarCheck } from 'lucide-react'
import Logo from './Logo'
import { PORTAL_URL } from '../config'
import './Navbar.css'

// ── Nav data ──────────────────────────────────────────────────────────────────

const NAV_PRODUCTS = [
  { name: 'EduEdge',          desc: 'School & CBT management',          path: '/products/eduedge',    badge: 'Featured' },
  { name: 'VetEdge',          desc: 'Veterinary practice management',    path: '/products/vetedge'    },
  { name: 'HotelEdge',        desc: 'Hospitality & hotel management',    path: '/products/hoteledge'  },
  { name: 'CoopEdge',         desc: 'Cooperative management',            path: '/products/coopedge'   },
  { name: 'ChurchEdge',       desc: 'Church & ministry management',      path: '/products/churchedge' },
  { name: 'ProcessEdge Core', desc: 'The ERPNext platform layer',        path: '/products/core',       badge: 'Platform' },
]

const NAV_SERVICES = [
  { name: 'ERP Implementation',      desc: 'Full ERPNext deployment & go-live',   path: '/services/erp-implementation'     },
  { name: 'Accounting Solutions',    desc: 'Bookkeeping, reporting & compliance',  path: '/services/accounting-solutions'   },
  { name: 'Retail Sales Automation', desc: 'POS, inventory & branch controls',     path: '/services/retail-sales-automation' },
  { name: 'Training & Support',      desc: 'User training & ongoing ERP support',  path: '/services/training-support'       },
]

// Resources and Contact live here — not as standalone nav links
const NAV_COMPANY = [
  { name: 'About Us',  path: '/company'   },
  { name: 'Resources', path: '/resources' },
  { name: 'Contact',   path: '/contact'   },
]

// ── Hover-delay constants ─────────────────────────────────────────────────────
// How long (ms) the dropdown stays open after the mouse leaves,
// giving the user time to move the cursor into the panel.
const CLOSE_DELAY = 180

export default function Navbar() {
  const [menuOpen, setMenuOpen]             = useState(false)
  const [scrolled, setScrolled]             = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location   = useLocation()

  // ── Scroll detection ────────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Close everything on route change ────────────────────────────────────────
  useEffect(() => {
    setMenuOpen(false)
    setActiveDropdown(null)
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [location])

  // ── Lock body scroll when mobile menu open ──────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // ── Hover helpers with delay ─────────────────────────────────────────────────
  const openDropdown = useCallback((name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(name)
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), CLOSE_DELAY)
  }, [])

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  // ── Helpers ──────────────────────────────────────────────────────────────────
  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname === path || location.pathname.startsWith(path + '/')

  const isGroupActive = (paths: string[]) =>
    paths.some(p => location.pathname === p || location.pathname.startsWith(p + '/'))

  // ── Shared dropdown props factory ────────────────────────────────────────────
  const dropdownProps = (name: string) => ({
    onMouseEnter: () => openDropdown(name),
    onMouseLeave: scheduleClose,
  })

  const panelProps = {
    onMouseEnter: cancelClose,
    onMouseLeave: scheduleClose,
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">

        {/* ── Logo ── */}
        <Link to="/" className="navbar__logo" aria-label="ProcessEdge Solutions — Home">
          <Logo variant="full" theme="default" className="navbar__logo-img" />
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="navbar__nav" aria-label="Main navigation">

          <Link
            to="/"
            className={`navbar__link${isActive('/') ? ' active' : ''}`}
            aria-current={isActive('/') ? 'page' : undefined}
          >
            Home
          </Link>

          {/* Products dropdown */}
          <div className="navbar__dropdown-wrap" {...dropdownProps('products')}>
            <button
              className={`navbar__link navbar__link--btn${isGroupActive(NAV_PRODUCTS.map(p => p.path)) ? ' active' : ''}`}
              aria-haspopup="true"
              aria-expanded={activeDropdown === 'products'}
            >
              Products <ChevronDown size={13} />
            </button>
            {activeDropdown === 'products' && (
              <div className="navbar__dropdown navbar__dropdown--wide" role="menu" {...panelProps}>
                <div className="navbar__dropdown-header">Our Products</div>
                {NAV_PRODUCTS.map(p => (
                  <Link key={p.path} to={p.path} className="navbar__dropdown-item" role="menuitem">
                    <span className="navbar__dropdown-name">
                      {p.name}
                      {p.badge && (
                        <span className={`navbar__dropdown-badge navbar__dropdown-badge--${p.badge === 'Featured' ? 'featured' : 'platform'}`}>
                          {p.badge}
                        </span>
                      )}
                    </span>
                    <span className="navbar__dropdown-desc">{p.desc}</span>
                  </Link>
                ))}
                <div className="navbar__dropdown-footer">
                  <Link to="/products">View all products →</Link>
                </div>
              </div>
            )}
          </div>

          {/* Services dropdown */}
          <div className="navbar__dropdown-wrap" {...dropdownProps('services')}>
            <button
              className={`navbar__link navbar__link--btn${isGroupActive(NAV_SERVICES.map(s => s.path)) ? ' active' : ''}`}
              aria-haspopup="true"
              aria-expanded={activeDropdown === 'services'}
            >
              Services <ChevronDown size={13} />
            </button>
            {activeDropdown === 'services' && (
              <div className="navbar__dropdown navbar__dropdown--wide" role="menu" {...panelProps}>
                <div className="navbar__dropdown-header">Professional Services</div>
                {NAV_SERVICES.map(s => (
                  <Link key={s.path} to={s.path} className="navbar__dropdown-item" role="menuitem">
                    <span className="navbar__dropdown-name">{s.name}</span>
                    <span className="navbar__dropdown-desc">{s.desc}</span>
                  </Link>
                ))}
                <div className="navbar__dropdown-footer">
                  <Link to="/services">View all services →</Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/solutions"  className={`navbar__link${isActive('/solutions')  ? ' active' : ''}`}>Solutions</Link>
          <Link to="/industries" className={`navbar__link${isActive('/industries') ? ' active' : ''}`}>Industries</Link>
          <Link to="/pricing"    className={`navbar__link${isActive('/pricing')    ? ' active' : ''}`}>Pricing</Link>

          {/* Company dropdown — contains About, Resources, Contact */}
          <div className="navbar__dropdown-wrap" {...dropdownProps('company')}>
            <button
              className={`navbar__link navbar__link--btn${isGroupActive(['/company', '/about', '/resources', '/contact']) ? ' active' : ''}`}
              aria-haspopup="true"
              aria-expanded={activeDropdown === 'company'}
            >
              Company <ChevronDown size={13} />
            </button>
            {activeDropdown === 'company' && (
              <div className="navbar__dropdown" role="menu" {...panelProps}>
                <div className="navbar__dropdown-header">Company</div>
                {NAV_COMPANY.map(c => (
                  <Link key={c.path} to={c.path} className="navbar__dropdown-item" role="menuitem">
                    <span className="navbar__dropdown-name">{c.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

        </nav>

        {/* ── Desktop CTA ── */}
        <div className="navbar__actions">
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__login"
          >
            <LogIn size={14} /> Login
          </a>
          <Link to="/contact" className="btn btn-primary btn-sm">
            <CalendarCheck size={14} /> Book a Demo
          </Link>
        </div>

        {/* ── Mobile bar: compact CTA + hamburger ── */}
        <div className="navbar__mobile-bar">
          <Link to="/contact" className="btn btn-primary btn-sm navbar__mobile-cta">
            Book Demo
          </Link>
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Panel ── */}
      {menuOpen && (
        <div className="navbar__mobile" role="dialog" aria-label="Mobile navigation">
          <Link to="/" className="navbar__mobile-link">Home</Link>

          <div className="navbar__mobile-section">
            <span className="navbar__mobile-section-label">Products</span>
            {NAV_PRODUCTS.map(p => (
              <Link key={p.path} to={p.path} className="navbar__mobile-link navbar__mobile-link--sub">
                {p.name}
              </Link>
            ))}
            <Link to="/products" className="navbar__mobile-link navbar__mobile-link--all">
              View all products →
            </Link>
          </div>

          <div className="navbar__mobile-section">
            <span className="navbar__mobile-section-label">Services</span>
            {NAV_SERVICES.map(s => (
              <Link key={s.path} to={s.path} className="navbar__mobile-link navbar__mobile-link--sub">
                {s.name}
              </Link>
            ))}
            <Link to="/services" className="navbar__mobile-link navbar__mobile-link--all">
              View all services →
            </Link>
          </div>

          <Link to="/solutions"  className="navbar__mobile-link">Solutions</Link>
          <Link to="/industries" className="navbar__mobile-link">Industries</Link>
          <Link to="/pricing"    className="navbar__mobile-link">Pricing</Link>

          {/* Company section — Resources and Contact live here, not as standalone items */}
          <div className="navbar__mobile-section">
            <span className="navbar__mobile-section-label">Company</span>
            {NAV_COMPANY.map(c => (
              <Link key={c.path} to={c.path} className="navbar__mobile-link navbar__mobile-link--sub">
                {c.name}
              </Link>
            ))}
          </div>

          <div className="navbar__mobile-actions">
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <LogIn size={14} /> Login to Portal
            </a>
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <CalendarCheck size={14} /> Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
