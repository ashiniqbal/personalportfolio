import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--c-black)', color: 'var(--c-white)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        {/* Top CTA strip */}
        <div style={{
          padding: '56px 0 48px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', flexWrap: 'wrap', gap: 24,
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-serif)', fontWeight: 400,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: 'var(--c-white)', lineHeight: 1.1, marginBottom: 8,
              letterSpacing: '-0.02em',
            }}>
              Ready to Build Something<br /><em>Exceptional?</em>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', maxWidth: 380, lineHeight: 1.6 }}>
              From Kolkata to the world — let's create a website that works as hard as you do.
            </p>
          </div>
          <Link to="/contact" style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '12px 24px', borderRadius: 'var(--r-full)',
            background: 'var(--c-white)', color: 'var(--c-black)',
            fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.875rem',
            textDecoration: 'none', flexShrink: 0,
            transition: 'background var(--t-fast)',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#E0E0E0'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--c-white)'}
          >
            Book A Call <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Main grid */}
        <div style={{
          padding: '48px 0 32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 32,
        }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, textDecoration: 'none' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--c-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', color: 'var(--c-black)', fontSize: '0.95rem', flexShrink: 0 }}>A</div>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.95rem', color: 'var(--c-white)' }}>Ashin Iqbal</span>
            </Link>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: 200 }}>
              Freelance web developer & UI/UX designer from Kolkata, India.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Navigation</div>
            {[['Home', '/'], ['Portfolio', '/work'], ['Blog', '/blogs'], ['Contact', '/contact']].map(([l, h]) => (
              <Link key={l} to={h} style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', marginBottom: 9, transition: 'color var(--t-fast)', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--c-white)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>
                {l}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Services</div>
            {['Business Website', 'eCommerce Store', 'UI/UX Design', 'SEO Optimization', 'Web Application'].map(s => (
              <Link key={s} to="/contact" style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', marginBottom: 9, transition: 'color var(--t-fast)', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--c-white)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>
                {s}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Contact</div>
            {[['📍', 'Kolkata, West Bengal, India'], ['✉️', 'hello@ashiniqbal.com'], ['💬', 'WhatsApp Available'], ['🌐', 'ashiniqbal.com']].map(([icon, val]) => (
              <div key={val} style={{ display: 'flex', gap: 7, fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', marginBottom: 9 }}>
                <span>{icon}</span><span>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 0', display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} Ashin Iqbal. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)' }}>
            Built with care from Kolkata, India ❤️
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Privacy Policy', 'Terms'].map(l => (
              <a key={l} href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', transition: 'color var(--t-fast)', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.2)'}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
