import { useEffect, useRef, useState } from 'react'

interface UseCountUpOptions {
  /** Target numeric value */
  end: number
  /** Duration in ms (default 1600) */
  duration?: number
  /** Delay before starting (ms, default 0) */
  delay?: number
  /** Whether the observer element is in view (controlled externally) */
  inView: boolean
}

/**
 * Animates a number from 0 → end once inView becomes true.
 * Fires only once (does not restart on re-entry).
 * Respects prefers-reduced-motion by returning the final value immediately.
 */
export function useCountUp({
  end,
  duration = 1600,
  delay = 0,
  inView,
}: UseCountUpOptions): number {
  const [value, setValue] = useState(0)
  const hasRun = useRef(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView || hasRun.current) return

    // Respect reduced motion — jump straight to end
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setValue(end)
      hasRun.current = true
      return
    }

    const startAnimation = () => {
      hasRun.current = true
      const startTime = performance.now()

      const tick = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(eased * end))
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick)
        } else {
          setValue(end)
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    const timer = delay > 0 ? setTimeout(startAnimation, delay) : null
    if (!timer) startAnimation()

    return () => {
      if (timer) clearTimeout(timer)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [inView, end, duration, delay])

  return value
}
