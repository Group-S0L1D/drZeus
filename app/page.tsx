import { Hero } from "@/components/hero"
import { ConsorcioEliteSection } from "@/components/consorcio-elite-section"
import { HomeEquitySection } from "@/components/home-equity-section"
import { Services } from "@/components/services"
import { LiveStatsSection } from "@/components/live-stats-section"
import { LuxurySection } from "@/components/luxury-section"
import { BenefitsSection } from "@/components/benefits-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      {/*<Stats />
      <ConsorcioEliteSection /> */}
      <HomeEquitySection />
      {/*<Services />*/}
      <LiveStatsSection />
      <LuxurySection />
      <BenefitsSection />
      <WhyChooseUs />
      {/*<Testimonials />*/}
      {/*<CTA />*/}
    </>
  )
}
