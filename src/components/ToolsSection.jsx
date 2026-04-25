import { useScrollReveal } from '../hooks/useScrollReveal'
import { tools } from '../data'

export default function ToolsSection() {
  const [headRef, headVisible] = useScrollReveal()
  const mid = Math.ceil(tools.length / 2)
  const row1 = [...tools.slice(0, mid), ...tools.slice(0, mid)]
  const row2 = [...tools.slice(mid), ...tools.slice(mid)]

  return (
    <section id="tools" style={{ background: 'var(--bg-secondary)', overflow: 'hidden', padding: '100px 0' }}>
      <div className="container">
        <div
          ref={headRef}
          className={`fade-up ${headVisible ? 'visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="section-label">Tech Arsenal</div>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>
            Tools I <span className="gradient-text">Master</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto' }}>
            From pixel-perfect design to production-ready code — a battle-tested toolkit refined over 5+ years.
          </p>
        </div>
      </div>

      {/* Marquee row 1 */}
      <div className="marquee-wrapper" style={{ marginBottom: 16 }}>
        <div className="marquee-track">
          {row1.map((tool, i) => (
            <ToolPill key={i} tool={tool} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 (reverse) */}
      <div className="marquee-wrapper">
        <div className="marquee-track reverse">
          {row2.map((tool, i) => (
            <ToolPill key={i} tool={tool} />
          ))}
        </div>
      </div>

      {/* Tool grid - full list */}
      <div className="container" style={{ marginTop: 60 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: 16,
        }}>
          {tools.map((tool, i) => (
            <ToolCard key={i} tool={tool} delay={i * 0.04} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ToolPill({ tool }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 20px',
      background: 'var(--bg-glass)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-full)',
      whiteSpace: 'nowrap',
      backdropFilter: 'blur(8px)',
    }}>
      <span style={{ fontSize: '1.1rem' }}>{tool.icon}</span>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.82rem',
        color: 'var(--text-secondary)',
        fontWeight: 500,
      }}>{tool.name}</span>
    </div>
  )
}

function ToolCard({ tool, delay }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`tool-card glass-card fade-up ${visible ? 'visible' : ''}`}
      style={{
        padding: '20px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        textAlign: 'center',
        transitionDelay: `${delay}s`,
        cursor: 'default',
      }}
    >
      <div className="tool-icon-wrap">
        <span>{tool.icon}</span>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
          {tool.name}
        </div>
        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>
          {tool.category}
        </div>
      </div>
    </div>
  )
}
