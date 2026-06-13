import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  /** Intersection threshold 0–1 (default 0.15) */
  threshold?: number
  /** Root margin (default '0px') */
  rootMargin?: string
  /** If true, only fires once and then disconnects (default true) */
  once?: boolean
}

/**
 * Returns [ref, inView] where inView becomes true when the
 * element scrolls into the viewport.
 *
 * By default (once=true) the observer is disconnected after
 * first intersection, so the value never flips back to false.
 */
export function useInView<T extends Element = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = '0px',
  once = true,
}: UseInViewOptions = {}): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, inView]
}
