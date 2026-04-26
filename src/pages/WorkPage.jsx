import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ExternalLink, MapPin } from 'lucide-react'
import { projects } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

const FILTERS = ['All', 'eCommerce / Food', 'Luxury eCommerce', 'SaaS / Analytics', 'Real Estate', 'Healthcare', 'Restaurant', 'Digital Agency', 'Community Platform', 'Wellness & Counseling', 'M&A / Finance', 'Fashion eCommerce', 'Restaurant & Bar']

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [headRef, headVisible] = useScrollReveal()

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.type === activeFilter)

  return (
    <>
      <Helmet>
        <title>Work | Ashin Iqbal – Web Projects from Kolkata to the World</title>
        <meta name="description" content="Browse Ashin Iqbal's portfolio of 50+ web projects across eCommerce, healthcare, real estate, restaurants, and more — spanning USA, Canada, Australia, India & beyond." />
        <link rel="canonical" href="https://ashiniqbal.com/work" />
      </Helmet>

      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="grid-bg" />
        <div className="hero-glow" style={{ opacity: 0.5 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div ref={headRef} className={`fade-up ${headVisible ? 'visible' : ''}`}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <div className="section-label">Portfolio</div>
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', marginBottom: 20, letterSpacing: '-0.03em' }}>
              Projects That <span className="gradient-text">Moved the Needle</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 580, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Real businesses. Real results. From Kolkata to Cleveland, Brampton to Melbourne —
              here's what we built together. 12 countries and counting.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 48 }}>
            {['All', 'eCommerce / Food', 'Luxury eCommerce', 'SaaS / Analytics', 'Real Estate', 'Healthcare', 'Restaurant', 'Digital Agency', 'Wellness & Counseling', 'M&A / Finance'].map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                padding: '8px 18px', borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-mono)', fontSize: '0.76rem', fontWeight: 600,
                border: '1px solid', cursor: 'pointer', transition: 'all 0.2s',
                borderColor: activeFilter === f ? 'var(--accent-primary)' : 'var(--border-subtle)',
                background: activeFilter === f ? 'rgba(124,106,255,0.12)' : 'transparent',
                color: activeFilter === f ? 'var(--accent-primary)' : 'var(--text-muted)',
              }}>
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
            {filtered.map((project, i) => <ProjectCard key={project.id} project={project} delay={i * 0.06} />)}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: 72, padding: '48px 32px', background: 'var(--bg-glass)', border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-xl)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 12 }}>
              Want to be on this list?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 28 }}>
              Let's build something your competitors will be jealous of.
            </p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
              Start Your Project →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function ProjectCard({ project, delay }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={`project-card fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <div className="project-img-wrap">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: project.color, opacity: 0.8, zIndex: 2 }} />
        <div style={{
          position: 'absolute', top: 14, right: 14, zIndex: 3,
          padding: '3px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.68rem',
          fontFamily: 'var(--font-mono)', fontWeight: 700, backdropFilter: 'blur(8px)',
          background: project.status === 'Ongoing' ? 'rgba(34,197,94,0.15)' : 'rgba(124,106,255,0.15)',
          color: project.status === 'Ongoing' ? '#22c55e' : 'var(--accent-primary)',
          border: `1px solid ${project.status === 'Ongoing' ? 'rgba(34,197,94,0.3)' : 'rgba(124,106,255,0.3)'}`,
        }}>
          {project.status === 'Ongoing' ? '🔴 Ongoing' : '✅ Live'}
        </div>
        <div className="project-overlay">
          <a href={project.url} target="_blank" rel="noopener noreferrer"
            className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.82rem' }}
            onClick={e => project.url === '#' && e.preventDefault()}>
            <ExternalLink size={14} />
            {project.url === '#' ? 'NDA Protected' : 'View Live'}
          </a>
        </div>
      </div>
      <div style={{ padding: '20px 20px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: project.color, background: `${project.color}18`, border: `1px solid ${project.color}30`, padding: '3px 10px', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>{project.type}</span>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: 4 }}><MapPin size={10} />{project.location}</span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>{project.title}</h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 14 }}>{project.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.tags.map(t => <span key={t} className="tag" style={{ fontSize: '0.7rem', padding: '4px 10px' }}>{t}</span>)}
        </div>
      </div>
    </div>
  )
}
