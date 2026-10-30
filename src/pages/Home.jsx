import Hero from '../components/Hero.jsx'
import { Problem, JustUse } from '../components/Sections.jsx'
import { LogoWall, FeatureRows } from '../components/Light.jsx'
import {
  Testimonial,
  FeatureGrid,
  Steps,
  Security,
  CTA,
  FAQ,
} from '../components/Paper.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <JustUse />
      <LogoWall />
      <FeatureRows />
      <Testimonial />
      <FeatureGrid />
      <Steps />
      <Security />
      <CTA />
      <FAQ />
    </>
  )
}