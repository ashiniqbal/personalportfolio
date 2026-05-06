import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { blogs } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { BlogCard } from '../components/BlogSection'

const CATS = ['All', ...new Set(blogs.map(b => b.category))]

export default function BlogPage() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('All')
  const [headRef, headVisible] = useScrollReveal()

  const filtered = blogs.filter(b => {
    const matchCat = cat === 'All' || b.category === cat
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) || b.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <>
      <Helmet>
        <title>Blog | Ashin Iqbal – Web Development & Design Insights</title>
        <meta name="description" content="Web development tips, business website guides, SEO insights and more from Ashin Iqbal – Kolkata's leading freelance web developer." />
        <link rel="canonical" href="https://ashiniqbal.com/blogs" />
      </Helmet>

      {/* Page hero */}
      <section style={{ paddingTop: 140, paddingBottom: 72, borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div ref={headRef} className={`fade-up ${headVisible ? 'visible' : ''}`}>
            <div className="section-label" style={{ display: 'inline-flex', marginBottom: 16 }}>● Blogs</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32, alignItems: 'end' }}>
              <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 1 }}>
                Design Insights<br /><em>& Trends</em>
              </h1>
              <div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.95rem', maxWidth: 380, marginBottom: 20 }}>
                  Practical guides, case studies, and honest takes on web development, SEO, and building a business online.
                </p>
                {/* Search */}
                <div style={{ position: 'relative' }}>
                  <input
                    type="search" placeholder="Search articles..."
                    value={search} onChange={e => setSearch(e.target.value)}
                    style={{
                      width: '100%', padding: '10px 16px',
                      background: 'var(--bg-card)', border: '1px solid var(--border-light)',
                      borderRadius: 'var(--r-full)', outline: 'none',
                      fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-primary)',
                      transition: 'border-color var(--t-fast)',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--border-dark)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 52 }}>
        <div className="container">
          {/* Category filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
            {CATS.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{
                padding: '7px 16px', borderRadius: 'var(--r-full)',
                fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 500,
                border: '1px solid', cursor: 'pointer', transition: 'all var(--t-fast)',
                borderColor: cat === c ? 'var(--text-primary)' : 'var(--border-light)',
                background: cat === c ? 'var(--text-primary)' : 'transparent',
                color: cat === c ? 'var(--bg-page)' : 'var(--text-muted)',
                whiteSpace: 'nowrap',
              }}>
                {c}
              </button>
            ))}
          </div>

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: 28 }}>
            {filtered.length} article{filtered.length !== 1 ? 's' : ''}
          </p>

          {filtered.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {filtered.map((b, i) => <BlogCard key={b.id} blog={b} delay={i * 0.06} />)}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--text-muted)' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 12 }}>No results found</p>
              <button onClick={() => { setSearch(''); setCat('All') }} className="btn-outline" style={{ marginTop: 8 }}>
                Clear filters
              </button>
            </div>
          )}

          {/* Newsletter */}
          <div style={{
            marginTop: 64, padding: 'clamp(32px, 5vw, 52px)',
            border: '1px solid var(--border-light)', borderRadius: 'var(--r-xl)',
            display: 'flex', flexWrap: 'wrap', gap: 24,
            justifyContent: 'space-between', alignItems: 'center',
            background: 'var(--bg-card)',
          }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 400, marginBottom: 6 }}>
                Want tips in your inbox?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Monthly roundup of what's working. No spam.</p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <input type="email" placeholder="your@email.com"
                style={{ padding: '10px 16px', borderRadius: 'var(--r-full)', border: '1px solid var(--border-light)', background: 'var(--bg-page)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', minWidth: 200, color: 'var(--text-primary)' }} />
              <button className="btn-dark" style={{ flexShrink: 0 }}>Subscribe <ArrowUpRight size={14} /></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
