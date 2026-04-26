import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import WorkSection from '../components/WorkSection'
import AboutSection from '../components/AboutSection'
import ToolsSection from '../components/ToolsSection'
import ProcessSection from '../components/ProcessSection'
import TestimonialsSection from '../components/TestimonialsSection'
import PricingSection from '../components/PricingSection'
import BlogSection from '../components/BlogSection'
import MarqueeClients from '../components/MarqueeClients'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Ashin Iqbal | Best Freelance Web Developer & Designer in Kolkata, India</title>
        <meta name="description" content="Ashin Iqbal – 5+ years building modern business websites, eCommerce stores & web apps. Based in Kolkata, West Bengal. Book a FREE 30-min consultation today!" />
        <link rel="canonical" href="https://ashiniqbal.com" />
      </Helmet>

      <HeroSection />
      <MarqueeClients />
      <WorkSection />
      <AboutSection />
      <ToolsSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogSection limit={6} />
      <HomeCTA />
    </>
  )
}

function HomeCTA() {
  const [ref, visible] = useScrollReveal()
  return (
    <section>
      <div className="container">
        <div
          ref={ref}
          className={`fade-up ${visible ? 'visible' : ''}`}
          style={{
            textAlign: 'center',
            padding: 'clamp(48px, 7vw, 96px) clamp(24px, 5vw, 72px)',
            borderRadius: 'var(--radius-xl)',
            background: 'linear-gradient(135deg, rgba(124,106,255,0.1) 0%, rgba(168,85,247,0.06) 50%, rgba(6,182,212,0.08) 100%)',
            border: '1px solid var(--border-accent)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Glow orb */}
          <div style={{
            position: 'absolute', width: 400, height: 400, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,106,255,0.15), transparent)',
            left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <div className="availability-badge">
                <div className="availability-dot" />
                Currently accepting new clients
              </div>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: 16,
              lineHeight: 1.1,
            }}>
              Ready to Build Something<br />
              <span className="gradient-text">the World Will Notice?</span>
            </h2>

            <p style={{
              color: 'var(--text-secondary)',
              maxWidth: 520, margin: '0 auto 36px',
              fontSize: '1.05rem', lineHeight: 1.7,
            }}>
              From Kolkata to the world — let's create a digital presence that works
              as hard as you do. Book your free 30-minute consultation today.
            </p>

            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
                <Sparkles size={18} /> Book Free Consultation
              </Link>
              <Link to="/work" className="btn-outline" style={{ fontSize: '1rem', padding: '15px 35px' }}>
                See My Work <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
