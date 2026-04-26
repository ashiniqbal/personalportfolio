import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Instagram, Heart, ArrowUpRight } from 'lucide-react'

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
]

const SERVICES = [
  'Business Website', 'eCommerce Store', 'UI/UX Design',
  'SEO Optimization', 'Web Application', 'Website Redesign',
]

const SOCIALS = [
  { icon: <Github size={17} />, href: 'https://github.com/ashiniqbal', label: 'GitHub' },
  { icon: <Linkedin size={17} />, href: 'https://linkedin.com/in/ashiniqbal', label: 'LinkedIn' },
  { icon: <Twitter size={17} />, href: 'https://twitter.com/ashiniqbal', label: 'Twitter' },
  { icon: <Instagram size={17} />, href: 'https://instagram.com/ashiniqbal', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      {/* Top glow line */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 1, background: 'var(--gradient-primary)', opacity: 0.5 }} />

      <div className="container">
        {/* CTA Band */}
        <div style={{
          padding: '60px 0 48px',
          display: 'flex', flexWrap: 'wrap', gap: 24,
          justifyContent: 'space-between', alignItems: 'center',
          borderBottom: '1px solid var(--border-subtle)',
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 8 }}>
              Ready to Build Something <span className="gradient-text">Exceptional?</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 420, lineHeight: 1.6, fontSize: '0.95rem' }}>
              From Kolkata to the world — let's create a website that works as hard as you do.
            </p>
          </div>
          <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '15px 32px', flexShrink: 0 }}>
            Book Free Consultation <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Main Grid */}
        <div style={{
          padding: '52px 0 36px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 36,
        }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 38, height: 38, borderRadius: 11, background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>A</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem' }}>
                Ashin<span style={{ color: 'var(--accent-primary)' }}>.</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 210, marginBottom: 18 }}>
              Freelance web developer & UI/UX designer from Kolkata, India. Building the web, one business at a time.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{
                    width: 36, height: 36, borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-primary)'; e.currentTarget.style.borderColor = 'var(--border-accent)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {NAV.map(link => (
                <Link key={link.label} to={link.href}
                  style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>
              Services
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {SERVICES.map(s => (
                <Link key={s} to="/contact"
                  style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                { icon: '📍', text: 'Kolkata, West Bengal, India' },
                { icon: '✉️', text: 'hello@ashiniqbal.com' },
                { icon: '💬', text: 'WhatsApp Available' },
                { icon: '🌐', text: 'ashiniqbal.com' },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', gap: 7, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <span>{item.icon}</span><span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '22px 0', display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} Ashin Iqbal. All rights reserved.
          </p>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-mono)' }}>
            Built with <Heart size={11} fill="#ef4444" color="#ef4444" /> from Kolkata, India
          </p>
          <div style={{ display: 'flex', gap: 18 }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', transition: 'color 0.2s' }}
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
