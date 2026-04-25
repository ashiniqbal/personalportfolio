const clients = [
  { name: 'Agillitics', flag: '🇺🇸', type: 'Analytics' },
  { name: 'Liberty Pain Care', flag: '🇺🇸', type: 'Healthcare' },
  { name: 'Moti Mahal', flag: '🇦🇺', type: 'Restaurant' },
  { name: 'Ariya Boutique', flag: '🇨🇦', type: 'Fashion' },
  { name: 'Believer Brew House', flag: '🇺🇸', type: 'F&B' },
  { name: 'Naija Voices', flag: '🇳🇬', type: 'Community' },
  { name: 'The Ace Team', flag: '🇨🇦', type: 'Real Estate' },
  { name: 'Get Peached', flag: '🇨🇦', type: 'Café' },
  { name: 'Grandios Life', flag: '🇺🇸', type: 'Wellness' },
  { name: 'wKana Gourmet', flag: '🇺🇸', type: 'Food' },
  { name: 'KK Bakery', flag: '🇨🇦', type: 'Bakery' },
  { name: 'PBIS LLC', flag: '🇺🇸', type: 'Business' },
]

export default function MarqueeClients() {
  const doubled = [...clients, ...clients]

  return (
    <div style={{
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '28px 0',
      background: 'var(--bg-secondary)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Label */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 24,
        zIndex: 3,
        background: 'linear-gradient(to right, var(--bg-secondary) 60%, transparent)',
        paddingRight: 40,
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>
          Trusted By
        </span>
      </div>

      <div className="marquee-wrapper" style={{ paddingLeft: 140 }}>
        <div className="marquee-track" style={{ animationDuration: '35s' }}>
          {doubled.map((client, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '6px 20px',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-full)',
                whiteSpace: 'nowrap',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span style={{ fontSize: '1rem' }}>{client.flag}</span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '0.875rem',
                color: 'var(--text-primary)',
              }}>{client.name}</span>
              <span style={{
                fontSize: '0.68rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                borderLeft: '1px solid var(--border-subtle)',
                paddingLeft: 8,
              }}>{client.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
