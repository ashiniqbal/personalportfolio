import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { blogs } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function BlogSection({ limit = 6 }) {
  const [headRef, headVisible] = useScrollReveal()
  const displayBlogs = blogs.slice(0, limit)

  return (
    <section style={{ background: 'var(--bg-page)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div ref={headRef} className={`fade-up ${headVisible ? 'visible' : ''}`} style={{ marginBottom: 52 }}>
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: 14 }}>● Blogs</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}>
              Design Insights<br /><em>& Trends</em>
            </h2>
            <Link to="/blogs" className="link-arrow">View More</Link>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
          {displayBlogs.map((blog, i) => (
            <BlogCard key={blog.id} blog={blog} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function BlogCard({ blog, delay = 0 }) {
  const [ref, visible] = useScrollReveal()

  return (
    <Link
      to={`/blogs/${blog.slug}`}
      ref={ref}
      className={`blog-card fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s`, textDecoration: 'none' }}
    >
      <div className="blog-img" style={{ position: 'relative' }}>
        <img src={blog.image} alt={blog.title} loading="lazy" />
        {/* Category + read time pill — bottom left like reference */}
        <div style={{
          position: 'absolute', bottom: 12, left: 12,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{
            padding: '4px 10px', borderRadius: 'var(--r-full)',
            background: 'rgba(34,34,34,0.85)', backdropFilter: 'blur(6px)',
            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
            color: '#fff', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            {blog.category.toUpperCase()}
          </span>
          <span style={{
            padding: '4px 10px', borderRadius: 'var(--r-full)',
            background: 'rgba(34,34,34,0.75)', backdropFilter: 'blur(6px)',
            fontFamily: 'var(--font-body)', fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.85)',
          }}>
            {blog.readTime}
          </span>
        </div>
      </div>

      <div style={{ padding: '16px 16px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.9rem',
          color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: 8, flex: 1,
          letterSpacing: 0,
        }}>
          {blog.title}
        </h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
            {blog.date}
          </span>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background var(--t-fast)' }}>
            <ArrowUpRight size={13} color="var(--bg-page)" />
          </div>
        </div>
      </div>
    </Link>
  )
}
