import { useState, useEffect } from "react"

import img1 from "../assets/company1.jpg"
import img2 from "../assets/company2.jpg"
import img3 from "../assets/company3.jpg"
import img4 from "../assets/company4.jpg"
import img5 from "../assets/company5.jpg"
import img6 from "../assets/company6.jpg"

const slides = [img1, img2, img3, img4, img5, img6]

const heroMessages = [
  "Compassionate Adult Family Care",
  "A Safe & Comfortable Home",
  "Professional 24/7 Support",
  "Where Care Feels Like Family"
]

function Hero({ openTour }) {

  const [current, setCurrent] = useState(0)


  /* Image auto slider */

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)

  }, [])



  return (

    <section id="home" className="relative h-screen overflow-hidden">

      {/* Background images */}

      {slides.map((slide, index) => (

        <img
          key={index}
          src={slide}
          alt="Beverly Park Adult Family Home"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2000ms] 
          ${index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
        />

      ))}

      {/* Dark overlay */}

      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-8">

        <div className="max-w-3xl">

          {/* Title */}

          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">
            Beverly Park Adult Family Home
          </h1>

          {/* Animated message */}

          <p
            key={current}
            className="text-xl md:text-2xl mb-10 opacity-0 animate-fadeIn"
          >
            {heroMessages[current % heroMessages.length]}
          </p>

          {/* CTA Buttons */}

          <div className="flex gap-4 justify-center flex-wrap">

            <button
              onClick={() =>
                document.getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#d68760] px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition"
            >
              Contact Us
            </button>

            <button
              onClick={openTour}
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Schedule Tour
            </button>

          </div>

        </div>

      </div>

      {/* Navigation dots */}

      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3">

        {slides.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition 
            ${index === current ? "bg-[#d68760]" : "bg-white/50"}`}
          />

        ))}

      </div>

    </section>

  )

}

export default Hero