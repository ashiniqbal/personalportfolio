import { useState } from 'react'
import { Check, Minus, ArrowUpRight } from 'lucide-react'
import { pricingINR, pricingUSD } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

export default function PricingSection() {
  const [currency, setCurrency] = useState('INR')
  const [headRef, headVisible] = useScrollReveal()
  const plans = currency === 'INR' ? pricingINR : pricingUSD

  return (
    <section style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Header */}
        <div ref={headRef} className={`fade-up ${headVisible ? 'visible' : ''}`} style={{ marginBottom: 52 }}>
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: 14 }}>● Transparent Pricing</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}>
              Honest Prices for<br /><em>Real Businesses</em>
            </h2>
            {/* Currency toggle */}
            <div style={{ display: 'flex', background: 'var(--bg-page)', border: '1px solid var(--border-light)', borderRadius: 'var(--r-full)', padding: 4, gap: 0 }}>
              {['INR', 'USD'].map(cur => (
                <button key={cur} onClick={() => setCurrency(cur)} className={`pricing-toggle-btn ${currency === cur ? 'active' : ''}`}>
                  {cur === 'INR' ? '🇮🇳 INR (₹)' : '🌍 USD ($)'}
                </button>
              ))}
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 480, marginTop: 12, fontSize: '0.875rem', lineHeight: 1.7 }}>
            No hidden fees. No surprise invoices. What you see is what you pay.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20, alignItems: 'start' }}>
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} delay={i * 0.1} />
          ))}
        </div>

        {/* Custom note */}
        <div style={{
          marginTop: 40, padding: '24px 28px',
          background: 'var(--bg-page)', border: '1px solid var(--border-light)',
          borderRadius: 'var(--r-lg)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 16,
        }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Need something custom?{' '}
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Book a free 30-minute call</span>{' '}
            and I'll give you a tailored quote within 24 hours.
          </p>
          <Link to="/contact" className="link-arrow" style={{ flexShrink: 0 }}>
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </section>
  )
}

function PricingCard({ plan, delay }) {
  const [ref, visible] = useScrollReveal()
  const isPopular = plan.popular

  return (
    <div
      ref={ref}
      className={`pricing-card fade-up ${visible ? 'visible' : ''} ${isPopular ? 'popular' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {isPopular && (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          padding: '3px 10px', borderRadius: 'var(--r-full)',
          background: 'rgba(255,255,255,0.15)',
          border: '1px solid rgba(255,255,255,0.2)',
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
          color: 'rgba(255,255,255,0.8)', marginBottom: 16,
        }}>
          ● Most Popular
        </div>
      )}

      {/* Plan name */}
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 600,
        color: isPopular ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)',
        letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8,
      }}>
        {plan.name}
      </div>
      <div style={{ fontSize: '0.82rem', color: isPopular ? 'rgba(255,255,255,0.5)' : 'var(--text-secondary)', marginBottom: 24 }}>
        {plan.tagline}
      </div>

      {/* Price */}
      <div style={{ marginBottom: 8 }}>
        <span style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.4rem, 5vw, 3.2rem)',
          fontWeight: 400,
          color: isPopular ? 'var(--c-white)' : 'var(--text-primary)',
          lineHeight: 1,
          letterSpacing: '-0.03em',
        }}>
          {plan.currency}{plan.price.toLocaleString()}
        </span>
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
        color: isPopular ? 'rgba(255,255,255,0.35)' : 'var(--text-muted)',
        marginBottom: 28,
      }}>
        Starting price · Varies by scope
      </div>

      <hr style={{ border: 'none', height: '1px', background: isPopular ? 'rgba(255,255,255,0.12)' : 'var(--border-light)', marginBottom: 24 }} />

      {/* Features */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 28 }}>
        {plan.features.map(f => (
          <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.845rem', color: isPopular ? 'rgba(255,255,255,0.75)' : 'var(--text-secondary)' }}>
            <Check size={14} style={{ flexShrink: 0, marginTop: 2, color: isPopular ? 'rgba(255,255,255,0.8)' : 'var(--text-primary)' }} />
            {f}
          </div>
        ))}
        {plan.notIncluded.map(f => (
          <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.845rem', color: isPopular ? 'rgba(255,255,255,0.25)' : 'var(--text-muted)', opacity: 0.5 }}>
            <Minus size={14} style={{ flexShrink: 0, marginTop: 2 }} />
            {f}
          </div>
        ))}
      </div>

      <Link
        to="/contact"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          width: '100%', padding: '12px',
          borderRadius: 'var(--r-full)',
          fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.875rem',
          textDecoration: 'none',
          transition: 'all var(--t-fast)',
          background: isPopular ? 'rgba(255,255,255,0.12)' : 'var(--text-primary)',
          color: isPopular ? 'var(--c-white)' : 'var(--bg-page)',
          border: `1px solid ${isPopular ? 'rgba(255,255,255,0.2)' : 'var(--text-primary)'}`,
        }}
        onMouseEnter={e => {
          if (isPopular) { e.currentTarget.style.background = 'rgba(255,255,255,0.2)' }
          else { e.currentTarget.style.background = 'var(--c-grey)'; e.currentTarget.style.borderColor = 'var(--c-grey)' }
        }}
        onMouseLeave={e => {
          if (isPopular) { e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }
          else { e.currentTarget.style.background = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--text-primary)' }
        }}
      >
        {plan.cta} <ArrowUpRight size={14} />
      </Link>
    </div>
  )
}
