import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import { Problem, JustUse } from './components/Sections.jsx'
import { LogoWall, FeatureRows } from './components/Light.jsx'
import {
  Testimonial,
  FeatureGrid,
  Steps,
  Security,
  CTA,
  FAQ,
  Footer,
} from './components/Paper.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
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
      </main>
      <Footer />
    </>
  )
}
