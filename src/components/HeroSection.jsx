import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const ROLES = ['Web Developer', 'UI/UX Designer', 'SEO Specialist', 'eCommerce Expert']

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [tick, setTick] = useState(true)

  useEffect(() => {
    const current = ROLES[roleIdx]
    let t
    if (!isDeleting) {
      if (displayed.length < current.length) t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 82)
      else t = setTimeout(() => setIsDeleting(true), 2200)
    } else {
      if (displayed.length > 0) t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38)
      else { setIsDeleting(false); setRoleIdx(i => (i + 1) % ROLES.length) }
    }
    return () => clearTimeout(t)
  }, [displayed, isDeleting, roleIdx])

  useEffect(() => {
    const t = setInterval(() => setTick(v => !v), 540)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'var(--header-h)',
        paddingBottom: 0,
        background: 'var(--bg-page)',
      }}
    >
      {/* ── Main layout ── */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '48px 1fr 1fr',
        gridTemplateRows: '1fr auto',
        maxWidth: 1240,
        margin: '0 auto',
        width: '100%',
        padding: '0 40px',
        gap: 0,
        minHeight: 'calc(100vh - var(--header-h))',
      }} className="hero-master-grid">

        {/* ── Left vertical label column ── */}
        <div style={{
          gridColumn: '1', gridRow: '1 / 3',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between', paddingBottom: 32, paddingTop: 40,
          borderRight: '1px solid var(--border-light)',
          marginRight: 32,
          alignItems: 'center',
        }} className="hide-mobile">
          <span className="side-label">Product Designer</span>
          <span className="year-label" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
            2025
          </span>
        </div>

        {/* ── Left content column ── */}
        <div style={{
          gridColumn: '2', gridRow: '1',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: 28, paddingTop: 48,
        }}>
          {/* Stats row */}
          <div style={{ display: 'flex', gap: 40, marginBottom: 32 }}>
            {[
              { n: '+50', l: 'Projects completed' },
              { n: '+12', l: 'Countries served' },
            ].map(s => (
              <div key={s.l}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}>{s.n}</div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  marginTop: 4,
                }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* BIG GREETING */}
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(5rem, 14vw, 12rem)',
            fontWeight: 400,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            marginBottom: 20,
          }}>
            Hello<span style={{ color: 'var(--text-secondary)' }}>.</span>
          </div>

          {/* Dash + subtitle */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
            color: 'var(--text-secondary)',
            letterSpacing: '0.01em',
          }}>
            — It's Ashin, a{' '}
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              {displayed}
              <span style={{ opacity: tick ? 1 : 0, transition: 'opacity 0.08s' }}>|</span>
            </span>
            {' '}from Kolkata
          </p>
        </div>

        {/* ── Right column — portrait / visual ── */}
        <div style={{
          gridColumn: '3', gridRow: '1',
          position: 'relative',
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: 0,
          overflow: 'hidden',
        }} className="hero-portrait-col">
          {/* Large abstract portrait placeholder — monochrome style */}
          <div style={{
            width: '100%', maxWidth: 420,
            aspectRatio: '3/4',
            background: 'var(--c-border)',
            borderRadius: 'var(--r-xl) var(--r-xl) 0 0',
            position: 'relative',
            overflow: 'hidden',
            alignSelf: 'flex-end',
          }}>
            {/* Placeholder: monochrome gradient pattern */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(160deg, #D8D8D8 0%, #B8B8B8 40%, #999 100%)',
            }} />
            {/* "Add your photo" label */}
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: 'rgba(255,255,255,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-serif)', fontSize: '1.8rem',
                color: 'rgba(255,255,255,0.8)',
              }}>A</div>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>
                Add your photo here
              </span>
            </div>

            {/* Floating skill tags — like reference image 1 */}
            <div className="float-anim" style={{
              position: 'absolute', top: 18, left: -48,
              padding: '8px 14px',
              background: 'var(--bg-card)', border: '1px solid var(--border-light)',
              borderRadius: 'var(--r-full)',
              display: 'flex', alignItems: 'center', gap: 7,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              whiteSpace: 'nowrap',
            }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>⚡</div>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-primary)', fontWeight: 500 }}>React & WordPress</span>
            </div>

            <div className="float-anim-slow" style={{
              position: 'absolute', top: 68, right: -52,
              padding: '8px 14px',
              background: 'var(--bg-card)', border: '1px solid var(--border-light)',
              borderRadius: 'var(--r-full)',
              display: 'flex', alignItems: 'center', gap: 7,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              whiteSpace: 'nowrap',
            }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#4A90D9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>🎨</div>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-primary)', fontWeight: 500 }}>UI/UX Design</span>
            </div>

            <div className="float-r-anim" style={{
              position: 'absolute', top: 140, left: -44,
              padding: '8px 14px',
              background: 'var(--bg-card)', border: '1px solid var(--border-light)',
              borderRadius: 'var(--r-full)',
              display: 'flex', alignItems: 'center', gap: 7,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              whiteSpace: 'nowrap',
            }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#2C2C2C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>🔍</div>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-primary)', fontWeight: 500 }}>SEO Expert</span>
            </div>

            <div className="float-anim" style={{
              position: 'absolute', bottom: 80, right: -56,
              padding: '8px 14px',
              background: 'var(--bg-card)', border: '1px solid var(--border-light)',
              borderRadius: 'var(--r-full)',
              display: 'flex', alignItems: 'center', gap: 7,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              whiteSpace: 'nowrap',
              animationDelay: '-1.5s',
            }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#9B59B6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>🛒</div>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-primary)', fontWeight: 500 }}>eCommerce</span>
            </div>

            <div className="float-anim-slow" style={{
              position: 'absolute', top: 210, right: -48,
              padding: '8px 14px',
              background: 'var(--bg-card)', border: '1px solid var(--border-light)',
              borderRadius: 'var(--r-full)',
              display: 'flex', alignItems: 'center', gap: 7,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              whiteSpace: 'nowrap',
            }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#27AE60', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>📈</div>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-primary)', fontWeight: 500 }}>Brand Identity</span>
            </div>
          </div>
        </div>

        {/* ── Bottom strip — full width ── */}
        <div style={{
          gridColumn: '2 / 4', gridRow: '2',
          borderTop: '1px solid var(--border-light)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 0',
          flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {/* Availability */}
            <div className="avail-badge">
              <div className="avail-dot" />
              Available for new projects
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              📍 Kolkata, India
            </span>
          </div>

          <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              className="scroll-indicator"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0, flexDirection: 'row', gap: 8 }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
                Scroll down ↓
              </div>
            </button>

            <Link to="/contact" className="btn-dark" style={{ fontSize: '0.85rem', padding: '10px 22px' }}>
              Book A Call <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 860px) {
          .hero-master-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto auto !important;
            padding: 0 20px !important;
          }
          .hero-portrait-col {
            grid-column: 1 !important;
            grid-row: 1 !important;
            min-height: 280px;
            padding-top: 20px;
          }
          .hero-portrait-col > div {
            max-width: 100% !important;
            aspect-ratio: 16/9 !important;
            border-radius: var(--r-lg) !important;
          }
          .hero-master-grid > div:nth-child(2) {
            grid-column: 1 !important;
            grid-row: 2 !important;
          }
          .hero-master-grid > div:last-child {
            grid-column: 1 !important;
            grid-row: 3 !important;
          }
        }
        @media (max-width: 580px) {
          .hero-portrait-col { display: none; }
          .hero-master-grid > div:nth-child(2) { grid-row: 1 !important; padding-top: 32px; }
          .hero-master-grid > div:last-child { grid-row: 2 !important; }
        }
      `}</style>
    </section>
  )
}
