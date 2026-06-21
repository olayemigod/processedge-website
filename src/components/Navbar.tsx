import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu, X, ChevronDown, LogIn, CalendarCheck,
  Settings, GitMerge, FileText, ShoppingCart, Calculator, BookOpen, Cpu, Info, Globe, Tag, Mail
} from 'lucide-react'
import Logo from './Logo'
import { PORTAL_URL } from '../config'
import './Navbar.css'
import { EDGESUITE_PRODUCTS } from '../data/edgeSuiteProducts'

// ── Nav data ──────────────────────────────────────────────────────────────────

const NAV_SERVICES_GROUPS = [
  {
    title: 'Implementation & Advisory',
    items: [
      { name: 'ERP Implementation', desc: 'Full ERPNext deployment & go-live', path: '/services/erp-implementation', icon: Settings },
      { name: 'Business Process Optimization', desc: 'Streamline workflows and audit readiness', path: '/resources/business-process-optimization', icon: GitMerge },
      { name: 'Process Review & Consultation', desc: 'Operational assessment and system design', path: '/services/erp-implementation', icon: FileText }
    ]
  },
  {
    title: 'Business Operations',
    items: [
      { name: 'Retail Sales Automation', desc: 'POS, inventory & branch controls', path: '/services/retail-sales-automation', icon: ShoppingCart },
      { name: 'Accounting Solutions', desc: 'Bookkeeping, reporting & compliance', path: '/services/accounting-solutions', icon: Calculator },
      { name: 'Training & Support', desc: 'User training & ongoing ERP support', path: '/services/training-support', icon: BookOpen }
    ]
  }
]

const NAV_COMPANY_GROUPS = [
  {
    title: 'About ProcessEdge',
    items: [
      { name: 'Company', desc: 'Learn about our mission and team', path: '/company', icon: Info },
      { name: 'Industries', desc: 'Sectors we serve across Africa', path: '/industries', icon: Globe },
      { name: 'Pricing', desc: 'Transparent subscription plans', path: '/pricing', icon: Tag },
      { name: 'Contact', desc: 'Get in touch with our office', path: '/contact', icon: Mail }
    ]
  },
  {
    title: 'Resources / Action',
    items: [
      { name: 'Book a Consultation', desc: 'Schedule a free process audit', path: '/contact', icon: CalendarCheck },
      { name: 'Client Portal', desc: 'Access your cloud dashboard', path: PORTAL_URL, icon: LogIn, external: true },
      { name: 'Explore Products', desc: 'Browse the full EdgeSuite', path: '/products', icon: Cpu }
    ]
  }
]

// ── Hover-delay constants ─────────────────────────────────────────────────────
// How long (ms) the dropdown stays open after the mouse leaves,
// giving the user time to move the cursor into the panel.
const CLOSE_DELAY = 180

