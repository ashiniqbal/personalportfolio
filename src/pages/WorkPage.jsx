import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ProjectCard } from '../components/WorkSection'

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [headRef, headVisible] = useScrollReveal()
  const types = ['All', ...new Set(projects.map(p => p.type))]
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.type === activeFilter)

  return (
    <>
      <Helmet>
        <title>Portfolio | Ashin Iqbal – Web Projects Across 12 Countries</title>
        <meta name="description" content="Browse Ashin Iqbal's portfolio of 50+ web projects across eCommerce, healthcare, real estate, restaurants, and more — USA, Canada, Australia, India & beyond." />
        <link rel="canonical" href="https://ashiniqbal.com/work" />
      </Helmet>

      {/* Page hero */}
      <section style={{ paddingTop: 140, paddingBottom: 72, borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div ref={headRef} className={`fade-up ${headVisible ? 'visible' : ''}`}>
            <div className="section-label" style={{ display: 'inline-flex', marginBottom: 16 }}>● Portfolio</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, alignItems: 'end' }}>
              <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 1 }}>
                Latest<br /><em>Works</em>
              </h1>
              <div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.95rem', maxWidth: 380, marginBottom: 20 }}>
                  13 projects across 12 countries — from Kolkata to Cleveland, Brampton to Melbourne, Lagos to Kuala Lumpur.
                </p>
                <Link to="/contact" className="link-arrow">Start your project</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 52 }}>
        <div className="container">
          {/* Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40, overflowX: 'auto', paddingBottom: 4 }}>
            {types.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                padding: '7px 16px', borderRadius: 'var(--r-full)',
                fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 500,
                border: '1px solid', cursor: 'pointer', transition: 'all var(--t-fast)',
                borderColor: activeFilter === f ? 'var(--text-primary)' : 'var(--border-light)',
                background: activeFilter === f ? 'var(--text-primary)' : 'transparent',
                color: activeFilter === f ? 'var(--bg-page)' : 'var(--text-muted)',
                whiteSpace: 'nowrap', flexShrink: 0,
              }}>
                {f}
              </button>
            ))}
          </div>

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: 28 }}>
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {filtered.map((p, i) => <ProjectCard key={p.id} project={p} delay={i * 0.05} />)}
          </div>

          {/* CTA */}
          <div style={{
            marginTop: 64, padding: 'clamp(32px, 5vw, 52px)',
            border: '1px solid var(--border-light)', borderRadius: 'var(--r-xl)',
            display: 'flex', flexWrap: 'wrap', gap: 24,
            justifyContent: 'space-between', alignItems: 'center',
            background: 'var(--bg-card)',
          }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 400, marginBottom: 8 }}>
                Want to be on this list?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                Let's build something your competitors will be jealous of.
              </p>
            </div>
            <Link to="/contact" className="btn-dark">
              Start Your Project <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
