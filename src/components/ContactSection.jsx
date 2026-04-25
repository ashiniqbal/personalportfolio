import { useState } from 'react'
import { Send, Calendar, MapPin, Mail, MessageSquare, User, Phone, Building2, ChevronDown, CheckCircle } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import toast from 'react-hot-toast'

const BUDGET_OPTIONS = ['Under ₹15,000 / $299', '₹15k–₹35k / $299–$699', '₹35k–₹75k / $699–$1499', '₹75k+ / $1499+', 'Let\'s discuss']
const SERVICE_OPTIONS = ['Business Website', 'eCommerce Store', 'Web Application', 'UI/UX Design', 'SEO & Marketing', 'Website Redesign', 'Other']

export default function ContactSection() {
  const [headRef, headVisible] = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    service: '', budget: '', message: '', timeline: ''
  })

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate submission
    await new Promise(r => setTimeout(r, 1800))
    setLoading(false)
    setSubmitted(true)
    toast.success('Message sent! I\'ll reply within 24 hours. 🚀')
  }

  return (
    <section id="contact">
      <div className="container">
        <div
          ref={headRef}
          className={`fade-up ${headVisible ? 'visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="section-label">Let's Work Together</div>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: 16 }}>
            Got an Idea? <span className="gradient-text">Let's Build It</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Book a free 30-minute consultation — no commitment, no pressure. Just an honest conversation
            about your project and how I can help.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 48,
          alignItems: 'start',
        }}>
          {/* Left - Info */}
          <ContactInfo />

          {/* Right - Form */}
          <div>
            {submitted ? (
              <SuccessState />
            ) : (
              <ContactForm form={form} onChange={onChange} onSubmit={onSubmit} loading={loading} />
            )}
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
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: 8 }}>
        Start with a Free Call
      </h3>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 32 }}>
        Whether you have a fully fleshed idea or just a rough concept, reach out. I'll help you figure out
        the right approach, timeline, and budget — for free.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
        {[
          { icon: <MapPin size={18} />, label: 'Location', value: 'Kolkata, West Bengal, India' },
          { icon: <Mail size={18} />, label: 'Email', value: 'hello@ashiniqbal.com' },
          { icon: <Calendar size={18} />, label: 'Free Call', value: 'Book a 30-min consultation' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{
              width: 44, height: 44,
              borderRadius: 'var(--radius-md)',
              background: 'rgba(124,106,255,0.1)',
              border: '1px solid rgba(124,106,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--accent-primary)',
              flexShrink: 0,
            }}>
              {item.icon}
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: 2, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {item.label}
              </div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick stats */}
      <div style={{
        padding: '20px 24px',
        background: 'var(--bg-glass)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
      }}>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: 12, letterSpacing: '0.05em' }}>
          RESPONSE COMMITMENT
        </div>
        {[
          ['⚡', 'Reply within 24 hours'],
          ['🎯', 'Free project estimate'],
          ['📞', '30-min free consultation'],
          ['🔒', 'NDA available on request'],
        ].map(([icon, text]) => (
          <div key={text} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '6px 0', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            <span>{icon}</span> {text}
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactForm({ form, onChange, onSubmit, loading }) {
  return (
    <form onSubmit={onSubmit} style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(24px, 4vw, 40px)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div className="form-group" style={{ gridColumn: '1 / -1' }}>
          <label>Your Name *</label>
          <div style={{ position: 'relative' }}>
            <User size={15} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              className="form-control"
              style={{ paddingLeft: 38 }}
              type="text"
              name="name"
              placeholder="John Smith"
              value={form.name}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email *</label>
          <div style={{ position: 'relative' }}>
            <Mail size={15} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              className="form-control"
              style={{ paddingLeft: 38 }}
              type="email"
              name="email"
              placeholder="john@company.com"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Phone / WhatsApp</label>
          <div style={{ position: 'relative' }}>
            <Phone size={15} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              className="form-control"
              style={{ paddingLeft: 38 }}
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Company / Business</label>
          <div style={{ position: 'relative' }}>
            <Building2 size={15} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              className="form-control"
              style={{ paddingLeft: 38 }}
              type="text"
              name="company"
              placeholder="Your business name"
              value={form.company}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Service Needed *</label>
          <div style={{ position: 'relative' }}>
            <select
              className="form-control"
              name="service"
              value={form.service}
              onChange={onChange}
              required
              style={{ appearance: 'none', paddingRight: 36 }}
            >
              <option value="">Select a service...</option>
              {SERVICE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            <ChevronDown size={15} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
          </div>
        </div>

        <div className="form-group">
          <label>Budget Range</label>
          <div style={{ position: 'relative' }}>
            <select
              className="form-control"
              name="budget"
              value={form.budget}
              onChange={onChange}
              style={{ appearance: 'none', paddingRight: 36 }}
            >
              <option value="">Select range...</option>
              {BUDGET_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            <ChevronDown size={15} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
          </div>
        </div>

        <div className="form-group" style={{ gridColumn: '1 / -1' }}>
          <label>Tell Me About Your Project *</label>
          <textarea
            className="form-control"
            name="message"
            placeholder="Describe your idea, goals, and what success looks like for you..."
            value={form.message}
            onChange={onChange}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn-primary"
        disabled={loading}
        style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '16px', opacity: loading ? 0.7 : 1 }}
      >
        {loading ? (
          <>
            <div style={{
              width: 18, height: 18,
              border: '2px solid rgba(255,255,255,0.3)',
              borderTopColor: '#fff',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }} />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message & Book Free Call
          </>
        )}
      </button>

      <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 16, fontFamily: 'var(--font-mono)' }}>
        🔒 Your information is safe. I respond within 24 hours.
      </p>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </form>
  )
}

function SuccessState() {
  return (
    <div style={{
      padding: 48,
      textAlign: 'center',
      background: 'var(--bg-card)',
      border: '1px solid var(--border-accent)',
      borderRadius: 'var(--radius-xl)',
    }}>
      <div style={{
        width: 72, height: 72,
        borderRadius: '50%',
        background: 'rgba(34,197,94,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 20px',
      }}>
        <CheckCircle size={36} color="#22c55e" />
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: 12 }}>
        Message Received! 🚀
      </h3>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
        Thank you for reaching out. I'll review your project details and get back to you
        within <strong style={{ color: 'var(--text-primary)' }}>24 hours</strong> to schedule your free consultation.
      </p>
      <div style={{ marginTop: 24 }}>
        <a
          href="https://wa.me/917000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ display: 'inline-flex', gap: 8 }}
        >
          💬 WhatsApp me directly
        </a>
      </div>
    </div>
  )
}