export default function Navbar() {
  const [menuOpen, setMenuOpen]             = useState(false)
  const [scrolled, setScrolled]             = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const closeTimer  = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const location    = useLocation()

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
    setExpandedSection(null)
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [location])

  // ── Lock body scroll when mobile menu open ──────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // ── Focus trap: move focus into mobile menu when it opens ───────────────────
  useEffect(() => {
    if (!menuOpen) return

    // Wait a tick so the menu is rendered before we query it
    const frame = requestAnimationFrame(() => {
      const menu = mobileMenuRef.current
      if (!menu) return
      const firstFocusable = menu.querySelector<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      )
      firstFocusable?.focus()
    })
    return () => cancelAnimationFrame(frame)
  }, [menuOpen])

  // ── Escape key closes mobile menu + returns focus ───────────────────────────
  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  // ── Tab focus trap inside mobile menu ──────────────────────────────────────
  useEffect(() => {
    if (!menuOpen) return
    const menu = mobileMenuRef.current
    if (!menu) return

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const focusable = Array.from(
        menu.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.closest('[disabled]'))

      if (hamburgerRef.current) {
        focusable.unshift(hamburgerRef.current)
      }

      if (focusable.length === 0) return

      const first = focusable[0]
      const last  = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
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

  const toggleMobileSection = (section: string) => {
    setExpandedSection(prev => prev === section ? null : section)
  }

  // ── Shared dropdown props factory ────────────────────────────────────────────
  const dropdownProps = (name: string) => ({
    onMouseEnter: () => openDropdown(name),
    onMouseLeave: scheduleClose,
  })

  const panelProps = {
    onMouseEnter: cancelClose,
    onMouseLeave: scheduleClose,
  }

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    // When closing via hamburger, return focus to hamburger button
    if (!next) {
      requestAnimationFrame(() => hamburgerRef.current?.focus())
    }
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
              className={`navbar__link navbar__link--btn${isGroupActive(EDGESUITE_PRODUCTS.map(p => p.ctaLink)) ? ' active' : ''}`}
              aria-haspopup="true"
              aria-expanded={activeDropdown === 'products'}
            >
              Products <ChevronDown size={13} />
            </button>
            {activeDropdown === 'products' && (
              <div className="navbar__mega-panel navbar__mega-panel--products" role="menu" {...panelProps}>
                <div className="navbar__mega-inner">
                  {/* Column 1: Platform & Infrastructure */}
                  <div className="navbar__mega-section navbar__mega-section--left">
                    <div className="navbar__mega-header">Platform &amp; Infrastructure</div>
                    <div className="navbar__mega-list">
                      {EDGESUITE_PRODUCTS.filter(p => p.category === 'Platform Foundation' || p.category === 'Payments Infrastructure').map(p => {
                        const Icon = p.icon
                        const statusClass = p.status.toLowerCase().replace(' ', '-')
                        return (
                          <Link key={p.slug} to={p.ctaLink} className="navbar__mega-item navbar__mega-item--foundation" role="menuitem">
                            <div className="navbar__mega-item-icon">
                              <Icon size={18} />
                            </div>
                            <div className="navbar__mega-item-content">
                              <div className="navbar__mega-item-title">
                                <span className="navbar__mega-item-name">{p.name}</span>
                                <span className={`navbar__mega-badge navbar__mega-badge--${statusClass}`}>
                                  {p.status}
                                </span>
                              </div>
                              <div className="navbar__mega-item-sector">{p.targetSector}</div>
                              <div className="navbar__mega-item-desc">{p.shortDescription}</div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>

                  {/* Column 2: Discovery Layer */}
                  <div className="navbar__mega-section navbar__mega-section--middle">
                    <div className="navbar__mega-header">Discovery Layer</div>
                    <div className="navbar__mega-list">
                      {EDGESUITE_PRODUCTS.filter(p => p.category === 'Discovery Layer').map(p => {
                        const Icon = p.icon
                        const statusClass = p.status.toLowerCase().replace(' ', '-')
                        return (
                          <Link key={p.slug} to={p.ctaLink} className="navbar__mega-item" role="menuitem">
                            <div className="navbar__mega-item-icon">
                              <Icon size={16} />
                            </div>
                            <div className="navbar__mega-item-content">
                              <div className="navbar__mega-item-title">
                                <span className="navbar__mega-item-name">{p.name}</span>
                                <span className={`navbar__mega-badge navbar__mega-badge--${statusClass}`}>
                                  {p.status}
                                </span>
                              </div>
                              <div className="navbar__mega-item-sector">{p.targetSector}</div>
                              <div className="navbar__mega-item-desc">{p.shortDescription}</div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>

                  {/* Column 3: Industry Solutions */}
                  <div className="navbar__mega-section navbar__mega-section--right">
                    <div className="navbar__mega-header">Industry Solutions</div>
                    <div className="navbar__mega-grid">
                      {EDGESUITE_PRODUCTS.filter(p => p.category === 'Industry App').map(p => {
                        const Icon = p.icon
                        const statusClass = p.status.toLowerCase().replace(' ', '-')
                        return (
                          <Link key={p.slug} to={p.ctaLink} className="navbar__mega-item" role="menuitem">
                            <div className="navbar__mega-item-icon">
                              <Icon size={16} />
                            </div>
                            <div className="navbar__mega-item-content">
                              <div className="navbar__mega-item-title">
                                <span className="navbar__mega-item-name">{p.name}</span>
                                <span className={`navbar__mega-badge navbar__mega-badge--${statusClass}`}>
                                  {p.status}
                                </span>
                              </div>
                              <div className="navbar__mega-item-sector">{p.targetSector}</div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className="navbar__mega-footer">
                  <Link to="/products">View all EdgeSuite products →</Link>
                </div>
              </div>
            )}
          </div>

          {/* Services dropdown */}
          <div className="navbar__dropdown-wrap" {...dropdownProps('services')}>
            <button
              className={`navbar__link navbar__link--btn${isGroupActive(NAV_SERVICES_GROUPS.flatMap(g => g.items.map(i => i.path))) ? ' active' : ''}`}
              aria-haspopup="true"
              aria-expanded={activeDropdown === 'services'}
            >
              Services <ChevronDown size={13} />
            </button>
            {activeDropdown === 'services' && (
              <div className="navbar__mega-panel navbar__mega-panel--compact" role="menu" {...panelProps}>
                <div className="navbar__mega-inner navbar__mega-inner--compact">
                  {NAV_SERVICES_GROUPS.map(group => (
                    <div key={group.title} className="navbar__mega-section">
                      <div className="navbar__mega-header">{group.title}</div>
                      <div className="navbar__mega-list">
                        {group.items.map(item => {
                          const Icon = item.icon
                          return (
                            <Link key={item.path} to={item.path} className="navbar__mega-item" role="menuitem">
                              <div className="navbar__mega-item-icon">
                                <Icon size={16} />
                              </div>
                              <div className="navbar__mega-item-content">
                                <div className="navbar__mega-item-title">
                                  <span className="navbar__mega-item-name">{item.name}</span>
                                </div>
                                <div className="navbar__mega-item-desc">{item.desc}</div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="navbar__mega-footer">
                  <Link to="/services">Explore all services →</Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/solutions"  className={`navbar__link${isActive('/solutions')  ? ' active' : ''}`}>Solutions</Link>
          <Link to="/industries" className={`navbar__link${isActive('/industries') ? ' active' : ''}`}>Industries</Link>
          <Link to="/pricing"    className={`navbar__link${isActive('/pricing')    ? ' active' : ''}`}>Pricing</Link>

          {/* Company dropdown */}
          <div className="navbar__dropdown-wrap" {...dropdownProps('company')}>
            <button
              className={`navbar__link navbar__link--btn${isGroupActive(['/company', '/about', '/resources', '/contact', '/pricing', '/industries']) ? ' active' : ''}`}
              aria-haspopup="true"
              aria-expanded={activeDropdown === 'company'}
            >
              Company <ChevronDown size={13} />
            </button>
            {activeDropdown === 'company' && (
              <div className="navbar__mega-panel navbar__mega-panel--compact" role="menu" {...panelProps}>
                <div className="navbar__mega-inner navbar__mega-inner--compact">
                  {NAV_COMPANY_GROUPS.map(group => (
                    <div key={group.title} className="navbar__mega-section">
                      <div className="navbar__mega-header">{group.title}</div>
                      <div className="navbar__mega-list">
                        {group.items.map(item => {
                          const Icon = item.icon
                          return item.external ? (
                            <a key={item.path} href={item.path} target="_blank" rel="noopener noreferrer" className="navbar__mega-item" role="menuitem">
                              <div className="navbar__mega-item-icon">
                                <Icon size={16} />
                              </div>
                              <div className="navbar__mega-item-content">
                                <div className="navbar__mega-item-title">
                                  <span className="navbar__mega-item-name">{item.name}</span>
                                </div>
                                <div className="navbar__mega-item-desc">{item.desc}</div>
                              </div>
                            </a>
                          ) : (
                            <Link key={item.path} to={item.path} className="navbar__mega-item" role="menuitem">
                              <div className="navbar__mega-item-icon">
                                <Icon size={16} />
                              </div>
                              <div className="navbar__mega-item-content">
                                <div className="navbar__mega-item-title">
                                  <span className="navbar__mega-item-name">{item.name}</span>
                                </div>
                                <div className="navbar__mega-item-desc">{item.desc}</div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
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
            ref={hamburgerRef}
            className="navbar__hamburger"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="navbar-mobile-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Panel ── */}
      {menuOpen && (
        <div
          id="navbar-mobile-menu"
          className="navbar__mobile"
          role="dialog"
          aria-label="Mobile navigation"
          aria-modal="true"
          ref={mobileMenuRef}
        >
          <Link to="/" className="navbar__mobile-link">Home</Link>

          {/* Products Accordion */}
          <div className="navbar__mobile-accordion">
            <button
              className="navbar__mobile-accordion-trigger"
              onClick={() => toggleMobileSection('products')}
              aria-expanded={expandedSection === 'products'}
              aria-controls="mobile-products-panel"
            >
              <span>Products</span>
              <ChevronDown size={16} className={expandedSection === 'products' ? 'rotate-180' : ''} />
            </button>
            {expandedSection === 'products' && (
              <div id="mobile-products-panel" className="navbar__mobile-accordion-content">
                <div className="navbar__mobile-section-title">Platform &amp; Infrastructure</div>
                {EDGESUITE_PRODUCTS.filter(p => p.category === 'Platform Foundation' || p.category === 'Payments Infrastructure').map(p => {
                  const statusClass = p.status.toLowerCase().replace(' ', '-')
                  return (
                    <Link key={p.slug} to={p.ctaLink} className="navbar__mobile-sublink">
                      <span className="navbar__mobile-sublink-name">{p.name}</span>
                      <span className={`navbar__mobile-badge navbar__mobile-badge--${statusClass}`}>{p.status}</span>
                    </Link>
                  )
                })}

                <div className="navbar__mobile-section-title" style={{ marginTop: 12 }}>Discovery Layer</div>
                {EDGESUITE_PRODUCTS.filter(p => p.category === 'Discovery Layer').map(p => {
                  const statusClass = p.status.toLowerCase().replace(' ', '-')
                  return (
                    <Link key={p.slug} to={p.ctaLink} className="navbar__mobile-sublink">
                      <span className="navbar__mobile-sublink-name">{p.name}</span>
                      <span className={`navbar__mobile-badge navbar__mobile-badge--${statusClass}`}>{p.status}</span>
                    </Link>
                  )
                })}

                <div className="navbar__mobile-section-title" style={{ marginTop: 12 }}>Industry Solutions</div>
                {EDGESUITE_PRODUCTS.filter(p => p.category === 'Industry App').map(p => {
                  const statusClass = p.status.toLowerCase().replace(' ', '-')
                  return (
                    <Link key={p.slug} to={p.ctaLink} className="navbar__mobile-sublink">
                      <span className="navbar__mobile-sublink-name">{p.name}</span>
                      <span className={`navbar__mobile-badge navbar__mobile-badge--${statusClass}`}>{p.status}</span>
                    </Link>
                  )
                })}
                <Link to="/products" className="navbar__mobile-link-all" style={{ marginTop: 8 }}>
                  View all products →
                </Link>
              </div>
            )}
          </div>

          {/* Services Accordion */}
          <div className="navbar__mobile-accordion">
            <button
              className="navbar__mobile-accordion-trigger"
              onClick={() => toggleMobileSection('services')}
              aria-expanded={expandedSection === 'services'}
              aria-controls="mobile-services-panel"
            >
              <span>Services</span>
              <ChevronDown size={16} className={expandedSection === 'services' ? 'rotate-180' : ''} />
            </button>
            {expandedSection === 'services' && (
              <div id="mobile-services-panel" className="navbar__mobile-accordion-content">
                {NAV_SERVICES_GROUPS.map(group => (
                  <div key={group.title} style={{ marginBottom: 12 }}>
                    <div className="navbar__mobile-section-title">{group.title}</div>
                    {group.items.map(item => (
                      <Link key={item.path} to={item.path} className="navbar__mobile-sublink">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link to="/services" className="navbar__mobile-link-all">
                  View all services →
                </Link>
              </div>
            )}
          </div>

          <Link to="/solutions"  className="navbar__mobile-link">Solutions</Link>
          <Link to="/industries" className="navbar__mobile-link">Industries</Link>
          <Link to="/pricing"    className="navbar__mobile-link">Pricing</Link>

          {/* Company Accordion */}
          <div className="navbar__mobile-accordion">
            <button
              className="navbar__mobile-accordion-trigger"
              onClick={() => toggleMobileSection('company')}
              aria-expanded={expandedSection === 'company'}
              aria-controls="mobile-company-panel"
            >
              <span>Company</span>
              <ChevronDown size={16} className={expandedSection === 'company' ? 'rotate-180' : ''} />
            </button>
            {expandedSection === 'company' && (
              <div id="mobile-company-panel" className="navbar__mobile-accordion-content">
                {NAV_COMPANY_GROUPS.map(group => (
                  <div key={group.title} style={{ marginBottom: 12 }}>
                    <div className="navbar__mobile-section-title">{group.title}</div>
                    {group.items.map(item => item.external ? (
                      <a key={item.path} href={item.path} target="_blank" rel="noopener noreferrer" className="navbar__mobile-sublink">
                        {item.name}
                      </a>
                    ) : (
                      <Link key={item.path} to={item.path} className="navbar__mobile-sublink">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
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
