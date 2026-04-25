import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/HeroSection'
import WorkSection from '../components/WorkSection'
import AboutSection from '../components/AboutSection'
import ToolsSection from '../components/ToolsSection'
import ProcessSection from '../components/ProcessSection'
import TestimonialsSection from '../components/TestimonialsSection'
import PricingSection from '../components/PricingSection'
import BlogSection from '../components/BlogSection'
import ContactSection from '../components/ContactSection'
import MarqueeClients from '../components/MarqueeClients'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Ashin Iqbal | Best Freelance Web Developer & Designer in Kolkata, India</title>
        <meta name="description" content="Ashin Iqbal – 5+ years building modern business websites, eCommerce stores & web apps. Based in Kolkata, West Bengal. Book a FREE 30-min consultation!" />
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
      <ContactSection />
    </>
  )
}
