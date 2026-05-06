import { useState } from 'react'
import { ArrowUpRight, CheckCircle } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const SERVICES = ['Business Website', 'eCommerce Store', 'Web Application', 'UI/UX Design', 'SEO & Marketing', 'Website Redesign', 'Other']
const BUDGETS = ['Under ₹15,000 / $299', '₹15k–₹35k / $299–$699', '₹35k–₹75k / $699–$1499', '₹75k+ / $1499+', "Let's discuss"]

export default function ContactSection({ standalone = false }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' })
  const [headRef, headVisible] = useScrollReveal()

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1600))
    setLoading(false)
    setSubmitted(true)
    toast.success("Message sent! I'll reply within 24 hours.")
  }

  return (
    <section id="contact" className="section-dark" style={{ paddingTop: standalone ? 48 : undefined }}>
      <div className="container">
        {!standalone && (
          <div ref={headRef} className={`fade-up ${headVisible ? 'visible' : ''}`} style={{ marginBottom: 64 }}>
            <div className="section-label" style={{ display: 'inline-flex', marginBottom: 14 }}>● Let's Work Together</div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--c-white)', lineHeight: 1.05 }}>
              Got an Idea?<br /><em>Let's Build It.</em>
            </h2>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 56, alignItems: 'start' }}>
          {/* Left info */}
          <ContactInfo />
          {/* Right form */}
          <div>
            {submitted ? <SuccessState /> : <ContactForm form={form} onChange={onChange} onSubmit={onSubmit} loading={loading} />}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactInfo() {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={`fade-up ${visible ? 'visible' : ''}`}>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 400, color: 'var(--c-white)', marginBottom: 16, letterSpacing: '-0.02em' }}>
        Start with a Free Call
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 36, fontSize: '0.875rem' }}>
        Whether you have a fully fleshed idea or just a rough concept, reach out.
        I'll help you figure out the right approach, timeline, and budget — for free.
      </p>

      {/* Info items */}
      {[
        { label: 'Location', value: 'Kolkata, West Bengal, India' },
        { label: 'Email', value: 'hello@ashiniqbal.com' },
        { label: 'Free Call', value: '30-min consultation, no commitment' },
        { label: 'WhatsApp', value: 'Available for quick queries' },
      ].map((item) => (
        <div key={item.label} style={{ padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', gap: 16 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', alignSelf: 'center', flexShrink: 0 }}>
            {item.label}
          </span>
          <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', textAlign: 'right' }}>{item.value}</span>
        </div>
      ))}

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 36 }}>
        {[
          { n: '< 24h', l: 'Response time' },
          { n: '100%', l: 'Client satisfaction' },
          { n: 'Free', l: '30-min consultation' },
          { n: 'NDA', l: 'Available on request' },
        ].map(s => (
          <div key={s.l}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--c-white)', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactForm({ form, onChange, onSubmit, loading }) {
  return (
    <form onSubmit={onSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div className="form-group" style={{ gridColumn: '1 / -1' }}>
          <label>Your Name *</label>
          <input className="form-control" type="text" name="name" placeholder="John Smith" value={form.name} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input className="form-control" type="email" name="email" placeholder="john@company.com" value={form.email} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label>Phone / WhatsApp</label>
          <input className="form-control" type="tel" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={onChange} />
        </div>
        <div className="form-group">
          <label>Company / Business</label>
          <input className="form-control" type="text" name="company" placeholder="Your business name" value={form.company} onChange={onChange} />
        </div>
        <div className="form-group">
          <label>Service Needed *</label>
          <select className="form-control" name="service" value={form.service} onChange={onChange} required style={{ appearance: 'none' }}>
            <option value="">Select a service...</option>
            {SERVICES.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="form-group" style={{ gridColumn: '1 / -1' }}>
          <label>Budget Range</label>
          <select className="form-control" name="budget" value={form.budget} onChange={onChange} style={{ appearance: 'none' }}>
            <option value="">Select range...</option>
            {BUDGETS.map(b => <option key={b}>{b}</option>)}
          </select>
        </div>
        <div className="form-group" style={{ gridColumn: '1 / -1' }}>
          <label>Tell me about your project *</label>
          <textarea className="form-control" name="message" placeholder="Describe your idea, goals, and what success looks like for you..." value={form.message} onChange={onChange} required />
        </div>
      </div>

      <button type="submit" disabled={loading}
        className="btn-dark"
        style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '14px', opacity: loading ? 0.7 : 1 }}>
        {loading ? (
          <><div style={{ width: 16, height: 16, border: '2px solid rgba(0,0,0,0.2)', borderTopColor: 'var(--c-black)', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} /> Sending...</>
        ) : (
          <>Send Message <ArrowUpRight size={15} /></>
        )}
      </button>

      <p style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', marginTop: 14 }}>
        🔒 Your information is safe. I respond within 24 hours.
      </p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </form>
  )
}

function SuccessState() {
  return (
    <div style={{ padding: '48px 32px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--r-xl)', background: 'rgba(255,255,255,0.03)' }}>
      <CheckCircle size={40} color="#3BB77E" style={{ margin: '0 auto 16px' }} />
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--c-white)', marginBottom: 12 }}>Message Received!</h3>
      <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24, fontSize: '0.875rem' }}>
        I'll review your project and get back to you within <strong style={{ color: 'rgba(255,255,255,0.8)' }}>24 hours</strong>.
      </p>
      <a href="https://wa.me/917000000000" target="_blank" rel="noopener noreferrer" className="btn-dark" style={{ display: 'inline-flex' }}>
        💬 WhatsApp me directly
      </a>
    </div>
  )
}
