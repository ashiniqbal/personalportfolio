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
      <section style={{ paddingTop: 140, paddingBottom: 56, borderBottom: '1px solid var(--border-light)', background: 'var(--bg-page)' }}>
        <div className="container">
          <div ref={headRef} className={`fade-up ${headVisible ? 'visible' : ''}`}>
            <div className="section-label" style={{ display: 'inline-flex', marginBottom: 16 }}>● Currently accepting new clients</div>
            <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 1, marginBottom: 20 }}>
              Let's Build<br /><em>Together</em>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 480, fontSize: '0.95rem', lineHeight: 1.75 }}>
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
