import { useScrollReveal } from '../hooks/useScrollReveal'
import { processSteps } from '../data'

export default function ProcessSection() {
  const [headRef, headVisible] = useScrollReveal()

  return (
    <section id="process" style={{ background: 'var(--bg-page)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Header */}
        <div ref={headRef} className={`fade-up ${headVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: 14 }}>/ Our Projects Explained</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}>
            Here's how it works
          </h2>
        </div>

        {/* Staggered cards — like reference: offset at different heights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          gap: 20,
          alignItems: 'start',
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
  // Alternating vertical offset like reference
  const offsetTop = [0, -32, 0, -24, 0, -32, 0][index] || 0

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? 'visible' : ''}`}
      style={{
        transitionDelay: `${index * 0.07}s`,
        marginTop: offsetTop,
      }}
    >
      <div style={{
        padding: '28px 24px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--r-xl)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'box-shadow var(--t-med), transform var(--t-med), border-color var(--t-med)',
        cursor: 'default',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.borderColor = 'var(--border-mid)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.borderColor = 'var(--border-light)'
        }}
      >
        {/* Big number — top right like reference */}
        <div style={{
          position: 'absolute', top: 16, right: 20,
          fontFamily: 'var(--font-serif)',
          fontSize: '3rem', fontWeight: 400,
          color: 'var(--border-light)',
          lineHeight: 1,
          userSelect: 'none',
          transition: 'color var(--t-med)',
        }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--border-mid)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--border-light)'}
        >
          {step.number}
        </div>

        {/* Icon */}
        <div style={{
          width: 44, height: 44,
          borderRadius: 'var(--r-md)',
          background: 'var(--bg-page)',
          border: '1px solid var(--border-light)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.3rem',
          marginBottom: 20,
        }}>
          {step.icon}
        </div>

        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.4rem', fontWeight: 400,
          color: 'var(--text-primary)',
          marginBottom: 8, letterSpacing: '-0.01em',
        }}>
          {step.title}
        </h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
          {step.desc}
        </p>

        {/* Duration pill */}
        <div style={{
          marginTop: 16,
          display: 'inline-flex',
          padding: '3px 10px',
          background: 'var(--bg-page)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--r-full)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--text-muted)',
        }}>
          {step.duration}
        </div>
      </div>
    </div>
  )
}
