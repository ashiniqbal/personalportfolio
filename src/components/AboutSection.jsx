import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { experience } from '../data'

const expertise = ['Business Websites', 'High-performance eCommerce', 'Booking & Appointment Systems', 'Custom CMS Solutions', 'POS & Shipment Setup', 'UI/UX Design', 'Technical SEO', 'Web App Development']

export default function AboutSection() {
  const [headRef, headVisible] = useScrollReveal()
  const [bodyRef, bodyVisible] = useScrollReveal()

  return (
    <section id="about" style={{ background: 'var(--bg-page)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* AI philosophy banner */}
        <div
          ref={headRef}
          className={`fade-up ${headVisible ? 'visible' : ''}`}
          style={{
            padding: 'clamp(32px, 5vw, 56px)',
            background: 'var(--bg-card)', border: '1px solid var(--border-light)',
            borderRadius: 'var(--r-xl)', marginBottom: 72,
            position: 'relative', overflow: 'hidden',
          }}
        >
          {/* Large quote mark */}
          <div style={{ position: 'absolute', top: -10, right: 32, fontFamily: 'var(--font-serif)', fontSize: '12rem', color: 'var(--border-light)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>"</div>
          <div style={{ maxWidth: 680, position: 'relative', zIndex: 2 }}>
            <div className="section-label" style={{ display: 'inline-flex', marginBottom: 20 }}>● My Philosophy</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', marginBottom: 20, lineHeight: 1.15 }}>
              AI Didn't Replace Developers —<br />
              <em style={{ fontStyle: 'italic' }}>It Made Us Unstoppable</em>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: 24 }}>
              The best developers today aren't fighting AI — they're wielding it. I use AI tools to move faster,
              catch edge cases earlier, and deliver industry-level websites at a fraction of traditional agency cost.
              Your business gets enterprise quality without the enterprise price tag.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['AI-Enhanced Workflow', '2× Faster Delivery', 'More Affordable', 'Industry-Level Quality'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Split: bio left, expertise right */}
        <div ref={bodyRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'start', marginBottom: 80 }} className="about-grid">
          <div className={`fade-up ${bodyVisible ? 'visible' : ''}`}>
            <div className="section-label" style={{ display: 'inline-flex', marginBottom: 16 }}>● About Me</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: 24, lineHeight: 1.15 }}>
              Building the Web,<br /><em>One Project at a Time</em>
            </h2>
            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.9rem' }}>
              <p style={{ marginBottom: 16 }}>
                I began my journey in 2019 as a UI/UX and graphic designer while pursuing a B.Tech in IT,
                building a strong foundation in HTML, CSS, and C++.
              </p>
              <p style={{ marginBottom: 16 }}>
                Over time, I expanded into full-stack development and started freelancing on Fiverr —
                deploying business websites for companies like Agillitics, Kanac, and Linus International.
              </p>
              <p>
                Today I'm a dedicated web development professional with <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>5+ years of experience</strong> creating
                robust, modern, conversion-focused websites for clients across 12 countries.
              </p>
            </div>
            <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-dark">Work With Me <ArrowUpRight size={14} /></Link>
              <a href="/ashin-iqbal-cv.pdf" download className="btn-outline">Download CV</a>
            </div>
          </div>

          <div className={`fade-up ${bodyVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.12s' }}>
            <div className="section-label" style={{ display: 'inline-flex', marginBottom: 16 }}>● What I Build</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {expertise.map((item, i) => (
                <div key={item} className={`fade-up ${bodyVisible ? 'visible' : ''}`} style={{
                  transitionDelay: `${0.15 + i * 0.04}s`,
                  padding: '12px 16px',
                  background: 'var(--bg-card)', border: '1px solid var(--border-light)',
                  borderRadius: 'var(--r-md)',
                  fontSize: '0.82rem', color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-body)',
                  transition: 'border-color var(--t-fast), color var(--t-fast)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-dark)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience table — exactly like reference image 4 */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 8, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="section-label" style={{ display: 'inline-flex', marginBottom: 8 }}>● Experiences</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.1 }}>
                Explore My<br />Design Journey
              </h2>
            </div>
            <div style={{ maxWidth: 340 }}>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.875rem', marginBottom: 12 }}>
                Over 5+ years, I've had the opportunity to work on a wide range of web projects,
                collaborating with diverse clients to bring creative visions to life.
              </p>
              <Link to="/contact" className="link-arrow">Book A Call</Link>
            </div>
          </div>

          {/* Table rows */}
          {experience.map((item, i) => <ExpRow key={i} item={item} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  )
}

function ExpRow({ item, delay }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`exp-row fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div>
        <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: 4 }}>
          {item.org}
        </h4>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          · {item.year}
        </p>
      </div>
      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        {item.title} — {item.desc}
      </p>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
        <span className="tag" style={{ fontSize: '0.68rem' }}>{item.type === 'Education' ? 'Education' : 'Work'}</span>
      </div>
    </div>
  )
}
