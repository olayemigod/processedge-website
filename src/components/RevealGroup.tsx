import { useEffect, useRef } from 'react'

interface RevealGroupProps {
  /** Children must be the card elements with .reveal-card or .reveal-block class */
  children: React.ReactNode
  /** CSS class to wrap the group in (default: undefined — renders a fragment wrapper div) */
  className?: string
  tag?: keyof JSX.IntrinsicElements
  threshold?: number
  style?: React.CSSProperties
}

/**
 * Wraps a group of .reveal-card / .reveal-block elements and attaches an
 * IntersectionObserver that sets data-revealed="true" as each child enters
 * the viewport. Respects prefers-reduced-motion by skipping all animations.
 */
export default function RevealGroup({
  children,
  className,
  tag: Tag = 'div',
  threshold = 0.12,
  style,
}: RevealGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const container = containerRef.current
    if (!container) return

    // Grab all revealable children
    const targets = Array.from(
      container.querySelectorAll<HTMLElement>('.reveal-card, .reveal-block')
    )

    if (prefersReduced) {
      targets.forEach((el) => el.setAttribute('data-revealed', 'true'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.setAttribute('data-revealed', 'true')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold])

  // We need a concrete wrapper to hold the ref; use the requested tag
  const Element = Tag as React.ElementType
  return (
    <Element className={className} style={style} ref={containerRef as React.RefObject<HTMLDivElement>}>
      {children}
    </Element>
  )
}
