import { useScrollReveal } from '../hooks/useScrollReveal'
import { tools } from '../data'

export default function ToolsSection() {
  const [ref, visible] = useScrollReveal()
  const mid = Math.ceil(tools.length / 2)
  const row1 = [...tools.slice(0, mid), ...tools.slice(0, mid)]
  const row2 = [...tools.slice(mid), ...tools.slice(mid)]

  return (
    <section style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', overflow: 'hidden', padding: '80px 0' }}>
      <div className="container">
        <div ref={ref} className={`fade-up ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: 52 }}>
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: 14 }}>● Tech Arsenal</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Tools I <em>Master</em>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 440, margin: '12px auto 0', fontSize: '0.9rem', lineHeight: 1.7 }}>
            From pixel-perfect design to production-ready code — a battle-tested toolkit refined over 5+ years.
          </p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="marquee-wrapper" style={{ marginBottom: 14 }}>
        <div className="marquee-track">
          {row1.map((t, i) => (
            <div key={i} className="tool-chip">
              <span className="tool-chip-icon">{t.icon}</span>
              <span>{t.name}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', borderLeft: '1px solid var(--border-light)', paddingLeft: 6 }}>{t.category}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track slow" style={{ animationDirection: 'reverse' }}>
          {row2.map((t, i) => (
            <div key={i} className="tool-chip">
              <span className="tool-chip-icon">{t.icon}</span>
              <span>{t.name}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', borderLeft: '1px solid var(--border-light)', paddingLeft: 6 }}>{t.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
