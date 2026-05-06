const clients = [
  { name: 'KK Bakery', flag: '🇨🇦', type: 'Bakery' },
  { name: 'PBIS LLC', flag: '🇺🇸', type: 'Security' },
  { name: 'Believer Brew House', flag: '🇺🇸', type: 'F&B' },
  { name: 'Liberty Pain Care', flag: '🇺🇸', type: 'Healthcare' },
  { name: 'Moti Mahal', flag: '🇦🇺', type: 'Restaurant' },
  { name: 'Ariya Boutique', flag: '🇨🇦', type: 'Fashion' },
  { name: 'Get Peached', flag: '🇨🇦', type: 'Café' },
  { name: 'Naija Voices', flag: '🇳🇬', type: 'Community' },
  { name: 'The Ace Team', flag: '🇨🇦', type: 'Real Estate' },
  { name: 'Agillitics', flag: '🇺🇸', type: 'SaaS' },
  { name: 'Grandios Life', flag: '🇺🇸', type: 'Wellness' },
  { name: 'wKana Gourmet', flag: '🇺🇸', type: 'Food' },
  { name: 'Prana Violet Healing', flag: '🇲🇾', type: 'Healing' },
]

export default function MarqueeClients() {
  const doubled = [...clients, ...clients]
  return (
    <div style={{ borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', padding: '20px 0', background: 'var(--bg-card)', overflow: 'hidden', position: 'relative' }}>
      <div className="marquee-wrapper" style={{ paddingLeft: 120 }}>
        {/* Trusted by label */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', paddingLeft: 20, paddingRight: 40, zIndex: 3, background: 'linear-gradient(to right, var(--bg-card) 55%, transparent)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Trusted By</span>
        </div>
        <div className="marquee-track slow">
          {doubled.map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '5px 18px', background: 'var(--bg-page)', border: '1px solid var(--border-light)', borderRadius: 'var(--r-full)', whiteSpace: 'nowrap' }}>
              <span style={{ fontSize: '0.9rem' }}>{c.flag}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.82rem', color: 'var(--text-primary)' }}>{c.name}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-muted)', borderLeft: '1px solid var(--border-light)', paddingLeft: 8 }}>{c.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
