/**
 * PartnerLogoMarquee
 * ------------------
 * Displays real partner / technology ecosystem logos in a smooth
 * infinite-scroll marquee.
 *
 * Rules enforced:
 * - No fake "certified" or "exclusive partner" badges
 * - Zoho and Prokip: partner brands
 * - Frappe and ERPNext: technology / implementation ecosystems
 * - All images use real files from /public/partners/
 * - Pauses on hover
 * - Respects prefers-reduced-motion
 * - Accessible alt text on every image
 * - Clean white / light-grey premium SaaS look
 */

import { PARTNERS } from '../config'
import './PartnerLogoMarquee.css'

interface Partner {
  src: string
  alt: string
  /** Shown below the logo image as a small category tag */
  type: 'Partner' | 'Technology' | 'Implementation Ecosystem'
  /** Displayed name beneath the logo */
  name: string
}

const PARTNER_LIST: Partner[] = [
  {
    src:  PARTNERS.zoho,
    alt:  'Zoho — Partner',
    name: 'Zoho',
    type: 'Partner',
  },
  {
    src:  PARTNERS.zohoBooks,
    alt:  'Zoho Books — Partner',
    name: 'Zoho Books',
    type: 'Partner',
  },
  {
    src:  PARTNERS.prokip,
    alt:  'Prokip — Partner',
    name: 'Prokip',
    type: 'Partner',
  },
  {
    src:  PARTNERS.frappe,
    alt:  'Frappe Framework — Technology Ecosystem',
    name: 'Frappe',
    type: 'Technology',
  },
  {
    src:  PARTNERS.erpnext,
    alt:  'ERPNext — Implementation Ecosystem',
    name: 'ERPNext',
    type: 'Implementation Ecosystem',
  },
]

// Triple the list so the loop is seamless even on very wide screens
const TRACK = [...PARTNER_LIST, ...PARTNER_LIST, ...PARTNER_LIST]

const TYPE_CLASS: Record<string, string> = {
  'Partner':                  'plm-card__type--partner',
  'Technology':               'plm-card__type--tech',
  'Implementation Ecosystem': 'plm-card__type--impl',
}

export default function PartnerLogoMarquee() {
  return (
    <section className="plm-section" aria-label="Technology and implementation partners">
      <div className="container plm-header">
        <div className="section-label section-label-blue">Ecosystem</div>
        <h2 className="plm-title">Technology &amp; Implementation Partners</h2>
        <p className="plm-copy">
          ProcessEdge works with trusted technology ecosystems to help businesses
          adopt practical systems for accounting, CRM, ERP, automation, and
          operational control.
        </p>
      </div>

      {/* Marquee track — edge-fade mask applied in CSS */}
      <div className="plm-track-outer" aria-hidden="true">
        <div className="plm-track">
          {TRACK.map((partner, i) => (
            <div key={i} className="plm-card">
              <div className="plm-card__img-wrap">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="plm-card__img"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
              <div className="plm-card__name">{partner.name}</div>
              <div className={`plm-card__type ${TYPE_CLASS[partner.type] ?? ''}`}>
                {partner.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
