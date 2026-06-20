import { Link } from 'react-router-dom'
import { Globe, Twitter, Linkedin, Facebook, Mail, MapPin, ExternalLink } from 'lucide-react'
import Logo from './Logo'
import { PORTAL_URL, BRAND_TAGLINE, BRAND_EMAIL, BRAND_DOMAIN, SOCIAL } from '../config'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">

          {/* Brand column */}
          <div className="footer__brand">
            {/* White logo for dark background */}
            <div className="footer__logo-wrap">
              <Logo variant="full" theme="white" className="footer__logo-img" />
            </div>
            <p className="footer__tagline">{BRAND_TAGLINE}</p>
            <p className="footer__desc">
              Helping businesses streamline workflows, automate operations, and
              achieve better results with ERP, automation, accounting, and
              industry-focused solutions.
            </p>
            <div className="footer__contact">
              <a href={`https://${BRAND_DOMAIN}`} target="_blank" rel="noopener noreferrer">
                <Globe size={13} /> {BRAND_DOMAIN}
              </a>
              <a href={`mailto:${BRAND_EMAIL}`}>
                <Mail size={13} /> {BRAND_EMAIL}
              </a>
              <span>
                <MapPin size={13} /> Nigeria
              </span>
            </div>
            <div className="footer__social">
              <a href={SOCIAL.twitter}  target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
                <Twitter size={15} />
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={15} />
              </a>
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="footer__col">
            <h4>Products</h4>
            <Link to="/products/core">CoreEdge</Link>
            <Link to="/products/edgepay">EdgePay</Link>
            <Link to="/products/retailedge">RetailEdge</Link>
            <Link to="/products/eduedge">EduEdge</Link>
            <Link to="/products/vetedge">VetEdge</Link>
            <Link to="/products/clinicedge">ClinicEdge</Link>
            <Link to="/products/agricedge">AgricEdge</Link>
            <Link to="/products/hoteledge">HotelEdge</Link>
            <Link to="/products/coopedge">CoopEdge</Link>
            <Link to="/products/churchedge">ChurchEdge</Link>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4>Services</h4>
            <Link to="/services/erp-implementation">ERP Implementation</Link>
            <Link to="/services/accounting-solutions">Accounting Solutions</Link>
            <Link to="/services/retail-sales-automation">Retail Sales Automation</Link>
            <Link to="/services/training-support">Training &amp; Support</Link>
          </div>

          {/* Company */}
          <div className="footer__col">
            <h4>Company</h4>
            <Link to="/company">About Us</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/contact">Contact Us</Link>
            <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={12} style={{ marginRight: 4 }} />
              Staff Login
            </a>
            <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={12} style={{ marginRight: 4 }} />
              Customer Portal
            </a>
          </div>
        </div>
      </div>


      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} ProcessEdge Solutions. All rights reserved.</span>
          <div className="footer__bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <span className="footer__handle">@processedgeng</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
