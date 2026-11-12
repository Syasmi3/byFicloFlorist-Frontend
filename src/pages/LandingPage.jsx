import AnnouncementBar from '../components/landing/AnnouncementBar'
import Navbar from '../components/landing/Navbar'
import Hero from '../components/landing/Hero'
import OurPromise from '../components/landing/OurPromise'
import BestSeller from '../components/landing/BestSeller'
import HowToOrder from '../components/landing/HowToOrder'
import OurCatalog from '../components/landing/OurCatalog'
import AboutSection from '../components/landing/AboutSection'

export default function LandingPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <OurPromise />
        <BestSeller />
        <HowToOrder />
        <OurCatalog />
        <AboutSection />
      </main>
    </>
  )
}