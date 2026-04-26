import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, MapPin, ArrowRight } from 'lucide-react'
import { projects } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function WorkSection() {
  const [headRef, headVisible] = useScrollReveal()
  // Show first 6 on homepage
  const featured = projects.slice(0, 6)

  return (
    <section id="work" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div
          ref={headRef}
          className={`fade-up ${headVisible ? 'visible' : ''}`}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}
        >
          <div>
            <div className="section-label" style={{ display: 'inline-flex' }}>Selected Work</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginTop: 16 }}>
              Projects That <span className="gradient-text">Moved the Needle</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 500, marginTop: 12, lineHeight: 1.7 }}>
              Real businesses, real results — from Kolkata to Cleveland, Brampton to Melbourne.
            </p>
          </div>
          <Link to="/work" className="btn-outline" style={{ flexShrink: 0 }}>
            All Projects <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.07} />
          ))}
        </div>

        {/* View all CTA */}
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <Link to="/work" className="btn-primary" style={{ fontSize: '1rem', padding: '15px 36px' }}>
            View All 12 Projects <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, delay }) {
  const [ref, visible] = useScrollReveal()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      className={`project-card fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-img-wrap">
        <img src={project.image} alt={project.title} loading="lazy" />
        {/* Top accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: project.color, opacity: 0.85, zIndex: 2 }} />
        {/* Status badge */}
        <div style={{
          position: 'absolute', top: 14, right: 14, zIndex: 3,
          padding: '3px 11px', borderRadius: 'var(--radius-full)',
          fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 700,
          backdropFilter: 'blur(8px)',
          background: project.status === 'Ongoing' ? 'rgba(34,197,94,0.15)' : 'rgba(124,106,255,0.15)',
          color: project.status === 'Ongoing' ? '#22c55e' : 'var(--accent-primary)',
          border: `1px solid ${project.status === 'Ongoing' ? 'rgba(34,197,94,0.3)' : 'rgba(124,106,255,0.3)'}`,
        }}>
          {project.status === 'Ongoing' ? '🔴 Ongoing' : '✅ Live'}
        </div>
        {/* Hover overlay */}
        <div className="project-overlay">
          <a
            href={project.url} target="_blank" rel="noopener noreferrer"
            className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.82rem' }}
            onClick={e => project.url === '#' && e.preventDefault()}
          >
            <ExternalLink size={14} />
            {project.url === '#' ? 'NDA Protected' : 'View Live'}
          </a>
        </div>
      </div>

      <div style={{ padding: '20px 22px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{
            fontSize: '0.7rem', fontFamily: 'var(--font-mono)',
            color: project.color, background: `${project.color}15`,
            border: `1px solid ${project.color}28`,
            padding: '3px 10px', borderRadius: 'var(--radius-full)', fontWeight: 600,
          }}>{project.type}</span>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: 3 }}>
            <MapPin size={10} /> {project.location}
          </span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.12rem', fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)', lineHeight: 1.3 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 14 }}>
          {project.desc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.tags.map(t => <span key={t} className="tag" style={{ fontSize: '0.68rem', padding: '3px 10px' }}>{t}</span>)}
        </div>
      </div>
    </div>
  )
}
