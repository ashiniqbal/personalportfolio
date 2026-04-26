import { useParams, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from 'lucide-react'
import { blogs } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function BlogPostPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const blog = blogs.find(b => b.slug === slug)
  const [headRef, headVisible] = useScrollReveal()

  if (!blog) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 20, paddingTop: 100 }}>
        <div style={{ fontSize: '4rem' }}>📭</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem' }}>Article not found</h2>
        <p style={{ color: 'var(--text-secondary)' }}>This article might have been moved or doesn't exist.</p>
        <Link to="/blogs" className="btn-primary">← Back to Blogs</Link>
      </div>
    )
  }

  const related = blogs.filter(b => b.id !== blog.id && b.category === blog.category).slice(0, 2)
  const otherRelated = blogs.filter(b => b.id !== blog.id && b.category !== blog.category).slice(0, 2 - related.length)
  const relatedPosts = [...related, ...otherRelated].slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{blog.title} | Ashin Iqbal – Web Developer Blog</title>
        <meta name="description" content={blog.excerpt} />
        <link rel="canonical" href={`https://ashiniqbal.com/blogs/${blog.slug}`} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Hero image */}
      <div style={{
        position: 'relative',
        height: 'clamp(280px, 50vw, 480px)',
        overflow: 'hidden',
        marginTop: 72,
      }}>
        <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,5,10,0.3) 0%, rgba(5,5,10,0.85) 100%)' }} />

        {/* Breadcrumb */}
        <div style={{ position: 'absolute', top: 24, left: 24, zIndex: 2 }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 'var(--radius-full)',
              background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff', fontSize: '0.82rem',
              fontFamily: 'var(--font-mono)', cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <ArrowLeft size={14} /> Back
          </button>
        </div>

        {/* Category badge */}
        <div style={{ position: 'absolute', bottom: 28, left: 24, right: 24 }}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <span className="badge badge-purple" style={{ marginBottom: 14, display: 'inline-flex' }}>{blog.category}</span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
              fontWeight: 800, color: '#fff',
              lineHeight: 1.15, letterSpacing: '-0.02em',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            }}>
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <section style={{ paddingTop: 48, paddingBottom: 80 }}>
        <div className="container">
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            {/* Meta */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center',
              marginBottom: 40, paddingBottom: 28,
              borderBottom: '1px solid var(--border-subtle)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                <Calendar size={13} /> {blog.date}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                <Clock size={13} /> {blog.readTime}
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {blog.tags.map(t => (
                  <span key={t} style={{
                    padding: '3px 10px', borderRadius: 'var(--radius-full)',
                    background: 'rgba(124,106,255,0.1)', border: '1px solid rgba(124,106,255,0.2)',
                    fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)',
                  }}>#{t}</span>
                ))}
              </div>
            </div>

            {/* Author block */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '16px 20px', borderRadius: 'var(--radius-md)',
              background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)',
              marginBottom: 40,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'var(--gradient-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', fontSize: '1.1rem',
                flexShrink: 0,
              }}>A</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Ashin Iqbal</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Web Developer & UI/UX Designer · Kolkata, India
                </div>
              </div>
            </div>

            {/* Excerpt */}
            <p style={{
              fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8,
              marginBottom: 32, fontStyle: 'italic',
              borderLeft: '3px solid var(--accent-primary)', paddingLeft: 20,
            }}>
              {blog.excerpt}
            </p>

            {/* Article content */}
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Share / CTA */}
            <div style={{
              marginTop: 60, padding: '32px', borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, rgba(124,106,255,0.08), rgba(6,182,212,0.05))',
              border: '1px solid var(--border-accent)', textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>☕</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>
                Want to discuss your project?
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 20, fontSize: '0.95rem' }}>
                I offer free 30-minute consultations for businesses ready to build or improve their digital presence.
              </p>
              <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex' }}>
                Book Free Call <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section style={{ paddingTop: 0, background: 'var(--bg-secondary)' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginBottom: 32 }}>
              More from the blog
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
              {relatedPosts.map(post => (
                <Link key={post.id} to={`/blogs/${post.slug}`} className="blog-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
                  <div className="blog-img" style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <span className="badge badge-purple" style={{ marginBottom: 10, display: 'inline-flex' }}>{post.category}</span>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.4 }}>{post.title}</h4>
                    <div style={{ marginTop: 12, fontSize: '0.78rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: 4 }}>
                      Read article <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog post styles */}
      <style>{`
        .blog-content { color: var(--text-secondary); font-size: 1rem; line-height: 1.85; }
        .blog-content h2 { font-family: var(--font-display); font-size: clamp(1.3rem, 3vw, 1.8rem); font-weight: 700; color: var(--text-primary); margin: 40px 0 16px; letter-spacing: -0.02em; }
        .blog-content h3 { font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; color: var(--text-primary); margin: 32px 0 12px; }
        .blog-content p { margin-bottom: 20px; }
        .blog-content ul, .blog-content ol { margin: 16px 0 24px 20px; display: flex; flex-direction: column; gap: 10px; }
        .blog-content li { padding-left: 8px; }
        .blog-content strong { color: var(--text-primary); font-weight: 600; }
        .blog-content a { color: var(--accent-primary); text-decoration: underline; }
        .blog-content blockquote { border-left: 3px solid var(--accent-primary); padding-left: 20px; margin: 28px 0; color: var(--text-secondary); font-style: italic; }
        .blog-content code { font-family: var(--font-mono); background: var(--bg-glass); padding: 2px 8px; border-radius: 4px; font-size: 0.875em; color: var(--accent-primary); }
      `}</style>
    </>
  )
}
