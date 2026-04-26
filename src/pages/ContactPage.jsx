import { Helmet } from 'react-helmet-async'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ContactSection from '../components/ContactSection'

export default function ContactPage() {
  const [headRef, headVisible] = useScrollReveal()

  return (
    <>
      <Helmet>
        <title>Contact | Book a Free Consultation with Ashin Iqbal</title>
        <meta name="description" content="Book a free 30-minute consultation with Ashin Iqbal — web developer & designer from Kolkata. Discuss your project, get an estimate, no commitment needed." />
        <link rel="canonical" href="https://ashiniqbal.com/contact" />
      </Helmet>

      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 40, position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="grid-bg" />
        <div className="hero-glow" style={{ opacity: 0.4 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div ref={headRef} className={`fade-up ${headVisible ? 'visible' : ''}`}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <div className="availability-badge">
                <div className="availability-dot" />
                Currently accepting new clients
              </div>
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', marginBottom: 20, letterSpacing: '-0.03em' }}>
              Let's Build Something <span className="gradient-text">Exceptional</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Book a free 30-minute consultation — no commitment, no pressure.
              Just an honest conversation about your project and how I can help.
            </p>
          </div>
        </div>
      </section>

      <ContactSection standalone />
    </>
  )
}
