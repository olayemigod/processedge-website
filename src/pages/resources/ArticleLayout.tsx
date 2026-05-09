import { Link } from 'react-router-dom'
import { ArrowLeft, Clock, Tag, ArrowRight } from 'lucide-react'
import CTASection from '../../components/CTASection'
import './ArticleLayout.css'

export interface ArticleSection {
  heading: string
  body: string        // plain paragraphs separated by \n\n
  bullets?: string[]  // optional bullet list after the body
}

export interface RelatedLink {
  label: string
  to: string
  variant?: 'primary' | 'secondary' | 'green'
}

export interface RelatedArticle {
  title: string
  path: string
  category: string
}

interface ArticleLayoutProps {
  title: string
  category: string
  categoryColor?: string
  summary: string
  readTime: string
  sections: ArticleSection[]
  relatedLinks: RelatedLink[]
  relatedArticles: RelatedArticle[]
  ctaHeadline?: string
  ctaSubtext?: string
}

export default function ArticleLayout({
  title,
  category,
  categoryColor = 'var(--blue)',
  summary,
  readTime,
  sections,
  relatedLinks,
  relatedArticles,
  ctaHeadline = "Ready to Put This Into Practice?",
  ctaSubtext  = "We don't just deliver software. We help businesses gain control of their operations with structured systems, automated workflows, and business-ready technology.",
}: ArticleLayoutProps) {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── Article hero ── */}
      <section className="article-hero">
        <div className="container article-hero__inner">
          <Link to="/resources" className="article-back">
            <ArrowLeft size={15} /> Back to Resources
          </Link>
          <div className="article-hero__meta">
            <span className="article-category" style={{ color: categoryColor }}>
              <Tag size={12} /> {category}
            </span>
            <span className="article-read-time">
              <Clock size={12} /> {readTime}
            </span>
          </div>
          <h1 className="article-title">{title}</h1>
          <p className="article-summary">{summary}</p>
        </div>
      </section>

      {/* ── Body + Sidebar ── */}
      <div className="container article-page">

        {/* Main content */}
        <article className="article-body">
          {sections.map((sec, i) => (
            <section key={i} className="article-section">
              <h2 className="article-h2">{sec.heading}</h2>
              {sec.body.split('\n\n').map((para, j) => (
                <p key={j} className="article-para">{para}</p>
              ))}
              {sec.bullets && sec.bullets.length > 0 && (
                <ul className="article-list">
                  {sec.bullets.map((b, k) => (
                    <li key={k}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Inline CTA block */}
          <div className="article-inline-cta">
            <div className="article-inline-cta__text">
              <p>
                ProcessEdge helps businesses go beyond software delivery — bringing operational
                control, structure, and visibility through systems that are properly implemented
                and adopted.
              </p>
            </div>
            <div className="article-inline-cta__actions">
              {relatedLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`btn btn-${link.variant ?? 'primary'}`}
                >
                  {link.label} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="article-sidebar">

          {/* Quick links */}
          <div className="article-sidebar__card">
            <div className="article-sidebar__label">Relevant Pages</div>
            <div className="article-sidebar__links">
              {relatedLinks.map(link => (
                <Link key={link.to} to={link.to} className="article-sidebar__link">
                  {link.label} <ArrowRight size={12} />
                </Link>
              ))}
            </div>
          </div>

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div className="article-sidebar__card">
              <div className="article-sidebar__label">Related Articles</div>
              <div className="article-sidebar__links">
                {relatedArticles.map(a => (
                  <Link key={a.path} to={a.path} className="article-sidebar__link">
                    <span className="article-sidebar__rel-cat">{a.category}</span>
                    {a.title} <ArrowRight size={12} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Consult promo */}
          <div className="article-sidebar__card article-sidebar__card--accent">
            <div className="article-sidebar__accent-title">
              Need Help Implementing?
            </div>
            <p className="article-sidebar__accent-body">
              Book a free consultation and we'll map the right solution to your business.
            </p>
            <Link to="/contact" className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
              Book a Consultation
            </Link>
          </div>
        </aside>
      </div>

      <CTASection
        headline={ctaHeadline}
        subtext={ctaSubtext}
        primaryLabel="Book a Free Consultation"
        primaryTo="/contact"
        secondaryLabel="Explore Our Products"
        secondaryTo="/products"
      />
    </div>
  )
}
