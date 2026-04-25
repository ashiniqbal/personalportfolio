import { useState } from 'react'
import { Check, X, Zap } from 'lucide-react'
import { pricingINR, pricingUSD } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function PricingSection() {
  const [currency, setCurrency] = useState('INR')
  const [headRef, headVisible] = useScrollReveal()
  const plans = currency === 'INR' ? pricingINR : pricingUSD

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="pricing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div
          ref={headRef}
          className={`fade-up ${headVisible ? 'visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="section-label">Transparent Pricing</div>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginBottom: 16 }}>
            Honest Prices for <span className="gradient-text">Real Businesses</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.7 }}>
            No hidden fees. No surprise invoices. What you see is what you pay.
            Every package includes my full attention from day one.
          </p>

          {/* Currency Toggle */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="pricing-toggle">
              <button
                className={`pricing-toggle-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                🇮🇳 INR (₹)
              </button>
              <button
                className={`pricing-toggle-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                🌍 USD ($)
              </button>
            </div>
          </div>
        </div>

        {/* Plans */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
          alignItems: 'start',
        }}>
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} delay={i * 0.1} onCta={scrollToContact} />
          ))}
        </div>

        {/* Custom quote note */}
        <div style={{
          textAlign: 'center',
          marginTop: 48,
          padding: '24px 32px',
          background: 'var(--bg-glass)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          maxWidth: 600,
          margin: '48px auto 0',
        }}>
          <Zap size={20} color="var(--accent-warm)" style={{ marginBottom: 8 }} />
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Need something custom? Let's talk.{' '}
            <button
              onClick={scrollToContact}
              style={{ color: 'var(--accent-primary)', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer', background: 'none', border: 'none', fontFamily: 'inherit', fontSize: 'inherit' }}
            >
              Book a free 30-minute call
            </button>{' '}
            and I'll give you a tailored quote within 24 hours.
          </p>
        </div>
      </div>
    </section>
  )
}

function PricingCard({ plan, delay, onCta }) {
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s`, position: 'relative' }}
    >
      {plan.popular && <div className="popular-badge">⭐ Most Popular</div>}
      <div
        className={plan.popular ? 'pricing-card-popular' : ''}
        style={{
          padding: '36px 28px',
          borderRadius: 'var(--radius-xl)',
          background: plan.popular ? 'linear-gradient(135deg, rgba(124,106,255,0.08), rgba(168,85,247,0.05))' : 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          transition: 'all 0.3s ease',
          height: '100%',
        }}
      >
        {/* Plan name */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: plan.color,
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: 8,
        }}>
          {plan.name}
        </div>
        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: 24 }}>
          {plan.tagline}
        </div>

        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 8 }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.4rem, 5vw, 3rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: 1,
          }}>
            {plan.currency}{plan.price.toLocaleString()}
          </span>
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 28, fontFamily: 'var(--font-mono)' }}>
          Starting price · Varies by scope
        </div>

        <div className="glow-line" style={{ marginBottom: 28 }} />

        {/* Features */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
          {plan.features.map(f => (
            <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <Check size={15} color={plan.color} style={{ flexShrink: 0, marginTop: 2 }} />
              {f}
            </div>
          ))}
          {plan.notIncluded.map(f => (
            <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--text-muted)', opacity: 0.5 }}>
              <X size={15} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: 2 }} />
              {f}
            </div>
          ))}
        </div>

        <button
          onClick={onCta}
          className={plan.popular ? 'btn-primary' : 'btn-outline'}
          style={{ width: '100%', justifyContent: 'center' }}
        >
          {plan.cta} →
        </button>
      </div>
    </div>
  )
}
