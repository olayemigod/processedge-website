import { useState } from 'react'
import { LOGO, BRAND_NAME } from '../config'
import './Logo.css'

interface LogoProps {
  /**
   * full  — full colour or white wordmark
   * mark  — square icon only (processedge-icon.png)
   */
  variant?: 'full' | 'mark'
  /**
   * default — colour logo for white / light backgrounds  → processedge-logo.png
   * white   — white logo for dark / coloured backgrounds → Processedge-logo-white.png
   */
  theme?: 'default' | 'white'
  /**
   * CSS class passed from the parent (Navbar, Footer).
   * The parent is responsible for setting height via className or inline style.
   * Logo.tsx never sets a hard-coded width — aspect ratio is preserved by CSS.
   */
  className?: string
}

export default function Logo({
  variant   = 'full',
  theme     = 'default',
  className = '',
}: LogoProps) {
  const [imgError, setImgError] = useState(false)

  // Graceful text fallback — only if the image fails to load.
  // This is NOT a brand mark replacement.
  if (imgError) {
    return (
      <span className={`logo-fallback ${className}`.trim()}>
        {BRAND_NAME}
      </span>
    )
  }

  if (variant === 'mark') {
    return (
      <img
        src={LOGO.icon}
        alt={BRAND_NAME}
        // height is set by className from parent; width follows via CSS width:auto
        className={`logo logo--mark ${className}`.trim()}
        draggable={false}
        loading="eager"
        decoding="async"
        onError={() => setImgError(true)}
      />
    )
  }

  // Full wordmark — colour or white depending on theme.
  // DO NOT pass a hard-coded width attribute here.
  // CSS width:auto lets the browser calculate the correct width from the
  // rendered height, preserving the original 1400×764 aspect ratio exactly.
  const src = theme === 'white' ? LOGO.white : LOGO.full

  return (
    <img
      src={src}
      alt={BRAND_NAME}
      // Only height is constrained; width is always auto via Logo.css
      className={`logo logo--full ${className}`.trim()}
      draggable={false}
      loading="eager"
      decoding="async"
      onError={() => setImgError(true)}
    />
  )
}
