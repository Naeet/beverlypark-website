import { useState, useEffect } from "react"

import img1 from "../assets/company1.jpg"
import img2 from "../assets/company2.jpg"
import img3 from "../assets/company3.jpg"
import img4 from "../assets/company4.jpg"
import img5 from "../assets/company5.jpg"
import img6 from "../assets/company6.jpg"

const images = [
  { src: img1, title: "Front Exterior" },
  { src: img2, title: "Living Area" },
  { src: img3, title: "Dining Space" },
  { src: img4, title: "Private Bedroom" },
  { src: img5, title: "Comfortable Interior" },
  { src: img6, title: "Relaxing Environment" }
]

function Gallery() {

  const [current, setCurrent] = useState(null)

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const close = () => {
    setCurrent(null)
  }

  useEffect(() => {

    const handleKey = (e) => {

      if (current === null) return

      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "Escape") close()

    }

    window.addEventListener("keydown", handleKey)

    return () => window.removeEventListener("keydown", handleKey)

  }, [current])

  return (

    <section id="gallery" className="py-28 px-6 md:px-16 bg-[radial-gradient(circle_at_top,_#faf7f5,_white)]">

      <div className="max-w-6xl mx-auto">

        {/* Section header */}

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-[#174753] mb-4">
            Our <span className="text-[#d68760]">Home</span>
          </h2>

          <p className="text-[#6b7a7f] max-w-2xl mx-auto">
            Take a look inside our warm and welcoming home designed to provide
            comfort, safety, and peace of mind.
          </p>

        </div>

        {/* Gallery Grid */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[220px]">

          {images.slice(0,5).map((img, index) => (

            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`group relative overflow-hidden rounded-xl shadow-md cursor-pointer
              ${index === 0 ? "col-span-2 row-span-2" : ""}`}
            >

              <img
                src={img.src}
                className="w-full h-full object-cover brightness-95 group-hover:brightness-75 group-hover:scale-110 group-hover:rotate-[0.5deg] transition duration-500"
              />

              {/* Gradient overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">

                <p className="text-white text-lg font-semibold">
                  {img.title}
                </p>

              </div>

              {/* +X more overlay */}

              {index === 4 && images.length > 5 && (

                <div className="absolute inset-0 bg-[#174753]/80 flex items-center justify-center text-white text-3xl font-bold">

                  +{images.length - 5}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX */}

      {current !== null && (

        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center">

          {/* Previous */}

          <button
            onClick={prev}
            className="absolute left-6 md:left-12 text-white text-5xl hover:text-[#d68760] hover:scale-125 transition"
          >
            ‹
          </button>

          {/* Image */}

          <div className="flex flex-col items-center">

            <img
              src={images[current].src}
              className="object-contain max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl transition duration-500"
            />

            <p className="text-white mt-6 text-lg opacity-90">
              {images[current].title}
            </p>

          </div>

          {/* Next */}

          <button
            onClick={next}
            className="absolute right-6 md:right-12 text-white text-5xl hover:text-[#d68760] hover:scale-125 transition"
          >
            ›
          </button>

          {/* Close */}

          <button
            onClick={close}
            className="absolute top-6 right-6 text-white text-3xl hover:text-[#d68760] transition"
          >
            ✕
          </button>

        </div>

      )}

    </section>

  )

}

export default Gallery