import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react'

const NAV = [
  { label: 'About Me', href: '/work' },
  { label: 'Portfolio', href: '/work' },
  { label: 'Blog', href: '/blogs' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  const isActive = href => location.pathname === href || (href !== '/' && location.pathname.startsWith(href))

  return (
    <>
      <header
        className={scrolled ? 'scrolled' : ''}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 8000,
          padding: scrolled ? '10px 24px' : '18px 40px',
          transition: 'padding 0.35s ease',
          background: 'transparent',
        }}
      >
        <div
          className="header-inner"
          style={{
            maxWidth: 1240, margin: '0 auto',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: scrolled ? '10px 28px' : 0,
            transition: 'all 0.35s ease',
          }}
        >
          {/* Logo — wolf icon style like reference */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <div style={{
              width: 34, height: 34,
              background: 'var(--text-primary)',
              borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--bg-page)',
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem', fontWeight: 400,
              transition: 'background var(--t-fast)',
              flexShrink: 0,
            }}>
              A
            </div>
          </Link>

          {/* Center nav */}
          <nav className="hide-mobile" style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {NAV.map(link => (
              <Link
                key={link.label}
                to={link.href}
                style={{
                  padding: '7px 16px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  color: isActive(link.href) ? 'var(--text-primary)' : 'var(--text-secondary)',
                  borderRadius: 'var(--r-full)',
                  transition: 'color var(--t-fast), background var(--t-fast)',
                  background: isActive(link.href) ? 'var(--bg-card)' : 'transparent',
                  border: isActive(link.href) ? '1px solid var(--border-light)' : '1px solid transparent',
                }}
                onMouseEnter={e => { if (!isActive(link.href)) e.currentTarget.style.color = 'var(--text-primary)' }}
                onMouseLeave={e => { if (!isActive(link.href)) e.currentTarget.style.color = 'var(--text-secondary)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right group */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: 34, height: 34,
                borderRadius: 'var(--r-full)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all var(--t-fast)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-mid)'; e.currentTarget.style.color = 'var(--text-primary)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
            >
              {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
            </button>

            {/* CTA — editorial arrow style */}
            <Link
              to="/contact"
              className="hide-mobile"
              style={{
                display: 'flex', alignItems: 'center', gap: 5,
                fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500,
                color: 'var(--text-primary)',
                border: '1px solid var(--border-mid)',
                borderRadius: 'var(--r-full)',
                padding: '7px 16px',
                transition: 'border-color var(--t-fast), background var(--t-fast)',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text-primary)'; e.currentTarget.style.background = 'var(--bg-card)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-mid)'; e.currentTarget.style.background = 'transparent' }}
            >
              Book A Call <ArrowUpRight size={13} />
            </Link>

            {/* Mobile burger */}
            <button
              className="hide-desktop"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Menu"
              style={{
                width: 34, height: 34,
                borderRadius: 'var(--r-full)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-primary)',
              }}
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <nav>
          <Link to="/" className="mobile-nav-link">Home</Link>
          <Link to="/work" className="mobile-nav-link">Portfolio</Link>
          <Link to="/blogs" className="mobile-nav-link">Blog</Link>
          <Link to="/contact" className="mobile-nav-link">Contact</Link>
        </nav>
        <div style={{ marginTop: 'auto' }}>
          <Link to="/contact" className="btn-dark" style={{ width: '100%', justifyContent: 'center', display: 'flex', marginBottom: 16 }}>
            Book A Call <ArrowUpRight size={14} />
          </Link>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            📍 Kolkata, West Bengal, India
          </p>
        </div>
      </div>
    </>
  )
}
