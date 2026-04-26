import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { blogs } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function BlogSection({ limit = 6 }) {
  const [headRef, headVisible] = useScrollReveal()
  const displayBlogs = blogs.slice(0, limit)

  return (
    <section id="blogs" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div
          ref={headRef}
          className={`fade-up ${headVisible ? 'visible' : ''}`}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}
        >
          <div>
            <div className="section-label" style={{ display: 'inline-flex' }}>Insights</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: 16 }}>
              Thoughts on <span className="gradient-text">Web & Business</span>
            </h2>
          </div>
          <Link to="/blogs" className="btn-outline" style={{ flexShrink: 0 }}>
            All Articles <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {displayBlogs.map((blog, i) => (
            <BlogCard key={blog.id} blog={blog} delay={i * 0.08} />
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
      style={{ transitionDelay: `${delay}s`, textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
    >
      <div className="blog-img">
        <img src={blog.image} alt={blog.title} loading="lazy" />
      </div>
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap', alignItems: 'center' }}>
          <span className="badge badge-purple">{blog.category}</span>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: 4 }}>
            <Clock size={11} /> {blog.readTime}
          </span>
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700,
          color: 'var(--text-primary)', lineHeight: 1.4, marginBottom: 10, flex: 1,
        }}>
          {blog.title}
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 20 }}>
          {blog.excerpt}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            {blog.date}
          </span>
          <span style={{
            display: 'flex', alignItems: 'center', gap: 4,
            fontSize: '0.82rem', fontWeight: 600,
            color: 'var(--accent-primary)', fontFamily: 'var(--font-display)',
            transition: 'gap 0.2s',
          }}>
            Read <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  )
}
