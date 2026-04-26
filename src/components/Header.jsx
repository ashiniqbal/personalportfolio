import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '/', type: 'route' },
  { label: 'Work', href: '/work', type: 'route' },
  { label: 'Blogs', href: '/blogs', type: 'route' },
  { label: 'Contact', href: '/contact', type: 'route' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={scrolled ? 'scrolled' : ''}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 8000,
          padding: scrolled ? '10px 24px' : '18px 24px',
          transition: 'padding 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div
          className="header-inner"
          style={{
            maxWidth: 1280, margin: '0 auto',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            padding: scrolled ? '12px 28px' : '0',
            transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'var(--gradient-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#fff',
              boxShadow: '0 4px 16px rgba(124,106,255,0.4)',
              flexShrink: 0,
            }}>A</div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
              Ashin<span style={{ color: 'var(--accent-primary)' }}>.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: 4 }} className="hide-mobile">
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                to={link.href}
                style={{
                  padding: '8px 20px',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500, fontSize: '0.9rem',
                  color: isActive(link.href) ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  background: isActive(link.href) ? 'rgba(124,106,255,0.1)' : 'transparent',
                  transition: 'all 0.2s',
                  display: 'block',
                }}
                onMouseEnter={e => {
                  if (!isActive(link.href)) {
                    e.currentTarget.style.color = 'var(--text-primary)'
                    e.currentTarget.style.background = 'var(--bg-glass)'
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive(link.href)) {
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: 40, height: 40, borderRadius: 'var(--radius-full)',
                background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-secondary)', transition: 'all 0.3s', flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-primary)'; e.currentTarget.style.borderColor = 'var(--border-accent)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
            >
              <div style={{ transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)', transform: theme === 'dark' ? 'rotate(0deg)' : 'rotate(180deg)', display: 'flex' }}>
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </div>
            </button>

            <Link to="/contact" className="btn-primary hide-mobile" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
              Free Consult
            </Link>

            {/* Mobile Toggle */}
            <button
              className="hide-desktop"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              style={{
                width: 40, height: 40, borderRadius: 'var(--radius-full)',
                background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-primary)', zIndex: 9100,
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,106,255,0.15), transparent)', top: -100, right: -100, pointerEvents: 'none' }} />
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.label}
              to={link.href}
              className="mobile-nav-link"
              style={{ animationDelay: `${i * 0.08}s`, display: 'block' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div style={{ marginTop: 'auto' }}>
          <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
            Book Free Consultation
          </Link>
          <p style={{ marginTop: 20, color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
            📍 Kolkata, West Bengal, India
          </p>
        </div>
      </div>
    </>
  )
}
