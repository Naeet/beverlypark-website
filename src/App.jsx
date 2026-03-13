import { useState, useEffect } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutPremium from "./components/AboutPremium"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import Contactsection from "./components/Contactsection"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"
import Stats from "./components/Stats"
import Testimonials from "./components/Testimonials"
import ScrollProgress from "./components/ScrollProgress"
import CallButton from "./components/CallButton"
import TourModal from "./components/TourModal"

import AOS from "aos"
import "aos/dist/aos.css"

function App() {

  /* Tour modal state */

  const [tourOpen, setTourOpen] = useState(false)

  /* Initialize AOS animations */

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <>

      <ScrollProgress />

      <Navbar openTour={() => setTourOpen(true)} />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d68760]/40 to-transparent"></div>

      <Hero openTour={() => setTourOpen(true)} />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d68760]/40 to-transparent"></div>

      <AboutPremium />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d68760]/40 to-transparent"></div>

      <Stats />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d68760]/40 to-transparent"></div>

      <Services />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#174753]/40 to-transparent"></div>

      <Gallery />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#174753]/40 to-transparent"></div>

      <Testimonials />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#174753]/40 to-transparent"></div>

      <Contactsection />

      <CallButton />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d68760]/40 to-transparent"></div>

      <Footer />

      <BackToTop />

      {/* Tour Request Modal */}

      <TourModal
        isOpen={tourOpen}
        onClose={() => setTourOpen(false)}
      />

    </>
  )
}

export default App