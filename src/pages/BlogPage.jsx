import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Search } from 'lucide-react'
import { blogs } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'

const CATEGORIES = ['All', ...new Set(blogs.map(b => b.category))]

export default function BlogPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [headRef, headVisible] = useScrollReveal()

  const filtered = blogs.filter(b => {
    const matchCat = activeCategory === 'All' || b.category === activeCategory
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <>
      <Helmet>
        <title>Blog | Ashin Iqbal – Web Development Insights from Kolkata</title>
        <meta name="description" content="Web development tips, business website guides, SEO insights and more from Ashin Iqbal – Kolkata's leading freelance web developer." />
        <link rel="canonical" href="https://ashiniqbal.com/blogs" />
      </Helmet>

      {/* Hero */}
      <section style={{
        paddingTop: 140,
        paddingBottom: 80,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="grid-bg" />
        <div className="hero-glow" style={{ opacity: 0.5 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            ref={headRef}
            className={`fade-up ${headVisible ? 'visible' : ''}`}
          >
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <div className="section-label">The Blog</div>
            </div>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
              marginBottom: 20,
              letterSpacing: '-0.03em',
            }}>
              Insights on <span className="gradient-text">Web & Business</span>
            </h1>
            <p style={{
              color: 'var(--text-secondary)',
              maxWidth: 560,
              margin: '0 auto 40px',
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}>
              Practical guides, case studies, and honest takes on web development,
              SEO, and building a business online — from a developer who's been in the trenches.
            </p>

            {/* Search */}
            <div style={{
              maxWidth: 480,
              margin: '0 auto',
              position: 'relative',
            }}>
              <Search size={16} style={{
                position: 'absolute',
                left: 16, top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
              }} />
              <input
                type="search"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="form-control"
                style={{ paddingLeft: 44, borderRadius: 'var(--radius-full)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Category filters */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            marginBottom: 48,
          }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--accent-primary)' : 'var(--border-subtle)',
                  background: activeCategory === cat ? 'rgba(124,106,255,0.12)' : 'transparent',
                  color: activeCategory === cat ? 'var(--accent-primary)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p style={{
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            marginBottom: 32,
          }}>
            {filtered.length} article{filtered.length !== 1 ? 's' : ''} found
          </p>

          {/* Blog grid */}
          {filtered.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 24,
            }}>
              {filtered.map((blog, i) => (
                <BlogCard key={blog.id} blog={blog} delay={i * 0.06} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '3rem', marginBottom: 16 }}>🔍</div>
              <p style={{ fontSize: '1rem' }}>No articles found matching "{search}"</p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('All') }}
                className="btn-outline"
                style={{ marginTop: 20 }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section>
        <div className="container">
          <div style={{
            textAlign: 'center',
            padding: 'clamp(40px, 6vw, 72px)',
            background: 'linear-gradient(135deg, rgba(124,106,255,0.08), rgba(6,182,212,0.05))',
            border: '1px solid var(--border-accent)',
            borderRadius: 'var(--radius-xl)',
          }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: 16 }}>
              Want Tips Delivered to Your Inbox?
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto 32px' }}>
              Monthly roundup of what's actually working in web development and digital marketing.
              No spam. Unsubscribe anytime.
            </p>
            <div style={{
              display: 'flex',
              gap: 12,
              maxWidth: 440,
              margin: '0 auto',
              flexWrap: 'wrap',
            }}>
              <input
                type="email"
                placeholder="your@email.com"
                className="form-control"
                style={{ flex: 1, minWidth: 220 }}
              />
              <button className="btn-primary" style={{ flexShrink: 0 }}>
                Subscribe <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function BlogCard({ blog, delay }) {
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`blog-card fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="blog-img">
        <img src={blog.image} alt={blog.title} loading="lazy" />
      </div>
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
          <span className="badge badge-purple">{blog.category}</span>
          <span style={{
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            alignSelf: 'center',
          }}>
            ⏱ {blog.readTime}
          </span>
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.05rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          lineHeight: 1.4,
          marginBottom: 10,
          flex: 1,
        }}>
          {blog.title}
        </h3>
        <p style={{
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          marginBottom: 20,
        }}>
          {blog.excerpt}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
          }}>
            {blog.date}
          </span>
          <span style={{
            display: 'flex', alignItems: 'center', gap: 4,
            fontSize: '0.82rem',
            fontWeight: 600,
            color: 'var(--accent-primary)',
            fontFamily: 'var(--font-display)',
          }}>
            Read <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </div>
  )
}
