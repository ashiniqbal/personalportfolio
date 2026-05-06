import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function WorkSection() {
  const [ref, visible] = useScrollReveal()
  const featured = projects.slice(0, 6)

  return (
    <section id="work">
      <div className="container">
        {/* Section header — split layout like reference */}
        <div className="section-split" ref={ref}>
          <div className={`fade-up ${visible ? 'visible' : ''}`}>
            <div className="section-label" style={{ display: 'inline-flex' }}>● Portfolio</div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginTop: 8 }}>
              Latest Works
            </h2>
          </div>
          <div className={`fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', gap: 16 }}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', maxWidth: 380 }}>
              Real businesses. Real results — from Kolkata to Cleveland, Brampton to Melbourne.
              13 projects across 12 countries.
            </p>
            <Link to="/work" style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Check out More → <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>View More</span>
            </Link>
          </div>
        </div>

        {/* 3-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
          {featured.map((p, i) => <ProjectCard key={p.id} project={p} delay={i * 0.07} />)}
        </div>
      </div>
    </section>
  )
}

export function ProjectCard({ project, delay = 0 }) {
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`project-card fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="project-img-wrap">
        <img src={project.image} alt={project.title} loading="lazy" />
        {/* Category label top-left */}
        <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 3, padding: '3px 10px', borderRadius: 'var(--r-full)', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', background: 'rgba(255,255,255,0.9)', color: '#222', border: '1px solid rgba(0,0,0,0.08)', backdropFilter: 'blur(4px)' }}>
          {project.type}
        </div>
        {/* Status */}
        <div style={{ position: 'absolute', top: 12, right: 12, zIndex: 3, padding: '3px 10px', borderRadius: 'var(--r-full)', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', background: project.status === 'Ongoing' ? 'rgba(59,183,126,0.15)' : 'rgba(255,255,255,0.9)', color: project.status === 'Ongoing' ? '#2D9E6A' : '#555', border: `1px solid ${project.status === 'Ongoing' ? 'rgba(59,183,126,0.3)' : 'rgba(0,0,0,0.08)'}`, backdropFilter: 'blur(4px)' }}>
          {project.status === 'Ongoing' ? '● Ongoing' : '✓ Live'}
        </div>
        {/* Hover overlay */}
        <div className="project-overlay">
          <a href={project.url} target="_blank" rel="noopener noreferrer"
            className="btn-dark" style={{ fontSize: '0.82rem', padding: '9px 18px', background: 'var(--c-white)', color: 'var(--c-black)', borderColor: 'var(--c-white)' }}
            onClick={e => project.url === '#' && e.preventDefault()}>
            <span>Website</span> <ArrowUpRight size={13} />
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
              style={{ padding: '9px 16px', borderRadius: 'var(--r-full)', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-body)', fontWeight: 500, textDecoration: 'none' }}>
              Demo <ArrowUpRight size={12} />
            </a>
          )}
        </div>
      </div>

      <div style={{ padding: '14px 16px 18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
          <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)', letterSpacing: 0, lineHeight: 1.3 }}>
            {project.title}
          </h3>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', flexShrink: 0 }}>
            For <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{project.location.split(' ')[project.location.split(' ').length - 1]}</span>
          </span>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: 5, marginBottom: 12 }}>
          {project.desc.substring(0, 80)}...
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {project.tags.map(t => <span key={t} className="tag" style={{ fontSize: '0.67rem', padding: '3px 9px' }}>{t}</span>)}
        </div>
      </div>
    </div>
  )
}
