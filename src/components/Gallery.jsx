import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"

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
  const [fade, setFade] = useState(false)
  const [zoom, setZoom] = useState(1)
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)
  const pinchStartDistance = useRef(null)

  const next = () => setCurrent((prev) => (prev + 1) % images.length)
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)
  const close = () => {
    setFade(false)
    setZoom(1)
    setTimeout(() => setCurrent(null), 300)
  }

  // Keyboard navigation + zoom shortcuts
  useEffect(() => {
    const handleKey = (e) => {
      if (current === null) return
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "Escape") close()
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 0.2, 3))
      if (e.key === "-") setZoom((z) => Math.max(z - 0.2, 1))
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [current])

  // Mouse wheel zoom
  useEffect(() => {
    const handleWheel = (e) => {
      if (current === null) return
      e.preventDefault()
      if (e.deltaY < 0) {
        // scroll up → zoom in
        setZoom((z) => Math.min(z + 0.1, 3))
      } else {
        // scroll down → zoom out
        setZoom((z) => Math.max(z - 0.1, 1))
      }
    }
    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [current])

  // Lock page scroll + hide navbar
  useEffect(() => {
    const navbar = document.getElementById("main-navbar")
    const progress = document.getElementById("scroll-progress")

    if (current !== null) {
      document.body.style.overflow = "hidden"
      if (navbar) {
        navbar.style.pointerEvents = "none"
        navbar.style.opacity = "0"
        navbar.style.transition = "opacity 0.3s"
      }
      if (progress) progress.style.opacity = "0"
      setTimeout(() => setFade(true), 10)
    } else {
      document.body.style.overflow = "auto"
      if (navbar) {
        navbar.style.pointerEvents = "auto"
        navbar.style.opacity = "1"
      }
      if (progress) progress.style.opacity = "1"
      setFade(false)
    }

    return () => {
      document.body.style.overflow = "auto"
      if (navbar) {
        navbar.style.pointerEvents = "auto"
        navbar.style.opacity = "1"
      }
      if (progress) progress.style.opacity = "1"
    }
  }, [current])

  // Swipe & pinch gestures
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) touchStartX.current = e.touches[0].screenX
    else if (e.touches.length === 2) {
      const [t1, t2] = e.touches
      pinchStartDistance.current = Math.hypot(
        t2.screenX - t1.screenX,
        t2.screenY - t1.screenY
      )
    }
  }

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && pinchStartDistance.current) {
      const [t1, t2] = e.touches
      const distance = Math.hypot(t2.screenX - t1.screenX, t2.screenY - t1.screenY)
      const scaleChange = distance / pinchStartDistance.current
      setZoom((z) => Math.min(Math.max(z * scaleChange, 1), 3))
      pinchStartDistance.current = distance
    }
  }

  const handleTouchEnd = (e) => {
    if (e.changedTouches.length === 1 && touchStartX.current !== null) {
      touchEndX.current = e.changedTouches[0].screenX
      const diff = touchStartX.current - touchEndX.current
      const threshold = 50
      if (diff > threshold) next()
      else if (diff < -threshold) prev()
    }
    touchStartX.current = null
    touchEndX.current = null
    pinchStartDistance.current = null
  }

  return (
    <section
      id="gallery"
      className="py-28 px-6 md:px-16 bg-[radial-gradient(circle_at_top,_#faf7f5,_white)]"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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
          {images.slice(0, 5).map((img, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`group relative overflow-hidden rounded-xl shadow-md cursor-pointer
              ${index === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <img
                src={img.src}
                className="w-full h-full object-cover brightness-95
                  group-hover:brightness-75
                  group-hover:scale-110
                  transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <p className="text-white text-lg font-semibold">{img.title}</p>
              </div>
              {index === 4 && images.length > 5 && (
                <div className="absolute inset-0 bg-[#174753]/80 flex items-center justify-center text-white text-3xl font-bold">
                  +{images.length - 5}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {current !== null &&
        createPortal(
          <div
            className={`fixed inset-0 z-[10000] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center px-4
              transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
            onClick={close}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close button */}
            <button
              onClick={(e) => { e.stopPropagation(); close(); }}
              className="absolute top-6 right-6 text-white text-3xl hover:text-[#d68760] transition z-50"
            >
              ✕
            </button>

            {/* Image + title */}
            <div
              className={`flex flex-col items-center justify-center max-w-full max-h-full transform transition-transform duration-300
                ${fade ? "scale-100" : "scale-95"}`}
              onClick={(e) => e.stopPropagation()}
              style={{ transform: `scale(${zoom})` }}
            >
              <img
                src={images[current].src}
                className="max-w-[95vw] max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <p className="text-white mt-4 text-lg opacity-90 text-center">
                {images[current].title}
              </p>
            </div>

            {/* Prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-6 md:left-12 text-white text-5xl hover:text-[#d68760] hover:scale-125 transition z-50"
            >
              ‹
            </button>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-6 md:right-12 text-white text-5xl hover:text-[#d68760] hover:scale-125 transition z-50"
            >
              ›
            </button>
          </div>,
          document.body
        )}
    </section>
  )
}

export default Gallery