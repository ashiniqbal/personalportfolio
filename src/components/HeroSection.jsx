import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Zap, Globe, Code2, Star } from 'lucide-react'
import { stats } from '../data'

const ROLES = ['Web Developer', 'UI/UX Designer', 'SEO Specialist', 'eCommerce Expert', 'Digital Partner']

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  // Typewriter
  useEffect(() => {
    const current = ROLES[roleIdx]
    let timeout
    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 85)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 42)
      } else {
        setIsDeleting(false)
        setRoleIdx(i => (i + 1) % ROLES.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIdx])

  // Parallax on mouse move
  useEffect(() => {
    const onMove = (e) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 100,
        paddingBottom: 60,
      }}
    >
      {/* Grid bg */}
      <div className="grid-bg" />

      {/* Large hero glow */}
      <div style={{
        position: 'absolute', width: 900, height: 900, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,106,255,0.09) 0%, transparent 70%)',
        left: '50%', top: '50%', transform: 'translate(-50%, -55%)',
        pointerEvents: 'none',
      }} />

      {/* Top-left accent blob */}
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.07), transparent)',
        left: -150, top: -100, pointerEvents: 'none', filter: 'blur(40px)',
      }} />

      {/* Floating cards - left */}
      <div style={{
        position: 'absolute', left: 'max(3%, 20px)', top: '28%',
        transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
        transition: 'transform 0.3s ease', zIndex: 3,
        display: 'flex', flexDirection: 'column', gap: 12,
      }} className="hide-mobile">
        {/* Availability */}
        <div className="float-anim" style={{
          padding: '12px 16px',
          background: 'rgba(34,197,94,0.08)',
          border: '1px solid rgba(34,197,94,0.2)',
          borderRadius: 14,
          backdropFilter: 'blur(16px)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', animation: 'availability-pulse 2s infinite', flexShrink: 0 }} />
            <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#22c55e', fontWeight: 600 }}>Available Now</span>
          </div>
          <div style={{ fontSize: '0.68rem', color: 'rgba(34,197,94,0.7)', marginTop: 4, fontFamily: 'var(--font-mono)' }}>Open for new projects</div>
        </div>

        {/* Location */}
        <div className="float-anim-slow" style={{
          padding: '12px 16px',
          background: 'var(--bg-glass)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 14, backdropFilter: 'blur(16px)',
        }}>
          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: 2 }}>Based In</div>
          <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-primary)' }}>
            🇮🇳 Kolkata, India
          </div>
        </div>

        {/* Tech stack badge */}
        <div className="float-rotate-anim" style={{
          padding: '12px 16px',
          background: 'rgba(124,106,255,0.08)',
          border: '1px solid rgba(124,106,255,0.2)',
          borderRadius: 14, backdropFilter: 'blur(16px)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <Code2 size={14} color="var(--accent-primary)" />
          <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontWeight: 600 }}>React & WordPress</span>
        </div>
      </div>

      {/* Floating cards - right */}
      <div style={{
        position: 'absolute', right: 'max(3%, 20px)', top: '22%',
        transform: `translate(${-mousePos.x * 0.5}px, ${mousePos.y * 0.3}px)`,
        transition: 'transform 0.3s ease', zIndex: 3,
        display: 'flex', flexDirection: 'column', gap: 12,
      }} className="hide-mobile">
        {/* Countries */}
        <div className="float-anim-slow" style={{
          padding: '14px 18px',
          background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)',
          borderRadius: 14, backdropFilter: 'blur(16px)', textAlign: 'center',
        }}>
          <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', fontWeight: 800, background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>12+</div>
          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Countries</div>
          <div style={{ fontSize: '0.78rem', marginTop: 4 }}>🇺🇸 🇨🇦 🇦🇺 🇳🇬 🇲🇾</div>
        </div>

        {/* 5-Star */}
        <div className="float-anim" style={{
          padding: '12px 16px',
          background: 'rgba(251,191,36,0.08)',
          border: '1px solid rgba(251,191,36,0.2)',
          borderRadius: 14, backdropFilter: 'blur(16px)',
        }}>
          <div style={{ display: 'flex', gap: 2, marginBottom: 4 }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="#fbbf24" color="#fbbf24" />)}
          </div>
          <div style={{ fontSize: '0.72rem', color: '#fbbf24', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>5-Star Fiverr Seller</div>
        </div>

        {/* Delivery */}
        <div className="float-anim-slow" style={{
          padding: '12px 16px',
          background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)',
          borderRadius: 14, backdropFilter: 'blur(16px)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <Zap size={14} color="var(--accent-tertiary)" />
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--accent-tertiary)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>Fast Delivery</div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>~24 day avg</div>
          </div>
        </div>
      </div>

      {/* Main content - centered */}
      <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center', padding: '0 24px', position: 'relative', zIndex: 2 }}>

        {/* Eyebrow */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <div className="availability-badge">
            <div className="availability-dot" />
            <span>Open for new projects — </span>
            <Link to="/contact" style={{ color: '#22c55e', fontWeight: 700, textDecoration: 'underline' }}>Book a free call</Link>
          </div>
        </div>

        {/* BIG headline */}
        <h1 style={{
          fontSize: 'clamp(2.8rem, 8vw, 6.5rem)',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          lineHeight: 1.02,
          letterSpacing: '-0.04em',
          marginBottom: 20,
        }}>
          <span style={{ display: 'block', color: 'var(--text-primary)' }}>Your Vision.</span>
          <span style={{
            display: 'block',
            background: 'var(--gradient-text)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>My Code.</span>
          <span style={{ display: 'block', color: 'var(--text-primary)' }}>Real Results.</span>
        </h1>

        {/* Typewriter role line */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          marginBottom: 24, flexWrap: 'wrap',
        }}>
          <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
            I'm a
          </span>
          <span style={{
            color: 'var(--accent-primary)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
            fontWeight: 600,
            minWidth: '220px',
            textAlign: 'left',
          }}>
            {displayed}<span style={{ animation: 'blink 1s step-end infinite' }}>|</span>
          </span>
          <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
            from Kolkata
          </span>
        </div>

        {/* Description */}
        <p style={{
          fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
          color: 'var(--text-secondary)',
          maxWidth: 600, margin: '0 auto 44px',
          lineHeight: 1.8,
        }}>
          5+ years building <strong style={{ color: 'var(--text-primary)' }}>premium business websites & web apps</strong> for
          clients across USA, Canada, Australia & India. I combine AI speed with human creativity to deliver
          industry-level quality at a price that makes sense.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}>
          <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
            <Sparkles size={18} />
            Book Free Consultation
          </Link>
          <Link to="/work" className="btn-outline" style={{ fontSize: '1rem', padding: '15px 35px' }}>
            View My Work <ArrowRight size={16} />
          </Link>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0, maxWidth: 560, margin: '0 auto',
          background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)', backdropFilter: 'blur(12px)',
          overflow: 'hidden',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '20px 12px', textAlign: 'center',
              borderRight: i < stats.length - 1 ? '1px solid var(--border-subtle)' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                lineHeight: 1,
              }}>
                {s.number}{s.suffix}
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: 4, letterSpacing: '0.04em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span>scroll</span>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </section>
  )
}
