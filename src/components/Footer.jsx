import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Instagram, Heart, ArrowUpRight } from 'lucide-react'

const LINKS = {
  Navigation: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/#about' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact', href: '/#contact' },
  ],
  Services: [
    { label: 'Business Website', href: '/#contact' },
    { label: 'eCommerce Store', href: '/#contact' },
    { label: 'UI/UX Design', href: '/#contact' },
    { label: 'SEO Optimization', href: '/#contact' },
    { label: 'Web Application', href: '/#contact' },
  ],
}

const SOCIALS = [
  { icon: <Github size={18} />, href: 'https://github.com/ashiniqbal', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/ashiniqbal', label: 'LinkedIn' },
  { icon: <Twitter size={18} />, href: 'https://twitter.com/ashiniqbal', label: 'Twitter' },
  { icon: <Instagram size={18} />, href: 'https://instagram.com/ashiniqbal', label: 'Instagram' },
]

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--bg-secondary)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 1,
        background: 'var(--gradient-primary)',
        opacity: 0.5,
      }} />

      <div className="container">
        {/* Top CTA band */}
        <div style={{
          padding: '60px 0 48px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 24,
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid var(--border-subtle)',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: 8,
            }}>
              Ready to Build Something <span className="gradient-text">Exceptional?</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 460, lineHeight: 1.6 }}>
              From Kolkata to the world — let's create a website that works as hard as you do.
            </p>
          </div>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '16px 36px', flexShrink: 0 }}
          >
            Book Free Consultation <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Main footer grid */}
        <div style={{
          padding: '56px 0 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 40,
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: 'var(--gradient-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: '#fff',
              }}>A</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem' }}>
                Ashin<span style={{ color: 'var(--accent-primary)' }}>.</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 220 }}>
              Freelance web developer & UI/UX designer from Kolkata, India. Building the web, one business at a time.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 38, height: 38,
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent-primary)'
                    e.currentTarget.style.borderColor = 'var(--border-accent)'
                    e.currentTarget.style.background = 'rgba(124,106,255,0.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-muted)'
                    e.currentTarget.style.borderColor = 'var(--border-subtle)'
                    e.currentTarget.style.background = 'var(--bg-glass)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                {section}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(link => (
                  link.href.startsWith('/#') ? (
                    <button
                      key={link.label}
                      onClick={() => scrollTo(link.href.slice(2))}
                      style={{
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer',
                        transition: 'color 0.2s',
                        padding: 0,
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          ))}

          {/* Contact info */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: '📍', text: 'Kolkata, West Bengal, India' },
                { icon: '✉️', text: 'hello@ashiniqbal.com' },
                { icon: '💬', text: 'WhatsApp Available' },
                { icon: '🌐', text: 'ashiniqbal.com' },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', gap: 8, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          padding: '24px 0',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} Ashin Iqbal. All rights reserved.
          </p>
          <p style={{
            fontSize: '0.8rem', color: 'var(--text-muted)',
            display: 'flex', alignItems: 'center', gap: 4,
            fontFamily: 'var(--font-mono)',
          }}>
            Built with <Heart size={12} fill="#ef4444" color="#ef4444" /> from Kolkata, India
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{
                fontSize: '0.78rem', color: 'var(--text-muted)',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
