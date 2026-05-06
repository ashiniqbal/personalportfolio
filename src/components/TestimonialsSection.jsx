import { useEffect, useRef } from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function TestimonialsSection() {
  const [headRef, headVisible] = useScrollReveal()
  const swiperRef = useRef(null)

  useEffect(() => {
    let sw = null
    const init = async () => {
      const { Swiper } = await import('swiper')
      const { Pagination, Autoplay } = await import('swiper/modules')
      await import('swiper/css')
      await import('swiper/css/pagination')
      if (swiperRef.current) {
        sw = new Swiper(swiperRef.current, {
          modules: [Pagination, Autoplay],
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          autoplay: { delay: 5000, disableOnInteraction: false },
          pagination: { el: '.swiper-pagination', clickable: true },
          breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 2 } },
        })
      }
    }
    init()
    return () => { if (sw) sw.destroy() }
  }, [])

  return (
    <section style={{ background: 'var(--bg-page)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div ref={headRef} className={`fade-up ${headVisible ? 'visible' : ''}`} style={{ marginBottom: 52 }}>
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: 14 }}>● Client Love</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}>
              What Clients Say
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 360, fontSize: '0.875rem', lineHeight: 1.7 }}>
              Real feedback from real business owners across 12+ countries. No fluff, no fabrication.
            </p>
          </div>
        </div>

        <div ref={swiperRef} className="swiper" style={{ paddingBottom: 48 }}>
          <div className="swiper-wrapper">
            {testimonials.map(t => (
              <div key={t.id} className="swiper-slide" style={{ height: 'auto' }}>
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ t }) {
  return (
    <div className="testimonial-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <span className="quote-mark">"</span>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.78, flex: 1, marginBottom: 24 }}>
        {t.text}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 20, borderTop: '1px solid var(--border-light)' }}>
        <img src={t.avatar} alt={t.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border-light)', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)' }}>{t.name}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: 1 }}>
            {t.role} at {t.company}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 1 }}>
          {[...Array(t.rating)].map((_, i) => <Star key={i} size={11} fill="#222" color="#222" />)}
        </div>
      </div>
    </div>
  )
}
