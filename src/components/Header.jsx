import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/#work' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <header
        className={scrolled ? 'scrolled' : ''}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 8000,
          padding: scrolled ? '12px 24px' : '20px 24px',
          transition: 'padding 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div
          className="header-inner"
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: scrolled ? '12px 24px' : '0',
            transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <div style={{
              width: 38, height: 38,
              borderRadius: 10,
              background: 'var(--gradient-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 800, fontSize: '1.1rem',
              color: '#fff',
              boxShadow: '0 4px 16px rgba(124,106,255,0.4)',
            }}>A</div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700, fontSize: '1.05rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
            }}>
              Ashin<span style={{ color: 'var(--accent-primary)' }}>.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hide-mobile" style={{ display: 'flex', gap: 4 }}>
            {NAV_LINKS.map(link => {
              const isActive = location.pathname === link.href || (link.href.startsWith('/#') && location.pathname === '/')
              return link.href.startsWith('/#') ? (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href.slice(2))}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s, background 0.2s',
                    background: 'transparent',
                    cursor: 'pointer',
                    border: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--text-primary)'
                    e.currentTarget.style.background = 'var(--bg-glass)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    color: location.pathname === link.href ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    transition: 'color 0.2s, background 0.2s',
                    background: location.pathname === link.href ? 'rgba(124,106,255,0.1)' : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right — theme + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: 40, height: 40,
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-subtle)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.3s',
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent-primary)'
                e.currentTarget.style.borderColor = 'var(--border-accent)'
                e.currentTarget.style.background = 'rgba(124,106,255,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.borderColor = 'var(--border-subtle)'
                e.currentTarget.style.background = 'var(--bg-glass)'
              }}
            >
              <div style={{
                transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
                transform: theme === 'dark' ? 'rotate(0deg)' : 'rotate(180deg)',
                display: 'flex'
              }}>
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </div>
            </button>

            <a
              href="#contact"
              onClick={e => { e.preventDefault(); scrollTo('contact') }}
              className="btn-primary hide-mobile"
              style={{ padding: '10px 22px', fontSize: '0.85rem' }}
            >
              Free Consult
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="hide-desktop"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                width: 40, height: 40,
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-subtle)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-primary)',
                zIndex: 9100,
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        {/* Bokeh orbs in mobile menu */}
        <div style={{
          position: 'absolute', width: 300, height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,106,255,0.15), transparent)',
          top: -100, right: -100, pointerEvents: 'none'
        }} />
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {NAV_LINKS.map((link, i) => (
            link.href.startsWith('/#') ? (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href.slice(2))}
                className="mobile-nav-link"
                style={{
                  textAlign: 'left',
                  animationDelay: `${i * 0.08}s`,
                  background: 'none',
                  cursor: 'pointer',
                }}
              >
                {link.label}
              </button>
            ) : (
              <Link key={link.label} to={link.href} className="mobile-nav-link"
                style={{ animationDelay: `${i * 0.08}s` }}>
                {link.label}
              </Link>
            )
          ))}
        </nav>
        <div style={{ marginTop: 'auto' }}>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); scrollTo('contact') }}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Book Free Consultation
          </a>
          <p style={{
            marginTop: 20,
            color: 'var(--text-muted)',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)'
          }}>
            📍 Kolkata, West Bengal, India
          </p>
        </div>
      </div>
    </>
  )
}
