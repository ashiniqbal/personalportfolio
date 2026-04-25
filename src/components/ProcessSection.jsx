import { useScrollReveal } from '../hooks/useScrollReveal'
import { processSteps } from '../data'

export default function ProcessSection() {
  const [headRef, headVisible] = useScrollReveal()

  return (
    <section id="process">
      <div className="container">
        <div
          ref={headRef}
          className={`fade-up ${headVisible ? 'visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="section-label">How I Work</div>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginBottom: 16 }}>
            My Proven <span className="gradient-text">7-Step Process</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Every project follows this battle-tested process. Transparent, efficient, and built to ensure
            you're happy at every step — not just at the end.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 40,
        }}>
          {processSteps.map((step, i) => (
            <ProcessCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessCard({ step, index }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="glass-card" style={{ padding: 28 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
          {/* Step icon */}
          <div style={{
            width: 52, height: 52,
            borderRadius: 'var(--radius-md)',
            background: 'var(--gradient-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.5rem',
            flexShrink: 0,
            boxShadow: '0 8px 24px rgba(124,106,255,0.3)',
          }}>
            {step.icon}
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              marginBottom: 4,
              letterSpacing: '0.08em',
            }}>
              {step.number} · {step.duration}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
            }}>
              {step.title}
            </h3>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600, marginTop: 2 }}>
              {step.subtitle}
            </div>
          </div>
        </div>
        <p style={{
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
        }}>
          {step.desc}
        </p>
      </div>
    </div>
  )
}
