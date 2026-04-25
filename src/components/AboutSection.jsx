import { useScrollReveal } from '../hooks/useScrollReveal'
import { experience } from '../data'
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react'

const expertise = [
  'Business Websites', 'High-performance eCommerce', 'Booking & Appointment Systems',
  'Custom CMS Solutions', 'POS & Shipment Setup', 'UI/UX Design', 'Technical SEO', 'Web App Development'
]

export default function AboutSection() {
  const [headRef, headVisible] = useScrollReveal()
  const [aiRef, aiVisible] = useScrollReveal()

  return (
    <section id="about">
      <div className="container">
        {/* AI Banner */}
        <div
          ref={aiRef}
          className={`fade-up ${aiVisible ? 'visible' : ''}`}
          style={{
            background: 'linear-gradient(135deg, rgba(124,106,255,0.08) 0%, rgba(6,182,212,0.08) 100%)',
            border: '1px solid var(--border-accent)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(28px, 5vw, 48px)',
            marginBottom: 80,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: -40, right: -40,
            width: 200, height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,106,255,0.12), transparent)',
            pointerEvents: 'none',
          }} />
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <div className="section-label">My Philosophy</div>
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 20,
            maxWidth: 720,
            margin: '0 auto 20px',
          }}>
            AI Didn't Replace Developers —{' '}
            <span className="gradient-text">It Made Us Unstoppable</span>
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            textAlign: 'center',
            maxWidth: 680,
            margin: '0 auto',
            fontSize: '1.05rem',
            lineHeight: 1.75,
          }}>
            The best developers today aren't fighting AI — they're wielding it. I use AI tools to move faster,
            catch edge cases earlier, and deliver industry-level websites at a fraction of traditional agency cost.
            Your business gets enterprise quality without the enterprise price tag.
          </p>
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginTop: 28
          }}>
            {['🤖 AI-Enhanced Workflow', '⚡ 2× Faster Delivery', '✅ More Robust Validation', '💰 More Affordable', '🏆 Industry-Level Quality'].map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Main about grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 60,
          alignItems: 'start',
        }}>
          {/* Left - Bio */}
          <div>
            <div ref={headRef} className={`fade-up ${headVisible ? 'visible' : ''}`}>
              <div className="section-label" style={{ display: 'inline-flex' }}>About Me</div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 20, marginTop: 16 }}>
                Building the Web,{' '}
                <span className="gradient-text">One Project at a Time</span>
              </h2>
              <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
                <p style={{ marginBottom: 16 }}>
                  I began my journey in 2019 as a UI/UX and graphic designer while pursuing a B.Tech in IT at JIS College of Engineering,
                  building a strong foundation in HTML, CSS, and C++.
                </p>
                <p style={{ marginBottom: 16 }}>
                  Over time, I expanded into full-stack development and started freelancing on Fiverr —
                  deploying business websites for companies like Agillitics, Kanac, and Linus International.
                  Today, I'm a dedicated web development professional with <strong style={{ color: 'var(--text-primary)' }}>5+ years of experience</strong> creating
                  robust, modern, conversion-focused websites.
                </p>
                <p>
                  I specialize in building websites from scratch with smooth UI, clean design, and engaging UX —
                  handling every project with care, attention to detail, and clear communication from start to finish.
                </p>
              </div>

              {/* Expertise */}
              <div style={{ marginTop: 32 }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: 16, color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  What I Build
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  {expertise.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={14} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a
                  href="#contact"
                  onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="btn-primary"
                >
                  Work With Me
                </a>
                <a
                  href="/ashin-iqbal-cv.pdf"
                  download
                  className="btn-outline"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Right - Timeline */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.3rem',
              fontWeight: 700,
              marginBottom: 32,
              color: 'var(--text-primary)',
            }}>
              My Journey
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {experience.map((item, i) => (
                <TimelineItem key={i} item={item} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, delay }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="process-step">
        <div className="process-step-number" style={{ background: item.type === 'Education' ? 'linear-gradient(135deg, #06b6d4, #7c6aff)' : 'var(--gradient-primary)' }}>
          {item.type === 'Education' ? <GraduationCap size={16} /> : <Briefcase size={16} />}
        </div>
        <div style={{ paddingBottom: 8 }}>
          <div style={{
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            color: item.type === 'Education' ? 'var(--accent-tertiary)' : 'var(--accent-primary)',
            marginBottom: 4, fontWeight: 600,
          }}>
            {item.year} · {item.type}
          </div>
          <h4 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: 2,
          }}>
            {item.title}
          </h4>
          <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: 6 }}>
            {item.org}
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  )
}
