import { useParams, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Clock, Calendar, ArrowUpRight } from 'lucide-react'
import { blogs } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { BlogCard } from '../components/BlogSection'

export default function BlogPostPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const blog = blogs.find(b => b.slug === slug)
  const [headRef, headVisible] = useScrollReveal()

  if (!blog) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 20, paddingTop: 100, textAlign: 'center' }}>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--text-primary)' }}>Article not found</p>
      <Link to="/blogs" className="btn-dark">← Back to Blog</Link>
    </div>
  )

  const related = blogs.filter(b => b.id !== blog.id).slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{blog.title} | Ashin Iqbal</title>
        <meta name="description" content={blog.excerpt} />
        <link rel="canonical" href={`https://ashiniqbal.com/blogs/${blog.slug}`} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Hero image — full width */}
      <div style={{ position: 'relative', height: 'clamp(260px, 45vw, 480px)', overflow: 'hidden', marginTop: 68 }}>
        <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
        {/* Back button */}
        <button onClick={() => navigate(-1)} style={{
          position: 'absolute', top: 24, left: 24, zIndex: 2,
          display: 'flex', alignItems: 'center', gap: 7,
          padding: '8px 16px', borderRadius: 'var(--r-full)',
          background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff', fontSize: '0.8rem', fontFamily: 'var(--font-body)',
          cursor: 'pointer', transition: 'background var(--t-fast)',
        }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
        >
          <ArrowLeft size={13} /> Back
        </button>
      </div>

      {/* Article */}
      <section>
        <div className="container">
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            {/* Meta header */}
            <div ref={headRef} className={`fade-up ${headVisible ? 'visible' : ''}`} style={{ paddingTop: 48, marginBottom: 40 }}>
              <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
                <span style={{ padding: '4px 12px', borderRadius: 'var(--r-full)', background: 'var(--bg-card)', border: '1px solid var(--border-light)', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-secondary)' }}>
                  {blog.category}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Calendar size={11} /> {blog.date}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rex', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Clock size={11} /> {blog.readTime}
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.02em' }}>
                {blog.title}
              </h1>

              {/* Author row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 20, paddingBottom: 20, borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', color: 'var(--bg-page)', fontSize: '0.95rem', flexShrink: 0 }}>A</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Ashin Iqbal</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>Web Developer & Designer · Kolkata, India</div>
                </div>
              </div>

              {/* Excerpt */}
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, margin: '24px 0', fontStyle: 'italic', paddingLeft: 16, borderLeft: '2px solid var(--border-mid)' }}>
                {blog.excerpt}
              </p>
            </div>

            {/* Content */}
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />

            {/* CTA */}
            <div style={{ marginTop: 56, padding: '36px', borderRadius: 'var(--r-xl)', background: 'var(--bg-card)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, marginBottom: 10 }}>Want to discuss your project?</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 20, fontSize: '0.875rem' }}>
                I offer free 30-minute consultations for businesses ready to build or improve their digital presence.
              </p>
              <Link to="/contact" className="btn-dark">
                Book Free Call <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 400, marginBottom: 32 }}>More from the blog</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
            {related.map(b => <BlogCard key={b.id} blog={b} />)}
          </div>
        </div>
      </section>
    </>
  )
}
