import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Sparkles, Globe, Code2, Zap } from 'lucide-react'
import { stats } from '../data'

const ROLES = ['Web Developer', 'UI/UX Designer', 'SEO Expert', 'eCommerce Builder', 'Digital Partner']

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const typingRef = useRef(null)

  useEffect(() => {
    const current = ROLES[roleIdx]
    let timeout

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setIsDeleting(false)
        setRoleIdx(i => (i + 1) % ROLES.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIdx])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 100,
        paddingBottom: 80,
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <div className="grid-bg" />

      {/* Hero glow */}
      <div className="hero-glow" />

      {/* Floating 3D elements */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div className="float-anim" style={{
          position: 'absolute', top: '15%', left: '8%',
          padding: '10px 16px',
          background: 'var(--bg-glass)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          display: 'flex', alignItems: 'center', gap: 8,
          fontSize: '0.78rem', fontFamily: 'var(--font-mono)',
          color: 'var(--accent-primary)',
        }}>
          <Code2 size={14} />
          React & WordPress
        </div>

        <div className="float-anim-slow" style={{
          position: 'absolute', top: '20%', right: '7%',
          padding: '10px 16px',
          background: 'var(--bg-glass)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          display: 'flex', alignItems: 'center', gap: 8,
          fontSize: '0.78rem', fontFamily: 'var(--font-mono)',
          color: '#22c55e',
        }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', animation: 'availability-pulse 2s infinite' }} />
          Available for hire
        </div>

        <div className="float-rotate-anim" style={{
          position: 'absolute', bottom: '25%', left: '6%',
          width: 64, height: 64,
          background: 'linear-gradient(135deg, rgba(124,106,255,0.15), rgba(168,85,247,0.1))',
          border: '1px solid var(--border-accent)',
          borderRadius: 16,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.8rem',
        }}>
          ⚡
        </div>

        <div className="float-anim" style={{
          position: 'absolute', bottom: '30%', right: '5%',
          padding: '12px 16px',
          background: 'var(--bg-glass)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          fontSize: '0.75rem', fontFamily: 'var(--font-mono)',
          color: 'var(--text-secondary)',
          animationDelay: '-2s'
        }}>
          <div style={{ color: 'var(--accent-tertiary)', marginBottom: 2 }}>12+ Countries</div>
          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>🌍 Global Clients</div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 900, position: 'relative', zIndex: 2, padding: '0 24px' }}>
        {/* Availability badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <div className="availability-badge">
            <div className="availability-dot" />
            Open for new projects — Book a free call
          </div>
        </div>

        {/* Main headline */}
        <h1 style={{
          fontSize: 'clamp(2.4rem, 7vw, 6rem)',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          marginBottom: 24,
          color: 'var(--text-primary)',
        }}>
          Crafting Digital<br />
          Experiences That{' '}
          <span className="gradient-text" style={{ position: 'relative', display: 'inline-block' }}>
            Convert
            <svg style={{
              position: 'absolute', bottom: -8, left: 0, right: 0, width: '100%',
              overflow: 'visible', opacity: 0.4
            }} height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
              <path d="M0 6 Q25 0 50 5 Q75 10 100 3" stroke="url(#ug)" strokeWidth="2" fill="none" />
              <defs>
                <linearGradient id="ug" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c6aff" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        {/* Typewriter */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
          marginBottom: 28,
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
          color: 'var(--text-secondary)',
        }}>
          <span>I'm a</span>
          <span style={{
            color: 'var(--accent-primary)',
            fontWeight: 600,
            minWidth: '240px',
            textAlign: 'left',
          }}>
            {displayed}
            <span style={{ animation: 'blink 1s step-end infinite' }}>|</span>
          </span>
        </div>

        {/* Description */}
        <p style={{
          fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
          color: 'var(--text-secondary)',
          maxWidth: 640,
          margin: '0 auto 40px',
          lineHeight: 1.75,
        }}>
          5+ years building premium business websites & web apps for clients across the USA, Canada, Australia & India.
          Based in <strong style={{ color: 'var(--text-primary)' }}>Kolkata, West Bengal</strong> — serving the world.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '16px 36px' }}
          >
            <Sparkles size={18} />
            Book Free Consultation
          </button>
          <button
            onClick={() => scrollTo('work')}
            className="btn-outline"
            style={{ fontSize: '1rem', padding: '15px 35px' }}
          >
            View My Work
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
          maxWidth: 640,
          margin: '0 auto',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
              }}>
                {s.number}{s.suffix}
              </div>
              <div style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                marginTop: 4,
                letterSpacing: '0.05em',
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        zIndex: 2,
      }}>
        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span>SCROLL</span>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
