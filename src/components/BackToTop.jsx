import { useState, useEffect } from "react"

function BackToTop() {

  const [show, setShow] = useState(false)

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 400) {
        setShow(true)
      } else {
        setShow(false)
      }

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  if (!show) return null

  return (

    <button
      onClick={() => window.scrollTo({ top: 0 })}
      className="fixed bottom-8 right-8 bg-[#174753] text-white px-4 py-3 rounded-full shadow-lg hover:scale-110 transition"
    >
      ↑
    </button>

  )

}

export default BackToTop