import { useState } from 'react'
import { ExternalLink, Globe, MapPin } from 'lucide-react'
import { projects } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'

const FILTERS = ['All', 'eCommerce', 'Restaurant', 'Healthcare', 'Business Website', 'Community Platform', 'SaaS / Analytics']

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [headerRef, headerVisible] = useScrollReveal()

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.type === activeFilter)

  return (
    <section id="work" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`fade-up ${headerVisible ? 'visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="section-label">Selected Work</div>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: 16 }}>
            Projects That{' '}
            <span className="gradient-text">Moved the Needle</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Real businesses. Real results. From Kolkata to Cleveland, Brampton to Melbourne —
            here's what we built together.
          </p>
        </div>

        {/* Filter chips */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 48
        }}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: activeFilter === f ? 'var(--accent-primary)' : 'var(--border-subtle)',
                background: activeFilter === f ? 'rgba(124,106,255,0.12)' : 'transparent',
                color: activeFilter === f ? 'var(--accent-primary)' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                letterSpacing: '0.03em',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 24,
        }}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, delay }) {
  const [cardRef, cardVisible] = useScrollReveal()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={cardRef}
      className={`project-card fade-up ${cardVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="project-img-wrap">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
        {/* Color accent border on top */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: project.color,
          opacity: 0.8,
          zIndex: 2,
        }} />

        {/* Status badge */}
        <div style={{
          position: 'absolute', top: 16, right: 16, zIndex: 3,
          padding: '4px 12px',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.7rem',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          background: project.status === 'Ongoing'
            ? 'rgba(34,197,94,0.15)' : 'rgba(124,106,255,0.15)',
          color: project.status === 'Ongoing' ? '#22c55e' : 'var(--accent-primary)',
          border: `1px solid ${project.status === 'Ongoing' ? 'rgba(34,197,94,0.3)' : 'rgba(124,106,255,0.3)'}`,
          backdropFilter: 'blur(8px)',
        }}>
          {project.status === 'Ongoing' ? '🔴 Ongoing' : '✅ Live'}
        </div>

        {/* Hover overlay */}
        <div className="project-overlay">
          <div style={{ display: 'flex', gap: 10 }}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '10px 18px', fontSize: '0.82rem' }}
              onClick={e => project.url === '#' && e.preventDefault()}
            >
              <ExternalLink size={14} />
              {project.url === '#' ? 'NDA Protected' : 'View Live'}
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ padding: '9px 17px', fontSize: '0.82rem', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '20px 20px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            color: project.color,
            background: `${project.color}18`,
            border: `1px solid ${project.color}30`,
            padding: '3px 10px',
            borderRadius: 'var(--radius-full)',
            fontWeight: 600,
          }}>
            {project.type}
          </span>
          <span style={{
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}>
            <MapPin size={10} /> {project.location}
          </span>
        </div>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.15rem',
          fontWeight: 700,
          marginBottom: 8,
          color: 'var(--text-primary)',
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          marginBottom: 14,
        }}>
          {project.desc}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.tags.map(tag => (
            <span key={tag} className="tag" style={{ fontSize: '0.7rem', padding: '4px 10px' }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
