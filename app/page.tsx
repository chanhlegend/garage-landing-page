import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { QuickVehicleFinder } from '@/components/quick-vehicle-finder'
import { AboutSection } from '@/components/about-section'
import { FeaturedVehicles } from '@/components/featured-vehicles'
import { FacilitiesSection } from '@/components/facilities-section'
import { WhyChooseUs } from '@/components/why-choose-us'
import { ServicesSection } from '@/components/services-section'
import { CtaSection } from '@/components/cta-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <QuickVehicleFinder />
        <AboutSection />
        <FeaturedVehicles />
        <FacilitiesSection />
        <WhyChooseUs />
        <ServicesSection />
        <CtaSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  )
}
