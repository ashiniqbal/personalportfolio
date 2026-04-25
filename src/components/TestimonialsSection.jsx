import { useEffect, useRef } from 'react'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function TestimonialsSection() {
  const [headRef, headVisible] = useScrollReveal()
  const swiperRef = useRef(null)

  useEffect(() => {
    // Dynamically import Swiper to avoid SSR issues
    let swiperInstance = null

    const initSwiper = async () => {
      const { Swiper } = await import('swiper')
      const { Pagination, Autoplay, A11y } = await import('swiper/modules')

      // Import Swiper CSS
      await import('swiper/css')
      await import('swiper/css/pagination')

      if (swiperRef.current) {
        swiperInstance = new Swiper(swiperRef.current, {
          modules: [Pagination, Autoplay, A11y],
          slidesPerView: 1,
          spaceBetween: 24,
          loop: true,
          autoplay: { delay: 5000, disableOnInteraction: false },
          pagination: { el: '.swiper-pagination', clickable: true },
          breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          },
          a11y: { enabled: true },
        })
      }
    }

    initSwiper()
    return () => { if (swiperInstance) swiperInstance.destroy() }
  }, [])

  return (
    <section id="testimonials" style={{ background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div className="container">
        <div
          ref={headRef}
          className={`fade-up ${headVisible ? 'visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="section-label">Client Love</div>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginBottom: 16 }}>
            What Clients Say <span className="gradient-text">About Working With Me</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto' }}>
            Real feedback from real business owners across 12+ countries. No fluff, no fabrication.
          </p>
        </div>

        {/* Swiper */}
        <div ref={swiperRef} className="swiper" style={{ paddingBottom: 48, overflow: 'hidden' }}>
          <div className="swiper-wrapper">
            {testimonials.map(t => (
              <div key={t.id} className="swiper-slide" style={{ height: 'auto' }}>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
          <div className="swiper-pagination" style={{ bottom: 0 }} />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card" style={{ height: '100%' }}>
      {/* Stars */}
      <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
        ))}
      </div>

      {/* Quote */}
      <p style={{
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.75,
        marginBottom: 24,
        flex: 1,
      }}>
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          style={{
            width: 44, height: 44,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid var(--border-accent)',
          }}
        />
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            {testimonial.name}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            {testimonial.role} · {testimonial.company}
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 1 }}>
            {testimonial.location}
          </div>
        </div>
      </div>
    </div>
  )
}
